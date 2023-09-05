import React from "react";
import styled from "styled-components";

const Nav = styled.div`
height: 70px;
background:linear-gradient(170deg, #1bc059, #0d47a1);
display:flex;
justify-content: space-between;
alignItems:center;
position:relative;
`;

const Title = styled.div`
        font-size:30px;
        color:#fff;
        font-weight:600;
        font-family:'Times New Roman',Times, serif;
        text-transform:uppercase;
        margin-left:20px;
        &:hover{color: #0f0}
`;

const Cart = styled.div`
position: relative;
cursor:pointer;
`;

const CartImg = styled.img`
height: 48px;
margin-right:20px;
`;

const CartCount = styled.div`
background-color: orange;
border-radius: 50%;
padding: 4px 8px;
position: absolute;
right:10px;
top: -5px;
font-size: 12px;
visibility: ${(props) =>props.show?"visible":"hidden"};
`;

class Navbar extends React.Component{
    render(){
        return(
            <>
            <Nav>
                <Title>Movie App</Title>
                <Cart>
                    <CartImg alt="cart icon" src="https://cdn-icons-png.flaticon.com/128/2838/2838895.png" />
                    <CartCount color="yellow" show={false}>3</CartCount>
                </Cart>
            </Nav>
            </>
        )
    }
}

export default Navbar;

const styles={
    nav:{
            width: "100%",
            height: 70,
            background:"cadetblue",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            position:"relative"
      },

      title:{
        fontSize:30,
        color:"#fff",
        fontWeight:600,
        fontFamily:'"Montserrat", sans-serif',
        textTransform:"uppercase",
        marginLeft:20

      },

      cartContainer:{
        position:"relative",
        cursor:"pointer",
      },

      cartIcon:{
        height:48,
        marginRight:20
      },

      cartCount:{
        background:"orange",
        borderRadius:"50%",
        padding:"4px 8px",
        position:"absolute",
        right:10,
        top:-5,
        fontSize:12
      }
}