import React from "react";
import { ParamProps } from "./[jsPageId]/page";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: ParamProps): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      return resolve(params.jsSectionId);
    }, 100);
  });
  return {
    title: `JavaScript-${title}`,
  };
};

function JsIntroPage({ params }: ParamProps) {
  return <div>Hello JavaScript {params.jsSectionId}</div>;
}

export default JsIntroPage;
