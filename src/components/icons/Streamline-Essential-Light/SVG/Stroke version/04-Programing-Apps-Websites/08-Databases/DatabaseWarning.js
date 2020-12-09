import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <ellipse
      className="database-warning_svg__a"
      cx={10}
      cy={4.501}
      rx={9.5}
      ry={4}
    />,
    <path
      className="database-warning_svg__a"
      d="M12.388 12.378C6.109 13.022.5 11.038.5 8.5M10 17C4.754 17 .5 15.211.5 13"
    />,
    <path
      className="database-warning_svg__a"
      d="M8.737 21.465C4.088 21.206.5 19.53.5 17.5v-13M19.5 4.501v5.5M17.5 20.5a.25.25 0 10.25.25.25.25 0 00-.25-.25M17.5 18.501v-3"
    />,
    <path
      className="database-warning_svg__a"
      d="M18.338 12.5a.95.95 0 00-1.676 0l-5.056 9.634a.923.923 0 00.031.914.947.947 0 00.807.449h10.112a.948.948 0 00.807-.448.923.923 0 00.031-.914z"
    />
  );

export default SvgDatabaseWarning;
