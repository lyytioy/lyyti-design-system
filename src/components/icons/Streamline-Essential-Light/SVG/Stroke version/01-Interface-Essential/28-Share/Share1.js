import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShare1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".share-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="share-1_svg__a"
      d="M12 13.499v-13M7.5 4.999l4.5-4.5 4.5 4.5M15 8.5h4a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1v-13a1 1 0 011-1h4"
    />
  );

export default SvgShare1;
