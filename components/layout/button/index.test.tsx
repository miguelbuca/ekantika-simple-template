import {render, screen} from '@testing-library/react'
import Button from '.'

test('shows the children in button !!!', () => {

    const val = 'Jest'

    render(<Button backGround='normal'>{ val }</Button>)

    expect(screen.queryByText(val)).not.toBeNull()
})