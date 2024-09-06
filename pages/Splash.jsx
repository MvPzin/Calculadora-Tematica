import { View, StyleSheet, Text, Image } from "react-native";
import React from "react";


export default function Splash(){ 
    return(
        <View style={styles.main}>
            <View>
                <Image source={require('../assets/back.gif')} style={styles.lace}/>
                <Text style={styles.txt}>Versão 1.1.0</Text>
            </View>
                
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f1bcd4',
      minHeight: 100,
      minWidth: 100,
    },
    txt: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
    },
    lace: {
        alignItems:'center',
        justifyContent:'center',
    },
});