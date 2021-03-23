import React from 'react'
import{StyleSheet, Image, SafeAreaView} from 'react-native'


const Header = ()=>{
    return(
        <SafeAreaView styles={styles.header} >
            <Image 
                source={require("../assets/favicon.png")}
                resizeMode="contain"
               
            />

           
        </SafeAreaView>
    )





}

const styles=StyleSheet.create({
    header:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
       
    }
})

export default Header