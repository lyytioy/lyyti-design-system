import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHierarchy1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hierarchy-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="hierarchy-1_svg__a" cx={3} cy={20.999} r={2.5} />,
    <circle className="hierarchy-1_svg__a" cx={9.5} cy={9.499} r={2.5} />,
    <circle className="hierarchy-1_svg__a" cx={16.5} cy={15.499} r={2.5} />,
    <circle className="hierarchy-1_svg__a" cx={21} cy={2.999} r={2.5} />,
    <path
      className="hierarchy-1_svg__a"
      d="M4.23 18.821l4.04-7.145M11.398 11.127l3.204 2.746M17.347 13.146l2.805-7.795"
    />
  );

export default SvgHierarchy1;
