import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/utils/api';
import { COMMON_KEY } from '@/store/store-keys';

export const startServerThunk = createAsyncThunk(`${COMMON_KEY}/startServerThunk`, async () => await api.get('/start'));
