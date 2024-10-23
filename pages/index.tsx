import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const claims = [
  { id: 1, title: "Claim 1", description: "Description for claim 1" },
  { id: 2, title: "Claim 2", description: "Description for claim 2" },
  { id: 3, title: "Claim 3", description: "Description for claim 3" },
  // Add more claims as needed
];

const Home: NextPage = () => {
  return (
    <Layout>
      <div>
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
      </div>
    </Layout>
  );
};

export default Home;
