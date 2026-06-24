"use client";
import Website from "@/composants/ui/Website";
import {usePinnedWebsitesStore} from "@/stores/pinnedWebsitesStore";

export default function PinsList() {
  const { pinnedWebsites } = usePinnedWebsitesStore();

  return (
    <div className="grid md:grid-cols-4 gap-x-4 gap-y-8 pt-12">
      {pinnedWebsites.map((p, i) => (
        <Website key={`website-${i}`} website={p} />
      ))}
    </div>
  );
}