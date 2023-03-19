
import './App.css'
import {Global} from "./context"
import Search from './components/Search'
import Favourites from './components/Favourites'
import Meals from './components/Meals'
import Modal from './components/Modal'
export default function App() {
  const {showModal,favourite}=Global()
  return (
    <main>
      <Search /> 
      {favourite.length>0} && <Favourites />
     <Meals />
     {showModal && <Modal />}
    </main>
  )
}
