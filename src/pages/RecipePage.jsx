//import { useState } from 'react'; // Deze regel is verwijderd omdat useState momenteel niet wordt gebruikt
import { Heading, Box, Center, Image } from '@chakra-ui/react';

const RecipePage = ({ recipe, goBack }) => {
  return (
    <Center h="100vh" flexDir="column">
      <Box maxW="32rem">
        <Heading>Your Recipe App{recipe.label}</Heading>
        {/* <Image src={recipe.recipe.image} alt={recipe.recipe.label} style={{ width: '200px' }} />
                <h2>Meal type: {recipe.mealType}</h2>
                <p>Dish type: {recipe.dishType}</p>
                <p>Total cooking time: {recipe.totalTime} minutes TimeIcon</p>
                <p>Diet Labels: {recipe.recipe.dietLabels.join(', ')}</p>
                <p>{recipe.healthLabels}</p>
                <p>Cautions: {recipe.recipe.cautions.join(', ')}</p>
                <h2>Ingredients:</h2>
                <ul>
                    {recipe.ingredients.map((label, index) => (
                        <li key={index}>{label}</li>
                    ))}
                </ul>
                <p>Servings: {recipe.recipe.yield}</p>
                <h2>Total Nutrients:</h2>
                <ul>
                    {recipe.totalNutrients.map((label, index) => (
                        <li key={index}>{label}</li>
                    ))}
                </ul> */}
        <button onClick={goBack}>Back to Recipes</button>
      </Box>
    </Center>
  );
};

export default RecipePage;
