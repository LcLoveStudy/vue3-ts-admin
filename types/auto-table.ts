import type { FilterMethods } from 'element-plus/es/components/table/src/table-column/defaults';
export interface columnType {
  prop: string;
  label: string;
  order?: number;
  editable?: boolean;
  sortable?: boolean;
  width?: string | number;
  filters?: Array<{ text: any; value: any }>;
  filterMethod?: FilterMethods<any>;
}
