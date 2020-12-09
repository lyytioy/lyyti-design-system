import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsMail = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-mail_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="multiple-actions-mail_svg__cls-1"
      x={13.5}
      y={16.5}
      width={10}
      height={7}
      rx={1}
      ry={1}
    />,
    <path
      className="multiple-actions-mail_svg__cls-1"
      d="M13.5 18l4 2.3a2 2 0 001.994 0l4-2.3M.5 15.5a6 6 0 0112 0z"
    />,
    <circle
      className="multiple-actions-mail_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-mail_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-mail_svg__cls-1"
      d="M19.47 10.605a6 6 0 00-6.455-.311"
    />
  );

export default SvgMultipleActionsMail;
