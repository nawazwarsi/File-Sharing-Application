import { useEffect, useRef, useState } from "react";
import "./App.css";
import { uploadFile } from "./service/api";

function App() {

  const fileInputRef = useRef();
  const [file,setFile] = useState('');
  console.log(file);

  useEffect(()=>{
    const getImage = async () => {
      if(file){
        const data = new FormData();
        data.append["name",file.name];
        data.append["file",file];

        const response = await uploadFile(data);
        console.log("Response=> ", response);
      }
    }
    getImage();
  },[file]);

  const onUploadClick = () =>{
    fileInputRef.current.click();
  };

  return (
    <>
      <div className='main-wrapper' style={{ backgroundImage: `url('https://images.pexels.com/photos/23547/pexels-photo.jpg')` }}>
        <div className="container">
          <div className="wrapper">
            <h1>File Sharing App!</h1>
            <p>Upload and share the download link.</p>
            <button onClick={()=>onUploadClick()}>Upload</button>
            <input type="file" ref={fileInputRef} style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
