declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<unknown, unknown, unknown>
    export default component
  }

  declare module '*.svg'
{
  const content:string;
  export default content;
}
