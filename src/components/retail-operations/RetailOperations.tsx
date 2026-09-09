import Spacings from '@commercetools-uikit/spacings';
import Text from '@commercetools-uikit/text';
import { useProductsFetcher } from '../../hooks/use-products-connector';
import { useInventoryFetcher } from '../../hooks/use-inventory-connector';
// import { useOrdersFetcher } from '../../hooks/use-orders-connector';

const MetricCard = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => (
  <div
    style={{
      border: '1px solid #d1d5db',
      borderRadius: '4px',
      padding: '24px',
      minWidth: '180px',
    }}
  >
    <Text.Detail>{title}</Text.Detail>
    <Text.Headline as="h2">{value}</Text.Headline>
  </div>
);

const RetailOperations = () => {
  const { products, loading, error } = useProductsFetcher();
  const { inventory, loading: inventoryLoading, error: inventoryError } =
  useInventoryFetcher();
//   const {
//   orders,
//   loading: ordersLoading,
//   error: ordersError,
// } = useOrdersFetcher();

  if (loading) {
    return <Text.Body>Loading products...</Text.Body>;
  }

  if (error) {
    return <Text.Body>Error: {error.message}</Text.Body>;
  }

  return (
    <Spacings.Stack scale="xl">
      <Spacings.Stack scale="s">
        <Text.Headline as="h2">Retail Operations</Text.Headline>

        <Text.Body>
          Overview of your commercetools retail operations.
        </Text.Body>
      </Spacings.Stack>

<Spacings.Inline scale="m">
  <MetricCard title="Products" value={products?.total ?? 0} />

  <MetricCard
    title="Inventory"
    value={
      inventoryLoading
        ? '...'
        : inventoryError
          ? 'Error'
          : inventory?.results?.reduce(
              (total: any, entry: any) => total + entry.quantityOnStock,
              0
            ) ?? 0
    }
  />

{/* <MetricCard
  title="Orders"
  value={
    ordersLoading
      ? '...'
      : ordersError
        ? 'Error'
        : orders?.total ?? 0
  }
/> */}
</Spacings.Inline>

      <Spacings.Stack scale="m">
        <Text.Subheadline as="h4">Products</Text.Subheadline>

        {products?.results?.map((product: any) => (
          <div key={product.id}>
            <Text.Body>
              {product.masterData?.current?.name}
            </Text.Body>

            <Text.Detail>
              SKU: {product.masterData?.current?.masterVariant?.sku}
            </Text.Detail>
          </div>
        ))}
      </Spacings.Stack>
    </Spacings.Stack>
  );
};

export default RetailOperations;