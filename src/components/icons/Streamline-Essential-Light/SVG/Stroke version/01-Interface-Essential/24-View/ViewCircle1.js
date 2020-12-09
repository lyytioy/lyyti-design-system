import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgViewCircle1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".view-circle-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="view-circle-1_svg__a"
      d="M19.35 11.311a1 1 0 010 1.379c-1.202 1.261-4.04 3.81-7.35 3.81s-6.147-2.549-7.348-3.81a1 1 0 010-1.379C5.852 10.05 8.69 7.5 12 7.5s6.149 2.55 7.35 3.811z"
    />,
    <circle className="view-circle-1_svg__a" cx={12} cy={12} r={2.5} />,
    <path
      className="view-circle-1_svg__a"
      d="M19.253 3.075a11.506 11.506 0 013.888 6.073M9.53.768a11.5 11.5 0 017.173.738M1.673 6.941a11.492 11.492 0 015.042-5.155M1.612 16.933a11.5 11.5 0 01-.9-7.155M9.394 23.2a11.5 11.5 0 01-6.157-3.754M19.143 21.012a11.485 11.485 0 01-6.77 2.482M23.5 12.02a11.5 11.5 0 01-2.273 6.843"
    />
  );

export default SvgViewCircle1;
