import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    iconContainer: {

        // backgroundColor:"black",
        position: 'absolute',
        top: 30,
        left: 10,

    },

    container: {

        padding: 10,
          width:"100%",
    },
    image: {
        width: "100%",
        aspectRatio: 6 / 3,
        marginBottom: 5
    },

    title: {
        fontSize: 30,
        fontWeight: '500',
        marginVertical: 5,

    },
    menuTitle:{
        marginTop:20,
        fontSize:20,
        marginVertical:10,
    },
    subTitle: {
        color: "#525252W",
        fontSize: 18,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        flexDirection: "row",
       
    },


});


export default styles