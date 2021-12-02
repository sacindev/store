const { default: styled } = require("styled-components");

const Picture = styled.aside`
  background-image: url(${(props) => props.url});
  height: 200px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin:0 .5rem;
`;

export default Picture;
