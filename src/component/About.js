import React, { useEffect } from "react";
import { observer } from "mobx-react";
import authStore from "../store/AuthStore";

const About = observer(() => {
  useEffect(() => {
    authStore.fetchData();
  }, []);
  const dataArray = JSON.parse(JSON.stringify(authStore.apidata));
  console.log(123456, dataArray);

  return (
    <>
      <h4>About Component</h4>
      {authStore.apidata.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </>
  );
});

export default About;
