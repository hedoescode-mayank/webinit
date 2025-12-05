import { useState } from 'react'

function App1() {
    const [task,taskupdate] = useState("")
    return (
        <div style = {{padding:'20px', textAlign: 'centre'}}>
                <h1>TASK MANGER</h1>
                <h2>manage your task better here</h2>
        
        <input
        type = 'text'
        placeholder="jo kaam karna h kar le bhai"
        value = {task}
        onChange={(e) => {taskupdate(e.target.value)
            console.log(e.target.value)
        }}
        style = {{ padding: '10px',width:'200px'}}
        />
        <p> your tasks are: {task}</p>
        </div>
    )

}
export default App1