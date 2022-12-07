import React, { Component } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { nanoid } from "nanoid";
import HeaderDesktop from "./components/Menu/HeaderDesktop";
import HeaderMobile from "./components/Menu/HeaderMobile";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import "animate.css";
import BookInput from "./components/Body/BookInput";
import ReadingBooks from "./components/Books/ReadingBooks";
import { getDummyBooks } from "./utils";
import BooksComponent from "./components/Books/BooksComponent";
import FinishedBooks from "./components/Books/FinishedBooks";
import BookDesc from "./components/Body/BookDesc";

const MySwal = withReactContent(Swal);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: getDummyBooks(),
      show: false,
    };

    this.onAddBooksHandler = this.onAddBooksHandler.bind(this);
    this.onReadHandler = this.onReadHandler.bind(this);
    this.onFinishedHandler = this.onFinishedHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onEditHandler = this.onEditHandler.bind(this);
  }

  onAddBooksHandler({
    title,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  }) {
    const finished = pageCount === readPage;
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    if (!title || !year || !author || !publisher) {
      MySwal.fire({
        icon: "error",
        title: "Error",
        text: "Please input the empty field",
      });
      return;
    }
    if (readPage > pageCount) {
      MySwal.fire({
        icon: "error",
        title: "Error",
        text: "Total read page is more than total book page",
      });
      return;
    }

    MySwal.fire({
      icon: "success",
      title: title,
      text: "Book Added",
    }).then(
      this.setState((prevState) => {
        return {
          books: [
            ...prevState.books,
            {
              id: nanoid(16),
              title,
              year,
              author,
              summary,
              publisher,
              pageCount,
              readPage,
              reading,
              finished,
              insertedAt,
              updatedAt,
            },
          ],
        };
      })
    );
  }

  onReadHandler(id) {
    MySwal.fire({
      html: <i>Berhasil ditambahkan ke daftar Reading</i>,
      icon: "success",
    });
    const BookRead = this.state.books.filter((book) => book.id === id);
    const ReadBook =
      (BookRead[0].reading = true) &&
      (BookRead[0].readPage = 1) &&
      (BookRead[0].finished = false);

    this.setState({ ReadBook });
  }

  onFinishedHandler(id) {
    const BookFinished = this.state.books.filter((book) => book.id === id);
    const FinishedBook =
      (BookFinished[0].finished = true) &&
      (BookFinished[0].readPage = BookFinished[0].pageCount) &&
      (BookFinished[0].reading = false);
    this.setState({ FinishedBook });
    MySwal.fire({
      html: <i>Berhasil ditambahkan ke daftar selesai dibaca</i>,
      icon: "success",
    });
  }

  onDeleteHandler(id) {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire("Deleted!", `Books with id: ${id}`, "success");
        const books = this.state.books.filter((book) => book.id !== id);
        this.setState({ books });
      }
    });
  }


  render() {
    return (
      <>
        <div className="App">
          <HashRouter>
            <HeaderDesktop />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <BooksComponent
                    books={this.state.books}
                    onRead={this.onReadHandler}
                    onFinished={this.onFinishedHandler}
                    onDelete={this.onDeleteHandler}
                  />
                }
              />
              <Route
                exact
                path="/Reading"
                element={
                  <ReadingBooks
                    books={this.state.books}
                    onRead={this.onReadHandler}
                    onFinished={this.onFinishedHandler}
                    onDelete={this.onDeleteHandler}
                  />
                }
              />
              <Route
                exact
                path="/Finished"
                element={
                  <FinishedBooks
                    books={this.state.books}
                    onRead={this.onReadHandler}
                    onFinished={this.onFinishedHandler}
                    onDelete={this.onDeleteHandler}
                  />
                }
              />
            </Routes>
            <BookInput onAddBooks={this.onAddBooksHandler} />
            {/* <BookEdit
              books={this.state.books}
              onSubmit={this.onUpdateBooksHandler}
            /> */}
            <BookDesc books={this.state.books} />
            <HeaderMobile />
          </HashRouter>
        </div>
      </>
    );
  }
}

export default App;
