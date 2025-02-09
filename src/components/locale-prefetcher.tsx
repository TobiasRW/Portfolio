"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function LocalePrefetcher() {
  const router = useRouter();

  useEffect(() => {
    // Prefetch both locales so toggling is instant
    router.prefetch("/en");
    router.prefetch("/da");
  }, [router]);

  return null; // no UI
}
