import React from 'react'

export  function SearchInput({value, handleChange,handleSubmit,placeholder}) {
  return (
    <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
  )
}
