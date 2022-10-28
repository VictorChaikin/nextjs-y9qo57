import { useState, useMemo } from 'react';
import Search from '../components/Search';
import styles from '../styles/Planets.module.css';

const planetImage = `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1200px-Mercury_in_color_-_Prockter07-edit1.jpg`;

export const Planets = ({ data, dataDescription }) => {
  const [search, setSearch] = useState('');

  const searchedList = useMemo(() => {
    if (!search?.length) return data;

    return data?.filter((item) => item.name?.startsWith(search));
  }, [data, search]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Planets list</h1>

      <div className={styles.searchWrapper}>
        <Search
          value={search}
          placeholder="Search..."
          onInput={setSearch}
        />
      </div>

      <ul className={styles.list}>
        {searchedList?.map((item, idx) => (
          <li key={item.name + idx} className={styles.listItem}>
            <img className={styles.image} src={item.image} alt="" />

            <div className={styles.cardContent}>
              {dataDescription?.map((row) => (
                <div className={styles.cardContentItem}>
                  <span className={styles.cardContentLabel}>{row.label}:</span>{' '}
                  {item[row.key]}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://swapi.dev/api/planets`);
  const data = await res.json();

  const transformedData = data.results?.map((item) => ({
    image: planetImage,
    name: item.name,
    climate: item?.climate,
    population: item?.population,
  }));

  const dataDescription = [
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'climate',
      label: 'Climate',
    },
    {
      key: 'population',
      label: 'Population',
    },
  ];

  return { props: { data: transformedData, dataDescription } };
}

export default Planets;
