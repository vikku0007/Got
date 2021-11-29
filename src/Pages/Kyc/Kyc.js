import React from 'react';
import Dropzone from 'react-dropzone';
import { Container } from 'reactstrap';
import './Kyc.css';

  
  const Kycbank = () => {
    
  
    return (
        <>
        <Container>
            <h4 className="mt-5">Upload Your Documents Here</h4>
            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                {({getRootProps, getInputProps}) => (
                    <section className="dropZone">
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                    </div>
                    </section>
                )}
            </Dropzone>
            <h4 className="mt-3">Uploaded Documents</h4>
            <div className="listDocs">
                <div>
                    <span><i class="far fa-images"></i></span>
                    <span>Image File</span>
                </div>
                <div className="dltIcon">
                    <i class="far fa-trash-alt"></i>
                </div>
            </div>
            <div className="listDocs">
                <div>
                    <span><i class="far fa-file-pdf"></i></span>
                    <span>Pdf File</span>
                </div>
                <div className="dltIcon">
                    <i class="far fa-trash-alt"></i>
                </div>
            </div>
            <div className="listDocs">
                <div>
                    <span><i class="far fa-file-word"></i></span>
                    <span>Docs File</span>
                </div>
                <div className="dltIcon">
                    <i class="far fa-trash-alt"></i>
                </div>
            </div>
        </Container>
      </>
    )
  };
  
export default Kycbank;
  