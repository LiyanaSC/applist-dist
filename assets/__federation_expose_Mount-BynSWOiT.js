import { importShared } from './__federation_fn_import-BMMB1g9W.js';

const plusWhite = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(255,%20255,%20255)'%20d='M352%20128C352%20110.3%20337.7%2096%20320%2096C302.3%2096%20288%20110.3%20288%20128L288%20288L128%20288C110.3%20288%2096%20302.3%2096%20320C96%20337.7%20110.3%20352%20128%20352L288%20352L288%20512C288%20529.7%20302.3%20544%20320%20544C337.7%20544%20352%20529.7%20352%20512L352%20352L512%20352C529.7%20352%20544%20337.7%20544%20320C544%20302.3%20529.7%20288%20512%20288L352%20288L352%20128z'/%3e%3c/svg%3e";

const plusBlack = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20d='M352%20128C352%20110.3%20337.7%2096%20320%2096C302.3%2096%20288%20110.3%20288%20128L288%20288L128%20288C110.3%20288%2096%20302.3%2096%20320C96%20337.7%20110.3%20352%20128%20352L288%20352L288%20512C288%20529.7%20302.3%20544%20320%20544C337.7%20544%20352%20529.7%20352%20512L352%20352L512%20352C529.7%20352%20544%20337.7%20544%20320C544%20302.3%20529.7%20288%20512%20288L352%20288L352%20128z'/%3e%3c/svg%3e";

// tableau de types de listes disponibles

const typeList = [
  {
    type: 'classic',
    label: 'classique',
    icon: new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(135,%20110,%20193)'%20d='M96%20160C96%20124.7%20124.7%2096%20160%2096L480%2096C515.3%2096%20544%20124.7%20544%20160L544%20480C544%20515.3%20515.3%20544%20480%20544L160%20544C124.7%20544%2096%20515.3%2096%20480L96%20160zM160%20160L160%20224L224%20224L224%20160L160%20160zM480%20160L288%20160L288%20224L480%20224L480%20160zM160%20288L160%20352L224%20352L224%20288L160%20288zM480%20288L288%20288L288%20352L480%20352L480%20288zM160%20416L160%20480L224%20480L224%20416L160%20416zM480%20416L288%20416L288%20480L480%20480L480%20416z'/%3e%3c/svg%3e", import.meta.url).href,
    image: new URL("/applist-dist/assets/img-classic-pAwxmkJp.png", import.meta.url).href,
    color: 'var(--light-pink)',
    description: 'Ici vous notez ce que vous devez faire et vous cochez quand c’est terminé.'
  },
 
 /* à mettre dans l'applications GESTION DE TACHES!
  {
    type: 'daily',
    label: 'quotidiennes',
    icon: new URL('../assets/list-daily.svg', import.meta.url).href,
    image: new URL('../assets/img-daily.png', import.meta.url).href,
    color: 'var(--light-blue)',
    description: 'Une liste pour garder un oeil sur les tâches du quotidien: vous checker au fur et à mesure que vos tâches de la journée sont accomplies. Elle se réinitialise tous les jours pour vous permettre de recommencer à zéro chaque matin.'
  },
  {
    type: 'weekly',
    label: 'hebdo',
    icon: new URL('../assets/list-weekly.svg', import.meta.url).href,
    image: new URL('../assets/img-weekly.png', import.meta.url).href,
    color: 'var(--light-beige)',
    description: 'Une liste pour organiser vos tâches de la semaine : Vous garder un oeil sur vos tâches hebdomadaires. Elle se réinitialise chaque semaine pour vous permettre de recommencer à zéro chaque lundi.'

  }
  */
];

const updateIcon = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(27,%2052,%2097)'%20d='M100.4%20417.2C104.5%20402.6%20112.2%20389.3%20123%20378.5L304.2%20197.3L338.1%20163.4C354.7%20180%20389.4%20214.7%20442.1%20267.4L476%20301.3L442.1%20335.2L260.9%20516.4C250.2%20527.1%20236.8%20534.9%20222.2%20539L94.4%20574.6C86.1%20576.9%2077.1%20574.6%2071%20568.4C64.9%20562.2%2062.6%20553.3%2064.9%20545L100.4%20417.2zM156%20413.5C151.6%20418.2%20148.4%20423.9%20146.7%20430.1L122.6%20517L209.5%20492.9C215.9%20491.1%20221.7%20487.8%20226.5%20483.2L155.9%20413.5zM510%20267.4C493.4%20250.8%20458.7%20216.1%20406%20163.4L372%20129.5C398.5%20103%20413.4%2088.1%20416.9%2084.6C430.4%2071%20448.8%2063.4%20468%2063.4C487.2%2063.4%20505.6%2071%20519.1%2084.6L554.8%20120.3C568.4%20133.9%20576%20152.3%20576%20171.4C576%20190.5%20568.4%20209%20554.8%20222.5C551.3%20226%20536.4%20240.9%20509.9%20267.4z'/%3e%3c/svg%3e";

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const {unref:_unref$4,createElementVNode:_createElementVNode$6,openBlock:_openBlock$7,createElementBlock:_createElementBlock$7} = await importShared('vue');


const _hoisted_1$6 = { class: "update-icon-container" };
const _hoisted_2$4 = ["src"];


const _sfc_main$6 = {
  __name: 'updateIcon',
  setup(__props) {


return (_ctx, _cache) => {
  return (_openBlock$7(), _createElementBlock$7("div", _hoisted_1$6, [
    _createElementVNode$6("img", {
      class: "update-icon",
      src: _unref$4(updateIcon),
      alt: "icon de mise à jour"
    }, null, 8, _hoisted_2$4)
  ]))
}
}

};
const UpdateIcon = /*#__PURE__*/_export_sfc(_sfc_main$6, [['__scopeId',"data-v-a7335689"]]);

const {unref:_unref$3,createVNode:_createVNode$4,createElementVNode:_createElementVNode$5,vModelText:_vModelText$2,withDirectives:_withDirectives$2,renderList:_renderList$2,Fragment:_Fragment$2,openBlock:_openBlock$6,createElementBlock:_createElementBlock$6,toDisplayString:_toDisplayString$2,normalizeClass:_normalizeClass,withModifiers:_withModifiers,normalizeStyle:_normalizeStyle$1} = await importShared('vue');


const _hoisted_1$5 = { class: "form-header" };
const _hoisted_2$3 = { class: "input-group" };
const _hoisted_3$2 = { class: "input-group" };
const _hoisted_4$2 = { class: "type-select" };
const _hoisted_5$2 = ["onClick"];
const _hoisted_6$2 = { class: "type-name" };
const _hoisted_7$2 = ["src"];
const _hoisted_8$2 = { class: "type-description" };

const {ref: ref$4} = await importShared('vue');

// état du formulaire

const _sfc_main$5 = {
  __name: 'chooseListTitle',
  emits: ['create', 'cancel'],
  setup(__props, { emit: __emit }) {


const title = ref$4('');
const selectedType = ref$4('classic');


// emit vers parent
const emit = __emit;

// submit
function handleSubmit() {
  if (!title.value.trim()) return

  emit('create', {
    title: title.value,
    type: selectedType.value,
    isComplete: false,
    items: []
  });

  // reset
  title.value = '';
  selectedType.value = 'classic';
}

function handleCancel() {
  emit('cancel');
  // reset
  title.value = '';
  selectedType.value = 'classic';
}


return (_ctx, _cache) => {
  return (_openBlock$6(), _createElementBlock$6("div", {
    class: "choose-list-title-form",
    style: _normalizeStyle$1({ backgroundColor: _unref$3(typeList).find(item => item.type === selectedType.value)?.color || 'white' })
  }, [
    _createElementVNode$5("div", _hoisted_1$5, [
      _createVNode$4(UpdateIcon),
      _cache[1] || (_cache[1] = _createElementVNode$5("h3", { class: "form-title" }, "Créer une nouvelle liste ✨", -1))
    ]),
    _cache[5] || (_cache[5] = _createElementVNode$5("p", { class: "form-subtitle" }, "Donnez un nom à votre liste pour mieux vous organiser ✨", -1)),
    _createElementVNode$5("form", {
      onSubmit: _withModifiers(handleSubmit, ["prevent"])
    }, [
      _createElementVNode$5("div", _hoisted_2$3, [
        _cache[2] || (_cache[2] = _createElementVNode$5("label", { for: "title" }, "Nom de la liste", -1)),
        _withDirectives$2(_createElementVNode$5("input", {
          class: "title-input",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((title).value = $event)),
          type: "text",
          placeholder: "Ma super liste"
        }, null, 512), [
          [_vModelText$2, title.value]
        ])
      ]),
      _createElementVNode$5("div", _hoisted_3$2, [
        _cache[3] || (_cache[3] = _createElementVNode$5("p", { for: "type" }, "Type de liste", -1)),
        _createElementVNode$5("div", _hoisted_4$2, [
          (_openBlock$6(true), _createElementBlock$6(_Fragment$2, null, _renderList$2(_unref$3(typeList), (item) => {
            return (_openBlock$6(), _createElementBlock$6("div", {
              class: _normalizeClass(["type-option", { selected: selectedType.value === item.type }]),
              key: item.type,
              onClick: $event => (selectedType.value = item.type)
            }, [
              _createElementVNode$5("p", _hoisted_6$2, _toDisplayString$2(item.label), 1),
              _createElementVNode$5("img", {
                class: "type-image",
                src: item.image,
                alt: ""
              }, null, 8, _hoisted_7$2)
            ], 10, _hoisted_5$2))
          }), 128))
        ]),
        _createElementVNode$5("p", _hoisted_8$2, _toDisplayString$2(_unref$3(typeList).find(item => item.type === selectedType.value)?.description), 1)
      ]),
      _createElementVNode$5("div", { class: "action-buttons" }, [
        _createElementVNode$5("button", {
          class: "secondary-button",
          type: "button",
          onClick: handleCancel
        }, " Annuler "),
        _cache[4] || (_cache[4] = _createElementVNode$5("button", {
          class: "super-action-button submit-button",
          type: "submit"
        }, " Créer ", -1))
      ])
    ], 32)
  ], 4))
}
}

};

const {defineStore} = await importShared('pinia');

const {ref: ref$3} = await importShared('vue');


const useListStore = defineStore('list', () => {
    // CREER une liste de listes, chaque liste ayant un id, un titre, un type et un tableau d'items
    

    // RECUPERE les listes du localStorage ou initialise un tableau vide si aucune liste n'est trouvée
    const lists = ref$3(localStorage.getItem('lists') ? JSON.parse(localStorage.getItem('lists')) : []); 
    
    
    //fonction pour SELECTIONNE UNE LISTE par le biais de son index parmis le tableau de listes
    function selectList(index) {
         selectedList.value = lists.value[index] || null;
          console.log('Liste sélectionnée :', selectedList.value);
    }

    // Variable réactive pour STOCKER LA LISTE SELECTIONNEE, initialisée à null
    const selectedList = ref$3(null); // Variable pour stocker la liste sélectionnée
    
    //AJOUTER un nouvel élément à la liste sélectionnée
    function addItemToSelectedList(entry) {
    if (!selectedList.value) return

    const newItem = {
        id: Date.now(), // 🔥 important pour v-for
        entry: entry,
        isCompleted: false,
        occurrence: 0,
        done: false
    };

    selectedList.value.items.push(newItem);

    localStorage.setItem('lists', JSON.stringify(lists.value));
    }

    //MET À JOUR L'ÉTAT de complétion d'un élément de la liste sélectionnée
    function toggleItemCompletion(itemId) {
        if (!selectedList.value) return// Vérifie si une liste est sélectionnée 

        if (selectedList.value.type === 'classic') {
            const item = selectedList.value.items.find(item => item.id === itemId);
            if (item) {
                item.isCompleted = !item.isCompleted;
                console.log('État de complétion mis à jour pour l\'élément :', item, !item.isCompleted);
                localStorage.setItem('lists', JSON.stringify(lists.value));
            }
        }

    }

    //SUPPRIME UNE LISTE du tableau de listes en utilisant son index
    function deleteList(title) {
        console.log("hello",lists.value.title);
       //const updatedLists = lists.value.title.filter(item => item.title !== title)// Filtre les listes pour exclure celle avec le titre spécifié
       // localStorage.setItem('lists', JSON.stringify(updatedLists))
        
    }
    // Retourne les données et les fonctions pour être utilisées dans les composants
    return {
        lists,
        selectList,
        selectedList,
        addItemToSelectedList,
        toggleItemCompletion,
        deleteList
    }       
});

const {createElementVNode:_createElementVNode$4,toDisplayString:_toDisplayString$1,openBlock:_openBlock$5,createElementBlock:_createElementBlock$5,createCommentVNode:_createCommentVNode$2,vModelText:_vModelText$1,withKeys:_withKeys$1,withDirectives:_withDirectives$1,unref:_unref$2,normalizeStyle:_normalizeStyle} = await importShared('vue');


const _hoisted_1$4 = { class: "list-title-content" };
const _hoisted_2$2 = ["src"];
const _hoisted_3$1 = {
  key: 0,
  class: "button-text"
};
const _hoisted_4$1 = {
  key: 0,
  class: "action-icons"
};
const _hoisted_5$1 = ["src"];
const _hoisted_6$1 = ["src"];
const _hoisted_7$1 = {
  key: 1,
  class: "action-icons"
};
const _hoisted_8$1 = ["src"];
const _hoisted_9$1 = ["src"];

const {computed: computed$2,ref: ref$2} = await importShared('vue');


const _sfc_main$4 = {
  __name: 'listTitle',
  props: {
  title: {
    type: String,
    required: true,
      },
  idtitle: {
        type: Number,
        required: true
      },
  isComplete: {
    type: Boolean,
    default: false
  },
  type: {
    type: String, // 
    required: true,
    validator: (value) => {
      return typeList.some(item => item.type === value) // Vérifie que le type est valide en comparant avec les types définis dans typeList
    }
  }
},
  emits: ['edit', 'delete'],
  setup(__props, { emit: __emit }) {

const listStore = useListStore();

//--------------------------Base du template-------------------------
const pencil = new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(27,%2052,%2097)'%20d='M100.4%20417.2C104.5%20402.6%20112.2%20389.3%20123%20378.5L304.2%20197.3L338.1%20163.4C354.7%20180%20389.4%20214.7%20442.1%20267.4L476%20301.3L442.1%20335.2L260.9%20516.4C250.2%20527.1%20236.8%20534.9%20222.2%20539L94.4%20574.6C86.1%20576.9%2077.1%20574.6%2071%20568.4C64.9%20562.2%2062.6%20553.3%2064.9%20545L100.4%20417.2zM156%20413.5C151.6%20418.2%20148.4%20423.9%20146.7%20430.1L122.6%20517L209.5%20492.9C215.9%20491.1%20221.7%20487.8%20226.5%20483.2L155.9%20413.5zM510%20267.4C493.4%20250.8%20458.7%20216.1%20406%20163.4L372%20129.5C398.5%20103%20413.4%2088.1%20416.9%2084.6C430.4%2071%20448.8%2063.4%20468%2063.4C487.2%2063.4%20505.6%2071%20519.1%2084.6L554.8%20120.3C568.4%20133.9%20576%20152.3%20576%20171.4C576%20190.5%20568.4%20209%20554.8%20222.5C551.3%20226%20536.4%20240.9%20509.9%20267.4z'/%3e%3c/svg%3e", import.meta.url).href;
const trash = new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(27,%2052,%2097)'%20d='M232.7%2069.9L224%2096L128%2096C110.3%2096%2096%20110.3%2096%20128C96%20145.7%20110.3%20160%20128%20160L512%20160C529.7%20160%20544%20145.7%20544%20128C544%20110.3%20529.7%2096%20512%2096L416%2096L407.3%2069.9C402.9%2056.8%20390.7%2048%20376.9%2048L263.1%2048C249.3%2048%20237.1%2056.8%20232.7%2069.9zM512%20208L128%20208L149.1%20531.1C150.7%20556.4%20171.7%20576%20197%20576L443%20576C468.3%20576%20489.3%20556.4%20490.9%20531.1L512%20208z'/%3e%3c/svg%3e", import.meta.url).href;
const check = new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='%234caf8d'%20d='M530.8%20134.1C545.1%20144.5%20548.3%20164.5%20537.9%20178.8L281.9%20530.8C276.4%20538.4%20267.9%20543.1%20258.5%20543.9C249.1%20544.7%20240%20541.2%20233.4%20534.6L105.4%20406.6C92.9%20394.1%2092.9%20373.8%20105.4%20361.3C117.9%20348.8%20138.2%20348.8%20150.7%20361.3L252.2%20462.8L486.2%20141.1C496.6%20126.8%20516.6%20123.6%20530.9%20134z'/%3e%3c/svg%3e", import.meta.url).href;
const cross = new URL("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23e35d6a'%20d='M183.1%20137.4C170.6%20124.9%20150.3%20124.9%20137.8%20137.4C125.3%20149.9%20125.3%20170.2%20137.8%20182.7L275.2%20320L137.9%20457.4C125.4%20469.9%20125.4%20490.2%20137.9%20502.7C150.4%20515.2%20170.7%20515.2%20183.2%20502.7L320.5%20365.3L457.9%20502.6C470.4%20515.1%20490.7%20515.1%20503.2%20502.6C515.7%20490.1%20515.7%20469.8%20503.2%20457.3L365.8%20320L503.1%20182.6C515.6%20170.1%20515.6%20149.8%20503.1%20137.3C490.6%20124.8%20470.3%20124.8%20457.8%20137.3L320.5%20274.7L183.1%20137.4z'/%3e%3c/svg%3e", import.meta.url).href;

const props = __props;
 const imageSrc = computed$2(() => {
  return typeList.find(item => item.type === props.type)?.icon
});

const colorType = computed$2(() => {
  return typeList.find(item => item.type === props.type)?.color
});

//---------------------------GESTION DE L'ÉDITION ET DE LA SUPPRESSION DE LISTE-------------------------

const title = computed$2(() => props.title); // Computed pour le titre de la liste
const newTitle = ref$2(props.title); // Variable réactive pour stocker le nouveau titre lors de l'édition
const isEditing = ref$2(false); // Variable réactive pour contrôler le mode édition

// Emit pour les actions d'édition et de suppression
const emit = __emit;

function handleEdit() {
  emit('edit', newTitle.value, props.idtitle); // Émet un événement d'édition avec le nouveau titre de la liste
  isEditing.value = false; // Désactive le mode édition
}
function handleDelete() {
  emit('delete', title.value); // Émet un événement de suppression avec le titre de la liste
}
function SelectList() {
  listStore.selectList(props.idtitle); // Appelle la méthode selectList du store avec l'ID de la liste sélectionnées
}


return (_ctx, _cache) => {
  return (_openBlock$5(), _createElementBlock$5("button", {
    class: "list-title-button",
    style: _normalizeStyle({ background: colorType.value }),
    onClick: SelectList
  }, [
    _createElementVNode$4("div", _hoisted_1$4, [
      _createElementVNode$4("img", {
        class: "icon-list",
        src: imageSrc.value,
        alt: "liste"
      }, null, 8, _hoisted_2$2),
      (!isEditing.value)
        ? (_openBlock$5(), _createElementBlock$5("p", _hoisted_3$1, _toDisplayString$1(newTitle.value), 1))
        : _withDirectives$1((_openBlock$5(), _createElementBlock$5("input", {
            key: 1,
            class: "input-edit",
            type: "text",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((newTitle).value = $event)),
            onKeyup: _withKeys$1(handleEdit, ["enter"])
          }, null, 544)), [
            [_vModelText$1, newTitle.value]
          ])
    ]),
    (!isEditing.value)
      ? (_openBlock$5(), _createElementBlock$5("div", _hoisted_4$1, [
          _createElementVNode$4("img", {
            class: "icon-edit",
            src: _unref$2(pencil),
            alt: "modifier",
            onClick: _cache[1] || (_cache[1] = $event => (isEditing.value = true))
          }, null, 8, _hoisted_5$1),
          _createElementVNode$4("img", {
            class: "icon-edit",
            src: _unref$2(trash),
            alt: "supprimer",
            onClick: handleDelete
          }, null, 8, _hoisted_6$1)
        ]))
      : (_openBlock$5(), _createElementBlock$5("div", _hoisted_7$1, [
          _createElementVNode$4("img", {
            class: "icon-edit",
            src: _unref$2(check),
            alt: "valider",
            onClick: handleEdit
          }, null, 8, _hoisted_8$1),
          _createElementVNode$4("img", {
            class: "icon-edit",
            src: _unref$2(cross),
            alt: "annuler",
            onClick: _cache[2] || (_cache[2] = $event => (isEditing.value = false))
          }, null, 8, _hoisted_9$1)
        ]))
  ], 4))
}
}

};
const ListTitle = /*#__PURE__*/_export_sfc(_sfc_main$4, [['__scopeId',"data-v-9d05c7d4"]]);

const _sfc_main$3 = {  };
const {createElementVNode:_createElementVNode$3,openBlock:_openBlock$4,createElementBlock:_createElementBlock$4} = await importShared('vue');


const _hoisted_1$3 = { class: "starbar" };

function _sfc_render(_ctx, _cache) {
  return (_openBlock$4(), _createElementBlock$4("div", _hoisted_1$3, _cache[0] || (_cache[0] = [
    _createElementVNode$3("div", { class: "left-bar" }, null, -1),
    _createElementVNode$3("p", null, "⭐️", -1),
    _createElementVNode$3("div", { class: "right-bar" }, null, -1)
  ])))
}
const StarBar = /*#__PURE__*/_export_sfc(_sfc_main$3, [['render',_sfc_render],['__scopeId',"data-v-3600db60"]]);

const {createElementVNode:_createElementVNode$2,createVNode:_createVNode$3,unref:_unref$1,openBlock:_openBlock$3,createElementBlock:_createElementBlock$3,createCommentVNode:_createCommentVNode$1,createBlock:_createBlock,renderList:_renderList$1,Fragment:_Fragment$1} = await importShared('vue');


const _hoisted_1$2 = { class: "list-sidebar" };
const _hoisted_2$1 = ["src"];
const {ref: ref$1,computed: computed$1,onMounted,onUnmounted} = await importShared('vue');

const _sfc_main$2 = {
  __name: 'Sidebar',
  setup(__props) {

const listStore = useListStore(); // Utilisation du store pour accéder aux données et fonctions
// -------------------------GESTION DU THÈME (SOMBRE/CLAIR)-------------------------
const isDark = ref$1(false); // Variable réactive pour stocker le thème (false = clair, true = sombre)

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

//--------------------------GESTION DE LA CRÉATION DE LISTE-------------------------
const showForm = ref$1(false); // Variable réactive pour contrôler l'affichage du formulaire 
const listTitle = ref$1([]); // Variable réactive pour stocker les titres des listes existantes

// Récupère les listes du localStorage au démarrage
onMounted(() => {
  const existingLists = JSON.parse(localStorage.getItem('lists')) || [];
  listTitle.value = existingLists;
});

//récupère l'annulation
function handleCancel() {
  showForm.value = false;
}
//récupère la création de liste
function handleCreate(newTitle) {
  // Ici, vous pouvez ajouter la nouvelle liste à votre état global ou local
  console.log('Nouvelle liste créée :', newTitle); // Affiche le nouveau titre de la liste dans la console
  listTitle.value.push(newTitle); // Ajoute la nouvelle liste à la liste des titres
  //je sauvegarde la nouvelle liste dans le localStorage
  const existingLists = JSON.parse(localStorage.getItem('lists')) || []; // Récupère les listes existantes du localStorage ou initialise un tableau vide
  existingLists.push(newTitle); // Ajoute la nouvelle liste au tableau
  localStorage.setItem('lists', JSON.stringify(existingLists)); // Sauvegarde le tableau mis à jour dans le localStorage
  showForm.value = false; // Ferme le formulaire après la création
} 

//--------------------------GESTION DE L'ÉDITION ET DE LA SUPPRESSION DE LISTE-------------------------
function handleDelete(title) {
 listStore.deleteList(title); // Appelle la fonction de suppression du store en passant le titre de la liste à supprimer
}
///LOGIQUE A REVOIR
function handleEdit(newTitle, IdTitle) {
  // Logique pour éditer une liste
  // Vous pouvez implémenter la logique d'édition ici, par exemple en affichant un formulaire d'édition ou en modifiant directement le titre dans la liste
  const existingLists = JSON.parse(localStorage.getItem('lists')) || [];
  const updatedLists = existingLists.map((item, index)  => { // Parcourt les listes existantes
   //je supprime l'élément de la liste à éditer et je le remplace par le nouvel élément
    if (index === IdTitle) {// Si je trouve le titre à éditer (en utilisant l'index IdTitle pour identifier la liste)
      return { ...item, title: newTitle }  // je retourne une nouvelle liste avec le titre mis à jour
    }
    return item // Sinon, on retourne la liste inchangée
  });  
  localStorage.setItem('lists', JSON.stringify(updatedLists));
} 



return (_ctx, _cache) => {
  return (_openBlock$3(), _createElementBlock$3("nav", _hoisted_1$2, [
    _cache[2] || (_cache[2] = _createElementVNode$2("h2", null, " ✨ Mes Listes ✨ ", -1)),
    _createVNode$3(StarBar),
    (!showForm.value)
      ? (_openBlock$3(), _createElementBlock$3("button", {
          key: 0,
          class: "add-list-button",
          onClick: _cache[0] || (_cache[0] = $event => (showForm.value = true))
        }, [
          _createElementVNode$2("img", {
            class: "icon-plus",
            src: isDark.value ? _unref$1(plusWhite) : _unref$1(plusBlack),
            alt: "ajouter une liste"
          }, null, 8, _hoisted_2$1),
          _cache[1] || (_cache[1] = _createElementVNode$2("p", { class: "button-text" }, "Nouvelle Liste", -1))
        ]))
      : _createCommentVNode$1("", true),
    (showForm.value)
      ? (_openBlock$3(), _createBlock(_sfc_main$5, {
          key: 1,
          onCreate: handleCreate,
          onCancel: handleCancel
        }))
      : _createCommentVNode$1("", true),
    (_openBlock$3(true), _createElementBlock$3(_Fragment$1, null, _renderList$1(listTitle.value, (item, index) => {
      return (_openBlock$3(), _createBlock(ListTitle, {
        key: index+item.title,
        idtitle: index,
        title: item.title,
        type: item.type,
        isComplete: item.isComplete,
        onEdit: handleEdit,
        onDelete: handleDelete
      }, null, 8, ["idtitle", "title", "type", "isComplete"]))
    }), 128))
  ]))
}
}

};
const Sidebar = /*#__PURE__*/_export_sfc(_sfc_main$2, [['__scopeId',"data-v-b3a8a308"]]);

const {unref:_unref,toDisplayString:_toDisplayString,createElementVNode:_createElementVNode$1,createVNode:_createVNode$2,createTextVNode:_createTextVNode,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2,createCommentVNode:_createCommentVNode,renderList:_renderList,Fragment:_Fragment,vModelText:_vModelText,withKeys:_withKeys,withDirectives:_withDirectives} = await importShared('vue');


const _hoisted_1$1 = { class: "list-results" };
const _hoisted_2 = { class: "list-results-title" };
const _hoisted_3 = { class: "content-list" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = {
  key: 1,
  class: "list-items-container"
};
const _hoisted_6 = {
  key: 0,
  class: "list-items"
};
const _hoisted_7 = ["id", "checked", "onChange"];
const _hoisted_8 = ["for"];
const _hoisted_9 = {
  key: 1,
  class: "entry-box"
};
const _hoisted_10 = { class: "entry-style" };
const _hoisted_11 = { for: "entry" };
const _hoisted_12 = ["src"];
const _hoisted_13 = {
  key: 2,
  class: "list-items"
};

const {computed,ref} = await importShared('vue');



const _sfc_main$1 = {
  __name: 'ListResults',
  setup(__props) {

const listStore = useListStore();

const entry = ref('');

const addItem = () => {
  if (entry.value.trim() !== '') {
    listStore.addItemToSelectedList(entry.value); // Appelle la méthode du store pour ajouter un nouvel élément à la liste sélectionnée
    entry.value = ''; // Réinitialise le champ de saisie après l'ajout
  }
};



return (_ctx, _cache) => {
  return (_openBlock$2(), _createElementBlock$2("div", _hoisted_1$1, [
    _createElementVNode$1("h3", _hoisted_2, _toDisplayString(_unref(listStore).selectedList?.title || 'Aucune liste sélectionnée'), 1),
    _createVNode$2(StarBar),
    _createElementVNode$1("div", _hoisted_3, [
      (!_unref(listStore).selectedList)
        ? (_openBlock$2(), _createElementBlock$2("p", _hoisted_4, _cache[1] || (_cache[1] = [
            _createTextVNode("Choississez une liste dans la barre latérale pour afficher ses résultats. "),
            _createElementVNode$1("br", null, null, -1),
            _createTextVNode("Ou créez une nouvelle liste pour commencer à ajouter des éléments. "),
            _createElementVNode$1("br", null, null, -1),
            _createElementVNode$1("span", { class: "yellow-heart" }, "💛", -1)
          ])))
        : (_openBlock$2(), _createElementBlock$2("div", _hoisted_5, [
            (_unref(listStore).selectedList.type === 'classic')
              ? (_openBlock$2(), _createElementBlock$2("ul", _hoisted_6, [
                  (_openBlock$2(true), _createElementBlock$2(_Fragment, null, _renderList(_unref(listStore).selectedList.items, (item, index) => {
                    return (_openBlock$2(), _createElementBlock$2("li", {
                      class: "item",
                      key: index
                    }, [
                      _createElementVNode$1("input", {
                        type: "checkbox",
                        id: 'item-' + index,
                        checked: item.isCompleted,
                        onChange: $event => (_unref(listStore).toggleItemCompletion(item.id))
                      }, null, 40, _hoisted_7),
                      _createElementVNode$1("label", {
                        for: 'item-' + index
                      }, _toDisplayString(item.entry), 9, _hoisted_8)
                    ]))
                  }), 128))
                ]))
              : _createCommentVNode("", true),
            (_unref(listStore).selectedList.type === 'classic')
              ? (_openBlock$2(), _createElementBlock$2("p", _hoisted_9, [
                  _createElementVNode$1("span", _hoisted_10, [
                    _createElementVNode$1("label", _hoisted_11, [
                      _createElementVNode$1("img", {
                        src: _unref(plusWhite),
                        alt: "Ajouter",
                        class: "add-entry"
                      }, null, 8, _hoisted_12)
                    ]),
                    _withDirectives(_createElementVNode$1("input", {
                      type: "text",
                      id: "entry",
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((entry).value = $event)),
                      class: "entry-input",
                      onKeyup: _withKeys(addItem, ["enter"]),
                      placeholder: "Ajouter un nouvel élément..."
                    }, null, 544), [
                      [_vModelText, entry.value]
                    ]),
                    _cache[2] || (_cache[2] = _createElementVNode$1("span", null, "✨", -1))
                  ])
                ]))
              : _createCommentVNode("", true),
            (_unref(listStore).selectedList.type === 'daily')
              ? (_openBlock$2(), _createElementBlock$2("ul", _hoisted_13, [
                  (_openBlock$2(true), _createElementBlock$2(_Fragment, null, _renderList(_unref(listStore).selectedList.items, (item, index) => {
                    return (_openBlock$2(), _createElementBlock$2("li", {
                      class: "item",
                      key: index
                    }, [
                      _createElementVNode$1("label", null, _toDisplayString(item.entry), 1)
                    ]))
                  }), 128))
                ]))
              : _createCommentVNode("", true),
            _cache[3] || (_cache[3] = _createElementVNode$1("p", { class: "info" }, "⭐️Appuie sur une Entrée pour ajouter", -1))
          ]))
    ])
  ]))
}
}

};
const ListResults = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-92915ce0"]]);

const {createVNode:_createVNode$1,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1} = await importShared('vue');


const _hoisted_1 = { class: "liste-view" };

const _sfc_main = {
  __name: 'ListeView',
  setup(__props) {


return (_ctx, _cache) => {
  return (_openBlock$1(), _createElementBlock$1("div", _hoisted_1, [
    _createVNode$1(Sidebar),
    _createVNode$1(ListResults)
  ]))
}
}

};
const ListeView = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-fe48a9cb"]]);

const {createElementVNode:_createElementVNode,createVNode:_createVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const {createApp} = await importShared('vue');

const {createPinia} = await importShared('pinia');
function createMyApp(Component, el) {
  const app = createApp(Component);
  const pinia = createPinia();
  app.use(pinia);
  app.mount(el);
  console.log("App montée sur", el);
}
function mount(el) {
  if (!el) {
    console.error("❌ container manquant");
    return;
  }
  el.innerHTML = "";
  const container = document.createElement("div");
  container.style.width = "100%";
  container.style.minHeight = "0";
  container.style.flex = "1";
  el.appendChild(container);
  createMyApp(ListeView, container);
}
window.addEventListener("error", function(event) {
  console.error("Erreur JavaScript capturée :", event.message);
  console.log("Fichier :", event.filename);
  console.log("Ligne :", event.lineno);
  console.log("Colonne :", event.colno);
  console.log("Objet erreur complet :", event.error);
});

export { mount };
