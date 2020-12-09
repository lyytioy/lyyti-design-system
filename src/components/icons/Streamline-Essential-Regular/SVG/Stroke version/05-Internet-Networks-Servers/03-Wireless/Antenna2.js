import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAntenna2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".antenna-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="antenna-2_svg__a"
      d="M13.5 17.799v5.451M10.5 23.25v-5.451"
    />,
    <rect
      className="antenna-2_svg__a"
      x={9.75}
      y={11.25}
      width={4.5}
      height={6.75}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="antenna-2_svg__a"
      d="M12 11.25V7.5M9.75 14.25l-3.788.602M9 6.75a3 3 0 016 0"
    />,
    <path
      className="antenna-2_svg__a"
      d="M6 5.642C6 2.94 8.686.75 12 .75s6 2.19 6 4.892M5.019 18.415l.763-.135c.422-.075.725-.351.678-.617l-.94-5.3c-.047-.266-.427-.421-.849-.346l-.763.135a4.257 4.257 0 001.111 6.263zM14.25 14.25l3.789.602M18.981 18.415l-.763-.135c-.422-.075-.725-.351-.678-.617l.94-5.3c.047-.266.427-.421.849-.346l.763.135a4.257 4.257 0 01-1.111 6.263z"
    />
  );

export default SvgAntenna2;
