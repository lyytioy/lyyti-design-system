import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationLeft2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-left-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="navigation-left-2_svg__a"
      d="M12 23.5L4.571 12.818a1.547 1.547 0 010-1.641L12 .5"
    />,
    <path
      className="navigation-left-2_svg__a"
      d="M19 23.5c.55 0 .743-.37.429-.821l-6.858-9.859a1.547 1.547 0 010-1.641l6.858-9.859C19.743.867 19.55.5 19 .5h-1.5a2.152 2.152 0 00-1.571.82l-6.858 9.857a1.547 1.547 0 000 1.641l6.858 9.859a2.153 2.153 0 001.571.823z"
    />
  );

export default SvgNavigationLeft2;
