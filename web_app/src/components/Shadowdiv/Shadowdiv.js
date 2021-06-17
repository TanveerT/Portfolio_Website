import styled from 'styled-components';

const Sdiv=styled.div`
background-color: ${props => props.color ? props.color: 'white'};
border-radius:6px;
// margin: 10px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Shadowdiv = (props)=>{
    
    return (
        <Sdiv color={props.color} className={props.className}>
            {props.children}
        </Sdiv>
    )
}
export default Shadowdiv;