import { createSelector } from "@reduxjs/toolkit";
import { selectUser } from "./authSlice";

export const selectUserData = createSelector(selectUser, (user) => user);
