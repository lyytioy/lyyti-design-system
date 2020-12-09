import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="email-action-share_svg__a" cx={13.5} cy={18} r={2.25} />,
    <circle className="email-action-share_svg__a" cx={21} cy={21} r={2.25} />,
    <circle className="email-action-share_svg__a" cx={21} cy={13.5} r={2.25} />,
    <path
      className="email-action-share_svg__a"
      d="M15.425 16.845l3.65-2.19M15.588 18.835l3.324 1.33M9 15.75H2.25a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h18a1.5 1.5 0 011.5 1.5v6"
    />,
    <path
      className="email-action-share_svg__a"
      d="M21.411 1.3l-8.144 6.264a3.308 3.308 0 01-4.034 0L1.089 1.3"
    />
  );

export default SvgEmailActionShare;
