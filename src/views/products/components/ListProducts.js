import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import fetchProducts from '../../../store/products/actions/fetch_products';
import { getAllProducts, getIsProductFetching } from '../../../store/products/reducers/product';

export const ListProducts = props => {
  const dispatch = useDispatch();

  const products = useSelector(getAllProducts);
  const isFetching = useSelector(getIsProductFetching);

  const classes = useStyles()

  useEffect(() => {
    dispatch(fetchProducts())
  }, []);

  if(isFetching) {
    return <span>Loading...</span>
  }

  return (
    <>
      <h2>Products</h2>
      {products.map(product => {
        return (
          <Card key={product.id} className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={product.image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                {product.price}
              </Button>
              <Button size="small" color="primary" component={Link} to={`/products/${product.id}`}>
                Details
              </Button>
            </CardActions>
          </Card>
        )
      })

      }
    </>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default ListProducts;