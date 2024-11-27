import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigpaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), tsconfigpaths(), svgr()],
  server: {
    open: true,
  },
});
