import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert, ScrollView } from 'react-native';
import PopupButton from './components/PopupButton';
import data from './data.json';
import PlusButton from './components/PlusButton';
import MinusButton from './components/MinusButton';

// const tempList = [
//   { title: 1 },
//   { title: 2 },
//   { title: 3 },
//   { title: 4 },
//   { title: 5 },
// ];

export default function App() {
  const [state, setState] = useState(0);
  const Minus = () => {
    setState(state - 1);
  };
  const Plus = () => {
    setState(state + 1);
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     setState(data.diary);
  //   }, 5000);
  // }, []);

  return (
    // <ScrollView contentContainerStyle={styles.contianer}>
    //   {state.map((content, i) => {
    //     return (
    //       <View key={i}>
    //         <Text>{content.title}</Text>
    //       </View>
    //     );
    //   })}
    // </ScrollView>
    <View style={styles.contianer}>
      <Text style={styles.count}>카운터 : {state}</Text>
      <View style={styles.buttonContainer}>
        <PlusButton Plus={Plus} />
        <MinusButton Minus={Minus} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    fontSize: 20,
  },
  buttonContainer: {
    marginTop: 50,
    flexDirection: 'row',
  },
});
