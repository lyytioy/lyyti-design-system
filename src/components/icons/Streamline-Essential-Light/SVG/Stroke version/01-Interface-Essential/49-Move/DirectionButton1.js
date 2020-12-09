import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDirectionButton1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".direction-button-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="direction-button-1_svg__a"
      d="M10.5 6l1.071-1.785a.5.5 0 01.858 0L13.5 6M18 10.5l1.785 1.071a.5.5 0 010 .858L18 13.5M13.5 18l-1.071 1.785a.5.5 0 01-.858 0L10.5 18M6 13.5l-1.785-1.073a.5.5 0 010-.858L6 10.5"
    />,
    <path
      className="direction-button-1_svg__a"
      d="M23.5 9.5a2 2 0 00-2-2h-5v-5a2 2 0 00-2-2h-5a2 2 0 00-2 2v5h-5a2 2 0 00-2 2v5a2 2 0 002 2h5v5a2 2 0 002 2h5a2 2 0 002-2v-5h5a2 2 0 002-2z"
    />
  );

export default SvgDirectionButton1;
