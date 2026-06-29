import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// devansh-pratap-singh.github.io is a User Page — served from root, not a subpath
export default defineConfig({
  plugins: [react()],
  base: '/',
});