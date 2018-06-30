import React, { Component } from 'react';
import styled from 'styled-components';
import MusicalNoteContainer from './containers/MusicalNoteContainer.jsx';

const StyledApp = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

class App extends Component {
  render() {
    return (
      <StyledApp className="App">
        <MusicalNoteContainer />
      </StyledApp>
    );
  }
}

export default App;
