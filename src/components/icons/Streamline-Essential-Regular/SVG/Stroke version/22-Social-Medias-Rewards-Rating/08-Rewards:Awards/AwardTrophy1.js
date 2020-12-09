import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardTrophy1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-trophy-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="award-trophy-1_svg__a"
      d="M18 18.75H6A2.25 2.25 0 003.75 21 2.25 2.25 0 006 23.25h12A2.25 2.25 0 0020.25 21 2.25 2.25 0 0018 18.75z"
    />,
    <circle className="award-trophy-1_svg__a" cx={12} cy={4.5} r={3.75} />,
    <path
      className="award-trophy-1_svg__a"
      d="M12 11.25A8.225 8.225 0 015.944 8.6L9.75 18.75h4.5L18.056 8.6A8.225 8.225 0 0112 11.25z"
    />
  );

export default SvgAwardTrophy1;
