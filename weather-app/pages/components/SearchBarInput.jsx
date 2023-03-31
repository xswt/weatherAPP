import React, {useState} from 'react';


const SearchBarInput = ({classNameStyles}) => {

  const [input, setInput] = useState();

  return (
    <input 
    className={classNameStyles}
    type="text" 
    placeholder="Search..."
    onChange={(e) => setInput(e.target.value)}
    >
    </input>
  )
}

export default SearchBarInput