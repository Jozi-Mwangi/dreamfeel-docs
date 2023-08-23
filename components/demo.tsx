import  product  from "/images/product.jpg"

export  function Demo (){
    return (
        <>
            <div style={{display: "flex", flexDirection:"row", gap:"50px", height:"800px", maxWidth:"100%"}} >
                <div style={{height: "330px", width:"400px", position:"sticky" }}>
                <img src={product} alt="Product" style={{height:"fit", width:"full"}} />
                </div>
                <div style={{paddingLeft: "10px", display:"flex", flexDirection:"column"}}>
                    <div style={{height:"280px", width:"160px"}} >Product detail</div>
                    <div style={{height:"35px"}} >price</div>
                    <div style={{height:"20.5px", paddingBottom:"5px"}} >tax included</div>
                    <div style={{height:"158px", paddingBottom:"5px"}} >size</div>
                    <div style={{height:"48px", display:"flex", flexDirection:"column", alignItems:"flex-start", padding:"10px", justifyContent:"center", gap:"5px"}} >
                        <button type="submit" style={{padding:"10px", border:"solid"}} >Add to cart</button>
                        <button style={{padding:"10px", border:"solid"}} >Lipa virahis</button>
                        <a href="#" style={{padding:"10px", }} >More Options</a>
                    </div>

                </div>
            </div>
        </>
    )
}