import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyRich = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-rich_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="smiley-rich_svg__a" d="M6 15.5a6.5 6.5 0 0012 0" />,
    <circle className="smiley-rich_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-rich_svg__a"
      d="M8.5 7.5H7.427a.927.927 0 00-.415 1.756l.976.488a.927.927 0 01-.415 1.756H6.5M7.5 6.5v1M7.5 11.5v1M17.5 7.5h-1.073a.927.927 0 00-.414 1.756l.975.488a.927.927 0 01-.415 1.756H15.5M16.5 6.5v1M16.5 11.5v1"
    />
  );

export default SvgSmileyRich;
