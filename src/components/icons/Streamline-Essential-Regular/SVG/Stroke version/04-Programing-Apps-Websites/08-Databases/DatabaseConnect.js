import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseConnect = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-connect_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <ellipse
      className="database-connect_svg__a"
      cx={4.5}
      cy={3.001}
      rx={3.75}
      ry={2.25}
    />,
    <path
      className="database-connect_svg__a"
      d="M.75 3v4.5c0 1.242 1.679 2.25 3.75 2.25S8.25 8.743 8.25 7.5V3"
    />,
    <ellipse
      className="database-connect_svg__a"
      cx={4.5}
      cy={16.501}
      rx={3.75}
      ry={2.25}
    />,
    <path
      className="database-connect_svg__a"
      d="M.75 16.5V21c0 1.242 1.679 2.25 3.75 2.25S8.25 22.243 8.25 21v-4.5"
    />,
    <ellipse
      className="database-connect_svg__a"
      cx={19.5}
      cy={3.001}
      rx={3.75}
      ry={2.25}
    />,
    <path
      className="database-connect_svg__a"
      d="M15.75 3v4.5c0 1.242 1.679 2.25 3.75 2.25s3.75-1.008 3.75-2.25V3"
    />,
    <ellipse
      className="database-connect_svg__a"
      cx={19.5}
      cy={16.501}
      rx={3.75}
      ry={2.25}
    />,
    <path
      className="database-connect_svg__a"
      d="M15.75 16.5V21c0 1.242 1.679 2.25 3.75 2.25s3.75-1.008 3.75-2.25v-4.5M8.041 8.244l7.79 7.79M8.25 16.5l7.941-7.94"
    />
  );

export default SvgDatabaseConnect;
