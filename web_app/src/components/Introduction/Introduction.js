
import styled from 'styled-components';
import Typical from 'react-typical';
import Stringonebyone from '../Stringonebyone/Stringonebyone';
import { useState } from 'react';
import './Introduction.css'

const Sdiv=styled.div`

width:50%;
height:50%;
position:absolute;
top:50%;
left:50%;

transform: translate(-50%,-50%);

`;

const Introduction = () => {
const [count,setcount]=useState([0]);

const callback=()=>{
    setcount([count[0]+1].concat(count));
    // arr[count]=true;
}

    return (

        <Sdiv>
            <div className='text1 common'>{0 in count && <Stringonebyone string="Hi" delay='1000 ' method={callback}/> }
            </div>
            <div className='text2 common'>{ 1 in count && <Stringonebyone string="My self" delay='500' method={callback} /> }    
            </div>
            <div className='text3 common'>{ 2 in count  && <Stringonebyone string='Tanveer Ahamed' delay='200' method={callback}/> }  
            </div>
            <div className='text4 common'>
            { 3 in count && <Typical
            steps={['Im', 2000, 'Im Engineer', 2000,'Im Developer',2000,'Im Investor',2000,'Im Chef',2000,]}
            loop={Infinity}
            wrapper="span"
            /> } 
            </div>
            
            
        </Sdiv>


    );

}

export default Introduction;