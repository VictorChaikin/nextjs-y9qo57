import styles from './Search.module.css';

export const Search = ({ value, onInput, placeholder }) => (
  <div className={styles.inputWrapper}>
    <input
      className={styles.input}
      type="text"
      placeholder={placeholder}
      value={value}
      onInput={(e) => onInput(e.target.value)}
    />
  </div>
);
