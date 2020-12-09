import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureZoomOut = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-zoom-out_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-zoom-out_svg__a"
      d="M8.495 12.84a1.5 1.5 0 10-2.981.336l.168 1.491 2.981-.337z"
    />,
    <path
      className="gesture-zoom-out_svg__a"
      d="M19.483 22.338l.987-8.946a3.5 3.5 0 10-6.958-.767L12.5 21.508h-1l-1.017-8.893a3.5 3.5 0 00-6.956.785l1.008 8.944"
    />,
    <path
      className="gesture-zoom-out_svg__a"
      d="M15.5 12.844a1.5 1.5 0 112.982.329l-.164 1.49-2.982-.329zM15.992 4.008c3.364.315 6.13 1.7 7.5 3.5M.492 7.515c1.378-1.808 4.111-3.2 7.5-3.507"
    />,
    <path
      className="gesture-zoom-out_svg__a"
      d="M20.992 7.508h2.5v-2.5M2.992 7.508h-2.5v-2.5"
    />
  );

export default SvgGestureZoomOut;
