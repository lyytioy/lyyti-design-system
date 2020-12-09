import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHierarchyFiles = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hierarchy-files_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="hierarchy-files_svg__a"
      d="M20.5 9.5a1 1 0 01-1 1h-6a1 1 0 01-1-1v-8a1 1 0 011-1h3a2.782 2.782 0 011.707.707l1.586 1.586A2.782 2.782 0 0120.5 4.5z"
    />,
    <path
      className="hierarchy-files_svg__a"
      d="M17 .569V3a1 1 0 001 1h2.43M20.5 22.5a1 1 0 01-1 1h-6a1 1 0 01-1-1v-8a1 1 0 011-1h3a2.41 2.41 0 011.7.706l1.587 1.587A2.782 2.782 0 0120.5 17.5z"
    />,
    <path
      className="hierarchy-files_svg__a"
      d="M17 13.551V16a1 1 0 001 1h2.43M2.5.499v1M2.5 6.499v1M2.5 3.499v1h1M2.5 9.499v1M2.5 12.499v1M2.5 15.499v1M2.5 18.499v1h1M5.5 4.499h1M8.5 4.499h1M5.5 19.499h1M8.5 19.499h1"
    />
  );

export default SvgHierarchyFiles;
