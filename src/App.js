import {Component} from 'react'
import TravelGuide from './components/TravelGuide'
import LoadingView from './components/LoadingView'
import Failure from './components/Failure'
import './App.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class App extends Component {
  state = {
    travelsList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTravelList()
  }

  updatedData = data => ({
    id: data.id,
    name: data.name,
    imageUrl: data.image_url,
    description: data.description,
  })

  getTravelList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const updatedData = data.packages.map(eachItem =>
      this.updatedData(eachItem),
    )
    if (response.ok) {
      this.setState({
        travelsList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => <LoadingView />

  renderSuccessView = () => {
    const {travelsList} = this.state
    console.log(travelsList)
    return <TravelGuide travelsList={travelsList} />
  }

  renderFailureView = () => <Failure />

  renderMainView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="app-heading">Travel Guide</h1>
        {this.renderMainView()}
      </div>
    )
  }
}

export default App
