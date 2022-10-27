import styles from './Search.module.css';

export const Search = ({ value, onInput, placeholder }) => (
  <div className={styles.growingSearch}>
    <div className={styles.input}>
      <input
        type="text"
        name="search"
        placeholder={placeholder}
        value={value}
        onInput={(e) => onInput(e.target.value)}
      />
    </div>

    <div className={styles.submit}>
      {/* <button type="submit" name="go_search"> */}
      <span className="fa fa-search"></span>
      {/* </button> */}
    </div>
  </div>
);
