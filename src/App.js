import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import './components/Style.css'
import './App.css';
import Home from './components/Home';
import Layout from "./components/Layout";
import Login from "./components/Login";
import Electronic from "./components/Electronic";
import Sports from "./components/Sports";
import Foods from "./components/Foods";
import Clothes from "./components/Clothes";
import { useState } from "react";
import Cart from "./components/Cart";

function App() {

  const navigate = useNavigate();
  let pos1 = 0
  let pos2 = 0
  const dragger = (e2)=>{
   
  e2.preventDefault()
    let pos3 = e2.clientX;
    let pos4 = e2.clientY;
   
    const drag = document.getElementById('dragable');
    
    drag.style.left = `${pos3+pos1}px`
   drag.style.top = `${pos4+pos2}px`
   }
   
   const leftdrag = ()=>{
    const drag = document.getElementById('dragable');
    document.onmousemove = null
    document.onmouseup = null
   }
  const dragover = (e)=>{

    const drag = document.getElementById('dragable');
   
    pos1 = parseInt(drag.style.left.split('p')[0])-e.clientX
    pos2 = parseInt(drag.style.top.split('p')[0])-e.clientY
   
   
    
       document.onmousemove = dragger;
       document.onmouseup = leftdrag;

  }
  return (
    <>
    <div id = "dragable" onMouseDown={(e)=>dragover(e)} style={{display : "block",boxSizing : "border-box",position : "fixed",top: "600px",borderRadius : "30px",left : "620px",zIndex : "8",backgroundColor : "#36454F"}}>
    <div style={{display : "flex"}}>
    <div onClick={()=>navigate('/')} style={{display : "block",height : "auto",width : "auto",backgroundColor : "white",marginLeft : "10px",marginRight : "8px",marginTop : "6px",marginBottom :"6px",paddingLeft : "4px",paddingRight : "4px",borderRadius : "50%",textAlign : "center"}}>
    <i className="fa fa-home" style={{fontSize:"24px",padding : "4px"}}></i>
    </div>
    <div onClick={()=>navigate('/electronics')} style={{display : "block",height : "auto",width : "auto",backgroundColor : "white",marginLeft : "10px",marginRight : "8px",marginTop : "6px",marginBottom :"6px",paddingLeft : "4px",paddingRight : "4px",borderRadius : "50%",textAlign : "center"}}>
    <i className="fa fa-mobile-phone" style={{fontSize:"24px",padding : "4px"}}></i>
    </div>
    <div  onClick={()=>navigate('/sports')} style={{display : "block",height : "auto",width : "auto",backgroundColor : "white",marginLeft : "10px",marginRight : "8px",marginTop : "6px",marginBottom :"6px",paddingLeft : "4px",paddingRight : "4px",borderRadius : "50%",textAlign : "center"}}>
    <i className="fas fa-futbol" style={{fontSize:"20px",padding : "4px"}}></i>
    </div>
    <div  onClick={()=>navigate('/clothes')} style={{display : "block",height : "auto",width : "auto",backgroundColor : "white",marginLeft : "10px",marginRight : "8px",marginTop : "6px",marginBottom :"6px",paddingLeft : "4px",paddingRight : "4px",borderRadius : "50%",textAlign : "center"}}>
    <i className="fas fa-tshirt" style={{fontSize:"18px",padding : "4px"}}></i>
    </div>
    <div  onClick={()=>navigate('/foods')} style={{display : "block",height : "auto",width : "auto",backgroundColor : "white",marginLeft : "10px",marginRight : "8px",marginTop : "6px",marginBottom :"6px",paddingLeft : "4px",paddingRight : "4px",borderRadius : "50%",textAlign : "center"}}>
    <i className="fas fa-hamburger" style={{fontSize:"20px",padding : "4px",}}></i>
    </div>
   
    </div>
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "/electronics" element = {<Electronic/>} />
        <Route path = "/sports" element = {<Sports />} />
        <Route path="/foods" element = {<Foods />} />
        <Route path="/clothes" element = {<Clothes />} />
        <Route path="/cart" element = {<Cart />} />
      </Routes>
</>
  );
}

export default App;
