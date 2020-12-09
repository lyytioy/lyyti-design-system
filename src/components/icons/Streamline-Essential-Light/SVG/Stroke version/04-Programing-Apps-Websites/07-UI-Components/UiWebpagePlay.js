import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiWebpagePlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ui-webpage-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="ui-webpage-play_svg__a"
      d="M11.265 16.978a.5.5 0 00-.765.424v3.2a.5.5 0 00.765.424l2.557-1.6a.5.5 0 000-.848z"
    />,
    <rect
      className="ui-webpage-play_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="ui-webpage-play_svg__a"
      d="M19 18l1.5 1.5L19 21M16.5 18l1.5 1.5-1.5 1.5M5 21l-1.5-1.5L5 18M7.5 21L6 19.5 7.5 18M3.5 14.5v-11h17v11z"
    />
  );

export default SvgUiWebpagePlay;
