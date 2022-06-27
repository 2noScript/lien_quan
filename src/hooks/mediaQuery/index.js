import { useMediaQuery } from "react-responsive";
//mobile<480
//tablet (480-768)
//laptop-min and tablet-max (768-1024)
//pc >1024
const mobileWidth = 480;
const tabletWidth = 768;
const laptopWidth = 1024;

const useMobile = () => {
  return useMediaQuery({
    maxWidth: mobileWidth - 1,
  });
};
const useTablet = () => {
  return useMediaQuery({
    minWidth: mobileWidth,
    maxWidth: tabletWidth - 1,
  });
};
const useLaptop = () => {
  return useMediaQuery({
    minWidth: tabletWidth,
    maxWidth: laptopWidth - 1,
  });
};

const useDesktop = () => {
  return useMediaQuery({
    minWidth: laptopWidth,
  });
};

export { useMobile, useTablet, useDesktop, useLaptop };
