import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Profile Screen!</Text>
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

export default ProfilePage;
