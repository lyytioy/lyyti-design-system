import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardTrophy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-trophy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="award-trophy_svg__a"
      d="M18 21.5a1 1 0 00-1-1H7a1 1 0 00-1 1v2h12zM16 20.5v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3M21 .5H3a5 5 0 005 5h8a5 5 0 005-5z"
    />,
    <path
      className="award-trophy_svg__a"
      d="M12.5 16.5H9c2.531-.469 3-8.5-3-11.422"
    />,
    <path
      className="award-trophy_svg__a"
      d="M11.5 16.5H15c-2.531-.469-3-8.5 3-11.422"
    />
  );

export default SvgAwardTrophy;
