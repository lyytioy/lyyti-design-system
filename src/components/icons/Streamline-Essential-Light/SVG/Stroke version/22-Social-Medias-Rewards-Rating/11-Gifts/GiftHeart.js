import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGiftHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gift-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gift-heart_svg__a"
      d="M13.531 4.117L12 5.513l-1.531-1.4C6.692.389 1.115 3.718 1 7.512c-.15 4.942 6.808 11.128 11 14 4.192-2.872 11.15-9.059 11-14-.115-3.794-5.692-7.123-9.469-3.395zM12 5.512v16M22.121 11.012H1.879"
    />,
    <path
      className="gift-heart_svg__a"
      d="M10.586 6.77c.781.781 1.414 4.243 1.414 4.243S8.538 10.38 7.757 9.6a2 2 0 012.829-2.83zM13.415 6.77C12.634 7.551 12 11.013 12 11.013s3.462-.633 4.243-1.414a2 2 0 00-2.828-2.829zM12 11.012l-4 3.5M12 11.012l4 3.5"
    />
  );

export default SvgGiftHeart;
