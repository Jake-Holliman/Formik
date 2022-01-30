function TodoForm({addTodo}){
    const [value, setValue] = React.useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        const newTodos = [...todos, {text:text, isCompleted:false}];
        setTodos(newTodos);
        setValue('');
      };
      
    return (<form onSubmit={handleSubmit}>
    <input type="text"
            className="input"
            value={value}
            placeholder="add to-do"
            onChange={e => setValue(e.target.value)} />

  </form>);
}
