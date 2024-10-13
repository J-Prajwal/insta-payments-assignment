import { useState } from "react";
import styles from "./Tabs.module.css";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className={styles.container}>
      {/* Tab Header */}
      <div className={styles.tabHeader}>
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`${styles.tabButton} ${
              activeTab === tab.name ? styles.active : ""
            }`}
            onClick={() => handleTabClick(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>
        {tabs.map(
          (tab) =>
            activeTab === tab.name && (
              <div key={tab.name} className={styles.content}>
                {tab.content}
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export default Tabs;
