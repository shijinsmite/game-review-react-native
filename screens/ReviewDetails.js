import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/Card';

const ReviewDetails = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{navigation.getParam('title')}</Text>
        <Text>{navigation.getParam('body')}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={images.ratings[navigation.getParam('rating')]} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 6,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});

export default ReviewDetails;
