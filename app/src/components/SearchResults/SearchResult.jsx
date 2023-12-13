import React from 'react'
import styled from 'styled-components'
import { BASE_URL, Button, Container } from '../../App'

const SearchResult = ({data}) => {
  return (
    <FoodContainer>
    <Container>
    <FoodCards>
      {data?.map((item) => {
        return(
          <FoodCard key={item.name} >
            <div className="food_img">
              <img src={BASE_URL+item.image} alt="" />
            </div>
            <div className="food_info">
          <div className="info">
            <h3>{item.name}</h3>
            <p>{item.text}</p>
          </div>
          
          <Button>${item.price.toFixed(2)}</Button>
            </div>
          </FoodCard>
        )
      })}
    </FoodCards>
    </Container>
  </FoodContainer>
  )
}

export default SearchResult
const FoodContainer= styled.section`
background-image:url("./public/bg.png");
background-size:cover;
height:calc(100vh - 220px);
margin-top: 20px 
`
const FoodCards= styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
padding-top:20px;
row-gap:32px;
column-gap:20px
`
const FoodCard= styled.div`
  width: 350px;
  height: 167px;
  border: 1px solid;

  border-image-source: radial-gradient(
    80.69% 208.78% at 108.28% 112.58%,
    #eabfff 0%,
    rgba(135, 38, 183, 0) 100%
  ),
  radial-gradient(
    80.38% 222.5% at -13.75% -12.36%,
    #98f9ff 0%,
    rgba(255, 255, 255, 0) 100%
  );

background: url(.png),
  radial-gradient(
    90.16% 143.01% at 15.32% 21.04%,
    rgba(165, 239, 255, 0.2) 0%,
    rgba(110, 191, 244, 0.0447917) 77.08%,
    rgba(70, 144, 213, 0) 100%
  );
background-blend-mode: overlay, normal;
backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;

  padding: 8px;
  .food_info{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:end;
    h3{
      margin-top:8px;
      font-size:16px;
      font-weight:500;
    }
    p{
      margin-top:4px;
      font-size:12px
    }
    button{
      font-size:16px
    }
  }

`