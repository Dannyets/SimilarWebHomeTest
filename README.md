# SimilarWebHomeTest
**Background**
I used some of my common templates and components for basic infrastructure:
  1. js.infrastructure - https://github.com/Dannyets/Js.Infrastructure - i created some basic infrastructrue like controllers, repositories, services, clients, utils, factories for node js. I copied some of the code to the project for quick server side setup.
  2. node js web api template - https://github.com/Dannyets/NodeJsWebApiTemplate - i created this template for quick setup of basic functionalities of web api server.
  3. react - i didn't opened a repository for a template yet but i used some of my react app templates, for one of my other projects for quick environment setup.

**How to start?**
1. Execute Web Api
```
cd web-api
run npm i
npm start
cd .. 
```

2. Execute Web App
```
cd web-app
run npm i
npm start
```

3. Enjoy.

**What would i improve if i had more time?**
- Functionality
  1. Create youtube api client and get more information about video.
  2. Wrap all axios requests in a playlist client.
  3. Replace all css with styled components.
  4. Replace all .js files with ts files.
  5. Make the app prettier.
  6. Loaders to indicate that action is dispatched to the server.
  
- Server Functionality + Scale
  1. Add Redis and Database to store all playlist records
      - Database to save all data instead of JSON (for persistence).
      - Redis to enable fast playlist requesting - this will allow multiple instances to be created, each instance will first try to get playlist from redis, if it won't succeed it will load it from database.
  2. Web sockets - if one of the clients changes the playlist, the others will get the updated playlist once they refresh the page. With web sockets its possible to push changes from the server to the clients.
