import React ,{useState,useEffect} from 'react';
import Shadowdiv from '../Shadowdiv/Shadowdiv';
import './Education.css';

const Education = () => {
const [togglewindow,settogglewindow]=useState(0);

const studiesdesc=[
    {studies:'Graduate',institution:'VR Siddhartha Engineering College',about:'My life leasons begins hear',place:'Andhra Pradesh, Vijayawada',yearstart:'2016',yearend:'2020'}
    ,{studies:'Secondry School',institution:'Sri Chaitainaya College',about:'My Actual learning begins hear',place:'Andhra Pradesh, Vijayawada',yearstart:'2014',yearend:'2016'}
    ,{studies:'High School',institution:'Nirmala High School',about:'My initial Steps begins hear',place:'Andhra Pradesh, Machilipatnam',yearstart:'',yearend:'2014'}
    ,
];

const toggletab=(props)=>{
    console.log(props);
    settogglewindow(props);
}

 useEffect(() => {
     
     
 }, )

    return (

        <div className="container">
            {/* <div className="incontainer1 header"> */}
                <Shadowdiv  color='rgb(0, 87, 128)' className="incontainer1 header">
                    <h1>Education</h1>
                </Shadowdiv>
            {/* </div> */}
            <Shadowdiv className="incontainer2 content-container" color='white'>
                <div className='content-inner content-inner1'> 
                    {studiesdesc.map((item,index)=>{
                        
                        return(
                            <div 
                            key={index} 
                            // className={ togglewindow === index ? 'studiesnames active-tab' : 'studiesnames'}
                            className={`studiesnames  ${index}`}
                            onClick={()=>toggletab(index)}
                            >
                            <h4
                            className={togglewindow === index ? 'active-tab':''}>
                            
                            {item.studies}
                            </h4>
                            </div>
                        )
                    })}
                </div>
                <div className="content-inner content-inner2">
                    {
                        studiesdesc.map((obj,index)=>{
                            return (
                                <div key={index} 
                                    className={ togglewindow === index ? 'studiesdesc active' : 'studiesdesc' }
                                    // className={`studiesdesc  ${index}`}
                                >
                                    <h1>{obj.institution}</h1>
                                    <h3>{obj.yearstart}{' ~ '}{obj.yearend}</h3>
                                    <p>{obj.about}</p>
                                    <p>{obj.place}</p>
                                </div>

                                )

                        })
                    }
                    
                </div>
            
            </Shadowdiv>

        </div>

    );
}

export default Education;