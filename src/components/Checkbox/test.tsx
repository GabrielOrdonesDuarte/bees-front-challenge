import { fireEvent, render } from 'utils/test-utils'
import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    const { container } = render(<Checkbox label="Test" />)
    const label = container.querySelector('label')
    expect(label).toBeInTheDocument()
  })

  it('should render without label', () => {
    const { container } = render(<Checkbox />)
    const label = container.querySelector('label')
    expect(label).not.toBeInTheDocument()
  })

  it('should trigger a change when clicked', () => {
    const onChange = jest.fn()
    const { getByLabelText } = render(
      <Checkbox label="Test" labelFor="Test" onChange={onChange} />
    )
    fireEvent.click(getByLabelText('Test'))
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
