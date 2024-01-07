import React from "react";
import prisma from "../../lib/prisma";

const UsersPage = async () => {
  const users = await prisma.user.findMany();
  return (
    <div>
      <h1 className="text-1xl">Users page</h1>
      <ul>
        {users.map((u) => (
          <li key={u.name}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
