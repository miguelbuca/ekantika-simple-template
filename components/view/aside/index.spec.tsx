import {render} from '@testing-library/react'
import Aside from './'

test('shows the aside menu !!!', () => {
    render(<Aside getRoute={()=> {}} />)
})