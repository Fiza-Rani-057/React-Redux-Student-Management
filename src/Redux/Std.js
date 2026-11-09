import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Students: [
        { id: 1, name: "Ali", age: 20, course: "Computer Science", marks: 85 },
        { id: 2, name: "Sara", age: 19, course: "Web Development", marks: 90 },
        { id: 3, name: "Ahmed", age: 21, course: "Software Engineering", marks: 75 },
       ]
}
const StdSlice = createSlice({
    name: "students", initialState, reducers: {
        AddStudent: (state, action) => {
            state.Students.push(action.payload)
        },
        DeleteStudent: (state, action) => {
            state.Students = state.Students.filter(
                (student) => student.id !== action.payload)
        }
    }
});

export const {AddStudent,DeleteStudent} = StdSlice.actions;
export default StdSlice.reducer;