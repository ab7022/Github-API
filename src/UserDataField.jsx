import React from "react";

function UserDataField({ label, value }) {
  let formattedValue = value;

  const dateFormattingRules = {
    created_at: {
      format: "long",
    },
    updated_at: {
      format: "short",
    },
  };

  const isDateField = value && dateFormattingRules[label];

  if (isDateField) {
    formattedValue = new Date(value).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "UTC",
    });
  }

  return (
    <div className="field">
      <label htmlFor={label.toLowerCase()}>{label}: </label>
      <input
        type="text"
        name={label.toLowerCase()}
        value={formattedValue}
        id={label.toLowerCase()}
        readOnly
      />
    </div>
  );
}

export default UserDataField;
