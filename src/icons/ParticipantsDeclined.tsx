import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const ParticipantsDeclined = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path
      className="participants_declined_svg"
      d="M7.7 9.2a4.1 4.1 0 1 0 0-8.2 4.1 4.1 0 0 0 0 8.2ZM12.4 12.6c-2.7-2.6-6.9-2.6-9.5.1C1.7 14 1 15.7 1 17.4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <circle cx={16.5} cy={16.5} r={7.5} fill="#CF482E" />,
    <path
      d="m19.714 13.286-6.428 6.428M13.286 13.286l6.428 6.428"
      stroke="#fff"
      strokeWidth={2.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );

export default ParticipantsDeclined;
