import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@assets/*": "src/assets/*",
      "@components/*": "src/component/*",
      "@features/*": "src/features/*",
      "@types/*": "src/types/*",
      "@constants/*": "src/constants/*",
      "@utils/*": "src/utils/*",
    },
  },
});
