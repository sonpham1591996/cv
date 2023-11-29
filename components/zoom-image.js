import Image from "next/image";

const ZoomImage = ({ src, alt, width, height }) => (
  <div
    style={{
      height: height ?? '300px',
      width: width ?? '100%',
    }}
  >
    <Image src={src} alt={alt} width={768} height={540} />
  </div>
)

export default ZoomImage
