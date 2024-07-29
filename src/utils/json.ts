export interface Jsonifiable<T> {
  readonly toJSON: () => T
}

export const toJSON = <T extends Jsonifiable<R>, R>(obj: T): R => {
  return obj.toJSON()
}

export const jsonify = <T extends Jsonifiable<R>, R>(
  obj: ReadonlyArray<T>
): ReadonlyArray<R> => {
  return obj.map(toJSON as (t: T) => R)
}
