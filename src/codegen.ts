import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "https://odyssey-lift-off-server.herokuapp.com/",
    documents: ["src/**/*.tsx"],
    generates: {
        "./src/__generated__/": {
                preset: "client"
            }
    }
};

export default config;