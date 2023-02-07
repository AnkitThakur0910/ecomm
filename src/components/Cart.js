import React, { useState } from 'react'
import imag1 from '../images/akt21____picky_logo_pinkred_and_blue_4081eeac-f8aa-441e-b33c-f583061cc258.png'
import './Style.css'

function Cart() {

    const [state, setState] = useState(1)
    const mon = 12000
    const [money,setMoney] = useState(mon)
  return (
   
     <div style={{display : "block",boxSizing : "border-box",width : "100%",minHeight : "712px",backgroundColor : "#f4f4f4"}}>
        <div style={{display : "flex",Width : "100%",justifyContent : "center",alignItems : "center",flexDirection : "column"}}>
            
             <div style = {{display : "block",boxSizing : "border-box",width : "100%",textAlign : "center",marginTop : "5%"}}>
                <h1 style={{margin : "0",padding : "0", color : "black",fontFamily : "'Noto Sans',sans-serif"}}>Your cart!</h1>
                <p style={{fontFamily : "'Noto Sans',sans-serif"}}>Items added to the cart shown here</p>
             </div>
             <div style={{backgroundColor : "#E8307D",width : "10%",height : "10px",marginBottom : "5%"}}>

             </div>
             <div style = {{display : "block",boxSizing : "border-box",width : "100%"}}>
                <div style={{display : "flex",width : "100%",flexWrap : "wrap"}}>
                 <div style={{display : "block",boxSizing : "border-box",width : "20%",backgroundColor : "white",zIndex : "7",position : "relative",boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",marginLeft : "10%",marginRight :"10%",marginBottom : "40px"}}>
                  <div style={{display :"flex",width : "100%",flexDirection : "column",justifyContent : "center",alignItems : "center"}}>
                    <div style = {{display : "block",boxSizing : "border-box",width : "100%",maxHeight : "250px",overflow : "hidden",position : "relative"}}>
                    <div style={{width : "23px",height : "20px",backgroundColor : "#E8307D",position : "absolute",textAlign : "center",color : "white"}}>X</div>
                    
                    <img src={imag1} style = {{width : "100%",height : "auto"}} alt = "imagofcartitem"/>
                    </div>
                   <h3 style={{fontFamily : "'Noto Sans',sans-serif"}}>Samsung Iphone</h3>
                    <p style={{margin: "0"}}>Rs 12000/-</p>
                    <div style={{backgroundColor : "lightgray",height : "2px",width : "100%",marginTop : "20px",marginBottom : "20px"}}>

                    </div>
                    <div style={{display : "block",boxSizing : "border-box",width : "100%",marginBottom : "10px"}}>
                        <div style={{display : "flex",width : "100%",justifyContent : "center",alignItems : "center",gap : "20px"}}>
                        <i className="fa fa-shopping-cart" style={{fontSize:"18px"}}></i>
                        <div style={{display : "block",boxSizing : "border-box",backgroundColor : "white",border : "1px solid black", width : "20px",height : "20px" }}></div>
                        <div style={{display : "flex"}}>
                        <div style={{display : "block",boxSizing : "border-box",backgroundColor : "white",border : "1px solid black", width : "20px",height : "20px" }}></div>
                        <div style={{display : "block",boxSizing : "border-box",backgroundColor : "white",border : "1px solid black", width : "20px",height : "20px" }}></div>
                        </div>
                        </div>
                    </div>
                    <button style={{display : "block",backgroundColor : "black",marginTop : "10px",color : "white",width : "50%",height : "30px",borderRadius : "20px",fontFamily : "'Noto Sans',sans-serif",marginBottom : "20px"}}>
                        Buy Now
                    </button>
                  </div>
                 </div>
                 <div style={{display : "block",boxSizing : "border-box",width : "20%",backgroundColor : "white",zIndex : "7",position : "relative",boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",marginBottom : "40px"}}>
                  <div style={{display :"flex",width : "100%",flexDirection : "column",justifyContent : "center",alignItems : "center"}}>
                    <div style = {{display : "block",boxSizing : "border-box",width : "100%",maxHeight : "250px",overflow : "hidden",position : "relative"}}>
                    <div style={{width : "23px",height : "20px",backgroundColor : "#E8307D",position : "absolute",textAlign : "center",color : "white"}}>X</div>
                    
                    <img src={imag1} style = {{width : "100%",height : "auto"}} alt = "imagofcartitem" />
                    </div>
                   <h3 style={{fontFamily : "'Noto Sans',sans-serif"}}>Samsung Iphone</h3>
                    <p style={{margin: "0"}}>Rs 12000/-</p>
                    <div style={{backgroundColor : "lightgray",height : "2px",width : "100%",marginTop : "20px",marginBottom : "20px"}}>

                    </div>
                    <div style={{display : "block",boxSizing : "border-box",width : "100%",marginBottom : "10px"}}>
                        <div style={{display : "flex",width : "100%",justifyContent : "center",alignItems : "center",gap : "20px"}}>
                        <i className="fa fa-shopping-cart" style={{fontSize:"18px"}}></i>
                        <div style={{display : "block",boxSizing : "border-box",backgroundColor : "white",border : "1px solid black", width : "20px",height : "20px" }}></div>
                        <div style={{display : "flex"}}>
                        <div style={{display : "block",boxSizing : "border-box",backgroundColor : "white",border : "1px solid black", width : "20px",height : "20px" }}></div>
                        <div style={{display : "block",boxSizing : "border-box",backgroundColor : "white",border : "1px solid black", width : "20px",height : "20px" }}></div>
                        </div>
                        </div>
                    </div>
                    <button style={{display : "block",backgroundColor : "black",marginTop : "10px",color : "white",width : "50%",height : "30px",borderRadius : "20px",fontFamily : "'Noto Sans',sans-serif",marginBottom : "20px"}}>
                        Buy Now
                    </button>
                  </div>
                 </div>
                 <div style={{display : "block",boxSizing : "border-box",width : "20%",backgroundColor : "white",zIndex : "7",position : "relative",boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",marginLeft : "10%",marginRight :"10%",marginBottom : "40px"}}>
                  <div style={{display :"flex",width : "100%",flexDirection : "column",justifyContent : "center",alignItems : "center"}}>
                    <div style = {{display : "block",boxSizing : "border-box",width : "100%",maxHeight : "250px",overflow : "hidden",position : "relative"}}>
                    <div style={{width : "23px",height : "20px",backgroundColor : "#E8307D",position : "absolute",textAlign : "center",color : "white"}}>X</div>
                    
                    <img src={imag1} style = {{width : "100%",height : "auto"}} alt = "imagofcartitem"/>
                    </div>
                   <h3 style={{fontFamily : "'Noto Sans',sans-serif"}}>Samsung Iphone</h3>
                    <p style={{margin: "0"}}>Rs {money}/-</p>
                    <div style={{backgroundColor : "lightgray",height : "2px",width : "100%",marginTop : "20px",marginBottom : "20px"}}>

                    </div>
                    <div style={{display : "block",boxSizing : "border-box",width : "100%",marginBottom : "10px"}}>
                        <div style={{display : "flex",width : "100%",justifyContent : "center",alignItems : "center",gap : "20px"}}>
                        <i className="fa fa-shopping-cart" style={{fontSize:"18px"}}></i>
                        <div style={{display : "block",boxSizing : "border-box",backgroundColor : "white",border : "1px solid black", width : "20px",height : "20px",textAlign : "center",alignItems : "center",overflow : "hidden" }}>{state}</div>
                        <div style={{display : "flex"}}>
                        <div  onClick={()=>{setState(state+1);setMoney(mon + money)}} style={{display : "block",boxSizing : "border-box",backgroundColor : "black",border : "1px solid black", width : "20px",height : "20px",textAlign : "center",verticalAlign : "center",color : "white",cursor : "pointer" }}>+</div>
                        <div  onClick={()=>{if(state-1>0){setState(state-1);setMoney(-mon + money)}}} style={{display : "block",boxSizing : "border-box",backgroundColor : "white",border : "1px solid black", width : "20px",height : "20px", textAlign : "center",cursor : "pointer" }}>-</div>
                        </div>
                        </div>
                    </div>
                    <button style={{display : "block",backgroundColor : "black",marginTop : "10px",color : "white",width : "50%",height : "30px",borderRadius : "20px",fontFamily : "'Noto Sans',sans-serif",marginBottom : "20px"}}>
                        Buy Now
                    </button>
                  </div>
                 </div>
                 <div style={{display : "block",boxSizing : "border-box",width : "20%",backgroundColor : "white",zIndex : "7",position : "relative",boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",marginLeft : "10%",marginRight :"10%",marginBottom : "40px"}}>
                  <div style={{display :"flex",width : "100%",flexDirection : "column",justifyContent : "center",alignItems : "center"}}>
                    <div style = {{display : "block",boxSizing : "border-box",width : "100%",maxHeight : "250px",overflow : "hidden",position : "relative"}}>
                    <div style={{width : "23px",height : "20px",backgroundColor : "#E8307D",position : "absolute",textAlign : "center",color : "white"}}>X</div>
                    
                    <img src={imag1} style = {{width : "100%",height : "auto"}} alt = "imagofcartitem"/>
                    </div>
                   <h3 style={{fontFamily : "'Noto Sans',sans-serif"}}>Samsung Iphone</h3>
                    <p style={{margin: "0"}}>Rs 12000/-</p>
                    <div style={{backgroundColor : "lightgray",height : "2px",width : "100%",marginTop : "20px",marginBottom : "20px"}}>

                    </div>
                    <div style={{display : "block",boxSizing : "border-box",width : "100%",marginBottom : "10px"}}>
                        <div style={{display : "flex",width : "100%",justifyContent : "center",alignItems : "center",gap : "20px"}}>
                        <i className="fa fa-shopping-cart" style={{fontSize:"18px"}}></i>
                        <div style={{display : "block",boxSizing : "border-box",backgroundColor : "white",border : "1px solid black", width : "20px",height : "20px" }}></div>
                        <div style={{display : "flex"}}>
                        <div style={{display : "block",boxSizing : "border-box",backgroundColor : "white",border : "1px solid black", width : "20px",height : "20px" }}></div>
                        <div style={{display : "block",boxSizing : "border-box",backgroundColor : "white",border : "1px solid black", width : "20px",height : "20px" }}></div>
                        </div>
                        </div>
                    </div>
                    <button style={{display : "block",backgroundColor : "black",marginTop : "10px",color : "white",width : "50%",height : "30px",borderRadius : "20px",fontFamily : "'Noto Sans',sans-serif",marginBottom : "20px"}}>
                        Buy Now
                    </button>
                  </div>
                 </div>
                 <div style={{display : "block",boxSizing : "border-box",width : "20%",backgroundColor : "white",zIndex : "7",position : "relative",boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",marginBottom : "40px"}}>
                  <div style={{display :"flex",width : "100%",flexDirection : "column",justifyContent : "center",alignItems : "center"}}>
                    <div style = {{display : "block",boxSizing : "border-box",width : "100%",maxHeight : "250px",overflow : "hidden",position : "relative"}}>
                    <div style={{width : "23px",height : "20px",backgroundColor : "#E8307D",position : "absolute",textAlign : "center",color : "white"}}>X</div>
                    
                    <img src={imag1} style = {{width : "100%",height : "auto"}} alt = "imagofcartitem"/>
                    </div>
                   <h3 style={{fontFamily : "'Noto Sans',sans-serif"}}>Samsung Iphone</h3>
                    <p style={{margin: "0"}}>Rs 12000/-</p>
                    <div style={{backgroundColor : "lightgray",height : "2px",width : "100%",marginTop : "20px",marginBottom : "20px"}}>

                    </div>
                    <div style={{display : "block",boxSizing : "border-box",width : "100%",marginBottom : "10px"}}>
                        <div style={{display : "flex",width : "100%",justifyContent : "center",alignItems : "center",gap : "20px"}}>
                        <i className="fa fa-shopping-cart" style={{fontSize:"18px"}}></i>
                        <div style={{display : "block",boxSizing : "border-box",backgroundColor : "white",border : "1px solid black", width : "20px",height : "20px" }}></div>
                        <div style={{display : "flex"}}>
                        <div style={{display : "block",boxSizing : "border-box",backgroundColor : "white",border : "1px solid black", width : "20px",height : "20px" }}></div>
                        <div style={{display : "block",boxSizing : "border-box",backgroundColor : "white",border : "1px solid black", width : "20px",height : "20px" }}></div>
                        </div>
                        </div>
                    </div>
                    <button style={{display : "block",backgroundColor : "black",marginTop : "10px",color : "white",width : "50%",height : "30px",borderRadius : "20px",fontFamily : "'Noto Sans',sans-serif",marginBottom : "20px"}}>
                        Buy Now
                    </button>
                  </div>
                 </div>
                 <div style={{display : "block",boxSizing : "border-box",width : "20%",backgroundColor : "white",zIndex : "7",position : "relative",boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",marginLeft : "10%",marginRight :"10%",marginBottom : "40px"}}>
                  <div style={{display :"flex",width : "100%",flexDirection : "column",justifyContent : "center",alignItems : "center"}}>
                    <div style = {{display : "block",boxSizing : "border-box",width : "100%",maxHeight : "250px",overflow : "hidden",position : "relative"}}>
                    <div style={{width : "23px",height : "20px",backgroundColor : "#E8307D",position : "absolute",textAlign : "center",color : "white"}}>X</div>
                    
                    <img src={imag1} style = {{width : "100%",height : "auto"}} alt = "imagofcartitem"/>
                    </div>
                   <h3 style={{fontFamily : "'Noto Sans',sans-serif"}}>Samsung Iphone</h3>
                    <p style={{margin: "0"}}>Rs 12000/-</p>
                    <div style={{backgroundColor : "lightgray",height : "2px",width : "100%",marginTop : "20px",marginBottom : "20px"}}>

                    </div>
                    <div style={{display : "block",boxSizing : "border-box",width : "100%",marginBottom : "10px"}}>
                        <div style={{display : "flex",width : "100%",justifyContent : "center",alignItems : "center",gap : "20px"}}>
                        <i className="fa fa-shopping-cart" style={{fontSize:"18px"}}></i>
                        <div style={{display : "block",boxSizing : "border-box",backgroundColor : "white",border : "1px solid black", width : "20px",height : "20px" }}></div>
                        <div style={{display : "flex"}}>
                        <div style={{display : "block",boxSizing : "border-box",backgroundColor : "white",border : "1px solid black", width : "20px",height : "20px" }}></div>
                        <div style={{display : "block",boxSizing : "border-box",backgroundColor : "white",border : "1px solid black", width : "20px",height : "20px" }}></div>
                        </div>
                        </div>
                    </div>
                    <button style={{display : "block",backgroundColor : "black",marginTop : "10px",color : "white",width : "50%",height : "30px",borderRadius : "20px",fontFamily : "'Noto Sans',sans-serif",marginBottom : "20px"}}>
                        Buy Now
                    </button>
                  </div>
                 </div>
                 <div style={{display : "block",boxSizing : "border-box",width : "20%",backgroundColor : "white",zIndex : "7",position : "relative",boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",marginLeft : "10%",marginRight :"10%",marginBottom : "40px"}}>
                  <div style={{display :"flex",width : "100%",flexDirection : "column",justifyContent : "center",alignItems : "center"}}>
                    <div style = {{display : "block",boxSizing : "border-box",width : "100%",maxHeight : "250px",overflow : "hidden",position : "relative"}}>
                    <div style={{width : "23px",height : "20px",backgroundColor : "#E8307D",position : "absolute",textAlign : "center",color : "white"}}>X</div>
                    
                    <img src={imag1} style = {{width : "100%",height : "auto"}} alt = "imagofcartitem"/>
                    </div>
                   <h3 style={{fontFamily : "'Noto Sans',sans-serif"}}>Samsung Iphone</h3>
                    <p style={{margin: "0"}}>Rs 12000/-</p>
                    <div style={{backgroundColor : "lightgray",height : "2px",width : "100%",marginTop : "20px",marginBottom : "20px"}}>

                    </div>
                    <div style={{display : "block",boxSizing : "border-box",width : "100%",marginBottom : "10px"}}>
                        <div style={{display : "flex",width : "100%",justifyContent : "center",alignItems : "center",gap : "20px"}}>
                        <i className="fa fa-shopping-cart" style={{fontSize:"18px"}}></i>
                        <div style={{display : "block",boxSizing : "border-box",backgroundColor : "white",border : "1px solid black", width : "20px",height : "20px" }}></div>
                        <div style={{display : "flex"}}>
                        <div style={{display : "block",boxSizing : "border-box",backgroundColor : "white",border : "1px solid black", width : "20px",height : "20px" }}></div>
                        <div style={{display : "block",boxSizing : "border-box",backgroundColor : "white",border : "1px solid black", width : "20px",height : "20px" }}></div>
                        </div>
                        </div>
                    </div>
                    <button style={{display : "block",backgroundColor : "black",marginTop : "10px",color : "white",width : "50%",height : "30px",borderRadius : "20px",fontFamily : "'Noto Sans',sans-serif",marginBottom : "40px"}}>
                        Buy Now
                    </button>
                  </div>
                 </div>
                </div>

             </div>
        </div>
     </div>
 
  )
}

export default Cart