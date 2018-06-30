import React from 'react';
import styled from 'styled-components';

const StyledNote = styled.div`
  font-size: 200px;
`;

const StyledOctave = styled.span`
  font-size: 40px;
`;

const StyledFrequency = styled.div`
  font-size: 80px;
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
