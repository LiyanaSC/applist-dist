import { importShared } from './__federation_fn_import-dmqIiFee.js';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const {createElementVNode:_createElementVNode$1,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2} = await importShared('vue');


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
    _cache[0] || (_cache[0] = _createElementVNode$1("h2", { class: "sidebar-title" }, "Mes Listes", -1)),
    _createElementVNode$1("button", _hoisted_2, [
      _createElementVNode$1("img", {
        class: "icon-plus",
        src: _ctx.iconPlusTheme,
        alt: "ajouter une liste"
      }, null, 8, _hoisted_3)
    ])
  ]))
}
}

};
const Sidebar = /*#__PURE__*/_export_sfc(_sfc_main$2, [['__scopeId',"data-v-2794df79"]]);

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
const ListeView = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-4ae6240e"]]);

export { _export_sfc as _, ListeView as default };
