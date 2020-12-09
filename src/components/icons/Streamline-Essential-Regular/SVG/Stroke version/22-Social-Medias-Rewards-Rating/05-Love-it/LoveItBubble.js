import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItBubble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-bubble_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="love-it-bubble_svg__a"
      d="M12 17.344l-4.474-4.668a2.648 2.648 0 01-.5-3.056 2.648 2.648 0 014.24-.688l.734.731.731-.731a2.648 2.648 0 014.24.688 2.65 2.65 0 01-.5 3.056z"
    />,
    <path
      className="love-it-bubble_svg__a"
      d="M12.576 1.012l1.878 2.162a.765.765 0 00.748.243l2.79-.645a.764.764 0 01.932.678l.25 2.852a.761.761 0 00.462.636l2.636 1.119a.763.763 0 01.356 1.1l-1.475 2.454a.764.764 0 000 .786l1.475 2.454a.763.763 0 01-.356 1.1l-2.636 1.119a.761.761 0 00-.462.636l-.25 2.852a.764.764 0 01-.932.678l-2.79-.645a.765.765 0 00-.748.243l-1.878 2.161a.763.763 0 01-1.152 0l-1.878-2.169a.765.765 0 00-.748-.243l-2.79.645a.764.764 0 01-.932-.678l-.25-2.85a.761.761 0 00-.462-.636l-2.636-1.121a.763.763 0 01-.356-1.1l1.475-2.454a.76.76 0 000-.786l-1.475-2.45a.763.763 0 01.356-1.1l2.636-1.115a.761.761 0 00.462-.638l.25-2.852a.764.764 0 01.932-.678l2.79.645a.765.765 0 00.748-.243l1.878-2.162a.765.765 0 011.152.002z"
    />
  );

export default SvgLoveItBubble;
