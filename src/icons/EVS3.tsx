import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const EVS3 = (props: any) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.cls-1{opacity:0.1;isolation:isolate;}.cls-2{fill-rule:evenodd;}'
        }
      </style>
    </defs>,
    <circle className="cls-1" cx="12" cy="12" r="12" />,
    <path
      className="cls-2"
      d="M3,12.1A9,9,0,1,1,12.09,21,9,9,0,0,1,3,12.1Zm16.11,3.57A8,8,0,1,0,8.35,19.16a7.91,7.91,0,0,0,3.73.88A8,8,0,0,0,19.14,15.67Z"
      transform="translate(0 -0.02)"
    />,
    <path className="cls-3" d="M7,13.49l10.11.22,0,1L7,14.46Z" transform="translate(0 -0.02)" />,
    <path
      className="cls-3"
      d="M15,11a1,1,0,0,1-1-1,1,1,0,1,1,1,1Z"
      transform="translate(0 -0.02)"
    />,
    <path
      className="cls-3"
      d="M9,11.07a1,1,0,1,1,1-1,1,1,0,0,1-1,1Z"
      transform="translate(0 -0.02)"
    />
  );

export default EVS3;
