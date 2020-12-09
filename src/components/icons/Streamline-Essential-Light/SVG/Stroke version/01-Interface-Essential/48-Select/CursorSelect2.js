import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorSelect2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-select-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cursor-select-2_svg__a"
      d="M2.5.5h-1a1 1 0 00-1 1v1M18.5.5h1a1 1 0 011 1v1M5.5.498H9M12 .498h3.5M2.5 20.5h-1a1 1 0 01-1-1v-1M5.5 20.498H9M12 20.498h1M.5 5.498v3.5M.5 11.998v3.5M20.5 5.498v3.5M20.5 11.998v1M18.977 18.977l4.144-1.036a.5.5 0 00.062-.951l-9.146-3.6a.5.5 0 00-.649.649l3.6 9.145a.5.5 0 00.95-.062z"
    />
  );

export default SvgCursorSelect2;
