import React, { useState } from 'react'
import imag1 from '../images/dollar-gill-LUzZ1MllFxU-unsplash.jpg'
import imag2 from '../images/erik-mclean-nfoRa6NHTbU-unsplash.jpg'
import imag3 from '../images/freestocks-_3Q3tsJ01nc-unsplash.jpg'
import './Style.css'
// import TextField from '@mui/material/TextField';
import { InputBase } from '@mui/material';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import SearchIcon from '@mui/icons-material/Search';
import { fontWeight, minWidth } from '@mui/system';
import { Outlet,useNavigate } from 'react-router-dom';


function Home() {
  
  

  var iterator = 0;

  const displayimage = (it)=>{
    iterator = it
      const elem = document.getElementsByClassName('di');
      const elem2 = document.getElementsByClassName('fa-circle')
      if(it===3)
      {
        it=0;
        iterator = 0;
      }
      else if(it===-1)
      {
       it=2;
       iterator = 2;
      }
     for(var i=0;i<elem.length;i++)
     {
      if(i!=it)
      {
      elem[i].classList.add('dig')
      elem[i].classList.remove('slider')
      elem2[i].style.color = "gray"
      }
      else if(i==it){
          elem[i].classList.add('slider')
          elem[i].classList.remove('dig')
          elem2[i].style.color = "white"
      }
     }
     

  }

  const formSubmission = ()=>{

  }
  
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl);
  const handleClick = () => {
    const formss = document.getElementById('forms')
    if(formss.style.display === "block")
    {
      formss.style.display = "none"
    }
    else{
    formss.style.display  = "block"
    }
  };

  const Shopping = ()=>{
    const itemlist = document.getElementById('items-list')
    if(itemlist.style.display === "block")
    {
      itemlist.style.display = "none"
    }
    else{
    itemlist.style.display  = "block"
    }
  }

  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  return (
    <div style = {{display : "block",boxSizing : "border-box",width : "100%",position : "relative",backgroundColor : "rgba(232, 48, 125, 0.03)"}}>
    <div style = {{display : "flex",width : "100%",justifyContent : "center",alignItems : "center",flexDirection : "column"}}>
      <div className = "nav" style={{display : "block",boxSizing : "border-box",width : "100%",maxHeight : "730px",overflow : "hidden"}}>
        <div style={{display : "flex",width : "100%",height : "auto"}}>
        <svg width="100%" height="100%" viewBox="0 0 612 321" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H472L612 321H0V0Z" fill="black" fillOpacity="0.7"/>
</svg>


<div className='nav-container' style={{display : "block",boxSizing : "border-box",width : "100%"}}>
 
<div style={{display : "flex",width : "100%",flexDirection : "column",justifyContent : "flex-start",alignItems : "flex-start"}}>
<div style={{display : "block",boxSizing : "border-box",width : "100%",position : "relative",height : "100px",paddingLeft : "5%"}}>
<div style={{display : "flex",width : "auto",justifyContent : "flex-start",alignItems : "flex-start"}}>
<div className= "nav-items" style={{fontSize : "15px",fontWeight : "medium",fontFamily : "'Lato', sans-serif", color : "white",padding : "20px",cursor : "pointer"}} onClick = {()=>Shopping()}>Shop</div>
<div id="sign-in" className="nav-items" style={{fontSize : "15px",fontWeight : "medium",fontFamily : "'Lato', sans-serif", color : "white",padding : "20px",cursor :"pointer"}} onClick = {()=>handleClick()}>Sign In</div>
<div id= "forms" style={{display : "none", boxSizing : "border-box",position : "absolute",left : "11%",backgroundColor : "white",width : "200px",top : "45%",backgroundColor : "rgba(134,26,219,0.4)",borderRadius :"20px"}}>
<div style={{display : "flex",flexDirection : "column",width : "100%",justifyContent : "center",alignItems : "center"}}>
<form onSubmit={()=>formSubmission()}>
<h1 style={{color : "white",fontFamily : "'Noto Sans',sans-serif"}}>
  Sign Up
</h1>
<div style={{display : "flex",width : "100%",textAlign : "center",justifyContent : "center"}}>
<input style={{margin : "4px",padding : "4px",borderRadius : "10px",border : "none"}} type = "text" placeholder='Enter Name' required name="username"/><br/>
</div>
<div style={{display : "flex",width : "100%",textAlign : "center",justifyContent : "center"}}>
<input style={{margin : "4px",padding : "4px",borderRadius : "10px",border : "none"}} type = "gmail" placeholder='Enter Gmail' required name="gmail"/><br/>
</div>
<div style={{display : "flex",width : "100%",textAlign : "center",justifyContent : "center"}}>
<input style={{margin : "4px",padding : "4px",borderRadius : "10px",border : "none"}} type = "password" placeholder='Enter Password' required name="password"/><br/></div>
<div style={{display : "flex",width : "100%",textAlign : "center",justifyContent : "center"}}>
<input style={{margin : "4px",padding : "4px",borderRadius : "10px",border : "none"}} type = "password" placeholder='confirm Password' required name='password2'/><br/></div>
<div style={{display : "flex",width : "100%",textAlign : "center",justifyContent : "center",cursor : "pointer"}}>
<button style={{margin : "4px",padding : "4px",width : "100%",borderRadius : "10px",border : "none",fontFamily : "'Lato', sans-serif",color : "white",background: "linear-gradient(90deg,#2334CF,black)",cursor : "pointer"}} type='submit'>Sign Up</button></div>
</form>
<div style={{height : "2px",width : "auto", backgroundColor : "lightgray"}}></div>
<form onSubmit={()=>formSubmission()} style = {{paddingBottom : "40px"}}>
<h1 style={{color : "white",fontFamily : "'Noto Sans',sans-serif"}}>
  Login
</h1>
<div style={{display : "flex",width : "100%",textAlign : "center",justifyContent : "center"}}>
<input style={{margin : "4px",padding : "4px",borderRadius : "10px",border : "none"}} type = "text" placeholder='Enter Name' required name="username"/><br/>
</div>
<div style={{display : "flex",width : "100%",textAlign : "center",justifyContent : "center"}}>
<input style={{margin : "4px",padding : "4px",borderRadius : "10px",border : "none"}} type = "password" placeholder='Enter Password' required name="password"/><br/></div>
<div style={{display : "flex",width : "100%",textAlign : "center",justifyContent : "center"}}>
<button style={{margin : "4px",padding : "4px",width : "100%",borderRadius : "10px",border : "none",fontFamily : "'Lato', sans-serif",color : "white",background: "linear-gradient(90deg,#2334CF,black)",cursor : "pointer"}} type='submit'>Login</button></div>

</form>
</div>
</div>

<div id= "items-list" style={{display : "none", boxSizing : "border-box",position : "absolute",left : "2%",backgroundColor : "white",width : "auto",top : "45%",backgroundColor : "rgba(134,26,219,0.4)",borderRadius :"20px"}}>
<div style={{display : "flex",flexDirection : "column",width : "100%",justifyContent : "center",alignItems : "center"}}>

<div onClick = {()=>navigate('/sports')} style={{display : "flex",width : "100%",textAlign : "center",justifyContent : "flex-start",cursor : "pointer"}}>
<h3 style={{color : "white",fontFamily : "'Noto Sans',sans-serif"}}><i className='fas fa-futbol'></i> Sports</h3><br/>
</div>
<div onClick = {()=>navigate('/electronics')} style={{display : "flex",width : "100%",textAlign : "center",justifyContent : "flex-start",cursor : "pointer"}}>
<h3 style={{color : "white",fontFamily : "'Noto Sans',sans-serif"}}><i className='fas fa-laptop'></i> Electronics</h3><br/>
</div>
<div onClick = {()=>navigate('/foods')} style={{display : "flex",width : "100%",textAlign : "center",justifyContent : "flex-start",cursor : "pointer"}}>
<h3 style={{color : "white",fontFamily : "'Noto Sans',sans-serif"}}><i className='fas fa-hamburger'></i> Foods</h3><br/></div>
<div onClick = {()=>navigate('/clothes')} style={{display : "flex",width : "100%",textAlign : "center",justifyContent : "flex-start",cursor : "pointer"}}>
<h3 style={{color : "white",fontFamily : "'Noto Sans',sans-serif"}}><i className='fas fa-futbol'></i>Clothes</h3><br/></div>
</div>
</div>
<div  onClick = {()=>navigate('/cart')} className= "nav-items" style={{fontSize : "15px",fontWeight : "medium",fontFamily : "'Lato', sans-serif", color : "white",padding : "20px",cursor  : "pointer"}}>Cart</div>
</div>
</div>
</div>
<div style={{display : "block", width : "100%", boxSizing:"border-box"}}>
<div style={{display : "flex",flexDirection : "column",width : "100%",justifyContent : "center",alignItems : "center"}}>
<div className='logo-text pickytex' style={{fontSize : "54px",fontFamily : "'Patua One', sans-serif"}}>PICKY</div>
<p style={{color : "#E8307D",fontFamily : "'Noto Sans',sans-serif"}}>Your OWN shopping app!</p>
<div className='logo-text picky-scont' style={{display : "block",boxSizing : "border-box"}}><input className='picky-search' type = "text" name = "searchBox" placeholder='search for products'/></div>

<button className='logo-text login-button' style={{cursor : "pointer"}}>Search</button>
</div>
</div>
</div>
</div>
</div>




    
    


  
    {/* <AppBar position="static" style = {{backgroundColor : "#EB0941", maxWidth : "100%", display:'flex',overflowX : "auto"}} >
      <Toolbar >
          
        <Typography onClick={()=>{navigate('/')}} className='typo picky' component="div" sx={{cursor:"pointer"}} style = {{fontWeight : 'bolder',flexGrow:'1',fontStyle : 'italic'}}>
          PICKY
        </Typography>
      
        <InputBase
        className='typo'
        sx={{bgcolor:'white',minWidth:"190px",ml:2}}
        placeholder="Search Products"
        inputProps={{ 'aria-label': 'search products' }}
      />
       <IconButton  className ='typo' type="button" sx={{ pr: '1%',bgcolor:'white',borderRadius:0,pl : '1%',pt : '4px',pb:'4px'}} aria-label="search">
        <SearchIcon />
      </IconButton>
      
      <Button onClick={()=>{navigate('/login')}} className='typo login' variant="contained" sx={{ borderRadius : 'none',maxWidth : '10%',flexGrow:'1',bgcolor : 'white',color : "#EB0941",fontWeight : 'bold',ml : '7%'}}>
  Login
</Button>

    <Link className='remove' href='#' underline='none' sx = {{color:'white',flexGrow:'1',fontSize:'1rem',ml : '7%',mr:0,pr : 0}}>BECOME SELLER</Link>
    <Button
        className='remove'
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseOver={handleClick}

        sx = {{color:'white',ml:0,pl:0}}
      >
       MORE
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <ShoppingCartIcon className='remove' sx={{flexGrow:'1',mr:'2%'}}></ShoppingCartIcon>
      </Toolbar>
    </AppBar>
    <Outlet /> */}  
  

  
  
 
  <div style={{marginTop : "200px",display : "block",boxSizing : "border-box",width : "80%",backgroundColor : "#E8307D",height : "500px",position : "relative",zIndex : "6",boxShadow: "rgba(232, 48, 125, 0.25) 0px 54px 55px, rgba(232, 48, 125, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",marginBottom:"200px",borderRadius : "20px"}}>
 <div style = {{display : "flex",justifyContent : "center",alignItems : "center",flexDirection : "column"}}>
 
 <svg style={{position : "absolute",left : "32%",top:"13%"}} width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="24.9064" width="37" height="36" transform="rotate(-42.3103 0 24.9064)" fill="#D9D9D9"/>
</svg>
<svg style={{position : "absolute",left : "35%",top:"35%"}} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.2168 0.111583L16.4802 16.0252L0.302999 0.363196L16.2168 0.111583Z" fill="#D9D9D9"/>
</svg>

<svg style={{position : "absolute",right : "35%",top:"35%"}} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#D9D9D9"/>
</svg>

<svg style={{position : "absolute",right : "32%",top:"13%"}} width="34" height="31" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 0L20.8167 11.7467L33.168 11.7467L23.1756 19.0066L26.9923 30.7533L17 23.4934L7.00765 30.7533L10.8244 19.0066L0.832039 11.7467L13.1833 11.7467L17 0Z" fill="#D9D9D9"/>
</svg>



  <div className  = "about1" style={{display : "block",boxSizing : "border-box",width : "100px",height : "100px",borderRadius : "50%",marginTop : "4%"}}>
 
  </div>
  
  <div className  = "about2" style={{display : "block",boxSizing : "border-box",marginTop : "6%",width : "70%",fontFamily : "'Noto Sans', sans-serif",fontSize : "16px",color : "white",textAlign : "center",lineHeight : "1.8", wordSpacing : "1px"}}>
  This is my ecommerce website which provide user <span style={{color : "blue"}} >best experience</span>  and will give best response on time. It will make sure to give best time possible and it will make easy for user to work with..
  </div>
  <button style={{marginTop : "4%",fontFamily : "'Noto Sans', sans-serif",paddingTop : "12px",paddingBottom : "12px",paddingLeft : "18px",paddingRight : "18px",background : "linear-gradient(90deg,#2334CF,black)",color : "white",border:0,borderRadius : "20px"}}>
 Know More
  </button>
 </div>
  </div>
 
  
  {/* <div style={{display : "flex",justifyContent : "center", alignItems : "center",height : "100%",width : "100%",backgroundColor : "white"}}>
    <div style={{fontFamily : "'Roboto Flex', sans-serif",color:"black",fontWeight : "bold"}}>BEST DEALS</div>
    </div> */}
  {/* <svg width="269" height="173" viewBox="0 0 269 173" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="269" height="173" fill="white"/>
<path d="M265 130C265 201.797 199.454 -45 135 167C94.954 -50.5 5 201.797 5 130C5 58.203 63.203 0 135 0C206.797 0 265 58.203 265 130Z" fill="url(#paint0_linear_138_5)"/>
<path d="M122.128 63V48.4545H127.696C128.747 48.4545 129.621 48.6203 130.317 48.9517C131.018 49.2784 131.541 49.7259 131.887 50.294C132.237 50.8622 132.412 51.5062 132.412 52.2259C132.412 52.8177 132.298 53.3243 132.071 53.7457C131.844 54.1624 131.539 54.5009 131.155 54.7614C130.771 55.0218 130.343 55.2088 129.869 55.3224V55.4645C130.386 55.4929 130.88 55.6515 131.354 55.9403C131.832 56.2244 132.223 56.6269 132.526 57.1477C132.829 57.6686 132.98 58.2983 132.98 59.0369C132.98 59.7898 132.798 60.4669 132.433 61.0682C132.069 61.6648 131.52 62.1359 130.786 62.4815C130.052 62.8272 129.128 63 128.016 63H122.128ZM124.763 60.7983H127.597C128.553 60.7983 129.242 60.616 129.664 60.2514C130.09 59.8821 130.303 59.4086 130.303 58.831C130.303 58.4001 130.196 58.0118 129.983 57.6662C129.77 57.3158 129.467 57.0412 129.074 56.8423C128.681 56.6387 128.212 56.5369 127.668 56.5369H124.763V60.7983ZM124.763 54.6406H127.369C127.824 54.6406 128.234 54.5578 128.598 54.392C128.963 54.2216 129.249 53.9825 129.458 53.6747C129.671 53.3622 129.777 52.9929 129.777 52.5668C129.777 52.0033 129.578 51.5393 129.181 51.1747C128.788 50.8101 128.203 50.6278 127.426 50.6278H124.763V54.6406ZM139.988 63.2131C138.895 63.2131 137.95 62.9858 137.155 62.5312C136.364 62.072 135.756 61.4233 135.329 60.5852C134.903 59.7424 134.69 58.7505 134.69 57.6094C134.69 56.4872 134.903 55.5024 135.329 54.6548C135.76 53.8026 136.362 53.1397 137.133 52.6662C137.905 52.188 138.812 51.9489 139.854 51.9489C140.526 51.9489 141.16 52.0578 141.757 52.2756C142.358 52.4886 142.889 52.8201 143.348 53.2699C143.812 53.7197 144.176 54.2926 144.442 54.9886C144.707 55.6799 144.839 56.5038 144.839 57.4602V58.2486H135.898V56.5156H142.375C142.37 56.0232 142.264 55.5852 142.055 55.2017C141.847 54.8134 141.556 54.508 141.182 54.2855C140.812 54.063 140.381 53.9517 139.889 53.9517C139.363 53.9517 138.902 54.0795 138.504 54.3352C138.106 54.5862 137.796 54.9176 137.574 55.3295C137.356 55.7367 137.245 56.1842 137.24 56.6719V58.1847C137.24 58.8191 137.356 59.3636 137.588 59.8182C137.82 60.268 138.144 60.6136 138.561 60.8551C138.978 61.0919 139.465 61.2102 140.024 61.2102C140.398 61.2102 140.737 61.1581 141.04 61.054C141.343 60.9451 141.605 60.7865 141.828 60.5781C142.05 60.3698 142.219 60.1117 142.332 59.804L144.733 60.0739C144.581 60.7083 144.292 61.2623 143.866 61.7358C143.445 62.2045 142.905 62.5691 142.247 62.8295C141.589 63.0852 140.836 63.2131 139.988 63.2131ZM155.637 54.9744L153.293 55.2301C153.227 54.9934 153.11 54.7708 152.945 54.5625C152.784 54.3542 152.566 54.1861 152.291 54.0582C152.017 53.9304 151.681 53.8665 151.283 53.8665C150.748 53.8665 150.298 53.9825 149.933 54.2145C149.574 54.4465 149.396 54.7472 149.401 55.1165C149.396 55.4337 149.512 55.6918 149.749 55.8906C149.99 56.0895 150.388 56.2528 150.942 56.3807L152.803 56.7784C153.835 57.0009 154.602 57.3537 155.104 57.8366C155.61 58.3196 155.866 58.9517 155.871 59.733C155.866 60.4195 155.665 61.0256 155.267 61.5511C154.874 62.072 154.327 62.4792 153.627 62.7727C152.926 63.0663 152.121 63.2131 151.212 63.2131C149.877 63.2131 148.802 62.9337 147.987 62.375C147.173 61.8116 146.688 61.0279 146.531 60.0241L149.039 59.7827C149.152 60.2751 149.394 60.6468 149.763 60.8977C150.132 61.1487 150.613 61.2741 151.205 61.2741C151.816 61.2741 152.306 61.1487 152.675 60.8977C153.049 60.6468 153.236 60.3366 153.236 59.9673C153.236 59.6548 153.115 59.3968 152.874 59.1932C152.637 58.9896 152.268 58.8333 151.766 58.7244L149.905 58.3338C148.859 58.116 148.084 57.7491 147.583 57.233C147.081 56.7121 146.832 56.054 146.837 55.2585C146.832 54.5862 147.014 54.0038 147.384 53.5114C147.758 53.0142 148.276 52.6307 148.939 52.3608C149.607 52.0862 150.376 51.9489 151.247 51.9489C152.526 51.9489 153.532 52.2211 154.266 52.7656C155.004 53.3101 155.461 54.0464 155.637 54.9744ZM163.438 52.0909V54.0795H157.167V52.0909H163.438ZM158.715 49.4773H161.286V59.7188C161.286 60.0644 161.338 60.3295 161.443 60.5142C161.552 60.6941 161.694 60.8172 161.869 60.8835C162.044 60.9498 162.238 60.983 162.451 60.983C162.612 60.983 162.759 60.9711 162.892 60.9474C163.029 60.9238 163.133 60.9025 163.204 60.8835L163.637 62.8935C163.5 62.9408 163.303 62.9929 163.048 63.0497C162.797 63.1065 162.489 63.1397 162.124 63.1491C161.481 63.1681 160.901 63.071 160.384 62.858C159.868 62.6402 159.459 62.304 159.156 61.8494C158.857 61.3949 158.711 60.8267 158.715 60.1449V49.4773ZM119.352 87H114.423V72.4545H119.451C120.895 72.4545 122.136 72.7457 123.173 73.3281C124.215 73.9058 125.015 74.7367 125.574 75.821C126.132 76.9053 126.412 78.2027 126.412 79.7131C126.412 81.2282 126.13 82.5303 125.566 83.6193C125.008 84.7083 124.2 85.544 123.145 86.1264C122.093 86.7088 120.829 87 119.352 87ZM117.058 84.7202H119.224C120.237 84.7202 121.083 84.5355 121.76 84.1662C122.437 83.7921 122.946 83.2358 123.287 82.4972C123.627 81.7538 123.798 80.8258 123.798 79.7131C123.798 78.6004 123.627 77.6771 123.287 76.9432C122.946 76.2045 122.441 75.6529 121.774 75.2884C121.111 74.919 120.287 74.7344 119.302 74.7344H117.058V84.7202ZM133.631 87.2131C132.537 87.2131 131.593 86.9858 130.797 86.5312C130.007 86.072 129.398 85.4233 128.972 84.5852C128.546 83.7424 128.333 82.7505 128.333 81.6094C128.333 80.4872 128.546 79.5024 128.972 78.6548C129.403 77.8026 130.004 77.1397 130.776 76.6662C131.548 76.188 132.454 75.9489 133.496 75.9489C134.168 75.9489 134.803 76.0578 135.4 76.2756C136.001 76.4886 136.531 76.8201 136.99 77.2699C137.454 77.7197 137.819 78.2926 138.084 78.9886C138.349 79.6799 138.482 80.5038 138.482 81.4602V82.2486H129.54V80.5156H136.017C136.013 80.0232 135.906 79.5852 135.698 79.2017C135.489 78.8134 135.198 78.508 134.824 78.2855C134.455 78.063 134.024 77.9517 133.532 77.9517C133.006 77.9517 132.544 78.0795 132.147 78.3352C131.749 78.5862 131.439 78.9176 131.216 79.3295C130.998 79.7367 130.887 80.1842 130.882 80.6719V82.1847C130.882 82.8191 130.998 83.3636 131.23 83.8182C131.462 84.268 131.787 84.6136 132.203 84.8551C132.62 85.0919 133.108 85.2102 133.667 85.2102C134.041 85.2102 134.379 85.1581 134.682 85.054C134.985 84.9451 135.248 84.7865 135.471 84.5781C135.693 84.3698 135.861 84.1117 135.975 83.804L138.375 84.0739C138.224 84.7083 137.935 85.2623 137.509 85.7358C137.087 86.2045 136.548 86.5691 135.89 86.8295C135.231 87.0852 134.479 87.2131 133.631 87.2131ZM143.796 87.2202C143.105 87.2202 142.482 87.0971 141.928 86.8509C141.379 86.5999 140.943 86.2306 140.621 85.7429C140.304 85.2552 140.146 84.6539 140.146 83.9389C140.146 83.3234 140.259 82.8144 140.487 82.4119C140.714 82.0095 141.024 81.6875 141.417 81.446C141.81 81.2045 142.253 81.0223 142.745 80.8991C143.242 80.7713 143.756 80.679 144.286 80.6222C144.925 80.5559 145.444 80.4967 145.842 80.4446C146.239 80.3878 146.528 80.3026 146.708 80.1889C146.893 80.0705 146.985 79.8883 146.985 79.642V79.5994C146.985 79.0644 146.826 78.6501 146.509 78.3565C146.192 78.063 145.735 77.9162 145.138 77.9162C144.509 77.9162 144.009 78.0535 143.64 78.3281C143.275 78.6027 143.029 78.9271 142.901 79.3011L140.501 78.9602C140.69 78.2973 141.003 77.7434 141.438 77.2983C141.874 76.8485 142.406 76.5123 143.036 76.2898C143.666 76.0625 144.362 75.9489 145.124 75.9489C145.65 75.9489 146.173 76.0104 146.694 76.1335C147.215 76.2566 147.691 76.4602 148.121 76.7443C148.552 77.0237 148.898 77.4048 149.158 77.8878C149.424 78.3707 149.556 78.9744 149.556 79.6989V87H147.085V85.5014H146.999C146.843 85.8045 146.623 86.0885 146.339 86.3537C146.059 86.6141 145.707 86.8248 145.281 86.9858C144.859 87.142 144.364 87.2202 143.796 87.2202ZM144.464 85.331C144.98 85.331 145.427 85.2292 145.806 85.0256C146.185 84.8172 146.476 84.5426 146.68 84.2017C146.888 83.8608 146.992 83.4891 146.992 83.0866V81.8011C146.912 81.8674 146.774 81.929 146.58 81.9858C146.391 82.0426 146.178 82.0923 145.941 82.1349C145.704 82.1776 145.47 82.2154 145.238 82.2486C145.006 82.2817 144.805 82.3101 144.634 82.3338C144.251 82.3859 143.907 82.4711 143.604 82.5895C143.301 82.7079 143.062 82.8736 142.887 83.0866C142.712 83.295 142.624 83.5649 142.624 83.8963C142.624 84.3698 142.797 84.7273 143.143 84.9688C143.488 85.2102 143.929 85.331 144.464 85.331ZM154.712 72.4545V87H152.141V72.4545H154.712ZM165.978 78.9744L163.635 79.2301C163.568 78.9934 163.452 78.7708 163.287 78.5625C163.126 78.3542 162.908 78.1861 162.633 78.0582C162.359 77.9304 162.022 77.8665 161.625 77.8665C161.09 77.8665 160.64 77.9825 160.275 78.2145C159.915 78.4465 159.738 78.7472 159.743 79.1165C159.738 79.4337 159.854 79.6918 160.091 79.8906C160.332 80.0895 160.73 80.2528 161.284 80.3807L163.145 80.7784C164.177 81.0009 164.944 81.3537 165.446 81.8366C165.952 82.3196 166.208 82.9517 166.213 83.733C166.208 84.4195 166.007 85.0256 165.609 85.5511C165.216 86.072 164.669 86.4792 163.968 86.7727C163.268 87.0663 162.463 87.2131 161.554 87.2131C160.218 87.2131 159.144 86.9337 158.329 86.375C157.515 85.8116 157.029 85.0279 156.873 84.0241L159.38 83.7827C159.494 84.2751 159.735 84.6468 160.105 84.8977C160.474 85.1487 160.955 85.2741 161.547 85.2741C162.157 85.2741 162.647 85.1487 163.017 84.8977C163.391 84.6468 163.578 84.3366 163.578 83.9673C163.578 83.6548 163.457 83.3968 163.216 83.1932C162.979 82.9896 162.609 82.8333 162.108 82.7244L160.247 82.3338C159.2 82.116 158.426 81.7491 157.924 81.233C157.422 80.7121 157.174 80.054 157.179 79.2585C157.174 78.5862 157.356 78.0038 157.725 77.5114C158.1 77.0142 158.618 76.6307 159.281 76.3608C159.949 76.0862 160.718 75.9489 161.589 75.9489C162.868 75.9489 163.874 76.2211 164.608 76.7656C165.346 77.3101 165.803 78.0464 165.978 78.9744Z" fill="#D9D9D9"/>
<defs>
<linearGradient id="paint0_linear_138_5" x1="135" y1="0" x2="135" y2="167" gradientUnits="userSpaceOnUse">
<stop stop-color="#2353CF"/>
<stop offset="1" stop-color="#18FCD3" stopOpacity="0"/>
</linearGradient>
</defs>
</svg> */}


  

  <h1 style={{display : "block",marginTop : "70PX",boxSizing : "border-box",color : "black",fontFamily : "'Noto Sans', sans-serif",fontSize : "30px",fontWeight : "bold",marginBottom : "0px"}}>
  <span style={{color : "black",paddingRight : "2px"}}>Mobile</span><span style={{color:"white",backgroundColor : "black",paddingRight : "7px"}}> Deals</span>
  </h1>
  
  <div className='deals-overflow' style={{display : "block",boxSizing : "border-box",marginTop : "50px",width : "90%",height : "auto",borderRadius : "20px",border : "2px solid #E8307D"}}>
    <div style = {{display : "flex",width : "100%",flexWrap:"nowrap"}}>
     <div style = {{display : "block",boxSizing : "border-box",minWidth : "250px",marginRight : "2%",marginLeft : "2%",marginTop : "30px",marginBottom:"30px"}}>
      <div style={{display : "flex",width : "100%",flexDirection : "column",justifyContent : "center",alignItems : "center"}}>
      <div class = "mobile1" style={{display : "block",boxSizing : "border-box",width : "100%",height : "300px",borderRadius : "10px"}}>
      </div>
       <div style={{color: "black",fontWeight : "bolder",fontFamily : "'Signika',sans-serif",fontSize : "40px",paddingTop : "10px",marginTop:"20px"}}>
        $ 250/-
       </div>
       <div style={{color : "blue",fontSize : "12px",fontWeight : "600",fontFamily : "'Noto Sans', sans-serif",backgroundColor : "#F2F4FF",padding : "5px",borderRadius : "7px"}}>
        Samsung Galaxy
       </div>
       <div style={{display : "flex", width : "100%",justifyContent  :"center",alignItems : "center",gap : "10px",marginTop:"20px"}}>
       <button style={{fontFamily : "'Lato',sans-serif",color : "white",width : "40%",borderRadius : "5px",background : "linear-gradient(90deg,#2334CF,black)",border : "none",paddingTop : "10px",paddingBottom : "10px"}}>Buy</button>
       <button style={{fontFamily : "'Lato',sans-serif",color : "blue",width : "40%",borderRadius : "5px",backgroundColor : "white",border : "1px solid blue",paddingTop : "10px",paddingBottom : "10px"}}>Cart</button>
       </div>
       </div>
     </div>
     <div style = {{display : "block",boxSizing : "border-box",minWidth : "250px",marginRight : "2%",marginLeft : "2%",marginTop : "30px",marginBottom:"30px"}}>
      <div style={{display : "flex",width : "100%",flexDirection : "column",justifyContent : "center",alignItems : "center"}}>
      <div class = "mobile2" style={{display : "block",boxSizing : "border-box",width : "100%",height : "300px",borderRadius : "10px"}}>
      </div>
       <div style={{color: "black",fontWeight : "bolder",fontFamily : "'Signika',sans-serif",fontSize : "40px",paddingTop : "10px",marginTop:"20px"}}>
        $ 300/-
       </div>
       <div style={{color : "blue",fontSize : "12px",fontWeight : "600",fontFamily : "'Noto Sans', sans-serif",backgroundColor : "#F2F4FF",padding : "5px",borderRadius : "7px"}}>
        Lenovo Note
       </div>
       <div style={{display : "flex", width : "100%",justifyContent  :"center",alignItems : "center",gap : "10px",marginTop:"20px"}}>
       <button style={{fontFamily : "'Lato',sans-serif",color : "white",width : "40%",borderRadius : "5px",background : "linear-gradient(90deg,#2334CF,black)",border : "none",paddingTop : "10px",paddingBottom : "10px"}}>Buy</button>
       <button style={{fontFamily : "'Lato',sans-serif",color : "blue",width : "40%",borderRadius : "5px",backgroundColor : "white",border : "1px solid blue",paddingTop : "10px",paddingBottom : "10px"}}>Cart</button>
       </div>
       </div>
     </div>
     <div style = {{display : "block",boxSizing : "border-box",minWidth : "250px",marginRight : "2%",marginLeft : "2%",marginTop : "30px",marginBottom:"30px"}}>
      <div style={{display : "flex",width : "100%",flexDirection : "column",justifyContent : "center",alignItems : "center"}}>
      <div class = "mobile3" style={{display : "block",boxSizing : "border-box",width : "100%",height : "300px",borderRadius : "10px"}}>
      </div>
       <div style={{color: "black",fontWeight : "bolder",fontFamily : "'Signika',sans-serif",fontSize : "40px",paddingTop : "10px",marginTop:"20px"}}>
        $ 375/-
       </div>
       <div style={{color : "blue",fontSize : "12px",fontWeight : "600",fontFamily : "'Noto Sans', sans-serif",backgroundColor : "#F2F4FF",padding : "5px",borderRadius : "7px"}}>
        Xiaomi
       </div>
       <div style={{display : "flex", width : "100%",justifyContent  :"center",alignItems : "center",gap : "10px",marginTop:"20px"}}>
       <button style={{fontFamily : "'Lato',sans-serif",color : "white",width : "40%",borderRadius : "5px",background : "linear-gradient(90deg,#2334CF,black)",border : "none",paddingTop : "10px",paddingBottom : "10px"}}>Buy</button>
       <button style={{fontFamily : "'Lato',sans-serif",color : "blue",width : "40%",borderRadius : "5px",backgroundColor : "white",border : "1px solid blue",paddingTop : "10px",paddingBottom : "10px"}}>Cart</button>
       </div>
       </div>
     </div>
     <div style = {{display : "block",boxSizing : "border-box",minWidth : "250px",marginRight : "2%",marginLeft : "2%",marginTop : "30px",marginBottom:"30px"}}>
      <div style={{display : "flex",width : "100%",flexDirection : "column",justifyContent : "center",alignItems : "center"}}>
      <div class = "mobile4" style={{display : "block",boxSizing : "border-box",width : "100%",height : "300px",borderRadius : "10px"}}>
      </div>
       <div style={{color: "black",fontWeight : "bolder",fontFamily : "'Signika',sans-serif",fontSize : "40px",paddingTop : "10px",marginTop:"20px"}}>
        $ 220/-
       </div>
       <div style={{color : "blue",fontSize : "12px",fontWeight : "600",fontFamily : "'Noto Sans', sans-serif",backgroundColor : "#F2F4FF",padding : "5px",borderRadius : "7px"}}>
        RedMi Note
       </div>
       <div style={{display : "flex", width : "100%",justifyContent  :"center",alignItems : "center",gap : "10px",marginTop:"20px"}}>
       <button style={{fontFamily : "'Lato',sans-serif",color : "white",width : "40%",borderRadius : "5px",background : "linear-gradient(90deg,#2334CF,black)",border : "none",paddingTop : "10px",paddingBottom : "10px"}}>Buy</button>
       <button style={{fontFamily : "'Lato',sans-serif",color : "blue",width : "40%",borderRadius : "5px",backgroundColor : "white",border : "1px solid blue",paddingTop : "10px",paddingBottom : "10px"}}>Cart</button>
       </div>
       </div>
     </div>
     <div style = {{display : "block",boxSizing : "border-box",minWidth : "250px",marginRight : "2%",marginLeft : "2%",marginTop : "30px",marginBottom:"30px"}}>
      <div style={{display : "flex",width : "100%",flexDirection : "column",justifyContent : "center",alignItems : "center"}}>
      <div class = "mobile5" style={{display : "block",boxSizing : "border-box",width : "100%",height : "300px",borderRadius : "10px"}}>
      </div>
       <div style={{color: "black",fontWeight : "bolder",fontFamily : "'Signika',sans-serif",fontSize : "40px",paddingTop : "10px",marginTop:"20px"}}>
        $ 250/-
       </div>
       <div style={{color : "blue",fontSize : "12px",fontWeight : "600",fontFamily : "'Noto Sans', sans-serif",backgroundColor : "#F2F4FF",padding : "5px",borderRadius : "7px"}}>
        Samsung Note
       </div>
       <div style={{display : "flex", width : "100%",justifyContent  :"center",alignItems : "center",gap : "10px",marginTop:"20px"}}>
       <button style={{fontFamily : "'Lato',sans-serif",color : "white",width : "40%",borderRadius : "5px",background : "linear-gradient(90deg,#2334CF,black)",border : "none",paddingTop : "10px",paddingBottom : "10px"}}>Buy</button>
       <button style={{fontFamily : "'Lato',sans-serif",color : "blue",width : "40%",borderRadius : "5px",backgroundColor : "white",border : "1px solid blue",paddingTop : "10px",paddingBottom : "10px"}}>Cart</button>
       </div>
       </div>
     </div>
     <div style = {{display : "block",boxSizing : "border-box",minWidth : "250px",marginRight : "2%",marginLeft : "2%",marginTop : "30px",marginBottom:"30px"}}>
      <div style={{display : "flex",width : "100%",flexDirection : "column",justifyContent : "center",alignItems : "center"}}>
      <div class = "mobile6" style={{display : "block",boxSizing : "border-box",width : "100%",height : "300px",borderRadius : "10px"}}>
      </div>
       <div style={{color: "black",fontWeight : "bolder",fontFamily : "'Signika',sans-serif",fontSize : "40px",paddingTop : "10px",marginTop:"20px"}}>
        $ 250/-
       </div>
       <div style={{color : "blue",fontSize : "12px",fontWeight : "600",fontFamily : "'Noto Sans', sans-serif",backgroundColor : "#F2F4FF",padding : "5px",borderRadius : "7px"}}>
        Iphone
       </div>
       <div style={{display : "flex", width : "100%",justifyContent  :"center",alignItems : "center",gap : "10px",marginTop:"20px"}}>
       <button style={{fontFamily : "'Lato',sans-serif",color : "white",width : "40%",borderRadius : "5px",background : "linear-gradient(90deg,#2334CF,black)",border : "none",paddingTop : "10px",paddingBottom : "10px"}}>Buy</button>
       <button style={{fontFamily : "'Lato',sans-serif",color : "blue",width : "40%",borderRadius : "5px",backgroundColor : "white",border : "1px solid blue",paddingTop : "10px",paddingBottom : "10px"}}>Cart</button>
       </div>
       </div>
     </div>
    </div>
  </div>
  <h1 style={{display : "block",marginTop : "150PX",boxSizing : "border-box",color : "black",fontFamily : "'Noto Sans', sans-serif",fontSize : "30px",fontWeight : "bold",marginBottom : "0px"}}>
  <span style={{color : "black",backgroundColor : "white",paddingRight : "2px"}}>Winter</span><span style={{color:"white",backgroundColor :"black",paddingRight : "7px"}}> Clothes</span>
  </h1>
 
 
  <div className='deals-overflow' style={{display : "block",boxSizing : "border-box",marginTop : "50px",width : "90%",height : "auto",borderRadius : "20px",border : "2px solid #E8307D"}}>
  
    <div style = {{display : "flex",width : "100%",flexWrap:"nowrap"}}>
    
     <div style = {{display : "block",boxSizing : "border-box",minWidth : "250px",marginRight : "2%",marginLeft : "2%",marginTop : "30px",marginBottom:"30px"}}>
      <div style={{display : "flex",width : "100%",flexDirection : "column",justifyContent : "center",alignItems : "center"}}>
      <div class = "item1" style={{display : "block",boxSizing : "border-box",width : "100%",height : "300px",borderRadius : "10px"}}>
      </div>
       <div style={{color: "black",fontWeight : "bolder",fontFamily : "'Signika',sans-serif",fontSize : "40px",paddingTop : "10px",marginTop:"20px"}}>
        $ 20/-
       </div>
       <div style={{color : "blue",fontSize : "12px",fontWeight : "600",fontFamily : "'Noto Sans', sans-serif",backgroundColor : "#F2F4FF",padding : "5px",borderRadius : "7px"}}>
       Full Sleeves Sweater
       </div>
       <div style={{display : "flex", width : "100%",justifyContent  :"center",alignItems : "center",gap : "10px",marginTop:"20px"}}>
       <button style={{fontFamily : "'Lato',sans-serif",color : "white",width : "40%",borderRadius : "5px",background : "linear-gradient(90deg,#2334CF,black)",border : "none",paddingTop : "10px",paddingBottom : "10px"}}>Buy</button>
       <button style={{fontFamily : "'Lato',sans-serif",color : "blue",width : "40%",borderRadius : "5px",backgroundColor : "white",border : "1px solid blue",paddingTop : "10px",paddingBottom : "10px"}}>Cart</button>
       </div>
       </div>
     </div>
     <div style = {{display : "block",boxSizing : "border-box",minWidth : "250px",marginRight : "2%",marginLeft : "2%",marginTop : "30px",marginBottom:"30px"}}>
      <div style={{display : "flex",width : "100%",flexDirection : "column",justifyContent : "center",alignItems : "center"}}>
      <div class = "item2" style={{display : "block",boxSizing : "border-box",width : "100%",height : "300px",borderRadius : "10px"}}>
      </div>
       <div style={{color: "black",fontWeight : "bolder",fontFamily : "'Signika',sans-serif",fontSize : "40px",paddingTop : "10px",marginTop:"20px"}}>
        $ 30/-
       </div>
       <div style={{color : "blue",fontSize : "12px",fontWeight : "600",fontFamily : "'Noto Sans', sans-serif",backgroundColor : "#F2F4FF",padding : "5px",borderRadius : "7px"}}>
        Tight Jeans
       </div>
       <div style={{display : "flex", width : "100%",justifyContent  :"center",alignItems : "center",gap : "10px",marginTop:"20px"}}>
       <button style={{fontFamily : "'Lato',sans-serif",color : "white",width : "40%",borderRadius : "5px",background : "linear-gradient(90deg,#2334CF,black)",border : "none",paddingTop : "10px",paddingBottom : "10px"}}>Buy</button>
       <button style={{fontFamily : "'Lato',sans-serif",color : "blue",width : "40%",borderRadius : "5px",backgroundColor : "white",border : "1px solid blue",paddingTop : "10px",paddingBottom : "10px"}}>Cart</button>
       </div>
       </div>
     </div>
     <div style = {{display : "block",boxSizing : "border-box",minWidth : "250px",marginRight : "2%",marginLeft : "2%",marginTop : "30px",marginBottom:"30px"}}>
      <div style={{display : "flex",width : "100%",flexDirection : "column",justifyContent : "center",alignItems : "center"}}>
      <div class = "item3" style={{display : "block",boxSizing : "border-box",width : "100%",height : "300px",borderRadius : "10px"}}>
      </div>
       <div style={{color: "black",fontWeight : "bolder",fontFamily : "'Signika',sans-serif",fontSize : "40px",paddingTop : "10px",marginTop:"20px"}}>
        $ 37/-
       </div>
       <div style={{color : "blue",fontSize : "12px",fontWeight : "600",fontFamily : "'Noto Sans', sans-serif",backgroundColor : "#F2F4FF",padding : "5px",borderRadius : "7px"}}>
       Black Shirt
       </div>
       <div style={{display : "flex", width : "100%",justifyContent  :"center",alignItems : "center",gap : "10px",marginTop:"20px"}}>
       <button style={{fontFamily : "'Lato',sans-serif",color : "white",width : "40%",borderRadius : "5px",background : "linear-gradient(90deg,#2334CF,black)",border : "none",paddingTop : "10px",paddingBottom : "10px"}}>Buy</button>
       <button style={{fontFamily : "'Lato',sans-serif",color : "blue",width : "40%",borderRadius : "5px",backgroundColor : "white",border : "1px solid blue",paddingTop : "10px",paddingBottom : "10px"}}>Cart</button>
       </div>
       </div>
     </div>
     <div style = {{display : "block",boxSizing : "border-box",minWidth : "250px",marginRight : "2%",marginLeft : "2%",marginTop : "30px",marginBottom:"30px"}}>
      <div style={{display : "flex",width : "100%",flexDirection : "column",justifyContent : "center",alignItems : "center"}}>
      <div class = "item4" style={{display : "block",boxSizing : "border-box",width : "100%",height : "300px",borderRadius : "10px"}}>
      </div>
       <div style={{color: "black",fontWeight : "bolder",fontFamily : "'Signika',sans-serif",fontSize : "40px",paddingTop : "10px",marginTop:"20px"}}>
        $ 22/-
       </div>
       <div style={{color : "blue",fontSize : "12px",fontWeight : "600",fontFamily : "'Noto Sans', sans-serif",backgroundColor : "#F2F4FF",padding : "5px",borderRadius : "7px"}}>
        White Tshirts
       </div>
       <div style={{display : "flex", width : "100%",justifyContent  :"center",alignItems : "center",gap : "10px",marginTop:"20px"}}>
       <button style={{fontFamily : "'Lato',sans-serif",color : "white",width : "40%",borderRadius : "5px",background : "linear-gradient(90deg,#2334CF,black)",border : "none",paddingTop : "10px",paddingBottom : "10px"}}>Buy</button>
       <button style={{fontFamily : "'Lato',sans-serif",color : "blue",width : "40%",borderRadius : "5px",backgroundColor : "white",border : "1px solid blue",paddingTop : "10px",paddingBottom : "10px"}}>Cart</button>
       </div>
       </div>
     </div>
     <div style = {{display : "block",boxSizing : "border-box",minWidth : "250px",marginRight : "2%",marginLeft : "2%",marginTop : "30px",marginBottom:"30px"}}>
      <div style={{display : "flex",width : "100%",flexDirection : "column",justifyContent : "center",alignItems : "center"}}>
      <div class = "item5" style={{display : "block",boxSizing : "border-box",width : "100%",height : "300px",borderRadius : "10px"}}>
      </div>
       <div style={{color: "black",fontWeight : "bolder",fontFamily : "'Signika',sans-serif",fontSize : "40px",paddingTop : "10px",marginTop:"20px"}}>
        $ 25/-
       </div>
       <div style={{color : "blue",fontSize : "12px",fontWeight : "600",fontFamily : "'Noto Sans', sans-serif",backgroundColor : "#F2F4FF",padding : "5px",borderRadius : "7px"}}>
        Trousers
       </div>
       <div style={{display : "flex", width : "100%",justifyContent  :"center",alignItems : "center",gap : "10px",marginTop:"20px"}}>
       <button style={{fontFamily : "'Lato',sans-serif",color : "white",width : "40%",borderRadius : "5px",background : "linear-gradient(90deg,#2334CF,black)",border : "none",paddingTop : "10px",paddingBottom : "10px"}}>Buy</button>
       <button style={{fontFamily : "'Lato',sans-serif",color : "blue",width : "40%",borderRadius : "5px",backgroundColor : "white",border : "1px solid blue",paddingTop : "10px",paddingBottom : "10px"}}>Cart</button>
       </div>
       </div>
     </div>
     <div style = {{display : "block",boxSizing : "border-box",minWidth : "250px",marginRight : "2%",marginLeft : "2%",marginTop : "30px",marginBottom:"30px"}}>
      <div style={{display : "flex",width : "100%",flexDirection : "column",justifyContent : "center",alignItems : "center"}}>
      <div class = "item6" style={{display : "block",boxSizing : "border-box",width : "100%",height : "300px",borderRadius : "10px"}}>
      </div>
       <div style={{color: "black",fontWeight : "bolder",fontFamily : "'Signika',sans-serif",fontSize : "40px",paddingTop : "10px",marginTop:"20px"}}>
        $ 25/-
       </div>
       <div style={{color : "blue",fontSize : "12px",fontWeight : "600",fontFamily : "'Noto Sans', sans-serif",backgroundColor : "#F2F4FF",padding : "5px",borderRadius : "7px"}}>
        Sweater
       </div>
       <div style={{display : "flex", width : "100%",justifyContent  :"center",alignItems : "center",gap : "10px",marginTop:"20px"}}>
       <button style={{fontFamily : "'Lato',sans-serif",color : "white",width : "40%",borderRadius : "5px",background : "linear-gradient(90deg,#2334CF,black)",border : "none",paddingTop : "10px",paddingBottom : "10px"}}>Buy</button>
       <button style={{fontFamily : "'Lato',sans-serif",color : "blue",width : "40%",borderRadius : "5px",backgroundColor : "white",border : "1px solid blue",paddingTop : "10px",paddingBottom : "10px"}}>Cart</button>
       </div>
       </div>
     </div>
     
    </div>

  </div>
  
  <h1 style={{display : "block",marginTop : "150PX",boxSizing : "border-box",color : "black",fontFamily : "'Noto Sans', sans-serif",fontSize : "30px",fontWeight : "bold",marginBottom : "0px"}}>
  <span style={{color : "black",backgroundColor : "white",paddingRight : "2px"}}>Hot</span><span style={{color:"white",backgroundColor : "black",paddingRight : "7px"}}> Picks</span>
  </h1>
  
  <div className='deals-overflow' style={{display : "block",boxSizing : "border-box",marginTop : "50px",width : "90%",height : "auto",borderRadius : "20px",border : "2px solid #E8307D"}}>
    <div style = {{display : "flex",width : "100%",flexWrap:"nowrap"}}>
     <div style = {{display : "block",boxSizing : "border-box",minWidth : "250px",marginRight : "2%",marginLeft : "2%",marginTop : "30px",marginBottom:"30px"}}>
      <div style={{display : "flex",width : "100%",flexDirection : "column",justifyContent : "center",alignItems : "center"}}>
      <div class = "s1" style={{display : "block",boxSizing : "border-box",width : "100%",height : "300px",borderRadius : "10px"}}>
      </div>
       <div style={{color: "black",fontWeight : "bolder",fontFamily : "'Signika',sans-serif",fontSize : "40px",paddingTop : "10px",marginTop:"20px"}}>
        $ 25/-
       </div>
       <div style={{color : "blue",fontSize : "12px",fontWeight : "600",fontFamily : "'Noto Sans', sans-serif",backgroundColor : "#F2F4FF",padding : "5px",borderRadius : "7px"}}>
        Cricket kit
       </div>
       <div style={{display : "flex", width : "100%",justifyContent  :"center",alignItems : "center",gap : "10px",marginTop:"20px"}}>
       <button style={{fontFamily : "'Lato',sans-serif",color : "white",width : "40%",borderRadius : "5px",background : "linear-gradient(90deg,#2334CF,black)",border : "none",paddingTop : "10px",paddingBottom : "10px"}}>Buy</button>
       <button style={{fontFamily : "'Lato',sans-serif",color : "blue",width : "40%",borderRadius : "5px",backgroundColor : "white",border : "1px solid blue",paddingTop : "10px",paddingBottom : "10px"}}>Cart</button>
       </div>
       </div>
     </div>
     <div style = {{display : "block",boxSizing : "border-box",minWidth : "250px",marginRight : "2%",marginLeft : "2%",marginTop : "30px",marginBottom:"30px"}}>
      <div style={{display : "flex",width : "100%",flexDirection : "column",justifyContent : "center",alignItems : "center"}}>
      <div class = "s2" style={{display : "block",boxSizing : "border-box",width : "100%",height : "300px",borderRadius : "10px"}}>
      </div>
       <div style={{color: "black",fontWeight : "bolder",fontFamily : "'Signika',sans-serif",fontSize : "40px",paddingTop : "10px",marginTop:"20px"}}>
        $ 300/-
       </div>
       <div style={{color : "blue",fontSize : "12px",fontWeight : "600",fontFamily : "'Noto Sans', sans-serif",backgroundColor : "#F2F4FF",padding : "5px",borderRadius : "7px"}}>
       Refrigrator
       </div>
       <div style={{display : "flex", width : "100%",justifyContent  :"center",alignItems : "center",gap : "10px",marginTop:"20px"}}>
       <button style={{fontFamily : "'Lato',sans-serif",color : "white",width : "40%",borderRadius : "5px",background : "linear-gradient(90deg,#2334CF,black)",border : "none",paddingTop : "10px",paddingBottom : "10px"}}>Buy</button>
       <button style={{fontFamily : "'Lato',sans-serif",color : "blue",width : "40%",borderRadius : "5px",backgroundColor : "white",border : "1px solid blue",paddingTop : "10px",paddingBottom : "10px"}}>Cart</button>
       </div>
       </div>
     </div>
     <div style = {{display : "block",boxSizing : "border-box",minWidth : "250px",marginRight : "2%",marginLeft : "2%",marginTop : "30px",marginBottom:"30px"}}>
      <div style={{display : "flex",width : "100%",flexDirection : "column",justifyContent : "center",alignItems : "center"}}>
      <div class = "s3" style={{display : "block",boxSizing : "border-box",width : "100%",height : "300px",borderRadius : "10px"}}>
      </div>
       <div style={{color: "black",fontWeight : "bolder",fontFamily : "'Signika',sans-serif",fontSize : "40px",paddingTop : "10px",marginTop:"20px"}}>
        $ 375/-
       </div>
       <div style={{color : "blue",fontSize : "12px",fontWeight : "600",fontFamily : "'Noto Sans', sans-serif",backgroundColor : "#F2F4FF",padding : "5px",borderRadius : "7px"}}>
        American Tourister
       </div>
       <div style={{display : "flex", width : "100%",justifyContent  :"center",alignItems : "center",gap : "10px",marginTop:"20px"}}>
       <button style={{fontFamily : "'Lato',sans-serif",color : "white",width : "40%",borderRadius : "5px",background : "linear-gradient(90deg,#2334CF,black)",border : "none",paddingTop : "10px",paddingBottom : "10px"}}>Buy</button>
       <button style={{fontFamily : "'Lato',sans-serif",color : "blue",width : "40%",borderRadius : "5px",backgroundColor : "white",border : "1px solid blue",paddingTop : "10px",paddingBottom : "10px"}}>Cart</button>
       </div>
       </div>
     </div>
     <div style = {{display : "block",boxSizing : "border-box",minWidth : "250px",marginRight : "2%",marginLeft : "2%",marginTop : "30px",marginBottom:"30px"}}>
      <div style={{display : "flex",width : "100%",flexDirection : "column",justifyContent : "center",alignItems : "center"}}>
      <div class = "s4" style={{display : "block",boxSizing : "border-box",width : "100%",height : "300px",borderRadius : "10px"}}>
      </div>
       <div style={{color: "black",fontWeight : "bolder",fontFamily : "'Signika',sans-serif",fontSize : "40px",paddingTop : "10px",marginTop:"20px"}}>
        $ 22/-
       </div>
       <div style={{color : "blue",fontSize : "12px",fontWeight : "600",fontFamily : "'Noto Sans', sans-serif",backgroundColor : "#F2F4FF",padding : "5px",borderRadius : "7px"}}>
        Nike Shoes
       </div>
       <div style={{display : "flex", width : "100%",justifyContent  :"center",alignItems : "center",gap : "10px",marginTop:"20px"}}>
       <button style={{fontFamily : "'Lato',sans-serif",color : "white",width : "40%",borderRadius : "5px",background : "linear-gradient(90deg,#2334CF,black)",border : "none",paddingTop : "10px",paddingBottom : "10px"}}>Buy</button>
       <button style={{fontFamily : "'Lato',sans-serif",color : "blue",width : "40%",borderRadius : "5px",backgroundColor : "white",border : "1px solid blue",paddingTop : "10px",paddingBottom : "10px"}}>Cart</button>
       </div>
       </div>
     </div>
     <div style = {{display : "block",boxSizing : "border-box",minWidth : "250px",marginRight : "2%",marginLeft : "2%",marginTop : "30px",marginBottom:"30px"}}>
      <div style={{display : "flex",width : "100%",flexDirection : "column",justifyContent : "center",alignItems : "center"}}>
      <div class = "s5" style={{display : "block",boxSizing : "border-box",width : "100%",height : "300px",borderRadius : "10px"}}>
      </div>
       <div style={{color: "black",fontWeight : "bolder",fontFamily : "'Signika',sans-serif",fontSize : "40px",paddingTop : "10px",marginTop:"20px"}}>
        $ 25/-
       </div>
       <div style={{color : "blue",fontSize : "12px",fontWeight : "600",fontFamily : "'Noto Sans', sans-serif",backgroundColor : "#F2F4FF",padding : "5px",borderRadius : "7px"}}>
        Fast Track Watch
       </div>
       <div style={{display : "flex", width : "100%",justifyContent  :"center",alignItems : "center",gap : "10px",marginTop:"20px"}}>
       <button style={{fontFamily : "'Lato',sans-serif",color : "white",width : "40%",borderRadius : "5px",background : "linear-gradient(90deg,#2334CF,black)",border : "none",paddingTop : "10px",paddingBottom : "10px"}}>Buy</button>
       <button style={{fontFamily : "'Lato',sans-serif",color : "blue",width : "40%",borderRadius : "5px",backgroundColor : "white",border : "1px solid blue",paddingTop : "10px",paddingBottom : "10px"}}>Cart</button>
       </div>
       </div>
     </div>
     <div style = {{display : "block",boxSizing : "border-box",minWidth : "250px",marginRight : "2%",marginLeft : "2%",marginTop : "30px",marginBottom:"30px"}}>
      <div style={{display : "flex",width : "100%",flexDirection : "column",justifyContent : "center",alignItems : "center"}}>
      <div class = "s6" style={{display : "block",boxSizing : "border-box",width : "100%",height : "300px",borderRadius : "10px"}}>
      </div>
       <div style={{color: "black",fontWeight : "bolder",fontFamily : "'Signika',sans-serif",fontSize : "40px",paddingTop : "10px",marginTop:"20px"}}>
        $ 30/-
       </div>
       <div style={{color : "blue",fontSize : "12px",fontWeight : "600",fontFamily : "'Noto Sans', sans-serif",backgroundColor : "#F2F4FF",padding : "5px",borderRadius : "7px"}}>
        Hiar Gel
       </div>
       <div style={{display : "flex", width : "100%",justifyContent  :"center",alignItems : "center",gap : "10px",marginTop:"20px"}}>
       <button style={{fontFamily : "'Lato',sans-serif",color : "white",width : "40%",borderRadius : "5px",background : "linear-gradient(90deg,#2334CF,black)",border : "none",paddingTop : "10px",paddingBottom : "10px"}}>Buy</button>
       <button style={{fontFamily : "'Lato',sans-serif",color : "blue",width : "40%",borderRadius : "5px",backgroundColor : "white",border : "1px solid blue",paddingTop : "10px",paddingBottom : "10px"}}>Cart</button>
       </div>
       </div>
     </div>
    </div>
  </div>

<div style = {{display : "block",boxSizing : "border-box",width : "90%",marginTop : "200px"}}>
<div style={{display : "flex",width : "100%",height : "100%",}}>
<div style = {{display : "block",boxSizing : "border-box",width : "45%",height : "400px",overflow:"hidden",marginRight : "10%",position:"relative"}}>
<div style={{display : "flex",width : "100%",height : "100%",}}>
<div class = "di slider" style = {{display : "block",boxSizing : "border-box",width : "100%",height : "100%",transition: "opacity 1s",
    transitionTimingFunction: "ease-out",position : "absolute"}}>
<img style={{minWidth : "100%",height : "100%",filter : "brightness(50%)"}} src={imag1} alt = 'shoppingimage 1'/>
</div>
<div class = "di dig" style = {{display : "block",boxSizing : "border-box",width : "100%",height : "100%",transition: "opacity 3s",
    transitionTimingFunction: "ease-out",position : "absolute"}}>
<img style={{minWidth : "100%",height : "100%",filter : "brightness(50%)"}}  src={imag2} alt='image2'/>
</div>
<div class = "di dig" style = {{display : "block",boxSizing : "border-box",width : "100%",height : "100%",transition: "opacity 3s",
    transitionTimingFunction: "ease-out",position : "absolute"}}>
<img style={{minWidth : "100%",height : "100%",filter : "brightness(50%)"}} src={imag3} alt='imag3'/>
</div>
<div   onClick={()=>displayimage(iterator - 1)}   style={{display : "block",boxSizing : "border-box",position : "absolute",left : "2%",top : "50%",cursor : "pointer"}}>
<i style={{fontSize:"24px",color : "white"}} className="fa fa-arrow-circle-left"></i>
</div>
<div  onClick={()=>displayimage(iterator + 1)} style={{display : "block",boxSizing : "border-box",position : "absolute",right : "2%",top : "50%",cursor : "pointer"}}>
<i style={{fontSize:"24px",color : "white"}} class="fa">&#xf0a9;</i>
</div>
<div  style={{display : "block",boxSizing : "border-box",position : "absolute",bottom : "2%",left : "47%"}}>
<i onClick={()=>displayimage(0)}  style = {{color : "white"}} className="fa fa-circle"></i>
</div>
<div  style={{display : "block",boxSizing : "border-box",position : "absolute",bottom : "2%",left : "50%"}}>
<i onClick={()=>displayimage(1)} style = {{color : "gray"}} className="fa fa-circle"></i>
</div>
<div   style={{display : "block",boxSizing : "border-box",position : "absolute",bottom : "2%",left : "53%"}}>
<i  onClick={()=>displayimage(2)} style = {{color : "gray"}}className="fa fa-circle"></i>
</div>

</div>
</div>
<div style={{display : "block",boxSizing : "border-box", width : "45%"}}>
<div style={{display : "flex",width : "100%",flexDirection : "column",justifyContent : "flex-start",alignItems : "flex-start"}}>
  <h1 style={{fontSize : "30px",fontWeight : "bold",fontFamily : "'Noto Sans',sans-serif",color : " rgb(232, 48, 125)",textDecoration : "underline",textDecorationColor : "lightgray"}}>
   User Experience
  </h1>
  
  <h3 style={{fontFamily : "'Noto Sans',sans-serif"}}>
  <i  style = {{color : " rgb(232, 48, 125) "}}className="fa fa-circle"></i> Better Experience</h3>
  <h3 style={{fontFamily : "'Noto Sans',sans-serif"}}><i  style = {{color : " rgb(232, 48, 125) "}}className="fa fa-circle"></i> Fast Delivery</h3>
 <h3 style={{fontFamily : "'Noto Sans',sans-serif"}}> <i  style = {{color : " rgb(232, 48, 125) "}}className="fa fa-circle"></i> Low Cost Emi</h3>
  <h3 style={{fontFamily : "'Noto Sans',sans-serif"}}><i  style = {{color : " rgb(232, 48, 125) "}}className="fa fa-circle"></i> Sale In Every offers
  </h3>
</div>
</div>
  </div>
  </div>
      <div style={{backgroundColor : "black" ,display : "flex",width : "100%",marginTop : "150px"}}>
      <div style={{display : "block",boxSizing : "border-box",width : "100%",marginTop : "60px"}}>
         <div style={{display : "flex", boxSizing: 'border-box',width : "100%"}}>
          <div style={{display : "block",boxSizing : "border-box",minWidth : "25%"}}>
          <div style={{display : "flex",flexDirection : "column",padding : "40px"}}>
            <div style={{color : "white",fontSize : "14px",fontFamily : "sans-serif",marginBottom : "13px",color : " rgb(232, 48, 125) "}}>About</div>
            <a href ="contact" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>Contact us</a>
            <a href ="about" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>About us</a>
            <a href ="press" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>Press</a>
            <a href ="careers" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>Careers</a>
          </div>
         </div>
         <div style={{display : "block",boxSizing : "border-box",minWidth : "25%"}}>
          <div style={{display : "flex",flexDirection : "column",padding : "40px"}}>
            <div style={{color : "white",fontSize : "14px",fontFamily : "sans-serif",marginBottom : "13px",color : " rgb(232, 48, 125) "}}>Help</div>
            <a href ="contact" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>Payment</a>
            <a href ="about" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>Shipping</a>
            <a href ="press" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>Cancellation</a>
            <a href ="careers" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>FAQ</a>
          </div>
         </div>
         <div style={{display : "block",boxSizing : "border-box",minWidth : "25%"}}>
          <div style={{display : "flex",flexDirection : "column",padding : "40px"}}>
            <div style={{color : "white",fontSize : "14px",fontFamily : "sans-serif",marginBottom : "13px",color : " rgb(232, 48, 125) "}}>Policy</div>
            <a href ="contact" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>Return Policy</a>
            <a href ="about" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>Terms of use</a>
            <a href ="press" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>Security</a>
            <a href ="careers" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>Privacy</a>
          </div>
         </div>
         <div style={{display : "block",boxSizing : "border-box",minWidth : "25%"}}>
          <div style={{display : "flex",flexDirection : "column",padding : "40px"}}>
            <div style={{color : "white",fontSize : "14px",fontFamily : "sans-serif",marginBottom : "13px",color : " rgb(232, 48, 125) "}}>Social</div>
            <a href ="about" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>Facebook</a>
            <a href ="press" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>Twitter</a>
            <a href ="careers" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>You Tube</a>
          </div>
         </div>
      </div>
      </div>
      
      </div>
  
  </div>
  </div>
  )
}

export default Home