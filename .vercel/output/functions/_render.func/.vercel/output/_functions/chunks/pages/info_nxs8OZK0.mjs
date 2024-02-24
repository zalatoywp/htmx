/* empty css                                 */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent } from '../astro_ObfTp1mm.mjs';
import { $ as $$Layout } from './estadisticas_02QlLLBi.mjs';

const $$Astro$1 = createAstro();
const $$CompInfo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CompInfo;
  return renderTemplate`${maybeRenderHead()}<header class="text-center py-3 mb-2 mx-1 border-2 border-gray-500 shadow-md bg-[#121620] shadow-cyan-500/50 rounded-2xl text-white lg:px-6"> <!-- <div class="text-center mb-2 lg:mb-2">
    <button
      class="mt-auto py-0 px-2 text-center font-bold text-lg text-opacity-80 text-orange-300 border-2 shadow shadow-cyan-500/50 border-cyan-900/90 bg-[#13151a] hover:bg-gray-700 rounded-2xl lg:mb-6"
    >
      Registros
    </button>
  </div> --> <article> <div class="text-left text-pretty px-10 lg:px-80"> <p class="py-3 text-center text-3xl text-yellow-300">ANÁLISIS DE DATOS</p> <p class="py-3 text-xl text-balance text-center">
La aplicación web utiliza tecnología avanzada para buscar y analizar
        datos públicos de redes sociales.
</p> <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"> <p class="py-3">
1. <em>Búsqueda de datos:</em> Cuando ingresas el nombre de usuario que deseas
        analizar, nuestra aplicación realiza una solicitud de búsqueda a la red social
        correspondiente. Esta solicitud de búsqueda, también conocida como 'fetch',
        recopila los datos públicos asociados con el nombre de usuario que has proporcionado.
</p> <p class="py-3">
2. <em>Análisis de datos:</em> Una vez que hemos recopilado los datos, los
        analizamos utilizando algoritmos de aprendizaje automático y análisis de
        datos. Esto nos permite identificar patrones, tendencias y otra información
        valiosa.
</p> <p class="py-3">
3. <em>Presentación de resultados:</em> Finalmente, presentamos los resultados
        del análisis en un formato fácil de entender. Esto puede incluir gráficos,
        tablas y resúmenes escritos. Es importante recordar que solo analizamos datos
        públicos y respetamos completamente la privacidad del usuario. No recopilamos
        ni almacenamos ninguna información personal.
</p> <p class="py-3">
Esperamos que encuentres útil nuestra aplicación web de análisis de
        redes sociales. Por favor, ten en cuenta que este es solo un texto
        explicativo y la funcionalidad real de la aplicación puede variar.
</p> <p class="py-3">
Si tienes alguna pregunta o necesitas más información, no dudes en
        preguntar. ¡Estoy aquí para ayudar! 😊
</p> </div> </article> </header>`;
}, "C:/Users/Zalatoy/Dev/htmx/src/components/CompInfo.astro", void 0);

const $$Astro = createAstro();
const $$Info = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Info;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "ZalaDev" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "CompInfo", $$CompInfo, {})} </main> ` })}`;
}, "C:/Users/Zalatoy/Dev/htmx/src/pages/info.astro", void 0);

const $$file = "C:/Users/Zalatoy/Dev/htmx/src/pages/info.astro";
const $$url = "/info";

export { $$Info as default, $$file as file, $$url as url };
