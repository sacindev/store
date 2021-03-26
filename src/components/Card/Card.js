const { default: styled } = require("styled-components");

const Card = styled.div`
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-bottom: 0.15em solid #ddd;

  & > div {
    padding: 1em 0;
  }
  & > div h5 {
    font-size: 1em;
  }

  & > div p {
    font-size: 0.8em;
  }
`;

export default Card;
