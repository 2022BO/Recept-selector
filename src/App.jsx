import { useState } from 'react';
import { RecipeListPage } from './pages/RecipeListPage';
import { RecipePage } from './pages/RecipePage';

export const App = () => {
  const [selectedItem, setSelectedItem] = useState();

  return (
    <div>
      {selectedItem ? (
        <RecipeListPage recipe={selectedItem} clickFn={setSelectedItem} />
      ) : (
        <RecipePage clickFn={setSelectedItem} />
      )}
    </div>
  );
};