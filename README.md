# ATMOS-PROJECT

## Configuration de la synchronisation SPHAIRA ↔︎ ECLIPTICA

La timeline ECLIPTICA lit les objectifs SPHAIRA via le bridge `shared/sphaira-data.js`. Ce module expose une API REST simulée à l'URL `memory://sphaira` et prend en charge les événements `sphaira:objectives`, ce qui permet à tous les clients (ECLIPTICA, console SPHAIRA, ORIS) de partager le même stockage local sans appeler un backend distant.

### Rediriger ECLIPTICA vers votre instance SPHAIRA

Il n'est **pas nécessaire de modifier le code SPHAIRA** pour consommer une API distante. Vous pouvez redéfinir la variable globale `SPHAIRA_API_BASE` avant de charger `shared/sphaira-data.js` dans `index.html` :

```html
<script>
  window.SPHAIRA_API_BASE = "https://votre-api-sphaira.example.com";
</script>
<script src="shared/sphaira-data.js"></script>
<script src="sphaira/console.js"></script>
<script src="index.js"></script>
```

Si vous conservez l'API mémoire, laissez `SPHAIRA_API_BASE` à sa valeur par défaut (`memory://sphaira`) et partagez simplement le même `localStorage` entre vos onglets.

### Réagir aux événements de mise à jour

Lorsque vous utilisez une API distante, assurez-vous de relancer `loadObjectivesFromSphaira()` après chaque écriture (ou d'émettre un équivalent de l'événement `sphaira:objectives`) pour maintenir l'interface synchronisée.

### Personnaliser les objectifs initiaux

Avant de charger `shared/sphaira-data.js`, vous pouvez également définir `window.SPHAIRA_DEFAULT_OBJECTIVES` avec votre propre tableau d'objectifs pour remplacer ceux fournis par défaut par le bridge.
