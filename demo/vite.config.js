import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve(__dirname, "src/main.js"),
        resolve(__dirname, "src/logger.js"),
      ],
      name: "Demo",
      fileName: (format, name) => {
        if (format === "es") {
          return `${name}.js`;
        }
        return `${name}.${format}`;
      },
    },
    rollupOptions: {
      external: ["lodash"],
    },
  },
});
