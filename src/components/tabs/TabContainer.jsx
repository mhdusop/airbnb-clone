import { useState } from "react";
import Tab from "./Tab";
import TabPanel from "./TabPanel";

const TabContainer = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="mb-4 border-b border-gray-200">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-tab"
          role="tablist"
        >
          <Tab
            id="profile-tab"
            target="profile"
            label="Profile"
            activeTab={activeTab}
            onClick={() => handleTabClick("profile")}
          />
          <Tab
            id="dashboard-tab"
            target="dashboard"
            label="Dashboard"
            activeTab={activeTab}
            onClick={() => handleTabClick("dashboard")}
          />
          <Tab
            id="settings-tab"
            target="settings"
            label="Settings"
            activeTab={activeTab}
            onClick={() => handleTabClick("settings")}
          />
          <Tab
            id="contacts-tab"
            target="contacts"
            label="Contacts"
            activeTab={activeTab}
            onClick={() => handleTabClick("contacts")}
          />
        </ul>
      </div>
      <div id="default-tab-content">
        <TabPanel
          id="profile"
          activeTab={activeTab}
          tabId="profile"
          content="This is some placeholder content for the Profile tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling."
        />
        <TabPanel
          id="dashboard"
          activeTab={activeTab}
          tabId="dashboard"
          content="This is some placeholder content for the Dashboard tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling."
        />
        <TabPanel
          id="settings"
          activeTab={activeTab}
          tabId="settings"
          content="This is some placeholder content for the Settings tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling."
        />
        <TabPanel
          id="contacts"
          activeTab={activeTab}
          tabId="contacts"
          content="This is some placeholder content for the Contacts tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling."
        />
      </div>
    </>
  );
};

export default TabContainer;
