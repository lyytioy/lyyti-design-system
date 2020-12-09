import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHierarchy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hierarchy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="hierarchy_svg__a" cx={11.5} cy={2.999} r={2.5} />,
    <circle className="hierarchy_svg__a" cx={11.5} cy={20.999} r={2.5} />,
    <circle className="hierarchy_svg__a" cx={20} cy={20.999} r={2.5} />,
    <circle className="hierarchy_svg__a" cx={3} cy={20.999} r={2.5} />,
    <path
      className="hierarchy_svg__a"
      d="M11.5 5.499v13M3 18.5c0-3.314 2.186-6 5.5-6H14a6 6 0 016 6"
    />
  );

export default SvgHierarchy;
