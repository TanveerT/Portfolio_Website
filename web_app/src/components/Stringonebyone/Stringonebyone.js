
import React ,{useState,useRef,useEffect} from 'react';

const Stringonebyone = (props)=>{
const [Intro,setIntro]=useState('');
const str=props.string;
const index=useRef(0);

useEffect(()=>{
    function tick(){
        setIntro(prev => prev+str[index.current]);
        index.current++;
    }

    if (index.current < str.length)
    {
        let addChar= setInterval(tick,props.delay);
        return ()=> clearInterval(addChar);

    }
    else{
        
        props.method();
        
        
    }
},[Intro]);

return (
<div>{Intro}</div>
)

}

export default Stringonebyone;