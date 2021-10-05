import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addList } from "../actions";

const Add = () => {
  const { register, errors, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const postList = data => {
    const newList = {
      ...data,
      checked: false
    };
    dispatch(addList(newList));
    reset();
  };
  return (
    <form onSubmit={handleSubmit(postList)}>
      <label>
        *Name:
        <input
          name="name"
          type="text"
          placeholder="Name"
          ref={register({ required: true })}
        />
        {errors.name && "Name is required."}
      </label>

      <br />
      <label>
        *Price:
        <input
          name="price"
          type="number"
          placeholder="Price"
          ref={register({ required: true })}
        />
        {errors.price && "Price is required."}
      </label>
      <br />
      <label>
        Notes:
        <input name="notes" type="text" placeholder="Notes" ref={register} />
      </label>
      <br />
      <button type="submit">add</button>
    </form>
  );
};

export default Add;
