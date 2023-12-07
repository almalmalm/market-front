import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 className={styles.text}>Home page</h1>
      <Link href={'/create-item'}>Create item</Link>
    </main>
  );
}
