import { defineConfig } from 'rollup'
import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'

export default defineConfig([
  {
    input: 'src/main.ts',
    output: {
      banner: '#! /usr/bin/env node',
      file: 'bin/main.js',
      format: 'cjs',
      sourcemap: true
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.json'
      }),
      json()
    ]
  }
])
