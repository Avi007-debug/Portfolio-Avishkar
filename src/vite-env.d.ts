/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HIDE_PROJECT_1?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
