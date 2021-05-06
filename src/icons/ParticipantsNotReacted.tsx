import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const ParticipantsNotReacted = (props: any) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.single-neutral-actions-hourglass_svg__a,.single-neutral-actions-hourglass_svg__cls-2{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke:#25abc6}.single-neutral-actions-hourglass_svg__cls-2{stroke:currentcolor}'
        }
      </style>
    </defs>,
    <path
      d="M.75 17.25a6.76 6.76 0 016.76-6.75 6.85 6.85 0 012.64.54"
      className="single-neutral-actions-hourglass_svg__cls-2"
    />,
    <circle cx={7.5} cy={4.88} r={4.13} className="single-neutral-actions-hourglass_svg__cls-2" />,
    <path
      d="M14.41 9.22a.86.86 0 00-.9.82v1.29A4.3 4.3 0 0018 15.41a4.31 4.31 0 004.51-4.08V10a.86.86 0 00-.9-.82zM14.41 22.41a.86.86 0 01-.9-.82v-1.28A4.31 4.31 0 0118 16.22a4.32 4.32 0 014.51 4.09v1.28a.86.86 0 01-.9.82z"
      className="single-neutral-actions-hourglass_svg__a"
      strokeWidth={1.8}
    />,
    <path
      d="M22 22.36a4.83 4.83 0 00-4-2.81 4.82 4.82 0 00-3.93 2.81"
      className="single-neutral-actions-hourglass_svg__a"
      strokeWidth={1.8}
    />
  );

export default ParticipantsNotReacted;
