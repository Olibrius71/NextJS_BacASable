import {create} from "zustand/react";
import {WebsiteDocument} from "@/prismicio-types";
import { persist } from "zustand/middleware";

type PinnedWebsitesStore = {
  pinnedWebsites: WebsiteDocument[];
  toggleWebsitePin: (website: WebsiteDocument) => void;
  isPinned: (uid: string) => boolean;
  nbPinnedWebsites: () => number; // ✅ fonction pour calculer le nombre
};

export const usePinnedWebsitesStore = create<PinnedWebsitesStore>()(
  persist(
    (set, get) => ({
      pinnedWebsites: [],

      toggleWebsitePin: (website) => {
        const { pinnedWebsites } = get();
        const isAlreadyPinned = pinnedWebsites.some((w) => w.uid === website.uid);

        if (isAlreadyPinned) {
          set({ pinnedWebsites: pinnedWebsites.filter((w) => w.uid !== website.uid) });
        } else {
          set({ pinnedWebsites: [...pinnedWebsites, website] });
        }
      },

      isPinned: (uid) => {
        return get().pinnedWebsites.some((w) => w.uid === uid);
      },

      nbPinnedWebsites: () => {
        return get().pinnedWebsites.length;
      },
    }),
    {
      name: "pinned-websites",
      partialize: (state) => ({ pinnedWebsites: state.pinnedWebsites }),
    }
  )
);