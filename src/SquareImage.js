import React from 'react'
import style from './SquareImage.css'

const AmpSquareImage = ({ src, srcset, sizes, alt, attribution, width, height, fallbackImg, resizingStrategy = '', children }) => {
  return (
    <div className={style['wrapper']}>
      <amp-img
        class={style[resizingStrategy]}
        layout='fill'
        src={src}
        srcset={srcset}
        sizes={sizes}
        alt={alt}
        attribution={attribution}
        width={width}
        height={height}
      />
      {
        fallbackImg
          ? <amp-img
            class={style[resizingStrategy]}
            fallback=''
            src={fallbackImg}
            layout='fill'
            width={width}
            height={height}
          />
          : null
      }
      {children}
    </div>
  )
}

/** Static constant exporting */
const CONTAIN_RESIZING = 'contain'
const FILL_RESIZING = 'fill'
const COVER_RESIZING = 'cover'
const NONE_RESIZING = 'none'
const SCALE_DOWN_RESIZING = 'scale-down'

export const statics = {
  CONTAIN_RESIZING,
  FILL_RESIZING,
  COVER_RESIZING,
  NONE_RESIZING,
  SCALE_DOWN_RESIZING
}

export default AmpSquareImage
