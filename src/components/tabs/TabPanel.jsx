/* eslint-disable react/prop-types */
const TabPanel = ({ id, activeTab, tabId, content }) => {
  return (
    <div
      className={`p-4 rounded-lg bg-gray-50 ${
        activeTab === tabId ? "block" : "hidden"
      }`}
      id={id}
      role="tabpanel"
      aria-labelledby={`${tabId}-tab`}
    >
      <p className="text-sm text-gray-500 dark:text-gray-400">{content}</p>
    </div>
  );
};

export default TabPanel;
