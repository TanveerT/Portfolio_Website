import './Project.css';
import Shadowdiv from '../Shadowdiv/Shadowdiv';
import Page from '../../components/page/Page'
const Project = ()=>{

    return (
        <div className='Pro-container'>
            <Shadowdiv color='rgb(255, 192, 203)' className='Edu-header'>
                <h1>Project's</h1>
            </Shadowdiv>
            <div className='Pro-list-container'>
                
                {/* <Shadowdiv className='Pro-list-child 1'/>
                <Shadowdiv className='Pro-list-child 1'/> */}
                {/* <Shadowdiv className='Pro-list-child 1'/>
                <Shadowdiv className='Pro-list-child 1'/> */}
            </div> 

            
        </div>
    )
}

export default Project;