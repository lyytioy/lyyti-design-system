import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabase = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <ellipse
      className="database_svg__a"
      cx={13.003}
      cy={4.001}
      rx={8.5}
      ry={3}
    />,
    <path
      className="database_svg__a"
      d="M21.5 8c0 1.657-3.806 3-8.5 3S4.5 9.658 4.5 8M21.5 12c0 1.657-3.806 3-8.5 3s-8.5-1.343-8.5-3"
    />,
    <path
      className="database_svg__a"
      d="M21.5 4v12c0 1.657-3.806 3-8.5 3s-8.5-1.343-8.5-3V4M1.5 22.001H11M12.503 19.001v1.5"
    />,
    <circle className="database_svg__a" cx={12.5} cy={22.001} r={1.5} />,
    <path className="database_svg__a" d="M14 22.001h8.5" />
  );

export default SvgDatabase;
