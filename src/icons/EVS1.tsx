import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const EVS1 = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>{'.cls-1{opacity:0.1;isolation:isolate;}'}</style>
    </defs>,
    <circle className="cls-1" cx="12" cy="12" r="12" />,
    <path
      className="cls-2"
      d="M20.92,11.88a9,9,0,1,0-2.57,6.4A9,9,0,0,0,20.92,11.88ZM4.85,15.75a8,8,0,1,1,1.48,2A7.9,7.9,0,0,1,4.85,15.75Z"
      transform="translate(0.08 0.03)"
    />,
    <path
      className="cls-2"
      d="M8.9,11a1,1,0,0,0,0-1.95,1,1,0,0,0,0,1.95Z"
      transform="translate(0.08 0.03)"
    />,
    <path
      className="cls-2"
      d="M14.92,11a1,1,0,1,0-1-1,1,1,0,0,0,1,1Z"
      transform="translate(0.08 0.03)"
    />,
    <path
      className="cls-2"
      d="M11.69,13A4.66,4.66,0,0,1,16,15.26c.07.14.14.27.2.41l.91-.4-.24-.5a5.61,5.61,0,0,0-10,.59l.91.38A4.67,4.67,0,0,1,11.69,13Z"
      transform="translate(0.08 0.03)"
    />
  );

export default EVS1;
