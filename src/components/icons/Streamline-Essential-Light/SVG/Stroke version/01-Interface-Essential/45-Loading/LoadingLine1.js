import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoadingLine1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".loading-line-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="loading-line-1_svg__a" cx={4} cy={11.998} r={3.5} />,
    <circle className="loading-line-1_svg__a" cx={14} cy={11.998} r={2.5} />,
    <circle className="loading-line-1_svg__a" cx={22} cy={11.998} r={1.5} />
  );

export default SvgLoadingLine1;
