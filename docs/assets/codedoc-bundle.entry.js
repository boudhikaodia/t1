import { getRenderer } from '/Users/siboon/Documents/DecimalSystem/10-19/14-boudhikaodia/cocod-test/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/Users/siboon/Documents/DecimalSystem/10-19/14-boudhikaodia/cocod-test/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/Users/siboon/Documents/DecimalSystem/10-19/14-boudhikaodia/cocod-test/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/Users/siboon/Documents/DecimalSystem/10-19/14-boudhikaodia/cocod-test/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/Users/siboon/Documents/DecimalSystem/10-19/14-boudhikaodia/cocod-test/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/Users/siboon/Documents/DecimalSystem/10-19/14-boudhikaodia/cocod-test/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/Users/siboon/Documents/DecimalSystem/10-19/14-boudhikaodia/cocod-test/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/Users/siboon/Documents/DecimalSystem/10-19/14-boudhikaodia/cocod-test/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/Users/siboon/Documents/DecimalSystem/10-19/14-boudhikaodia/cocod-test/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/Users/siboon/Documents/DecimalSystem/10-19/14-boudhikaodia/cocod-test/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/Users/siboon/Documents/DecimalSystem/10-19/14-boudhikaodia/cocod-test/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/Users/siboon/Documents/DecimalSystem/10-19/14-boudhikaodia/cocod-test/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/Users/siboon/Documents/DecimalSystem/10-19/14-boudhikaodia/cocod-test/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/Users/siboon/Documents/DecimalSystem/10-19/14-boudhikaodia/cocod-test/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from '/Users/siboon/Documents/DecimalSystem/10-19/14-boudhikaodia/cocod-test/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from '/Users/siboon/Documents/DecimalSystem/10-19/14-boudhikaodia/cocod-test/.codedoc/node_modules/@codedoc/core/dist/es6/components/footnote/gather-footnotes.js';gatherFootnotes();
import { ToCToggle } from '/Users/siboon/Documents/DecimalSystem/10-19/14-boudhikaodia/cocod-test/.codedoc/components/toggle/index.tsx';
import { DarkModeSwitch } from '/Users/siboon/Documents/DecimalSystem/10-19/14-boudhikaodia/cocod-test/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/Users/siboon/Documents/DecimalSystem/10-19/14-boudhikaodia/cocod-test/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';
import { ToCPrevNext } from '/Users/siboon/Documents/DecimalSystem/10-19/14-boudhikaodia/cocod-test/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';
import { CollapseControl } from '/Users/siboon/Documents/DecimalSystem/10-19/14-boudhikaodia/cocod-test/.codedoc/node_modules/@codedoc/core/dist/es6/components/collapse/collapse-control.js';

const components = {
  'MY9GazKPZ1Api/0n1PUbQw==': ToCToggle,
  'nVxBwzV6ei6bxaC5Ddch7A==': DarkModeSwitch,
  'mIrvqB4dhrYCBpJHMum92w==': ConfigTransport,
  'wpnCM9qjiXK4NmpM6tY3Ow==': ToCPrevNext,
  'hX5gwen4+eiJ7KYwne/Bog==': CollapseControl
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
