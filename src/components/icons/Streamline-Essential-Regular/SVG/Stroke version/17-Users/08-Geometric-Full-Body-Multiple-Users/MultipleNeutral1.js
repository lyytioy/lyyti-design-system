import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleNeutral1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-neutral-1_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="multiple-neutral-1_svg__cls-1" cx={6} cy={3.75} r={3} />,
    <path
      className="multiple-neutral-1_svg__cls-1"
      d="M11.25 13.5a5.25 5.25 0 00-10.5 0v2.25H3l.75 7.5h4.5l.75-7.5h2.25z"
    />,
    <circle
      className="multiple-neutral-1_svg__cls-1"
      cx={18}
      cy={3.75}
      r={3}
    />,
    <path
      className="multiple-neutral-1_svg__cls-1"
      d="M13.5 15.75H15l.75 7.5h4.5l.75-7.5h2.25V13.5a5.25 5.25 0 00-9.75-2.7"
    />
  );

export default SvgMultipleNeutral1;
