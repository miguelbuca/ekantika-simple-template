import {render} from '@testing-library/react'
import Table from './'

test('shows the table !!!', () => {
    render(<Table data={[]} limit={0} />)
})