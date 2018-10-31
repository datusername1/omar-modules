const banner =  {
  height: '800px',
  backgroundColor: '#ededed',
  width:"100%",
  position:"absolute",
  left:"0",
  top:"0",
  overflow:"hidden"
}

const detailsContent = {
  display:"flex",
  flexFlow:"row-reverse",
  marginTop:"0",
  float:"none",
  position:"relative",
  marginBottom:"15px",
  width:'1280px',
  paddingLeft:"15px",
  paddingRight:"15px",
  marginLeft:"auto",
  marginRight:'auto'
}

const details = {
  paddingLeft:'15px',
  paddingRight:'15px',
  width: '30.333%',
  backgroundColor: 'white',
  height: '800px'
}

const productDetails = {
  minHeight:"840px",
  position:"relative",
  zIndex:"4"
}

const productCarousel = {
  position:"absolute",
  left:"0",
  top:"0",
  float:"none",
  marginBottom:"20px",
  width:"65.03%"
}

const status = {
  fontStyle:"italic",
  top:'0',
  left:"0",
  transform:"none",
  padding:"7px",
  margin:"30px 30px 30px 0",
  fontSize:"13px",
  textAlign:"center",
  display:'inline-block',
  lineHeight:"1.1em",
  position:"absolute",
  maxWidth:'90%',
  whiteSpace:'nowrap',
  letterSpacing:"2px",
  transformOrigin:"right top",
  backgroundColor:"#fff",
  color:"#000"
}

module.exports.banner = banner;
module.exports.details = details;
module.exports.detailsContent = detailsContent;
module.exports.productDetails = productDetails
module.exports.productCarousel = productCarousel
module.exports.status = status