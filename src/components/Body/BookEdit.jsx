import React, { Component } from "react";
import ModalEdit from "../Modal/ModalEdit";

class BookEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: localStorage.getItem("ID"),
      title: localStorage.getItem("Book-Title"),
      year: parseInt(localStorage.getItem("Book-Year")),
      author: localStorage.getItem("Book-Author"),
      summary: localStorage.getItem("Book-Summary"),
      publisher: localStorage.getItem("Book-Publisher"),
      pageCount: parseInt(localStorage.getItem("Book-PageCount")),
      readPage: parseInt(localStorage.getItem("Book-ReadPage")),
      reading: localStorage.getItem("Book-Reading") === "true",
      finished: localStorage.getItem("Book-Finished"),
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSetBookReadStatusHandler =
      this.onSetBookReadStatusHandler.bind(this);
    this.onSubmitChangeEventHandler =
      this.onSubmitChangeEventHandler.bind(this);
  }

//   componentDidMount() {
//     setID(localStorage.getItem("ID"));
//     setBookTitle(localStorage.getItem("Book-Title"));
//     setBookYear(parseInt(localStorage.getItem("Book-Year")));
//     setBookAuthor(localStorage.getItem("Book-Author"));
//     setBookSummary(localStorage.getItem("Book-Summary"));
//     setBookPublisher(localStorage.getItem("Book-Publisher"));
//     setBookPageCount(parseInt(localStorage.getItem("Book-PageCount")));
//     setBookReadPage(parseInt(localStorage.getItem("Book-ReadPage")));
//     setBookReading(localStorage.getItem("Book-Reading") === "true");
//     setbookFinished(localStorage.getItem("Book-Finished"));
//   }

  onHandleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSetBookReadStatusHandler() {
    this.setState({
      reading: !this.state.reading,
    });
  }

  onSubmitChangeEventHandler(event) {
    // console.log('is this works?')
    event.preventDefault();
    this.props.onEditBook(this.state);
  }

  render() {
    return (
      <>
        <ModalEdit
          onSubmit={this.onSubmitChangeEventHandler}
          setBookTitle={this.onHandleChange}
          bookTitle={this.state.title}
          setBookYear={this.onHandleChange}
          bookYear={this.state.year}
          setBookAuthor={this.onHandleChange}
          bookAuthor={this.state.author}
          setBookSummary={this.onHandleChange}
          bookSummary={this.state.summary}
          setBookPublisher={this.onHandleChange}
          bookPublisher={this.state.publisher}
          setBookPageCount={this.onHandleChange}
          bookPageCount={this.state.bookPageCount}
          setBookReadPage={this.onHandleChange}
          bookReadPage={this.state.readPage}
          setBookReading={this.onSetBookReadStatusHandler}
          bookReading={this.state.reading}
        />
      </>
    );
  }
}

export default BookEdit;
