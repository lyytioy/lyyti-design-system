import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const ParticipantNoShow = (props: any) =>
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
      d="m9 10.2 14.8 9.5"
      transform="translate(-0.6 -0.6)"
      fill="none"
      stroke="#D1492E"
      strokeWidth={2.238}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      d="M23.6 13.8c0 .7-.3 1.6-.7 2.5l-11-7.2c1.2-1.3 3-2.1 4.9-2.1 3.9 0 6.8 3 6.8 6.8ZM20.7 20.5c-1 1.5-2.1 3-2.8 3.9-.4.4-1.2.6-1.6.1l-.1-.1c-1.8-2.4-5.8-7.6-5.8-10.6l10.3 6.7Z"
      transform="translate(-0.6 -0.6)"
      fill="#D1492E"
    />
  );

export default ParticipantNoShow;
