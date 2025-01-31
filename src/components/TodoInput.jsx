import {useState} from 'react'

export function TodoInput(props) {
    const {handleAddTodo} = props   
    const [inputValue, setInputValue] = useState('')

    const handleAddTask = () => {
        if (!inputValue.trim()) {
            alert("Task cannot be empty!");
            return;
        }
        handleAddTodo(inputValue);
        setInputValue('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    };

    return (
        <div className="input-container">
            <input 
                value={inputValue} 
                onChange={(e)=>{setInputValue(e.target.value)}} 
                onKeyDown={handleKeyPress} 
                placeholder="Add task" />
            <button onClick={handleAddTask}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}      