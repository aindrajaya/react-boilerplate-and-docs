import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEditListId, editList, deleteList } from "../actions";

const Item = ({ list }) => {
  const editId = useSelector((state) => state.editId);
  const dispatch = useDispatch();

  const EditBtn = () => {
    const editId = useSelector((state) => state.editId);
    const dispatch = useDispatch();
    return list.id !== editId ? (
      <button onClick={() => dispatch(getEditListId(list.id))}>edit</button>
    ) : (
      <button
        onClick={() =>
          dispatch(
            editList({
              name: "QQ",
              price: 123,
              notes: "qq QQ qq",
              id: 2
            })
          )
        }
      >
        confirm
      </button>
    );
  };

  return (
    <div className={`item ${list.id === editId && "edit"}`}>
      <fieldset disabled={list.id !== editId}>
        <input className="name" defaultValue={list.name} />
        <br />
        <input className="price" defaultValue={list.price} />
        <br />
        <input className="notes" defaultValue={list.notes} />
        <br />
      </fieldset>
      <EditBtn />
      <button onClick={() => dispatch(deleteList(list.id))}>delete</button>
    </div>
  );
};

export default Item;
