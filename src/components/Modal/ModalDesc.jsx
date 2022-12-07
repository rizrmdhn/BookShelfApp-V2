import React from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

function ModalDesc({
  books,
  bookTitle,
  bookYear,
  bookAuthor,
  bookSummary,
  bookPublisher,
  bookPageCount,
  bookReadPage,
  bookReading,
  bookFinished,
}) {
  return (
    <>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id={`desc${books.id}`}
        tabIndex="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 ms-4" id="exampleModalLabel">
                Book Description
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body modal-body-centered modal-body-scrollable">
              <Form className="ms-4 me-4">
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
                      defaultValue={bookTitle}
                      readOnly
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
                      defaultValue={bookYear}
                      readOnly
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
                      defaultValue={bookAuthor}
                      readOnly
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
                      defaultValue={bookSummary}
                      readOnly
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
                      defaultValue={bookPublisher}
                      readOnly
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
                      defaultValue={bookPageCount}
                      readOnly
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
                      defaultValue={bookReadPage}
                      readOnly
                    />
                  </Col>
                </Row>
                <Row className="m-auto mb-3">
                  <FormGroup switch>
                    <Input
                      name="reading"
                      type="switch"
                      checked={bookReading}
                      defaultValue={bookReading}
                      readOnly
                    />
                    <Label check>Reading ?</Label>
                  </FormGroup>
                </Row>
                <Row className="m-auto mb-3">
                  <FormGroup switch>
                    <Input
                      name="reading"
                      type="switch"
                      checked={bookFinished}
                      defaultValue={bookFinished}
                      readOnly
                    />
                    <Label check>Finished</Label>
                  </FormGroup>
                </Row>
              </Form>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalDesc;
