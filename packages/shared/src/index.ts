// Shared utilities for monorepo
export type JSONObject = { [key: string]: any };

export const now = (): string => new Date().toISOString();

export const id = (): string => Math.random().toString(36).slice(2) + Date.now().toString(36);

export const clamp = (n: number, min: number, max: number): number => Math.max(min, Math.min(max, n));

export const pick = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export const merge = <T extends object>(a: T, b: Partial<T>): T => Object.assign({}, a, b);
