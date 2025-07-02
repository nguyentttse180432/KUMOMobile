import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import {COLORS} from '../constants/colors';
import {SIZES} from '../constants/sizes';
import Button from '../components/Button';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>KUMO Classroom</Text>
        <Text style={styles.subtitle}>Chào mừng đến với ứng dụng quản lý lớp học</Text>
        
        <View style={styles.buttonContainer}>
          <Button 
            title="Bắt đầu" 
            onPress={() => console.log('Bắt đầu được nhấn')} 
            containerStyle={styles.button}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: SIZES.padding,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: SIZES.largeTitle,
    fontWeight: 'bold',
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: SIZES.margin,
  },
  subtitle: {
    fontSize: SIZES.body1,
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: SIZES.margin * 2,
  },
  buttonContainer: {
    width: '100%',
    marginTop: SIZES.margin,
  },
  button: {
    width: '100%',
  },
});

export default HomeScreen;
