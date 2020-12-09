import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <ellipse
      className="database-share_svg__a"
      cx={12}
      cy={2.501}
      rx={4}
      ry={2}
    />,
    <path
      className="database-share_svg__a"
      d="M8 5.5c0 1.1 1.791 2 4 2s4-.9 4-2"
    />,
    <path
      className="database-share_svg__a"
      d="M16 2.5v6c0 1.1-1.791 2-4 2s-4-.9-4-2v-6M3.5 23.501h5M6 21.501v2M1 19.501h10M9.5 14.5A1.5 1.5 0 0111 16v3.912A1.545 1.545 0 019.5 21.5h-7A1.546 1.546 0 011 19.913V16a1.5 1.5 0 011.5-1.5zM15.5 23.501h5M18 21.501v2M13 19.501h10M21.5 14.5A1.5 1.5 0 0123 16v3.912a1.545 1.545 0 01-1.5 1.588h-7a1.546 1.546 0 01-1.5-1.587V16a1.5 1.5 0 011.5-1.5zM18 6.501h3v5M6 6.501H3v5"
    />
  );

export default SvgDatabaseShare;
