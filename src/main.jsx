import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Recipes from './components/Recipes/Recipes'
import RecipeDetails from './components/RecipeDetails/RecipeDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/recipes",
        loader: () => fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
        element: <Recipes></Recipes>
      },
      {
        path: "/recipe/:idCategory",
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/categories.php/${params.idCategory}`),
        element: <RecipeDetails></RecipeDetails>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
