import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicNote = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M9.508 22.5A3.508 3.508 0 016 19c0-1.93 1.57-3.5 3.5-3.5H12V4.677c0-.617.371-1.163.943-1.392l4.371-1.749a.499.499 0 11.372.928l-4.371 1.749a.499.499 0 00-.315.464v2.084l4.314-1.726a.498.498 0 01.651.279.501.501 0 01-.279.65L13 7.838V19l-.001.031c-.063 1.875-1.593 3.405-3.482 3.469h-.009zm-.008-6C8.122 16.5 7 17.621 7 19s1.121 2.5 2.5 2.5a2.609 2.609 0 002.5-2.513V16.5H9.5z" />
  );

export default SvgMusicNote;
