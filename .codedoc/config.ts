
import { configuration,  DefaultMarkdownCustomComponents  } from '@codedoc/core';

import { theme } from './theme';
import { Card } from './components/card';      // --> import the card component itself


export const config = /*#__PURE__*/configuration({
  theme,                                  // --> add the theme. modify `./theme.ts` for chaning the theme.
  
  page: {
    favicon: '/docs/assets/favicon.png',
    title: {
      base: 'boudhikaodia.org'                  // --> the base title of your doc pages
    }
  },
  markdown: {                                  // --> update markdown config
    customComponents: {                        // --> add to custom components
      ...DefaultMarkdownCustomComponents,      // --> make sure to add default markdown components. otherwise the default components will not work!                                 // --> add our own card component
    }
  },
  
});
