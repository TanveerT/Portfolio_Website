import React ,{useState,useEffect} from 'react';
import styled from 'styled-components';

const Sdiv=styled.div.attrs(props => ({
style: {
background: "linear-gradient(to bottom, black "+props.colorvalue+ "%, white 0%)"
    } 
})
)`
border:1px solid black;
height:15%;
width:.6%;
margin:0 auto;
position : fixed;
top:50%;
left:0.2%;
transform:translate(0%,-50%);
z-index:1;
border-radius:5px;
`;


const Pagescroll=()=>{
const [pagescrolllen,setpagescrolllen]=useState(0);
const height=window.innerHeight;
const h=document.documentElement.offsetHeight;

  useEffect(() => {
    window.onscroll = () => {
      setpagescrolllen(window.pageYOffset)
    }
  }, []);
    

    return (
    
        <Sdiv colorvalue={pagescrolllen*100/(h-height)}></Sdiv>     
    );
}

export default Pagescroll;