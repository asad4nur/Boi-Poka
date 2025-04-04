import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, author, bookName, image, rating, tags, category } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div>
                <div className="card bg-base-100 w-96 shadow-sm p-5">
                    <div className="text-start mb-5">
                        <figure className="bg-gray-100 p-5 mb-5">
                            <img
                                className="h-50"
                                src={image}
                                alt={bookName} />
                        </figure>
                        {
                            tags.map(tag => <button className="btn btn mx-2">{tag}</button>)
                        }
                        <div>
                            <h2 className="card-title my-2 font-bold text-2xl">
                                {bookName}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <h3 className="font-normal text-xl">By: {author}</h3>
                        </div>
                    </div>

                    <div className="divider"></div>

                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;