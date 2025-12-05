/*import { useState } from 'react'

//jo bhi change karna hoga uske liye use state rakhenge 
//const[variable1 to get memory, var2 for update] = what to put on memory right now , it can be null

function Student(props) {
  return (
    <div style={{ border: '1px solid white', padding: '10px', margin: '10px' }}>
      <h3>Naam: {props.name}</h3>
      <p>Role: {props.role}</p>
      <p>age:  {props.age}</p>
    </div>
  )
}

function App() {
  // 1. Mayank ke liye alag state (Memory 1)
  const [mayankName, setMayankName] = useState("Mayank")
  // age ke liye alg state (memory 3)
  const [ageM, setAgeM] = useState("20")
  const [ageR, setAgeR] = useState("19")
  
  // 2. Rahul ke liye alag state (Memory 2)
  const [rahulName, setRahulName] = useState("Rahul")

  return (
    <div>
      <h1>Team Members</h1>

      {/* --- BOX 1: MAYANK --- */
      {/* Isko humne 'mayankName' diya */}
      /*<Student name={mayankName} role="Backend Dev" Student age ={ageM} />
      <button onClick={() => setMayankName("high security engineer Mayank")}>
        Promote Mayank
      </button>
      <button onClick={()=> setAgeM("21 age after prmotion")}>age</button>

      <hr /> {/* Thoda gap ke liye */

      {/* --- BOX 2: RAHUL --- */}
      {/* Isko humne 'rahulName' diya */}
      /*Student name = {rahulName} role="Frontend Dev" age =  {ageR}/>
      

      
      {/* Ye button ab 'setRahulName' use karega */
     /* <button onClick={() => setRahulName("Firee security engineer Rahul")}>
        Promote Rahul
      </button>
      <button onClick = {()=> setAgeR("20age after prmotion")}>
      age
      </button>
    </div>
  )
}



export default App*/
/*import { useState } from 'react'

function App() {
  // 1. Ek variable banaya jo text store karega
  const [task, setTask] = useState("")
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Work Manager</h1>
      
      {/* INPUT FIELD */
      /*<input 
        type="text" 
        placeholder="Kya kaam karna hai?"
        
        // 2. Value ko variable se lock kar diya (Two-way binding)
        value={task} 

        // 3. Jaise hi user kuch type karega, hum state update karenge
        onChange={(e) => {
          setTask(e.target.value)
          console.log(e.target.value) // Console mein check karna
        }}
        
        style={{ padding: '10px', width: '200px' }}
      />

      <p>Tum type kar rahe ho: {task}</p>
    </div>
  )
}

export default App*/