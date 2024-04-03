import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import "../css/app.css";

createInertiaApp({
  resolve: (page) => resolvePageComponent(`./pages/${page}.tsx`, import.meta.glob("./pages/**/*.tsx")),
  setup({ el, props, App }) {
    createRoot(el).render(<App {...props} />);
  },
});
