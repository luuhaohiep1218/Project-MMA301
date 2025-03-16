import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons'; // Import icon back từ react-native-vector-icons

const CreateRecipeScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [calories, setCalories] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [servings, setServings] = useState('');
  const [ingredients, setIngredients] = useState([{ name: '', amount: '' }]);
  const [instructions, setInstructions] = useState(['']);
  const [image, setImage] = useState('');
  const [errors, setErrors] = useState({});

  // Dữ liệu các công thức
  const [recipes, setRecipes] = useState([]);
  const [myRecipes, setMyRecipes] = useState([]); // Thêm state myRecipes để lưu công thức của người dùng

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: '', amount: '' }]);
  };

  const handleAddInstruction = () => {
    setInstructions([...instructions, '']);
  };

  const validate = () => {
    let valid = true;
    const errors = {};

    if (!name) {
      errors.name = 'Recipe name is required';
      valid = false;
    }
    if (!category) {
      errors.category = 'Category is required';
      valid = false;
    }
    if (!description) {
      errors.description = 'Description is required';
      valid = false;
    }
    if (!calories) {
      errors.calories = 'Calories are required';
      valid = false;
    }
    if (!cookingTime) {
      errors.cookingTime = 'Cooking time is required';
      valid = false;
    }
    if (!servings || servings < 1) {
      errors.servings = 'Servings must be greater than 0';
      valid = false;
    }
    if (!image) {
      errors.image = 'Image URL is required';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = () => {
    if (validate()) {
      const newRecipe = {
        id: Math.random().toString(),  // Tạo id ngẫu nhiên cho công thức
        name,
        category,
        description,
        calories,
        cookingTime,
        servings,
        ingredients,
        instructions,
        image,
      };

      // Cập nhật danh sách myRecipes với công thức mới
      setMyRecipes([...myRecipes, newRecipe]);

      console.log('Recipe submitted:', newRecipe);
      Alert.alert('Success', 'Recipe submitted successfully');
      
      // Làm sạch các trường sau khi thêm công thức
      setName('');
      setCategory('');
      setDescription('');
      setCalories('');
      setCookingTime('');
      setServings('');
      setIngredients([{ name: '', amount: '' }]);
      setInstructions(['']);
      setImage('');
    } else {
      Alert.alert('Validation Failed', 'Please fill all required fields correctly');
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.scrollView} enableOnAndroid={true} extraScrollHeight={20}>
      <View style={styles.container}>
        <Icon
          name="arrow-back"
          size={30}
          color="black"
          style={styles.iconBack}
          onPress={() => navigation.goBack()}
        />

        {/* Tiêu đề trang */}
        <Text style={styles.pageTitle}>Add a New Recipe</Text>

        <Text style={styles.label}>Recipe Name:</Text>
        <TextInput
          style={[styles.input, errors.name && styles.errorInput]}
          value={name}
          onChangeText={setName}
          placeholder="Enter recipe name"
        />
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

        <Text style={styles.label}>Category:</Text>
        <TextInput
          style={[styles.input, errors.category && styles.errorInput]}
          value={category}
          onChangeText={setCategory}
          placeholder="Enter recipe category"
        />
        {errors.category && <Text style={styles.errorText}>{errors.category}</Text>}

        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={[styles.input, errors.description && styles.errorInput]}
          value={description}
          onChangeText={setDescription}
          placeholder="Enter description"
          multiline
        />
        {errors.description && <Text style={styles.errorText}>{errors.description}</Text>}

        <Text style={styles.label}>Calories:</Text>
        <TextInput
          style={[styles.input, errors.calories && styles.errorInput]}
          value={calories}
          onChangeText={setCalories}
          placeholder="Enter calories"
          keyboardType="numeric"
        />
        {errors.calories && <Text style={styles.errorText}>{errors.calories}</Text>}

        <Text style={styles.label}>Time (hh:mm:ss):</Text>
        <TextInput
          style={[styles.input, errors.cookingTime && styles.errorInput]}
          value={cookingTime}
          onChangeText={setCookingTime}
          placeholder="Enter cooking time"
        />
        {errors.cookingTime && <Text style={styles.errorText}>{errors.cookingTime}</Text>}

        <Text style={styles.label}>Servings:</Text>
        <TextInput
          style={[styles.input, errors.servings && styles.errorInput]}
          value={servings}
          onChangeText={(text) => setServings(Number(text))}
          placeholder="Enter servings"
          keyboardType="numeric"
        />
        {errors.servings && <Text style={styles.errorText}>{errors.servings}</Text>}

        <Text style={styles.label}>Ingredients:</Text>
        {ingredients.map((ingredient, index) => (
          <View key={index} style={styles.ingredientContainer}>
            <TextInput
              style={styles.input}
              value={ingredient.name}
              onChangeText={(text) => {
                const newIngredients = [...ingredients];
                newIngredients[index].name = text;
                setIngredients(newIngredients);
              }}
              placeholder="Ingredient name"
            />
            <TextInput
              style={styles.input}
              value={ingredient.amount}
              onChangeText={(text) => {
                const newIngredients = [...ingredients];
                newIngredients[index].amount = text;
                setIngredients(newIngredients);
              }}
              placeholder="Amount"
            />
          </View>
        ))}
        <Button title="Add Ingredient" onPress={handleAddIngredient} color="#28a745" />

        <Text style={styles.label}>Steps:</Text>
        {instructions.map((instruction, index) => (
          <TextInput
            key={index}
            style={styles.input}
            value={instruction}
            onChangeText={(text) => {
              const newInstructions = [...instructions];
              newInstructions[index] = text;
              setInstructions(newInstructions);
            }}
            placeholder={`Step ${index + 1}`}
          />
        ))}
        <Button title="Add Instruction" onPress={handleAddInstruction} color="#28a745" />

        <Text style={styles.label}>Image URL:</Text>
        <TextInput
          style={[styles.input, errors.image && styles.errorInput]}
          value={image}
          onChangeText={setImage}
          placeholder="Enter image URL"
        />
        {errors.image && <Text style={styles.errorText}>{errors.image}</Text>}

        <Button title="Submit Recipe" onPress={handleSubmit} color="#28a745" />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 30,
  },
  scrollView: {
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 10,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#28a745',  // Tiêu đề màu xanh lá
    textAlign: 'center',
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000', // Màu đen cho các nhãn
  },
  input: {
    borderWidth: 1,
    borderColor: '#28a745', // Viền màu xanh lá
    padding: 12,
    marginVertical: 10,
    borderRadius: 10, // Bo góc input đẹp hơn
    backgroundColor: '#fff', // Màu nền sáng cho input
    fontSize: 16,
    color: '#000', // Màu chữ đen trong các input
  },
  ingredientContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  iconBack: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
});

export default CreateRecipeScreen;
