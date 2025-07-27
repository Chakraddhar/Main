import { useParams } from "react-router-dom";
import { Books } from "../utils/mockData";

function Bookdetails(){
    const params=useParams();
    const book=Books.filter(book => book.id==params.id)
    return(
        <>
        <h2>{`Book details for Book with id ${params.id}`}</h2>
        {book.map((book)=>{
            return(
                <>
                <img src={book.coverImage} alt="" width="150px" height="150px"/>
                <h2>{book.title}</h2>
                <h2>{book.author}</h2>
                <h2>{book.description}</h2>
                <h2>{book.price}</h2>
                </>
            )
        })}
        </>
    )
}

export default Bookdetails;