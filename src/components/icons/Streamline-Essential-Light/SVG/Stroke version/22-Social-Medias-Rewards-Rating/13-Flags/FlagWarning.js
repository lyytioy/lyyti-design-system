import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlagWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="flag-warning_svg__a"
      d="M.5 23.5V.5M.5 19.5a21.794 21.794 0 016-1c3 0 7.5 2 10.5 2a18.515 18.515 0 005.849-1.244 1 1 0 00.651-.938V4.44a1 1 0 00-1.321-.947A17.367 17.367 0 0117 4.5c-3 0-7.5-2-10.5-2a21.794 21.794 0 00-6 1zM12.5 13.5v-6M12.496 15.5"
    />,
    <path
      className="flag-warning_svg__a"
      d="M12.491 15.5a.246.246 0 00-.241.255.254.254 0 00.25.245.246.246 0 00.241-.255.254.254 0 00-.241-.245M12.5 15.5h-.005"
    />
  );

export default SvgFlagWarning;
