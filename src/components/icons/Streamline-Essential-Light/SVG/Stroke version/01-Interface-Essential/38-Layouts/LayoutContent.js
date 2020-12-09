import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayoutContent = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".layout-content_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="layout-content_svg__a"
      d="M10.5 9.5a1 1 0 01-1 1h-8a1 1 0 01-1-1v-8a1 1 0 011-1h8a1 1 0 011 1zM10.5 22.5a1 1 0 01-1 1h-8a1 1 0 01-1-1v-8a1 1 0 011-1h8a1 1 0 011 1zM13.497 2.497h10M13.497 5.497h10M13.497 8.497h10M13.497 15.497h10M13.497 18.497h10M13.497 21.497h10"
    />
  );

export default SvgLayoutContent;
