export interface IFaqItem {
  id: number;
  attributes: {
    title: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}