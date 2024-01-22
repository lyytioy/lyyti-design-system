import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
const TextBlock = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <rect width={24} height={24} fill="#0F8898" rx={3} />,
    <path fill="#fff" d="M10.9 20V6.34H5.7V4.8h12.2v1.54h-5.2V20h-1.8Z" />
  );
export default TextBlock;
