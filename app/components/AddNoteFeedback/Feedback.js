import styled from 'styled-components';

const Feedback = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  color: ${props => props.color || 'red'};
  overflow: hidden;
`;

export default Feedback;
