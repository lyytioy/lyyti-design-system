import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlagCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="flag-check_svg__a"
      d="M.5 23.5V.5M.5 19.5a21.794 21.794 0 016-1c3 0 7.5 2 10.5 2a18.515 18.515 0 005.849-1.244 1 1 0 00.651-.938V4.44a1 1 0 00-1.32-.947A17.367 17.367 0 0117 4.5c-3 0-7.5-2-10.5-2a21.794 21.794 0 00-6 1v16z"
    />,
    <circle className="flag-check_svg__a" cx={12.5} cy={11.5} r={4} />,
    <path
      className="flag-check_svg__a"
      d="M14.282 10.337l-1.937 2.582a.5.5 0 01-.754.054l-1-1"
    />
  );

export default SvgFlagCheck;
