import React from 'react';
import styled from 'styled-components';

const StyledNote = styled.div`
  font-size: 10em;
`;

const StyledOctave = styled.span`
  font-size: 0.2em;
`;

const StyledFrequency = styled.div`
  font-size: 4em;
`;

const MusicalNote = (props) => {
  const { note, frequency, octave } = props;
  return (
      <div>
        <StyledNote>
          { note }
          <StyledOctave>
            { octave }
          </StyledOctave>
        </StyledNote>
        <StyledFrequency>
          { frequency } Hz
        </StyledFrequency>
      </div>
  );
};


export default MusicalNote;
