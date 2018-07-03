import React, { Component } from 'react';
import styled from 'styled-components';
import MusicalNoteContainer from './containers/MusicalNoteContainer.jsx';
import Meter from './components/Meter.jsx';

const StyledMusicNoteContainer = styled.div`
  background-color: #E81C4F;
  width: 40%;
  height: 75%;
  text-align: center;
`;


class App extends Component {
  render() {
    return (
      <StyledMusicNoteContainer>
        <MusicalNoteContainer style={ {display: 'none'} }/>
        <div />
        <Meter />
      </StyledMusicNoteContainer>
    );
  }
}

export default App;
