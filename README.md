[![Build Status](https://travis-ci.org/jimmy319/amp-react-square-img.svg?branch=master)](https://travis-ci.org/jimmy319/amp-react-square-img)

# amp-react-square-img:zap:
An amp-react component rendering image in square shape on AMP page. It will help you maintain the correct aspect ratio of image according to the resizing strategy(cover, contain ... etc) you specified.

## Why need this?
`background-size` is the common solution we usually adopt to render a square image with correct aspect ratio. It means that you need to set the image source via background-image and inline style is required if image source is not static. Inline style will break an AMP page so we need to use another solution to achieve this.

## Props

| name | type | description |
|------|------|------------------|
| src | string | the url of image |
| srcset | string | same as srcset attribute on the img tag |
| sizes | string | same as sizes attribute on the img tag |
| alt | string | same as alt attribute on the img tag |
| attribution | string | a string that indicates the attribution of the image |
| width | number | same as width attribute on the img tag |
| height | number | same as height attribute on the img tag |
| fallbackImg | string | the source url of fallback image |
| resizingStrategy | string | all the valid values of css property `object-fit` can be used here |

## Example

```javascript
import SquareImage, { statics } from 'amp-react-square-img'
import 'amp-react-square-img/dist/css/component.css'

<SquareImage src='https://s.yimg.cc/irq/test.jpg' resizingStrategy={statics.CONTAIN_RESIZING} />
```

## License
[MIT](https://github.com/jimmy319/amp-react-square-img/blob/master/LICENSE)