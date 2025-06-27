import React, { useState } from 'react';

const ItemList = () => {
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange']);

  const handleDelete = (indexToDelete) => {
    const updatedItems = items.filter((_, index) => index !== indexToDelete);
    setItems(updatedItems);
  };

  return (
    <div>
      <h2>Q10: Item List</h2>
      {items.length === 0 ? (
        <p>No items left</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item} 
              <button onClick={() => handleDelete(index)} style={{ marginLeft: '10px' }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      <hr/>
    </div>
  );
};

export default ItemList;
