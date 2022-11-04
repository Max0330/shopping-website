import { useState } from "react"
import Uploadimg from "../components/uploadImg"
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/footer"
const Div = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top:30px;
margin-bottom:30px;
border-bottom: 1px solid #ccc;
padding: 10px
`
const Div1 = styled.div`
padding-top: 2vw;
padding-bottom: 2vw;
border: 1px black;
margin-left:20vw;
margin-right:20vw;
margin-top:20px;
background: white;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
`
const Input = styled.input`
width: 500px;
      padding: 11px 13px;
      background: #f9f9fa;
      color: black;
      margin-bottom: 0.9rem;
      border-radius: 4px;
      outline: 0;
      border-width: 0 0 1px;
      border-color: black;
      font-size: 14px;
      transition: all 0.3s ease-out;
      :hover {
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
      }
    `;
    const Detailinput = styled.textarea`
      width: 500px;
      height: 300px;
      padding: 11px 13px;
      background: #f9f9fa;
      color: black;
      margin-bottom: 0.9rem;
      border-radius: 4px;
      outline: 0;
      border-width: 0 1px 1px;
      border-color: black;
      font-size: 14px;
      transition: all 0.3s ease-out;
      :hover {
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
      }
    `;
    const Button = styled.button`
      max-width: 100%;
      padding: 11px 13px;
      color: black;
      font-weight: 600;
      text-transform: uppercase;
      background: #f0e68c;
      border: none;
      border-radius: 3px;
      outline: 0;
      cursor: pointer;
      margin-top: 0.6rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease-out;
    `;
    const Button1 = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin: 1em;
  margin-left: 133em;
  padding: 0.25em 1em;
`
export default function SellerHome() {
    const[productTitle, setProductTitle] = useState("");
    const[productDetail, setProductDetail] = useState("");
    const[productImg, setProductImg] = useState(null)
    const[sellPrice, setSellPrice] = useState(0);
    const handleTitle = e => {
        setProductTitle(e.target.value)
    }    
    const handleDetail = e => {
        setProductDetail(e.target.value)
    } 
    const handlePrice = e => {
        setSellPrice(e.target.value)
    }
    const handleList = () => {
        console.log({productTitle, productDetail, sellPrice, productImg})
    }
    return (
        <>
        <style>{'body { background-color: #f0eeec; }'}</style>
        <Navbar/>
        <Button1>back</Button1>
        <Div1>
           
            <Div>
                <Input value={productTitle} onChange={handleTitle} placeholder="type your product name"/>
            </Div>
            <Div>
                <Detailinput value={productDetail} onChange={handleDetail} placeholder="type your product details"/>
                
                
            </Div>
            <div style={{paddingLeft:"16vw"}}>
            <Uploadimg productImg={productImg} setProductImg={setProductImg}/>
            </div>

            <Div>
                <Input type="number" placeholder="type your product price" value={sellPrice} onChange={handlePrice}/>
            </Div>
            <div style={{paddingLeft:"16vw"}}>
            <Button onClick={handleList}>List Your Item</Button>
            </div>
            
        </Div1>
        
        </>
        
    )
}