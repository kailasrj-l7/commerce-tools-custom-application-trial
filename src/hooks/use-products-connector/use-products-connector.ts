/// <reference path="../../../@types-extensions/graphql-ctp/index.d.ts" />

import { useMcQuery } from '@commercetools-frontend/application-shell';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';

import FetchProductsQuery from './fetch-products.ctp.graphql';

export const useProductsFetcher = () => {
  const { data, error, loading } = useMcQuery(FetchProductsQuery, {
    context: {
      target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
    },
  });

  return {
    products: data?.products,
    error,
    loading,
  };
};