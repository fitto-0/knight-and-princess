import 'next';

declare module 'next' {
  interface Metadata {
    themeColor?: string;
  }
}