import {
  Card,
  Image,
  CardBody,
  Stack,
  Heading,
  Text,
  Flex,
} from '@chakra-ui/react';
import { Tag } from './ui/RecipeItemPage';

export const RecipeItemCard= ({ recipe, clickFn }) => {
  return (
    <Card
      borderRadius="xl"
      w="sm"
      h="30rem"
      onClick={() => clickFn(recipe)}
      cursor="pointer"
      _hover={{ transform: 'scale(1.01)' }}
    >
      <CardBody>
        <Image h={64} w="sm" src={recipe.image} borderRadius="xl" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{recipe.label}</Heading>
          <Text>{recipe.label}</Text>
          <Flex gap={2}>
            {recipe.healthLabels.map((recipe) => (
              <Tag key={recipe}>{recipe}</Tag>
            ))}
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};

/*import {
  Card,
  Image,
  CardBody,
  Stack,
  Heading,
  Text,
  Flex,
} from '@chakra-ui/react';


export const TextInput= ({ onClick, recipe }) => {
  return (
    <Card
      borderRadius="xl"
      w="sm"
      h="30rem"
      onClick={() => onClick(recipe)}
      cursor="pointer"
      _hover={{ transform: 'scale(1.01)' }}
    >
      <CardBody>
        <Image h={64} w="sm" src={item.imageUrl} borderRadius="xl" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{recipe.label}</Heading>
          <Text>{recipe.mealType}</Text>
          <Flex gap={2}>
            {hits.recipe.map((recipe) => (
              <Tag key={recipe}>{dishType}</Tag>
            ))}
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};*/