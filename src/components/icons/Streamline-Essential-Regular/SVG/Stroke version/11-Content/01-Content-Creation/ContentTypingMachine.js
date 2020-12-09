import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentTypingMachine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-typing-machine_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="content-typing-machine_svg__a"
      d="M18.929 15.75h1.317a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5h-16.5a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h1.318M5.246 1.5A.75.75 0 016 .75h12a.75.75 0 01.75.75v8.25H5.246zM21.746 12.75h1.5M.746 12.75h1.5M7.916 19.5a.375.375 0 10.375.375.375.375 0 00-.375-.375M12 19.5a.375.375 0 10.375.375A.375.375 0 0012 19.5M16.076 19.5a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="content-typing-machine_svg__a"
      d="M17.377 14.25h-3.131a2.25 2.25 0 01-4.5 0h-3.13c-1.177 0-1.123.274-3.613 6.978a1.5 1.5 0 001.406 2.022h15.175a1.5 1.5 0 001.406-2.022c-2.49-6.699-2.436-6.978-3.613-6.978zM8.996 6.75h6M8.996 3.75h3.75"
    />
  );

export default SvgContentTypingMachine;
