import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Fonts from '../fonts/webfont'

const Wrapper = styled.div`
  color: red;
`;

const App = () => (
  <Wrapper>
    <div>HOGE</div>
    <Button variant="contained">
      HOGE
    </Button>
    <Fonts />
  </Wrapper>
)

export default App;
