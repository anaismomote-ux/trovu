import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", minimumFractionDigits: 0 }).format(amount);
}

export function formatDistance(miles: number): string {
  return miles < 1 ? `${Math.round(miles * 1760)}yds` : `${miles.toFixed(1)} mi`;
}
