/* eslint-disable react/prop-types */

const Tab = ({ id, target, label, activeTab, onClick }) => {
  return (
    <li className="me-2" role="presentation">
      <button
        className={`inline-block p-4 border-b-2 rounded-t-lg ${
          activeTab === target
            ? "border-blue-500 text-blue-500"
            : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
        }`}
        id={id}
        type="button"
        role="tab"
        aria-controls={target}
        aria-selected={activeTab === target}
        onClick={onClick}
      >
        {label}
      </button>
    </li>
  );
};

export default Tab;
