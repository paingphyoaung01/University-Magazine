import React, { useState } from "react";
import "../Submit/Submit.css"
import Image from "../../../../assets/image.png"
import Navbar from "../../Components/Navbar/Navbar";

const Submit = () => {

  const [articleTitle, setArticleTitle] = useState('');

  const handleChange = (e) => {
    setArticleTitle(e.target.value);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleCancelClick = () => {
    console.log('handleCancelClick');
  };

  const handleSubmitClick = () => {
    console.log('handleSubmitClick');
  };

  return (
    <div>

      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'row' }}>

        <div style={{ display: 'flex', width: '50%', paddingRight: '2%' }}>
          <div style={{ width: '100%', marginTop: '96px', justifyContent: "center", alignItems: 'center' }}>
            <img src={Image} alt="" style={{ width: '70%', marginLeft: '30%', height: '320px' }} />
          </div>
        </div>



        <div style={{ display: 'flex', width: '50%', flexDirection: 'column', paddingLeft: '2%' }}>

          <h2 style={{ fontFamily: "sans-serif" }}>Submit Article</h2>

          <div style={{ width: '50%' }}>
            <h4 style={{ fontFamily: "sans-serif", fontWeight: 'normal' }}>Please fill in the required fields to submit your article</h4>

            <div style={{ flexDirection: 'column', display: 'flex', marginTop: '28px' }}>
              <label htmlFor="textInput" style={{ fontFamily: 'sans-serif', fontWeight: 'normal', fontSize: '13px', marginBottom: '5px' }}>Article Title</label>
              <input
                type="text"
                id="textInput"
                value={articleTitle}
                onChange={handleChange}
                style={{
                  height: '28px',
                  width: '50%',
                  padding: "0px 5px",
                  border: '1px solid lightgray',
                  borderRadius: '5px',
                  fontSize: '12px'
                }}
                placeholder="Enter article title"
              />
              <label htmlFor="textInput" style={{ fontFamily: 'sans-serif', fontWeight: 'normal', fontSize: '12px', marginTop: '5px', color: 'gray' }}>Maximum 100 characters</label>
            </div>

            <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="textInput" style={{ fontFamily: 'sans-serif', fontWeight: 'normal', fontSize: '13px', marginBottom: '5px' }}>Word Document</label>
              <label style={{ padding: '7px', fontSize: '12px', maxWidth: 'fit-content', fontFamily: 'sans-serif', borderRadius: '5px', border: '1px solid black', cursor: 'pointer' }}>Upload Word Document</label>
            </div>

            <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="textInput" style={{ fontFamily: 'sans-serif', fontWeight: 'normal', fontSize: '13px', marginBottom: '5px' }}>Images</label>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <label style={{ padding: '7px', fontSize: '12px', maxWidth: 'fit-content', fontFamily: 'sans-serif', borderRadius: '5px', border: '1px solid gray', color: 'gray', cursor: 'pointer' }}>Upload Image</label>
                <label style={{ fontSize: '12px', fontFamily: 'sans-serif', color: 'black', marginLeft: '8px', }}>cover.jpg</label>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'row', marginTop: '28px', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  style={{
                    width: '14px',
                    height: '14px',
                    cursor: 'pointer',
                  }}

                />
                <label style={{ fontSize: '12px', fontFamily: 'sans-serif', color: 'black', marginLeft: '3px', }}>Agree to Terms and Conditions</label>
              </div>
              <label htmlFor="textInput" style={{ fontFamily: 'sans-serif', fontWeight: 'normal', fontSize: '10px', marginTop: '3px', color: 'gray' }}>You must agree to the terms to submit</label>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '28px' }}>
              <button onClick={handleCancelClick} style={{ padding: "10px 39px", backgroundColor: 'white', borderWidth: '1px', borderRadius: "7px", marginRight: '16px', cursor: 'pointer' }}>Cancel</button>
              <button onClick={handleCancelClick} style={{ padding: "10px 38px", backgroundColor: 'black', borderWidth: '1px', borderRadius: "7px", color: 'white', cursor: 'pointer' }}>Submit</button>
            </div>

          </div>

        </div>


      </div>
    </div>
  )
}

export default Submit