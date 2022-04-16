import { render, screen } from 'utils/test-utils'
import Header from '.'

describe('<Header />', () => {
  const cartProviderProps = {
    userName: 'John Doe',
    isAuthenticated: true,
    addUser: () => null,
    logout: () => null,
  }

  it('should render the username by provider data', () => {
    render(<Header />, { cartProviderProps })
    const titleValue = screen.getByText('John Doe')
    expect(titleValue).toHaveTextContent('John Doe')
  })

  it('should render "Go Back" button', () => {
    render(<Header />)
    expect(screen.getByText('Go back', { selector: 'button' }))
  })

  it('should render "Go Back" button with correct src', async () => {
    const { getByAltText } = render(<Header />)
    const image = getByAltText('Go back')
    expect(image).toHaveAttribute('src', 'assets/arrow_back.svg')
  })

  //   it('Should render button with the correct styles', async () => {
  //     const { container } = render(<Header />)
  //     expect(screen.getByText('Go back', { selector: 'button' })).toHaveStyle({
  //       display: 'flex',
  //       'flex-direction': 'row',
  //       'align-items': 'center',
  //       'line-height': '150%',
  //       border: 0,
  //       'background-color': 'transparent',
  //       cursor: 'pointer',
  //       opacity: 1,
  //     })
  //     expect(container.firstChild).toMatchSnapshot()
  //   })
})
