import React from 'react';
import styled from 'styled-components';

const StyledNote = styled.div`
  font-size: 200px;
`;

const MusicalNote = (props) => {
  const { note, frequency, octave } = props;
  return (
      <div>
        <StyledNote>
          { note }
        </StyledNote>
        <StyledNote>
          { frequency }
        </StyledNote>
      </div>
  );
};


export default MusicalNote;
