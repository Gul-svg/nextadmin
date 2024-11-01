import React from "react";
import Sidebar from "../ui/dashboard/sidebar/Sidebar";
import Navbar from "../ui/dashboard/navbar/Navbar";
import styles from "../ui//dashboard/dashboard.module.css";
import Footer from "../ui/dashboard/footer/footer";
// todo: 2:53:20
// https://www.youtube.com/watch?v=cBg6xA5C60s
const layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default layout;
