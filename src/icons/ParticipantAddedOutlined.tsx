import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const ParticipantAddedOutlined = (props: any) =>
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
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      d="M16.5 13.1v6.8M19.9 16.5h-6.8"
    />
  );
export default ParticipantAddedOutlined;
