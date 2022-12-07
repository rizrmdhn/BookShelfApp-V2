import React from "react";
import ModalDesc from "../Modal/ModalDesc";

function BookDesc({ books }) {
  return (
    <>
      {books.map((books) => {
        return (
          <ModalDesc
            key={books.id}
            books={books}
            bookTitle={books.title}
            bookYear={books.year}
            bookAuthor={books.author}
            bookSummary={books.summary}
            bookPublisher={books.publisher}
            bookPageCount={books.pageCount}
            bookReadPage={books.readPage}
            bookReading={books.reading}
            bookFinished={books.finished}
          />
        );
      })}
    </>
  );
}

export default BookDesc;
