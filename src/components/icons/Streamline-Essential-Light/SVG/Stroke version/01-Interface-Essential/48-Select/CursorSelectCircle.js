import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorSelectCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-select-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cursor-select-circle_svg__a"
      d="M13.707.645a10.6 10.6 0 011.964.47M17.7 2.025a12.566 12.566 0 011.662 1.149M20.92 4.756l.606.811.526.864M22.936 8.47a11.871 11.871 0 01.441 1.971M23.462 12.66a6.049 6.049 0 01-.1 1 7.241 7.241 0 01-.187.993M22.456 16.76a12.133 12.133 0 01-.991 1.761M20.033 20.22l-.751.678-.81.606M16.524 22.575a12.606 12.606 0 01-1.924.625M12.4 23.483a6.948 6.948 0 01-1.01-.01 6.514 6.514 0 01-1.006-.1M8.224 22.858a11.582 11.582 0 01-1.845-.825M4.556 20.764c-.248-.229-.5-.448-.744-.686l-.68-.748M1.886 17.49l-.44-.913c-.136-.307-.237-.63-.358-.945M.6 13.465a8.056 8.056 0 01-.08-1.007 6.307 6.307 0 01.005-1.01M.841 9.25a11.109 11.109 0 01.649-1.913M2.585 5.405a13.068 13.068 0 011.3-1.55M5.601 2.446l.865-.526.909-.444M9.487.785a11.343 11.343 0 012-.256"
    />,
    <circle
      className="cursor-select-circle_svg__a"
      cx={11.995}
      cy={12.003}
      r={3.5}
    />
  );

export default SvgCursorSelectCircle;
