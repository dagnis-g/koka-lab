import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import styles from '../style/scss/pages/priecigie.module.css';

const imagesInfo = [
  {
    image: '/images/priecigie/1.jpg',
  },
  {
    image: '/images/priecigie/2.jpg',
  },
  {
    image: '/images/priecigie/3.jpg',
  },
  {
    image: '/images/priecigie/4.jpg',
  },
  {
    image: '/images/priecigie/5.jpg',
  },
  {
    image: '/images/priecigie/6.jpg',
  },
  {
    image: '/images/priecigie/7.jpg',
  },
  {
    image: '/images/priecigie/8.jpg',
  },
  {
    image: '/images/priecigie/9.jpg',
  },
  {
    image: '/images/priecigie/10.jpg',
  },
  {
    image: '/images/priecigie/11.jpg',
  },
  {
    image: '/images/priecigie/12.jpg',
  },
  {
    image: '/images/priecigie/13.jpg',
  },
  {
    image: '/images/priecigie/14.jpg',
  },
  {
    image: '/images/priecigie/15.jpg',
  },
  {
    image: '/images/priecigie/16.jpg',
  },

  {
    image: '/images/priecigie/17.jpg',
  },

  {
    image: '/images/priecigie/18.jpg',
  },

  {
    image: '/images/priecigie/19.jpg',
  },

  {
    image: '/images/priecigie/20.jpg',
  },

  {
    image: '/images/priecigie/21.jpg',
  },

  {
    image: '/images/priecigie/22.jpg',
  },

  {
    image: '/images/priecigie/23.jpg',
  },

  {
    image: '/images/priecigie/24.jpg',
  },
  {
    image: '/images/priecigie/25.jpeg',
  },
  {
    image: '/images/priecigie/26.jpg',
  },
];

const Priecigie = () => (
  <Root>
    <Head>
      <title>Priecīgie Klienti</title>
    </Head>

    <div className={styles.container}>
      <h3 className={styles.title}>
        Daži attēli no mūsu pozitīvajiem klientiem, spēļu biedriem un vienkārši dabiskākajiem
        modeļiem - bērniem
      </h3>
      <div className={styles.bildes}>
        {imagesInfo.map((item, i) => (
          <div key={i}>
            <img src={item.image} className={styles.bilde}></img>
          </div>
        ))}
      </div>
    </div>

    <Footer />
  </Root>
);

export default Priecigie;
