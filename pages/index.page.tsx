import Head from "next/head";
import Link from "next/link";
import { useQuery } from "@apollo/client";
// import { gql } from "../gql";

import styles from "../styles/Home.module.css";
import { ProfileCard } from "../components/profile-card";

// const HOME_PAGE = gql(`
//   query HomePage {
//     viewer {
//       ...ProfileCard_User
//     }
//   }
// `);
// const HOME_PAGE = gql(`
//   query HomePage {
//     viewer {
//       ...ProfileCard_User @arguments(id: "a123")
//     }
//   }
// `);

export default function Home() {
  // const { data, loading, error } = useQuery(HOME_PAGE, {
  //   // variables: { id: "123" },
  //   fetchPolicy: "network-only",
  // });

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/test">Test page</Link>
        </h1>
        {/* {data.viewer && <ProfileCard {...data.viewer} />} */}
      </main>
    </div>
  );
}
