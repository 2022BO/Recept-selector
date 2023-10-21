import { useState } from 'react';

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { RecipeListPage } from './pages/RecipeListPage';
import {RecipePage} from './pages/RecipePage';

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const greeting = "Welcome to our restaurant ";

  return (
    <div>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          size="md"
          colorScheme="green"
          _hover={{ bgColor: 'green.500' }}
        >
          Open menu
        </MenuButton>
        <MenuList>
          <MenuItem as="a" href="/recipe-list">
            Bekijk onze Recepten
          </MenuItem>
          <MenuItem as="a" href="/recipe/123">
            Bekijk Specifiek Recept
          </MenuItem>
        </MenuList>
      </Menu>

      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} onClick={setSelectedRecipe} />
      ) : (
        <>
        <h1>{greeting}</h1>
        <RecipeListPage onClick={setSelectedRecipe} />
        </>
      )}
    </div>
   
  );
};

