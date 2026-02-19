import { ThemeContext } from "@/components/ThemeContext";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useContext, useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
export default function SongScreen() {
  const { title, image, author } = useLocalSearchParams<{ title: string; image: string; author: string }>();
  const { dark } = useContext(ThemeContext)!;
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: dark ? "black" : "#fff"
    },
    image: {
      width: 250,
      height: 250,
      borderRadius: 12,
      marginBottom: 20
    },
    title: {
      fontSize: 26,
      fontWeight: "bold",
      color: dark ? "white" : "#111",
      textAlign: "center"
    },
    author: {
      fontSize: 16,
      color: dark ? "#aba8a8" : "#555",
      textAlign: "center",
      marginTop: 5
    },
  });
  useLayoutEffect(() => {
    if (title) {
      navigation.setOptions({
        headerTitle: title,
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: dark ? "black" : "#fff" },
        headerTintColor: dark ? "white" : "#111",
      });
    }
  }, [title]);

  if (!title || !image) return <Text style={{ marginTop: 50 }}>No data</Text>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
    </View>
  );
}

