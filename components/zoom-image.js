import Zoom from 'next-image-zoom'

const ZoomImage = ({ src, alt, width, height }) => (
  <div
    style={{
      height: height ?? '300px',
      width: width ?? '100%',
      cursor: 'zoom-in'
    }}
  >
    <Zoom src={src} layout={'fill'} alt={alt} width="100%" height="100%" />
  </div>
)

export default ZoomImage
