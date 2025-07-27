import "./style.css";

function Book(props){
    return (
        <div className="book-card">
            <h3>{props.bookDetails.title}</h3>
            <p>by {props.bookDetails.author}</p>
            <a href={props.bookDetails.link}>View More</a>
        </div>
    )
}

export default Book;