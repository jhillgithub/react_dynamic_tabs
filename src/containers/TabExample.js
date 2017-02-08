import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { add_tab } from '../actions/index';

import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

@connect((store) => {
  return {
    tabs: store.tabs
  };
})
export default class TabExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  renderTabs() {
      return this.props.tabs.map((tab) => {
        return (
          <Tab key={tab} label={"Tab " + tab} value={tab} >
            <div>
              <h2 style={styles.headline}>{tab}</h2>
            </div>
          </Tab>
        );
      });
    }

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab key={"test"} label={"Tab A"} value={"A"} >
          <div>
            <h2 style={styles.headline}>A</h2>
          </div>
        </Tab>
        {this.renderTabs()}
      </Tabs>
    );
  }
}
