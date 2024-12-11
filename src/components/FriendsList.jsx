/* eslint-disable react/prop-types */

import Friend from "./Friend";
import AddFriend from "./AddFriend";
import Button from "./Button";

const FriendsList = ({
  data,
  handleAddFriend,
  isOpen,
  onAddFriendToList,
  onHandleSelect,
}) => {
  return (
    <div className="grid grid-cols-1 grid-rows-8 p-4">
      <ul className=" row-span-4 flex flex-col justify-center items-center gap-1 p-3">
        {data.map((el, i) => (
          <Friend
            key={i}
            name={el.name}
            image={el.image}
            balance={el.balance}
            select={onHandleSelect}
            data={el}
          />
        ))}
      </ul>
      <Button onClick={handleAddFriend}> Add Friend Button</Button>
      <div className="row-span-3 w-full content-center">
        {isOpen ? <AddFriend onAddFriendToList={onAddFriendToList} /> : null}
      </div>
    </div>
  );
};

export default FriendsList;
