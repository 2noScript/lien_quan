import classNames from "classnames/bind";
import styles from "./Image.module.scss";
import noImage from "./noImage.png";
const cx = classNames.bind(styles);

function Image(props) {
  const {
    children,
    src,
    alt,
    contain,
    cover,
    none,
    zoom,
    height,
    width,
    borderRadius,
    zoomDelay,
    zoomTiming,
    className,
  } = props;
  // console.log({ height, width });
  const option = {
    backgroundImage: `url(${src})`,
    transitionDelay: `${zoomDelay}`,
    transitionTimingFunction: `${zoomTiming}`,
  };
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${borderRadius}`,
      }}
      className={cx("wrapper", {
        contain,
        cover,
        none,
        zoom,
        [className]: className,
      })}
    >
      {children ? (
        <div
          className={cx("content")}
          style={{
            ...option,
          }}
        >
          {children}
        </div>
      ) : (
        <img
          src={src}
          alt={alt && noImage}
          style={{
            ...option,
            backgroundImage: "none",
          }}
        />
      )}
    </div>
  );
}

export default Image;
