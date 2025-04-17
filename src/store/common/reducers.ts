import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalTitle } from '@/types/modal';

interface Common {
  modalName: ModalTitle | null;
}

const initialState: Common = {
  modalName: null,
};

const common = createSlice({
  name: 'common',
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

export const { openModal, closeModal } = common.actions;

export default common.reducer;
