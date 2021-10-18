import Restaurant from "./Restaurant";
import Form from "./Form";
import data from "../data.json";
import { useState } from "react";

export default function Details() {
  const [restList, setRestList] = useState(data);

  const restaurantArray = (data) => {
    setRestList([...restList, data]);
  };

  // Sorting Functions

  const handleSortAscending = ({ restList }) => {
    const updated = restList
      .sort((a, b) => Number(a.rating) - Number(b.rating))
      .map((e) => e);
    setRestList(updated);
  };

  const handleSortDescending = ({ restList }) => {
    const updated = restList
      .sort((a, b) => Number(b.rating) - Number(a.rating))
      .map((e) => e);
    setRestList(updated);
  };

  const handleCostAscending = ({ restList }) => {
    const updated = restList
      .sort((a, b) => Number(a.cost) - Number(b.cost))
      .map((e) => e);
    setRestList(updated);
  };

  const handleCostDescending = ({ restList }) => {
    const updated = restList
      .sort((a, b) => Number(b.cost) - Number(a.cost))
      .map((e) => e);
    setRestList(updated);
  };

  // Filtering Functions

  const filter = (num) => {
    const updated = restList.filter((ele) => ele.rating > num);
    setRestList(updated);
  };

  const handlePaymentCash = () => {
    const updated = restList.filter((ele) => ele.cash === true);
    setRestList(updated);
  };
  const handlePaymentCard = () => {
    const updated = restList.filter((ele) => ele.card === true);
    setRestList(updated);
  };

  return (
    <div>
      {/* Sorting */}
      <div>
        {" "}
        <button
          onClick={() => {
            handleSortAscending({ restList });
          }}
        >
          Sort(Rating : Ascending)
        </button>
        <button
          onClick={() => {
            handleSortDescending({ restList });
          }}
        >
          Sort(Rating : Descending)
        </button>
        <button
          onClick={() => {
            handleCostAscending({ restList });
          }}
        >
          Sort(Cost : Ascending)
        </button>
        <button
          onClick={() => {
            handleCostDescending({ restList });
          }}
        >
          Sort(Cost : Descending)
        </button>
      </div>
      ******************************************************************************************************
      {/* Filtering */}
      <div>
        <button
          onClick={() => {
            filter(2);
          }}
        >
          Filter(Rating greater than 2)
        </button>

        <button
          onClick={() => {
            filter(1);
          }}
        >
          Filter(Rating greater than 1)
        </button>
        <button
          onClick={() => {
            filter(3);
          }}
        >
          Filter(Rating greater than 3)
        </button>
        <button
          onClick={() => {
            filter(4);
          }}
        >
          Filter(Rating greater than 4)
        </button>

        <button onClick={handlePaymentCash}>Cash Only</button>
        <button onClick={handlePaymentCard}>Card Only</button>

        <button
          onClick={() => {
            setRestList(data);
          }}
        >
          All
        </button>
      </div>
      ******************************************************************************************************
      <Form restaurantArray={restaurantArray} />
      <Restaurant data={restList} />
    </div>
  );
}
