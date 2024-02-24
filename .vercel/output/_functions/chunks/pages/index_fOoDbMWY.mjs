/* empty css                                 */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_85R9bCmk.mjs';
import { $ as $$Layout } from './estadisticas_Qn1Aqj2P.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "ZalaDev", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="scroll-smooth" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "RepoWalker", null, { "client:only": "react", "client:component-hydration": "only", "data-astro-cid-j7pv25f6": true, "client:component-path": "C:/Users/Zalatoy/Dev/htmx/src/components/RepoWalker", "client:component-export": "default" })} </main> ` })} `;
}, "C:/Users/Zalatoy/Dev/htmx/src/pages/index.astro", void 0);

const $$file = "C:/Users/Zalatoy/Dev/htmx/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
