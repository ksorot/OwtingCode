import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from '../styles/LoaderStyles';

const Loader = ({ isLoading }) => {
  return (
    <View style={styles.container}>
      {isLoading && (
        <>
          <ActivityIndicator size="large" color="#1E90FF" style={styles.spinner} />
          <Text style={styles.text}>This will take a while to complete</Text>
        </>
      )}
    </View>
  );
};

export default Loader;
