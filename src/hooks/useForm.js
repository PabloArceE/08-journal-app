import { useState } from "react";

const useForm = (initialState = {}) => {
  const [inputValues, setInputValues] = useState(initialState);

  const reset = () => {
    setInputValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setInputValues({
      ...inputValues,
      [target.name]: target.value,
    });
  };

  return [inputValues, handleInputChange, reset];
};

export default useForm;
