import BookList from "./BookList";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.css";

function Browsebooks() {
    const books = useSelector((state) => state.books); // Get books from Redux
    const [searchText, setSearchText] = useState("");
    const [filteredBooks, setFilteredBooks] = useState(books);

    useEffect(() => {
        setFilteredBooks(books); // Update whenever Redux books change
    }, [books]);

    function handleSearch() {
        const filtered = books.filter((book) =>
            book.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredBooks(filtered);
    }

    return (
        <>
            <div className="search">
                <h2>Search Books</h2>
                <div>
                    <input
                        type="text"
                        className="search-input"
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>

            <div className="bookList">
                {filteredBooks.map((book) => (
                    <Link to={`/browsebooks/${book.id}`} key={book.id}>
                        <BookList bookdetails={book} />
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Browsebooks;