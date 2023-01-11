import { describe, expect, it } from 'vitest'

describe('TEST',() => {
  it('Debe ser mayor de 10', () =>{

  let value = 5
    value = value + 6
    expect(value).toBeGreaterThan(10)
})})