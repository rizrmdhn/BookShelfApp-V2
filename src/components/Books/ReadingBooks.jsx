import React from "react";
import "../../styles/ReadingAndFinished.css";
import BooksComponent from "./BooksComponent";

function ReadingBooks({ id, books, onRead, onFinished, onDelete }) {
  const ReadBooks = books.filter((books) => books.reading === true);

  return (
    <>
      <BooksComponent
        id={id}
        books={ReadBooks}
        onRead={onRead}
        onFinished={onFinished}
        onDelete={onDelete}
      />
    </>
  );
}

export default ReadingBooks;
