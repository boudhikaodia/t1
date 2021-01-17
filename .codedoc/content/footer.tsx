import { CodedocConfig,CodedocTheme } from '@codedoc/core';
import { ThemedComponentThis, themedStyle } from '@connectv/jss-theme';
import { Footer as _Footer, GitterToggle$, Watermark} from '@codedoc/core/components';
import { FooterStyle, DarkModeSwitch$} from '@codedoc/core/components';
import {ToCToggle$} from "../components/toggle"


const _FooterStyle = themedStyle((theme: CodedocTheme) => {
  const parent = FooterStyle.style(theme);                     // --> get the style for original footer
  return {
    footer: {
      extend: parent.footer,                                   // --> simply extend them
      '@media screen and (min-width: 1200px)': {               // --> and make the left corner of the footer disappear on desktops
        '& .left': { opacity: 0 },
      },
    }
  } as any;
});

export function Footer(  this: ThemedComponentThis,config: CodedocConfig, renderer: any) {
  const classes = this.theme.classes(_FooterStyle);
  return <div class={classes.footer}>
    <div class="left"><ToCToggle$/></div>
    <div class="main">
      <div class="inside"><span>&#169;</span>{config.page.title.base}</div>
    </div>
    <div class="right"><DarkModeSwitch$/></div>
  </div>
}