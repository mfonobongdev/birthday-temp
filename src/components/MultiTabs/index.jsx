import "./style.scss";
const MultiTabs = ({handleActive, activeTabArr, activeTab}) => {
  return (
    <div className="multiTab">
      {activeTabArr.map(tab => (
        <button
          key={tab}
          onClick={() => handleActive(tab)}
          className={`btn noBg ${tab === activeTab ? "active" : ""}`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default MultiTabs;
