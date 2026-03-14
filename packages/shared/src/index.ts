export const clamp = (num: number, min: number, max: number) => Math.max(min, Math.min(num, max));
export type Vec = [number, number];
export const add = (a: Vec, b: Vec): Vec => [a[0] + b[0], a[1] + b[1]];
