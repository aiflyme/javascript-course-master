import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';

import { MODAL_CLOSE_SEC } from './config.js'; // import icons from '../img/icons.svg'; //Parcel 1

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import bookmarksView from './views/bookmarksView.js';
import paginationView from './views/paginationView.js';
import AddRecipeView from './views/addRecipeView.js';
import addRecipeView from './views/addRecipeView.js';

// if (module.hot) {
//   module.hot.accept();
// }
// https://forkify-api.herokuapp.com/v2
// API df1c4dd0-3711-4bbb-aa98-bffced10a073

///////////////////////////////////////

const controlRecipe = async function () {
  try {
    let id = window.location.hash.slice(1);
    // if (!id) id = '664c8f193e7aa067e94e8a12';
    // if (!id) return;
    if (!id) return; //
    recipeView.renderSpinner();

    //0) update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());
    //0.1) Updating bookmarks view
    //debugger;
    bookmarksView.update(model.state.bookmarks);

    //1) Load recipe
    // renderSpinner(recipeContainer);
    await model.loadRecipe(id);
    // const { recipe } = model.state;

    //2) Rendering recipe
    recipeView.render(model.state.recipe);
    // const recipeView = new recipeView(model.state.recipe);

    //test
    // controlServings();
  } catch (err) {
    // console.log(err);
    recipeView.renderError(); // `We could not find that recipe. Please try another one!`
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    //1 Get search query

    const query = searchView.getQuery();

    if (!query) return;

    //2 Load search results
    await model.loadSearchResults(query);

    // console.log(model.state.search.results);

    //3). Render results`
    //resultsView.render(model.state.search.results);
    // console.log(model.getSearchResultsPage(1));
    resultsView.render(model.getSearchResultsPage());

    //4) Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

// controlPagenation();
function controlPagenation(goToPage) {
  resultsView.render(model.getSearchResultsPage(goToPage));

  //2) Render initial pagination buttons
  paginationView.render(model.state.search);
}

const controlServings = function (newServings) {
  //update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1) Add / Remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // console.log(model.state.recipe);
  recipeView.update(model.state.recipe);

  //3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  // console.log(newRecipe);

  //Upload new recipe
  try {
    addRecipeView.renderSpinner();

    await model.uploadRecipe(newRecipe);

    //Render recipe
    recipeView.render(model.state.recipe);

    //Sucess message
    addRecipeView.renderMessage();

    //Render bookmark view
    bookmarksView.render(model.state.bookmarks);

    //Change ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    // window.history.back();

    //Close form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error(err);
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  addRecipeView.addHanderUpload(controlAddRecipe);

  bookmarksView.addHandler(controlBookmarks);

  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);

  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagenation);
};
init();
