import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
const ParticipantsDeclinedOutline = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path
      d="M7.7 9.2a4.1 4.1 0 1 0 0-8.2 4.1 4.1 0 0 0 0 8.2ZM12.4 12.6c-2.7-2.6-6.9-2.6-9.5.1C1.7 14 1 15.7 1 17.4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      d="m22.714 10.286-6.428 6.428M16.286 10.286l6.428 6.428"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.301}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
export default ParticipantsDeclinedOutline;
