import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utilities/addToDb";

const BookDetails = () => {
    const { bookId } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);

    const book = data.find(book => book.bookId === id)

    console.log(book);
    const { image, bookName, author, tags, review, category, totalPages, yearOfPublishing, rating, publisher } = book;

    const handleMarkAsRead = (id) => {
        addToStoredReadList(id);
    }

    return (
        <div className="grid grid-cols-2 m-10 gap-7 max-w-7xl mx-auto">
            <div className="max-w-100 mx-auto">
                <img src={image} alt="" />
            </div>
            <div>
                <h1 className="text-3xl font-bold my-2">{bookName}</h1>
                <h3 className="my-2 text-2xl">By : {author}</h3>
                <div className="border border-gray-200"></div>
                <p className="my-2">{category}</p>
                <div className="border border-gray-200"></div>
                <p className="font-bold py-5"> Review: <span className="font-normal">{review}</span></p>
                <div className="my-5">
                    {
                        tags.map(tag => <button className="btn btn-soft btn-success mx-2"> <p> Tags: {tag}</p></button>)
                    }
                </div>
                <div className="border  border-gray-200 mb-5"></div>
                <div className="grid grid-cols-2 gap-2">
                    <div><p>Number of Pages:</p></div> <div className="font-bold">{totalPages}</div>
                    <div><p>Publisher:</p></div> <div className="font-bold">{publisher}</div>
                    <div><p>Year of Publishing:</p></div> <div className="font-bold">{yearOfPublishing}</div>
                    <div><p>Rating:</p></div> <div className="font-bold">{rating}</div>
                </div>
                <div className="felx mt-10">
                    <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline btn-info mr-5">Read</button>
                    <button className="btn btn-active btn-success">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;