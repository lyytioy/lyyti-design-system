import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Attachment = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path d="M21.843 3.455a6.961 6.961 0 00-9.846 0L1.619 13.832a5.128 5.128 0 007.252 7.252l8.429-8.431A3.293 3.293 0 1012.646 8l-5.189 5.184A1 1 0 108.871 14.6l5.189-5.191a1.294 1.294 0 011.829 1.83L7.457 19.67a3.128 3.128 0 01-4.424-4.424L13.411 4.869a4.962 4.962 0 117.018 7.018l-7.783 7.783a1 1 0 101.414 1.414l7.783-7.784a6.96 6.96 0 000-9.846z" />
  );

export default Attachment;
