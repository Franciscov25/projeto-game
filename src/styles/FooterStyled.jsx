import styled from "styled-components";

export const FooterContainer = styled.div`
    background:#82AEFFFF;
    color:#273642FF;
    padding:20px;
    margin-top:auto;
    font-family: Verdana;
`

export const FooterContext = styled.div`
    display:flex;
    justify-content:space-around;
    max-width:1200px;
    margin: auto;

    h3{
        margin-bottom:10px;
    }
    ul{
        list-style:none;
        padding:0;
    }
    li{
        margin-bottom:5px;
    }
    a{
        color:#334853FF;
        text-decoration:none;
    }
`