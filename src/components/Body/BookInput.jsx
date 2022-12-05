import React, { Component } from "react";
import ModalInput from "../Modal/ModalInput";

class BookInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      year: "",
      author: "",
      summary: "",
      publisher: "",
      pageCount: "",
      readPage: "",
      reading: false,
      finished: false,
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSetBookReadStatusHandler =
      this.onSetBookReadStatusHandler.bind(this);
    this.onSubmitChangeEventHandler =
      this.onSubmitChangeEventHandler.bind(this);
  }

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
    this.props.onAddBooks(this.state);
  }

  render() {
    return (
      <>
        <ModalInput
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

export default BookInput;
