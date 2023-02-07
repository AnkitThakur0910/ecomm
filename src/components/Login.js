import { borderBottom } from '@mui/system'
import React from 'react'
import vid from '../images/picky.mp4'
import './Style.css'

function Login() {
  return (
    <>
    
      <div className="picky-login" style={{display : "block", boxSizing : "border-box",width : "85%",height : "600px",marginLeft : "7.3%",marginTop : "40px"}}>
        <div style={{display : "flex",width : "100%",justifyContent : "center",alignItems : "center",height : "100%"}}>
        <div className = "login-vertical" style={{display : "flex",justifyContent : "center",alignItems : "flex-start"}}>
            <form style = {{justifyContent : "center",textAlign : "center",marginRight : "10%"}}>
                
            <div style={{display : "flex",flexDirection : "column",width : "100%", justifyContent : "center"}}>
            <label style={{color : "white",fontWeight : "bolder",fontSize : "20px",marginBottom : "10px"}}>SIGN UP</label>
            <div style={{display : "block",boxSizing : "border-box"}}>
                <input style={{padding : "10px",paddingLeft : "37px",paddingRight : "37px",marginBottom : "10px",borderRadius : "10px", borderBottom : "4px solid red",backgroundColor : "grey",color : "red",borderTop : 0,borderLeft:0,borderRight:0}} type = "text" placeholder='Enter Name'></input>
            </div>
            <div style={{display : "block",boxSizing : "border-box"}}>
                <input style={{padding : "10px",paddingLeft : "37px",paddingRight : "37px",marginBottom : "10px",borderRadius : "10px", borderBottom : "4px solid red",backgroundColor : "grey",color : "red",borderTop : 0,borderLeft:0,borderRight:0}} type="gmail" placeholder='Enter gmail'></input>
            </div>
            <div style={{display : "block",boxSizing : "border-box"}}>
                <input style={{padding : "10px",paddingLeft : "37px",paddingRight : "37px",marginBottom : "10px",borderRadius : "10px", borderBottom : "4px solid red",backgroundColor : "grey",color : "red",borderTop : 0,borderLeft:0,borderRight:0}} type = "password" placeholder='Enter password'></input>
            </div>
            <div style={{display : "block",boxSizing : "border-box"}}>
                <input style={{padding : "10px",paddingLeft : "37px",paddingRight : "37px",marginBottom : "10px",borderRadius : "10px", borderBottom : "4px solid red",backgroundColor : "grey",color : "red",borderTop : 0,borderLeft:0,borderRight:0}} type="number" placeholder='Enter phone no.'></input>
            </div>
            <div style={{display : "block",boxSizing : "border-box"}}>
                <input style={{padding : "10px",paddingLeft : "37px",paddingRight : "37px",marginBottom : "10px",borderRadius : "10px", borderBottom : "4px solid red",backgroundColor : "grey",color : "red",borderTop : 0,borderLeft:0,borderRight:0}} type = "number" placeholder='Enter age'></input>
            </div>
            <div style={{display : "block",boxSizing : "border-box"}}>
                <button style={{padding : "10px",paddingLeft : "37px",paddingRight : "37px",marginBottom : "10px",width : "100%",borderRadius : "10px", borderBottom : "4px solid red",backgroundColor : "black",color : "red",borderTop : 0,borderLeft:0,borderRight:0}} type='submit'>SIGN UP</button>
            </div>
            
        </div>
        </form>
        
        <form style = {{justifyContent : "center",textAlign : "center"}}>
            <div style={{display : "flex",flexDirection : "column",width : "100%", justifyContent : "center"}}>
            <label style={{color : "white",fontWeight : "bolder",fontSize : "20px",marginBottom : "10px"}}>LOGIN</label>
            <div style={{display : "block",boxSizing : "border-box"}}>
                <input style={{padding : "10px",paddingLeft : "37px",paddingRight : "37px",marginBottom : "10px",borderRadius : "10px", borderBottom : "4px solid red",backgroundColor : "grey",color : "red",borderTop : 0,borderLeft:0,borderRight:0}} type = "text" placeholder='Enter Name'></input>
            </div>
            <div style={{display : "block",boxSizing : "border-box"}}>
                <input style={{padding : "10px",paddingLeft : "37px",paddingRight : "37px",marginBottom : "10px",borderRadius : "10px", borderBottom : "4px solid red",backgroundColor : "grey",color : "red",borderTop : 0,borderLeft:0,borderRight:0}} type="gmail" placeholder='Enter gmail'></input>
            </div>
            <div style={{display : "block",boxSizing : "border-box"}}>
                <input style={{padding : "10px",paddingLeft : "37px",paddingRight : "37px",marginBottom : "10px",borderRadius : "10px", borderBottom : "4px solid red",backgroundColor : "grey",color : "red",borderTop : 0,borderLeft:0,borderRight:0}} type = "password" placeholder='Enter password'></input>
            </div>
            
            <div style={{display : "block",boxSizing : "border-box"}}>
                <button style={{padding : "10px",paddingLeft : "37px",paddingRight : "37px",marginBottom : "10px",width : "100%",borderRadius : "10px", borderBottom : "4px solid red",backgroundColor : "black",color : "red",borderTop : 0,borderLeft:0,borderRight:0}} type='submit'>LOGIN</button>
            </div>
            
        </div>
        </form>
        </div>
        </div>
      </div>
    
    </>
  )
}

export default Login