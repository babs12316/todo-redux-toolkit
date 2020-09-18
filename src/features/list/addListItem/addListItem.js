import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { v4 as uuidv4 } from "uuid";
import { addTasks } from "../listSlice";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import "./addListItem.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const AddListItem = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState(null);
  const [TaskSubmitted, setTaskSubmitted] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskSubmitted(true);
    if (title) {
      let item = { id: uuidv4(), name: title };
      let val = dispatch(addTasks(item));
      if (val) {
        setMsg("Task added Sucessfully!");
        setOpen(true);
      }

      setTaskSubmitted(false);
    }
    setTitle("");
  };

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
        <TextField
          id="outlined-basic"
          label="Enter task"
          variant="outlined"
          required
          value={title}
          error={TaskSubmitted && title === ""}
          helperText="Task input field cant't be left blank!"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <Button type="submit" id="addButton" variant="contained">
          Add
        </Button>
      </form>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {msg}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AddListItem;
