import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseHierarchy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-hierarchy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <ellipse
      className="database-hierarchy_svg__a"
      cx={12}
      cy={8.001}
      rx={5.5}
      ry={2.5}
    />,
    <ellipse
      className="database-hierarchy_svg__a"
      cx={21}
      cy={2.001}
      rx={2.5}
      ry={1.5}
    />,
    <path
      className="database-hierarchy_svg__a"
      d="M23.5 2v3c0 .828-1.119 1.5-2.5 1.5s-2.5-.671-2.5-1.5V2"
    />,
    <ellipse
      className="database-hierarchy_svg__a"
      cx={3}
      cy={2.001}
      rx={2.5}
      ry={1.5}
    />,
    <path
      className="database-hierarchy_svg__a"
      d="M5.5 2v3c0 .828-1.119 1.5-2.5 1.5S.5 5.829.5 5V2"
    />,
    <ellipse
      className="database-hierarchy_svg__a"
      cx={21}
      cy={19.001}
      rx={2.5}
      ry={1.5}
    />,
    <path
      className="database-hierarchy_svg__a"
      d="M23.5 19v3c0 .828-1.119 1.5-2.5 1.5s-2.5-.672-2.5-1.5v-3"
    />,
    <ellipse
      className="database-hierarchy_svg__a"
      cx={3}
      cy={19.001}
      rx={2.5}
      ry={1.5}
    />,
    <path
      className="database-hierarchy_svg__a"
      d="M5.5 19v3c0 .828-1.119 1.5-2.5 1.5S.5 22.829.5 22v-3M17.5 12c0 1.381-2.463 2.5-5.5 2.5S6.5 13.382 6.5 12"
    />,
    <path
      className="database-hierarchy_svg__a"
      d="M6.5 8v8c0 1.381 2.463 2.5 5.5 2.5s5.5-1.119 5.5-2.5V8M5.309 5.578L6.851 7.12M18.691 5.578L17.149 7.12M5.355 18.497l1.551-1.552M18.645 18.497l-1.551-1.552"
    />
  );

export default SvgDatabaseHierarchy;
