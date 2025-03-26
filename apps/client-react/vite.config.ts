import { mergeViteConfig } from "@repo/vitest-config/configs";
import { defineConfig } from "vitest/config";

export default defineConfig(() =>
  mergeViteConfig({
    test: {
      setupFiles: ["./setupTests.ts"],
    },
  }),
);
