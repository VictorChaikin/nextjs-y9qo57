import styles from './Input.module.css';

export const Input = ({ type, placeholder, errorMessage }) => (
  <div className={styles.inputWrapper}>
    <input className={styles.input} placeholder={placeholder} type={type} />

    {!errorMessage?.length ? null : (
      <div className={styles.errorMessage}>{errorMessage}</div>
    )}
  </div>
);
