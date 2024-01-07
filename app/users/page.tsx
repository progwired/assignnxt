import React from "react";
import prisma from "../../lib/prisma";

const UsersPage = async () => {
  const users = await prisma.user.findMany();
  return (
    <div>
      <h1 className="text-2xl border-b pb-1 mb-2">Users page</h1>
      <ul>
        {users.map((u) => (
          <li key={u.name} className="flex">
            <strong>{u.name} - </strong>
            <span>{u.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
