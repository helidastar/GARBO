import Image from "next/image";

type IconProps = {
  /** File name in /public/icons without the extension, e.g. "nav/home" */
  name: string;
  width: number;
  height?: number;
  className?: string;
  alt?: string;
};

/** Renders an icon exported from Figma at its exact design size. */
export function Icon({ name, width, height = width, className, alt = "" }: IconProps) {
  return (
    <Image
      src={`/icons/${name}.svg`}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{ width, height }}
    />
  );
}
