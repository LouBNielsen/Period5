import { observable } from "mobx"


class BookStore {

@observable _books=[];
  constructor() {
 //   this._books = [];
    this.fetchBooks();
 //   this._observer = null;
  }
  get books() {
    return this._books;
  }

 // subscribe(observer) {
 //   this._observer = observer;
 // }

  getBook(id) {
    return this._books.filter((book) => {
      return book.id === Number(id);
    })[0];
  }

  fetchBooks = ()=> {
    fetch("http://localhost:7777/books")
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        this._books = response;
        console.log("Got books from server");
       // if (this._observer) {
       //   this._observer.dataReady();
       // }
      })
  }
}

let store = new BookStore();
export default store;

window.store = store; //på denne både gav vi via google engine push en ny bog til book store.
//window.store.books.push

//export default new BookStore();

