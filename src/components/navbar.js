import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../theme";
import { AppTitle } from "./ui/AppTitle";

export const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <AppTitle style={styles.text}>{title}</AppTitle>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: THEME.MAIN_COLOR,
    padding: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
