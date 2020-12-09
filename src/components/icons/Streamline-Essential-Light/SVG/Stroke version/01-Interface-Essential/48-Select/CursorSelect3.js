import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorSelect3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-select-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cursor-select-3_svg__a"
      d="M2.5.5h-1a1 1 0 00-1 1v1M18.5.5h1a1 1 0 011 1v1M5.5.498H9M12 .498h3.5M2.5 20.5h-1a1 1 0 01-1-1v-1M5.5 20.498H9M12 20.498h1M.5 5.498v3.5M.5 11.998v3.5M20.5 5.498v3.5M20.5 11.998v1M16.592 23.012c-.066.267-.2.276-.3.019L12.364 12.7c-.1-.257.033-.389.29-.292L23.032 16.3c.257.1.25.231-.017.3l-5.172 1.293z"
    />
  );

export default SvgCursorSelect3;
