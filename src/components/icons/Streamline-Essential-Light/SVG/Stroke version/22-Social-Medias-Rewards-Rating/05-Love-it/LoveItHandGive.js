import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItHandGive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-hand-give_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="love-it-hand-give_svg__a"
      d="M1 23V13M1 15h7a3 3 0 013 3h6a3 3 0 013 3H1zM11 18H8M17.347 11.139a.477.477 0 01-.692 0l-4.768-4.974a3.027 3.027 0 01-.567-3.493 3.026 3.026 0 014.846-.786l.834.836.835-.835a3.024 3.024 0 014.844.786 3.027 3.027 0 01-.567 3.493z"
    />
  );

export default SvgLoveItHandGive;
