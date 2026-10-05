import { useState } from "react";

const useToggle = (defaultVal = false) => {
  const [value, setValue] = useState(defaultVal);

  const toggleValue = (val) => {
    if (typeof val === "boolean") {
      setValue(val);
    } else {
      setValue(!value);
    }
  };

  return [value, toggleValue];
};

export default useToggle;