import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image, } from "react-native";


export default function Calculadora(){
const image = {uri: 'https://emojis.sh/emoji/pink-bow-0nej3Yt503'};  
const buttons = ["AC", "DEL", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "3", "2", "1", "+", "0", ".", "+/-", "="]

const [currentNumber, SetCurrentNumber] = useState ("")
const [lastNumber, SetLastNumber] = useState ("")

function calculator(){
  const splitNumber = currentNumber.split(' ')
  const firstNumber = parseFloat(splitNumber[0])
  const lastNumber = parseFloat(splitNumber[2])
  const operator = splitNumber[1]

  switch(operator){
    case '+':
      SetCurrentNumber((firstNumber + lastNumber).toString())
      return
    case '-':
      SetCurrentNumber((firstNumber - lastNumber).toString())
      return
    case '*':
      SetCurrentNumber((firstNumber * lastNumber).toString())
      return
    case '/':
      SetCurrentNumber((firstNumber / lastNumber).toString())
       return
  }
}

function handleInput(buttonPressed){
  console.log(buttonPressed);
  if(buttonPressed === '+' || buttonPressed === '-' || buttonPressed === '*' || buttonPressed === '/'){
    SetCurrentNumber(currentNumber + " " + buttonPressed + " ")
    return
  }
  switch(buttonPressed){
    case 'DEL':
        SetCurrentNumber(currentNumber.substring(0, (currentNumber.length -1)))
        return
    case 'AC': 
        SetLastNumber("")
        SetCurrentNumber("")
      return
    case '=':
      SetLastNumber(currentNumber + '=')
      calculator()
      return
    case '+/-':
      return
  }
  SetCurrentNumber(currentNumber + buttonPressed)
}

  return (
    <View style={styles.main}>

      <View style={styles.result}>
      <ImageBackground source={require('../assets/bg.png')} style={styles.bg}/>
        <Text style={styles.historytxt}>{lastNumber}</Text>
        <Text style={styles.resultTxt}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) => 
          button === '=' ?
          <TouchableOpacity  onPress={() => handleInput(button)}  key={button} style={[styles.button, {backgroundColor: '#e36aa5'}]}>
            <Text style={styles.txtbtn}>{button}</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity  onPress={() => handleInput(button)}  key={button} style={[styles.button, {backgroundColor: typeof(button) === 'number' ? '#fff': '#efafd8'}]}>
            <Image source={require('../assets/laço.png')} style={styles.lace}/>
            <Text style={styles.txtbtn}>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}



//para buildar o apk use: eas build -p android --profile preview



const styles = StyleSheet.create({
    main: {

    },
    result: {
      backgroundColor: '#FFFDD0',
      width: '100%',
      minHeight: 300,
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    },
    resultTxt: {
      margin: 10,
      fontSize: 65,
      fontWeight: 'bold',
    },
    historytxt: {
      fontSize: 20,
      alignSelf: 'flex-end',
      marginRight: 15,
    },
    button: {
      minWidth: 80, 
      minHeight: 88,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 25,
    },
    buttons: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFDD0',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 5,
      
    },
    txtbtn: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    lace: {
      height: 25,
      width: 25,
      // marginLeft: 70,
      // marginBottom: 30,
      transform: [{rotate: '35deg'}],
    },
    bg: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
      width: 270,
      marginTop: 70,
      marginRight: 45,
      opacity: 0.3,
    },
});
