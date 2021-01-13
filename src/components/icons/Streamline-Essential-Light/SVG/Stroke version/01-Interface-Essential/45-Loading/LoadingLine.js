import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoadingLine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".loading-line_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="loading-line_svg__a" cx={2} cy={11.998} r={1.5} />,
    <circle className="loading-line_svg__a" cx={22} cy={11.998} r={1.5} />,
    <circle className="loading-line_svg__a" cx={7.5} cy={11.998} r={2} />,
    <circle className="loading-line_svg__a" cx={15} cy={11.998} r={3.5} />
  );

export default SvgLoadingLine;