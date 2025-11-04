import React, { useState } from "react";

function PostCard(props) {
  const { userId, id, title, body, ...rest} = props;
  const [clicked, setClicked] = useState(false);
  console.log(Object.entries(rest));
  return (
    
    <div className="w-auto h-auto bg-white p-4 m-5 rounded-lg shadow hover:shadow-md hover:border-2 hover:bg-red-100 transition-shadow gap-2">
      <h1 className="text-gray-600">
        <span className="font-bold">{title}</span> 
      </h1>
      <p className="text-gray-600">
        <span className="font-medium">{body}</span> 
      </p>
      <button
        className={`${clicked ? "bg-special-red-2" : "bg-gray-01"} text-white rounded-md w-full m-auto p-2 mt-4`}
        onClick={() => setClicked(true)}>
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default PostCard;