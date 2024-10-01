export interface QuranMentions {
  contentType: string;
  content: string;
  ayahNo?: string;
  link?: string;
}

export interface HadithMentions {
  contentType: string;
  content: string;
  narrated: string;
  hadeesNo: string;
  link: string;
}

export interface INameDetails {
  arabic: {
    name: string;
    meaning: string;
  };
  english: {
    name: string;
    meaning: string;
  };
  intro?: string;
  quranMentions?: QuranMentions[];
  hadithMentions?: HadithMentions[];
  metaTitle: string;
  metaDescription: string;
  prevName?: string;
  nextName?: string;
}
