/* позволяет rollup находить модули в node_modules */
import resolve from '@rollup/plugin-node-resolve'

/* преобразует CommonJS в ES6 */
import commonjs from '@rollup/plugin-commonjs'

/* минификация кода */
import terser from '@rollup/plugin-terser'


export default [
  {
    input: 'src/index.mjs',
    output: {
      file: 'lib/cjs/index.cjs',
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      terser(),
    ],
  },
  {
    input: 'src/index.mjs',
    output: {
      file: 'lib/esm/index.mjs',
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      terser(),
    ],
  },
]
