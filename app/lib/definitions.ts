export type HadithAttr = {
  reference: string;
  content: string;
};

export type NameAttr = {
  image: string;
  imageBrightness: string;
  arabic: {
    name: string;
    meaning: string;
  };
  english: {
    name: string;
    meaning: string;
  };
  urdu: {
    name: string;
    meaning: string;
  };
};
