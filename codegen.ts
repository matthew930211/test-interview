import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: {
    [`https://api.headlesstrade.com/gubi/storefront/graphql?sdl`]: {
      handleAsSDL: true,
    },
  },
  documents: "app/**/*.{ts,tsx}",
  ignoreNoDocuments: true,
  generates: {
    "./schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
    "./app/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
        fragmentMasking: false,
        avoidOptionals: true,
        strictScalars: true,
      },
      config: {
        customDirectives: {
          apolloUnmask: true,
        },
        inlineFragmentTypes: "mask",
        useTypeImports: true,
      },
    },
    "./app/__generated__/possibleTypes.json": {
      plugins: ["fragment-matcher"],
    },
    "./app/__generated__/apollo-helpers.ts": {
      plugins: ["typescript-apollo-client-helpers"],
    },
  },
};

export default config;
