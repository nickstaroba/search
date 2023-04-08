import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/search/",
  build: {
    outDir: "build",
  },
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  server: {
    open: true,
    port: 3000,
  },
});
