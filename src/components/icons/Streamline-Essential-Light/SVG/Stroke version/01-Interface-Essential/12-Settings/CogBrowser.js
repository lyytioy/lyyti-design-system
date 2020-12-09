import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCogBrowser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cog-browser_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="cog-browser_svg__a"
      x={0.5}
      y={2.501}
      width={23}
      height={19}
      rx={2}
      ry={2}
    />,
    <path
      className="cog-browser_svg__a"
      d="M.5 7.501h23M3.524 4.751a.25.25 0 11-.25.25.249.249 0 01.25-.25M6.524 4.751a.25.25 0 11-.25.25.249.249 0 01.25-.25"
    />,
    <circle className="cog-browser_svg__a" cx={12} cy={14.001} r={1} />,
    <path
      className="cog-browser_svg__a"
      d="M12.849 10.133l.295.968a.663.663 0 00.783.454l.981-.228a.893.893 0 01.85 1.479l-.687.741a.669.669 0 000 .908l.687.741a.893.893 0 01-.85 1.479l-.981-.228a.664.664 0 00-.783.454l-.295.968a.886.886 0 01-1.7 0l-.295-.968a.664.664 0 00-.783-.454l-.981.228a.893.893 0 01-.85-1.479l.687-.741a.669.669 0 000-.908l-.687-.741a.893.893 0 01.85-1.479l.981.228a.663.663 0 00.783-.454l.295-.968a.886.886 0 011.7 0z"
    />
  );

export default SvgCogBrowser;
