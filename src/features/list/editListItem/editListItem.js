import React from "react";
import EditableLabel from "react-inline-editing";
import { useDispatch, useSelector } from "react-redux";
import { tasklist, editTasks } from "../listSlice";
import "./editListItem.css";

const EditListItem = ({ task }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(tasklist);
  const handleFocusOut = (text) => {
    let index = tasks.indexOf(task);
    dispatch(editTasks({ id: index, updatedTask: text }));
  };

  return (
    <>
      <EditableLabel
        text={task.name}
        labelClassName="taskLabel"
        inputWidth="200px"
        inputHeight="25px"
        onFocusOut={handleFocusOut}
      />
    </>
  );
};

export default EditListItem;
