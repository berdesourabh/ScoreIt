import React from 'react';
import { View, Text } from 'react-native';

const Title = (props) => {
  const { headerName } = props;
    return (
      <View>
        <Text>
          {headerName}
        </Text>
      </View>
    );
};

export default Title;
