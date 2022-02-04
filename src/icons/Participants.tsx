import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Participants = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.multiple-neutral-2_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <circle className="multiple-neutral-2_svg__cls-1" cx={7.5} cy={7.875} r={4.125} />,
    <path className="multiple-neutral-2_svg__cls-1" d="M.75 20.25a6.75 6.75 0 0113.5 0" />,
    <circle className="multiple-neutral-2_svg__cls-1" cx={17.727} cy={10.125} r={3.375} />,
    <path
      className="multiple-neutral-2_svg__cls-1"
      d="M15.813 15.068a5.526 5.526 0 017.437 5.182"
    />
  );

export default Participants;
