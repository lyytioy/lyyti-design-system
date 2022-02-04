import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const StarFilled = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path d="M13.61 1.56l2.95 6.35h5.69a1.41 1.41 0 011.5 1.32 1.43 1.43 0 01-.47 1.1l-5 4.91 2.76 6.34a1.5 1.5 0 01-.81 2 1.49 1.49 0 01-1.33-.09l-6.65-3.74-6.66 3.76a1.51 1.51 0 01-2.14-1.88l2.8-6.35-5-4.9a1.42 1.42 0 01-.13-2 1.4 1.4 0 011.13-.47h5.71l3-6.36a1.53 1.53 0 012.03-.61 1.48 1.48 0 01.62.62z" />
  );

export default StarFilled;
