import React, { useState, useContext } from "react";
import { StyleSheet, View, Button, Dimensions } from "react-native";
import { THEME } from "../theme";
import { AppCard } from "../components/ui/AppCard";
import { EditModal } from "../components/EditModal";
import { AppTitle } from "../components/ui/AppTitle";
import { TodoContext } from "../context/todo/todoContext";
import { ScreenContext } from "../context/screen/screenContext";

export const TodoScreen = ({}) => {
  const { todos, updateTodo, removeTodo } = useContext(TodoContext);
  const { todoId, changeScreen } = useContext(ScreenContext);
  const [modal, setModal] = useState(false);

  const todo = todos.find((t) => t.id === todoId);

  const saveHandler = (title) => {
    updateTodo(todo.id, title);
    setModal(false);
  };

  return (
    <View>
      <EditModal
        value={todo.title}
        visible={modal}
        onCansel={() => setModal(false)}
        onSave={saveHandler}
      />

      <AppCard style={styles.card}>
        <AppTitle style={styles.title}>{todo.title}</AppTitle>
        <View style={{ width: "100%" }}>
          <Button
            title="Редактировать"
            color={THEME.MAIN_COLOR}
            onPress={() => setModal(true)}
          />
        </View>
      </AppCard>

      <View style={styles.btns}>
        <View style={styles.btn}>
          <Button
            title="Назад"
            onPress={() => changeScreen(null)}
            color={THEME.MAIN_COLOR}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="Удалить"
            onPress={() => removeTodo(todo.id)}
            color={THEME.DANGER_COLOR}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoScreen: {},
  card: {
    marginBottom: 20,
  },
  btns: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    // width: Dimensions.get('window').width / 3
    width: Dimensions.get("window").width > 400 ? 150 : 100,
  },
  title: {
    fontSize: 26,
  },
});
