/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
    count:1,
    quote:["прообразом Чубакки стал пёс режиссёра","актёрам разрешили подобрать любимый цвет для своих световых мечей","в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину","дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу","планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок"]
}
export const getQuote = createAction('getQuote');

export default createReducer(initialState, (builder)=> {
    builder
        .addCase(getQuote, (state, action)=>{   
            state.quote.slice(0, action.payload);
        })
})