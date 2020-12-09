import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSynchronizeArrowsSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".synchronize-arrows-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="synchronize-arrows-search_svg__a"
      d="M20.125 5.185l-4.906-.964.447 4.98M.5 19.437l4.766.939-.448-4.982M15.262 4.221a9.5 9.5 0 01-7.029 17.361M5.258 20.376A9.5 9.5 0 0112.266 3.01M17.904 17.94l5.596 5.558"
    />
  );

export default SvgSynchronizeArrowsSearch;
