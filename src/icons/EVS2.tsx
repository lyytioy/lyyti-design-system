import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const EVS2 = (props: any) =>
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
      d="M21,11.91A9,9,0,1,0,12.1,21h0A9,9,0,0,0,21,11.92ZM4.94,15.8A8,8,0,0,1,17.39,6.08,8.25,8.25,0,0,1,19.2,8.5,8,8,0,0,1,6.43,17.77,8.66,8.66,0,0,1,4.94,15.8Z"
      transform="translate(0 0)"
    />,
    <path
      className="cls-2"
      d="M12.74,14.25a3.35,3.35,0,0,1,2,1.21l.76-.6A4.31,4.31,0,0,0,9.4,14.1h0a4,4,0,0,0-.77.76l.77.59A3.34,3.34,0,0,1,12.74,14.25Z"
      transform="translate(0 0)"
    />,
    <path className="cls-3" d="M9,11.05a1,1,0,0,0,0-2,1,1,0,1,0,0,2Z" transform="translate(0 0)" />,
    <path
      className="cls-3"
      d="M15,11a1,1,0,1,0-1-1h0a1,1,0,0,0,1,1h0Z"
      transform="translate(0 0)"
    />
  );

export default EVS2;
