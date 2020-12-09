import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLockHierarchy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-hierarchy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="lock-hierarchy_svg__a" cx={3} cy={21} r={2.25} />,
    <circle className="lock-hierarchy_svg__a" cx={12} cy={21} r={2.25} />,
    <circle className="lock-hierarchy_svg__a" cx={21} cy={21} r={2.25} />,
    <rect
      className="lock-hierarchy_svg__a"
      x={7.5}
      y={6}
      width={9}
      height={6.75}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="lock-hierarchy_svg__a"
      d="M12 18.75v-6M3 18.75v-3h18v3M9 6V3.75a3 3 0 016 0V6"
    />
  );

export default SvgLockHierarchy;
