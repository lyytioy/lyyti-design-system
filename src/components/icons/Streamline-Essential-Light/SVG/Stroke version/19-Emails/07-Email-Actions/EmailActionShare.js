import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="email-action-share_svg__a"
      cx={13.75}
      cy={18.25}
      r={2.25}
    />,
    <circle
      className="email-action-share_svg__a"
      cx={21.25}
      cy={21.25}
      r={2.25}
    />,
    <circle
      className="email-action-share_svg__a"
      cx={21.25}
      cy={13.75}
      r={2.25}
    />,
    <path
      className="email-action-share_svg__a"
      d="M15.675 17.095l3.65-2.19M15.838 19.085l3.324 1.33M10.5 14.5H2A1.5 1.5 0 01.5 13V2A1.5 1.5 0 012 .5h18A1.5 1.5 0 0121.5 2v6.5"
    />,
    <path className="email-action-share_svg__a" d="M21.067.946L11 9 .933.946" />
  );

export default SvgEmailActionShare;
