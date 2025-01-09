import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const ReactCompilerConfig = {
  target: '19',
  sources: (filename) => {
    return filename.indexOf('src/path/to/dir') !== -1;
  },
  compilationMode: "annotation",
};

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      },
    }),
  ],
});