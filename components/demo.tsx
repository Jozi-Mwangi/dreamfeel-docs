import {FaRegThumbsUp, FaRegThumbsDown} from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import Image from "next/image";

export  function Demo (){
    return (
        <>
            <div style={{display:"flex", marginTop:"20px", flexDirection:"row", gap:"50px", height:"800px", maxWidth:"100%", }} >
                <div style={{ position:"sticky", top:"0px" }}>
                <Image src="/images/product.jpg" alt="Product" width={500} height={500} />
                </div>
                <div style={{paddingLeft: "10px", display:"flex", flexDirection:"column"}}>
                    <div style={{height:"110px", maxWidth:"100%", marginBottom:"5px", borderBottom:"2px solid gray"}} >
                        <span style={{fontSize:"20px"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laborum quis nulla impedit.
                        </span>
                    </div>
                    <div style={{height:"35px",  marginTop:"25px", marginBottom:"5px"}} >Ksh 49,000</div>
                    <div style={{height:"20.5px", paddingBottom:"5px", fontSize:"8px", color:"gray", marginTop:"0"}} >tax included.</div>

                    <div style={{height:"158px",paddingTop:"5px", justifyItems:"center", alignItems:"center", paddingBottom:"5px", display:"flex", flexDirection:"column",   }} >
                        <div style={{margin:"20px", fontSize:"10px", display:"flex", paddingBottom:"5px", flexDirection:"column", width:"200px"}} >
                            <i>Sold by</i>
                            <span>Galore Electronics</span>
                            <div style={{display:"flex", fontSize:"20px", padding:"10px", marginLeft:"0px", gap:"50px"}} >
                            <button type="submit" ><FaRegThumbsUp/></button>
                            <button type="submit" ><FaRegThumbsDown/></button>
                            </div>
                        </div>
                    </div>
                    <div style={{width:"415px", justifyContent:"flex-start"}}  >
                        <div style={{height:"48px", display:"flex", flexDirection:"column", marginTop:"30px",  padding:"10px", justifyContent:"center", gap:"5px"}} >
                            <div style={{display:"flex", justifyContent:"space-between", gap:"30px"}} >
                                <button type="submit" style={{padding:"10px", display:"flex", alignItems:"center", gap:"5px", backgroundColor:"gray", borderRadius:"10px", color:"white" }} >Add to Cart <span><BsCart4/></span></button>
                                <button style={{padding:"10px", backgroundColor:"gray", borderRadius:"10px", color:"white"}} >Feel-pay Checkout</button>
                            </div>
                            <a href="#" style={{padding:"10px", backgroundColor:"gray",width:"100%", color:"white", marginTop:"10px", textAlign:"center" }} >Ask a Question</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}