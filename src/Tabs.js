import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyMapPage from "./MyMap";

const MyTabs = ({ location }) => {
  const Berlin = [52.52, 13.405];
  const London = [51.505, -0.09];
  return (
    <Tabs>
      <TabList>
        {location.map((e) => {
          return <Tab key={e.id}>{e.name}</Tab>;
        })}
      </TabList>

      {location.map((e) => {
        return (
          <TabPanel key={e.id}>
            <h2>{e.name}</h2>
            <MyMapPage {...e} />
          </TabPanel>
        );
      })}

      <TabPanel>
        <h2>Explore London </h2>
        <MyMapPage pos={London} />
      </TabPanel>
    </Tabs>
  );
};

export default MyTabs;
