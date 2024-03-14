import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function objectValues<K extends string, T>(object: Record<K, T>) {
  return Object.values<T>(object);
}

export function objectKeys<K extends string, T>(object: Record<K, T>) {
  return Object.keys(object);
}
