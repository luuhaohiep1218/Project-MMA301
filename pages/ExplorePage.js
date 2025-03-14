import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const ExplorePage = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Explore Screen!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ExplorePage;
