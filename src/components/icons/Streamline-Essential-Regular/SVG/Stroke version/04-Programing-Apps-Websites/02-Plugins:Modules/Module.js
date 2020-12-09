import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModule = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".module_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="module_svg__a"
      d="M1.817 4.524l9.1-3.568a2.936 2.936 0 012.162 0l9.1 3.568a1.763 1.763 0 011.071 1.662v11.628a1.763 1.763 0 01-1.067 1.662l-9.1 3.569a2.956 2.956 0 01-2.162 0l-9.1-3.569A1.763 1.763 0 01.75 17.814V6.186a1.763 1.763 0 011.067-1.662zM12 9.353L1.104 5.081M12 9.353l10.896-4.272M12 23.25V9.353"
    />
  );

export default SvgModule;
