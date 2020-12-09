import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreBaby = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-baby_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="music-genre-baby_svg__a" cx={13.5} cy={21.5} r={2} />,
    <circle className="music-genre-baby_svg__a" cx={21.5} cy={19.5} r={2} />,
    <path
      className="music-genre-baby_svg__a"
      d="M23.5 19.5v-6.795a1 1 0 00-1.184-.983l-6 1.125a1 1 0 00-.816.983v7.67"
    />,
    <circle
      className="music-genre-baby_svg__a"
      cx={15.25}
      cy={8.25}
      r={1.25}
    />,
    <circle
      className="music-genre-baby_svg__a"
      cx={20.25}
      cy={6.75}
      r={1.25}
    />,
    <path
      className="music-genre-baby_svg__a"
      d="M16.5 8.25V3.721a1 1 0 01.684-.949l3-.833a1 1 0 011.316.948V6.75M6.5 9.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M12 9.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M10.931.5a3.553 3.553 0 011.51 2.919 3.1 3.1 0 01-3.184 3.092 3.1 3.1 0 01-3.1-2.381M6.869 13.406a2.74 2.74 0 004.776 0"
    />,
    <path
      className="music-genre-baby_svg__a"
      d="M13.5 4.741A7.74 7.74 0 009.257 3.5a7.416 7.416 0 00-7.521 6.612h-.042a1.2 1.2 0 000 2.4 1.152 1.152 0 00.167-.017A7.552 7.552 0 0013.01 17.5"
    />
  );

export default SvgMusicGenreBaby;
