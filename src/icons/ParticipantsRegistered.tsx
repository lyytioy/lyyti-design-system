import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const ParticipantRegistered = (props: any) =>
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
    <circle cx={17.5} cy={16.5} r={7.5} fill="#50B54E" transform="translate(-0.95 0)" />,
    <path
      d="m21.25 12.75-4.688 7.5-2.812-3.375"
      transform="translate(-0.95 0)"
      fill="none"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );

export default ParticipantRegistered;
