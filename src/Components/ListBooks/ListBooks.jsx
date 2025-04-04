import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../../utilities/addToDb";
import Book from "../Book/Book";

const ListBooks = () => {
    const [readList, setReadList] = useState([]);

    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        console.log(storedReadList, allBooks, storedReadListInt);
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))

        setReadList(readBookList);
    }, [])

    return (
        <div>
            <h3>Book List</h3>
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Read Books" />
                <div className="tab-content bg-base-100 border-base-300 p-6">Read Books {readList.length}

                    {
                        readList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Wishlist Books" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6 ">Wishlist Books</div>
            </div>
        </div>
    );
};

export default ListBooks;