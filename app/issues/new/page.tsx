"use client";
import React, { useState } from "react";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import { MdEditor } from "md-editor-rt";
import "md-editor-rt/lib/style.css";
// import SimpleMDE from "react-simplemde-editor";
// import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  const [issue, setIssue] = useState("");
  return (
    <div className="space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      {/* <SimpleMDE placeholder="Description" /> */}
      {/* <TextArea placeholder="Description"></TextArea> */}
      <MdEditor
        modelValue={issue}
        onChange={setIssue}
        language="en-US"
        placeholder="Description"
      ></MdEditor>
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
