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

const {defineStore} = await importShared('pinia');

const {ref: ref$5} = await importShared('vue');


const useListStore = defineStore('list', () => {
    // Variables réactives
    // Variables pour stocker le titre
    const title = ref$5('');
    // Variable pour stocker le type de liste, initialisée à 'classic'
    const type = ref$5('classic'); 
    // RECUPERE les listes du localStorage ou initialise un tableau vide si aucune liste n'est trouvée
    const lists = ref$5(localStorage.getItem('lists') ? JSON.parse(localStorage.getItem('lists')) : []); 
     // Variable réactive pour STOCKER LA LISTE SELECTIONNEE, initialisée à null
    const selectedList = ref$5(null); 
    const creatingList = ref$5(false); // Variable pour gérer l'état de création d'une liste
    //variable qui montre ou cache les résultats de la liste (pour les mobiles)
    const showListResults = ref$5(false);

    // CREER une liste de listes, chaque liste ayant un id, un titre, un type et un tableau d'items
    function createList() {
        if (!title.value.trim()) return // Vérifie que le titre n'est pas vide ou composé uniquement d'espaces
        const newList = {
            id: Date.now(), // En attendant l'envoie au backend, on utilise l'horodatage comme ID unique
            title: title.value,
            type: type.value,
            items: []
        };
        lists.value.push(newList);
        localStorage.setItem('lists', JSON.stringify(lists.value));
          // reset
        title.value = '';
        type.value = 'classic';
        selectedList.value = newList; // Sélectionne automatiquement la nouvelle liste créée 
        creatingList.value = false; // Ferme le formulaire de création de liste
        showListResults.value = true; // Affiche les résultats de la liste sélectionnée (pour les mobiles)
        console.log('creation a true? :', creatingList.value);       
        console.log('Nouvelle liste créée :', newList);
    }
 
    //fonction pour SELECTIONNE UNE LISTE par le biais de son id parmis le tableau de listes
    function selectList(key) {
         selectedList.value = lists.value.find(list => list.id === key) || null;
         showListResults.value = true;// Affiche les résultats de la liste sélectionnée (pour les mobiles)
          console.log('showListResults après sélection :', showListResults.value);
    }
    //MODIFIE le titre d'une liste dans le tableau de listes en utilisant son id
    function editListTitle(key, newTitle) {
        event.stopPropagation(); // Empêche la propagation de l'événement de clic pour éviter de sélectionner la liste avant de la supprimer
        const list = lists.value.find(list => list.id === key);
        if (list) {
            list.title = newTitle;
            localStorage.setItem('lists', JSON.stringify(lists.value));

        }
    }

    //SUPPRIME UNE LISTE du tableau de listes en utilisant son id
    function deleteList(key) {
        event.stopPropagation(); // Empêche la propagation de l'événement de clic pour éviter de sélectionner la liste avant de la supprimer
        console.log("hello",key);
        const updatedLists = lists.value.filter(item => item.id !== key);// Filtre les listes pour exclure celle avec l'ID spécifié
        lists.value = updatedLists; // Met à jour la liste des listes dans le localStorage
        localStorage.setItem('lists', JSON.stringify(updatedLists));// Met à jour le localStorage avec la nouvelle liste de listes
        if (selectedList.value && selectedList.value.id === key) {// Vérifie si la liste supprimée est actuellement sélectionnée
            selectedList.value = null; // Si la liste supprimée était la liste sélectionnée, réinitialise la sélection
            showListResults.value = false; // Masque les résultats de la liste (pour les mobiles)
        }
        
    }

    //AJOUTER un nouvel élément à la liste sélectionnée
    function addItemToSelectedList(entry) {
    if (!selectedList.value) return

    const newItem = {
        id: Date.now(), // en attendant l'envoie au backend, on utilise l'horodatage comme ID unique
        entry: entry,
        isCompleted: false,
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

 
    // Retourne les données et les fonctions pour être utilisées dans les composants
    return {
        title,
        type,
        lists,
        creatingList,
        showListResults,
        createList,
        selectList,
        selectedList,
        addItemToSelectedList,
        toggleItemCompletion,
        editListTitle,
        deleteList
    }       
});

const {unref:_unref$3,createVNode:_createVNode$4,createElementVNode:_createElementVNode$5,vModelText:_vModelText$2,withDirectives:_withDirectives$2,withModifiers:_withModifiers,normalizeStyle:_normalizeStyle$1,openBlock:_openBlock$6,createElementBlock:_createElementBlock$6} = await importShared('vue');


const _hoisted_1$5 = { class: "form-header" };
const _hoisted_2$3 = { class: "input-group" };
const _hoisted_3$2 = { class: "action-buttons" };

const {computed: computed$3,ref: ref$4} = await importShared('vue');


const _sfc_main$5 = {
  __name: 'chooseListTitle',
  setup(__props) {


const listStore = useListStore(); // Utilisation du store pour les listes avec Pinia

//Fermeture du formulaire de création de liste

const closeForm = () => {
  listStore.title = '';
  listStore.type = 'classic';
  listStore.creatingList = false; // Ferme le formulaire de création de liste
};


return (_ctx, _cache) => {
  return (_openBlock$6(), _createElementBlock$6("div", {
    class: "choose-list-title-form",
    style: _normalizeStyle$1({ backgroundColor: _unref$3(typeList)[0].color || 'white' })
  }, [
    _createElementVNode$5("div", _hoisted_1$5, [
      _createVNode$4(UpdateIcon),
      _cache[3] || (_cache[3] = _createElementVNode$5("h3", { class: "form-title" }, "Créer une nouvelle liste ✨", -1))
    ]),
    _cache[6] || (_cache[6] = _createElementVNode$5("p", { class: "form-subtitle" }, "Donnez un nom à votre liste pour mieux vous organiser ✨", -1)),
    _createElementVNode$5("form", {
      onSubmit: _cache[2] || (_cache[2] = _withModifiers($event => (_unref$3(listStore).createList()), ["prevent"]))
    }, [
      _createElementVNode$5("div", _hoisted_2$3, [
        _cache[4] || (_cache[4] = _createElementVNode$5("label", { for: "title" }, "Nom de la liste", -1)),
        _withDirectives$2(_createElementVNode$5("input", {
          class: "title-input",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_unref$3(listStore).title) = $event)),
          type: "text",
          placeholder: "Ma super liste"
        }, null, 512), [
          [_vModelText$2, _unref$3(listStore).title]
        ])
      ]),
      _createElementVNode$5("div", _hoisted_3$2, [
        _createElementVNode$5("button", {
          class: "secondary-button",
          type: "button",
          onClick: _cache[1] || (_cache[1] = $event => (closeForm()))
        }, " Annuler "),
        _cache[5] || (_cache[5] = _createElementVNode$5("button", {
          class: "super-action-button submit-button",
          type: "submit"
        }, " Créer ", -1))
      ])
    ], 32)
  ], 4))
}
}

};

const {createElementVNode:_createElementVNode$4,toDisplayString:_toDisplayString$1,openBlock:_openBlock$5,createElementBlock:_createElementBlock$5,createCommentVNode:_createCommentVNode$2,vModelText:_vModelText$1,unref:_unref$2,withKeys:_withKeys$1,withDirectives:_withDirectives$1,normalizeStyle:_normalizeStyle} = await importShared('vue');


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

const {computed: computed$2,ref: ref$3} = await importShared('vue');


const _sfc_main$4 = {
  __name: 'listTitle',
  props: {
  title: {
    type: String,
    required: true,
      },
  listId: {
    type: [String, Number],
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
  setup(__props) {

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

computed$2(() => props.title); // Computed pour le titre de la liste
const newTitle = ref$3(props.title); // Variable réactive pour stocker le nouveau titre lors de l'édition
const isEditing = ref$3(false); // Variable réactive pour contrôler le mode édition
const stopPropagation = () => {
  event.stopPropagation(); // Empêche la propagation de l'événement de clic pour éviter de sélectionner la liste avant de la supprimer
};
// Emit pour les actions d'édition et de suppression

const updatemode = () => {
  event.stopPropagation(); // Empêche la propagation de l'événement de clic pour éviter de sélectionner la liste avant de la supprimer
  isEditing.value = true; // Bascule le mode édition
};

const endUpdatemode = () => {
  event.stopPropagation(); // Empêche la propagation de l'événement de clic pour éviter de sélectionner la liste avant de la supprimer
  isEditing.value = false; // Désactive le mode édition
  newTitle.value = props.title; // Réinitialise le titre à l'original en cas d'annulation
};
const closeEditMode = () => {
  event.stopPropagation(); // Empêche la propagation de l'événement de clic pour éviter de sélectionner la liste avant de la supprimer
  isEditing.value = false; // Désactive le mode édition
};
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
            onKeyup: _cache[1] || (_cache[1] = _withKeys$1($event => {_unref$2(listStore).editListTitle(__props.listId, newTitle.value); closeEditMode();}, ["enter"])),
            onClick: _cache[2] || (_cache[2] = $event => (stopPropagation()))
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
            onClick: updatemode
          }, null, 8, _hoisted_5$1),
          _createElementVNode$4("img", {
            class: "icon-edit",
            src: _unref$2(trash),
            alt: "supprimer",
            onClick: _cache[3] || (_cache[3] = $event => (_unref$2(listStore).deleteList(__props.listId)))
          }, null, 8, _hoisted_6$1)
        ]))
      : (_openBlock$5(), _createElementBlock$5("div", _hoisted_7$1, [
          _createElementVNode$4("img", {
            class: "icon-edit",
            src: _unref$2(check),
            alt: "valider",
            onClick: _cache[4] || (_cache[4] = $event => {_unref$2(listStore).editListTitle(__props.listId, newTitle.value); closeEditMode();})
          }, null, 8, _hoisted_8$1),
          _createElementVNode$4("img", {
            class: "icon-edit",
            src: _unref$2(cross),
            alt: "annuler",
            onClick: endUpdatemode
          }, null, 8, _hoisted_9$1)
        ]))
  ], 4))
}
}

};
const ListTitle = /*#__PURE__*/_export_sfc(_sfc_main$4, [['__scopeId',"data-v-82351177"]]);

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
const {ref: ref$2,computed: computed$1,onMounted: onMounted$1,onUnmounted: onUnmounted$1} = await importShared('vue');

// -------------------------GESTION DU THÈME (SOMBRE/CLAIR)-------------------------

const _sfc_main$2 = {
  __name: 'Sidebar',
  setup(__props) {

const isDark = ref$2(false); // Variable réactive pour stocker le thème (false = clair, true = sombre)

onMounted$1(() => { // Exécuté quand le composant est monté

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)'); // Observe le thème système

  isDark.value = mediaQuery.matches; // Initialise isDark selon le thème actuel

  const handler = (e) => { // Fonction appelée quand le thème change
    isDark.value = e.matches; // Met à jour la valeur en fonction du nouveau thème
  };

  mediaQuery.addEventListener('change', handler); // Écoute les changements du thème système

  onUnmounted$1(() => { // Exécuté quand le composant est détruit
    mediaQuery.removeEventListener('change', handler); // Supprime l'écouteur pour éviter les fuites mémoire
  });

});

//--------------------------GESTION DE LA CRÉATION DE LISTE-------------------------
const listStore = useListStore(); // Utilisation du store pour accéder aux données et fonctions

ref$2(false); // Variable réactive pour contrôler l'affichage du formulaire 
listStore.lists; // Variable réactive pour stocker les titres des listes existantes

// Récupère les listes du localStorage au démarrage
onMounted$1(() => {
const username = localStorage.getItem('userNickname') || 'ça ne fonctionne pas'; // Récupère le nom d'utilisateur depuis le localStorage, ou utilise une valeur par défaut si elle n'existe pas
console.log('Nom d\'utilisateur récupéré :', username); // Affiche le nom d'utilisateur dans la console pour vérification
});


return (_ctx, _cache) => {
  return (_openBlock$3(), _createElementBlock$3("nav", _hoisted_1$2, [
    _cache[2] || (_cache[2] = _createElementVNode$2("h2", null, " Mes Listes ", -1)),
    _createVNode$3(StarBar),
    (_unref$1(listStore).creatingList === false)
      ? (_openBlock$3(), _createElementBlock$3("button", {
          key: 0,
          class: "add-list-button",
          onClick: _cache[0] || (_cache[0] = $event => (_unref$1(listStore).creatingList = true))
        }, [
          _createElementVNode$2("img", {
            class: "icon-plus",
            src: isDark.value ? _unref$1(plusWhite) : _unref$1(plusBlack),
            alt: "ajouter une liste"
          }, null, 8, _hoisted_2$1),
          _cache[1] || (_cache[1] = _createElementVNode$2("p", { class: "button-text" }, "Nouvelle Liste", -1))
        ]))
      : (_openBlock$3(), _createBlock(_sfc_main$5, { key: 1 })),
    (_openBlock$3(true), _createElementBlock$3(_Fragment$1, null, _renderList$1(_unref$1(listStore).lists, (item, index) => {
      return (_openBlock$3(), _createBlock(ListTitle, {
        key: item.id,
        listId: item.id,
        title: item.title,
        type: item.type,
        isComplete: item.isComplete,
        onClick: $event => (_unref$1(listStore).selectList(item.id)),
        onEdit: _ctx.handleEdit,
        onDelete: _ctx.handleDelete
      }, null, 8, ["listId", "title", "type", "isComplete", "onClick", "onEdit", "onDelete"]))
    }), 128))
  ]))
}
}

};
const Sidebar = /*#__PURE__*/_export_sfc(_sfc_main$2, [['__scopeId',"data-v-ddcf722e"]]);

const arrowLeft = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(137,%20108,%20221)'%20d='M73.4%20297.4C60.9%20309.9%2060.9%20330.2%2073.4%20342.7L233.4%20502.7C245.9%20515.2%20266.2%20515.2%20278.7%20502.7C291.2%20490.2%20291.2%20469.9%20278.7%20457.4L173.3%20352L544%20352C561.7%20352%20576%20337.7%20576%20320C576%20302.3%20561.7%20288%20544%20288L173.3%20288L278.7%20182.6C291.2%20170.1%20291.2%20149.8%20278.7%20137.3C266.2%20124.8%20245.9%20124.8%20233.4%20137.3L73.4%20297.3z'/%3e%3c/svg%3e";

// composables/useDevice.js
const {ref: ref$1,onMounted,onUnmounted} = await importShared('vue');


function useIsMobile() {
  const isMobile = ref$1(window.innerWidth <= 768);

  const update = () => {
    isMobile.value = window.innerWidth <= 768;
  };
  // Ajouter un écouteur d'événement pour mettre à jour la valeur de isMobile lors du redimensionnement de la fenêtre
  onMounted(() => {
    window.addEventListener('resize', update);
  });
  // Nettoyer l'écouteur d'événement lorsque le composant est démonté
  onUnmounted(() => {
      window.removeEventListener('resize', update);
    });

  return { isMobile }
}
/* importer dans le composant :
 import { useIsMobile } from '../composables/useIsMobile.js'
  const { isMobile } = useIsMobile()
  */

const {unref:_unref,createElementVNode:_createElementVNode$1,openBlock:_openBlock$2,createElementBlock:_createElementBlock$2,createCommentVNode:_createCommentVNode,toDisplayString:_toDisplayString,createVNode:_createVNode$2,createTextVNode:_createTextVNode,renderList:_renderList,Fragment:_Fragment,vModelText:_vModelText,withKeys:_withKeys,withDirectives:_withDirectives,normalizeClass:_normalizeClass} = await importShared('vue');


const _hoisted_1$1 = {
  key: 0,
  class: "back-arrow-box"
};
const _hoisted_2 = ["src"];
const _hoisted_3 = { class: "list-results-title" };
const _hoisted_4 = { class: "content-list" };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = {
  key: 1,
  class: "list-items-container"
};
const _hoisted_7 = {
  key: 0,
  class: "list-items"
};
const _hoisted_8 = ["id", "checked", "onChange"];
const _hoisted_9 = ["for"];
const _hoisted_10 = {
  key: 1,
  class: "entry-box"
};
const _hoisted_11 = { class: "entry-style" };
const _hoisted_12 = { for: "entry" };
const _hoisted_13 = ["src"];

const {computed,ref} = await importShared('vue');


const _sfc_main$1 = {
  __name: 'ListResults',
  setup(__props) {

const { isMobile } = useIsMobile(); 
const listStore = useListStore();


ref(false); // Variable réactive pour contrôler l'affichage des résultats de la liste (utilisée pour les mobiles)

const entry = ref('');

const addItem = () => {
  if (entry.value.trim() !== '') {
    listStore.addItemToSelectedList(entry.value); // Appelle la méthode du store pour ajouter un nouvel élément à la liste sélectionnée
    entry.value = ''; // Réinitialise le champ de saisie après l'ajout
  }
};




return (_ctx, _cache) => {
  return (_unref(isMobile) ? _unref(listStore).showListResults  : _unref(isMobile) === false)
    ? (_openBlock$2(), _createElementBlock$2("div", {
        key: 0,
        class: _normalizeClass(_unref(isMobile) ? 'list-results-mobile' : 'list-results')
      }, [
        (_unref(isMobile))
          ? (_openBlock$2(), _createElementBlock$2("div", _hoisted_1$1, [
              _createElementVNode$1("img", {
                src: _unref(arrowLeft),
                alt: "Retour",
                class: "back-arrow",
                onClick: _cache[0] || (_cache[0] = $event => (_unref(listStore).showListResults = false))
              }, null, 8, _hoisted_2)
            ]))
          : _createCommentVNode("", true),
        _createElementVNode$1("h3", _hoisted_3, _toDisplayString(_unref(listStore).selectedList?.title || 'Aucune liste sélectionnée'), 1),
        _createVNode$2(StarBar),
        _createElementVNode$1("div", _hoisted_4, [
          (!_unref(listStore).selectedList)
            ? (_openBlock$2(), _createElementBlock$2("p", _hoisted_5, _cache[2] || (_cache[2] = [
                _createTextVNode("Choississez une liste dans la barre latérale pour afficher ses résultats. "),
                _createElementVNode$1("br", null, null, -1),
                _createTextVNode("Ou créez une nouvelle liste pour commencer à ajouter des éléments. "),
                _createElementVNode$1("br", null, null, -1),
                _createElementVNode$1("span", { class: "yellow-heart" }, "💛", -1)
              ])))
            : (_openBlock$2(), _createElementBlock$2("div", _hoisted_6, [
                (_unref(listStore).selectedList.type === 'classic')
                  ? (_openBlock$2(), _createElementBlock$2("ul", _hoisted_7, [
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
                          }, null, 40, _hoisted_8),
                          _createElementVNode$1("label", {
                            for: 'item-' + index
                          }, _toDisplayString(item.entry), 9, _hoisted_9)
                        ]))
                      }), 128))
                    ]))
                  : _createCommentVNode("", true),
                (_unref(listStore).selectedList.type === 'classic')
                  ? (_openBlock$2(), _createElementBlock$2("p", _hoisted_10, [
                      _createElementVNode$1("span", _hoisted_11, [
                        _withDirectives(_createElementVNode$1("input", {
                          type: "text",
                          id: "entry",
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((entry).value = $event)),
                          class: "entry-input",
                          onKeyup: _withKeys(addItem, ["enter"]),
                          placeholder: "Ajouter un nouvel élément..."
                        }, null, 544), [
                          [_vModelText, entry.value]
                        ]),
                        _createElementVNode$1("label", _hoisted_12, [
                          _createElementVNode$1("img", {
                            src: _unref(plusWhite),
                            alt: "Ajouter",
                            class: "add-entry"
                          }, null, 8, _hoisted_13)
                        ])
                      ])
                    ]))
                  : _createCommentVNode("", true),
                _cache[3] || (_cache[3] = _createElementVNode$1("p", { class: "info" }, "⭐️Appuie sur une Entrée pour ajouter", -1))
              ]))
        ])
      ], 2))
    : _createCommentVNode("", true)
}
}

};
const ListResults = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-af4feeff"]]);

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
const ListeView = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-527cbc51"]]);

const {createElementVNode:_createElementVNode,createVNode:_createVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const {createApp} = await importShared('vue');

const {createPinia} = await importShared('pinia');
function createMyApp(Component, el) {
  const app = createApp(Component);
  const pinia = createPinia();
  app.use(pinia);
  app.mount(el);
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
