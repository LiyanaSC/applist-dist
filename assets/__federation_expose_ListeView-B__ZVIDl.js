import { importShared } from './__federation_fn_import-dmqIiFee.js';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const {createElementVNode:_createElementVNode$1,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2} = await importShared('vue');

const {createElementVNode:_createElementVNode,createTextVNode:_createTextVNode,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');

const {openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');


const _hoisted_1 = { class: "app-liste" };




const _sfc_main = {
  __name: 'App',
  setup(__props) {

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; // Vérifie si l'utilisateur préfère le mode sombre
// Si l'utilisateur préfère le mode sombre, on applique le thème sombre, sinon on applique le thème clair
document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');

return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock("div", _hoisted_1))
}
}

};
const App = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-bbf40608"]]);

export { App as default };
