import foods from "../foods.json";
import { Card, Row, Button } from 'antd';

function FoodBox({food, theseFoods, setTheseFoods, thoseFoods, setThoseFoods}) {
    let totalCalories = food.calories * food.servings;

    const deleteFood = (name) => {
        setThoseFoods([...thoseFoods].filter(food => food.name!==name))
        setTheseFoods([...theseFoods].filter(food => food.name!==name))
    }

    return (
      <Row>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image}  height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {totalCalories} </b> kcal
        </p>
        <Button type="primary" onClick={() => deleteFood(food.name)}> Delete </Button>
      </Card>
      </Row>
    )


}

export default FoodBox;