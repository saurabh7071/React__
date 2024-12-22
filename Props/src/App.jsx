
import Card from "./Card.jsx";
import './App.css'

function App() {

// const newObj = {
//   name: "John",
//   age: 30,
// }

// const newArray = [1,3];

  return (
    <>
      <h1>Tailwind CSS</h1>
      <br />
      <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Suck My Dick</button>
      <br />
      <br />
      {/* card component with passing the different props*/}
      <Card username="Saurabh" role="Full Stack Developer"/>  
      <br />
      <Card username="Kishor" />
      
    </>
  )
}

export default App
