// FormContext.js
import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [page, setPage] = useState(0);

  const nextStep = () => setPage((prevPage) => prevPage + 1);
  const previousStep = () => setPage((prevPage) => prevPage - 1);

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        page,
        nextStep,
        previousStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
