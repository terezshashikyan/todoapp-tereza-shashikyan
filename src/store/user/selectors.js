import { createSelector } from "reselect";



const userSelector = (state) => state.user;

const todosListSelector = createSelector(
  [userSelector],
  (user) => user.todosList,
);



export const userSel = {
 todosListSelector
};
