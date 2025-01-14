export type ArticleContentNode = {
  type: string;
  text?: string;
  children?: ArticleContentNode[];
  code?: boolean;
};

export const getArticleContentText = (nodes: ArticleContentNode[]): string => {
  let result = "";

  nodes.forEach((node) => {
    if (node?.text) {
      result += node.text + " ";
    }

    if (node.children && node.children.length > 0) {
      result += getArticleContentText(node.children);
    }
  });

  return result.trim();
};
