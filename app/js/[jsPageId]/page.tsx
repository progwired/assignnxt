"use client";
import React, { useEffect, useState } from "react";
import { JsPageProps } from "../page";
import sidenavlist_js, { SidenavDataProps } from "@/app/data/sidenavlist_js";

const DetailsPage = ({ params }: { params: JsPageProps }) => {
  //setting data into local state
  const [data, setData] = useState<SidenavDataProps>();

  //on rendering of this page
  useEffect(
    function () {
      // filtering data
      const filteredData = sidenavlist_js.filter(
        (each) => each.label === params.jsPageId
      );
      const gotData = filteredData[0].data();
      //saving data into local state
      setData(gotData);
    },
    //injecting dependency
    [params.jsPageId]
  );

  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
    </div>
  );
};

export default DetailsPage;
