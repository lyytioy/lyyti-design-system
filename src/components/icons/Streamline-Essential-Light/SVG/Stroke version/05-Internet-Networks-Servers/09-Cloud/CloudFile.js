import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudFile = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-file_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-file_svg__a"
      d="M20.5 13.906A4.311 4.311 0 0023 9.857a4.711 4.711 0 00-4.954-4.635A6.706 6.706 0 0012 1.5a6.605 6.605 0 00-6.675 6.109A3.561 3.561 0 001 11.018 3.186 3.186 0 003.5 14.3"
    />,
    <path
      className="cloud-file_svg__a"
      d="M16.474 22.5a.523.523 0 00.526-.522v-8.361a3.1 3.1 0 00-.921-2.2 3.163 3.163 0 00-2.224-.913H7.526a.523.523 0 00-.526.518v10.956a.524.524 0 00.526.522z"
    />,
    <path className="cloud-file_svg__a" d="M14 10.542V13.5h2.998" />
  );

export default SvgCloudFile;
