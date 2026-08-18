import { describe, expect, it } from 'vitest'

import { taxonomy } from '../src/index.js'

describe('package exports', () => {
  it('exports the move taxonomy definition', () => {
    expect(taxonomy).toEqual({
      id: 'move',
      label: 'Move',
      summary:
        'Coordinate movement-related livestock journeys and traceability.'
    })
  })
})
