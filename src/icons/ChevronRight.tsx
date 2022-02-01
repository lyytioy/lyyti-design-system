import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const ChevronRight = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M.75.75l10.27 10.27L.75 21.29"
    />
  );

export default ChevronRight;
