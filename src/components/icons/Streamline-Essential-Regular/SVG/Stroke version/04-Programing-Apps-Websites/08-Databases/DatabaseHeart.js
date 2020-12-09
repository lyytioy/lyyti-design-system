import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <ellipse
      className="database-heart_svg__a"
      cx={12}
      cy={5.251}
      rx={11.25}
      ry={4.5}
    />,
    <path
      className="database-heart_svg__a"
      d="M23.25 9.751v-4.5M.75 5.251v6c0 1.843 2.771 3.428 6.738 4.123"
    />,
    <path
      className="database-heart_svg__a"
      d="M.75 11.251v6c0 2.277 4.229 4.159 9.717 4.458M17.261 23.251l-5.114-5.335a3.026 3.026 0 01-.567-3.492 3.026 3.026 0 014.846-.787l.835.835.835-.835a3.025 3.025 0 014.845.787 3.026 3.026 0 01-.567 3.492z"
    />
  );

export default SvgDatabaseHeart;
