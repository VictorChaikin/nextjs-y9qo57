import { useState, useRef } from 'react';

import Input from '../Input';
import styles from './Form.module.css';

export const Form = ({ fields, onSuccess, btnText }) => {
  const [errors, setErrors] = useState({});
  const form = useRef();

  const onSubmit = () => {
    const newErrors = {};
    const inputsValues = [...form.current.children]?.map(
      (item) => item.children[0]?.value
    );

    fields?.forEach((item, idx) => {
      const message = item.getErrorMessage(inputsValues[idx]);

      if (message?.length) {
        newErrors[item.id] = message;
      }
    });

    if (!Object.keys(newErrors)?.length) {
      onSuccess(inputsValues);
    }

    setErrors(newErrors);
  };

  return (
    <>
      <div className={styles.form} ref={form}>
        {fields?.map((item) => (
          <Input
            key={item.id}
            type={item.type}
            placeholder={item.placeholder}
            errorMessage={errors[item.id]}
          />
        ))}
      </div>

      <div className={styles.formControls}>
        <button className={styles.btn} type="submit" onClick={onSubmit}>
          {btnText}
        </button>
      </div>
    </>
  );
};
