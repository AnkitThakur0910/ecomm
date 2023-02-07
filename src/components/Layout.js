import React, { useEffect } from 'react'
import imag from '../images/phone-1869510_960_720 (1).jpg';
import imag2 from '../images/tamanna-rumee-mIqyYpSNq3o-unsplash.jpg';
import imag3 from '../images/airplane-3702676.jpg';
import imag4 from '../images/picky.png';
import './Style.css';
import { color } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const style = {
  minWidth: "50%",
  float: "left",

}

function Layout() {

  useEffect(()=>{

    const interval2 = setInterval(()=>{
        
          const toggle = document.getElementsByClassName('toggler');
             if(toggle[0].style.borderColor === "aqua")
             {
              toggle[0].style.borderColor = "blue"
             }
             else if(toggle[0].style.borderColor === "blue")
             {
              toggle[0].style.borderColor = "aqua";
            
             }
        },1000)
      
      return ()=>clearInterval(interval2)
  },[])
  
   useEffect(()=>{
    
    
    
    let type = 0;
    const interval = setInterval(()=>{
   
      let content = document.getElementsByClassName('provider');
      if(type===content[0].innerText.length)
      {
        content[1].innerText = "|";
        type=0;
      }
      
      else if(content[0].innerText.charAt(type)===";")
      {
        content[1].innerText = content[1].innerText+" "+content[0].innerText.charAt(type+1);
        type++;
        type++;
      }
      else if(content[0].innerText.charAt(type)===',')
      {
        content[1].innerText = "|";
        type++;
      }
      else{
      content[1].innerText = content[1].innerText+content[0].innerText.charAt(type);
      type++;
      }
    },400);

    return ()=> clearInterval(interval)
   },[])

 

 
  const navigate = useNavigate();
  return (
    <div style={{backgroundColor : "whitesmoke"}}>
      <div style={{ display: "block", width: "100%",height : "120px", position: "relative", zIndex: "6", boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}>
        <div style={{ width: "100%", display: 'flex',height:"100%"}}>
          <div className = "shopping" style={{ display : "block",boxSizing : "border-box",height :"100%",width:"100%",textAlign : "center"}}>
           <span style = {{display : "none"}} className='provider'>SHOP;NOW,BEST;DEALS</span>
            <span style={{color : "white",fontSize:"50px"}} className='provider'>|</span>
          </div>
        </div>
      </div>
     
      <div style={{ display: "block", width: "100%", position: "relative", zIndex: "6", maxHeight: "370px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px", overflow: "hidden", marginTop: "20px" }}>
        <div style={{ display: "flex", width: "100%", maxWidth: "1600px", justifyContent: "center", marginBottom: "2px" }} >
          <div style={{ display: "block", boxSizing: "border-box", width: "1600px" }}>
          {/* <div className = "toggler" style={{display : "block",boxSizing : "border-box",position : "absolute",transform : "translate(-50%,-50%)",top : "50%",left : "50%",border : "10px solid aqua",borderRadius : "50%",justifyContent : "center",alignItems : "center",transition : "0.3 ease"}}> <i  style = {{fontSize : "30px",color : "black",padding : "12px"}} className="fa">&#xf07a;</i> </div> */}
          
            <img className= "shadowing"style={{ display: "block", boxSizing: "border-box", width: "100%", height: "100%" }} src={imag2} alt="mobile" />
          </div>
          {/* <div>
          <img style={{  display: "block",boxSizing:"border-box", width : "1280px", position: "relative",overflow : "hidden" }}src={imag2} alt = "tv" />
        </div>
        <div>
          <img style={{  display: "block",boxSizing:"border-box", width : "1280px", position: "relative",overflow : "hidden" }} src={imag3} alt = "tv" />
        </div> */}
        </div>
      </div>
      <div className = "shide" style={{ display: 'block', boxSizing: 'border-box', width: "96%", overflowX: "auto", boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px", marginTop: "60px",backgroundColor:"white",marginLeft : "2%",borderRadius : "5px"}}>
        <div style={{width : "40px",height : "10px",backgroundColor : "blue"}}></div>
        <div style={{ display: "flex", boxSizing: 'border-box', width: "130%" }}>
          <div className="electronics desc" style={{ minWidth: "140px", display: 'block', boxSizing: "border-box", textAlign: "center", width: "14%" }}>
            <div style={{ display: "flex", flexDirection: "column", boxSizing: "border-box", paddingTop: "50px", paddingRight: "20px", paddingLeft: "20px", justifyContent: "flex-end", height: "100%", paddingBottom: "100px" }}>
              <div   style={{
                display: 'block', boxSizing: 'border-box', width: "100%", marginBlockStart: "0.83em",
                marginBlockEnd: "0.83em", wordWrap: "break-word"
              }}>ELECTRONICS</div>
              <div onClick={()=>{navigate('/electronics')}} style={{ display: 'block', boxSizing: 'border-box', width: "100%", marginTop: "4px" }}><button style={{ fontSize: "14px", fontWeight: "500px", backgroundColor : "blue", color: "white", border: "none", fontFamily: "Roboto,Arial,sans-serif", paddingTop: "10px", paddingBottom: "10px", paddingLeft: "20px", paddingRight: "20px", position: "relative", zIndex: "6", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: "2px", outline: "none",cursor: "pointer" }}>VIEW ALL</button></div>
            </div>
          </div>
          <div className = "elec" style={{ display: 'block', boxSizing: 'border-box', width: "86%", minWidth: "600px" }}>
            <div style={{ display: "flex", boxSizing: 'border-box', width: "100%" }}>
              <div className="box" style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", width : "100%",minWidth:"120px" }} src='https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div className="box" style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Camera
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 3999
                  </div>
                  
                </div>
              </div>
              <div className="box" style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div className="box" style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/ks7tuvk0/gimbal/v/z/7/0-43-om4-se-dji-original-imag5u6rgsdh6k4g.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div className="box" style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div className="box" style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/ko8xtow0/monitor/b/s/i/d27-30-66b8kac6in-lenovo-original-imag2qwzkuw5rfmg.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div className="box" style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box',maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/kfmv9u80/monitor/9/n/v/ha220q-um-ww0si-a01-acer-original-imafwfjq3gzgjvz5.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className = "shide" style={{ display: 'block', boxSizing: 'border-box', width: "96%",marginLeft : "2%",borderRadius : "5px", overflowX: "auto", boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px", marginTop: "60px",backgroundColor:"white" }}>
      <div style={{width : "40px",height : "10px",backgroundColor : "blue"}}></div>
        <div style={{ display: "flex", boxSizing: 'border-box', width: "130%" }}>
          <div className="food desc" style={{ minWidth: "140px", display: 'block', boxSizing: "border-box", textAlign: "center", width: "14%" }}>
            <div style={{ display: "flex", flexDirection: "column", boxSizing: "border-box", paddingTop: "50px", paddingRight: "20px", paddingLeft: "20px", justifyContent: "flex-end", height: "100%", paddingBottom: "100px" }}>
              <div style={{
                display: 'block', boxSizing: 'border-box', width: "100%", marginBlockStart: "0.83em",
                marginBlockEnd: "0.83em", wordWrap: "break-word"
              }}>FOOD & TOYS</div>
              <div style={{ display: 'block', boxSizing: 'border-box', width: "100%", marginTop: "4px" }}><button style={{ fontSize: "14px", fontWeight: "500px", backgroundColor : "blue", color: "white", border: "none", fontFamily: "Roboto,Arial,sans-serif", paddingTop: "10px", paddingBottom: "10px", paddingLeft: "20px", paddingRight: "20px", position: "relative", zIndex: "6", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: "2px", outline: "none" }}>VIEW ALL</button></div>
            </div>
          </div>
          <div style={{ display: 'block', boxSizing: 'border-box', width: "86%", minWidth: "600px" }}>
            <div style={{ display: "flex", boxSizing: 'border-box', width: "100%" }}>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", width : "100%",minWidth:"120px" }} src='https://rukminim1.flixcart.com/image/200/200/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/klzhq4w0/jam-spread/w/q/u/510-chocolate-peanut-butter-crunchy-510g-jar-nut-butter-original-imagyzpqqfaguxny.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Camera
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 3999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/k3j1z0w0/kit/d/v/e/combo-of-ab-wheel-rollerand-tummy-trimmer-exercisee1s-charuvi-original-imafdwh9nyzyujvk.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/kdj4xow0/treadmill/b/g/c/ft098-steel-motorized-ft98-steel-motorized-motorized-fitkit-original-imafuerskytashcz.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/jb5e4y80/soap/x/e/u/3-375-pure-and-gentle-soap-bar-pears-original-imafykhkbnzsjqhd.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box',maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/kdbzqfk0/bar/8/h/q/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='shide' style={{ display: 'block', boxSizing: 'border-box', width: "96%",marginLeft : "2%",borderRadius : "5px", overflowX: "auto", boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px", marginTop: "60px",backgroundColor:"white" }}>
      <div style={{width : "40px",height : "10px",backgroundColor : "blue"}}></div>
        <div style={{ display: "flex", boxSizing: 'border-box', width: "130%" }}>
          <div className="newyear desc" style={{ minWidth: "140px", display: 'block', boxSizing: "border-box", textAlign: "center", width: "14%" }}>
            <div style={{ display: "flex", flexDirection: "column", boxSizing: "border-box", paddingTop: "50px", paddingRight: "20px", paddingLeft: "20px", justifyContent: "flex-end", height: "100%", paddingBottom: "100px" }}>
              <div style={{
                display: 'block', boxSizing: 'border-box', width: "100%", marginBlockStart: "0.83em",
                marginBlockEnd: "0.83em", wordWrap: "break-word"
              }}>NEW YEAR</div>
              <div style={{ display: 'block', boxSizing: 'border-box', width: "100%", marginTop: "4px" }}><button style={{ fontSize: "14px", fontWeight: "500px", backgroundColor : "blue", color: "white", border: "none", fontFamily: "Roboto,Arial,sans-serif", paddingTop: "10px", paddingBottom: "10px", paddingLeft: "20px", paddingRight: "20px", position: "relative", zIndex: "6", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: "2px", outline: "none" }}>VIEW ALL</button></div>
            </div>
          </div>
          <div style={{ display: 'block', boxSizing: 'border-box', width: "86%", minWidth: "600px" }}>
            <div style={{ display: "flex", boxSizing: 'border-box', width: "100%" }}>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", width : "100%",minWidth:"120px" }} src='https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Camera
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 3999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/ks7tuvk0/gimbal/v/z/7/0-43-om4-se-dji-original-imag5u6rgsdh6k4g.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/ko8xtow0/monitor/b/s/i/d27-30-66b8kac6in-lenovo-original-imag2qwzkuw5rfmg.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box',maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/kfmv9u80/monitor/9/n/v/ha220q-um-ww0si-a01-acer-original-imafwfjq3gzgjvz5.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className = "shide" style={{ display: 'block', boxSizing: 'border-box', width: "96%",marginLeft : "2%",borderRadius : "5px", overflowX: "auto", boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px", marginTop: "60px",backgroundColor:"white" }}>
      <div style={{width : "40px",height : "10px",backgroundColor : "blue"}}></div>
        <div style={{ display: "flex", boxSizing: 'border-box', width: "130%" }}>
          <div className="winter desc" style={{ minWidth: "140px", display: 'block', boxSizing: "border-box", textAlign: "center", width: "14%" }}>
            <div style={{ display: "flex", flexDirection: "column", boxSizing: "border-box", paddingTop: "50px", paddingRight: "20px", paddingLeft: "20px", justifyContent: "flex-end", height: "100%", paddingBottom: "100px" }}>
              <div style={{
                display: 'block', boxSizing: 'border-box', width: "100%", marginBlockStart: "0.83em",
                marginBlockEnd: "0.83em", wordWrap: "break-word"
              }}>WINTER</div>
              <div style={{ display: 'block', boxSizing: 'border-box', width: "100%", marginTop: "4px" }}><button style={{ fontSize: "14px", fontWeight: "500px", backgroundColor : "blue", color: "white", border: "none", fontFamily: "Roboto,Arial,sans-serif", paddingTop: "10px", paddingBottom: "10px", paddingLeft: "20px", paddingRight: "20px", position: "relative", zIndex: "6", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: "2px", outline: "none" }}>VIEW ALL</button></div>
            </div>
          </div>
          <div style={{ display: 'block', boxSizing: 'border-box', width: "86%", minWidth: "600px" }}>
            <div style={{ display: "flex", boxSizing: 'border-box', width: "100%" }}>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", width : "100%",minWidth:"120px" }} src='https://rukminim1.flixcart.com/image/200/200/kruyw7k0/smart-band-tag/o/u/l/no-standard-cartoon-character-waterproof-led-kids-watch-for-boys-original-imag5kf2mgukhthn.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/xif0q/trouser/c/q/4/34-grey1trouser-btz-lycra-sf-khatu-shyam-fashion-original-imagch8m9fzhhymw-bb.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Camera
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 3999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/l0fm07k0/plant-sapling/j/b/d/no-perennial-yes-thai-bari-1-malta-mosambi-sweet-lemon-grafted-original-imagc89hvysgfuft.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/ks6ef0w0/immersion-rod/l/a/x/1000-high-quality-craftify-original-imag5t3ygd6dh2q3.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/k41mp3k0/bedsheet/h/d/7/bedsheet-rpp-2-flat-rajasthani-collection-original-imafm43j6tbwmzzt.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/xif0q/kids-apparel-combo/f/7/b/6-12-months-mom-dad-cutehug-original-imagkgtthzqsrcyw.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box',maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/xif0q/jacket/c/f/0/s-mnt-7003-montrez-original-imagffv4hs3k6quc-bb.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='shide' style={{ display: 'block', boxSizing: 'border-box', width: "96%",marginLeft : "2%",borderRadius : "5px", overflowX: "auto", boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px", marginTop: "60px",backgroundColor:"white" }}>
      <div style={{width : "40px",height : "10px",backgroundColor : "blue"}}></div>
        <div style={{ display: "flex", boxSizing: 'border-box', width: "130%" }}>
          <div className="sports desc" style={{ minWidth: "140px", display: 'block', boxSizing: "border-box", textAlign: "center", width: "14%" }}>
            <div style={{ display: "flex", flexDirection: "column", boxSizing: "border-box", paddingTop: "50px", paddingRight: "20px", paddingLeft: "20px", justifyContent: "flex-end", height: "100%", paddingBottom: "100px" }}>
              <div style={{
                display: 'block', boxSizing: 'border-box', width: "100%", marginBlockStart: "0.83em",
                marginBlockEnd: "0.83em", wordWrap: "break-word"
              }}>SPORTS</div>
              <div style={{ display: 'block', boxSizing: 'border-box', width: "100%", marginTop: "4px" }}><button style={{ fontSize: "14px", fontWeight: "500px", backgroundColor : "blue", color: "white", border: "none", fontFamily: "Roboto,Arial,sans-serif", paddingTop: "10px", paddingBottom: "10px", paddingLeft: "20px", paddingRight: "20px", position: "relative", zIndex: "6", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: "2px", outline: "none" }}>VIEW ALL</button></div>
            </div>
          </div>
          <div style={{ display: 'block', boxSizing: 'border-box', width: "86%", minWidth: "600px" }}>
            <div style={{ display: "flex", boxSizing: 'border-box', width: "100%" }}>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", width : "100%",minWidth:"120px" }} src='https://rukminim1.flixcart.com/image/200/200/kcp4osw0/cap/5/t/2/free-combo-woolen-cap-muffler-and-gloves-poshing-original-imaftrycnbfus837.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Camera
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 3999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/ks7tuvk0/gimbal/v/z/7/0-43-om4-se-dji-original-imag5u6rgsdh6k4g.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/ko8xtow0/monitor/b/s/i/d27-30-66b8kac6in-lenovo-original-imag2qwzkuw5rfmg.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box',maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/kfmv9u80/monitor/9/n/v/ha220q-um-ww0si-a01-acer-original-imafwfjq3gzgjvz5.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='shide' style={{ display: 'block', boxSizing: 'border-box', width: "96%",marginLeft : "2%",borderRadius : "5px", overflowX: "auto", boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px", marginTop: "60px",backgroundColor:"white" }}>
      <div style={{width : "40px",height : "10px",backgroundColor : "blue"}}></div>
        <div style={{ display: "flex", boxSizing: 'border-box', width: "130%" }}>
          <div className="home desc" style={{ minWidth: "140px", display: 'block', boxSizing: "border-box", textAlign: "center", width: "14%" }}>
            <div style={{ display: "flex", flexDirection: "column", boxSizing: "border-box", paddingTop: "50px", paddingRight: "20px", paddingLeft: "20px", justifyContent: "flex-end", height: "100%", paddingBottom: "100px" }}>
              <div style={{
                display: 'block', boxSizing: 'border-box', width: "100%", marginBlockStart: "0.83em",
                marginBlockEnd: "0.83em", wordWrap: "break-word"
              }}>HOME</div>
              <div style={{ display: 'block', boxSizing: 'border-box', width: "100%", marginTop: "4px" }}><button style={{ fontSize: "14px", fontWeight: "500px", backgroundColor : "blue", color: "white", border: "none", fontFamily: "Roboto,Arial,sans-serif", paddingTop: "10px", paddingBottom: "10px", paddingLeft: "20px", paddingRight: "20px", position: "relative", zIndex: "6", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: "2px", outline: "none" }}>VIEW ALL</button></div>
            </div>
          </div>
          <div style={{ display: 'block', boxSizing: 'border-box', width: "86%", minWidth: "600px" }}>
            <div style={{ display: "flex", boxSizing: 'border-box', width: "100%" }}>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", width : "100%",minWidth:"120px" }} src='https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Camera
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 3999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/ks7tuvk0/gimbal/v/z/7/0-43-om4-se-dji-original-imag5u6rgsdh6k4g.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box', maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/ko8xtow0/monitor/b/s/i/d27-30-66b8kac6in-lenovo-original-imag2qwzkuw5rfmg.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
              <div style={{ display: 'block', boxSizing: 'border-box', flexGrow: "1" }}>
                <div style={{ display: "flex", boxSizing: 'border-box', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                  <div style={{ display: 'block', boxSizing: 'border-box', maxHeight: "200px", maxWidth: "200px", marginTop: "10px", marginBottom: "15px" }}>
                    <img style={{ display: 'block', boxSizing: 'border-box',maxHeight: "120px", minWidth: "120px",width : "100%" }} src='https://rukminim1.flixcart.com/image/200/200/kfmv9u80/monitor/9/n/v/ha220q-um-ww0si-a01-acer-original-imafwfjq3gzgjvz5.jpeg?q=70' alt="printers" />
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "15px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "bold" }}>
                    Printer
                  </div>
                  <div style={{ display: 'block', boxSizing: 'border-box', marginTop: "10px", fontFamily: "Roboto,Arial,sans-serif", color : "grey", fontSize: "14px" }}>
                    From 5999
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
      <div style={{backgroundColor : "black"}}>
      <div style={{display : "block",boxSizing : "border-box",width : "100%",marginTop : "60px"}}>
         <div style={{display : "flex", boxSizing: 'border-box',width : "100%"}}>
          <div style={{display : "block",boxSizing : "border-box",minWidth : "25%"}}>
          <div style={{display : "flex",flexDirection : "column",padding : "40px"}}>
            <div style={{color : "white",fontSize : "14px",fontFamily : "sans-serif",marginBottom : "13px"}}>About</div>
            <a href ="contact" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>Contact us</a>
            <a href ="about" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>About us</a>
            <a href ="press" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>Press</a>
            <a href ="careers" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>Careers</a>
          </div>
         </div>
         <div style={{display : "block",boxSizing : "border-box",minWidth : "25%"}}>
          <div style={{display : "flex",flexDirection : "column",padding : "40px"}}>
            <div style={{color : "white",fontSize : "14px",fontFamily : "sans-serif",marginBottom : "13px"}}>Help</div>
            <a href ="contact" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>Payment</a>
            <a href ="about" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>Shipping</a>
            <a href ="press" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>Cancellation</a>
            <a href ="careers" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>FAQ</a>
          </div>
         </div>
         <div style={{display : "block",boxSizing : "border-box",minWidth : "25%"}}>
          <div style={{display : "flex",flexDirection : "column",padding : "40px"}}>
            <div style={{color : "white",fontSize : "14px",fontFamily : "sans-serif",marginBottom : "13px"}}>Policy</div>
            <a href ="contact" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>Return Policy</a>
            <a href ="about" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>Terms of use</a>
            <a href ="press" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>Security</a>
            <a href ="careers" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>Privacy</a>
          </div>
         </div>
         <div style={{display : "block",boxSizing : "border-box",minWidth : "25%"}}>
          <div style={{display : "flex",flexDirection : "column",padding : "40px"}}>
            <div style={{color : "white",fontSize : "14px",fontFamily : "sans-serif",marginBottom : "13px"}}>Social</div>
            <a href ="about" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>Facebook</a>
            <a href ="press" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>Twitter</a>
            <a href ="careers" style = {{color : "white",fontSize : "12px",fontFamily : "sans-serif",marginBottom : "10px"}}>You Tube</a>
          </div>
         </div>
      </div>
      </div>
      <div style={{backgroundColor : "#EB0941",borderTop:"1px solid grey"}}>
       <div style={{display : "flex"}}>
        <div style={{fontSize : "14px",fontFamily : "sans-serif",padding : "20px",paddingLeft : "30px",color : "black"}}></div>
        <div style={{fontSize : "14px",fontFamily : "sans-serif",padding : "20px",paddingLeft : "30px", color : "bla"}}></div>
       </div>
      </div>
      </div>
    </div>
  )
}

export default Layout