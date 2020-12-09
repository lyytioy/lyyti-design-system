import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-code-cash_svg__a"
      d="M18.737 14.254H16.7a1.342 1.342 0 00-.5 2.587l2.063.825a1.342 1.342 0 01-.5 2.588h-2.026M17.237 14.254v-.75M17.237 21.004v-.75"
    />,
    <circle className="file-code-cash_svg__a" cx={17.237} cy={17.254} r={6} />,
    <path
      className="file-code-cash_svg__a"
      d="M8.237 20.254h-6a1.5 1.5 0 01-1.5-1.5v-16.5a1.5 1.5 0 011.5-1.5h10.628a1.5 1.5 0 011.061.439L16.8 4.064a1.5 1.5 0 01.44 1.061v3.129"
    />,
    <rect
      className="file-code-cash_svg__a"
      x={6.737}
      y={5.254}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="file-code-cash_svg__a"
      d="M3.737 5.254v4.5M12.737 5.254v4.5"
    />,
    <rect
      className="file-code-cash_svg__a"
      x={3.737}
      y={12.754}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgFileCodeCash;
