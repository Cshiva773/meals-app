import {Global} from '../context'
import {BsHandThumbsUp} from 'react-icons/bs'

const Meals = () => {
  const {loading,meals,selectMeal,addfav}=Global()
  if(loading){
    return <section className="section">
      <h4>loading...</h4>
    </section> 
  }
  if(meals.length<1){
    return <section className='section-center'>
      <h4>Lost in a Dark space, let me out of here</h4>
    </section> 
  }
  return<section className='section-center'>
    {meals.map((s)=>{
      const {idMeal,strMeal: title,strMealThumb:image}=s
      return <article key={idMeal} className="single-meal">
        <img src={image} style={{width:'200px'}} className="img" onClick={()=>selectMeal(idMeal)} />
        <footer>
          <h4>{title}</h4>
          <button className='like-btn' onClick={()=>addfav(idMeal)}><BsHandThumbsUp /></button>
        </footer>
      </article>
    })}
  </section>
}
export default Meals