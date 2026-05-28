import vue from "@vitejs/plugin-vue";
import fs from "fs";
import path from "node:path";
import { fileURLToPath, URL } from "node:url";
import { defineConfig, PluginOption, ViteDevServer } from "vite";
import VueDevTools from "vite-plugin-vue-devtools";

// Custom plugin to watch additional directories
function watchAdditionalDirectories(directories: string[]): PluginOption {
  return {
    name: "watch-additional-directories",
    configureServer(server: ViteDevServer) {
      directories.forEach((dir) => {
        fs.watch(dir, { recursive: true }, (_, filename) => {
          if (filename) {
            server.hot.send({
              type: "full-reload",
              path: "*",
            });
          }
        });
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes("-"),
        },
      },
    }),
    VueDevTools(),
    watchAdditionalDirectories([path.resolve(__dirname, "../ui/webcomponents")]),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
