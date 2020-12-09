import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHierarchy4 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hierarchy-4_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="hierarchy-4_svg__a"
      d="M3.75 18.748a6.291 6.291 0 016.545-6h3.41a6.291 6.291 0 016.545 6M12 6.748v12"
    />,
    <circle className="hierarchy-4_svg__a" cx={12} cy={3.748} r={3} />,
    <circle className="hierarchy-4_svg__a" cx={3.75} cy={20.998} r={2.25} />,
    <circle className="hierarchy-4_svg__a" cx={12} cy={20.998} r={2.25} />,
    <circle className="hierarchy-4_svg__a" cx={20.25} cy={20.998} r={2.25} />
  );

export default SvgHierarchy4;
