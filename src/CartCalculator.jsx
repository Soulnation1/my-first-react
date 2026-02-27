import { useState } from "react";

const initialItems = [
  { id: 1, name: "Rice", price: 100, quantity: 15 },
  { id: 2, name: "Beans", price: 150, quantity: 10 },
];

const CartCalculator = () => {
  const [items, setItems] = useState(initialItems);
 

  return (
    <div className="flex flex-col text-center bg-black">
      <h1 className="font-bold text-2xl text-green-500">
        Cart Calculator
      </h1>

      {items.map((item) => {
        
        <div key={item.id} className="bg-blue-300 m-4 p-6">
          <h2>Item: {item.name}</h2>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button
            onClick={() =>
              setItems((prevItems) =>
                prevItems.map((i) =>
                  i.id === item.id
                    ? { ...i, quantity: i.quantity + 1 }
                    : i
                )
              )
            }
            className="px-5 py-2 rounded-xl bg-green-900 mx-4 mt-4"
          >
            +
          </button>

          <button
            onClick={() =>
              setItems((prevItems) =>
                prevItems.map((i) =>
                  i.id === item.id
                    ? {
                        ...i,
                        quantity: i.quantity > 0 ? i.quantity - 1 : 0,
                      }
                    : i
                )
              )
            }
            className="px-5 py-2 rounded-xl bg-red-900"
          >
            -
          </button>
        </div>
  })}
    </div>
  );
};

export default CartCalculator;