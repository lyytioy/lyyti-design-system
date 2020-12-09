import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgQuillCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".quill-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="quill-circle_svg__a" cx={12.001} cy={12} r={11.25} />,
    <path
      className="quill-circle_svg__a"
      d="M6.001 18l5.698-5.705M18.064 5.931a10.483 10.483 0 00-2.241 0l-2 3.18-1.231-2.288c-4.459 2.189-6.2 7.478-4.551 9.13 2.214 2.214 10.972-1.667 10.023-10.022z"
    />
  );

export default SvgQuillCircle;
