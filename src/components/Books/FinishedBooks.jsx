import React from "react";
import "../../styles/ReadingAndFinished.css";
import BooksComponent from "./BooksComponent";

function FinishedBooks({ id, books, onRead, onFinished, onDelete }) {
  const Finished = books.filter((books) => books.finished === true);
  return (
    <>
      <BooksComponent
        id={id}
        books={Finished}
        onRead={onRead}
        onFinished={onFinished}
        onDelete={onDelete}
      />
    </>
  );
}

export default FinishedBooks;
