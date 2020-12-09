import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseKey = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-key_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="database-key_svg__a"
      d="M15.916 19.126a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="database-key_svg__a"
      d="M19.405 18.134l3.406-3.406a1.5 1.5 0 00-2.122-2.122l-3.406 3.406a3.75 3.75 0 102.122 2.122z"
    />,
    <ellipse
      className="database-key_svg__a"
      cx={12}
      cy={5.251}
      rx={11.25}
      ry={4.5}
    />,
    <path
      className="database-key_svg__a"
      d="M23.25 9.751v-4.5M.75 5.251v6c0 2.283 4.251 4.169 9.759 4.46"
    />,
    <path
      className="database-key_svg__a"
      d="M.75 11.251v6c0 2.18 3.876 4 9.022 4.411"
    />
  );

export default SvgDatabaseKey;
