import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../store/booksSlice";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Addbookpage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        id: "",
        title: "",
        author: "",
        publishedDate: "",
        pages: "",
        coverImage: "",
        description: "",
        price: ""
    });

    const [errors, setErrors] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        const newErrors = {};
        for (let field in formData) {
            if (!formData[field]) {
                newErrors[field] = `${field} is required`;
            }
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            dispatch(addBook(formData));
            navigate("/browsebooks");
        }
    };

    return (
        <div className="add-form-container">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit} className="add-book-form">
                {[
                    { name: "id", label: "ID" },
                    { name: "title", label: "Title" },
                    { name: "author", label: "Author" },
                    { name: "publishedDate", label: "Published Date" },
                    { name: "pages", label: "Pages" },
                    { name: "coverImage", label: "Cover Image URL" },
                    { name: "description", label: "Description" },
                    { name: "price", label: "Price" }
                ].map(({ name, label }) => (
                    <div key={name} className="form-field">
                        <label>{label}:</label>
                        <input
                            type="text"
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                        />
                        {errors[name] && <span className="error">{errors[name]}</span>}
                    </div>
                ))}

                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}

export default Addbookpage;

