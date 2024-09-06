import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'cart',
  exposes: {
    './Module': 'apps/cart/src/remote-entry.ts',
  },
};

export default config;
