import { Button } from "./button";
import { Items } from "./types/list";
import { TiTick, TiDelete } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import "../App.css";

type ListItems = {
  items: Items[];
  setItems: React.Dispatch<React.SetStateAction<Items[]>>;
};

export const ListItems = ({ items, setItems }: ListItems) => {
  const handleDelete = (id: string) => {
    setItems((val) => val.filter((val) => val.id !== id));
  };
  const tick = (id: string) => {
    setItems((val) =>
      val.map((item) => (item.id === id ? { ...item, tick: !item.tick } : item))
    );
  };

  return items.map((data, ind) => (
    <div
      key={data.id}
      className="items mt-2 flex items-center justify-between bg-slate-100 p-1 rounded-lg border border-gray-200 shadow"
    >
      <span
        style={{ fontFamily: "-moz-initial" }}
        className={`text-gray-700 ${
          data.tick ? "line-through text-red-500" : ""
        } text-lg `}
      >
        {ind + 1} . {data.data}
      </span>
      <div className="flex gap-2">
        <Button
          type={"button"}
          title={<TiDelete />}
          className="rounded-md bg-[#dc2626] hover:bg-red-700 text-white px-3 py-3"
          onClick={() => handleDelete(data.id)}
        />
        <Button
          type={"button"}
          title={!data.tick ? <TiTick /> : <RxCross1 />}
          className={`rounded-md bg-black px-3 py-2`}
          onClick={() => tick(data.id)}
        />
      </div>
    </div>
  ));
};
