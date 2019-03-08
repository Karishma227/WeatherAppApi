// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
  apiKey: "AIzaSyCZfsuxYsM49p4cGFN7CcAJ-wILbP2J-sY",
  authDomain: "weatherappapi-b8548.firebaseapp.com",
  databaseURL: "https://weatherappapi-b8548.firebaseio.com",
  projectId: "weatherappapi-b8548",
  storageBucket: "weatherappapi-b8548.appspot.com",
  messagingSenderId: "538727205265"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
