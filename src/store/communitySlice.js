import { createSlice } from '@reduxjs/toolkit';

export const communitySlice = createSlice({
  name: 'community',
  initialState: {
    communities: [],
  },
  reducers: {
    setCommunities: (state, action) => {
      state.communities = action.payload;
    },
  },
});

export const { setCommunities } = communitySlice.actions;
export default communitySlice.reducer;
