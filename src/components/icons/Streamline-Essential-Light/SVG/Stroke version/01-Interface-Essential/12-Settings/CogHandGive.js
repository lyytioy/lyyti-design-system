import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCogHandGive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cog-hand-give_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cog-hand-give_svg__a"
      d="M.5 23.501v-10M.5 15.5h7a3 3 0 013 3h6a3 3 0 013 3H.5zM10.5 18.501h-3"
    />,
    <circle
      className="cog-hand-give_svg__a"
      cx={16.394}
      cy={8.495}
      r={1.786}
    />,
    <path
      className="cog-hand-give_svg__a"
      d="M17.9 1.623l.524 1.72a1.177 1.177 0 001.39.807l1.744-.4a1.585 1.585 0 011.512 2.623l-1.22 1.316a1.188 1.188 0 000 1.613l1.22 1.316a1.585 1.585 0 01-1.509 2.627l-1.744-.4a1.176 1.176 0 00-1.39.806l-.527 1.715a1.575 1.575 0 01-3.018 0l-.524-1.719a1.175 1.175 0 00-1.39-.806l-1.744.4a1.585 1.585 0 01-1.509-2.627L10.938 9.3a1.188 1.188 0 000-1.613l-1.22-1.314a1.585 1.585 0 011.509-2.627l1.744.4a1.176 1.176 0 001.39-.807l.524-1.72a1.576 1.576 0 013.015.004z"
    />
  );

export default SvgCogHandGive;
