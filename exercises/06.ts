// 6.1

// a
// 割当可能
// 1 は number のサブタイプなので
const a: number = 1;

// b
// 割当不可能
// number は 1 のサブタイプではないので
const b0: number = 0;
// const b1: 1 = b0

// c
// 割当可能
// string は string | number のサブタイプなので
let c0 = "hoge";
const c1: string | number = c0;

// d
// 割当不可能
// boolean は number のサブタイプではないので
let d0 = true;
// const d1: number = d0

// e
// 割当可能
// number[] は (number | string)[] のサブタイプなので
const e0 = [1, 2];
const e1: (number | string)[] = e0;

// f
// 割当不可能
// (number | string)[] は number[] のサブタイプではないので
const f0 = [1, "foo"];
// const f1: number[] = f0;

// g
// 割当可能
// {a: true} は {a: boolean} のサブタイプなので
const g0 = { a: true } as const;
const g1: { a: boolean } = g0;

// h
// 割当不可能
// {a: b: [string]} は {a: b: [number | string]} のサブタイプではないので
const h0 = { a: { b: [1, "foo"] } };
// const h1: { a: { b: number[] } } = h0;

// i
// 割当可能
// (a: number) => string は (b: number) => string のサブタイプなので（関数の型シグネチャにおいて引数の名称は意味をもたない）
const i0 = (a: number) => "foo";
const i1: (b: number) => string = i0;

// j
// 割当不可能
// (a: number) => string は (a: string) => string のサブタイプではないので
const j0 = (a: number) => "bar";
// const j1: (a: string) => string = j0

// k
// 割当不可能
// (a: number | string) => string は (a: string) => string のサブタイプなので
// 関数型はパラメータに関して反変であることに注意
const k0 = (a: number | string) => "foo";
const k1: (a: string) => string = k0;

// l
// 割当不可能
// enum の member はreadonly なので
enum E {
  X = "X",
}
enum F {
  X = "X",
}
// F.X = E.X

// 6.2
type O = { a: { b: { c: string } } };
type O0 = keyof O  // "a"
type O1 = keyof O["a"]  // "b"
type O2 = keyof O["a"]["b"]  // "c"

// 6.3
type Exclusive

// 6.4
