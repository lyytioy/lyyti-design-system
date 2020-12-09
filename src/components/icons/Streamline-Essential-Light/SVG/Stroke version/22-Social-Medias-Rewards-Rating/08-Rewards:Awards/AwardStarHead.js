import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardStarHead = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-star-head_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="award-star-head_svg__a"
      d="M12.647 2.024l1.41 3.106H16.8a.674.674 0 01.474 1.176L14.9 8.6l1.32 3.037a.719.719 0 01-1.025.9L12 10.736l-3.19 1.8a.719.719 0 01-1.024-.9L9.106 8.6 6.723 6.306A.673.673 0 017.2 5.13h2.741l1.413-3.106a.727.727 0 011.293 0zM7.824 18.833l.369 2.6A.5.5 0 017.77 22l-2.594.37M5.523 16.833l-.236 1.957a.5.5 0 01-.554.436l-1.951-.237M3.962 13.967l-.634 1.58a.5.5 0 01-.648.278l-1.575-.636M3.285 11.047l-.895 1.2a.5.5 0 01-.7.1L.5 11.444M1.786 8.13v1.5M18.824 22.37L16.23 22a.5.5 0 01-.423-.566l.369-2.6M21.218 18.989l-1.951.237a.5.5 0 01-.554-.436l-.236-1.957M22.9 15.189l-1.575.636a.5.5 0 01-.648-.278l-.634-1.58M23.5 11.444l-1.192.9a.5.5 0 01-.7-.1l-.895-1.2M22.214 9.63v-1.5"
    />
  );

export default SvgAwardStarHead;
