/* empty css                                 */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, f as renderTransition, g as renderComponent, h as renderHead, i as renderSlot } from '../astro_ObfTp1mm.mjs';

const $$Astro$5 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Zalatoy/Dev/htmx/node_modules/.pnpm/astro@4.3.5_typescript@5.3.3/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$4 = createAstro();
const $$NavBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$NavBar;
  return renderTemplate`${maybeRenderHead()}<nav class="bg-gray-900 dark:bg-gray-900 rounded-lg fixed w-full z-20 top-0 px-3 start-0 shadow-sm-light shadow-cyan-500/50"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2"> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"> <img src="/logo.png" class="h-8" alt="Logo"> <span class="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white">ZalaBsKy.dev</span> </a> <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"> <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> </div> <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky"${addAttribute(renderTransition($$result, "ci4cdsxz", "fade", ""), "data-astro-transition-scope")}> <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-900/80 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-900/80 dark:bg-gray-900/80 md:dark:bg-gray-900/80 dark:border-gray-700"> <li> <a href="/" class="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Inicio</a> </li> <li> <a href="/info" class="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Info</a> </li> <li> <a href="/estadisticas" class="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Estadisticas</a> </li> <li> <a href="/herramientas" class="block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Herramientas</a> </li> </ul> </div> </div> </nav>`;
}, "C:/Users/Zalatoy/Dev/htmx/src/components/NavBar.astro", "self");

const $$Astro$3 = createAstro();
const $$CompHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CompHeader;
  return renderTemplate`${maybeRenderHead()}<header class="py-1 mb-2 lg:mb-2 text-center mx-1 border-2 border-gray-500 shadow-md bg-no-repeat bg-[url('/fondo.png')] bg-[#0a0d13] shadow-cyan-500/50 rounded-2xl text-white lg:px-0"> <section> <div class="mx-auto text-center mb-3 lg:mb-3"> <div class="pb-0 pt-16 text-right pr-5"></div> <span class="inline font-semibold animate-pulse bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-5xl text-blue-500">
ZalaBsky.dev</span> <p class="pt-3 text-center text-lg text-yellow-400">
Auditoría y análisis de datos
</p> </div> </section> </header>`;
}, "C:/Users/Zalatoy/Dev/htmx/src/components/CompHeader.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/logo.png"><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="scroll-smooth"> ${renderComponent($$result, "NavBar", $$NavBar, {})} ${renderComponent($$result, "CompHeader", $$CompHeader, {})} ${renderSlot($$result, $$slots["default"])}  </body> </html>`;
}, "C:/Users/Zalatoy/Dev/htmx/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$CompEstadisticas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CompEstadisticas;
  return renderTemplate`${maybeRenderHead()}<header class="text-center py-3 mx-1 mb-2 border-2 border-gray-500 shadow-md bg-[#121620] shadow-cyan-500/50 rounded-2xl text-white lg:px-6"> <div class="text-center mb-2 lg:mb-2"> <button class="mt-auto py-0 px-2 text-center font-bold text-lg text-opacity-80 text-orange-300 border-2 shadow shadow-cyan-500/50 border-cyan-900/90 bg-[#13151a] hover:bg-gray-700 rounded-2xl lg:mb-6">
Estadisticas
</button> </div> </header>`;
}, "C:/Users/Zalatoy/Dev/htmx/src/components/CompEstadisticas.astro", void 0);

const $$Astro = createAstro();
const $$Estadisticas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Estadisticas;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "ZalaDev" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "CompEstadisticas", $$CompEstadisticas, {})} </main> ` })}`;
}, "C:/Users/Zalatoy/Dev/htmx/src/pages/estadisticas.astro", void 0);

const $$file = "C:/Users/Zalatoy/Dev/htmx/src/pages/estadisticas.astro";
const $$url = "/estadisticas";

const estadisticas = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Estadisticas,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, estadisticas as e };
