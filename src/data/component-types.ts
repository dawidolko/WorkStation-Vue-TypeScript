export interface Component {
  id: number;
  category: string;
  name: string;
  model: string;
  specs: string[];
  description: string;
  image: string;
  detailImages?: string[];
  type: "main" | "secondary";
}

export interface WorkStationDataType {
  [key: string]: Component[];
}

