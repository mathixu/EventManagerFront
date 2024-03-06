## Documentation de l'Architecture de l'Application Angular Standalone

### Vue d'ensemble de l'Architecture

Votre projet Angular Standalone est structuré de manière à séparer clairement les différentes préoccupations et fonctionnalités. Voici un aperçu des répertoires principaux et de leur rôle dans l'application :

1. **/app** : C'est le cœur de votre application Angular, contenant la majorité du code source.

   - **/components** : Contient les composants réutilisables de l'application. Ces composants représentent des éléments d'interface utilisateur qui peuvent être partagés et réutilisés à travers différentes pages ou d'autres composants.

   - **/core** : Inclut les services liés aux API et toute logique métier centralisée. Ce répertoire est idéal pour placer des services singleton, des gardes, des intercepteurs HTTP, et d'autres services globaux.

   - **/pages** : Contient les composants qui représentent des pages complètes de l'application. Chaque composant dans ce répertoire correspond généralement à une route dans l'application Angular.

2. **/assets** : Contient les fichiers statiques comme les images, les feuilles de style globales, et d'autres ressources statiques nécessaires à l'application.

3. **/environments** : Fournit des fichiers de configuration spécifiques à l'environnement. Par exemple, vous pouvez avoir des configurations différentes pour les environnements de développement, de test et de production.

4. **/types** : Utilisé pour définir des types TypeScript personnalisés ou des interfaces utilisées à travers l'application. Cela permet de renforcer la cohérence du typage et de faciliter la maintenance du code.

### Exécution de l'Application

#### Prérequis
- Node.js installé
- Angular CLI installé

#### Installation des Dépendances
1. Ouvrez une invite de commandes ou un terminal.
2. Naviguez jusqu'à la racine du projet Angular.
3. Exécutez la commande suivante pour installer les dépendances nécessaires :
   ```
   npm install
   ```

#### Lancement de l'Application en Mode Développement
1. Dans le même terminal, exécutez la commande suivante pour démarrer le serveur de développement Angular :
   ```
   ng serve
   ```
2. Ouvrez un navigateur web et accédez à `http://localhost:4200`. L'application Angular devrait maintenant être visible et fonctionnelle.

#### Build pour la Production
Pour construire l'application pour un déploiement en production :
1. Exécutez la commande suivante :
   ```
   ng build --prod
   ```
2. Les fichiers de build seront créés dans le répertoire `/dist`. Ces fichiers peuvent être déployés sur un serveur web.
