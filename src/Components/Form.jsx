// import { useState } from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Form({ restaurantArray }) {
  const initVal = {
    name: "",
    food: "",
    rating: "",
    cost: "",
    cash: false,
    card: false,
    upi: false
  };
  const [foodItem, setFoodItem] = useState(initVal);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFoodItem({
      ...foodItem,
      [name]: type === "checkbox" ? checked : value,
      id: uuid()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(foodItem);
    restaurantArray(foodItem);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Restaurant"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter item"
          name="food"
          onChange={handleChange}
        />
        <input
          type="string"
          placeholder="Enter image link"
          name="img"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter rating"
          name="rating"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter cost for one"
          name="cost"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="">Choose payment methods</label>
        <br />
        <label htmlFor="">Cash</label>
        <input type="checkbox" name="cash" onChange={handleChange} />
        <br />
        <label htmlFor="">Card</label>
        <input type="checkbox" name="card" onChange={handleChange} />
        <br />
        <label htmlFor="">UPI</label>
        <input type="checkbox" name="upi" onChange={handleChange} />
        <br />

        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
