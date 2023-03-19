import {useState} from "react"
import {Global} from "../context"
const search=()=>{
  const {setSearchTerm,fetchRandomMeal}=Global()
  const [text,setText]=useState('')
  const handleChange=(e)=>{
    setText(e.target.value)

  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(text){
      setSearchTerm(text)
    }
  }
  const handleRandomMeal=()=>{
    setSearchTerm('')
    setText('')
    fetchRandomMeal()
  }
  return <header className="search-container">
    
    <form onSubmit={handleSubmit}>
      <input  type="text" onChange={handleChange} value={text} placeholder="type fav-meal" className="form-input" />
      <button className="btn" type="submit">search</button>
      <button className="btn btn-hipster" type="btn" onClick={handleRandomMeal}>wanna try something new!</button>
    </form>
  </header>
}
export default search