import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleMail = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-mail_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-mail_svg__a"
      d="M7.328 4.897L8.5.5h7l1.172 4.398M7.31 19.037L8.5 23.5h7l1.206-4.42"
    />,
    <circle
      className="smart-watch-circle-mail_svg__a"
      cx={12}
      cy={12}
      r={8.5}
    />,
    <rect
      className="smart-watch-circle-mail_svg__a"
      x={7.5}
      y={8.5}
      width={9}
      height={7}
      rx={1}
      ry={1}
    />,
    <path
      className="smart-watch-circle-mail_svg__a"
      d="M7.5 10l3.5 2.3a2 2 0 002 0l3.5-2.3"
    />
  );

export default SvgSmartWatchCircleMail;
