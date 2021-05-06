import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const ParticipantsRegistered = (props: any) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.single-neutral-actions-check-2_svg__cls-1,.single-neutral-actions-check-2_svg__cls-2{fill:none;stroke:#5ab12f;stroke-linecap:round;stroke-linejoin:round}.single-neutral-actions-check-2_svg__cls-2{stroke:currentcolor}'
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-check-2_svg__cls-2"
      d="M.75 17.25a6.753 6.753 0 019.4-6.208"
    />,
    <circle className="single-neutral-actions-check-2_svg__cls-2" cx={7.5} cy={4.875} r={4.125} />,
    <path
      className="single-neutral-actions-check-2_svg__cls-1"
      d="M23.25 17.25a6 6 0 11-6-6M23.25 12.749l-5.47 5.47a.749.749 0 01-1.06 0L15 16.5"
      strokeWidth={1.8}
    />
  );

export default ParticipantsRegistered;
