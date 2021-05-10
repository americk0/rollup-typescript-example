import typescript from '@rollup/plugin-typescript';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import json from '@rollup/plugin-json';

export default [
  {
    input: 'index.ts',
    output: {
      file: 'index.umd.js',
      format: 'umd',
      name: 'index',
    },
    plugins: [
      json(),
      globals(),
      builtins(),
      typescript(),
    ]
  },
  {
    input: 'index.ts',
    output: {
      file: 'index.cjs.js',
      format: 'cjs',
    },
    plugins: [
      json(),
      globals(),
      builtins(),
      typescript(),
    ]
  },
  {
    input: 'index.ts',
    output: {
      file: 'index.esm.js',
      format: 'es',
    },
    plugins: [
      json(),
      globals(),
      builtins(),
      typescript(),
    ]
  }
];
