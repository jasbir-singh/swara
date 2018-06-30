import { connect } from 'react-redux';
import React, { Component } from 'react';
import MusicalNote from '../components/MusicalNote';
import { updateFrequency } from '../actions';

const mapStateToProps = state => ({
  ...state.note,
});

class MusicalNoteContainer extends Component {
  render() {
    return(
      <MusicalNote {...this.props} />
    );
  }
}

export default connect(
  mapStateToProps,
  { updateFrequency }
)(MusicalNoteContainer);
