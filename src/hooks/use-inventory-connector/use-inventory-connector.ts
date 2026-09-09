/// <reference path="../../../@types-extensions/graphql-ctp/index.d.ts" />

import { useMcQuery } from '@commercetools-frontend/application-shell';
import { GRAPHQL_TARGETS } from '@commercetools-frontend/constants';

import FetchInventoryQuery from './fetch-inventory.ctp.graphql';

export const useInventoryFetcher = () => {
  const { data, error, loading } = useMcQuery(FetchInventoryQuery, {
    variables: {
      limit: 20,
      offset: 0,
    },
    context: {
      target: GRAPHQL_TARGETS.COMMERCETOOLS_PLATFORM,
    },
  });

  return {
    inventory: data?.inventoryEntries,
    error,
    loading,
  };
};