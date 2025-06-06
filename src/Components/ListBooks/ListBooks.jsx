import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../../utilities/addToDb";
import Book from "../Book/Book";

const ListBooks = () => {
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState('');

    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        console.log(storedReadList, allBooks, storedReadListInt);
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))

        setReadList(readBookList);
    }, [allBooks])

    const handleSort = sortType => {
        setSort(sortType);

        if(sortType === 'No Of Pages'){
            const sortedReadList = [...readList].sort((a,b)=> a.totalPages - b.totalPages);
            setReadList(sortedReadList);
        }
        if(sortType === 'Ratings'){
            const sortedReadList = [...readList].sort((a,b) => a.rating - b.rating);
            setReadList(sortedReadList);
        }
    }

    return (
        <div>
            <h3>Book List</h3>

            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                    {
                        sort ? `Sort By ${sort}` : 'Sort By'
                    }
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={()=> handleSort('Ratings')}><a>Ratings</a></li>
                    <li onClick={()=> handleSort('No Of Pages')}><a>No Of Pages</a></li>
                </ul>
            </div>

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