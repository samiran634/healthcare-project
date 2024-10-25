 
import styled from "styled-components";
 import docimg from '../../../images/Picture1.gif';
import CardContainer from '../cards/cardcontainer';
const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  background-image: url(${docimg});
  background-repeat: no-repeat;
  background-position: right top;
  position: absolute;
  background-size: auto;
`;

export default function BackgroundContainer(props) {
 

  
  return (
 
      <TopContainer>
        <CardContainer cards={props} />
      </TopContainer>
 
  );
}
