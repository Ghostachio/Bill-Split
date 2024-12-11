/* eslint-disable react/prop-types */

const Friend = ({ name, image, balance, select, data }) => {
  return (
    <li className="w-full text-center bg-slate-800 flex justify-between items-center pl-2 pr-2 pt-2 pb-2 rounded-lg">
      <img
        src={image}
        alt="profile"
        height={50}
        width={50}
        className=" rounded-full "
      />
      <div>
        <h3 className="text-slate-400 font-semibold text-xl">{name}</h3>
        <p className="text-slate-400">
          You owe {name} {balance}.00 $
        </p>
      </div>
      <button
        className="bg-slate-900 p-2 rounded text-lime-400 font-bold"
        onClick={() => select(data)}
      >
        Select
      </button>
    </li>
  );
};

export default Friend;
