import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    inputValue: "",
    tasks: [],
    isEditing: false,
    CompleteTask:[]
  },
  reducers: {
    handleChange: function(state, change) {
      state.inputValue = change.payload;
    },
    handleSubmit: function(state) {
      if (state.isEditing === false) {
        state.tasks = [...state.tasks, state.inputValue];
        // state.inputValue = "";
      } else {
        state.tasks[state.isEditing] =state.inputValue
        state.inputValue = "";
      
      }
    },
    handleDelete: function(state, payload) {
      state.tasks = state.tasks.filter((task, index) => payload.payload !== index);
    },
    handleEdit: function(state, payload) {
      state.inputValue = state.tasks[payload.payload];
      state.isEditing = payload.payload;
    },
    handleComplete:function(state,payload){
      state.CompleteTask = [...state.CompleteTask,payload.payload]
    },
 
  }
});

export const {handleChange, handleSubmit, handleDelete, handleEdit,handleComplete} = todoSlice.actions;

export default todoSlice.reducer;



