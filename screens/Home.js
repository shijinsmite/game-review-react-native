import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/Card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './ReviewForm';

const Home = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: 'Not so',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Not so good',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReview) => {
      return [review, ...currentReview];
    });
    setModalOpen(false);
  };

  const pressHandler = () => {
    navigation.navigate('ReviewDetails');
    // navigation.push('ReviewDetails'); also have pop
    // when u click back button
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setModalOpen(false)}
          />
          <ReviewForm addReview={addReview}/>
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});

export default Home;
