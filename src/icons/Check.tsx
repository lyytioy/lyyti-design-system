import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Check = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <circle cx={12} cy={12} r={12} fill="currentColor" fillOpacity={0.5} />,
    <path
      d="m17.833 6.167-7.291 11.666-4.375-5.25"
      stroke="#fff"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );

export default Check;
