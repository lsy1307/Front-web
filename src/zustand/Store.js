import { create } from 'zustand';

const useStore = create((set) => ({
  sortingCriteria: 'best',
  setSorting: (sort) => set({ sortingCriteria: sort }),
  registInfo: '',
  setRegistInfo: (info) => set({ registInfo: info }),
  clientInfo: '',
  setClientInfo: (info) => set({ clientInfo: info }),
  registPage: 0,
  setRegistPage: (page) => set({ registPage: page }),
}));

export default useStore;
