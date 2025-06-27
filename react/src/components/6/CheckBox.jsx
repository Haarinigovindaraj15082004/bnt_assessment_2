import React, { useState } from 'react';

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
    <h2>Q6: checkbox</h2>
      <label>
        <input type="checkbox" onChange={handleChange} />
        Check me
      </label>
      {isChecked && <p>You checked the box!</p>}
      <hr/>
    </div>
  );
};

export default CheckBox;
