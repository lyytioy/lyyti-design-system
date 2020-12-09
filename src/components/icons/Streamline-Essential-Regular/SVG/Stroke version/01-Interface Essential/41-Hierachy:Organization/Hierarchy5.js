import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHierarchy5 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hierarchy-5_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="hierarchy-5_svg__a"
      x={4.75}
      y={0.748}
      width={15}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="hierarchy-5_svg__a"
      d="M12.25 5.248v13.5M4.75 18.748v-4.5a1.5 1.5 0 011.5-1.5h12a1.5 1.5 0 011.5 1.5v4.5"
    />,
    <circle className="hierarchy-5_svg__a" cx={4.75} cy={20.998} r={2.25} />,
    <circle className="hierarchy-5_svg__a" cx={12.25} cy={20.998} r={2.25} />,
    <circle className="hierarchy-5_svg__a" cx={19.75} cy={20.998} r={2.25} />
  );

export default SvgHierarchy5;
