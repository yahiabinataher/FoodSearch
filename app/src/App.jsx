import { useEffect, useState } from "react"
import styled from "styled-components"
import SearchResult from "./components/SearchResults/SearchResult";
export const BASE_URL = "http://localhost:9000"

const App = () => {
const [data,setData] = useState(null);
const [filter,setFilter] = useState(null)
const [loding,setLoding] = useState(false);
const [error,setError] = useState(null);
const [selectBtn,setSelectBnt] = useState("all")


useEffect(() =>{
  const fatchFoodData = async () => {
    try {
      setLoding(true)
    const responce = await fetch(BASE_URL)
    const json =  await responce.json()
    setData(json)
    setFilter(json)
    setLoding(false)
    } catch (error) {
      setError("Unable to fetch data")
    }
  }
  fatchFoodData()
},[])


if(error) return <div>{error}</div>
if(loding) return <div>Loding.....</div>

//search value of food
const handleSearch = (e) =>{
  const searchValue = e.target.value
 if(searchValue === ""){
  setFilter(null)
 }
 const filterData = data.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase())  )

 setFilter(filterData)
}

// click  value of food
const  handleSelect = (type) =>{
  if(type === "all"){
    setFilter(data)
    setSelectBnt("all")
    return;
  }
  const filterData = data.filter((food) => food.type.toLowerCase().includes(type.toLowerCase())  )
  setFilter(filterData)
  setSelectBnt(type)
  
}

const filterBtn = [
  {
    name:"All",
    type:"all"
  },
  {
    name:"Breakfast",
    type:"breakfast"
  },
  {
    name:"Lunch",
    type:"lunch"
  },
  {
    name:"Dinner",
    type:"dinner"
  },
]

  return (
   <>
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="./public/logo.svg" alt="lOGO" />
        </div>
        <div className="search">
          <input  type="text" onChange={handleSearch} placeholder="Search Fook" />
        </div>
      </TopContainer>
      <FilterContainer>
        {filterBtn.map((data) =>   <Button key={data.name} onClick={ () => handleSelect(data.type)} isSelected ={selectBtn == data.type} >{data.name}</Button> )}
    
      
      </FilterContainer> 
    </Container>
      <SearchResult data={filter}/></>
  )
}

export default App

export const Container = styled.div`
max-width:1200px;
margin: 0 auto

`;
const TopContainer = styled.section`
 min-height : 140px;
 display: flex;
 justify-content:space-between;
 align-iteam:center;
 padding:16px;
 .search{
  input{
    background-color:transparent;
    border:1px solid red;
    color: white;
    border-radius:5px;
    height:40px;
    font-size:16px;
    padding:0 10px;
    
  }
 }
 @media (0 < width < 600px){
  flex-direction:column;
 }
`;

const FilterContainer= styled.section`
display:flex;
justify-content:center;
gap:8px;
padding-bottom:30px
`
export const Button= styled.button`
background-color:${({isSelected}) => (isSelected ? "teal" : "#ff4343")};
border-radius:5px;
padding:6px 12px;
outline:none;
border:none;
color:white;
cursor:pointer;
&:hover{
  background-color:#f22f22;
}

`

