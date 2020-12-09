import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCompositionWoman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".composition-woman_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="composition-woman_svg__a"
      d="M14.5 13.835a8.236 8.236 0 005.659-1.5c-.85-.85-1.435-1.384-1.659-4.684C18.167 2.73 14.85 1 12 1S5.833 2.73 5.5 7.649c-.224 3.3-.809 3.834-1.659 4.684A8.172 8.172 0 009.5 13.825"
    />,
    <path
      className="composition-woman_svg__a"
      d="M15.153 15.687a1 1 0 01-.653-.938v-1.826a1 1 0 01.325-.738A3.6 3.6 0 0016 9.5V7a6.488 6.488 0 01-4-2.262A6.488 6.488 0 018 7v2.5a3.6 3.6 0 001.175 2.685 1 1 0 01.325.738v1.826a1 1 0 01-.653.938C5.15 17.056 2.2 18.033 1.5 19.443a10.135 10.135 0 00-1 4.057h23a10.135 10.135 0 00-1-4.057c-.7-1.41-3.65-2.387-7.347-3.756zM.5 11.5v2a1 1 0 001 1h2M.5 3.5v-2a1 1 0 011-1h2M23.5 3.5v-2a1 1 0 00-1-1h-2M23.5 11.5v2a1 1 0 01-1 1h-2"
    />
  );

export default SvgCompositionWoman;
