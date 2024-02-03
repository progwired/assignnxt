import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import sidenavlist_js from "@/app/data/sidenavlist_js";

type Props = {
  params: { jsPageId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      return resolve(params.jsPageId);
    }, 100);
  });
  return {
    title: `JavaScript-${title}`,
  };
};

function JsPage({ params, searchParams }: Props) {
  // filtering data
  const filteredData = sidenavlist_js.filter(
    (each) => each.label === params.jsPageId
  );
  const data = filteredData[0].data();

  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
    </div>
  );
}

export default JsPage;
