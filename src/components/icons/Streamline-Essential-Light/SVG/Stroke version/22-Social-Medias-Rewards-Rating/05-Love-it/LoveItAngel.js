import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItAngel = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-angel_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="love-it-angel_svg__a"
      d="M20 10.287c1.615.248 2.5 1.7 2.5 3.463v7c0 1.1-.4 2-1.5 2s-1.5-.9-1.5-2v-2.5a1.5 1.5 0 01-3 0v-1M4 10.287c-1.615.248-2.5 1.7-2.5 3.463v7c0 1.1.4 2 1.5 2s1.5-.9 1.5-2v-2.5a1.5 1.5 0 003 0v-1"
    />,
    <ellipse
      className="love-it-angel_svg__a"
      cx={12}
      cy={2.75}
      rx={5.5}
      ry={1.5}
    />,
    <path
      className="love-it-angel_svg__a"
      d="M12 17.75l-5.117-5.335a3.027 3.027 0 01-.567-3.493 3.027 3.027 0 014.846-.786l.838.836.834-.835a3.026 3.026 0 014.845.786 3.027 3.027 0 01-.567 3.493z"
    />
  );

export default SvgLoveItAngel;
