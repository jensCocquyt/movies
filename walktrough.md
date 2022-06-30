### Create project

- npm i -g @angular/cli
- ng new movies
- install angular language service plugin
- ng serve
- App structuur bekijken
- Package.json
- Index.html
- Main.js
- ng add @ng-bootstrap/ng-bootstrap@13.0.0-beta.1


### Add header

- Alles verwijderen uit app.component.
- header component aanmaken en zorg ervoor dat de titel van uit het app component wordt doorgegeven
    - kan met input of content projection
    - show encapsulation in devtools (emulated vs shadowdom)

### Add in mem movie service en model

- setup mock api
    - npm install angular-in-memory-web-api --save-dev
    - Create database folder onder app en add in-memory-movie.service.ts, movie.model.ts en movies.data.ts (doorsturen)
    - add to HttpClientInMemoryWebApiModule.forRoot(InMemoryMovieService) to app.module imports

### Show all movies on home page
- show pipes and directives part in ppt
- add movies as a prop on app.component
- create movie overview component
- create movie component
    -movie title uppercase pipe
- use *ngFor

### add movie form component
- show forms part in ppt
- create a movie-form component
- create a form with formgroup for fields: title, year and isFavorite
- add required validators on title and and year
- add output for submit action
- handle form output in app component by pushing movie to array

### angular devtools
- explain cd (every change inputs, events, settimeout/interva etc, whole component tree etc)
- open angular devtools (https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh)
    - show component tree
    - enable profiler and change year value => all components in CD
- explain onpush (input by reference, only impacted components in cdref tree)
- enable onpush everywhere and show differences in angular devtools


### move form to other route
- show router part of ppt
- add empty path to to router with redirect to 'movies path
- add movies path to to router with component app movie overview
- add movies/edit path to to router with form component as component
- replace 'app-movie-overview' tag with 'router-outlet' tag in app component
- move movies property to movie-overview component
- add 'add' link in header with routerlink

### Add movie service
- show httpclient in ppt
- create movie.service onder services folder manueel
    - inject HttpClient (module should be added)
    - add endpoint 'api/movies' to environment
    - add function to get all
    - add catchError and demonstrate with wrong api url
    - use getMovies in movie overview component with async pipe
    - add addMovie in form component with subscribe and router navigate to ho

### Highlight todo item on hover
- use custom directive with mouseEnter/mouseLeave
- 2 options => change style on hover or add class on hover

### Navigate to form edit component
- add edit/:id path to to router with component form
- get todoById oninit with snapshot id
- keep movie object as local prop
- patch form
- update or add ;


### DIY
 -- add overview template (contentchildren with count)
 -- add custom year validator
 -- control value accessor
 -- implement ngrx
 -- async validator
 -- edit view lazy loaded
 -- edit view in sidepanel


