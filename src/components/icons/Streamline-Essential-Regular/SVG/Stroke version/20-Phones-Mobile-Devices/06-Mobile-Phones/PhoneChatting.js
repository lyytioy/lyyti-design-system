import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneChatting = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-chatting_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-chatting_svg__a"
      d="M18 11.289v9.229a2.733 2.733 0 01-2.733 2.732H8.733A2.732 2.732 0 016 20.518V9.029M6.001 18.75h12"
    />,
    <path
      className="phone-chatting_svg__a"
      d="M11.945 10.556a2.357 2.357 0 001.674.694H15v3l3.039-3h2.092A2.369 2.369 0 0022.5 8.882V5.369A2.369 2.369 0 0020.132 3H16.5M15.376 6.75"
    />,
    <path
      className="phone-chatting_svg__a"
      d="M15.376 6.75a.375.375 0 10.375.375.375.375 0 00-.375-.375M19.126 6.75a.375.375 0 10.375.375.375.375 0 00-.375-.375M3.869.75h6.513a2.369 2.369 0 012.369 2.369v2.763a2.369 2.369 0 01-2.369 2.368H8.251v3l-3.04-3H3.869A2.368 2.368 0 011.5 5.882V3.119A2.369 2.369 0 013.869.75zM9.126 4.5"
    />,
    <path
      className="phone-chatting_svg__a"
      d="M9.126 4.5a.375.375 0 11-.375.375.375.375 0 01.375-.375M5.126 4.5a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgPhoneChatting;
