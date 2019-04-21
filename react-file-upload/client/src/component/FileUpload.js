import React, { useState } from 'react';
import axios from 'axios';
import Message from './Message';
import Progress from './Progress';

const FileUpload = () => {
  const [filename, setFilename] = useState('Choose File')
  const [file, setFile] = useState('')
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0)

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
        },
        onUploadProgress: ProgressEvent => {
          setUploadPercentage(
            parseInt( Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total) )
          )

          // Clear Percentage
          setTimeout(() => setUploadPercentage(0), 1000)
        }
      });

      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });

      setMessage('File Uploaded');
    } catch (error) { 
      if (error.response.status === 500) {
        setMessage('There was a problem with server');
      } else {
        setMessage(error.response.data.msg)
      }
    }
  }

  return (
    <>
      { message ? <Message msg={message}/> : null }
      <form onSubmit={onSubmit}>
        <div className="custom-file mb-4">
          <input 
          type="file" 
          id="customFile"
          className="custom-file-input"
          onChange={onChange}/>
          <label htmlFor="customFile" className="custom-file-label">{filename}</label>
        </div>
        
        <Progress percentage={uploadPercentage} />

        <input 
        type="submit" 
        value="Upload" 
        className="btn btn-primary btn-block mt-4"/>
      </form>

      {
        uploadedFile ? (
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
        ) : null
      }
      
    </>
  )
}

export default FileUpload;
