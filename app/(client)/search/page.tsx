import Container from "@/components/Container";
import ProductList from "@/components/ProductList";
import { searchProductsByName } from "@/sanity/helpers";

interface Props {
    searchParams : {
        
    };
}

const SearchPage = async({searchParams} : Props) => {
    const {query} = await searchParams;
  const products = await searchProductsByName(query)
  
    if(!products?.length){
      return(
      <div className="flex justify-center min-h-screen bg-gray-200 p-4">
        <div className="bg-white p-8 h-40 rounded-lg shadow-md w-full md:max-w-4xl text-center">
          <h1 className="text-3xl font-bold mb-3">No products found for <span className="text-darkBlue">{query}</span></h1>
          <p className="text-gray-600">Try for searching with different keywords</p>
        </div>
      </div>
      )
    }
    
  return (
    <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100">
      <Container className="p-8 bg-white rounded-lg shadow-md mt-3">
        <h1 className="text-3xl font-bold mb-3">Search Results for <span className="text-darkBlue">{query}</span>
        </h1>
        <ProductList products={products}/>
      </Container>
    </div>
  )
}

export default SearchPage
