import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IMockJobs, IMockLocation } from "../../Interfaces";
import { configureJobsStore } from "../../utils";

export const fetchCleanings = createAsyncThunk(
  "cleanings/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data: jobs } = await axios.get<IMockJobs[]>(
        "http://localhost:3000/jobs"
      );
      const { data: locations } = await axios.get<IMockLocation[]>(
        "http://localhost:3000/jobsByLocation"
      );

      return configureJobsStore(jobs, locations);
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
