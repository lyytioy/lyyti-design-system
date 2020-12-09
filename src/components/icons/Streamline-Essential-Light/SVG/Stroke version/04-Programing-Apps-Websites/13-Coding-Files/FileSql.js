import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileSql = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-sql_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-sql_svg__a"
      d="M20.5 23.5a1 1 0 001-1V6.478A5.975 5.975 0 0015.525.5H3.5a1 1 0 00-1 1v21a1 1 0 001 1z"
    />,
    <path
      className="file-sql_svg__a"
      d="M16.5.584V4.5a1 1 0 001 1h3.92M8.5 12.5H6.8a1.3 1.3 0 00-.72 2.39l1.84 1.227A1.3 1.3 0 017.2 18.5H5.5M13.5 16.5a1.5 1.5 0 01-3 0V14a1.5 1.5 0 113 0zM13.5 19.504l-2-1.586M15.5 12.5v5a1 1 0 001 1h2"
    />
  );

export default SvgFileSql;
