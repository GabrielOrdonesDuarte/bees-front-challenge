import { render } from 'utils/test-utils'
import { Loader } from '.'

describe('<Loader />', () => {
  it('should render 4 divs', () => {
    const wrapper = render(<Loader />)
    expect(wrapper.container.innerHTML).toHaveLength(80)
  })
})
