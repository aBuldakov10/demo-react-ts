import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  addGroupThunk,
  addTaskThunk,
  deleteGroupThunk,
  deleteTaskThunk,
  doneTaskThunk,
  editGroupThunk,
  editTaskThunk,
  getGroupsThunk,
  getTasksThunk,
} from './thunks';
import { GroupType, TaskType } from '@/types/todos';
import { formatFromUTC } from '@/utils/functions';
import { FilterType, SortType } from '@/utils/constants';

interface Todos {
  isLoading: boolean;
  groups: GroupType[];
  tasks: TaskType[];
  filteredTasks: TaskType[];
  selectedGroupId: string | null;
  selectedTaskId: string | null;
  selectedTab: string;
  filtered: FilterType;
  sorted: SortType;
  groupedTasks: boolean;
  groupCount: null | number;
  taskCount: null | number;
}

const initialState: Todos = {
  isLoading: true,
  groups: [],
  tasks: [],
  filteredTasks: [],
  selectedGroupId: null,
  selectedTaskId: null,
  selectedTab: '0',
  filtered: 'all',
  sorted: 'dateDesc',
  groupedTasks: false,
  groupCount: null,
  taskCount: null,
};

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    selectGroup(state, { payload }: PayloadAction<string>) {
      state.selectedTab = payload;
      state.groupedTasks = false;

      let filtered: TaskType[] = [];

      // отфильтровать в пределах группы или без учета группы
      if (payload === '0') {
        filtered = state.tasks.filter((item) => {
          return state.filtered === 'active' ? !item.isDone : state.filtered === 'done' ? item.isDone : item;
        });

        state.selectedGroupId = null;
      } else {
        const id = state.groups[+payload - 1].id; // id выбранной группы

        filtered = state.tasks.filter(({ groupId, isDone }) => {
          if (state.filtered === 'active') return groupId === id && !isDone;
          if (state.filtered === 'done') return groupId === id && isDone;

          return groupId === id;
        });

        state.selectedGroupId = id;
      }

      state.filteredTasks = filtered.sort((a, b) => {
        if (state.sorted === 'dateDesc') return b.createDate?.localeCompare(a.createDate); // сначала поздние
        if (state.sorted === 'dateAsc') return a.createDate?.localeCompare(b.createDate); // сначала ранние
        if (state.sorted === 'active') return a.isDone === b.isDone ? 0 : a.isDone ? 1 : -1; // сначала активные

        return a.isDone === b.isDone ? 0 : a.isDone ? -1 : 1; // сначала неактивные
      });
      state.taskCount = state.filteredTasks.length;
    },
    setDeleteTaskId(state, { payload }: PayloadAction<string>) {
      state.selectedTaskId = payload;
    },
    setFilterTask(state, { payload }: PayloadAction<FilterType>) {
      state.filtered = payload;

      let filtered: TaskType[] = [];

      // при выборе фильтров "активные"/"завершенные" сортировку вернуть по умолчанию
      if (payload !== 'all' && (state.sorted === 'active' || state.sorted === 'done')) {
        state.sorted = 'dateDesc';
      }

      if (state.groupedTasks) {
        state.filteredTasks = state.groups.reduce((accum: TaskType[], current) => {
          // для каждой итерации групп отфильтровать в соответствии с id группы
          const filtered = state.tasks.filter(({ groupId }) => groupId === current.id);

          // сформировать группированый массив задач с учетом фильтров и сортировки
          const arr = filtered
            .filter((item) => {
              return payload === 'active' ? !item.isDone : payload === 'done' ? item.isDone : item;
            })
            .sort((a, b) => {
              if (state.sorted === 'dateDesc') return b.createDate?.localeCompare(a.createDate); // сначала поздние
              if (state.sorted === 'dateAsc') return a.createDate?.localeCompare(b.createDate); // сначала ранние
              if (state.sorted === 'active') return a.isDone === b.isDone ? 0 : a.isDone ? 1 : -1; // сначала активные

              return a.isDone === b.isDone ? 0 : a.isDone ? -1 : 1; // сначала неактивные
            });

          accum.push(...arr);

          return accum;
        }, []);
      } else {
        // отфильтровать в пределах группы или без учета группы
        if (state.selectedGroupId === null) {
          filtered = state.tasks.filter((item) => {
            return payload === 'active' ? !item.isDone : payload === 'done' ? item.isDone : item;
          });
        } else {
          filtered = state.tasks.filter(({ groupId, isDone }) => {
            if (payload === 'active') return groupId === state.selectedGroupId && !isDone;
            if (payload === 'done') return groupId === state.selectedGroupId && isDone;

            return groupId === state.selectedGroupId;
          });
        }

        // отсортировать отфильтрованный массив
        state.filteredTasks = filtered.sort((a, b) => {
          if (state.sorted === 'dateDesc') return b.createDate?.localeCompare(a.createDate);

          return a.createDate?.localeCompare(b.createDate);
        });

        state.taskCount = state.filteredTasks.length;
      }
    },
    setSortTask(state, { payload }: PayloadAction<SortType>) {
      state.sorted = payload;

      let filtered: TaskType[] = [];

      if (state.groupedTasks) {
        state.filteredTasks = state.groups.reduce((accum: TaskType[], current) => {
          // для каждой итерации групп отфильтровать в соответствии с id группы
          const filtered = state.tasks.filter(({ groupId }) => groupId === current.id);

          // сформировать группированый массив задач с учетом фильтров и сортировки
          const arr = filtered
            .filter((item) => {
              return state.filtered === 'active' ? !item.isDone : state.filtered === 'done' ? item.isDone : item;
            })
            .sort((a, b) => {
              if (payload === 'dateDesc') return b.createDate?.localeCompare(a.createDate); // сначала поздние
              if (payload === 'dateAsc') return a.createDate?.localeCompare(b.createDate); // сначала ранние
              if (payload === 'active') return a.isDone === b.isDone ? 0 : a.isDone ? 1 : -1; // сначала активные

              return a.isDone === b.isDone ? 0 : a.isDone ? -1 : 1; // сначала неактивные
            });

          accum.push(...arr);

          return accum;
        }, []);
      } else {
        // отфильтровать в пределах группы или без учета группы
        if (state.selectedGroupId === null) {
          filtered = state.tasks.filter((item) => {
            return state.filtered === 'active' ? !item.isDone : state.filtered === 'done' ? item.isDone : item;
          });
        } else {
          filtered = state.tasks.filter(({ groupId, isDone }) => {
            if (state.filtered === 'active') return groupId === state.selectedGroupId && !isDone;
            if (state.filtered === 'done') return groupId === state.selectedGroupId && isDone;

            return groupId === state.selectedGroupId;
          });
        }

        // отсортировать отфильтрованный массив
        state.filteredTasks = filtered.sort((a, b) => {
          if (payload === 'dateDesc') return b.createDate?.localeCompare(a.createDate); // сначала поздние
          if (payload === 'dateAsc') return a.createDate?.localeCompare(b.createDate); // сначала ранние
          if (payload === 'active') return a.isDone === b.isDone ? 0 : a.isDone ? 1 : -1; // сначала активные

          return a.isDone === b.isDone ? 0 : a.isDone ? -1 : 1; // сначала неактивные
        });
      }
    },
    groupTasks(state, { payload }: PayloadAction<boolean>) {
      state.groupedTasks = payload;

      if (payload) {
        // при группировке надо учитывать фильтр и сортировку. сгруппированые задачи отображаются в порядке вкладок групп
        state.filteredTasks = state.groups.reduce((accum: TaskType[], current) => {
          // для каждой итерации групп отфильтровать в соответствии с id группы
          const filtered = state.tasks.filter(({ groupId }) => groupId === current.id);

          // сформировать группированый массив задач с учетом фильтров и сортировки
          const arr = filtered
            .filter((item) => {
              return state.filtered === 'active' ? !item.isDone : state.filtered === 'done' ? item.isDone : item;
            })
            .sort((a, b) => {
              if (state.sorted === 'dateDesc') return b.createDate?.localeCompare(a.createDate); // сначала поздние
              if (state.sorted === 'dateAsc') return a.createDate?.localeCompare(b.createDate); // сначала ранние
              if (state.sorted === 'active') return a.isDone === b.isDone ? 0 : a.isDone ? 1 : -1; // сначала активные

              return a.isDone === b.isDone ? 0 : a.isDone ? -1 : 1; // сначала неактивные
            });

          accum.push(...arr);

          return accum;
        }, []);
      } else {
        state.filteredTasks = state.tasks
          .filter((item) => {
            return state.filtered === 'active' ? !item.isDone : state.filtered === 'done' ? item.isDone : item;
          })
          .sort((a, b) => {
            if (state.sorted === 'dateDesc') return b.createDate?.localeCompare(a.createDate); // сначала поздние
            if (state.sorted === 'dateAsc') return a.createDate?.localeCompare(b.createDate); // сначала ранние
            if (state.sorted === 'active') return a.isDone === b.isDone ? 0 : a.isDone ? 1 : -1; // сначала активные

            return a.isDone === b.isDone ? 0 : a.isDone ? -1 : 1; // сначала неактивные
          });
      }
    },
  },
  extraReducers: (builder) => {
    // получение списка групп
    builder
      .addCase(getGroupsThunk.pending, () => {})
      .addCase(getGroupsThunk.fulfilled, (state, { payload }) => {
        state.groups = payload;
        state.groupCount = payload?.length;
        state.isLoading = false;

        if (payload.length === 1) state.selectedTab = '1';
      })
      .addCase(getGroupsThunk.rejected, () => {});

    // добавление группы
    builder
      .addCase(addGroupThunk.pending, () => {})
      .addCase(addGroupThunk.fulfilled, (state, { payload }) => {
        const groupsIdArr = state.groups.map(({ id }) => id); // список id групп
        const groupObj = payload.find(({ id }) => !groupsIdArr.includes(id))!; // объект добавленной группы

        state.groups = payload;
        state.groupCount = payload?.length;
        state.groupedTasks = false;
        state.selectedGroupId = groupObj.id; // id добавленной группы
        state.selectedTab = payload.length.toString(); // вкладка добавленной группы
        state.filteredTasks = [];
        state.taskCount = 0;
      })
      .addCase(addGroupThunk.rejected, () => {});

    // редактирование группы
    builder
      .addCase(editGroupThunk.pending, () => {})
      .addCase(editGroupThunk.fulfilled, (state, { payload }) => {
        state.groups = payload;
      })
      .addCase(editGroupThunk.rejected, () => {});

    // удаление группы
    builder
      .addCase(deleteGroupThunk.pending, () => {})
      .addCase(deleteGroupThunk.fulfilled, (state, { payload }) => {
        state.groups = payload;
        state.groupCount = payload?.length;
      })
      .addCase(deleteGroupThunk.rejected, () => {});

    // получение списка задач
    builder
      .addCase(getTasksThunk.pending, () => {})
      .addCase(getTasksThunk.fulfilled, (state, { payload }) => {
        state.tasks = formatFromUTC(payload);
        state.filteredTasks = formatFromUTC(payload).sort((a, b) => {
          return b.createDate?.localeCompare(a.createDate); // по умолчанию сначала поздние
        });
        state.taskCount = formatFromUTC(payload)?.length;
        state.isLoading = false;
      })
      .addCase(getTasksThunk.rejected, () => {});

    // добавление задачи
    builder
      .addCase(addTaskThunk.pending, () => {})
      .addCase(addTaskThunk.fulfilled, (state, { payload }) => {
        state.tasks = formatFromUTC(payload);
        state.filteredTasks = formatFromUTC(payload);
        state.taskCount = formatFromUTC(payload)?.length;
      })
      .addCase(addTaskThunk.rejected, () => {});

    // редактирование описания задачи
    builder
      .addCase(editTaskThunk.pending, () => {})
      .addCase(editTaskThunk.fulfilled, (state, { payload }) => {
        state.tasks = formatFromUTC(payload);
        state.filteredTasks = formatFromUTC(payload);
      })
      .addCase(editTaskThunk.rejected, () => {});

    // удаление задачи
    builder
      .addCase(deleteTaskThunk.pending, () => {})
      .addCase(deleteTaskThunk.fulfilled, (state, { payload }) => {
        state.tasks = formatFromUTC(payload);
        state.filteredTasks = formatFromUTC(payload);
      })
      .addCase(deleteTaskThunk.rejected, () => {});

    // завершение задачи
    builder
      .addCase(doneTaskThunk.pending, () => {})
      .addCase(doneTaskThunk.fulfilled, (state, { payload }) => {
        state.tasks = formatFromUTC(payload);
        state.filteredTasks = formatFromUTC(payload);
      })
      .addCase(doneTaskThunk.rejected, () => {});
  },
});

export const { selectGroup, setDeleteTaskId, setFilterTask, setSortTask, groupTasks } = todos.actions;

export default todos.reducer;
