import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShare3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".share-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="share-3_svg__a"
      d="M15.5 10.5v12a1 1 0 01-1 1h-13a1 1 0 01-1-1v-13a1 1 0 011-1h4"
    />,
    <path
      className="share-3_svg__a"
      d="M18.5 3.5H13c-3 0-4 2.792-4 5a7 7 0 001.5 4V10c0-1 .5-1.5 2.5-1.5h5.5v3l5-5.5-5-5.5z"
    />
  );

export default SvgShare3;
