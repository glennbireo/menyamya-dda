import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // This project targets self-hosted static infra with `output: "export"`
      // and `images: { unoptimized: true }`, making <Image> and <img> produce
      // identical HTML. The rule is disabled so ESLint doesn't flag intentional
      // <img> tags used for external placeholder images (picsum.photos).
      // When official photos are added as local /public assets, migrate those
      // to <Image> and re-enable this rule.
      "@next/next/no-img-element": "off",
    },
  },
]);

export default eslintConfig;
