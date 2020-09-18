import React from "react";
import ListItems from "./listItems/listItems";
import AddListItem from './addListItem/addListItem';
export function List() {
  return (
    <>
    <AddListItem></AddListItem>
    <ListItems></ListItems>
    </>
  );
}
