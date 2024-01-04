import './App.css'
import NestedAccordion from './components/NestedAccordion'
import Tabs from './components/Tabs'
import productsData from './data/productsData.json'
function App() {
  return (
    <>
      <Tabs categoriesData={productsData} />
      <h1>Mobile</h1>
      <NestedAccordion categoriesData={productsData} />
    </>
  )
}

export default App
