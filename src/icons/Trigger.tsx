import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Trigger = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.18262 14.003C5.96535 14.003 5.8857 13.8529 6.00503 13.6673L12.7843 
      3.12177C12.9035 2.93637 13.0001 2.96432 13.0001 3.19442V9.58862C13.0001 9.81415 
      13.1827 9.99697 13.3935 9.99697H17.414C17.6313 9.99697 17.7109 10.1471 17.5916 10.3327L10.8123 
      20.8782C10.6931 21.0636 10.5965 21.0357 10.5965 20.8056V14.4114C10.5965 14.1859 10.4139 14.003 
      10.2031 14.003H6.18262Z"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  );

export default Trigger;
