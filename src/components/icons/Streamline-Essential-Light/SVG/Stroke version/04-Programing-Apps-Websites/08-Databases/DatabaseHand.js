import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseHand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-hand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <ellipse
      className="database-hand_svg__a"
      cx={18.502}
      cy={2.501}
      rx={5}
      ry={2}
    />,
    <path
      className="database-hand_svg__a"
      d="M23.5 2.5v9c0 1.1-2.238 2-5 2s-5-.9-5-2v-9"
    />,
    <path
      className="database-hand_svg__a"
      d="M23.5 8.5c0 1.1-2.238 2-5 2s-5-.9-5-2M23.5 5.5c0 1.1-2.238 2-5 2s-5-.9-5-2M.5 23.501v-10M.5 15.5h7a3 3 0 013 3h6a3 3 0 013 3H.5zM10.5 18.501h-3"
    />
  );

export default SvgDatabaseHand;
