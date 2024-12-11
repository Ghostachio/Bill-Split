/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "./Button";
import { use } from "react";

/* eslint-disable react/prop-types */
const BillSplit = ({ selectedFriend, calculate }) => {
  const [totalBill, setTotalBill] = useState(0);
  const [yourShare, setYouPaid] = useState(0);
  const [whoPaid, setWhoPaid] = useState("");

  const DerivedState = totalBill - yourShare;

  return (
    <div className="col-span-1 p-6 content-center ">
      <h1 className="pb-9 text-3xl font-semibold text-center p-4 text-slate-800">
        {selectedFriend
          ? `Spliting bill with ${selectedFriend.name}`
          : "Choose a Friend"}
      </h1>
      <form className="flex flex-col gap-4 items-center w-90">
        <div>
          <label className="pr-7">Total Bill</label>
          <input
            type="text"
            onChange={(e) => setTotalBill(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="pr-7">Your Share</label>
          <input
            type="text"
            onChange={(e) => setYouPaid(Number(e.target.value))}
            value={yourShare}
          />
        </div>
        <div>
          <label className="pr-7">
            {selectedFriend ? `${selectedFriend.name} Share` : ""}
          </label>
          <input type="text" value={DerivedState} disabled />
        </div>
        <div className="flex justify-between w-40">
          <label>Who paid</label>
          <select onChange={(e) => setWhoPaid(e.target.value)}>
            <option value="user">You</option>
            <option value="friend">{selectedFriend?.name}</option>
          </select>
        </div>
      </form>
      <div className="flex justify-center mt-4">
        <Button
          onClick={() =>
            calculate(
              selectedFriend.id,
              whoPaid,
              yourShare,
              DerivedState,
              totalBill
            )
          }
        >
          Calculate and Update Status
        </Button>
      </div>
    </div>
  );
};

export default BillSplit;
