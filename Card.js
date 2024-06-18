import * as React from 'react';
import { Pressable, Text, StyleSheet } from "react-native";

export default function Card({ onPress, isTurnedOver, children }) {
  return (
    <Pressable 
    onPress={onPress} 
    style={!isTurnedOver ? styles.cardUp : styles.cardDown}
    >
    {isTurnedOver ? (
      <Text style={styles.text}>{children}</Text>
    )  :  (
        <Text style={styles.text}>?</Text>
        )}
    </Pressable>
  );
}



const styles = StyleSheet.create({
  cardUp: {
    
    backgroundColor: "#1e293b",
    color: "black",
    fontSize: 32,
    margin: 10,
    padding: 4,
    borderRadius: 2,
    alignContent: "center",
    justifyContent: "center",
    borderColor: "#334155",
        },
    cardDown: {
        backgroundColor: "black",
        color: "white",
        fontSize: 32,
        margin: 4,
        padding: 4,
        borderRadius: 2,
        borderWidth: 10,
        borderColor: "#334155",
        justifyContent: "center",
        alignItems: "center",
      
        },
    text: {
        color: "white",
        fontSize: 36,
        fontWeight: "900",
        },
    });