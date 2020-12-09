import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCamera1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="camera-1_svg__a"
      d="M2.5 6.5l.028-1a1.016 1.016 0 01.972-1h.944a1.068 1.068 0 011.056 1v1"
    />,
    <path
      className="camera-1_svg__a"
      d="M20.13 6.5a1 1 0 01-.906-.577C18.682 4.762 18.1 3.5 17 3.5h-5c-.931 0-1.4.834-2.7 2.592a1 1 0 01-.8.408h-6c-1.5 0-2 .679-2 1.723v10.388c0 1.043.5 1.889 2.056 1.889h18.888c1.556 0 2.056-.846 2.056-1.889V8.223c0-1.044-.5-1.723-2.056-1.723z"
    />,
    <circle className="camera-1_svg__a" cx={14.5} cy={13} r={5.5} />,
    <circle className="camera-1_svg__a" cx={14.5} cy={13} r={3} />,
    <circle className="camera-1_svg__a" cx={4} cy={10} r={1.5} />
  );

export default SvgCamera1;
