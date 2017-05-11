import React from "react"
import { Link } from "react-router"
import { observer } from "mobx-react"

@observer
export default class Product extends React.Component {
  constructor(props) {
    super(props);
    //this.props.route.bookStore.subscribe(this);
    //This will read books from the server each time user navigates to
    //The product page (a simple way to ensure "updated data")
    this.props.route.bookStore.fetchBooks();
  }

  render() {
    const books = this.props.route.bookStore.books;
    const bookStore = this.props.route.bookStore;
    return (
      <div>
        <h3>All our great books </h3>
        <ul>
          {books.map((book) => <li key={book.id}>
            {book.title} <Link to={`products/details/${book.id}`}>(details)</Link></li>)}
        </ul>
        <p><Link to="products/addBooks">Add book</Link></p>
        <h2> Add Book</h2>

        <input id="bookTitle" type="text" placeholder="Title" />
        <input id="bookInfo" type="text" placeholder="Info" />
        <input id="moreInfo" type="text" placeholder="More info" />
        <button onClick={() => bookStore.newBook(document.getElementById("title"), document.getElementById("bookInfo"), document.getElementById("moreInfo"))}>Add new Book</button>
      </div>
    )
  }
}