import axios from 'axios';
import React from 'react'
import {useDropzone} from 'react-dropzone'
import  {useCallback} from 'react'
import { toast, ToastContainer } from "react-toastify";

const ReactDropZone = ({link,setLink}) => {

     const onDrop = useCallback(async (acceptedFiles) => {
    // Do something with the files
    let formData = new FormData();
    formData.append("docs",acceptedFiles[0])

    try {
      let result = await axios({
         url: "http://localhost:8000/file/single",
      method: "post",
      data: formData,
      });
      //toast

      setLink(result.data.result)

    } catch (error) {
      console.log(error.message)
    }



  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div>
         <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
      {link?<img alt='profile-image' src={link}></img>:null}
    </div>
    </div>
  )
}

export default ReactDropZone