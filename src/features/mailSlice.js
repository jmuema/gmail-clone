import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageIsOpen: true,
  },
  reducers: {
    openSendMessage: state => {
    state.sendMessageIsOpen = true;
  },
  closeSendMessage: state => {
    state.sendMessageIsOpen = false;
    },
  },
});

export const { sendMessageIsOpen, closeSendMessage } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
