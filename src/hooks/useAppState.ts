import { create } from "zustand";

export interface AppStoreInterface {
  marsImageDate: string;
  marsImageSearchDate: string;
  marsImagePage: number;
  setMarsImageDate: (image: string, imageSearch: string) => void;
  setMarsImagesPage: (page: number) => void;
}

const useApplStore = create<AppStoreInterface>((set) => ({
  marsImageDate: "",
  marsImageSearchDate: "",
  marsImagePage: 1,
  setMarsImageDate: (image: string, imageSearch: string) =>
    set({
      marsImageDate: image,
      marsImageSearchDate: imageSearch,
    }),
  setMarsImagesPage: (page: number) =>
    set({
      marsImagePage: page,
    }),
}));

export default useApplStore;
