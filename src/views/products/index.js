import { Route } from 'react-router-dom';

import ListProducts from './components/ListProducts';
import ShowProducts from './show';

const Products = props => {
  const { match } = props;
  return (
    <>
      <Route path={`${match.url}/:productId`} component={ShowProducts} />
      <Route exact path={match.url} component={ListProducts} />
    </>
  );
}

export default Products;