import {
  pageCache,
  imageCache,
  staticResourceCache,
  googleFontsCache,
  offlineFallback,
} from 'workbox-recipes';
import { precacheAndRoute } from 'workbox-precaching';

// Include offline.html in the manifest
precacheAndRoute(self.__WB_MANIFEST);

pageCache();

googleFontsCache();

staticResourceCache();

imageCache();

offlineFallback();