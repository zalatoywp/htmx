/* empty css                                 */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent } from '../astro_85R9bCmk.mjs';
import { $ as $$Layout } from './estadisticas_Qn1Aqj2P.mjs';

const $$Astro$1 = createAstro();
const $$CompHerramientas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CompHerramientas;
  return renderTemplate`${maybeRenderHead()}<header class="text-center py-3 mx-1 mb-2 border-2 border-gray-500 shadow-md bg-[#121620] shadow-cyan-500/50 rounded-2xl text-white lg:px-6"> <div class="text-center mb-2 lg:mb-2"> <button class="mt-auto py-0 px-2 text-center font-bold text-lg text-opacity-80 text-orange-300 border-2 shadow shadow-cyan-500/50 border-cyan-900/90 bg-[#13151a] hover:bg-gray-700 rounded-2xl lg:mb-6">
Herramientas
</button> </div> </header>`;
}, "C:/Users/Zalatoy/Dev/htmx/src/components/CompHerramientas.astro", void 0);

const $$Astro = createAstro();
const $$Herramientas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Herramientas;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "ZalaDev" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "CompHerramientas", $$CompHerramientas, {})} </main> ` })}
\`\`\``;
}, "C:/Users/Zalatoy/Dev/htmx/src/pages/herramientas.astro", void 0);

const $$file = "C:/Users/Zalatoy/Dev/htmx/src/pages/herramientas.astro";
const $$url = "/herramientas";

export { $$Herramientas as default, $$file as file, $$url as url };
