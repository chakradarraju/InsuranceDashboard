import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const claims = [
  { id: 1, title: "Claim 1", description: "Description for claim 1" },
  { id: 2, title: "Claim 2", description: "Description for claim 2" },
  { id: 3, title: "Claim 3", description: "Description for claim 3" },
  // Add more claims as needed
];

const Header: React.FC = () => (
  <div className={styles.header}>
    <div className={styles.logo}>DashStack</div>
    <input type="text" placeholder="Search..." className={styles.search} />
    <div className={styles.userMenu}>User Profile</div>
  </div>
);

const Sidebar: React.FC = () => (
  <div className={styles.sidebar}>
    <div className={styles.sidebarSection}>
      <div className={styles.selected}>Claims</div>
      <div>Customers</div>
      <div>Policies</div>
      <div>Providers</div>
      <div>Appraisals</div>
    </div>
    <div className={styles.separator}>Tools</div>
    <div className={styles.sidebarSection}>
      <div>Dashboard</div>
      <div>Fraud Analysis</div>
      <div>Leakages</div>
      <div>Market Evaluation</div>
      <div>Graph Analysis</div>
      <div>Document Verification</div>
    </div>
    <div className={styles.separator}>Workflows</div>
    <div className={styles.sidebarSection}>
      <div>FNOL</div>
      <div>Underwriting</div>
    </div>
  </div>
);

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DashStack</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className={styles.content}>
        <Sidebar />
        <main className={styles.main}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "10px",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    border: "1px solid #eaeaea",
                    padding: "10px",
                    textAlign: "left",
                  }}
                >
                  Claim
                </th>
                <th
                  style={{
                    border: "1px solid #eaeaea",
                    padding: "10px",
                    textAlign: "left",
                  }}
                >
                  Assignee
                </th>
                <th
                  style={{
                    border: "1px solid #eaeaea",
                    padding: "10px",
                    textAlign: "left",
                  }}
                >
                  Age of claim
                </th>
                <th
                  style={{
                    border: "1px solid #eaeaea",
                    padding: "10px",
                    textAlign: "left",
                  }}
                >
                  Comments
                </th>
              </tr>
            </thead>
            <tbody>
              {claims.map((claim) => (
                <tr
                  key={claim.id}
                  className={styles.card}
                  onClick={() => (window.location.href = `/claims/${claim.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <td style={{ border: "1px solid #eaeaea", padding: "10px" }}>
                    {claim.title}
                  </td>
                  <td style={{ border: "1px solid #eaeaea", padding: "10px" }}>
                    Assignee Name
                  </td>
                  <td style={{ border: "1px solid #eaeaea", padding: "10px" }}>
                    Age Value
                  </td>
                  <td style={{ border: "1px solid #eaeaea", padding: "10px" }}>
                    Sample comments
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default Home;
