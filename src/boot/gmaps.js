import * as VueGoogleMaps from 'vue2-google-maps'
import appConfig from 'src/helpers/appConfig.json'

export default async ({ Vue }) => {
  Vue.use(VueGoogleMaps, {
    load: {
      key: appConfig.gmapsKey,
      libraries: 'places', // This is required if you use the Autocomplete plugin
      // OR: libraries: 'places,drawing'
      // OR: libraries: 'places,drawing,visualization'
      // (as you require)

      //// If you want to set the version, you can do so:
      // v: '3.26',
    }
  })
};
