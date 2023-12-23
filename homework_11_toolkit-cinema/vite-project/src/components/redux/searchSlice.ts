import {createSlice} from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'movie',
    initialState: {
        movie: [],
        inputValue:'',
        movieArr:[],
        moviePage:[],
        favorite:[],
        favoriteArr:[]
    },
    reducers:{
        addMovie(state, action){
            state.movie = action.payload;
        },
        addInputValue(state, action){
            state.inputValue = action.payload
        },
        getMoviePage(state,action){
            state.movieArr.push(action.payload);
            state.moviePage = state.movieArr.reduce((o,i)=>{
                if(!o.find(v => v.Title == i.Title)){
                    o.push(i)
                }
                return o;
            },[]) 
        },
        addFavorite(state, action){
            state.favoriteArr.push(action.payload);
            state.favorite = state.favoriteArr.reduce((o,i)=>{
                if(!o.find(v => v.Title == i.Title)){
                    o.push(i)
                }
                return o;
            },[]) 
        },
        removeFavorite(state, action){
            state.favorite = state.favorite.filter(elem => elem.Title != action.payload.Title)
        }
    }
})

export const {addMovie, addInputValue, getMoviePage, addFavorite, removeFavorite} = searchSlice.actions;
export default searchSlice.reducer;