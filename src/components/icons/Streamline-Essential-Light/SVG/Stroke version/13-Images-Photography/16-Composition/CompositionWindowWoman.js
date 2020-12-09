import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCompositionWindowWoman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".composition-window-woman_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="composition-window-woman_svg__a"
      x={0.5}
      y={4.5}
      width={23}
      height={15}
      rx={4}
      ry={4}
    />,
    <path
      className="composition-window-woman_svg__a"
      d="M13.913 16.191a6.158 6.158 0 004.252-1.128c-.643-.643-1.085-1.046-1.254-3.54C16.659 7.807 14.153 6.5 12 6.5s-4.659 1.307-4.911 5.023c-.169 2.494-.611 2.9-1.254 3.54a6.177 6.177 0 004.276 1.127"
    />,
    <path
      className="composition-window-woman_svg__a"
      d="M18.952 19.5a29.776 29.776 0 00-4.57-1.9.757.757 0 01-.493-.709v-1.38a.756.756 0 01.245-.557 2.718 2.718 0 00.888-2.029v-1.892A4.9 4.9 0 0112 9.324a4.9 4.9 0 01-3.022 1.709v1.889a2.718 2.718 0 00.888 2.029.756.756 0 01.245.557v1.38a.757.757 0 01-.493.709 29.732 29.732 0 00-4.57 1.9"
    />
  );

export default SvgCompositionWindowWoman;
