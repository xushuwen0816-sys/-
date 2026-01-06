export interface ServicePackage {
  title: string;
  price: string;
  cardCount: string;
  description: string;
  iconType: 'star' | 'compass' | 'cards' | 'lightbulb';
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export interface NoticeItem {
  title: string;
  content: string;
}
