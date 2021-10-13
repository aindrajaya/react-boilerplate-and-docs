export default function TodoForm({value, setValue, klik}) {
  
  console.log(value)
  return (
    <div>
     <form onSubmit={klik}>
        <input 
            placeholder="Add todo"
            onChange={e => setValue(e.target.value)}
            value={value}
          />
          <button type="submit">Add</button>
      </form>
    </div>
  )
}
