import React from "react";
import { ParamProps } from "./[jsPageId]/page";

function JsIntroPage({ params }: ParamProps) {
  return <div>Hello JavaScript {params.jsSectionId}</div>;
}

export default JsIntroPage;
