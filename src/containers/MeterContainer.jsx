import { connect } from 'react-redux';
import React, { Component } from 'react';
import Meter from '../components/Meter';

const mapStateToProps = state => ({
  cents: (state.note ? state.note.cents : 10),
});

export default connect(
  mapStateToProps,
  {}
)(Meter);
