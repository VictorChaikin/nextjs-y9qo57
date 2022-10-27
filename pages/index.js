import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1>React Tasks</h1>
        <p>
          For each task complete what is requested, but also try to think all
          improvements that you can think of. In both tasks try to provide nice
          styling.
        </p>
        <h3>Create a registration form</h3>
        <p>
          Prepare user friendly registration form with e-commerce like look and
          feel and all relevant handling. Call <code>createUser</code> from api
          folder. Mock that function to behave as a real API. Use the payload:{' '}
          <code>email, name</code> and <code>password</code>.
        </p>
        <p>Create vanilla React form, no external library</p>
        <h2 />
        <h3>
          Create Next.js page <code>/planets</code>{' '}
        </h3>
        <p>
          On this page retrieve data on the server from{' '}
          <code>https://swapi.dev/api/planets</code> and render list of planets
          with informations: <code>name, climate, population</code>. Create a
          search input to search for planet name.
        </p>
        <p>
          For planet card use this placeholder image:{' '}
          <code>
            https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1200px-Mercury_in_color_-_Prockter07-edit1.jpg
          </code>
        </p>
        <p>Create a pagination against the API.</p>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
