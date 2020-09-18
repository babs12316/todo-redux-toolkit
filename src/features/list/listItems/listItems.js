import React from "react";
import DeleteListItem from "../deleteListItem/deleteListItem";
import { useSelector } from "react-redux";
import { tasklist } from "../listSlice";
import EditListItem from "../editListItem/editListItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Divider from '@material-ui/core/Divider';

const ListItems = () => {
  const tasks = useSelector(tasklist);
  return (
    <>
      {tasks &&
        tasks.map((task) => (
          <div key={task.id} id={task.id}>
            <List>
              <ListItem>
                <ListItemText>
                  <EditListItem task={task}></EditListItem>{" "}
                </ListItemText>
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteListItem task={task}></DeleteListItem>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </List>
          </div>
        ))}
    </>
  );
};

export default ListItems;
