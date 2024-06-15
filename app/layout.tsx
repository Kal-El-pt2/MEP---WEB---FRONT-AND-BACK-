// src/pages/_app.js or src/layout/RootLayout.js
import React, { ReactNode } from 'react';
import { StoreProvider } from './StoreProvider';
import Head from 'next/head';
import UsernameCard from './components/UsernameCard';
import StepCounter from './components/StepCounter';
import CalorieCounter from './components/CalorieCounter';
import Watertaken from './components/Watertaken';
import Report from './components/Report';
import styles from './styles/Layout.module.css';

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <Head>
        <title>Dashboard Overview</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Lufga:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <html>
        <body>
          <div className={styles.container}>
            <main className={styles.main}>
              <div className={styles.dashstart}>
                <header className={styles.header}>
                  <h1 className={styles.headerTitle}>Dashboard Overview</h1>
                </header>
                <section className={styles.dashboard}>
                  <UsernameCard
                    name="Manan Jain"
                    message="Have a nice day and don’t forget to take care of your health!"
                  />
                  <Report weight="87" general="78" />
                  <StepCounter name="Steps Taken" steps="202" />
                  <CalorieCounter name="Calories Burned" calories="408" />
                  <Watertaken name="Water Taken" water="8" />
                </section>
              </div>
            </main>
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
