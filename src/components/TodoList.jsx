import { TodoCard } from "./ToDoCard";

export function TodoList(props) {
    const {todos, selectedTab} = props
     
    const filtertodosList = selectedTab === 'All' ? 
        todos :
        selectedTab === 'Completed' ?
            todos.filter(val => val.complete) :
            todos.filter(val => !val.complete)



    return (
        <>
            {filtertodosList.map( (todo, todoIndex) => {
                return(
                    <TodoCard 
                        key={todoIndex} 
                        todoIndex={todoIndex} 
                        {...props} 
                        todo={todo}/>
                )
            })}
        </>
    )
}