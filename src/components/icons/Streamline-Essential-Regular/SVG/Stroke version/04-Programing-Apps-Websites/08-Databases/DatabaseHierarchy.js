import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseHierarchy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-hierarchy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <ellipse
      className="database-hierarchy_svg__a"
      cx={6.75}
      cy={6.751}
      rx={6}
      ry={3}
    />,
    <path
      className="database-hierarchy_svg__a"
      d="M.75 6.751v4.5c0 1.657 2.686 3 6 3s6-1.343 6-3v-4.5"
    />,
    <path
      className="database-hierarchy_svg__a"
      d="M.75 11.251v4.5c0 1.657 2.686 3 6 3s6-1.343 6-3v-4.5M15.75 6.751l-3 3"
    />,
    <ellipse
      className="database-hierarchy_svg__a"
      cx={19.5}
      cy={3.001}
      rx={3.75}
      ry={2.25}
    />,
    <path
      className="database-hierarchy_svg__a"
      d="M15.75 3v4.5c0 1.242 1.679 2.25 3.75 2.25s3.75-1.008 3.75-2.25V3M12.341 16.842l3.409 3.409"
    />,
    <ellipse
      className="database-hierarchy_svg__a"
      cx={19.5}
      cy={16.501}
      rx={3.75}
      ry={2.25}
    />,
    <path
      className="database-hierarchy_svg__a"
      d="M15.75 16.5V21c0 1.242 1.679 2.25 3.75 2.25s3.75-1.008 3.75-2.25v-4.5"
    />
  );

export default SvgDatabaseHierarchy;
