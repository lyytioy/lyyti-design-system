import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const EVS5 = (props: any) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>{'.cls-1{opacity:0.1;isolation:isolate;}.cls-2{fill-rule:evenodd;}'}</style>
    </defs>,
    <circle className="cls-1" cx="12" cy="12" r="12" />,
    <path
      className="cls-2"
      d="M3,12.48A9,9,0,1,1,12.49,21h-.83A9,9,0,0,1,3,12.48Zm16.13,3.17a8.09,8.09,0,1,0-1.44,2,7.84,7.84,0,0,0,1.44-2Z"
    />,
    <path
      className="cls-2"
      d="M6.53,12l10.94-.1A5.47,5.47,0,1,1,6.53,12Zm9.88.88L7.63,13h0a4.5,4.5,0,0,0,8.78-.09Z"
    />,
    <path className="cls-3" d="M15,10.5a1,1,0,1,1,1-1h0a1,1,0,0,1-1,1Z" />,
    <path className="cls-3" d="M9,10.55a1,1,0,0,1-.94-1,1,1,0,1,1,1,1H9Z" />
  );

export default EVS5;
