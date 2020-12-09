import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHierarchyFiles = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hierarchy-files_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="hierarchy-files_svg__a"
      d="M16.5 23.248H21a.75.75 0 00.75-.75v-4.939a.75.75 0 00-.219-.53l-1.06-1.061a.749.749 0 00-.53-.22H16.5a.75.75 0 00-.75.75v6a.75.75 0 00.75.75zM16.5 9.748H21A.75.75 0 0021.75 9V4.059a.75.75 0 00-.219-.53l-1.06-1.061a.749.749 0 00-.53-.22H16.5a.75.75 0 00-.75.75V9a.75.75 0 00.75.748zM2.25.748v1.5M2.25 5.248v3M2.25 11.248v3M2.25 17.248v1.5a1.5 1.5 0 001.5 1.5h1.5M8.25 20.248h3M14.25 20.248h1.5M2.25 6.748h3M8.25 6.748h3M14.25 6.748h1.5"
    />
  );

export default SvgHierarchyFiles;
