import './styles.css';




export const TodoItem = (props) => {
  const { todoText } = props.todo;
  const {deleteTodo} = props;
  

  return (
    <div className="todo-item">
      <h2>{todoText}</h2>
      <button className = 'doneButton'onClick={(e) => {e.stopPropagation(); deleteTodo()}}>Mark as done</button>
      <button onClick={(e) => {e.stopPropagation(); deleteTodo()}}>X</button>
    </div>
  );
};

