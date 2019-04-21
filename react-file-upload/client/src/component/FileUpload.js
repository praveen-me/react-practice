import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [filename, setFilename] = useState('Choose File')
  const [file, setFile] = useState('')
  const [uploadedFile, setUploadedFile] = useState({})

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  } 

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file)    
    
    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      });

      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
    } catch (error) {
      
    }

  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="custom-file mb-4">
          <input 
          type="file" 
          id="customFile"
          className="custom-file-input"
          onChange={onChange}/>
          <label htmlFor="customFile" className="custom-file-label">{filename}</label>
        </div>
        
        <input 
        type="submit" 
        value="Upload" 
        className="btn btn-primary btn-block mt-4"/>
      </form>

      {
          <div className="row mt-5 text-center">
            <div className="col-md-12 mb-5 m-uto">
              <h3 className="text-center">{uploadedFile.fileName}</h3>
              <img 
              src={uploadedFile.filePath} 
              alt={uploadedFile.fileName}
              style={{
                width: '100%'
              }}/>
            </div>
          </div>
      }
      
    </>
  )
}

export default FileUpload;
