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
  id: number;
  arabic: {
    name: string;
    meaning?: string;
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

export interface INameAudioComponentProp {
  name: string;
}

export interface INamePrevComponentProp {
  prevName: string;
}

export interface INameNextComponentProp {
  nextName: string;
}

export interface INameHeadingComponentProp {
  name: INameDetails;
}

export interface IHadithMentionsComponentProp {
  mentions: HadithMentions[];
}

export interface IQuranMentionsComponentProp {
  mentions: HadithMentions[];
}

export interface IReferenceComponentProp {
  hadith: HadithMentions;
}

export interface IAyahComponentProp {
  ayah: QuranMentions;
}
