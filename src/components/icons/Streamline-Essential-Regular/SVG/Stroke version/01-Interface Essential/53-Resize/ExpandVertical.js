import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="expand-vertical_svg__a"
      d="M12 23.248V.748M8.25 19.498l3.75 3.75 3.75-3.75M8.25 4.498L12 .748l3.75 3.75"
    />
  );

export default SvgExpandVertical;
