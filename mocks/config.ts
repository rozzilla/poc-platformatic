export const mockConfigWithoutDB = {
  server: { hostname: "127.0.0.1", port: "3044" },
  core: { connectionString: "sqlite://./db.sqlite" },
  plugin: {
    path: "./index.ts",
    typescript: { outDir: "dist" },
  },
};
