import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import * as action from '../../actions/TitleAction';
import Title from '../shared/Title';

class Home extends Component {

componentDidMount() {
  
}
  render() {
    return (
      <View>
        <Title headerName="Home" />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { title } = state.title;
  return title;
};

export default connect(mapStateToProps, {
action
})(Home);
