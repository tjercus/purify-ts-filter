import { Maybe } from "purify-ts";

/**
 * Returns all elements which satisfy a predicate.
 * A more typesafe version of the already existing Array.prototype.filter
 * Can be partially applied.
 */
function filter<T>(
  f: (x: T, index: number, arr: T[]) => boolean,
  list: T[]
): Maybe<T[]>
function filter<T>(
  f: (x: T, index: number, arr: T[]) => boolean
): (list: T[]) => Maybe<T[]>
function filter<T>(
  f: (x: T, index: number, arr: T[]) => boolean,
  list?: T[]
): any {
  switch (arguments.length) {
    case 1:
      return (list: T[]) => filter(f, list)
    default:
      const filtered = list?.filter(f)
      return Maybe.fromNullable(filtered?.length ? filtered : null)
  }
}

export default filter;