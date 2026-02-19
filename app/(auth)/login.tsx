import { View, Button, StyleSheet, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { AuthContext } from "@/components/AuthContext";
import { Redirect } from "expo-router";
import { ThemeContext } from "@/components/ThemeContext";
export default function Login() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { dark } = useContext(ThemeContext)!;
  if (isLoggedIn) {
    return <Redirect href="/homepage" />;
  }
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: dark ? 'black' : 'white',
    },
    container: {
      width: "70%",
      height: "40%",
      justifyContent: 'space-around',

      marginTop: 15,
      borderColor: dark ? 'white' : 'black',
      borderWidth: 1,
      padding: 10,
      borderRadius: 15,

    },
    textContainer: {
      color: dark ? 'white' : 'black',
      fontSize: 20,
      fontWeight: '800',
      textAlign: 'center',
    },
    textUser: {
      fontSize: 16,
      color: dark ? 'white' : 'black',
      fontWeight: '400',
      left: 0,
    },
    input: {
      width: "100%",
      borderRadius: 5,
      borderWidth: 1,
      borderColor: dark ? 'white' : 'black',
      padding: 10,
      color: dark ? "white" : "black",
    },
    button: {
      width: "90%",
      backgroundColor: dark ? 'white' : 'black',
      textAlign: 'center',
      color: dark ? 'black' : 'white',
      fontWeight: '600',
      padding: 10,
      borderRadius: 10,
    }
  })
  return (
    <View style={styles.body}>
      <Image
        source={require('../../assets/images/spotifyImages/others/spotifyWhite.png')}
        style={{ width: 50, height: 50, }}
      />
      <View style={styles.container}>
        <Text style={styles.textContainer}>Login</Text>
        <Text style={styles.textUser}>Email</Text>
        <TextInput placeholder="Enter your email" style={styles.input}
          placeholderTextColor={"grey"} />
        <Text style={styles.textUser}>Password</Text>
        <TextInput placeholder="Enter your password" style={styles.input}
          placeholderTextColor={'grey'} />
        <TouchableOpacity activeOpacity={0.6} style={{ alignItems: 'center' }}>
          <Text style={styles.button} onPress={() => setIsLoggedIn(true)}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

