import styled from 'styled-components'


export const Button = styled.button`
   justify-content: center;
   align-items: end;
   padding: 10px 18px;
   gap: 10px;

   width: 220px;
   height: 44px;
   background: #000000;
   border-radius: 5px;
   color: white;
   display: flex; 
   border: 1px solid transparent;  

   &:hover {
    background-color: white; 
    color: black; 
    transition: 0.3s background ease-in;
    border: 1px solid black;
   }
`;

export const OutLineButton = styled(Button)`

background-color: white; 
color: black; 
border: 1px solid black; 



&:hover {
    background-color: black; 
    color: white; 
    transition: 0.3s background ease-in;
    border: 1px solid transparent;
   }
   
`;

