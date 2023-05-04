import React from 'react';
import styled from 'styled-components';
// Style the Button component

const FileUploader = props => {
  const hiddenFileInput = React.useRef(null);
  
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
  return (
    <>
      <button onClick={handleClick}>
        <h5>CHOOSE FILES</h5>
      </button>
      <input
        type="file"
        multiple="multiple"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: 'none'}} 
      />
    </>
  );

}
export default FileUploader;