import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItRibbon = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-ribbon_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="love-it-ribbon_svg__a"
      d="M12 14.531L7.526 9.863a2.646 2.646 0 01-.5-3.056 2.647 2.647 0 014.24-.687l.73.73.731-.73a2.647 2.647 0 014.24.687 2.649 2.649 0 01-.5 3.056z"
    />,
    <path
      className="love-it-ribbon_svg__a"
      d="M19.059 23.105l-6.177-4.492a1.5 1.5 0 00-1.764 0l-6.177 4.492A.75.75 0 013.75 22.5V2.25a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5V22.5a.75.75 0 01-1.191.605z"
    />,
    <path
      className="love-it-ribbon_svg__a"
      d="M12 14.531L7.526 9.863a2.646 2.646 0 01-.5-3.056 2.647 2.647 0 014.24-.687l.73.73.731-.73a2.647 2.647 0 014.24.687 2.649 2.649 0 01-.5 3.056z"
    />
  );

export default SvgLoveItRibbon;
