import React from 'react';
import PropTypes from 'prop-types';
import CardSample from './components/Cards/Card2'
import './App.css'

class App extends React.Component {
  static defaultProps = {
  }

  render() {
    const { classes } = this.props;
    const headerValues = { 'title': 'EXCESS INVENTORY' }
    const bodyValues = { 'body1': 'Residual Feature, Non-Basic', 'body2': 'Pt 48ct Fail Variety' }
    const footerValues = { 'footer1': ' Potential Business Impact', 'footer2': '123,456,789', 'footer3': 'Excess Inventory Reduction (@ cost)', 'footer4': '10/10/2018' }

    return (
      <CardSample
        headerValues={headerValues}
        bodyValues={bodyValues}
        footerValues={footerValues}
      />
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default App