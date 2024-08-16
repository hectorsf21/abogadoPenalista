import styles from '../styles/Home.module.css';
import MainNavigation from '../components/MainNavigation';
import Header from '../components/Header';
import Acerca from '../components/Acerca';
import Servicios from '../components/Servicios';
import Contactenos from '../components/Contactenos';
import Footer from '../components/Footer';
import Metaheader from '../components/MetaHeader';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Metaheader title="Inicio | Leonardo Gil Abogado Penalista"></Metaheader>
      <Layout id="home">
        <header className={styles.homeHeader}>
          <MainNavigation />
          <Header />
        </header>

        <main className={styles.main}>
          <Acerca />
          <Servicios />
          <Contactenos />
        </main>

        <Footer />
      </Layout>
    </>
  );
}
