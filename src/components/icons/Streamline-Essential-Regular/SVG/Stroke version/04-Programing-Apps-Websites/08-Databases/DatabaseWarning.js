import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="database-warning_svg__a"
      d="M13.534 9.71C6.637 10.074.75 7.938.75 5.251c0-2.486 5.037-4.5 11.25-4.5s11.25 2.014 11.25 4.5c0 1.324-1.431 2.515-3.708 3.339M23.25 11.251v-6"
    />,
    <path
      className="database-warning_svg__a"
      d="M.75 5.251v6c0 2.281 4.245 4.166 9.748 4.46"
    />,
    <path
      className="database-warning_svg__a"
      d="M.75 11.251v6c0 1.96 3.135 3.628 7.509 4.245M17.25 20.251a.375.375 0 10.375.375.375.375 0 00-.375-.375M17.25 18.001v-3"
    />,
    <path
      className="database-warning_svg__a"
      d="M23.063 20.683a1.775 1.775 0 01-1.587 2.568h-8.452a1.775 1.775 0 01-1.587-2.568l4.226-8.452a1.775 1.775 0 013.174 0z"
    />
  );

export default SvgDatabaseWarning;
