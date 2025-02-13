import {createSlice} from '@reduxjs/toolkit';
import {getSubreddits} from '../api/reddit';

const initialState = {
    subreddits: [],
    error: false,
    isLoading: false,
};

const subRedditSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {
        startGetSubreddits(state) {
            state.isLoading = true;
            state.error = false;
        },
        getSubredditsSuccess(state, action) {
            state.isLoading = false;
            state.subreddits = action.payload;
        },
        getSubredditsFailed(state) {
            state.isLoading = true;
            state.error = true;
        },
    },
});

export const {
    getSubredditsFailed,
    getSubredditsSuccess,
    startGetSubreddits,
} = subRedditSlice.actions;

export default subRedditSlice.reducer;

// This is a Redux Thunk that gets subreddits.
export const fetchSubreddits = () => async (dispatch) => {
    try {
      dispatch(startGetSubreddits());
      const subreddits = await getSubreddits();
      console.log('Fetched subreddits:', subreddits); // See what we got
      
      if (Array.isArray(subreddits) && subreddits.length > 0) {
        dispatch(getSubredditsSuccess(subreddits));
      } else {
        console.error('No subreddits data received');
        dispatch(getSubredditsFailed());
      }
    } catch (error) {
      console.error('Error in fetchSubreddits:', error);
      dispatch(getSubredditsFailed());
    }
  };

  export const selectSubreddits = (state) => {
    console.log('Full Redux State:', state);
    console.log('Subreddits State:', state.subreddits);
    return state.subreddits.subreddits;
  };