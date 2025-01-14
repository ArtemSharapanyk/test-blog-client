export interface TextElement {
  type: "text";
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
}

export interface ArticleContentElement {
  text?: string;
  children?: ArticleContentElement[];
  url?: string;
  level?: number;
  format?: "unordered" | "ordered";
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
  type: "text" | "link" | "heading" | "paragraph" | "list" | "image";
}

export type ArticleContentType = ArticleContentElement[];
