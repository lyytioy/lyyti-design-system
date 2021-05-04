import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const ParticipantsShow = (props: any) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style />
    </defs>,
    <path
      d="M18.75 11.31a4.49 4.49 0 014.5 4.5c0 1.92-2.69 5.57-3.91 7.14a.78.78 0 01-1.18 0c-1.22-1.57-3.91-5.22-3.91-7.14a4.49 4.49 0 014.5-4.5z"
      fill="#5ab12f"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0}
    />,
    <circle
      cx={7.5}
      cy={4.88}
      r={4.13}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentcolor"
    />,
    <path
      d="M12.21 12.43A6.74 6.74 0 00.75 17.26"
      transform="translate(0 -.01)"
      fill="none"
      stroke="currentcolor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      d="M18.85 15.23a.48.48 0 01.47.48.47.47 0 01-.94 0 .48.48 0 01.47-.48"
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.9}
    />
  );

export default ParticipantsShow;
