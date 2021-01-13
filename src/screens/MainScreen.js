import React, { useState, useEffect, useContext, useCallback } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Dimensions,
  Button,
} from "react-native";
import { AddTodo } from "../components/AddToDo";
import { Todo } from "../components/Todo";
import { AppTitle } from "../components/ui/AppTitle";
import { AppText } from "../components/ui/AppText";
import { ScreenContext } from "../context/screen/screenContext";
import { TodoContext } from "../context/todo/todoContext";
import { AppLoader } from "../components/ui/AppLoader";
import { THEME } from "../theme";

export const MainScreen = ({}) => {
  const { addTodo, todos, removeTodo, fetchTodos, loading, error } = useContext(
    TodoContext
  );
  const { changeScreen } = useContext(ScreenContext);
  const [deviceWidth, setDeviceWodth] = useState(
    Dimensions.get("window").width - 50
  );

  const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos]);

  useEffect(() => {
    loadTodos();
  }, []);

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

  if (loading) {
    return <AppLoader />;
  }
  if (error) {
    return (
      <View style={styles.center}>
        <AppText style={styles.error}>{error}</AppText>
        <Button
          title="Повторить"
          color={THEME.MAIN_COLOR}
          onPress={loadTodos}
        />
      </View>
    );
  }

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
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    fontSize: 30,
    color: THEME.DANGER_COLOR,
  },
});
