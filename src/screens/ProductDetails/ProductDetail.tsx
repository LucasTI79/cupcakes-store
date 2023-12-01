import { Minus, Plus } from 'lucide-react-native';
import { Text, TouchableOpacity } from 'react-native';

import { GoBack } from '@components/controllers/buttons/GoBack';
import theme from '@theme/index';

import { Container, Image, ImageContainer } from './styles';
import { useProductDetailsController } from './useProductDetailsController';

type ProductDetailsProps = {
  route: {
    params: {
      product: Required<Product>;
    };
  };
};

export function ProductDetails({
  route: {
    params: { product },
  },
}: Readonly<ProductDetailsProps>) {
  const { goBack, addCartItem, decreaseCartItem, getItemQuantity } =
    useProductDetailsController();

  const cartQuantity = getItemQuantity(product.id);
  const disableDecrease = cartQuantity === 0;

  const image = product.image ?? 'https://picsum.photos/200/300';

  return (
    <Container>
      <GoBack onPress={goBack} />
      <ImageContainer>
        <Image source={{ uri: image }} />
      </ImageContainer>
      <TouchableOpacity
        disabled={disableDecrease}
        onPress={() => decreaseCartItem(product.id)}
      >
        <Minus color={theme.COLORS.PRIMARY} />
      </TouchableOpacity>
      <Text>{cartQuantity}</Text>
      <TouchableOpacity onPress={() => addCartItem(product)}>
        <Plus color={theme.COLORS.PRIMARY} />
      </TouchableOpacity>
    </Container>
  );
}
