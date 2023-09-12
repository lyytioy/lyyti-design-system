import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Sharing = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.25 15a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5ZM18.75 9.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5ZM18.75 21.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
      clipRule="evenodd"
    />,
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.746 9.891 6.508-2.531M8.605 12.928l6.79 3.395"
    />
  );

export default Sharing;
