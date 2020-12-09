import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlags = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flags_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="flags_svg__a"
      d="M16.32 3.027L9.035 20.973M15.756 4.417l7.26 2.948a.375.375 0 01.042.675L20.6 9.418a1.5 1.5 0 00-.705 1.737l.8 2.705a.375.375 0 01-.5.454l-7.26-2.947M7.68 3.027l7.285 17.946M8.244 4.417L.984 7.365a.375.375 0 00-.042.675L3.4 9.418a1.5 1.5 0 01.705 1.737l-.8 2.705a.375.375 0 00.5.454l7.261-2.947"
    />
  );

export default SvgFlags;
