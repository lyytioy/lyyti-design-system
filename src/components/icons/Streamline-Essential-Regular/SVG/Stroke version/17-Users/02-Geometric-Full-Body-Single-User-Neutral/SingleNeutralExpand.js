import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralExpand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-expand_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-expand_svg__cls-1"
      cx={12}
      cy={5.25}
      r={3}
    />,
    <path
      className="single-neutral-expand_svg__cls-1"
      d="M15.75 15.75V13.5a3.75 3.75 0 00-7.5 0v2.25h1.5l.75 6h3l.75-6zM6 18L.75 23.25M23.25 6.75v-6h-6M.75 17.25v6h6M23.25.75L18 6M18 18l5.25 5.25M.75 6.75v-6h6M23.25 17.25v6h-6M.75.75L6 6"
    />
  );

export default SvgSingleNeutralExpand;
