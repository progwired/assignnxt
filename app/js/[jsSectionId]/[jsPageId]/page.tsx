import React from "react";
import type { Metadata } from "next";
import sidenavlist_js from "@/app/data/sidenavlist_js";

export type ParamProps = {
  params: { jsSectionId: string; jsPageId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateMetadata = async ({
  params,
}: ParamProps): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      return resolve(params.jsPageId);
    }, 100);
  });
  return {
    title: `JavaScript-${title}`,
  };
};

function JsPage({ params, searchParams }: ParamProps) {
  // filtering data
  const section = sidenavlist_js.filter(
    (each) => each.label === "introduction"
  );

  const filteredData = section[0].data?.filter(
    (each) => each.label === params.jsPageId
  );

  const data = filteredData && filteredData[0].data;
  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
    </div>
  );
}

export default JsPage;
