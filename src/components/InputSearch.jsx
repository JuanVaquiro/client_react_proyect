const InputSearch = ({ value, change }) => {
  return (
    <input
        className="p-1 border-2 border-sky-500 rounded-md w-1/2 mt-3 mb-3"
        value={value}
        onChange={change}
        type="text"
        placeholder="Buscador"
      />
  )
}

export default InputSearch