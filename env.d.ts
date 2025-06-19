// env.d.ts
interface ImportMetaEnv {
    readonly VITE_API_URL: string
    readonly VITE_NODE_ENV: string
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}