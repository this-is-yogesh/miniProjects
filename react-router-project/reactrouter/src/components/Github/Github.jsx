import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();
  console.log(data, "data");
  return (
    <div className="bg-slate-900">
      <h1 className="text-center text-xl text-white">
        {" "}
        Github Bio:{data.bio}{" "}
      </h1>
      <img
        className="flex items-center bg-slate-500 mb-8 p-4"
        width={300}
        height={300}
        src={data.avatar_url}
        alt="Picture"
      />
    </div>
  );
}

export const githubuserinfo = async () => {
  let res = await fetch(`https://api.github.com/users/this-is-yogesh`);
  return await res.json();
};
