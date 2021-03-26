import React from 'react'
import FormProduct from '../../components/Form/FormProduct'
import styled from 'styled-components'

function Manage(props) {
    return (
        <Container>
            <FormProduct/>
        </Container>
    )
}

export default Manage

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: slateblue;
  padding: 10vh 0;
  min-height: 100vh;
`;