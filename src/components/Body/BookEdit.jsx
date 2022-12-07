// import React, { useState } from "react";
// import ModalEdit from "../Modal/ModalEdit";

// function BookEdit({ books }) {
//   const [id, setID] = useState(null);
//   const [bookTitle, setBookTitle] = useState("");
//   const [bookYear, setBookYear] = useState(0);
//   const [bookAuthor, setBookAuthor] = useState("");
//   const [bookSummary, setBookSummary] = useState("");
//   const [bookPublisher, setBookPublisher] = useState("");
//   const [bookPageCount, setBookPageCount] = useState(0);
//   const [bookReadPage, setBookReadPage] = useState(0);
//   const [bookReading, setBookReading] = useState(false);
//   const [bookFinished, setbookFinished] = useState(null);

//   const getBookTitle = (title) => {
//     setBookTitle(title);
//   }
//   const onSubmitHandle = (e) => {
//     e.preventDefault();
//     console.log(bookTitle);
//   };

//   return (
//     <>
//       {books.map((books) => {
//         return (
//           <ModalEdit
//             key={books.id}
//             books={books}
//             onTest={() => console.log(getBookTitle)}
//             onSubmit={() => onSubmitHandle}
//             setID={() => {}}
//             // setBookTitle={(e) => setBookTitle(e.target.value)}
//             // bookTitle={bookTitle}
//             // setBookYear={(e) => setBookYear(e.target.value)}
//             // bookYear={bookYear}
//             // setBookAuthor={(e) => setBookAuthor(e.target.value)}
//             // bookAuthor={bookAuthor}
//             // setBookSummary={(e) => setBookSummary(e.target.value)}
//             // bookSummary={bookSummary}
//             // setBookPublisher={(e) => setBookPublisher(e.target.value)}
//             // bookPublisher={bookPublisher}
//             // setBookPageCount={(e) => setBookPageCount(e.target.value)}
//             // bookPageCount={bookPageCount}
//             // setBookReadPage={(e) => setBookReadPage(e.target.value)}
//             // bookReadPage={bookReadPage}
//             // setBookReading={(e) => setBookReading(e.target.value)}
//             // bookReading={bookReading}
//           />
//         );
//       })}
//     </>
//   );
// }

// export default BookEdit;
