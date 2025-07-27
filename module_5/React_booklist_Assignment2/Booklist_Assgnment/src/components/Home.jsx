import Book from "./Book";
import "./style.css";

function Home(props){
    return (
        <>
        <div className="heading">
            <h1>WELCOME TO HEART LIBRARY</h1>
            <p>Explore books across a variety of categories.</p>
            <h2>Categories</h2>
        </div>
        <div className="categories">
            <h3>Fiction</h3>
            <h3>Non-Fiction</h3>
            <h3>Sci-Fi</h3>
        </div>
        <div>
            <h3>Popular Books:</h3>
        </div>
        <div className="bookList">
        {
            props.booksdata.map((data,index)=>(
            <Book key={index} bookDetails={data}/>
        ))
        }
        </div>
        </>
    )
}

export default Home;