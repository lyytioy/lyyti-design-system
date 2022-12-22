import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const ParticipantShow = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path
      d="M7.7 9.2a4.1 4.1 0 1 0 0-8.2 4.1 4.1 0 0 0 0 8.2ZM12.4 12.6c-2.7-2.6-6.9-2.6-9.5.1C1.7 14 1 15.7 1 17.4"
      fill="none"
      stroke="#7A8389"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      d="M17.7 7c-3.8 0-6.7 3.1-6.7 6.7 0 2.9 4 8.4 5.9 10.6 0 0 0 .1.1.1.4.4 1.3.4 1.7-.1 1.8-2.4 5.9-7.8 5.9-10.6C24.4 10 21.5 7 17.7 7Zm0 8.9c-1.4 0-2.4-1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.4 0 2.5 1.1 2.5 2.4 0 1.4-1.1 2.4-2.5 2.4Z"
      transform="translate(-0.6 -0.6)"
      fill="#50B54E"
    />
  );

export default ParticipantShow;
