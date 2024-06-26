import { useState } from "react";
import Tab from "./Tab";
import TabPanel from "./TabPanel";
import { populerLocations } from "../../data/tabs/populerLocation.js";
import { seniBudayaLocations } from "../../data/tabs/seniBudayaLocation.js";
import { alamTerbukaLocations } from "../../data/tabs/alamTerbukaLocation.js";
import { pegununganLocations } from "../../data/tabs/pegununganLocation.js";
import { pantaiLocations } from "../../data/tabs/pantaiLocation.js";

const TabContainer = () => {
  const [activeTab, setActiveTab] = useState("populer");
  const [showMore, setShowMore] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
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
            id="populer-tab"
            target="populer"
            label="Populer"
            activeTab={activeTab}
            onClick={() => handleTabClick("populer")}
          />
          <Tab
            id="seni-tab"
            target="seni"
            label="Seni & Budaya"
            activeTab={activeTab}
            onClick={() => handleTabClick("seni")}
          />
          <Tab
            id="alam-tab"
            target="alam"
            label="Alam Terbuka"
            activeTab={activeTab}
            onClick={() => handleTabClick("alam")}
          />
          <Tab
            id="pengunungan-tab"
            target="pengunungan"
            label="Pegunungan"
            activeTab={activeTab}
            onClick={() => handleTabClick("pengunungan")}
          />
          <Tab
            id="pantai-tab"
            target="pantai"
            label="Pantai"
            activeTab={activeTab}
            onClick={() => handleTabClick("pantai")}
          />
        </ul>
      </div>
      <div id="default-tab-content">
        <TabPanel
          id="populer"
          activeTab={activeTab}
          tabId="populer"
          content={
            <>
              <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-2 gap-4">
                {populerLocations
                  .slice(0, showMore ? populerLocations.length : 18)
                  .map((location, index) => (
                    <div key={index}>
                      <div className="font-semibold text-gray-800">
                        {location.name}
                      </div>
                      <div className="text-gray-400 font-sm truncate overflow-hidden whitespace-nowrap text-ellipsis">
                        {location.type}
                      </div>
                    </div>
                  ))}
              </div>
              <button className="mt-4 text-blue-500" onClick={toggleShowMore}>
                {showMore
                  ? "Tampilkan lebih sedikit"
                  : "Tampilkan lebih banyak"}
              </button>
            </>
          }
        />
        <TabPanel
          id="seni"
          activeTab={activeTab}
          tabId="seni"
          content={
            <>
              <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-2 gap-4">
                {seniBudayaLocations
                  .slice(0, showMore ? seniBudayaLocations.length : 18)
                  .map((location, index) => (
                    <div key={index}>
                      <div className="font-semibold text-gray-800">
                        {location.name}
                      </div>
                      <div className="text-gray-400 font-sm truncate overflow-hidden whitespace-nowrap text-ellipsis">
                        {location.type}
                      </div>
                    </div>
                  ))}
              </div>
              <button className="mt-4 text-blue-500" onClick={toggleShowMore}>
                {showMore
                  ? "Tampilkan lebih sedikit"
                  : "Tampilkan lebih banyak"}
              </button>
            </>
          }
        />
        <TabPanel
          id="alam"
          activeTab={activeTab}
          tabId="alam"
          content={
            <>
              <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-2 gap-4">
                {alamTerbukaLocations
                  .slice(0, showMore ? alamTerbukaLocations.length : 18)
                  .map((location, index) => (
                    <div key={index}>
                      <div className="font-semibold text-gray-800">
                        {location.name}
                      </div>
                      <div className="text-gray-400 font-sm truncate overflow-hidden whitespace-nowrap text-ellipsis">
                        {location.type}
                      </div>
                    </div>
                  ))}
              </div>
              <button className="mt-4 text-blue-500" onClick={toggleShowMore}>
                {showMore
                  ? "Tampilkan lebih sedikit"
                  : "Tampilkan lebih banyak"}
              </button>
            </>
          }
        />
        <TabPanel
          id="pengunungan"
          activeTab={activeTab}
          tabId="pengunungan"
          content={
            <>
              <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-2 gap-4">
                {pegununganLocations
                  .slice(0, showMore ? pegununganLocations.length : 18)
                  .map((location, index) => (
                    <div key={index}>
                      <div className="font-semibold text-gray-800">
                        {location.name}
                      </div>
                      <div className="text-gray-400 font-sm truncate overflow-hidden whitespace-nowrap text-ellipsis">
                        {location.type}
                      </div>
                    </div>
                  ))}
              </div>
              <button className="mt-4 text-blue-500" onClick={toggleShowMore}>
                {showMore
                  ? "Tampilkan lebih sedikit"
                  : "Tampilkan lebih banyak"}
              </button>
            </>
          }
        />
        <TabPanel
          id="pantai"
          activeTab={activeTab}
          tabId="pantai"
          content={
            <>
              <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-2 gap-4">
                {pantaiLocations
                  .slice(0, showMore ? pantaiLocations.length : 18)
                  .map((location, index) => (
                    <div key={index}>
                      <div className="font-semibold text-gray-800">
                        {location.name}
                      </div>
                      <div className="text-gray-400 font-sm truncate overflow-hidden whitespace-nowrap text-ellipsis">
                        {location.type}
                      </div>
                    </div>
                  ))}
              </div>
              <button className="mt-4 text-blue-500" onClick={toggleShowMore}>
                {showMore
                  ? "Tampilkan lebih sedikit"
                  : "Tampilkan lebih banyak"}
              </button>
            </>
          }
        />
      </div>
    </>
  );
};

export default TabContainer;
