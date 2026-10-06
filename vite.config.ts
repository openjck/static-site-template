import { resolve } from "node:path";
import { defineConfig } from "vite";

const root = "src";

export default defineConfig({
  root,
  input: {
    main: resolve(import.meta.dirname, root, "index.html"),
    notFound: resolve(import.meta.dirname, root, "404.html"),
  },
  build: {
    // Do not inline any assets as "data:" URLs, even small assets, since that
    // would violate the CSP (or require the use of a more lenient CSP).
    //
    // https://vite.dev/guide/features#content-security-policy-csp
    assetsInlineLimit: 0,

    // Build a "dist" directory at the repo root, not the Vite project root
    // ("src").
    outDir: resolve(import.meta.dirname, "dist"),

    // When "outDir" is outside the Vite project root ("src"), Vite does not
    // empty it before running a build, so that nothing important is
    // inadvertently deleted.
    //
    // I don't plan to ever put anything important in "dist", and a clean build
    // ensures old artifacts are removed, so I feel comfortable with Vite
    // emptying it.
    emptyOutDir: true,
  },
});
