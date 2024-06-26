/* eslint-disable react/prop-types */

const Tab = ({ id, target, label, activeTab, onClick }) => {
  return (
    <li className="me-2" role="presentation">
      <button
        className={`inline-block p-3 border-b-2 rounded-t-lg ${
          activeTab === target
            ? "border-gray-800 text-gray-800"
            : "text-gray-500"
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
