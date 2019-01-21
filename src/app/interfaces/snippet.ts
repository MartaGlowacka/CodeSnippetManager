export interface ISnippet {
  id: number;
  title: string;
  content: string;
  description: string;
  tags: string[];
  isHidden: boolean;
  links: string[];
  date: Date;
}
