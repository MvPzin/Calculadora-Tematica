import { View, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Calculadora from "./pages/calc";
import Splash from "./pages/Splash";

export default function app(){ 

  const [theme, setTheme] = useState('light');

  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() =>{
    setTimeout (() =>{
      setIsShowSplash(false)
    },2000)
  })

  return (
    <>{isShowSplash ? 
      <Splash/>
      :
      <Calculadora/>
    }
    </>
  );
  
}
