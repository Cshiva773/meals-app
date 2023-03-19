import {Global} from '../context'

const Favourites=()=>{
  const {favourite,selectMeal,removefav}=Global()
  return <section className='favorites'>
    <div className="favorites-content">
      <h5>Favourites</h5>
      <div className="favorites-container">
        {favourite.map((item)=>{
          const {idMeal,strMealThumb:image}=item
          return <div key={idMeal} className="favorite-item">
            <img src={image} className='favorites-img img' onClick={() => selectMeal(idMeal, true)}/>
            <button className="remove-btn" onClick={()=>removefav(idMeal)}>remove</button>
          </div>
        })}
      </div>
    </div>
  </section>
}
export default Favourites