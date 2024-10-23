import React from "react";
import styles from "../styles/Home.module.css";

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

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={styles.container}>
    <Header />
    <div className={styles.content}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
    </div>
  </div>
);

export default Layout;
