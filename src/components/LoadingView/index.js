import Loader from 'react-loader-spinner'
import {LoadingContainer} from './styledComponents'

const LoadingView = () => (
  <LoadingContainer data-testid="loader">
    <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
  </LoadingContainer>
)

export default LoadingView
