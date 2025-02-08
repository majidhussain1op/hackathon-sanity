import {sanityFetch} from "../lib/live";
import {CATEGORIES_QUERY, PRODUCT_SEARCH_QUERY, PRODUCTS_BY_SLUG, PRODUCTS_QUERY, SALE_QUERY} from "./queries"


export const getSale = async ()=> {
  try{
    const products = await sanityFetch({
      query: SALE_QUERY,

    })
    return products?.data || []
  }catch (error){
    console.error("error in sale Data", error)
    return [];
  }
}

export const getAllProducts = async()=>{
  try{
    const products = await sanityFetch({
      query: PRODUCTS_QUERY,
  })
  return products.data || [];
  } catch (error){
    console.error("Error in products Data", error)
    return [];
  }
}


export const getAllCategories = async()=>{
  try{
    const categories = await sanityFetch({
      query: CATEGORIES_QUERY,
  });
  return categories.data || [];
  } catch (error){
    console.error("All Categories fetching data:", error)
    return [];
  }
}

export const getProductBySlug = async(slug: string) =>{
    try {
      const product = await sanityFetch({
        query:PRODUCTS_BY_SLUG,
        params:{
          slug,
        },
      });
      return product?.data || null;
    } catch (error) {
      console.error("Product fetching data:", error)
      return null;
    }
} 

export const searchProductsByName = async(searchParam: string)=>{
  try {
    const products = await sanityFetch({
      query:PRODUCT_SEARCH_QUERY,
      params: {
        searchParam:searchParam,
      },
    });
    return products?.data || [];
  } catch (error) {
    console.error("Fetching product by name error:", error)
    return [];
  }
}