import React, { Component } from "react";
import ModalInput from "../Modal/ModalInput";

class BookInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      year: 0,
      author: "",
      summary: "",
      publisher: "",
      pageCount: 0,
      readPage: 0,
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
    event.preventDefault();
    this.props.onAddBooks(this.state);
    this.setState({
      title: "",
      year: "",
      author: "",
      summary: "",
      publisher: "",
      pageCount: "",
      readPage: "",
      reading: false,
      finished: false,
    });
  }

  render() {
    return (
      <>
        <ModalInput
          onSubmit={this.onSubmitChangeEventHandler}
          setBookTitle={this.onHandleChange}
          setBookYear={this.onHandleChange}
          setBookAuthor={this.onHandleChange}
          setBookSummary={this.onHandleChange}
          setBookPublisher={this.onHandleChange}
          setBookPageCount={this.onHandleChange}
          setBookReadPage={this.onHandleChange}
          setBookReading={this.onSetBookReadStatusHandler}
        />
      </>
    );
  }
}

export default BookInput;
