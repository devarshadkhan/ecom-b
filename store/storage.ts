import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('session')
    : createNoopStorage();

export default storage;

// // Custom storage object
// const storage: StateStorage = {
//   getItem: async (name: string): Promise<string | null> => {
//     try {
//       const value = (await localforage.getItem(name)) as string;
//       return value || null;
//     } catch (err) {
//       // This code runs if there were any errors.
//       console.log(err);
//       return null;
//     }
//   },
//   setItem: async (name: string, value: string): Promise<void> => {
//     console.log({ name }, { value });
//     try {
//       await localforage.setItem(name, value);
//     } catch (err) {
//       console.log(err);
//     }
//   },
//   removeItem: async (name: string): Promise<void> => {
//     try {
//       await localforage.removeItem(name);
//     } catch (err) {
//       console.log(err);
//     }
//   },
// };
