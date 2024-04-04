import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        padding: 20,
        alignItems: 'center',
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'red'
    },
    texto: {
        flex: 1,
        fontSize: 18,
    },
    input: {
        flex: 2,
        height: 40,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    selecao: {
        flex: 2,
        height: 40,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    confirmar: {
        backgroundColor: 'darkblue',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    confirmarText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    resultText: {
        marginTop: 20,
        fontSize: 18,
        color: 'green'
    },
});


export {styles}