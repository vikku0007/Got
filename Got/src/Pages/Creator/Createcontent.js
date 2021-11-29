import React from 'react';
import { Form, FormGroup, Label, Input, Container, Row, Col, Button} from 'reactstrap';
import './Createcontent.css';


function Createcontent() {

    const [highlight, setHighlight] = React.useState(false);
  const [preview, setPreview] = React.useState("");
  const [drop, setDrop] = React.useState(false);

  const handleEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("enter!");

    preview === "" && setHighlight(true);
  };

  const handleOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("over!");

    preview === "" && setHighlight(true);
  };

  const handleLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("leave!");
    setHighlight(false);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("drop!");
    setHighlight(false);
    setDrop(true);

    const [file] = e.target.files || e.dataTransfer.files;

    uploadFile(file);
  };

  function uploadFile(file) {
    const reader = new FileReader();
    reader.readAsBinaryString(file);

    reader.onload = () => {
      // this is the base64 data
      const fileRes = btoa(reader.result);
      console.log(`data:image/jpg;base64,${fileRes}`);
      setPreview(`data:image/jpg;base64,${fileRes}`);
    };

    reader.onerror = () => {
      console.log("There is a problem while uploading...");
    };
  }


    return (
        <>
            <Container>
                <div className="formSection">
                    <h4>Create Content</h4>
                    <hr/>
                    <Form>
                        <Row>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="exampleEmail">
                             Title
                            </Label>
                            <Input id="exampleEmail" name="email" type="email" placeholder="Enter your title" />
                        </FormGroup>
                        
                        <FormGroup>
                        <div className="prr" onDragEnter={(e) => handleEnter(e)}
                            onDragLeave={(e) => handleLeave(e)}
                            onDragOver={(e) => handleOver(e)}
                            onDrop={(e) => handleUpload(e)}
                            className={`upload${
                            highlight ? " is-highlight" : drop ? " is-drop" : ""
                            }`}
                            style={{ backgroundImage: `url(${preview})` }}
                        >
                        <p>Drag and Drop image here</p>
          <div className="upload-button">
            <input
              type="file"
              className="upload-file"
              accept="image/*"
              onChange={(e) => handleUpload(e)}
            />
            <Button color="primary">Upload Here</Button>
          </div>
          </div>
  
  </FormGroup>
</Col>
                        <Col md={6}>
                        <FormGroup>
    <Label for="exampleText">
 Description
    </Label>
    <Input
      id="exampleText"
      name="text"
      type="textarea" rows="11"
      placeholder="Type here...."
    />
  </FormGroup>
  <FormGroup>
      <div className="bbt">
  <Button color="primary" className="w-100">
    Publish
  </Button>
  </div>
  </FormGroup>
                        </Col>
                        </Row>
                    </Form>
                </div>
            </Container>
        </>
    )      
}

export default Createcontent;