import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="love-it-share_svg__a"
      d="M12 21L2.2 10.908A5.667 5.667 0 011.113 4.3 5.839 5.839 0 0110.4 2.814L12 4.273l1.6-1.459A5.84 5.84 0 0122.888 4.3a5.65 5.65 0 01.5 3.7"
    />,
    <circle className="love-it-share_svg__a" cx={13.75} cy={16.749} r={2.25} />,
    <circle className="love-it-share_svg__a" cx={21.25} cy={19.749} r={2.25} />,
    <circle className="love-it-share_svg__a" cx={21.25} cy={12.249} r={2.25} />,
    <path
      className="love-it-share_svg__a"
      d="M15.675 15.594l3.65-2.19M15.838 17.584l3.324 1.33"
    />
  );

export default SvgLoveItShare;
