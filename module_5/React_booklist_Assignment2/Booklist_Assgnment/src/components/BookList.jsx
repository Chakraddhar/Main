import "./style.css";

function BookList(props){
    return (
        <div className="books-card">
            <img src={props.bookdetails.coverImage} alt="" width="200px" height="200px" className="book-cover"/>
        <div className="book-details">
            <h2 className="book-title">{props.bookdetails.title}</h2>
            <p className="book-author">{props.bookdetails.author}</p>
            <p className="book-desc">{props.bookdetails.description}</p>
        </div>
        </div>
    )
}

export default BookList;
