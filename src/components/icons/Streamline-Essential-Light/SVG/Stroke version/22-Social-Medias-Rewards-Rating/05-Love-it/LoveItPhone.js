import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItPhone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-phone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="love-it-phone_svg__a"
      d="M13.5 19.5H.5M7 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M7 21.25"
    />,
    <path
      className="love-it-phone_svg__a"
      d="M13.5 14.5v7a2 2 0 01-2 2h-9a2 2 0 01-2-2v-19a2 2 0 012-2h9"
    />,
    <path
      className="love-it-phone_svg__a"
      d="M.5 19.5a7.089 7.089 0 01.565-2.7c.4-.8 2.063-1.35 4.153-2.124.565-.209.472-1.684.222-1.96a4.167 4.167 0 01-1.085-3.231A2.725 2.725 0 017 6.5a2.725 2.725 0 012.645 2.985 4.167 4.167 0 01-1.085 3.232c-.25.276-.343 1.751.222 1.96 2.09.774 3.754 1.327 4.153 2.124a7.089 7.089 0 01.565 2.7zM17.861 10.123a.5.5 0 01-.722 0l-3.048-3.179a2.018 2.018 0 01-.378-2.329 2.017 2.017 0 013.23-.524l.557.557.557-.557a2.017 2.017 0 013.23.524 2.018 2.018 0 01-.378 2.329z"
    />,
    <circle className="love-it-phone_svg__a" cx={17.5} cy={6.5} r={6} />,
    <path
      className="love-it-phone_svg__a"
      d="M5.5 2.5h2M3.25 2.5a.25.25 0 11.25-.25.25.25 0 01-.25.25"
    />
  );

export default SvgLoveItPhone;
