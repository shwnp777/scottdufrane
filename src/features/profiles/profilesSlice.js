import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PROFILE_URL = "http://127.0.0.1:8000/api/profiles/";
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  profiles: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchProfiles = createAsyncThunk(
  "users/fetchProfiles",
  async () => {
    const response = await axios.get(PROFILE_URL, {
      headers: {
        Authorization: "Bearer " + user.access,
      },
    });
    return response.data;
  }
);
export const fetchSingleProfile = createAsyncThunk(
  "users/fetchSingleProfile",
  async ({ id }) => {
    const response = await axios.get(`${PROFILE_URL}${id}/`, {
      headers: {
        Authorization: "Bearer " + user.access,
      },
    });
    return response.data;
  }
);

const profilesSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProfiles.pending, (state, action) => {
        state.status = "loading";
        state.emails = [];
      })
      .addCase(fetchProfiles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profiles = action.payload;
      })
      .addCase(fetchProfiles.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(fetchSingleProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSingleProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { id } = action.payload;
        console.log(id);
      })
      .addCase(fetchSingleProfile.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default profilesSlice.reducer;
