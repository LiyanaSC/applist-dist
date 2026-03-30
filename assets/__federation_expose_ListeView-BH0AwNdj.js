import { importShared } from './__federation_fn_import-dmqIiFee.js';

const plusWhite = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(255,%20255,%20255)'%20d='M352%20128C352%20110.3%20337.7%2096%20320%2096C302.3%2096%20288%20110.3%20288%20128L288%20288L128%20288C110.3%20288%2096%20302.3%2096%20320C96%20337.7%20110.3%20352%20128%20352L288%20352L288%20512C288%20529.7%20302.3%20544%20320%20544C337.7%20544%20352%20529.7%20352%20512L352%20352L512%20352C529.7%20352%20544%20337.7%20544%20320C544%20302.3%20529.7%20288%20512%20288L352%20288L352%20128z'/%3e%3c/svg%3e";

const plusBlack = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20d='M352%20128C352%20110.3%20337.7%2096%20320%2096C302.3%2096%20288%20110.3%20288%20128L288%20288L128%20288C110.3%20288%2096%20302.3%2096%20320C96%20337.7%20110.3%20352%20128%20352L288%20352L288%20512C288%20529.7%20302.3%20544%20320%20544C337.7%20544%20352%20529.7%20352%20512L352%20352L512%20352C529.7%20352%20544%20337.7%20544%20320C544%20302.3%20529.7%20288%20512%20288L352%20288L352%20128z'/%3e%3c/svg%3e";

// tableau de types de listes disponibles


const typeList = [
  {
    value: 'classic',
    label: 'Liste',
    icon: new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(135,%20110,%20193)'%20d='M96%20160C96%20124.7%20124.7%2096%20160%2096L480%2096C515.3%2096%20544%20124.7%20544%20160L544%20480C544%20515.3%20515.3%20544%20480%20544L160%20544C124.7%20544%2096%20515.3%2096%20480L96%20160zM160%20160L160%20224L224%20224L224%20160L160%20160zM480%20160L288%20160L288%20224L480%20224L480%20160zM160%20288L160%20352L224%20352L224%20288L160%20288zM480%20288L288%20288L288%20352L480%20352L480%20288zM160%20416L160%20480L224%20480L224%20416L160%20416zM480%20416L288%20416L288%20480L480%20480L480%20416z'/%3e%3c/svg%3e", import.meta.url).href,
    image: new URL("/applist-dist/assets/img-classic-pAwxmkJp.png", import.meta.url).href,
    color: 'var(--light-pink)',
    description: 'Une liste basique: Vous notez ce que vous devez faire et vous cochez quand c’est terminé.'
  },
  {
    value: 'analytics',
    label: 'Analyse',
    icon: new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(135,%20110,%20193)'%20d='M160%2096C124.7%2096%2096%20124.7%2096%20160L96%20480C96%20515.3%20124.7%20544%20160%20544L480%20544C515.3%20544%20544%20515.3%20544%20480L544%20160C544%20124.7%20515.3%2096%20480%2096L160%2096zM216%20288C229.3%20288%20240%20298.7%20240%20312L240%20424C240%20437.3%20229.3%20448%20216%20448C202.7%20448%20192%20437.3%20192%20424L192%20312C192%20298.7%20202.7%20288%20216%20288zM400%20376C400%20362.7%20410.7%20352%20424%20352C437.3%20352%20448%20362.7%20448%20376L448%20424C448%20437.3%20437.3%20448%20424%20448C410.7%20448%20400%20437.3%20400%20424L400%20376zM320%20192C333.3%20192%20344%20202.7%20344%20216L344%20424C344%20437.3%20333.3%20448%20320%20448C306.7%20448%20296%20437.3%20296%20424L296%20216C296%20202.7%20306.7%20192%20320%20192z'/%3e%3c/svg%3e", import.meta.url).href,
    image: new URL("/applist-dist/assets/img-analytics-undb9DMX.png", import.meta.url).href,
    color: 'var(--light-lavender)',
    description: 'Une liste pour analyser vos habitudes: Vous notez des choses et vous voyez à quelle fréquence elles se produisent.'
  },
  {
    value: 'daily',
    label: 'Tâches',
    icon: new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(135,%20110,%20193)'%20d='M320%2064C461.4%2064%20576%20178.6%20576%20320C576%20461.4%20461.4%20576%20320%20576C178.6%20576%2064%20461.4%2064%20320C64%20178.6%20178.6%2064%20320%2064zM296%20184L296%20320C296%20328%20300%20335.5%20306.7%20340L402.7%20404C413.7%20411.4%20428.6%20408.4%20436%20397.3C443.4%20386.2%20440.4%20371.4%20429.3%20364L344%20307.2L344%20184C344%20170.7%20333.3%20160%20320%20160C306.7%20160%20296%20170.7%20296%20184z'/%3e%3c/svg%3e", import.meta.url).href,
    image: new URL("/applist-dist/assets/img-daily-DP-7SNxV.png", import.meta.url).href,
    color: 'var(--light-blue)',
    description: 'Une liste pour garder un oeil sur les tâches du quotidien, ou de la semaine, afin de ne plus les oublier.'
  }
];

const updateIcon = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(27,%2052,%2097)'%20d='M100.4%20417.2C104.5%20402.6%20112.2%20389.3%20123%20378.5L304.2%20197.3L338.1%20163.4C354.7%20180%20389.4%20214.7%20442.1%20267.4L476%20301.3L442.1%20335.2L260.9%20516.4C250.2%20527.1%20236.8%20534.9%20222.2%20539L94.4%20574.6C86.1%20576.9%2077.1%20574.6%2071%20568.4C64.9%20562.2%2062.6%20553.3%2064.9%20545L100.4%20417.2zM156%20413.5C151.6%20418.2%20148.4%20423.9%20146.7%20430.1L122.6%20517L209.5%20492.9C215.9%20491.1%20221.7%20487.8%20226.5%20483.2L155.9%20413.5zM510%20267.4C493.4%20250.8%20458.7%20216.1%20406%20163.4L372%20129.5C398.5%20103%20413.4%2088.1%20416.9%2084.6C430.4%2071%20448.8%2063.4%20468%2063.4C487.2%2063.4%20505.6%2071%20519.1%2084.6L554.8%20120.3C568.4%20133.9%20576%20152.3%20576%20171.4C576%20190.5%20568.4%20209%20554.8%20222.5C551.3%20226%20536.4%20240.9%20509.9%20267.4z'/%3e%3c/svg%3e";

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const {unref:_unref$2,createElementVNode:_createElementVNode$3,openBlock:_openBlock$4,createElementBlock:_createElementBlock$4} = await importShared('vue');


const _hoisted_1$4 = { class: "update-icon-container" };
const _hoisted_2$2 = ["src"];


const _sfc_main$4 = {
  __name: 'updateIcon',
  setup(__props) {


return (_ctx, _cache) => {
  return (_openBlock$4(), _createElementBlock$4("div", _hoisted_1$4, [
    _createElementVNode$3("img", {
      class: "update-icon",
      src: _unref$2(updateIcon),
      alt: "icon de mise à jour"
    }, null, 8, _hoisted_2$2)
  ]))
}
}

};
const UpdateIcon = /*#__PURE__*/_export_sfc(_sfc_main$4, [['__scopeId',"data-v-a7335689"]]);

const {unref:_unref$1,createVNode:_createVNode$1,createElementVNode:_createElementVNode$2,vModelText:_vModelText,withDirectives:_withDirectives,renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock$3,createElementBlock:_createElementBlock$3,toDisplayString:_toDisplayString,normalizeClass:_normalizeClass,withModifiers:_withModifiers,normalizeStyle:_normalizeStyle} = await importShared('vue');


const _hoisted_1$3 = { class: "form-header" };
const _hoisted_2$1 = { class: "input-group" };
const _hoisted_3 = { class: "input-group" };
const _hoisted_4 = { class: "type-select" };
const _hoisted_5 = ["onClick"];
const _hoisted_6 = { class: "type-name" };
const _hoisted_7 = ["src"];
const _hoisted_8 = { class: "type-description" };
const _hoisted_9 = { class: "action-buttons" };

const {ref: ref$1} = await importShared('vue');

// état du formulaire

const _sfc_main$3 = {
  __name: 'chooseListTitle',
  emits: ['create'],
  setup(__props, { emit: __emit }) {

const title = ref$1('');
const selectedType = ref$1('classic');


// emit vers parent
const emit = __emit;

// submit
function handleSubmit() {
  if (!title.value.trim()) return

  emit('create', {
    title: title.value,
    type: selectedType.value,
    isComplete: false
  });

  // reset
  title.value = '';
  selectedType.value = 'classic';
}


return (_ctx, _cache) => {
  return (_openBlock$3(), _createElementBlock$3("div", {
    class: "choose-list-title-form",
    style: _normalizeStyle({ backgroundColor: _unref$1(typeList).find(type => type.value === selectedType.value)?.color || 'white' })
  }, [
    _createElementVNode$2("div", _hoisted_1$3, [
      _createVNode$1(UpdateIcon),
      _cache[2] || (_cache[2] = _createElementVNode$2("h3", { class: "form-title" }, "Créer une nouvelle liste ✨", -1))
    ]),
    _cache[6] || (_cache[6] = _createElementVNode$2("p", { class: "form-subtitle" }, "Donnez un nom à votre liste pour mieux vous organiser ✨", -1)),
    _createElementVNode$2("form", {
      onSubmit: _withModifiers(handleSubmit, ["prevent"])
    }, [
      _createElementVNode$2("div", _hoisted_2$1, [
        _cache[3] || (_cache[3] = _createElementVNode$2("label", { for: "title" }, "Nom de la liste", -1)),
        _withDirectives(_createElementVNode$2("input", {
          class: "title-input",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((title).value = $event)),
          type: "text",
          placeholder: "Ma super liste"
        }, null, 512), [
          [_vModelText, title.value]
        ])
      ]),
      _createElementVNode$2("div", _hoisted_3, [
        _cache[4] || (_cache[4] = _createElementVNode$2("p", { for: "type" }, "Type de liste", -1)),
        _createElementVNode$2("div", _hoisted_4, [
          (_openBlock$3(true), _createElementBlock$3(_Fragment, null, _renderList(_unref$1(typeList), (type) => {
            return (_openBlock$3(), _createElementBlock$3("div", {
              class: _normalizeClass(["type-option", { selected: selectedType.value === type.value }]),
              key: type.value,
              onClick: $event => (selectedType.value = type.value)
            }, [
              _createElementVNode$2("p", _hoisted_6, _toDisplayString(type.label), 1),
              _createElementVNode$2("img", {
                class: "type-image",
                src: type.image,
                alt: ""
              }, null, 8, _hoisted_7)
            ], 10, _hoisted_5))
          }), 128))
        ]),
        _createElementVNode$2("p", _hoisted_8, _toDisplayString(_unref$1(typeList).find(type => type.value === selectedType.value)?.description), 1)
      ]),
      _createElementVNode$2("div", _hoisted_9, [
        _createElementVNode$2("button", {
          class: "secondary-button",
          type: "button",
          onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.handleCancel && _ctx.handleCancel(...args)))
        }, " Annuler "),
        _cache[5] || (_cache[5] = _createElementVNode$2("button", {
          class: "super-action-button submit-button",
          type: "submit"
        }, " Créer ", -1))
      ])
    ], 32)
  ], 4))
}
}

};

const {createElementVNode:_createElementVNode$1,unref:_unref,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2,createCommentVNode:_createCommentVNode,createBlock:_createBlock} = await importShared('vue');


const _hoisted_1$2 = { class: "list-sidebar" };
const _hoisted_2 = ["src"];
const {ref,computed,onMounted,onUnmounted} = await importShared('vue');
// ÉTAT POUR AFFICHER LE FORMULAIRE DE CRÉATION DE LISTE

const _sfc_main$2 = {
  __name: 'Sidebar',
  setup(__props) {

const showForm = ref(false); // Variable réactive pour contrôler l'affichage du formulaire 


// -------------------------GESTION DU THÈME (SOMBRE/CLAIR)-------------------------
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
    _cache[2] || (_cache[2] = _createElementVNode$1("h2", { class: "sidebar-title" }, "Mes Listes", -1)),
    (!showForm.value)
      ? (_openBlock$2(), _createElementBlock$2("button", {
          key: 0,
          class: "add-list-button",
          onClick: _cache[0] || (_cache[0] = $event => (showForm.value = true))
        }, [
          _createElementVNode$1("img", {
            class: "icon-plus",
            src: isDark.value ? _unref(plusWhite) : _unref(plusBlack),
            alt: "ajouter une liste"
          }, null, 8, _hoisted_2),
          _cache[1] || (_cache[1] = _createElementVNode$1("p", { class: "button-text" }, "Nouvelle Liste", -1))
        ]))
      : _createCommentVNode("", true),
    (showForm.value)
      ? (_openBlock$2(), _createBlock(_sfc_main$3, {
          key: 1,
          onCreate: _ctx.handleCreate
        }, null, 8, ["onCreate"]))
      : _createCommentVNode("", true)
  ]))
}
}

};
const Sidebar = /*#__PURE__*/_export_sfc(_sfc_main$2, [['__scopeId',"data-v-383c6b65"]]);

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
