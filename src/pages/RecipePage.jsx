//import { PortfolioItemCard } from '../components/PortfolioItemCard';
//import { portfolioItems } from '../utils/data';
import { RecipeItemPage } from './RecipeListPage'
import { TextInput } from 'components/ui/TextInput';
import { Center } from '@chakra-ui/react';

export const RecipePage = ({ clickFn }) => {
  return (
    <Center gap={8} h="100vh" bgColor="blue.100">
      {TextInput.map((item) => (
        <RecipeItemPage clickFn={clickFn} item={item} key={item.recipe} />
      ))}
    </Center>
  );
};


//import { useState } from 'react'; // Deze regel is verwijderd omdat useState momenteel niet wordt gebruikt
//import { Heading, Center, Image } from '@chakra-ui/react';
//import { TextInput } from '../components/ui/TextInput';
//import { RecipeItemPage } '../components/ui/RecipeItemPage';



/*export const RecipePage = ({ recipe, goBack }) => {
  return (
    <Center h="100vh" flexDir="column" gap={8} bgColor={"green.100"}>
      {data.map((item)=>(
        <TextInput changeFn={changeFn} item={recipe} key={item.recipe}/>
      ))}
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
                </ul> 
        <button onClick={goBack}>Back to Recipes</button>
    </Center>
  );
};*/


