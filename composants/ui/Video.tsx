"use client";

import { useEffect, useState } from "react";
import { Button } from "./Button";

type VideoType = {
  id: string;
};
export default function Video({ id }: VideoType) {


  return (
    <iframe
      className="rounded-lg overflow-hidden w-full mt-12 aspect-video"
      src={`https://player.vimeo.com/video/${id}`}
      allow="encrypted-media"
    />
  );
}
