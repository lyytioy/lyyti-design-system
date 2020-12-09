import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiWebpagePlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ui-webpage-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="ui-webpage-play_svg__a"
      d="M11.307 16.582a.519.519 0 00-.535-.015.538.538 0 00-.272.469v3.428a.538.538 0 00.272.469.521.521 0 00.535-.014L14 19.2a.541.541 0 000-.91z"
    />,
    <rect
      className="ui-webpage-play_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="ui-webpage-play_svg__a"
      d="M6 20.25l-1.5-1.467L6 17.315"
    />,
    <rect
      className="ui-webpage-play_svg__a"
      x={3.75}
      y={3.75}
      width={16.5}
      height={10.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="ui-webpage-play_svg__a"
      d="M18 20.25l1.5-1.467-1.5-1.468"
    />
  );

export default SvgUiWebpagePlay;
