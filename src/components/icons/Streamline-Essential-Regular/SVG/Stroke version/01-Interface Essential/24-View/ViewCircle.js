import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgViewCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".view-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="view-circle_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="view-circle_svg__a"
      d="M4.267 10.731a1.825 1.825 0 000 2.544C5.818 14.83 8.591 17.258 12 17.258s6.182-2.427 7.734-3.982a1.826 1.826 0 000-2.544C18.183 9.177 15.406 6.748 12 6.748s-6.181 2.427-7.733 3.983z"
    />,
    <circle className="view-circle_svg__a" cx={12} cy={12} r={2.25} />
  );

export default SvgViewCircle;
