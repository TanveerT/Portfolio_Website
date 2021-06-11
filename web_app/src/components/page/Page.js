import './Page.css';
import styled from 'styled-components';

const Sdiv =styled.div`
height: ${props=>props.height? props.height : 'auto'};
background-color: ${props => props.color ? props.color: 'white'};
position:relative;
`;
const page = (props)=> {
    
    
    return(
        <Sdiv color={props.color}  height={props.height} >        
        {props.children}
        </Sdiv>
    );
}
export default page;