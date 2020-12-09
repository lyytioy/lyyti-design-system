import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileModule = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-module_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="common-file-module_svg__a"
      d="M10.059 3.56a1.5 1.5 0 01.441 1.062V8.5A1.5 1.5 0 019 10H4.5A1.5 1.5 0 013 8.5v-6A1.5 1.5 0 014.5 1h2.372a1.5 1.5 0 011.06.438zM20.559 3.56A1.5 1.5 0 0121 4.622V8.5a1.5 1.5 0 01-1.5 1.5H15a1.5 1.5 0 01-1.5-1.5v-6A1.5 1.5 0 0115 1h2.372a1.5 1.5 0 011.06.438zM10.059 16.56a1.5 1.5 0 01.441 1.062V21.5A1.5 1.5 0 019 23H4.5A1.5 1.5 0 013 21.5v-6A1.5 1.5 0 014.5 14h2.372a1.5 1.5 0 011.06.438zM20.559 16.56A1.5 1.5 0 0121 17.622V21.5a1.5 1.5 0 01-1.5 1.5H15a1.5 1.5 0 01-1.5-1.5v-6A1.5 1.5 0 0115 14h2.372a1.5 1.5 0 011.06.438z"
    />
  );

export default SvgCommonFileModule;
