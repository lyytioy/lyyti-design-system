import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCogDesktop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cog-desktop_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cog-desktop_svg__a"
      d="M9.138 23.5a7.486 7.486 0 001.362-4M14.862 23.5a7.486 7.486 0 01-1.362-4M7.5 23.501h9M.5 16.501h23"
    />,
    <rect
      className="cog-desktop_svg__a"
      x={0.5}
      y={0.501}
      width={23}
      height={19}
      rx={1}
      ry={1}
    />,
    <path
      className="cog-desktop_svg__a"
      d="M13.437 8.5A1.437 1.437 0 1112 7.064 1.437 1.437 0 0113.437 8.5z"
    />,
    <path
      className="cog-desktop_svg__a"
      d="M12.944 4.2l.327 1.076a.737.737 0 00.87.5l1.09-.253a.992.992 0 01.944 1.644L15.412 8a.743.743 0 000 1.008l.763.824a.992.992 0 01-.944 1.643l-1.09-.253a.737.737 0 00-.87.5l-.327 1.078a.986.986 0 01-1.888 0l-.327-1.076a.737.737 0 00-.87-.5l-1.09.253a.992.992 0 01-.944-1.643l.763-.824a.743.743 0 000-1.01l-.763-.823a.992.992 0 01.944-1.647l1.09.253a.737.737 0 00.87-.5l.327-1.083a.986.986 0 011.888 0z"
    />
  );

export default SvgCogDesktop;
