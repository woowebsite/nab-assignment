/// <reference types="vite/client" />
interface SelectOptions {
  value: number | string;
  label: string;
  code?: string;
}

type Actions = 'view' | 'edit' | 'delete';

interface ParentChildrenSelectOptions extends SelectOptions {
  parentValue: number;
}

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
