import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSynchronizeArrows = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".synchronize-arrows_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="synchronize-arrows_svg__a"
      d="M.713 10.34L3.5 14.49l3.205-3.838"
    />,
    <path
      className="synchronize-arrows_svg__a"
      d="M3.489 14.439a8.947 8.947 0 016.554-10.727 8.492 8.492 0 018.325 2.641M23.285 13.642L20.498 9.49l-3.205 3.838"
    />,
    <path
      className="synchronize-arrows_svg__a"
      d="M20.509 9.543a8.948 8.948 0 01-6.554 10.727 8.5 8.5 0 01-8.325-2.641"
    />,
    <circle className="synchronize-arrows_svg__a" cx={12} cy={11.991} r={2} />
  );

export default SvgSynchronizeArrows;
