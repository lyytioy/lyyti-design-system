import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorSelectHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-select-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cursor-select-heart_svg__a"
      d="M12 20.362l-1.045-1.077L12 20.362l1.045-1.077L12 20.362zM8.227 16.476L6.181 14.37l2.046 2.106zm-4.774-4.915L2.2 10.27a5.8 5.8 0 01-.726-.87 5.854 5.854 0 00.725.873l1.254 1.291zM.526 5.677a5.647 5.647 0 01.586-2.015 6.156 6.156 0 01.423-.708 6.156 6.156 0 00-.423.708 5.668 5.668 0 00-.586 2.015zM4.666.73a5.925 5.925 0 012.9-.1 5.925 5.925 0 00-2.9.1zM12 3.634l-1.108-1.01L12 3.634l1.108-1.01L12 3.634zM20.555 11.554L21.8 10.27a5.889 5.889 0 00.73-.881 5.889 5.889 0 01-.73.881zm2.92-5.886a5.693 5.693 0 00-.587-2.006 6.073 6.073 0 00-.43-.715 6.073 6.073 0 01.43.715 5.693 5.693 0 01.587 2.006zM19.325.727A5.95 5.95 0 0017.69.5a5.876 5.876 0 00-1.27.139A5.876 5.876 0 0117.69.5a5.95 5.95 0 011.635.227zM16.592 23.012c-.066.267-.2.276-.3.019L12.364 12.7c-.1-.257.033-.389.29-.292L23.032 16.3c.257.1.25.231-.017.3l-5.172 1.293z"
    />
  );

export default SvgCursorSelectHeart;
