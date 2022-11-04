import styled from "styled-components";
import {useNavigate} from 'react-router-dom';
import Navbar from "../components/Navbar";
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

export default function SellerAccount(){
    const navigate = useNavigate();

    const handleSell = () => {
        navigate("/sellerHome")
    }
    return(
        <div>
            <Navbar/>
            <Button onClick={handleSell}>Sell Your Product</Button>
        </div>
    )
}