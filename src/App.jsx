import { useState } from 'react'

function App1() {
    // 1. INPUT STATE: Jo abhi type ho raha hai (Temp buffer)
    const [task, setTask] = useState("") 
    
    // 2. MAIN STORAGE: Saare tasks ki list (std::vector<string>)
    // Initial value empty array [] hai
    const [mainTask, setMainTask] = useState([]) 

    const submitHandler = (e) => {
        e.preventDefault() // Page reload hone se rokta hai (Form submit behavior)
        
        // Validation: Khali task add mat karo
        if(task.length > 0) {
            // Push logic: Purana copy karo + naya jodo
            setMainTask([...mainTask, { task }]) 
            
            setTask("") // Input box ko wapas khali kar do (Reset buffer)
        }
    }

    return (
        <div style={{ padding: '50px', backgroundColor: '#1a1a1a', color: 'white', minHeight: '100vh', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem' }}>TASK MANAGER</h1>
            
            <form onSubmit={submitHandler}>
                <input
                    type='text'
                    placeholder="Enter Task here..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    style={{ 
                        padding: '10px 20px', 
                        width: '300px', 
                        fontSize: '18px',
                        borderRadius: '5px',
                        border: '2px solid #666',
                        marginRight: '10px'
                    }}
                />
                
                <button 
                    style={{
                        padding: '12px 25px',
                        fontSize: '18px',
                        backgroundColor: '#646cff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Add Task
                </button>
            </form>

            <hr style={{ margin: '30px 0', opacity: 0.2 }}/>

            {/* RENDER LIST (Loop logic) */}
            <div style={{ padding: '20px', backgroundColor: '#2a2a2a', margin: '0 auto', maxWidth: '600px' }}>
                {
                    mainTask.length === 0 
                    ? <h2>No Tasks Available</h2> 
                    : mainTask.map((t, i) => {
                        return (
                            <div key={i} style={{ 
                                display: 'flex', 
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                backgroundColor: '#444', 
                                margin: '10px 0', 
                                padding: '15px',
                                borderRadius: '5px'
                            }}>
                                <h4>{t.task}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default App1