import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNewspaperReadMan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".newspaper-read-man_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="newspaper-read-man_svg__a"
      d="M18.781 6.5c-4.428.731-5.417-.257-6.406-1.251-.989.991-1.975 1.979-6.407 1.251"
    />,
    <path
      className="newspaper-read-man_svg__a"
      d="M18.057 9.679l.718-3.225a4.5 4.5 0 00-3.22-5.354 12.9 12.9 0 00-3.18-.35A12.9 12.9 0 009.2 1.1a4.5 4.5 0 00-3.22 5.356l.718 3.225M4.875 19.241v1.011a.9.9 0 00.589.886l6.911 2.112v-8.833L5.9 12.043a.818.818 0 00-1.027.874v1.836M19.888 19.094v1.158a.9.9 0 01-.588.886l-6.925 2.112v-8.833l6.486-2.374a.818.818 0 011.027.874v1.99"
    />,
    <path
      className="newspaper-read-man_svg__a"
      d="M6.362 18.356c0 .5-.563.9-1.251.894-1.378-.006-2.491-.817-2.486-1.81v-.9c0-.994 1.125-1.794 2.5-1.788.689 0 1.245.409 1.243.906zM17.632 18.356c0 .5.563.9 1.253.894 1.38-.006 2.495-.817 2.49-1.81v-.9c0-.994-1.127-1.794-2.507-1.788-.689 0-1.247.409-1.244.906zM10.125 9.75v.75M14.625 9.75v.75"
    />
  );

export default SvgNewspaperReadMan;
