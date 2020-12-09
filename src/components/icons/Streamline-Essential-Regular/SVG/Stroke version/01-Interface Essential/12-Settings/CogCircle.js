import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCogCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cog-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="cog-circle_svg__a" cx={12} cy={12.001} r={11.25} />,
    <path
      className="cog-circle_svg__a"
      d="M11.388 5.939a1.136 1.136 0 001.685 0l.545-.6a1.136 1.136 0 011.977.819l-.042.812a1.135 1.135 0 001.192 1.192l.812-.042a1.136 1.136 0 01.819 1.977l-.6.545a1.136 1.136 0 000 1.685l.6.545a1.136 1.136 0 01-.819 1.977l-.812-.042A1.135 1.135 0 0015.553 16l.042.812a1.136 1.136 0 01-1.977.819l-.545-.6a1.136 1.136 0 00-1.685 0l-.545.6a1.136 1.136 0 01-1.977-.819L8.908 16a1.135 1.135 0 00-1.192-1.2l-.812.042a1.136 1.136 0 01-.819-1.977l.6-.545a1.136 1.136 0 000-1.685l-.6-.545A1.136 1.136 0 016.9 8.116l.812.042a1.135 1.135 0 001.196-1.192l-.042-.812a1.136 1.136 0 011.977-.819z"
    />,
    <circle className="cog-circle_svg__a" cx={12.23} cy={11.481} r={2.25} />
  );

export default SvgCogCircle;
