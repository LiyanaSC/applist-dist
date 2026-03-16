import { importShared } from './__federation_fn_import-dmqIiFee.js';
import ListeView, { _ as _export_sfc } from './__federation_expose_ListeView-wKvfqCt9.js';

const {createElementVNode:_createElementVNode,createVNode:_createVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');


const _hoisted_1 = { class: "app-liste" };


const _sfc_main = {
  __name: 'App',
  setup(__props) {

//import Sidebar from './Layout/Sidebar.vue';
//import ListResults from './components/ListResults.vue';
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; // Vérifie si l'utilisateur préfère le mode sombre
// Si l'utilisateur préfère le mode sombre, on applique le thème sombre, sinon on applique le thème clair
document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');

return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _cache[0] || (_cache[0] = _createElementVNode("h1", null, "Title test", -1)),
    _createVNode(ListeView)
  ]))
}
}

};
const App = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-27f41f3c"]]);

const {createApp} = await importShared('vue');

createApp(App).mount('#app');

window.addEventListener('error', function (event) {
  console.error("Erreur JavaScript capturée :", event.message);
  console.log("Fichier :", event.filename);
  console.log("Ligne :", event.lineno);
  console.log("Colonne :", event.colno);
  console.log("Objet erreur complet :", event.error);
});
