"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";
import type { ComponentProps, MouseEventHandler } from "react";

type TrackPropertyValue = string | number | boolean | null | undefined;

interface TrackedLinkProps extends ComponentProps<typeof Link> {
  eventName: string;
  eventProperties?: Record<string, TrackPropertyValue>;
}

export default function TrackedLink({
  eventName,
  eventProperties,
  onClick,
  ...props
}: TrackedLinkProps) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    track(eventName, eventProperties);
    onClick?.(event);
  };

  return <Link {...props} onClick={handleClick} />;
}
