import React,{useState,useEffect,useContext} from 'react'
const AppContext=React.createContext()
import axios from 'axios'
const allMealUrl="https://www.themealdb.com/api/json/v1/1/search.php?s=a"
const randomMealUrl="https://www.themealdb.com/api/json/v1/1/random.php"
const AppProvider=({children})=>{
  const [meals,setMeals]=useState([])
  const [loading,setloading]=useState(false)
  const [searchTerm,setSearchTerm]=useState('')
  const [showModal,setshowModal]=useState(false)
  const [selectedMeal,setSelectedMeal]=useState(null)
  const [favourite,setFavourite]=useState([])
  
  const fetchData=async(url)=>{
    setloading(true);
    try{
      const response=await axios(url)
      if(response.data.meals){
        setMeals(response.data.meals)

        console.log("true")
      }
      else{
        setMeals([])
      }
    }
    catch(err){
      console.log(err.response)
    }
    setloading(false)
  }

  const fetchRandomMeal=()=>{
    fetchData(randomMealUrl)
  }

  const selectMeal=(idMeal,favouriteMeal)=>{
    let meal;
    if (favouriteMeal){
      meal=favourite.find((meal)=>meal.idMeal===idMeal);
      
    }
    else{
      meal=meal.find((meal)=>meal.idMeal===idMeal);
      
    }
    setSelectedMeal(meal)
    setshowModal(true)
  }

  const closeModal=()=>{
    setshowModal(false)
  }

  const addfav=(idMeal)=>{
    const alreadyfav=favourite.find((meal)=>meal.idMeal===idMeal)
    if(alreadyfav) return
    const meal=meals.find((meal)=>meal.idMeal === idMeal)
    const updatedfav=[...favourite,meal]
    setFavourite(updatedfav)
    localStorage.setItem('favourites',JSON.stringify(updatedfav))
  }

  const removefav=(idMeal)=>{
    const updatedfav=faavourite.filter((meal)=>meal.idMeal!==idMeal)
    setFavourite(updatedfav)
    localStorage.setItem("favorite", JSON.stringify(updatedfav))
  }
  
  useEffect(()=>{
    fetchData(allMealUrl)
  },[])
  
  useEffect(()=>{
    if(!searchTerm) return
    fetchData(`${allMealUrl}${searchTerm}`)

  },[searchTerm])
  return <AppContext.Provider value={{loading,meals,setSearchTerm,fetchRandomMeal,showModal,selectMeal,selectedMeal,closeModal,addfav,removefav,favourite}}>
      {children}
    </AppContext.Provider>
   
}
export const Global=()=>{
  return useContext(AppContext)
}
export {AppContext,AppProvider}