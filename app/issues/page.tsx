import React from "react";
import prisma from "../../lib/prisma";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <div>
      <h1>Issues Page: </h1>
      <div className="flex flex-col">
        {issues.map((each) => (
          <div key={each.id} className="border-b py-4">
            <h2 className="text-2xl">{each.title}</h2>
            <p>{each.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IssuesPage;
