import { CodedocConfig } from '@codedoc/core';
import { Header as _Header, GithubButton, Watermark } from '@codedoc/core/components';
import { ToCToggle$ } from '@codedoc/core/components'; 

export function Header(config: CodedocConfig, renderer: any) {
  return (
    <_Header>
      <div style=" opacity: 0.5;">
          <a href="/"> 
                <img src="/docs/assets/favicon.png" alt="boudhikaodialogo" style="width:42px;height:42px;"/>
           </a>
     </div>
    </_Header>
  )
}
