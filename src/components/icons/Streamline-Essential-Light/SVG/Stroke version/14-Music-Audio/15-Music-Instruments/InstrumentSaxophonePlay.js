import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInstrumentSaxophonePlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".instrument-saxophone-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="instrument-saxophone-play_svg__a"
      d="M17.253 9.768l-1.329.55M17.918 11.376l-1.329.55M18.583 12.983l-1.33.55M19.694 1.229a2.608 2.608 0 00-1.414 3.408l4.654 11.253c1.1 2.663-.818 5.986-3.631 7.149s-6.519.168-7.621-2.5l-1.163-2.813a1.307 1.307 0 00-1-.79.5.5 0 01-.358-.25.5.5 0 01-.026-.436l2.753-6.637a.5.5 0 01.924 0l2.863 6.922a1.3 1.3 0 002.412-1l-2.828-6.824c-1.1-2.663 1.772-6.381 4.435-7.482L20.9.73"
    />,
    <circle
      className="instrument-saxophone-play_svg__a"
      cx={2}
      cy={6.843}
      r={1.25}
    />,
    <circle
      className="instrument-saxophone-play_svg__a"
      cx={7}
      cy={5.343}
      r={1.25}
    />,
    <path
      className="instrument-saxophone-play_svg__a"
      d="M3.25 6.843V2.314a1 1 0 01.684-.949l3-.833a1 1 0 011.316.948v3.863"
    />,
    <circle
      className="instrument-saxophone-play_svg__a"
      cx={6}
      cy={13.73}
      r={1.25}
    />,
    <path className="instrument-saxophone-play_svg__a" d="M7.25 13.73V9.48" />
  );

export default SvgInstrumentSaxophonePlay;
