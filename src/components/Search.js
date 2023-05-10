import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search({theseFoods, setTheseFoods, thoseFoods}) {
    const [search, setSearch] = useState("");
    const handleSearchInput = (e) => {
        setSearch(e.target.value)
        searchFunc(e.target.value)
    }

    const searchFunc = (search) => {
        if (search !== "") {
       let newFoods = thoseFoods.filter(element => {
        return element.name.toLowerCase().includes(search);
       })
       setTheseFoods(newFoods);
    } else {
        setTheseFoods(thoseFoods);
    }
    }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="text" onChange={handleSearchInput} />
    </>
  );
}

export default Search;