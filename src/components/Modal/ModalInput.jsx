import React from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

function ModalInput({
  setBookTitle,
  setBookYear,
  setBookAuthor,
  setBookSummary,
  setBookPublisher,
  setBookPageCount,
  setBookReadPage,
  setBookReading,
  bookReading,
  onSubmit,
}) {
  return (
    <>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="ModalInput"
        tabIndex="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 ms-4" id="exampleModalLabel">
                Add Book
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body modal-body-centered modal-body-scrollable">
              <Form className="ms-4 me-4" onSubmit={onSubmit}>
                <Row className="row g-3 align-items-center mb-2">
                  <Col className="col-lg">
                    <Label className="" for="Title">
                      Title
                    </Label>
                    <Input
                      id="Book-Title"
                      name="title"
                      placeholder="Enter book title"
                      type="text"
                      onChange={setBookTitle}
                    />
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col className="col-5">
                    <Label className="" for="Book-Year">
                      Year Release
                    </Label>
                    <Input
                      id="Book-Year"
                      name="year"
                      placeholder="Year release"
                      type="number"
                      onChange={setBookYear}
                    />
                  </Col>
                  <Col className="col-lg">
                    <Label className="" for="Book-Author">
                      Author
                    </Label>
                    <Input
                      id="Book-Author"
                      name="author"
                      placeholder="Enter the book author"
                      type="text"
                      onChange={setBookAuthor}
                    />
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col className="col-lg">
                    <Label for="Book-Summary">Summary</Label>
                    <Input
                      id="Book-Summary"
                      name="summary"
                      placeholder="Enter the book summary"
                      type="textarea"
                      onChange={setBookSummary}
                    />
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col className="col-lg">
                    <Label className="" for="Book-Publisher">
                      Publisher
                    </Label>
                    <Input
                      id="Book-Publisher"
                      name="publisher"
                      placeholder="Enter the book publisher"
                      type="text"
                      onChange={setBookPublisher}
                    />
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="col-lg">
                    <Label className="" for="Book-pageCount">
                      Total Page
                    </Label>
                    <Input
                      id="Book-pageCount"
                      name="pageCount"
                      placeholder="Total book page"
                      type="number"
                      onChange={setBookPageCount}
                    />
                  </Col>
                  <Col className="col-lg">
                    <Label className="" for="Book-readPage">
                      Readed Page
                    </Label>
                    <Input
                      id="Book-readPage"
                      name="readPage"
                      placeholder="Number readed page"
                      type="number"
                      onChange={setBookReadPage}
                    />
                  </Col>
                </Row>
                <Row className="m-auto">
                  <FormGroup switch>
                    <Input
                      name="reading"
                      type="switch"
                      checked={bookReading}
                      onChange={setBookReading}
                    />
                    <Label check>Reading ?</Label>
                  </FormGroup>
                </Row>
                <div className="modal-footer mt-4">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalInput;
