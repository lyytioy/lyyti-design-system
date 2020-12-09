import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSql = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".sql_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="sql_svg__a"
      x={0.5}
      y={5.004}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="sql_svg__a"
      d="M8.5 9H6.8a1.3 1.3 0 00-.72 2.39l1.84 1.227A1.3 1.3 0 017.2 15H5.5M13.5 13a1.5 1.5 0 01-3 0v-2.5a1.5 1.5 0 113 0zM13.5 16.004l-2-1.586M15.5 9v5a1 1 0 001 1h2"
    />
  );

export default SvgSql;
