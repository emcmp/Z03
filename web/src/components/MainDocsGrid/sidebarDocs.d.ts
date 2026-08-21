export type SidebarDocEntry = {
  id: string;
  label?: string;
  className?: string;
  customProps?: Record<string, unknown>;
  [key: string]: unknown;
};

declare const sidebarDocs: SidebarDocEntry[];

export default sidebarDocs;
