import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSynchronizeArrowsSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".synchronize-arrows-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="synchronize-arrows-search_svg__a"
      d="M23.25 22.747l-5.636-5.636M6.273 18.247a9 9 0 014.977-16.5"
    />,
    <path
      className="synchronize-arrows-search_svg__a"
      d="M6.273 12.724v5.523H.75M16.227 3.248a9 9 0 01-4.977 16.5"
    />,
    <path
      className="synchronize-arrows-search_svg__a"
      d="M16.227 8.771V3.247h5.523"
    />
  );

export default SvgSynchronizeArrowsSearch;
