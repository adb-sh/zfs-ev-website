import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import mdx from "lume/plugins/mdx.ts";
import minify_html from "lume/plugins/minify_html.ts";
import pagefind from "lume/plugins/pagefind.ts";
import postcss from "lume/plugins/postcss.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import sass from "lume/plugins/sass.ts";
import feed from "lume/plugins/feed.ts";
import netlifyCMS from "lume/plugins/netlify_cms.ts";
import * as colors from "https://esm.sh/twind@0.16.19/colors";

const site = lume({
  src: "./src",
  location: new URL("https://zfs-ev.de/"),
});

site
  .use(netlifyCMS())
  .use(jsx_preact())
  .use(mdx())
  .use(pagefind())
  .use(code_highlight())
  .use(sass())
  .use(tailwindcss({
    options: {
      theme: {
        colors: {
          ...colors,
          primary: colors.red[500],
          ["primary-dark"]: colors.red[500],
          secondary: colors.gray[800],
          ["secondary-dark"]: colors.gray[700],
        },
        fontFamily: {
          sans: ["Roboto", "sans-serif"],
        },
      },
    },
  }))
  .use(postcss())
  .use(minify_html())
  .copy("media")
  .copy("assets", ".")
  .copy("main.js")
  .remoteFile(
    "./code.css",
    "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.8.0/build/styles/github-dark.min.css",
  );

export default site;
