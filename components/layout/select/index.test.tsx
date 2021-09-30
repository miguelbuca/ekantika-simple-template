import {render,screen} from '@testing-library/react'
import Select from '.'

test('shows the children in button !!!', () => {
    render(<Select onSelectItem={()=>{}} placeholder="test" data={[]} type='multiple' />)
    expect(screen.queryByText('test')).not.toBeNull()
})