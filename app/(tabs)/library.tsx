// your library
import { StyleSheet, View, Text } from 'react-native';




export default function HomeScreen() {
  return (
    <View>
      <Text style={styles.color}>h1</Text>
    </View >
  );
}

const styles = StyleSheet.create({
  color: {
    color: "white"
  }
});
