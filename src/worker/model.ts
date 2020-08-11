import { func } from "prop-types"

export function add(a: number, b: number) {
  for (let i = 0; i < 1e9; i++);

  return a + b
}
