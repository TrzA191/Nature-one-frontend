import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImageUrl(url: string | null | undefined): string {
  if (!url) return "";
  if (url.startsWith("/uploads/")) {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:1337";
    return `${backendUrl}${url}`;
  }
  return url;
}

