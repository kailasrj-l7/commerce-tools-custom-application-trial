/// <reference path="../../../@types-extensions/graphql-ctp/index.d.ts" />

import { useMcQuery } from '@commercetools-frontend/application-shell';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';

import FetchOrdersQuery from './fetch-orders.ctp.graphql';

export const useOrdersFetcher = () => {
  const { data, error, loading } = useMcQuery(FetchOrdersQuery, {
    variables: {
      limit: 20,
      offset: 0,
    },
    context: {
      target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
    },
  });

  return {
    orders: data?.orders,
    error,
    loading,
  };
};