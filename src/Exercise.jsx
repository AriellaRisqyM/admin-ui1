import React from "react";
import PostCard from "./PostCard";
import { users } from "./postsData.jsx";


function Exercise() {
  return (
    <>
      <div className=" bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-red-600">
          Post Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-5  justify-items-center">
          {users.map((user) => (
            <PostCard key={user.id} {...user} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Exercise;