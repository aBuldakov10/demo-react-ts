import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalTitle } from '@/types/modal';
import { COMMON_KEY } from '@/store/store-keys';

interface CommonReducer {
  modalName: ModalTitle | null;
}

const initialState: CommonReducer = {
  modalName: null,
};

const commonReducer = createSlice({
  name: COMMON_KEY,
  initialState,
  reducers: {
    openModal(state, { payload }: PayloadAction<ModalTitle | null>) {
      state.modalName = payload;
    },
    closeModal(state) {
      state.modalName = null;
    },
  },
});

export const { openModal, closeModal } = commonReducer.actions;

export default commonReducer.reducer;
