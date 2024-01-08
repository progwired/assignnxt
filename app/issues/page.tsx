import React from "react";
import prisma from "../../lib/prisma";
import { Button } from "@radix-ui/themes";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <div>
      <h1>Issues Page: </h1>
      <div className="flex flex-col mb-4">
        {issues.map((each) => (
          <div key={each.id} className="border-b py-4">
            <h2 className="text-2xl">{each.title}</h2>
            <p>{each.description}</p>
          </div>
        ))}
      </div>
      <Button>Add new issue</Button>
    </div>
  );
};

export default IssuesPage;
