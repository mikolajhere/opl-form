import React, { useRef, useState } from "react";
import { FormWrapper } from "./FormWrapper";

export function DateForm({ updateFields }) {
  const [startDate, setStartDate] = useState(new Date());
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setStartDate(e.target.value);
    updateFields({ "dataValues[serviceDataServiceDate]": e.target.value });
  };

  return (
    <FormWrapper title="Termin">
      <label htmlFor="date">Wybierz datę:</label>
      <input
        autoFocus
        type="date"
        id="date"
        onChange={handleChange}
        ref={dateInputRef}
      />
          
    </FormWrapper>
  );
}
