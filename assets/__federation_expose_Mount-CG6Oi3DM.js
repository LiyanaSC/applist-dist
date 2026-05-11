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

const {unref:_unref$5,createElementVNode:_createElementVNode$7,openBlock:_openBlock$8,createElementBlock:_createElementBlock$8} = await importShared('vue');


const _hoisted_1$7 = { class: "update-icon-container" };
const _hoisted_2$5 = ["src"];


const _sfc_main$7 = {
  __name: 'updateIcon',
  setup(__props) {


return (_ctx, _cache) => {
  return (_openBlock$8(), _createElementBlock$8("div", _hoisted_1$7, [
    _createElementVNode$7("img", {
      class: "update-icon",
      src: _unref$5(updateIcon),
      alt: "icon de mise à jour"
    }, null, 8, _hoisted_2$5)
  ]))
}
}

};
const UpdateIcon = /*#__PURE__*/_export_sfc(_sfc_main$7, [['__scopeId',"data-v-a7335689"]]);

const API_URL = "https://app-simplifie-backend.onrender.com/api";
async function http(path, options = {}) {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}${path}`, {
    // Ajoute les autres options de la requête (méthode, corps, etc.) en écrasant les valeurs par défaut si nécessaire
    ...options,
    headers: {
      "Content-Type": "application/json",
      //boolean && objet retourne objet donc ici => Si un token est présent, l'ajoute à l'en-tête Authorization (les points: ...(null) => renvoit rien si token est null)
      ...token && { Authorization: `Bearer ${token}` },
      // Ajoute les en-têtes supplémentaires fournis dans les options, en écrasant les en-têtes par défaut si nécessaire
      ...options.headers || {}
    }
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "API Error");
  }
  return res.json();
}

// GET /lists
const getLists = () => {
  return http('/lists') // utilise uniquement le paramètre path de la fonction http
};

// POST /lists
const createList = (data) => {
  return http('/lists', { // utilise le paramètre path 
    //et options de la fonction http pour spécifier la méthode et le corps de la requête
    method: 'POST', 
    body: JSON.stringify(data)
  })
};

// PATCH /lists/:id
const updateList = (id, data) => {
  return http(`/lists/${id}`, { // utilise le paramètre path pour spécifier l'ID de la liste à mettre à jour
    //et options de la fonction http pour spécifier la méthode et le corps de la requête
    method: 'PATCH',
    body: JSON.stringify(data)
  })
};

// DELETE /lists/:id
const deleteList = (id) => {
  return http(`/lists/${id}`, { // utilise le paramètre path pour spécifier l'ID de la liste à supprimer
    //et options de la fonction http pour spécifier la méthode
    method: 'DELETE'
  })
};

const {defineStore} = await importShared('pinia');

const {ref: ref$6} = await importShared('vue');


const useListStore = defineStore('list', () => {
    // Variables réactives
    // Variables pour stocker le titre
    const title = ref$6('');
    // Variable pour stocker le type de liste, initialisée à 'classic'
    const type = ref$6('classic'); 
    // RECUPERE les listes du localStorage ou initialise un tableau vide si aucune liste n'est trouvée
    const lists = ref$6([]); 
     // Variable réactive pour STOCKER LA LISTE SELECTIONNEE, initialisée à null
    const selectedList = ref$6(null); 
    const creatingList = ref$6(false); // Variable pour gérer l'état de création d'une liste
    //variable qui montre ou cache les résultats de la liste (pour les mobiles)
    const showListResults = ref$6(false);

//------------- récupérer les listes depuis le backend -----------------------------
    async function initLists() {
        //je créer une variable pour y ajouter un token de test A SUPPRIMER LORS DE L'IMPLEMENTATION DE L'AUTHENTIFICATION
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OWFhZGY0ZmViMGY1NDk4MTkzOGEwOWYiLCJpYXQiOjE3Nzc5MTQzNjcsImV4cCI6MTc4MDUwNjM2N30.of5o_RowtQv0k34ePZmiQyyHYbAr8_lFis20IvVhv4g';
        localStorage.setItem('token', token); // Stocke le token dans le localStorage pour les requêtes API
        try {
            const res = await getLists();
            lists.value = res.data || []; // Met à jour les listes avec les données récupérées du backend, ou un tableau vide si aucune donnée n'est trouvée
            console.log(lists.value);
        } catch (err) {
            console.warn('API down → fallback local', err);
        }
    }

//------------- CREER une liste --------------------------------------------------
    async function createList$1() {
        if (!title.value.trim()) return // Vérifie que le titre n'est pas vide ou composé uniquement d'espaces
        const newList = {
            title: title.value,
            type: type.value,
            items: []
        };
        try {
            const res = await createList(newList);  
                // Met à jour la nouvelle liste avec l'ID retourné par le backend
                newList.id = res.data._id;
                console.log(newList, res.data);
                lists.value.push(newList);

        } catch (err) {
            console.warn('API down → fallback local', err);
        }
          // reset
        title.value = '';
        type.value = 'classic';
        selectedList.value = newList; // Sélectionne automatiquement la nouvelle liste créée 
        creatingList.value = false; // Ferme le formulaire de création de liste
        showListResults.value = true; // Affiche les résultats de la liste sélectionnée (pour les mobiles)
    }
 
//------------- SELECTIONNER UNE LISTE par le biais de son id parmis le tableau de listes
    async function selectList(key) {
         selectedList.value = lists.value.find(list => list._id === key) || null;
         showListResults.value = true;// Affiche les résultats de la liste sélectionnée (pour les mobiles)
          console.log('showListResults après sélection :', showListResults.value);
    }
//------------MODIFIER le titre d'une liste dans le tableau de listes en utilisant son id
    async function editListTitle(key, newTitle) {
        event.stopPropagation(); // Empêche la propagation de l'événement de clic pour éviter de sélectionner la liste avant de la supprimer
        const list = lists.value.find(list => list._id === key);
        if (list) {
            list.title = newTitle;
             try {
            const res = await updateList(list._id, { title: newTitle });
            console.log('Titre de la liste mis à jour avec succès :', res.data);  
            } catch (err) {
                console.warn('API down → fallback local', err);
            }
        }
    }

    //SUPPRIME UNE LISTE du tableau de listes en utilisant son id
    async function deleteList$1(key) {
        event.stopPropagation(); // Empêche la propagation de l'événement de clic pour éviter de sélectionner la liste avant de la supprimer
        const updatedLists = lists.value.filter(item => item._id !== key);// Filtre les listes pour exclure celle avec l'ID spécifié
        lists.value = updatedLists; // Met à jour la liste des listes dans le localStorage
         try {
            const res = await deleteList(key);
            console.log('Liste supprimée avec succès :', res.message);  
            } catch (err) {
                console.warn('API down → fallback local', err);
            }

        if (selectedList.value && selectedList.value.id === key) {// Vérifie si la liste supprimée est actuellement sélectionnée
            selectedList.value = null; // Si la liste supprimée était la liste sélectionnée, réinitialise la sélection
            showListResults.value = false; // Masque les résultats de la liste (pour les mobiles)
        }
    }

    //AJOUTER un nouvel élément à la liste sélectionnée
    async function addItemToSelectedList(entry) {
    if (!selectedList.value) return

    const newItem = {
        entry: entry,
        isCompleted: false,
    };
    selectedList.value.items.push(newItem);

    try {
        const res = await updateList(selectedList.value._id, { items: selectedList.value.items });
        console.log('Liste mise à jour avec succès :', res.data);  
        } catch (err) {
            console.warn('API down → fallback local', err);
        }
    }

    //MET À JOUR L'ÉTAT de complétion d'un élément de la liste sélectionnée
    async function toggleItemCompletion(itemId) {
        if (!selectedList.value) return// Vérifie si une liste est sélectionnée 

        if (selectedList.value.type === 'classic') {
            const item = selectedList.value.items.find(item => item._id === itemId);
            if (item) {
                item.done = !item.done;
                console.log('État de complétion mis à jour pour l\'élément :', item, !item.isCompleted);
                try {
                    const res = await updateList(selectedList.value._id, { items: selectedList.value.items });
                    console.log('Liste mise à jour avec succès :', res.data);  
                } catch (err) {
                    console.warn('API down → fallback local', err);
                }
            }
        }

    }

    //MET À JOUR L'ENTRÉE d'un élément de la liste sélectionnée
    async function updateItemEntry(itemId, newEntry) {
        if (!selectedList.value) return // Vérifie si une liste est sélectionnée

            const item = selectedList.value.items.find(item => item._id === itemId);
            if (item) {
                item.entry = newEntry;
                try {
                    const res = await updateList(selectedList.value._id, { items: selectedList.value.items });
                    console.log('Liste mise à jour avec succès :', res.data);  
                } catch (err) {
                    console.warn('API down → fallback local', err);
                }
            }   

    }

    //SUPPRIME un élément de la liste sélectionnée
    async function deleteItem(itemId) {
        if (!selectedList.value) return // Vérifie si une liste est sélectionnée

        const updatedItems = selectedList.value.items.filter(item => item._id !== itemId); // Filtre les éléments pour exclure celui avec l'ID spécifié
        selectedList.value.items = updatedItems; // Met à jour la liste des éléments dans la liste sélectionnée

        try {
            const res = await updateList(selectedList.value._id, { items: selectedList.value.items });
            console.log('Liste mise à jour avec succès :', res.data);  
        } catch (err) {
            console.warn('API down → fallback local', err);
        }
    }

 
    // Retourne les données et les fonctions pour être utilisées dans les composants
    return {
        title,
        type,
        lists,
        creatingList,
        showListResults,
        initLists,
        createList: createList$1,
        selectList,
        selectedList,
        addItemToSelectedList,
        toggleItemCompletion,
        editListTitle,
        deleteList: deleteList$1,
        updateItemEntry,
        deleteItem
    }       
});

const {unref:_unref$4,createVNode:_createVNode$4,createElementVNode:_createElementVNode$6,vModelText:_vModelText$3,withDirectives:_withDirectives$3,withModifiers:_withModifiers$1,normalizeStyle:_normalizeStyle$1,openBlock:_openBlock$7,createElementBlock:_createElementBlock$7} = await importShared('vue');


const _hoisted_1$6 = { class: "form-header" };
const _hoisted_2$4 = { class: "input-group" };
const _hoisted_3$3 = { class: "action-buttons" };

const {computed: computed$3,ref: ref$5} = await importShared('vue');


const _sfc_main$6 = {
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
  return (_openBlock$7(), _createElementBlock$7("div", {
    class: "choose-list-title-form",
    style: _normalizeStyle$1({ backgroundColor: _unref$4(typeList)[0].color || 'white' })
  }, [
    _createElementVNode$6("div", _hoisted_1$6, [
      _createVNode$4(UpdateIcon),
      _cache[3] || (_cache[3] = _createElementVNode$6("h3", { class: "form-title" }, "Créer une nouvelle liste ✨", -1))
    ]),
    _cache[6] || (_cache[6] = _createElementVNode$6("p", { class: "form-subtitle" }, "Donnez un nom à votre liste pour mieux vous organiser ✨", -1)),
    _createElementVNode$6("form", {
      onSubmit: _cache[2] || (_cache[2] = _withModifiers$1($event => (_unref$4(listStore).createList()), ["prevent"]))
    }, [
      _createElementVNode$6("div", _hoisted_2$4, [
        _cache[4] || (_cache[4] = _createElementVNode$6("label", { for: "title" }, "Nom de la liste", -1)),
        _withDirectives$3(_createElementVNode$6("input", {
          class: "title-input",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_unref$4(listStore).title) = $event)),
          type: "text",
          placeholder: "Ma super liste"
        }, null, 512), [
          [_vModelText$3, _unref$4(listStore).title]
        ])
      ]),
      _createElementVNode$6("div", _hoisted_3$3, [
        _createElementVNode$6("button", {
          class: "secondary-button",
          type: "button",
          onClick: _cache[1] || (_cache[1] = $event => (closeForm()))
        }, " Annuler "),
        _cache[5] || (_cache[5] = _createElementVNode$6("button", {
          class: "super-action-button submit-button",
          type: "submit"
        }, " Créer ", -1))
      ])
    ], 32)
  ], 4))
}
}

};

const {createElementVNode:_createElementVNode$5,toDisplayString:_toDisplayString$2,openBlock:_openBlock$6,createElementBlock:_createElementBlock$6,createCommentVNode:_createCommentVNode$3,vModelText:_vModelText$2,unref:_unref$3,withKeys:_withKeys$2,withDirectives:_withDirectives$2,normalizeStyle:_normalizeStyle} = await importShared('vue');


const _hoisted_1$5 = { class: "list-title-content" };
const _hoisted_2$3 = ["src"];
const _hoisted_3$2 = {
  key: 0,
  class: "button-text"
};
const _hoisted_4$2 = {
  key: 0,
  class: "action-icons"
};
const _hoisted_5$2 = ["src"];
const _hoisted_6$2 = ["src"];
const _hoisted_7$2 = {
  key: 1,
  class: "action-icons"
};
const _hoisted_8$2 = ["src"];
const _hoisted_9$1 = ["src"];

const {computed: computed$2,ref: ref$4} = await importShared('vue');


const _sfc_main$5 = {
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
const newTitle = ref$4(props.title); // Variable réactive pour stocker le nouveau titre lors de l'édition
const isEditing = ref$4(false); // Variable réactive pour contrôler le mode édition
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
  return (_openBlock$6(), _createElementBlock$6("button", {
    class: "list-title-button",
    style: _normalizeStyle({ background: colorType.value }),
    onClick: SelectList
  }, [
    _createElementVNode$5("div", _hoisted_1$5, [
      _createElementVNode$5("img", {
        class: "icon-list",
        src: imageSrc.value,
        alt: "liste"
      }, null, 8, _hoisted_2$3),
      (!isEditing.value)
        ? (_openBlock$6(), _createElementBlock$6("p", _hoisted_3$2, _toDisplayString$2(newTitle.value), 1))
        : _withDirectives$2((_openBlock$6(), _createElementBlock$6("input", {
            key: 1,
            class: "input-edit",
            type: "text",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((newTitle).value = $event)),
            onKeyup: _cache[1] || (_cache[1] = _withKeys$2($event => {_unref$3(listStore).editListTitle(__props.listId, newTitle.value); closeEditMode();}, ["enter"])),
            onClick: _cache[2] || (_cache[2] = $event => (stopPropagation()))
          }, null, 544)), [
            [_vModelText$2, newTitle.value]
          ])
    ]),
    (!isEditing.value)
      ? (_openBlock$6(), _createElementBlock$6("div", _hoisted_4$2, [
          _createElementVNode$5("img", {
            class: "icon-edit",
            src: _unref$3(pencil),
            alt: "modifier",
            onClick: updatemode
          }, null, 8, _hoisted_5$2),
          _createElementVNode$5("img", {
            class: "icon-edit",
            src: _unref$3(trash),
            alt: "supprimer",
            onClick: _cache[3] || (_cache[3] = $event => (_unref$3(listStore).deleteList(__props.listId)))
          }, null, 8, _hoisted_6$2)
        ]))
      : (_openBlock$6(), _createElementBlock$6("div", _hoisted_7$2, [
          _createElementVNode$5("img", {
            class: "icon-edit",
            src: _unref$3(check),
            alt: "valider",
            onClick: _cache[4] || (_cache[4] = $event => {_unref$3(listStore).editListTitle(__props.listId, newTitle.value); closeEditMode();})
          }, null, 8, _hoisted_8$2),
          _createElementVNode$5("img", {
            class: "icon-edit",
            src: _unref$3(cross),
            alt: "annuler",
            onClick: endUpdatemode
          }, null, 8, _hoisted_9$1)
        ]))
  ], 4))
}
}

};
const ListTitle = /*#__PURE__*/_export_sfc(_sfc_main$5, [['__scopeId',"data-v-82351177"]]);

const _sfc_main$4 = {  };
const {createElementVNode:_createElementVNode$4,openBlock:_openBlock$5,createElementBlock:_createElementBlock$5} = await importShared('vue');


const _hoisted_1$4 = { class: "starbar" };

function _sfc_render(_ctx, _cache) {
  return (_openBlock$5(), _createElementBlock$5("div", _hoisted_1$4, _cache[0] || (_cache[0] = [
    _createElementVNode$4("div", { class: "left-bar" }, null, -1),
    _createElementVNode$4("p", null, "⭐️", -1),
    _createElementVNode$4("div", { class: "right-bar" }, null, -1)
  ])))
}
const StarBar = /*#__PURE__*/_export_sfc(_sfc_main$4, [['render',_sfc_render],['__scopeId',"data-v-3600db60"]]);

const {createElementVNode:_createElementVNode$3,createVNode:_createVNode$3,unref:_unref$2,openBlock:_openBlock$4,createElementBlock:_createElementBlock$4,createCommentVNode:_createCommentVNode$2,createBlock:_createBlock,renderList:_renderList$1,Fragment:_Fragment$1} = await importShared('vue');


const _hoisted_1$3 = { class: "list-sidebar" };
const _hoisted_2$2 = ["src"];
const {ref: ref$3,computed: computed$1,onMounted: onMounted$1,onUnmounted: onUnmounted$1} = await importShared('vue');

// -------------------------GESTION DU THÈME (SOMBRE/CLAIR)-------------------------

const _sfc_main$3 = {
  __name: 'Sidebar',
  setup(__props) {

const isDark = ref$3(false); // Variable réactive pour stocker le thème (false = clair, true = sombre)

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

ref$3(false); // Variable réactive pour contrôler l'affichage du formulaire 
listStore.lists; // Variable réactive pour stocker les titres des listes existantes

// Récupère les listes du localStorage au démarrage
onMounted$1(() => {
  listStore.initLists();
const username = localStorage.getItem('userNickname') || 'ça ne fonctionne pas en dev'; // Récupère le nom d'utilisateur depuis le localStorage, ou utilise une valeur par défaut si elle n'existe pas
console.log('Nom d\'utilisateur récupéré :', username); // Affiche le nom d'utilisateur dans la console pour vérification
});


return (_ctx, _cache) => {
  return (_openBlock$4(), _createElementBlock$4("nav", _hoisted_1$3, [
    _cache[2] || (_cache[2] = _createElementVNode$3("h2", null, " Mes Listes ", -1)),
    _createVNode$3(StarBar),
    (_unref$2(listStore).creatingList === false)
      ? (_openBlock$4(), _createElementBlock$4("button", {
          key: 0,
          class: "add-list-button",
          onClick: _cache[0] || (_cache[0] = $event => (_unref$2(listStore).creatingList = true))
        }, [
          _createElementVNode$3("img", {
            class: "icon-plus",
            src: isDark.value ? _unref$2(plusWhite) : _unref$2(plusBlack),
            alt: "ajouter une liste"
          }, null, 8, _hoisted_2$2),
          _cache[1] || (_cache[1] = _createElementVNode$3("p", { class: "button-text" }, "Nouvelle Liste", -1))
        ]))
      : (_openBlock$4(), _createBlock(_sfc_main$6, { key: 1 })),
    (_openBlock$4(true), _createElementBlock$4(_Fragment$1, null, _renderList$1(_unref$2(listStore).lists, (item, index) => {
      return (_openBlock$4(), _createBlock(ListTitle, {
        key: item._id,
        listId: item._id,
        title: item.title,
        type: item.type,
        isComplete: item.isComplete,
        onClick: $event => (_unref$2(listStore).selectList(item._id))
      }, null, 8, ["listId", "title", "type", "isComplete", "onClick"]))
    }), 128))
  ]))
}
}

};
const Sidebar = /*#__PURE__*/_export_sfc(_sfc_main$3, [['__scopeId',"data-v-49709f16"]]);

const sendImg = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(255,%20255,%20255)'%20d='M568.4%2037.7C578.2%2034.2%20589%2036.7%20596.4%2044C603.8%2051.3%20606.2%2062.2%20602.7%2072L424.7%20568.9C419.7%20582.8%20406.6%20592%20391.9%20592C377.7%20592%20364.9%20583.4%20359.6%20570.3L295.4%20412.3C290.9%20401.3%20292.9%20388.7%20300.6%20379.7L395.1%20267.3C400.2%20261.2%20399.8%20252.3%20394.2%20246.7C388.6%20241.1%20379.6%20240.7%20373.6%20245.8L261.2%20340.1C252.1%20347.7%20239.6%20349.7%20228.6%20345.3L70.1%20280.8C57%20275.5%2048.4%20262.7%2048.4%20248.5C48.4%20233.8%2057.6%20220.7%2071.5%20215.7L568.4%2037.7z'/%3e%3c/svg%3e";

const arrowLeft = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(137,%20108,%20221)'%20d='M73.4%20297.4C60.9%20309.9%2060.9%20330.2%2073.4%20342.7L233.4%20502.7C245.9%20515.2%20266.2%20515.2%20278.7%20502.7C291.2%20490.2%20291.2%20469.9%20278.7%20457.4L173.3%20352L544%20352C561.7%20352%20576%20337.7%20576%20320C576%20302.3%20561.7%20288%20544%20288L173.3%20288L278.7%20182.6C291.2%20170.1%20291.2%20149.8%20278.7%20137.3C266.2%20124.8%20245.9%20124.8%20233.4%20137.3L73.4%20297.3z'/%3e%3c/svg%3e";

// composables/useDevice.js
const {ref: ref$2,onMounted,onUnmounted} = await importShared('vue');


function useIsMobile() {
  const isMobile = ref$2(window.innerWidth <= 768);

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

const trash = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(27,%2052,%2097)'%20d='M232.7%2069.9L224%2096L128%2096C110.3%2096%2096%20110.3%2096%20128C96%20145.7%20110.3%20160%20128%20160L512%20160C529.7%20160%20544%20145.7%20544%20128C544%20110.3%20529.7%2096%20512%2096L416%2096L407.3%2069.9C402.9%2056.8%20390.7%2048%20376.9%2048L263.1%2048C249.3%2048%20237.1%2056.8%20232.7%2069.9zM512%20208L128%20208L149.1%20531.1C150.7%20556.4%20171.7%20576%20197%20576L443%20576C468.3%20576%20489.3%20556.4%20490.9%20531.1L512%20208z'/%3e%3c/svg%3e";

const pencil = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='rgb(27,%2052,%2097)'%20d='M100.4%20417.2C104.5%20402.6%20112.2%20389.3%20123%20378.5L304.2%20197.3L338.1%20163.4C354.7%20180%20389.4%20214.7%20442.1%20267.4L476%20301.3L442.1%20335.2L260.9%20516.4C250.2%20527.1%20236.8%20534.9%20222.2%20539L94.4%20574.6C86.1%20576.9%2077.1%20574.6%2071%20568.4C64.9%20562.2%2062.6%20553.3%2064.9%20545L100.4%20417.2zM156%20413.5C151.6%20418.2%20148.4%20423.9%20146.7%20430.1L122.6%20517L209.5%20492.9C215.9%20491.1%20221.7%20487.8%20226.5%20483.2L155.9%20413.5zM510%20267.4C493.4%20250.8%20458.7%20216.1%20406%20163.4L372%20129.5C398.5%20103%20413.4%2088.1%20416.9%2084.6C430.4%2071%20448.8%2063.4%20468%2063.4C487.2%2063.4%20505.6%2071%20519.1%2084.6L554.8%20120.3C568.4%20133.9%20576%20152.3%20576%20171.4C576%20190.5%20568.4%20209%20554.8%20222.5C551.3%20226%20536.4%20240.9%20509.9%20267.4z'/%3e%3c/svg%3e";

const check = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='%234caf8d'%20d='M530.8%20134.1C545.1%20144.5%20548.3%20164.5%20537.9%20178.8L281.9%20530.8C276.4%20538.4%20267.9%20543.1%20258.5%20543.9C249.1%20544.7%20240%20541.2%20233.4%20534.6L105.4%20406.6C92.9%20394.1%2092.9%20373.8%20105.4%20361.3C117.9%20348.8%20138.2%20348.8%20150.7%20361.3L252.2%20462.8L486.2%20141.1C496.6%20126.8%20516.6%20123.6%20530.9%20134z'/%3e%3c/svg%3e";

const cross = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20640%20640'%3e%3c!--!Font%20Awesome%20Free%207.2.0%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202026%20Fonticons,%20Inc.--%3e%3cpath%20fill='%23e35d6a'%20d='M183.1%20137.4C170.6%20124.9%20150.3%20124.9%20137.8%20137.4C125.3%20149.9%20125.3%20170.2%20137.8%20182.7L275.2%20320L137.9%20457.4C125.4%20469.9%20125.4%20490.2%20137.9%20502.7C150.4%20515.2%20170.7%20515.2%20183.2%20502.7L320.5%20365.3L457.9%20502.6C470.4%20515.1%20490.7%20515.1%20503.2%20502.6C515.7%20490.1%20515.7%20469.8%20503.2%20457.3L365.8%20320L503.1%20182.6C515.6%20170.1%20515.6%20149.8%20503.1%20137.3C490.6%20124.8%20470.3%20124.8%20457.8%20137.3L320.5%20274.7L183.1%20137.4z'/%3e%3c/svg%3e";

const {unref:_unref$1,createElementVNode:_createElementVNode$2,toDisplayString:_toDisplayString$1,openBlock:_openBlock$3,createElementBlock:_createElementBlock$3,createCommentVNode:_createCommentVNode$1,vModelText:_vModelText$1,withKeys:_withKeys$1,withModifiers:_withModifiers,withDirectives:_withDirectives$1} = await importShared('vue');


const _hoisted_1$2 = ["id", "checked"];
const _hoisted_2$1 = ["for"];
const _hoisted_3$1 = { key: 2 };
const _hoisted_4$1 = ["src"];
const _hoisted_5$1 = ["src"];
const _hoisted_6$1 = { key: 3 };
const _hoisted_7$1 = ["src"];
const _hoisted_8$1 = ["src"];

const {ref: ref$1} = await importShared('vue');


const _sfc_main$2 = {
  __name: 'result',
  props: {
  entry: {
    type: String,
    required: true,
      },
  itemId: {
    type: [String, Number],
    required: true
      },
  isDone: {
    type: Boolean,
    default: false
  }
},
  setup(__props) {

const listStore = useListStore();


//UPDATE ITEM
const updatedEntry = ref$1(''); // Variable réactive pour stocker le nouveau titre de la liste lors de l'édition
const isEditing = ref$1(false); // Variable réactive pour contrôler le mode édition
const updatemode = () => {
  event.stopPropagation(); // Empêche la propagation de l'événement de clic pour éviter de sélectionner la liste avant de la supprimer
  isEditing.value = true; // Bascule le mode édition
  updatedEntry.value = entry.value; // Initialise le champ de saisie avec le titre actuel de la liste pour permettre l'édition
};

const endUpdatemode = () => {
  event.stopPropagation(); // Empêche la propagation de l'événement de clic pour éviter de sélectionner la liste avant de la supprimer
  isEditing.value = false; // Désactive le mode édition
  // Réinitialise le titre à l'original en cas d'annulation
  updatedEntry.value = entry.value;
};
const closeEditMode = () => {
  event.stopPropagation(); // Empêche la propagation de l'événement de clic pour éviter de sélectionner la liste avant de la supprimer
  isEditing.value = false; // Désactive le mode édition
updatedEntry.value = entry.value;

};


return (_ctx, _cache) => {
  return (_openBlock$3(), _createElementBlock$3("div", {
    class: "result-container",
    onClick: _cache[7] || (_cache[7] = _withModifiers(() => {}, ["stop"]))
  }, [
    _createElementVNode$2("input", {
      type: "checkbox",
      id: __props.itemId,
      checked: __props.isDone,
      onChange: _cache[0] || (_cache[0] = $event => (_unref$1(listStore).toggleItemCompletion(__props.itemId)))
    }, null, 40, _hoisted_1$2),
    (!isEditing.value)
      ? (_openBlock$3(), _createElementBlock$3("label", {
          key: 0,
          for: __props.itemId
        }, _toDisplayString$1(__props.entry), 9, _hoisted_2$1))
      : _withDirectives$1((_openBlock$3(), _createElementBlock$3("input", {
          key: 1,
          class: "input-update",
          type: "text",
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((updatedEntry).value = $event)),
          onKeyup: _cache[2] || (_cache[2] = _withKeys$1($event => (_unref$1(listStore).updateItemEntry(__props.itemId, updatedEntry.value)), ["enter"])),
          onClick: _cache[3] || (_cache[3] = _withModifiers(() => {}, ["stop"]))
        }, null, 544)), [
          [_vModelText$1, updatedEntry.value]
        ]),
    (!isEditing.value)
      ? (_openBlock$3(), _createElementBlock$3("div", _hoisted_3$1, [
          _createElementVNode$2("img", {
            class: "icon-edit",
            src: _unref$1(pencil),
            alt: "modifier",
            onClick: _cache[4] || (_cache[4] = $event => (updatemode(), updatedEntry.value = __props.entry))
          }, null, 8, _hoisted_4$1),
          _createElementVNode$2("img", {
            class: "icon-edit",
            src: _unref$1(trash),
            alt: "supprimer",
            onClick: _cache[5] || (_cache[5] = $event => (_unref$1(listStore).deleteItem(__props.itemId)))
          }, null, 8, _hoisted_5$1)
        ]))
      : (_openBlock$3(), _createElementBlock$3("div", _hoisted_6$1, [
          _createElementVNode$2("img", {
            class: "icon-edit",
            src: _unref$1(check),
            alt: "valider",
            onClick: _cache[6] || (_cache[6] = $event => {_unref$1(listStore).updateItemEntry(__props.itemId, updatedEntry.value); closeEditMode();})
          }, null, 8, _hoisted_7$1),
          _createElementVNode$2("img", {
            class: "icon-edit",
            src: _unref$1(cross),
            alt: "annuler",
            onClick: endUpdatemode
          }, null, 8, _hoisted_8$1)
        ]))
  ]))
}
}

};
const Result = /*#__PURE__*/_export_sfc(_sfc_main$2, [['__scopeId',"data-v-5873102b"]]);

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
const _hoisted_8 = { class: "entry-style" };
const _hoisted_9 = {
  key: 0,
  for: "entry"
};
const _hoisted_10 = ["src"];
const _hoisted_11 = {
  key: 1,
  for: "entry"
};
const _hoisted_12 = ["src"];

const {computed,ref} = await importShared('vue');


const _sfc_main$1 = {
  __name: 'ListResults',
  setup(__props) {

const { isMobile } = useIsMobile(); 
const listStore = useListStore();

const isFocus = ref(false);

ref(false); // Variable réactive pour contrôler l'affichage des résultats de la liste (utilisée pour les mobiles)

const entry = ref('');

const addItem = () => {
  if (entry.value.trim() !== '') {
    listStore.addItemToSelectedList(entry.value); // Appelle la méthode du store pour ajouter un nouvel élément à la liste sélectionnée
    entry.value = ''; // Réinitialise le champ de saisie après l'ajout
    isFocus.value = false; // Réinitialise l'état de focus après l'ajout
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
            ? (_openBlock$2(), _createElementBlock$2("p", _hoisted_5, _cache[3] || (_cache[3] = [
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
                          key: item._id
                        }, [
                          _createVNode$2(Result, {
                            entry: item.entry,
                            itemId: item._id,
                            isDone: item.done
                          }, null, 8, ["entry", "itemId", "isDone"])
                        ]))
                      }), 128))
                    ]))
                  : _createCommentVNode("", true),
                (_unref(listStore).selectedList.type === 'classic')
                  ? (_openBlock$2(), _createElementBlock$2("p", {
                      key: 1,
                      class: _normalizeClass(isFocus.value && _unref(isMobile) ? 'entry-box-focus' : 'entry-box')
                    }, [
                      _createElementVNode$1("span", _hoisted_8, [
                        _withDirectives(_createElementVNode$1("input", {
                          type: "text",
                          id: "entry",
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((entry).value = $event)),
                          class: "entry-input",
                          onKeyup: _withKeys(addItem, ["enter"]),
                          placeholder: "Ajouter un nouvel élément...",
                          onFocus: _cache[2] || (_cache[2] = $event => (isFocus.value=true))
                        }, null, 544), [
                          [_vModelText, entry.value]
                        ]),
                        (entry.value ? true : false)
                          ? (_openBlock$2(), _createElementBlock$2("label", _hoisted_9, [
                              _createElementVNode$1("img", {
                                src: _unref(sendImg),
                                alt: "Envoyer",
                                class: "send-entry",
                                onClick: addItem
                              }, null, 8, _hoisted_10)
                            ]))
                          : (_openBlock$2(), _createElementBlock$2("label", _hoisted_11, [
                              _createElementVNode$1("img", {
                                src: _unref(plusWhite),
                                alt: "Ajouter",
                                class: "add-entry"
                              }, null, 8, _hoisted_12)
                            ]))
                      ])
                    ], 2))
                  : _createCommentVNode("", true),
                _cache[4] || (_cache[4] = _createElementVNode$1("p", { class: "info" }, "⭐️Appuie sur une Entrée pour ajouter", -1))
              ]))
        ])
      ], 2))
    : _createCommentVNode("", true)
}
}

};
const ListResults = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-ec12dcb8"]]);

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
