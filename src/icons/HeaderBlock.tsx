import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
const HeaderBlock = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path
      fill="#1F98CD"
      d="M0 3a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Z"
    />,
    <path
      fill="#fff"
      d="M2.97 17V6.36h1.26v4.578h6.356V6.36h1.26V17h-1.26v-5.012H4.23V17H2.97Zm14.766 0V7.9l-2.841 1.302-.168-1.106 3.29-1.512h.938V17h-1.218Z"
    />
  );
export default HeaderBlock;
