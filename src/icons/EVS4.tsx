import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const EVS4 = (props: any) =>
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
      d="M3,12.07A9,9,0,1,1,12.05,21a9,9,0,0,1-9-8.91Zm16.11,3.57a8,8,0,1,0-1.43,2A8.39,8.39,0,0,0,19.11,15.64Z"
      transform="translate(0 0)"
    />,
    <path
      className="cls-3"
      d="M14.9,10.92A1,1,0,1,1,14.85,9a1,1,0,0,1,1,.94v0a1,1,0,0,1-.95,1h0Z"
      transform="translate(0 0)"
    />,
    <path
      className="cls-3"
      d="M8.9,11a1,1,0,1,1,1-1h0a1,1,0,0,1-1,1Z"
      transform="translate(0 0)"
    />,
    <path
      className="cls-2"
      d="M12.05,17a5.63,5.63,0,0,1-4.73-2.49l.83-.56a4.62,4.62,0,0,0,7.76-.07l.82.51a5.64,5.64,0,0,1-4.05,2.57C12.47,17,12.26,17,12.05,17Z"
      transform="translate(0 0)"
    />
  );

export default EVS4;
