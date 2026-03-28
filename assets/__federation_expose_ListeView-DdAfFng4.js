import { importShared } from './__federation_fn_import-dmqIiFee.js';

const plusWhite = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(255,%20255,%20255)'%20d='M352%20128C352%20110.3%20337.7%2096%20320%2096C302.3%2096%20288%20110.3%20288%20128L288%20288L128%20288C110.3%20288%2096%20302.3%2096%20320C96%20337.7%20110.3%20352%20128%20352L288%20352L288%20512C288%20529.7%20302.3%20544%20320%20544C337.7%20544%20352%20529.7%20352%20512L352%20352L512%20352C529.7%20352%20544%20337.7%20544%20320C544%20302.3%20529.7%20288%20512%20288L352%20288L352%20128z'/%3e%3c/svg%3e";

const plusBlack = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20d='M352%20128C352%20110.3%20337.7%2096%20320%2096C302.3%2096%20288%20110.3%20288%20128L288%20288L128%20288C110.3%20288%2096%20302.3%2096%20320C96%20337.7%20110.3%20352%20128%20352L288%20352L288%20512C288%20529.7%20302.3%20544%20320%20544C337.7%20544%20352%20529.7%20352%20512L352%20352L512%20352C529.7%20352%20544%20337.7%20544%20320C544%20302.3%20529.7%20288%20512%20288L352%20288L352%20128z'/%3e%3c/svg%3e";

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const {createElementVNode:_createElementVNode$1,unref:_unref,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2} = await importShared('vue');


const _hoisted_1$2 = { class: "list-sidebar" };
const _hoisted_2 = { class: "add-list-button" };
const _hoisted_3 = ["src"];
const {ref,computed,onMounted,onUnmounted} = await importShared('vue');
 // Import des fonctions Vue nécessaires


const _sfc_main$2 = {
  __name: 'Sidebar',
  setup(__props) {

const isDark = ref(false); // Variable réactive pour stocker le thème (false = clair, true = sombre)

onMounted(() => { // Exécuté quand le composant est monté

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)'); // Observe le thème système

  isDark.value = mediaQuery.matches; // Initialise isDark selon le thème actuel

  const handler = (e) => { // Fonction appelée quand le thème change
    isDark.value = e.matches; // Met à jour la valeur en fonction du nouveau thème
  };

  mediaQuery.addEventListener('change', handler); // Écoute les changements du thème système

  onUnmounted(() => { // Exécuté quand le composant est détruit
    mediaQuery.removeEventListener('change', handler); // Supprime l'écouteur pour éviter les fuites mémoire
  });

});



return (_ctx, _cache) => {
  return (_openBlock$2(), _createElementBlock$2("nav", _hoisted_1$2, [
    _cache[1] || (_cache[1] = _createElementVNode$1("h2", { class: "sidebar-title" }, "Mes Listes", -1)),
    _createElementVNode$1("button", _hoisted_2, [
      _createElementVNode$1("img", {
        class: "icon-plus",
        src: isDark.value ? _unref(plusWhite) : _unref(plusBlack),
        alt: "ajouter une liste"
      }, null, 8, _hoisted_3),
      _cache[0] || (_cache[0] = _createElementVNode$1("p", { class: "button-text" }, "Nouvelle Liste", -1))
    ])
  ]))
}
}

};
const Sidebar = /*#__PURE__*/_export_sfc(_sfc_main$2, [['__scopeId',"data-v-6d5385c9"]]);

const _sfc_main$1 = {  };
const {createElementVNode:_createElementVNode,createTextVNode:_createTextVNode,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');


const _hoisted_1$1 = { class: "list-results" };

function _sfc_render(_ctx, _cache) {
  return (_openBlock$1(), _createElementBlock$1("div", _hoisted_1$1, _cache[0] || (_cache[0] = [
    _createElementVNode("h2", null, "Résultats de la recherche", -1),
    _createElementVNode("p", null, [
      _createTextVNode("Aucun résultat trouvé. "),
      _createElementVNode("span")
    ], -1)
  ])))
}
const ListResults = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render],['__scopeId',"data-v-0c4e90c6"]]);

const {createVNode:_createVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');


const _hoisted_1 = { class: "liste-view" };

const _sfc_main = {
  __name: 'ListeView',
  setup(__props) {


return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(Sidebar),
    _createVNode(ListResults)
  ]))
}
}

};
const ListeView = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-c224454a"]]);

export { _export_sfc as _, ListeView as default };
