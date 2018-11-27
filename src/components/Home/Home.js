import React, { Component } from 'react';
import { View } from 'react-native';
import { CardSection, Card, Input } from '../shared';

class Home extends Component {

  render() {
    return (
      <View>
        <CardSection>
          <Card>
            <Input
            placeholder="username"
            />
          </Card>
        </CardSection>
      </View>
    );
  }
}

export default Home;
