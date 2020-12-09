import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGraphStatsDescend = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".graph-stats-descend_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="graph-stats-descend_svg__a"
      d="M1.25 5.75L8.586 14a1.042 1.042 0 001.432.107l4.464-3.72a1.038 1.038 0 011.43.11l6.838 7.75"
    />,
    <path
      className="graph-stats-descend_svg__a"
      d="M15.812 18.25h6.938v-5.979"
    />
  );

export default SvgGraphStatsDescend;
