
import './App.css'
import Cards from "./components/cards.jsx"

function App() {
  let myObj = {
    username: "Saurabh",
    age: 21
  }

  let newArray = [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl m-6'>Tailwind & Props</h1>
      <Cards username="Aryana Singh" someObj = {myObj}/>
      <Cards username="Poorna Poli" someArr = {newArray}/>
    </>
  )
}

export default App
