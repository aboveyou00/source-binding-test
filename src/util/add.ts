

export function add(lhs: number): (rhs: number) => number;
export function add(lhs: number, rhs: number): number;
export function add(lhs: number, rhs?: number): number | ((rhs: number) => number) {
    if (typeof rhs === 'undefined') return rhs => lhs + rhs;
    return lhs + rhs;
}
