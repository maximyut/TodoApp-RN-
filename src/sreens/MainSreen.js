import React from 'react';
import {StyleSheet, View, FlatList, Image} from 'react-native';
import {AddTodo} from '../components/AddToDo';
import {Todo} from '../components/Todo';
import {AppTitle} from '../components/ui/AppTitle';

export const MainSreen = ({addTodo, todos, removeTodo, openTodo}) => {

    let content = (
        <FlatList
            data={todos}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Todo todo={item} onRemove={removeTodo} onOpen={openTodo}/>} /> 
    )

    if (todos.length === 0) {
        content = 
        <View style={styles.imgWrap}>
            <Image 
                style={styles.img} 
                source={require('../../assets/img/no-items.png')}/>
            <AppTitle style={styles.text}>Список пустой</AppTitle>
        </View>
    }

    return (
        <View>
            <AddTodo onSubmit={addTodo}/>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    mainSreen: {

    },
    imgWrap: {
        marginTop: 20,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    text: {
        fontSize: 26,
    },  
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})