import { async } from 'regenerator-runtime';
import { API_URL, API_KEY, RES_PER_PAGE } from './config.js';
import { AJAX, getJSON } from './helpers.js';
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

const createRecipeObject = function (data) {
  const { recipe } = data.data;

  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (id) {
  try {
    // const res = await fetch(
    //   `${config.API_URL}/${id}`
    // );
    // const data = await res.json();

    // if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    const data = await AJAX(`${API_URL}/${id}`);

    const { recipe } = data.data;

    // let recipe = {
    //   publisher: 'All Recipes',
    //   ingredients: [
    //     { quantity: 1.5, unit: 'tsps', description: 'white sugar' },
    //     { quantity: 1, unit: 'cup', description: 'warm water' },
    //     { quantity: 1.5, unit: 'tsps', description: 'active dry yeast' },
    //     { quantity: 1, unit: 'tbsp', description: 'olive oil' },
    //     { quantity: 0.5, unit: 'tsp', description: 'salt' },
    //     { quantity: 2, unit: 'cups', description: 'all-purpose flour' },
    //     { quantity: 1, unit: '', description: 'can crushed tomatoes' },
    //     { quantity: 1, unit: 'tbsp', description: 'packed brown sugar' },
    //     { quantity: 0.5, unit: 'tsp', description: 'garlic powder' },
    //     { quantity: 1, unit: 'tsp', description: 'olive oil' },
    //     { quantity: 0.5, unit: 'tsp', description: 'salt' },
    //     {
    //       quantity: 3,
    //       unit: 'cups',
    //       description: 'shredded mozzarella cheese divided',
    //     },
    //     {
    //       quantity: 0.5,
    //       unit: 'pound',
    //       description: 'bulk italian sausage',
    //     },
    //     { quantity: 1, unit: '', description: 'package sliced pepperoni' },
    //     {
    //       quantity: 1,
    //       unit: '',
    //       description: 'package sliced fresh mushrooms',
    //     },
    //     { quantity: 1, unit: '', description: 'green bell pepper chopped' },
    //     { quantity: 1, unit: '', description: 'red bell pepper chopped' },
    //   ],
    //   source_url:
    //     'http://allrecipes.com/Recipe/Double-Crust-Stuffed-Pizza/Detail.aspx',
    //   image_url: 'http://forkify-api.herokuapp.com/images/100111309d9.jpg',
    //   title: 'Double Crust Stuffed Pizza',
    //   servings: 4,
    //   cooking_time: 120,
    //   id: '664c8f193e7aa067e94e8297',
    // };

    state.recipe = createRecipeObject(data);
    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (err) {
    console.error(`${err} @@@@`);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    const data = await AJAX(`${API_URL}?search=${query}&key=${API_KEY}`);

    state.search.query = query;

    state.search.results = data.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
        ...(recipe.key && { key: recipe.key }),
      };
    });
    state.search.page = 1;
  } catch (err) {
    console.error(`${err} @@@@`);
    throw err;
  }
};
// loadSearchResults('pizza');

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  // console.log(state.search.resultsPerPage);
  const start = (page - 1) * state.search.resultsPerPage; //0;
  const end = page * state.search.resultsPerPage; //9
  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity / state.recipe.servings) * newServings;
  });

  state.recipe.servings = newServings;
};

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  state.bookmarks.push(recipe);
  console.log(state.bookmarks);
  //Mark current recipe as bookmark
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  persistBookmarks();
};

export const deleteBookmark = function (id) {
  //Delete bookmark
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  if (id === state.recipe.id) state.recipe.bookmarked = false;

  persistBookmarks();
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};

init();

const clearBookmarks = function () {
  localStorage.clear('bookmarks');
};
// clearBookmarks();

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].split(',').map(el => el.trim()); //replaceAll(' ', '')

        if (ingArr.length !== 3)
          throw new Error(
            'Wrong ingredient format! Please use corrent format :)'
          );

        const [quantity, unit, description] = ingArr;
        return { quantity: quantity ? +quantity : '', unit, description };
      });
    console.log(ingredients);
    // console.log(recipe);
    const data = await AJAX(`${API_URL}?key=${API_KEY}`, recipe);
    state.recipe = createRecipeObject(data);

    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};
