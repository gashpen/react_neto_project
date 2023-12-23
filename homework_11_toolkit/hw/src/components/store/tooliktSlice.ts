import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        count: 1,
        quotesArr: [
            "прообразом Чубакки стал пёс режиссёра", 
            "актёрам разрешили подобрать любимый цвет для своих световых мечей", 
            "в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину", 
            "дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу", 
            "планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок"
        ],
        quote:[]
    },
    reducers: {
        getQuotes(state, action){
            state.quote = state.quotesArr.slice(0, action.payload)
        }
    }
})

export default toolkitSlice.reducer;
export const { getQuotes } = toolkitSlice.actions;