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

export type QuranMentions = {
  contentType: string;
  content: string;
  ayahNo?: string;
  link?: string;
};

export type HadithMentions = {
  contentType: string;
  content: string;
  narrated: string;
  hadeesNo: string;
  link: string;
};

export type singleNamesData = {
  arabic: {
    name: string;
    meaning: string;
  };
  english: {
    name: string;
    meaning: string;
  };
  intro: string;
  quranMentions: QuranMentions[];
  hadithMentions: HadithMentions[];
  metaTitle: string;
  metaDescription: string;
};

export type NamesIndex = {
  [key: string]: singleNamesData;
};
