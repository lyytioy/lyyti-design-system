import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZipFileShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".zip-file-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="zip-file-shield_svg__a"
      d="M10.478 23.5H1.5a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707L19.478 8.5"
    />,
    <path
      className="zip-file-shield_svg__a"
      d="M7.255 8a.25.25 0 11.25.25.249.249 0 01-.25-.25M7.255 10.5a.25.25 0 11.25.25.249.249 0 01-.25-.25M7.255 13a.25.25 0 11.25.25.249.249 0 01-.25-.25M7.245 15.5a.25.25 0 11.25.25.25.25 0 01-.25-.25M7.245 18.021a.25.25 0 11.25.25.25.25 0 01-.25-.25M7.245 20.562a.25.25 0 11.25.25.25.25 0 01-.25-.25M8.989 4.111a1.488 1.488 0 01-.357 1.163 1.467 1.467 0 01-1.1.5H7.47a1.467 1.467 0 01-1.1-.5 1.488 1.488 0 01-.357-1.163L6.37.5H8.5zM17.5 13.5v6M20.5 16.5h-6M18.035 23.4l.553-.21c2.63-1 4.912-3.524 4.912-6.338v-3.396a1.044 1.044 0 00-.628-.958 15.814 15.814 0 00-5.394-1 15.521 15.521 0 00-5.35 1 1.044 1.044 0 00-.628.958v3.393c0 2.814 2.238 5.336 4.868 6.338l.553.21a1.561 1.561 0 001.114.003z"
    />
  );

export default SvgZipFileShield;
