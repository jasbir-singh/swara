import React, { Component } from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledNote = styled.p`
  font-size: 200px;
`

class App extends Component {
  componentWillMount() {
    // Setup the listening to Mic
  }

  render() {
    return (
      <StyledApp className="App">
        <StyledNote>
          C#
        </StyledNote>
      </StyledApp>
    );
  }
}

export default App;
