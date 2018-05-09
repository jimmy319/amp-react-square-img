import React from 'react'
import renderer from 'react-test-renderer'
import AmpSquareImage, { statics } from '../dist/component'

describe('Test passing src to component', () => {
  test('[Normal Flow] Pass image url to component and DOM should be rendered with given src', () => {
    // arrangement
    const tree = renderer
      .create(<AmpSquareImage src='https://s.yimg.ir/q/test2.jpg' />)
      .toJSON()

    // action

    // assertion
    expect(tree).toMatchSnapshot()
  })
})

describe('Test resizingStrategy', () => {
  test('[Normal Flow] Pass FILL_RESIZING to component and `fill` class should be append onto DOM', () => {
    // arrangement
    const tree = renderer
      .create(<AmpSquareImage src='https://s.yimg.ir/q/test.jpg' resizingStrategy={statics.FILL_RESIZING} />)
      .toJSON()

    // action

    // assertion
    expect(tree).toMatchSnapshot()
  })

  test('[Normal Flow] Pass CONTAIN_RESIZING to component and `contain` class should be append onto DOM', () => {
    // arrangement
    const tree = renderer
      .create(<AmpSquareImage src='https://s.yimg.ir/q/test.jpg' resizingStrategy={statics.CONTAIN_RESIZING} />)
      .toJSON()

    // action

    // assertion
    expect(tree).toMatchSnapshot()
  })

  test('[Normal Flow] Pass COVER_RESIZING to component and `cover` class should be append onto DOM', () => {
    // arrangement
    const tree = renderer
      .create(<AmpSquareImage src='https://s.yimg.ir/q/test.jpg' resizingStrategy={statics.COVER_RESIZING} />)
      .toJSON()

    // action

    // assertion
    expect(tree).toMatchSnapshot()
  })

  test('[Normal Flow] Pass NONE_RESIZING to component and `none` class should be append onto DOM', () => {
    // arrangement
    const tree = renderer
      .create(<AmpSquareImage src='https://s.yimg.ir/q/test.jpg' resizingStrategy={statics.NONE_RESIZING} />)
      .toJSON()

    // action

    // assertion
    expect(tree).toMatchSnapshot()
  })

  test('[Normal Flow] Pass SCALE_DOWN_RESIZING to component and `scale-down` class should be append onto DOM', () => {
    // arrangement
    const tree = renderer
      .create(<AmpSquareImage src='https://s.yimg.ir/q/test.jpg' resizingStrategy={statics.SCALE_DOWN_RESIZING} />)
      .toJSON()

    // action

    // assertion
    expect(tree).toMatchSnapshot()
  })

  test('[Abnormal Flow] Pass UNKOWN_RESIZING to component and nothing being append onto DOM', () => {
    // arrangement
    const tree = renderer
      .create(<AmpSquareImage src='https://s.yimg.ir/q/test.jpg' resizingStrategy={statics.UNKOWN_RESIZING} />)
      .toJSON()

    // action

    // assertion
    expect(tree).toMatchSnapshot()
  })
})
