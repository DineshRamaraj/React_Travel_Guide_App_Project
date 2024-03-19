import styled from 'styled-components'

export const TravelGuideListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 0;
  list-style: none;
  padding: 20px;
`

export const TravelGuideItem = styled.li`
  width: 100%;
  margin-right: 15px;
  margin-bottom: 30px;
  border-radius: 10px;
  background-color: #ffffff;
  @media screen and (min-width: 576px) {
    width: 45%;
  }
  @media screen and (min-width: 768px) {
    width: 32%;
  }
`

export const ItemImage = styled.img`
  width: 100%;
  border-radius: 5px;
`

export const ItemTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: #475569;
  margin: 10px 0;
  padding: 0 10px;
`

export const ItemPara = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #64748b;
  margin: 0;
  padding: 0 10px;
`
