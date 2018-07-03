import React from 'react';
import styled from 'styled-components';

const StyledNote = styled.div`
  font-size: 10em;
  height: 200px;
`;

const StyledOctave = styled.span`
  font-size: 0.2em;
`;

const StyledFrequency = styled.div`
  font-size: 4em;
`;

const StyledCents = styled.div`
  font-size: 2em;
`;

const MusicalNote = (props) => {
  const { note, frequency, octave, cents } = props;
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
        <StyledCents>
          { cents } cents
        </StyledCents>
      </div>
  );
};


export default MusicalNote;
