import React, { useEffect, useState } from "react";
import Item from "./Item";

function Submit(props) {
  const numbers = ["1", "2", "3", "4", "5"];
  const [rating, setRating] = useState(
    numbers.map((number) => {
      return (number = new Item(number));
    })
  );

  useEffect(() => {
    console.log(rating);
  }, [rating]);

  function onSelect(item) {
    console.log(item);
    const newRating = rating.map((prevItem) => {
      if (prevItem.value === item.value) {
        prevItem.checked = true;
      } else {
        prevItem.checked = false;
      }

      return prevItem;
    });

    setRating(newRating);
  }

  return (
    <div className="submit">
      <ul>
        {rating.map((item) => (
          <li
            onClick={(event) => {
              onSelect(item);
            }}
          >
            {item.value}
          </li>
        ))}
      </ul>
      <button className="submittButton">SUBMIT</button>
    </div>
  );
}

export default Submit;
