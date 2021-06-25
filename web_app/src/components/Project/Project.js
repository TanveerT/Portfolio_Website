import './Project.css';
import Shadowdiv from '../Shadowdiv/Shadowdiv';
import Geo from '../../assets/GeoProcessing.png'
import Vehi from '../../assets/VehiclePollutionMonitering.png';
import Road from '../../assets/RoadSignDetection.jpeg'
const Project = ()=>{

const project_obj=[
    {projectImage:Geo,projectTitle:'Geo Processing Work Bench',projectTech:'React, Flask, leaflet',projectLink:'link'},
    {projectImage:Vehi,projectTitle:'Vehicle Pollution motering robot',projectTech:'IOT, rasbiraypie',projectLink:'link'},
    {projectImage:Road,projectTitle:'Road Sign Detection',projectTech:'Deeplearning, CNN',projectLink:'link'},
    // {projectImage:Road,projectTitle:'Road Sign Detection',projectTech:'Deeplearning, CNN',projectLink:'link'}
     
]
console.log(project_obj[0].projectImage)

    return (
        <div className='Pro-container'>
            <Shadowdiv color='rgb(255, 192, 203)' className='Edu-header'>
                <h1>Recent Work</h1>
            </Shadowdiv>
            <div className='Pro-list-container'>
                
                {project_obj.map((item,index)=>{
                    return (
                        <Shadowdiv key={index} className='Pro-list-child'>
                            <div className='Pro-image'>
                                
                                <img src={item.projectImage} alt='project'/>
                            </div>
                            <h1>{item.projectTitle}</h1>
                            <p><b>Tech:{' '}</b>{item.projectTech}</p>
                            <p><b>Link:{' '}</b><a href='https://tanveerahamed.in'>{item.projectLink}</a></p>
                        </Shadowdiv>
                    );
                })}
                
                
            </div> 

            
        </div>
    )
}

export default Project;