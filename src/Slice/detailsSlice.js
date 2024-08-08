import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
//actions
export const createUser = createAsyncThunk(
    "createUser",
    async (data, { rejectWithValue }) => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      try {
        const result = await response.json();
        return result;
      } catch (err) {
        return rejectWithValue(err.message);
      }
    }
  );

 //readaction
 export const showdetails = createAsyncThunk(
    "showdetails",
    async (args, { rejectWithValue }) => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const result = await response.json();
        console.log('API response:', result);
        return result;
      } catch (err) {
        return rejectWithValue(err.message);
      }
    }
  );


  export const fetchDetailById = createAsyncThunk(
    "details/fetchDetailById",
    async (id, { rejectWithValue }) => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const result = await response.json();
        console.log('API response:', result);
        return result;
      } catch (err) {
        console.log('API error:', err.message);
        return rejectWithValue(err.message);
      }
    }
  );
    
 

export const details = createSlice({
    name: "details",
    initialState: {
      Items: [],
      item:null,
      loading: false,
      error: null,
    },
    extraReducers: (builder) => {
        builder
       
          .addCase(createUser.fulfilled, (state, action) => {
            state.Items .push(action.payload);
            state.loading = false;
          })
         
          .addCase(showdetails.pending, (state) => {
            state.loading = true;
          })
          .addCase(showdetails.fulfilled, (state, action) => {
            state.loading = false;
            state.Items = action.payload; // Note the change to lowercase "items"
          })
          .addCase(showdetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(fetchDetailById.fulfilled, (state, action) => {
        
            state.item = action.payload;
          })
      }
    });


    export default details.reducer;