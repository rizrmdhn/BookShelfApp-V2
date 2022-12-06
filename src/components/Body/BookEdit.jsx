import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import ModalEdit from "../Modal/ModalEdit";

function BookEdit({ books, onSubmit }) {
  const [id, setID] = useState(null);
  const [bookTitle, setBookTitle] = useState("");
  const [bookYear, setBookYear] = useState(0);
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookSummary, setBookSummary] = useState("");
  const [bookPublisher, setBookPublisher] = useState("");
  const [bookPageCount, setBookPageCount] = useState(0);
  const [bookReadPage, setBookReadPage] = useState(0);
  const [bookReading, setBookReading] = useState(false);
  const [bookFinished, setbookFinished] = useState(null);

  // useEffect(() => {
  //   {
  //     books.map((books) => {
  //       setID(books.id);
  //       setBookTitle(books.title);
  //       setBookYear(parseInt(books.year));
  //       setBookAuthor(books.author);
  //       setBookSummary(books.summary);
  //       setBookPublisher(books.publisher);
  //       setBookPageCount(parseInt(books.pageCount));
  //       setBookReadPage(parseInt(books.readPage));
  //       setBookReading(books.reading);
  //       setbookFinished(books.finished);
  //     });
  //   }
  // }, []);

  return (
    <>
      {books.map((books) => {
        return (
          <ModalEdit
            key={books.id}
            books={books}
            onSubmit={onSubmit}
            setBookTitle={(e) => setBookTitle(e.target.value)}
            bookTitle={books.title}
            setBookYear={(e) => setBookYear(e.target.value)}
            bookYear={books.year}
            setBookAuthor={(e) => setBookAuthor(e.target.value)}
            bookAuthor={books.author}
            setBookSummary={(e) => setBookSummary(e.target.value)}
            bookSummary={books.summary}
            setBookPublisher={(e) => setBookPublisher(e.target.value)}
            bookPublisher={books.publisher}
            setBookPageCount={(e) => setBookPageCount(e.target.value)}
            bookPageCount={books.pageCount}
            setBookReadPage={(e) => setBookReadPage(e.target.value)}
            bookReadPage={books.readPage}
            setBookReading={(e) => setBookReading(e.target.value)}
            bookReading={books.reading}
          />
        );
      })}
    </>
  );
}

export default BookEdit;
