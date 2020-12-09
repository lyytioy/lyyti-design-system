import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlagInformation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag-information_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="flag-information_svg__a"
      d="M.5 23.5V.5M.5 19.5a21.794 21.794 0 016-1c3 0 7.5 2 10.5 2a18.515 18.515 0 005.849-1.244 1 1 0 00.651-.938V4.44a1 1 0 00-1.32-.947A17.367 17.367 0 0117 4.5c-3 0-7.5-2-10.5-2a21.794 21.794 0 00-6 1v16z"
    />,
    <path
      className="flag-information_svg__a"
      d="M12.5 15.5v-5a1 1 0 00-1-1h-1M10.5 15.5h4M12.5 7a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />
  );

export default SvgFlagInformation;
