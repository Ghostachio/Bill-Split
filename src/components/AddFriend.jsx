/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";

const AddFriend = ({ onAddFriendToList }) => {
  const [name, setName] = useState();
  const [image, setImage] = useState(`https://robohash.org/${Math.random()}`);

  return (
    <div className="flex flex-col w-full h-full items-center pt-3 bg-slate-800 rounded-lg pb-2">
      <h1 className="text-2xl pb-2 font-bold text-slate-200">Add New Friend</h1>
      <form className="h-30 w-full flex flex-col justify-center items-center">
        <label htmlFor="name" className="text-slate-100 font-semibold">
          Name
        </label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label htmlFor="img" className="text-slate-100 font-semibold">
          Image
        </label>
        <input
          type="text"
          id="img"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
      </form>
      <Button onClick={() => onAddFriendToList(name, image)}>
        Add new Friend
      </Button>
    </div>
  );
};

export default AddFriend;
