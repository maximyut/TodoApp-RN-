import React, {useState} from 'react';
import {StyleSheet, View, Text, Button,} from 'react-native';
import {THEME} from '../theme';
import {AppCard} from '../components/ui/AppCard';
import {EditModal} from '../components/EditModal';

export const TodoScreen = ({goBack, todo, onRemove, onSave}) => {
    const [modal, setModal] = useState(false);

    const saveHandler = (title) => {
        onSave(todo.id, title);
        setModal(false);
    }

    return (
        
        <View>
            <EditModal
                value={todo.title} 
                visible={modal} 
                onCansel={() => setModal(false)}
                onSave={saveHandler} />
            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <View style={{width: '100%'}}>
                    <Button 
                        title="Редактировать"
                        color={THEME.MAIN_COLOR}
                        onPress={() => setModal(true)}/>
                </View>
            </AppCard>

            <View style={styles.btns}>
                <View style={styles.btn}>
                    <Button 
                        title="Назад"
                        onPress={goBack}
                        color={THEME.MAIN_COLOR}/>
                </View>
                <View style={styles.btn}>
                    <Button
                        title="Удалить"
                        onPress={() => {
                            onRemove(todo.id)}}
                        color={THEME.DANGER_COLOR}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    todoScreen: {
        
    },
    card: {
        marginBottom: 20,
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }, 
    btn: {
        width: '40%'
    },
    title: {
        fontSize: 26
    }
})