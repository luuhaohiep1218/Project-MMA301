import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Switch,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const recipes = [
  {
    title: "Spicy Tandoori Paneer Burger 🔥",
    img: "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-dep-thien-nhien-3d-001.jpg",
  },
  {
    title: "Puneri Misal Pav",
    img: "https://dulichviet.com.vn/images/bandidau/danh-sach-nhung-buc-anh-viet-nam-lot-top-anh-dep-the-gioi.jpg",
  },
  {
    title: "Margherita Pizza 🍕",
    img: "https://r2.nucuoimekong.com/wp-content/uploads/buc-anh-dep-can-bang-sang-tot-1.jpg",
  },
];

export default function HomePage() {
  const [search, setSearch] = useState();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={40} color="green" />
        <Text style={styles.greeting}>Hello, Game Play</Text>
      </View>

      {/* Input */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={20}
          color="gray"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          value={search}
          onChangeText={(v) => setSearch(v)}
          placeholder="Search for recipes, ingredients..."
          returnKeyType="done"
        />
      </View>
      {/* Category Section */}
      <Text style={styles.sectionTitle}>Category</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryContainer}
      >
        {[
          "Breakfast",
          "Lunch",
          "Dinner",
          "Salad",
          "Dessert",
          "Fastfood",
          "Drink",
          "Cake",
        ].map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryItem}
            onPress={() => alert(`Selected: ${category}`)}
          >
            <Ionicons name="fast-food-outline" size={30} color="orange" />
            <Text>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Latest Recipes */}
      <Text style={styles.sectionTitle}>Latest Recipes</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.recipeContainer}
      >
        {recipes.map((recipe, index) => (
          <TouchableOpacity
            key={index}
            style={styles.recipeCard}
            onPress={() => alert(`Selected: ${recipe.title}`)}
          >
            <ImageBackground
              source={{ uri: recipe.img }}
              style={styles.recipeImage}
              imageStyle={styles.imageBorder}
            >
              <View style={styles.overlay} />
              <Text style={styles.recipeText}>{recipe.title}</Text>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 20 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  greeting: { fontSize: 18, fontWeight: "bold" },
  switchContainer: { flexDirection: "row", alignItems: "center" },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  buttonText: { color: "white", fontWeight: "bold" },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  categoryContainer: { flexDirection: "row", marginBottom: 20 },
  categoryItem: {
    alignItems: "center",
    marginRight: 20,
    padding: 10, // Thêm khoảng trống để dễ bấm
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  recipeContainer: { flexDirection: "row", marginBottom: 20 },
  recipeCard: {
    width: 180,
    height: 120,
    borderRadius: 15,
    overflow: "hidden",
    marginRight: 15,
  },
  recipeImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  imageBorder: {
    borderRadius: 15,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "40%",
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  recipeText: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});
