"use client";

import Link, { type LinkProps } from "next/link";
import type { MouseEvent, ReactNode } from "react";

type TrackedLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
  label?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export default function TrackedLink({
  href,
  children,
  className,
  label,
  onClick,
  ...rest
}: TrackedLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    const hrefValue =
      typeof href === "string"
        ? href
        : href.pathname
          ? href.pathname.toString()
          : "";

    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "click",
        href: hrefValue,
        label,
        path: typeof window !== "undefined" ? window.location.pathname : "",
      }),
    }).catch(() => {
      // Tracking should never block navigation.
    });
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
