import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./setupTests.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["src/**/*.{ts,tsx}"],
    },
  },
});

// vite was unable to resolve this config saved with ts extension on a new machine. look into this
// import { mergeViteConfig } from "@repo/vitest-config/configs";

// export default defineConfig(() =>
//   mergeViteConfig({
//     test: {
//       setupFiles: ["./setupTests.ts"],
//     },
//   }),
// );
