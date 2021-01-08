import React, {useState} from 'react';
import { StyleSheet, View, Alert, Image  } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {Navbar} from './src/components/navbar';
import {MainSreen} from './src/sreens/MainSreen';
import {TodoScreen} from './src/sreens/TodoScreen';

async function loadApplication() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  });
}

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([]);

  if (!isReady) {
    return (
      <AppLoading 
        startAsync={loadApplication} 
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    )
  }

  const addTodo = title => {

    setTodos(prev => [
      ...prev, 
      {
        id: Date.now().toString(),
        title
      }
    ]);
  };

  const removeTodo = id => {
    const todo = todos.find(t => t.id === id);
    Alert.alert(
      'Удаление элемента',
      `Вы уверены, что хотите удалить ${todo.title}?`,
      [
        {
          text: 'Отмена',
          style: 'cansel'
        },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: () => {
            setTodoId(null);
            setTodos(prev => prev.filter(todo => todo.id !== id));
          },
          style: 'OK'
        }
      ],
      {cancelable: false}
    )
  }

  const updateTodo = (id, title) => {
    setTodos(old => old.map(todo => {
      if (todo.id === id) {
        todo.title = title;
      }
      return todo;
    }))
  }

  let content = (
    <MainSreen 
      todos={todos} 
      addTodo={addTodo} 
      removeTodo={removeTodo} 
      openTodo={setTodoId}/>
  )
  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId);
    content = (
      <TodoScreen 
        goBack={() => setTodoId(null)} 
        todo={selectedTodo} 
        onRemove={removeTodo}
        onSave={updateTodo}/>
    )           
  }

  return (
    <View >
      <Navbar title="ToDo App"/>
      <View style={styles.container}>
        {content}
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20
  }
});

