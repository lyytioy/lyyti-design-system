import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShieldGlobe = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shield-globe_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="shield-globe_svg__a"
      d="M18.518 10.976A6.52 6.52 0 0112 17.5a6.592 6.592 0 01-6.482-6.642 6.356 6.356 0 016.22-6.352q.141-.006.282-.006a6.462 6.462 0 016.498 6.476zM11.738 4.506c-3.391 3.674-3.391 8.468 0 12.99M12.3 4.506c3.392 3.674 3.392 8.466 0 12.988M5.5 11h13"
    />,
    <path
      className="shield-globe_svg__a"
      d="M1.5 3.775v7.637A12.311 12.311 0 009.719 22.88l1.121.414a3.365 3.365 0 002.32 0l1.121-.414A12.311 12.311 0 0022.5 11.412V3.775a1.533 1.533 0 00-.934-1.406A24.237 24.237 0 0012 .5a24.237 24.237 0 00-9.566 1.869A1.533 1.533 0 001.5 3.775z"
    />
  );

export default SvgShieldGlobe;
