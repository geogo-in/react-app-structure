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

import fetchProduct from '../../../store/products/actions/fetch_product_details';
import { getSelectedProduct, getIsProductFetching } from '../../../store/products/reducers/product';

const ProductDetails = props => {

  const { productId } = props;
  const dispatch = useDispatch();

  const classes = useStyles()

  const isFetching = useSelector(getIsProductFetching);
  const product = useSelector(getSelectedProduct);

  useEffect(() => {
    dispatch(fetchProduct(productId))
  }, [])

  if(isFetching) {
    return <span>Loading...</span>
  }

  if(!product) {
    return <span />
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
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
      </CardActions>
    </Card>
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

export default ProductDetails;