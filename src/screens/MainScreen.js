import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, FlatList, Image, Dimensions } from "react-native";
import { AddTodo } from "../components/AddToDo";
import { Todo } from "../components/Todo";
import { AppTitle } from "../components/ui/AppTitle";
import { ScreenContext } from "../context/screen/screenContext";
import { TodoContext } from "../context/todo/todoContext";

export const MainScreen = ({}) => {
  const { addTodo, todos, removeTodo } = useContext(TodoContext);
  const { changeScreen } = useContext(ScreenContext);
  const [deviceWidth, setDeviceWodth] = useState(
    Dimensions.get("window").width - 50
  );

  useEffect(() => {
    const update = () => {
      const width = Dimensions.get("window").width - 50;
      setDeviceWodth(width);
    };

    Dimensions.addEventListener("change", update);

    return () => {
      Dimensions.removeEventListener("change", update);
    };
  });

  let content = (
    <View style={{ width: deviceWidth }}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Todo todo={item} onRemove={removeTodo} onOpen={changeScreen} />
        )}
      />
    </View>
  );

  if (todos.length === 0) {
    content = (
      <View style={styles.imgWrap}>
        <Image
          style={styles.img}
          source={require("../../assets/img/no-items.png")}
        />
        <AppTitle style={styles.text}>Список пустой</AppTitle>
      </View>
    );
  }

  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  mainSreen: {},
  imgWrap: {
    marginTop: 20,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  text: {
    fontSize: 26,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
