import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: Arial, Helvetica, sans-serif;
    }
    :root{
        --primary-color: black;
        --secondary-color: black;
        --tertiary-color: black;
    }
    html {
        scroll-behavior: smooth;
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    textarea{
        resize: none;
    }

`;
