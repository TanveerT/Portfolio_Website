// import Container from 'react-bootstrap/Container';
import Container from 'react-bootstrap/esm/Container';
// import './Page.css';
import styled from 'styled-components';

const Button = styled.button`
     /* Adapt the colors based on primary prop */
//   background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Sdiv =styled.div`

height: 100vh;
background-color: ${props => props.color ? props.color: props.color2};
display: flex;

`;

const page = ()=> {

    return(
        <Sdiv color='' color2='lightgrey'>
            
                <h1>hai</h1>
                
        </Sdiv>

    );
}

export default page;