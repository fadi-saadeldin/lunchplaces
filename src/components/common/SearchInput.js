import React from 'react'

export  function SearchInput({value, handleChange,handleSubmit,placeholder}) {
  return (
    <form onSubmit={handleSubmit}>
        <label>
          Search Address: 
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Search" />
      </form>
  )
}
