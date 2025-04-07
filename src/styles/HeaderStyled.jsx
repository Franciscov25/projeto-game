import styled from "styled-components";

export const HeaderContainer = styled.header`
background:#212121FF;
padding:20px;
display:flex;
justify-content:space-around;
color:#fff;
font-family: Verdana;
`;
export const Nav = styled.nav`
    ul{
        list-style:none;
        padding:0;
        margin:0;
        display:flex;
    }
    li{
        margin:0 15px;
    }
    a{
        color:#A2BDFFFF;
        text-decoration:none;
        text-transform:uppercase;
        padding:5px 10px;
        font-size:0.8rem;
        font-weight:600;
    }
`;