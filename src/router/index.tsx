import { Route, Routes, Navigate } from 'react-router-dom'
import BreweryList from 'templates/BreweryList'
import Home from 'templates/Home'
import { useUser } from 'hooks/use-profile'

const Router = () => {
  const { isAuthenticated } = useUser()

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/list"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <BreweryList />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default Router

type ProtectedRouteProps = {
  isAuthenticated: boolean
  children: React.ReactNode
}

const ProtectedRoute = ({
  isAuthenticated,
  children,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
ProtectedRouteProps): any => {
  if (!isAuthenticated) {
    return <Navigate to="/" />
  }
  return children
}
