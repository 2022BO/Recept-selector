import { useState } from 'react';
import { data } from './utils/data';
import { RecipeListPage } from './RecipeListPage';
import { TextInput } from '@chakra-ui/react';

export const RecipeSearch = ({ onClick }) => {
  const [searchField, setSearchField] = useState('');

  const matchedRecipes = data.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <label>Search for recipes:</label>
      <TextInput onChange={handleChange} w={200} mb={8} />
      <RecipeListPage onClick={onClick} recipes={matchedRecipes} />
      <Input value= {searchField} htmlSize={4} witdh='auto'/>
    </>
  );
};
