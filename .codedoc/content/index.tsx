import { RendererLike } from '@connectv/html';
import { File } from 'rxline/fs';
import { Page, Meta, ContentNav, Fonts, ToC, GithubSearch$ } from '@codedoc/core/components';
import { LeftHeader, LeftHeaderPadding } from './left-header';          // --> import the left-header and its padding element
import { CodedocTheme } from '@codedoc/core';  
import { config } from '../config';
import { Header } from './header';
import { Footer } from './footer';

import { ThemedComponentThis, themedStyle } from '@connectv/jss-theme';



const BodyStyle = themedStyle((theme: CodedocTheme) => ({
  '@font-face': {
    fontFamily: 'NotoSansOriyaUI-Regular',
    src: 'url(/docs/assets/font/NotoSansOriyaUI-Regular.ttf)'
  },
  'odiaFont': { 
    'font-family': "NotoSansOriyaUI-Regular",
    'font-size':"1.2em"
  }
}));



function OdiaFont(                                              // --> the main left-header component
  this: ThemedComponentThis,
  _: any,
  renderer: any,
  content:any
) {
  const classes = this.theme.classes(BodyStyle);                   // --> just get the styles resolved based on theme
  return <div class={classes.odiaFont}>
      {content}
      </div>           
}



export function content(  this: ThemedComponentThis,_content: HTMLElement, toc: HTMLElement, renderer: RendererLike<any, any>, file: File<string>) {
  
  return (
    <Page title={config.page.title.extractor(_content, config, file)}
          favicon={config.page.favicon}
          meta={<Meta {...config.page.meta}/>}
          fonts={<Fonts {...config.page.fonts}/>}

          scripts={config.page.scripts}
          stylesheets={config.page.stylesheets}

          header={<Header {...config}/>}
          footer={<Footer {...config}/>}
          toc={
            <ToC>
            <LeftHeaderPadding/>          
              {toc}
            
            </ToC>
          }>

            <div style="  text-align: justify; text-justify: inter-word;">
              
            <OdiaFont> {_content}</OdiaFont>
            </div>
           
    
      <ContentNav content={_content}/>
      <LeftHeader/>                          
    </Page>
  )
}
