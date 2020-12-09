import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlagCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="flag-cash_svg__a"
      d="M.5 23.5V.5M.5 19.5a21.794 21.794 0 016-1c3 0 7.5 2 10.5 2a18.515 18.515 0 005.849-1.244 1 1 0 00.651-.938V4.44a1 1 0 00-1.321-.947A17.367 17.367 0 0117 4.5c-3 0-7.5-2-10.5-2a21.794 21.794 0 00-6 1zM12.5 8.5v-1"
    />,
    <path
      className="flag-cash_svg__a"
      d="M14 8.5h-2.033a1.342 1.342 0 00-.5 2.588l2.063.825a1.341 1.341 0 01-.5 2.587H11M12.5 15.5v-1"
    />
  );

export default SvgFlagCash;
