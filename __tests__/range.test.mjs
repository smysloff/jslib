/* file: __tests__/range.test.mjs */

/* imports */
import Tests from '../src/Tests.mjs'
import { range } from '../index.mjs'

/* constants */
const tests = new Tests()
const callback = (args) => [...range(...args)]

/* tests */
tests.run('range', callback, [1, 5],       '[1,2,3,4,5]')
tests.run('range', callback, [5, 1, -1],   '[5,4,3,2,1]')
tests.run('range', callback, [1, 1],       '[1]')
tests.run('range', callback, [0, 0],       '[0]')
tests.run('range', callback, [0, 0, -1],   '[0]')
tests.run('range', callback, [1, 5, -1],   undefined) // should throw
tests.run('range', callback, [-1, 5, 1],   '[-1,0,1,2,3,4,5]')
tests.run('range', callback, [1, -5, -1],  '[1,0,-1,-2,-3,-4,-5]')
tests.run('range', callback, [5, 1, -1],   '[5,4,3,2,1]')
tests.run('range', callback, [0, 10, 2],   '[0,2,4,6,8,10]')
tests.run('range', callback, [-5, -1, 1],  '[-5,-4,-3,-2,-1]')
tests.run('range', callback, [1, 5, 0],    undefined) // should throw
tests.run('range', callback, ['a', 5],     undefined) // should throw
tests.run('range', callback, [0, 1, 0.2],  '[0,0.2,0.4,0.6,0.8,1]')
tests.run('range', callback, [1, 0, -0.2], '[1,0.8,0.6,0.4,0.2,0]')

/* result */
tests.result()
