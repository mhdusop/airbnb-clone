/* eslint-disable react/prop-types */
const TabPanel = ({ id, activeTab, tabId, content }) => {
  return (
    <div
      className={`py-3 rounded-lg ${activeTab === tabId ? "block" : "hidden"}`}
      id={id}
      role="tabpanel"
      aria-labelledby={`${tabId}-tab`}
    >
      <p className="text-sm text-gray-500 dark:text-gray-400">{content}</p>
    </div>
  );
};

export default TabPanel;
