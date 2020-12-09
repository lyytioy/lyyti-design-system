import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlagStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="flag-star_svg__a"
      d="M.5 23.5V.5M.5 19.5a21.794 21.794 0 016-1c3 0 7.5 2 10.5 2a18.515 18.515 0 005.849-1.244 1 1 0 00.651-.938V4.44a1 1 0 00-1.32-.947A17.367 17.367 0 0117 4.5c-3 0-7.5-2-10.5-2a21.794 21.794 0 00-6 1v16z"
    />,
    <path
      className="flag-star_svg__a"
      d="M13.089 6.858L14.371 9.5h2.5a.612.612 0 01.431 1.069l-2.166 2.263 1.2 2.761a.654.654 0 01-.931.819l-2.9-1.634L9.6 16.412a.654.654 0 01-.931-.819l1.2-2.761L7.7 10.569A.612.612 0 018.133 9.5h2.5l1.285-2.642a.661.661 0 011.171 0z"
    />
  );

export default SvgFlagStar;
