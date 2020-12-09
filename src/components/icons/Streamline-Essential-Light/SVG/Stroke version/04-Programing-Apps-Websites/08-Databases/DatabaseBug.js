import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseBug = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-bug_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <ellipse
      className="database-bug_svg__a"
      cx={10.004}
      cy={4.501}
      rx={9.5}
      ry={4}
    />,
    <path
      className="database-bug_svg__a"
      d="M11.5 12.45c-.489.033-.99.051-1.5.051-5.246 0-9.5-1.79-9.5-4M10 17C4.758 17 .5 15.211.5 13"
    />,
    <path
      className="database-bug_svg__a"
      d="M10 21.5c-5.246 0-9.5-1.79-9.5-4v-13M19.504 4.501v7M21.5 20.5a3 3 0 11-6 0v-3a3 3 0 116 0zM21.103 16.009l2.397-1.508M15.897 16.009L13.5 14.501M21.103 21.992l2.397 1.509M15.897 21.992L13.5 23.501M21.5 19.501h2M15.5 19.501h-2M15.5 17.501h6"
    />
  );

export default SvgDatabaseBug;
