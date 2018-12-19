// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC_Z4M5SkU9r4tfmuiHbZBUsOX5UCYghJE',
    databaseURL: 'https://citymax-faacf.firebaseio.com',
    projectId: 'citymax-faacf',
    authDomain: 'citymax-faacf.firebaseapp.com',
    messagingSenderId: "722359591029"
  },
  vapidKey: 'BDFIJVTCkc5vs7q05_V660Dl8-7EStcHRNhmFzDq2Ifplr0izLGt_27YkawocI1tZmMTaU4JnBZh2tTRdifYPVc'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
