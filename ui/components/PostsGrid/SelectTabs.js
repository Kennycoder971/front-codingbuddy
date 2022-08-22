import styles from "./PostsGrid.module.scss";

const SelectTabs = ({ tabs, func, selected }) => {
  function tabElements(tabArr) {
    return tabArr.map((tabName, index) => {
      return (
        <li
          key={tabName}
          onClick={() => func(index)}
          className={selected === index ? styles.active : ""}
        >
          {tabName}
        </li>
      );
    });
  }

  return <ul className={styles.tabs}> {tabElements(tabs)}</ul>;
};

export default SelectTabs;
