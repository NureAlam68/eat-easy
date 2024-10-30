import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Recipes from './components/Recipes/Recipes'
import RecipeDetails from './components/RecipeDetails/RecipeDetails'
import Banner from './components/Banner/Banner'
import Details from './components/Details/Details'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element:<Banner></Banner>
      },
      {
        path: "/recipes",
        loader: () => fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
        element: <Recipes></Recipes>
      },
      {
        path: "/recipe/:strCategory",
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.strCategory}`),
        element: <RecipeDetails></RecipeDetails>
      },
      {
        path: "/details/:idMeal",
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`),
        element: <Details></Details>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
