import styled from "styled-components";

export const Container = styled.div`
    padding: 200px 150px;
    position: relative;
    background-size: cover;
    background-position: center;
    background-image: url('https://plus.unsplash.com/premium_photo-1664300713340-f528432dcdd4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    &:before {
        background-color: rgba(0,0,0,.6);
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
`;

export const Text = styled.div`
width:55%;
position:relative;
z-index: 1;
h2{
    color:white;
    font-size: 62px;
    font-weight: 700;
    margin-bottom: 16px;
}

p{
    color:white;
    margin-bottom:20px;
}
span{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    background: #4CAF50;
    color: white;
    border: 3px solid #0000;
    border-radius: 8px;
    transition: all 0.3s ease;

}


`;


