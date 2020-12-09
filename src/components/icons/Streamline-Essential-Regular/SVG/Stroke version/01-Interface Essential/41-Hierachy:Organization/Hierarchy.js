import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHierarchy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hierarchy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="hierarchy_svg__a" cx={12} cy={2.998} r={2.25} />,
    <circle className="hierarchy_svg__a" cx={12} cy={20.998} r={2.25} />,
    <circle className="hierarchy_svg__a" cx={3.75} cy={20.998} r={2.25} />,
    <circle className="hierarchy_svg__a" cx={20.25} cy={20.998} r={2.25} />,
    <path
      className="hierarchy_svg__a"
      d="M3.75 18.748a6 6 0 016-6h4.5a6 6 0 016 6M12 5.248v13.5"
    />
  );

export default SvgHierarchy;
