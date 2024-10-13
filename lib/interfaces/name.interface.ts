export interface IName {
  id: number;
  image: string;
  imageBrightness: string;
  arabic: {
    name: string;
    meaning?: string;
  };
  english: {
    name: string;
    meaning: string;
  };
  urdu: {
    name?: string;
    meaning: string;
  };
}

export interface INameCardComponentProps {
  name: IName;
}
