"use client";
import React, { useState } from "react";
import { Button, TextField } from "@radix-ui/themes";
import { MdEditor } from "md-editor-rt";
import "md-editor-rt/lib/style.css";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";

export interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const [issueDescription, setIssueDescription] = useState("");
  const { register, control, handleSubmit } = useForm<IssueForm>();

  return (
    <form
      className="space-y-3"
      onSubmit={handleSubmit(async (content) => {
        const data = {
          title: content.title,
          description: issueDescription,
        };
        try {
          await axios.post("/api/issues", data);
          router.push("/issues");
        } catch (error) {
          NextResponse.json({ error }, { status: 500 });
        }
      })}
    >
      <TextField.Root>
        <TextField.Input placeholder="Title" {...register("title")} />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <MdEditor
            modelValue={issueDescription}
            onChange={setIssueDescription}
            language="en-US"
            placeholder="Description"
          />
        )}
      />

      <Button>Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
