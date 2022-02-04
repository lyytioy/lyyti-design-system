import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const ChevronUp = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M.75 11.02L11.02.75l10.27 10.27"
    />
  );

export default ChevronUp;
