import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShare1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".share-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="share-1_svg__a"
      d="M17.25 8.25h1.5a1.5 1.5 0 011.5 1.5v12a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h1.5M12 .75v10.5M8.25 4.5L12 .75l3.75 3.75"
    />
  );

export default SvgShare1;
