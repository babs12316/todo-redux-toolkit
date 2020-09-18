import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: {
    tasks: [{ id: "042c5bfd-a9f4-4d16-b571-f255862b8e32", name: "goto gym" }],
  },
  reducers: {
    /*  increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },*/
    addTasks: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTasks: (state, action) => {
      console.log(`payload is ${action.payload}`);

      delete state.tasks[action.payload];
      state.tasks.filter((item) => item.id !== action.payload);
    },
    editTasks: (state, action) => {
      console.log(` Edit payload is ${action.payload.id}`);
      state.tasks[action.payload.id].name = action.payload.updatedTask;
    },
  },
});

export const {
  addTasks,
  deleteTasks,
  editTasks,
  addSucess,
} = listSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
/*export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};*/

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const tasklist = (state) => state.list.tasks;

export default listSlice.reducer;
