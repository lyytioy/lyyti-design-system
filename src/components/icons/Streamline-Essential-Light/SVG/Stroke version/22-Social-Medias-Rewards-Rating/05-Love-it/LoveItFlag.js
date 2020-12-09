import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItFlag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-flag_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="love-it-flag_svg__a"
      d="M.5 23.5V.5M.5 19.5a21.794 21.794 0 016-1c3 0 7.5 2 10.5 2a18.515 18.515 0 005.849-1.244 1 1 0 00.651-.938V4.44a1 1 0 00-1.321-.947A17.367 17.367 0 0117 4.5c-3 0-7.5-2-10.5-2a21.794 21.794 0 00-6 1z"
    />,
    <path
      className="love-it-flag_svg__a"
      d="M12.846 15.139a.477.477 0 01-.692 0l-3.063-3.195a2.017 2.017 0 01-.378-2.328 2.017 2.017 0 013.23-.524l.557.557.557-.557a2.017 2.017 0 013.23.524 2.017 2.017 0 01-.378 2.328z"
    />
  );

export default SvgLoveItFlag;
