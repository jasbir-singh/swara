import React, { Component } from 'react';
import styled from 'styled-components';
import MusicalNoteContainer from './containers/MusicalNoteContainer.jsx';

const StyledMusicNoteContainer = styled.div`
  background-color: #E81C4F;
  width: 40%;
  text-align: center;
`;


class App extends Component {
  render() {
    return (
      <StyledMusicNoteContainer>
        <MusicalNoteContainer />
      </StyledMusicNoteContainer>
    );
  }
}

export default App;
