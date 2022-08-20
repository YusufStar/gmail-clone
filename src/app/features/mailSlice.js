import { createSlice } from "@reduxjs/toolkit/";

export const mailSlice = createSlice({
    name: "mail",
    initialState: {
        SendMessageIsOpen: false,
    },
    reducers: {
        openSendMessage: (state) => {
            state.SendMessageIsOpen = true;
        },
        closeSendMessage: (state) => {
            state.SendMessageIsOpen = false;
        },
    },
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.SendMessageIsOpen;

export default mailSlice.reducer;