export function Header(props) {
    const { todos } = props
    const todosLength=todos.length

    const isTaskPlural = todos.length != 1

    const taskOrTasks = isTaskPlural ? 'Tasks' : 'Task'

    return(
        <header>
            <h1 className="text-gradient">You Have  {todosLength} Open  {taskOrTasks} !</h1>
        </header>
    )
}