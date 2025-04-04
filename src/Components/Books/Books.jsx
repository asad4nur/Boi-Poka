import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('../../../public/booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    console.log(books);
    return (
        <div className="max-w-7xl mx-auto mt-10 text-center font-bold text-3xl">
            <h2>Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 items-center">
                {
                    books.map((book, idx) => <Book key={idx} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;