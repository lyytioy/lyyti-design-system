import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrokenTabRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".broken-tab-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="broken-tab-remove_svg__a"
      d="M13.2 16.314a.5.5 0 01-.464.686H1.5a1 1 0 01-1-1V8a1 1 0 011-1h11.233a.5.5 0 01.464.685l-1.726 4.332zM22.5 17h-4.824a1 1 0 01-.928-.628L15 12.017l1.749-4.387a1 1 0 01.929-.63H22.5a1 1 0 011 1v8a1 1 0 01-1 1zM18.5 10.517l3 3M21.5 10.517l-3 3"
    />
  );

export default SvgBrokenTabRemove;
