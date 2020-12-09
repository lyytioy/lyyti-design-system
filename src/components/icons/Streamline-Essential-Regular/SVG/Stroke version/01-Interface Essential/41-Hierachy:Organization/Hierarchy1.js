import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHierarchy1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hierarchy-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="hierarchy-1_svg__a" cx={3} cy={20.998} r={2.25} />,
    <circle className="hierarchy-1_svg__a" cx={8.25} cy={8.998} r={2.25} />,
    <circle className="hierarchy-1_svg__a" cx={15.75} cy={14.998} r={2.25} />,
    <circle className="hierarchy-1_svg__a" cx={21} cy={2.998} r={2.25} />,
    <path
      className="hierarchy-1_svg__a"
      d="M3.902 18.936l3.446-7.876M10.007 10.404l3.986 3.189M20.098 5.06l-3.446 7.876"
    />
  );

export default SvgHierarchy1;
