import ProductDetailsPage from './components/ProductDetailsPage'

export const ProductDetails = props => {
  const { match } = props;
  // console.log(match)
  return <ProductDetailsPage productId={match.params.productId} />;
}

export default ProductDetails;