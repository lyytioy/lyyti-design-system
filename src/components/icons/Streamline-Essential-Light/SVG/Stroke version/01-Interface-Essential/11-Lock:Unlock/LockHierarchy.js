import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLockHierarchy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-hierarchy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="lock-hierarchy_svg__a"
      d="M4 17.5V15a.5.5 0 01.5-.5h15a.5.5 0 01.5.5v2.5M12 11.5v6"
    />,
    <circle className="lock-hierarchy_svg__a" cx={4} cy={20.5} r={3} />,
    <circle className="lock-hierarchy_svg__a" cx={12} cy={20.5} r={3} />,
    <circle className="lock-hierarchy_svg__a" cx={20} cy={20.5} r={3} />,
    <path
      className="lock-hierarchy_svg__a"
      d="M17 10.5a1 1 0 01-1 1H8a1 1 0 01-1-1v-5a1 1 0 011-1h8a1 1 0 011 1z"
    />,
    <circle className="lock-hierarchy_svg__a" cx={12} cy={8} r={1} />,
    <path className="lock-hierarchy_svg__a" d="M15 4.5v-1a3 3 0 00-6 0v1" />
  );

export default SvgLockHierarchy;
