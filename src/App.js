import './App.css';
import FoodBox from './components/FoodBox';
import foods from "./foods.json";
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';
import Search from './components/Search';

function App() {

  const [theseFoods, setTheseFoods] = useState(foods);
  const [thoseFoods, setThoseFoods] = useState(foods);


  return (
    <div className="App">
    <div>
    <AddFoodForm theseFoods={theseFoods} setTheseFoods={setTheseFoods} thoseFoods={thoseFoods} setThoseFoods={setThoseFoods}/>
    </div>

    <div>
      <Search theseFoods={theseFoods} setTheseFoods={setTheseFoods} thoseFoods={thoseFoods}/>
    </div>
    
      <div className = "foodDiv">
      {theseFoods.map((food) => {
      return (
        <div>
      <FoodBox food={food} theseFoods={theseFoods} setTheseFoods={setTheseFoods} thoseFoods={thoseFoods} setThoseFoods={setThoseFoods}/>
      </div>
      )}
      )
      }
      </div>

    </div>
  );
}

export default App;
