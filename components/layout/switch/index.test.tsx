import {render} from '@testing-library/react'
import Switch from '.'

test('shows the switch element !!!', () => {
    render(<Switch onChecked={()=>{}} type='multiple' />)
})