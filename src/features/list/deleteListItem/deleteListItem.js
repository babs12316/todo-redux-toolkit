import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tasklist, deleteTasks } from "../listSlice";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import "./deleteListItem.css";
const DeleteListItem = ({ task }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(tasklist);
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    console.log("task is" + task.id);
    let index = tasks.indexOf(task);
    console.log(`index is  ${index}`);
    dispatch(deleteTasks(index));
  };
  const handleClick = () => {
    setOpen(true);

    console.log(`open is ${open}`);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <DeleteIcon onClick={handleClick} id="deleteTask" />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to delete this item?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This item will be permenately deleted.You will not be able to see
            this item again!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteListItem;
