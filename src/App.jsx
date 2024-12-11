import FriendsList from "./components/FriendsList";
import BillSplit from "./components/BillSplit";
import { useState } from "react";

function App() {
  const [newOpen, setNewOpen] = useState(false);
  const [friends, setFriends] = useState([]);
  const [isSelected, setIsSelected] = useState(null);

  const handleAddFriend = () => {
    setNewOpen(!newOpen);
  };

  const addFriendToList = (name, image) => {
    event.preventDefault();

    const newFriend = { id: Date.now(), name, image, balance: 0 };
    // eslint-disable-next-line no-unused-vars
    setFriends((cur) => [...friends, newFriend]);
    setNewOpen(false);
  };

  const handleSelect = (friend) => {
    setIsSelected(friend);
  };

  const calculate = (id, whoPaid, yours, theirs, bill) => {
    setFriends(
      friends.map((friend) =>
        id === friend.id || whoPaid === "user"
          ? { ...friend, balance: bill - theirs }
          : { ...friend }
      )
    );
    setIsSelected(null);
  };

  return (
    <div className="bg-slate-900 h-screen w-screen flex justify-center items-center">
      <main className="bg-slate-200 w-3/6 rounded-3xl grid grid-cols-2 p-1 h-fit">
        <FriendsList
          data={friends}
          handleAddFriend={handleAddFriend}
          isOpen={newOpen}
          onAddFriendToList={addFriendToList}
          onHandleSelect={handleSelect}
        />
        {isSelected ? (
          <BillSplit selectedFriend={isSelected} calculate={calculate} />
        ) : null}
      </main>
    </div>
  );
}

export default App;
