import {
  TravelGuideListContainer,
  TravelGuideItem,
  ItemImage,
  ItemTitle,
  ItemPara,
} from './styledComponents'

const TravelGuide = props => {
  const {travelsList} = props
  return (
    <TravelGuideListContainer>
      {travelsList.map(eachItem => (
        <TravelGuideItem key={eachItem.id}>
          <ItemImage src={eachItem.imageUrl} alt={eachItem.name} />
          <ItemTitle>{eachItem.name}</ItemTitle>
          <ItemPara>{eachItem.description}</ItemPara>
        </TravelGuideItem>
      ))}
    </TravelGuideListContainer>
  )
}

export default TravelGuide
