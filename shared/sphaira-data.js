(function(global){
  const API_BASE = global.SPHAIRA_API_BASE || 'memory://sphaira';
  const STORAGE_KEY = global.SPHAIRA_STORAGE_KEY || 'sphaira:objectives';
  global.SPHAIRA_API_BASE = API_BASE;
  global.SPHAIRA_STORAGE_KEY = STORAGE_KEY;

  const DEFAULT_OBJECTIVES = global.SPHAIRA_DEFAULT_OBJECTIVES || [
    {
      id: 'obj-2025-01',
      date: '2025-01-18',
      title: 'Stabiliser le noyau SPHAIRA',
      cat: 'developpement',
      icon: '🛠️',
      lead: 'Équipe Produit',
      desc: "Migration du moteur temps réel vers l'architecture Orion pour sécuriser les synchronisations entre nœuds.",
      tasks: [
        { id: 'task-1', title: 'Refonte du graphe des objectifs', owner: 'Core SPHAIRA', due: '2025-01-12', done: true },
        { id: 'task-2', title: 'Diagnostics de performance', owner: 'Qualité', due: '2025-01-18', done: false },
        { id: 'task-3', title: 'Plan de rollback automatisé', owner: 'Ops', due: '2025-01-20', done: false }
      ]
    },
    {
      id: 'obj-2025-03',
      date: '2025-03-05',
      title: 'Aligner les parcours ORIS ↔︎ SPHAIRA',
      cat: 'alignement',
      icon: '🔄',
      lead: 'Ops Produit',
      desc: "Unification des points de contact et mise à jour des webhooks pour une remontée instantanée des objectifs.",
      tasks: [
        { id: 'task-4', title: 'Audit des webhooks existants', owner: 'ORIS', due: '2025-02-20', done: true },
        { id: 'task-5', title: 'Mapping des statuts partagés', owner: 'SPHAIRA', due: '2025-03-05', done: false },
        { id: 'task-6', title: 'Tests bout en bout ORIS', owner: 'Qualité', due: '2025-03-12', done: false }
      ]
    },
    {
      id: 'obj-2025-04',
      date: '2025-04-22',
      title: "Expérience responsable d'objectif",
      cat: 'experience',
      icon: '🎯',
      lead: 'Design Ops',
      desc: "Création d'une vue dédiée pour clarifier la progression des tâches assignées et faciliter les décisions.",
      tasks: [
        { id: 'task-7', title: 'Interviews responsables pilotes', owner: 'Design', due: '2025-04-05', done: true },
        { id: 'task-8', title: 'Prototype interactif', owner: 'Design Ops', due: '2025-04-12', done: true },
        { id: 'task-9', title: 'Déploiement contrôlé', owner: 'Produit', due: '2025-04-22', done: false }
      ]
    },
    {
      id: 'obj-2025-06',
      date: '2025-06-17',
      title: 'Automatiser la gouvernance des droits',
      cat: 'operations',
      icon: '🛡️',
      lead: 'Sécurité & Conformité',
      desc: "Mise en place de profils dynamiques et d'un audit trail partagé entre SPHAIRA et ORIS.",
      tasks: [
        { id: 'task-10', title: 'Catalogue des rôles', owner: 'Sécurité', due: '2025-05-30', done: true },
        { id: 'task-11', title: "Développement du moteur d'habilitations", owner: 'Back-end', due: '2025-06-14', done: false },
        { id: 'task-12', title: 'Recette RGPD conjointe', owner: 'Legal', due: '2025-06-25', done: false }
      ]
    },
    {
      id: 'obj-2025-07',
      date: '2025-07-29',
      title: "Campagne d'adoption multi-canale",
      cat: 'lancement',
      icon: '📣',
      lead: 'Marketing Produit',
      desc: 'Activation progressive des comptes clés avec contenus ciblés et webinaires synchronisés.',
      tasks: [
        { id: 'task-13', title: 'Sélection des segments prioritaires', owner: 'Marketing', due: '2025-07-05', done: true },
        { id: 'task-14', title: 'Kit de communication co-marquée', owner: 'Brand', due: '2025-07-18', done: false },
        { id: 'task-15', title: 'Webinaire lancement', owner: 'ORIS', due: '2025-07-29', done: false }
      ]
    },
    {
      id: 'obj-2025-09',
      date: '2025-09-14',
      title: 'Connecteur données de pilotage',
      cat: 'operations',
      icon: '📊',
      lead: 'Data Intelligence',
      desc: "Centralisation des indicateurs d'usage SPHAIRA & ORIS pour piloter les OKR en continu.",
      tasks: [
        { id: 'task-16', title: 'Spécifications API métriques', owner: 'Data', due: '2025-08-20', done: true },
        { id: 'task-17', title: 'Pipelines vers le data lake', owner: 'Engineering', due: '2025-09-10', done: false },
        { id: 'task-18', title: 'Tableaux de bord ECLIPTICA', owner: 'Ops Produit', due: '2025-09-25', done: false }
      ]
    },
    {
      id: 'obj-2025-10',
      date: '2025-10-21',
      title: 'Portail partenaires ORIS',
      cat: 'lancement',
      icon: '🌐',
      lead: 'Alliances',
      desc: "Ouverture d'un espace partagé pour suivre la contribution des partenaires et les objectifs associés.",
      tasks: [
        { id: 'task-19', title: 'Architecture du portail', owner: 'Front-end', due: '2025-10-05', done: true },
        { id: 'task-20', title: 'Catalogue des offres partenaires', owner: 'Alliances', due: '2025-10-18', done: false },
        { id: 'task-21', title: 'Synchronisation des rôles partenaires', owner: 'Sécurité', due: '2025-10-21', done: false }
      ]
    },
    {
      id: 'obj-2025-12',
      date: '2025-12-09',
      title: 'Clôture feuille de route 2025',
      cat: 'alignement',
      icon: '🌀',
      lead: 'Direction Produit',
      desc: "Consolidation des enseignements 2025 et cadrage des objectifs 2026 partagés entre SPHAIRA et ORIS.",
      tasks: [
        { id: 'task-22', title: 'Analyse des OKR', owner: 'Direction Produit', due: '2025-11-30', done: false },
        { id: 'task-23', title: 'Atelier vision 2026', owner: 'Leadership', due: '2025-12-05', done: false },
        { id: 'task-24', title: 'Publication récapitulatif', owner: 'Communication', due: '2025-12-12', done: false }
      ]
    }
  ];
  global.SPHAIRA_DEFAULT_OBJECTIVES = DEFAULT_OBJECTIVES;

  const originalFetch = global.fetch ? global.fetch.bind(global) : null;

  const clone = (value) => JSON.parse(JSON.stringify(value));
  const generateId = (prefix) => `${prefix}-${Math.random().toString(36).slice(2,8)}${Date.now().toString(36).slice(-4)}`;

  const sanitizeTask = (task) => {
    if(!task || typeof task !== 'object') return null;
    return {
      id: task.id || generateId('task'),
      title: String(task.title ?? '').trim(),
      owner: String(task.owner ?? '').trim(),
      due: task.due ? String(task.due) : '',
      done: Boolean(task.done)
    };
  };

  const sanitizeObjective = (obj) => {
    if(!obj || typeof obj !== 'object') return null;
    const tasks = Array.isArray(obj.tasks) ? obj.tasks.map(sanitizeTask).filter(Boolean) : [];
    return {
      id: obj.id || generateId('obj'),
      date: obj.date ? String(obj.date) : new Date().toISOString().slice(0,10),
      title: String(obj.title ?? '').trim(),
      cat: String(obj.cat ?? 'developpement'),
      icon: obj.icon ? String(obj.icon) : '🗂️',
      lead: obj.lead ? String(obj.lead) : '',
      desc: obj.desc ? String(obj.desc) : '',
      tasks
    };
  };

  const loadStore = () => {
    try {
      const raw = global.localStorage.getItem(STORAGE_KEY);
      if(raw){
        const parsed = JSON.parse(raw);
        if(Array.isArray(parsed)){
          return parsed.map(sanitizeObjective).filter(Boolean);
        }
      }
    } catch(err){
      console.warn('Impossible de charger les objectifs SPHAIRA depuis le stockage local.', err);
    }
    const defaults = DEFAULT_OBJECTIVES.map(sanitizeObjective).filter(Boolean);
    try {
      global.localStorage.setItem(STORAGE_KEY, JSON.stringify(defaults));
    } catch(err){
      console.warn('Impossible de persister les objectifs par défaut SPHAIRA.', err);
    }
    return defaults;
  };

  let store = loadStore();

  const persist = () => {
    try {
      global.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch(err){
      console.warn('Impossible de sauvegarder les objectifs SPHAIRA.', err);
    }
  };

  const sortStore = () => {
    store.sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  const makeJsonResponse = (data, init = {}) => {
    return new Response(data === undefined ? null : JSON.stringify(data), {
      status: init.status ?? 200,
      statusText: init.statusText,
      headers: {
        'Content-Type': 'application/json',
        ...(init.headers || {})
      }
    });
  };

  const badRequest = (message) => makeJsonResponse({ error: message }, { status: 400 });
  const notFound = () => makeJsonResponse({ error: 'Not found' }, { status: 404 });

  const readBody = async (resource, options) => {
    if(options && options.body !== undefined){
      const body = options.body;
      if(typeof body === 'string') return body;
      if(body instanceof Blob) return await body.text();
      if(body instanceof FormData){
        const result = {};
        body.forEach((value, key) => { result[key] = value; });
        return JSON.stringify(result);
      }
      if(body && typeof body === 'object' && typeof body.text === 'function'){
        return await body.text();
      }
      return body;
    }
    if(resource && typeof resource.text === 'function'){
      return await resource.text();
    }
    return null;
  };

  const original = originalFetch || (resource => Promise.reject(new Error('fetch non disponible')));

  global.SPHAIRA_DATA_BRIDGE = {
    getObjectives: () => clone(store),
    storageKey: STORAGE_KEY,
    apiBase: API_BASE
  };

  global.fetch = async function(resource, options = {}){
    const request = typeof resource === 'string' ? null : resource;
    const url = typeof resource === 'string' ? resource : resource.url;
    const method = (options.method || (request && request.method) || 'GET').toUpperCase();

    if(url && url.startsWith(API_BASE)){
      const path = url.slice(API_BASE.length) || '/';

      if(path === '/objectives' && method === 'GET'){
        sortStore();
        return makeJsonResponse(clone(store));
      }

      if(path === '/objectives' && method === 'POST'){
        const raw = await readBody(request, options);
        if(!raw) return badRequest('Corps requis');
        let payload;
        try {
          payload = typeof raw === 'string' ? JSON.parse(raw) : raw;
        } catch(err){
          return badRequest('JSON invalide');
        }
        const objective = sanitizeObjective(payload);
        const existingIndex = store.findIndex(item => item.id === objective.id);
        if(existingIndex > -1){
          store[existingIndex] = objective;
        } else {
          store.push(objective);
        }
        sortStore();
        persist();
        global.dispatchEvent(new CustomEvent('sphaira:objectives', {
          detail: { type: existingIndex > -1 ? 'updated' : 'created', objective: clone(objective) }
        }));
        return makeJsonResponse(objective, { status: existingIndex > -1 ? 200 : 201 });
      }

      if(path.startsWith('/objectives/')){
        const segments = path.split('/').filter(Boolean);
        const id = decodeURIComponent(segments[1] || '');
        const index = store.findIndex(item => item.id === id);

        if(method === 'PUT'){
          const raw = await readBody(request, options);
          if(!raw) return badRequest('Corps requis');
          let payload;
          try {
            payload = typeof raw === 'string' ? JSON.parse(raw) : raw;
          } catch(err){
            return badRequest('JSON invalide');
          }
          const objective = sanitizeObjective({ ...payload, id });
          if(index > -1){
            store[index] = objective;
          } else {
            store.push(objective);
          }
          sortStore();
          persist();
          global.dispatchEvent(new CustomEvent('sphaira:objectives', {
            detail: { type: index > -1 ? 'updated' : 'created', objective: clone(objective) }
          }));
          return makeJsonResponse(objective, { status: index > -1 ? 200 : 201 });
        }

        if(method === 'DELETE'){
          if(index === -1){
            return notFound();
          }
          const [removed] = store.splice(index, 1);
          persist();
          global.dispatchEvent(new CustomEvent('sphaira:objectives', {
            detail: { type: 'deleted', objective: clone(removed) }
          }));
          return makeJsonResponse({ id });
        }
      }

      return notFound();
    }

    return original(resource, options);
  };

  global.addEventListener('storage', (event) => {
    if(event.key === STORAGE_KEY && event.newValue){
      try {
        const parsed = JSON.parse(event.newValue);
        if(Array.isArray(parsed)){
          store = parsed.map(sanitizeObjective).filter(Boolean);
          sortStore();
        }
      } catch(err){
        console.warn('Impossible de synchroniser les objectifs SPHAIRA depuis le stockage.', err);
      }
    }
  });
})(window);
