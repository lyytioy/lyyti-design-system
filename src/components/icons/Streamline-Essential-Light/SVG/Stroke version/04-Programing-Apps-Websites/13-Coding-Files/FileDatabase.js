import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileDatabase = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-database_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-database_svg__a"
      d="M21.207 4.5a1 1 0 01.293.707V22.5a1 1 0 01-1 1h-17a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.3z"
    />,
    <path
      className="file-database_svg__a"
      d="M17.5 9.565c0 1.157-2.489 2.129-5.513 2.129s-5.473-.937-5.473-2.1S8.965 7.5 11.987 7.5s5.513.907 5.513 2.065zM17.5 13.017c0 1.158-2.489 2.13-5.513 2.13s-5.473-.939-5.473-2.1"
    />,
    <path
      className="file-database_svg__a"
      d="M6.514 9.6v6.811c0 1.156 2.45 2.1 5.473 2.1s5.513-.973 5.513-2.13V9.565"
    />
  );

export default SvgFileDatabase;
