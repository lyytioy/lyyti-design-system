import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
const ClockContained = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path
      fill="currentColor"
      d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Z"
    />,
    <path stroke="#fff" strokeLinecap="round" strokeWidth={2} d="M12 8.25V13l5.25 4.25" />
  );
export default ClockContained;
