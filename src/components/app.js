import React, { Component } from 'react';

// --------------Setup for Material-Ui -----------------------------
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();
// -----------------------------------------------------------------

import NewTabForm from '../containers/NewTabForm';
import TabExample from '../containers/TabExample';


export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NewTabForm />
          <TabExample />
        </div>
      </MuiThemeProvider>
    );
  }
}
