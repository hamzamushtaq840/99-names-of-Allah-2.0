const names = [
  // {
  //   image:
  //     "https://i.pinimg.com/originals/d1/65/97/d165973ecc3dd541529a2d2cdeaf2c11.jpg",
  //   imageBrightness: "40%",
  //   arabic: {
  //     name: "الرَّحْمَنُ",
  //   },
  //   english: {
  //     name: "AR-RAHMAAN",
  //     meaning: "The Entirely Merciful",
  //   },
  //   urdu: {
  //     meaning: "انتہائی مہربان",
  //   },
  //   singlePageData: {
  //     intro: `Ar Rahman, a profound attribute of Allah, holds a deep and multifaceted significance according to Islamic scholars. This divine name encapsulates the essence of divine mercy in two profound ways. Firstly, it signifies that mercy itself is one of Allah's inherent attributes, exemplifying His boundless compassion and benevolence. Secondly, Ar-Rahman reflects Allah's unwavering and all encompassing mercy extended to all of His creations, transcending boundaries and encompassing every corner of existence.   and that is referring to the power and authority and all-encompassing might of Allah, glory to Him in the highest! The name encompasses the meaning of all the attributes that are exclusively His as The Almighty!. ---------In 19:85-96, one of the most powerful and clarifying illuminations of the meaning of the name Al-Rahman, used here repeatedly, forcefully condemns the idol-worship of Aissa (Jesus) by Christians and any allegation that the Almighty (all glory to Him in the highest) shares power with any other, or procreates. No, He is the Creator, alone, and there is none like Him, and all others and all else are creatures, categorically different, and all are utterly and completely subjected to His authority and are His worshippers: recognise it or not! These ayat mention that the mountains, the heavens and the earth all prostrate in awe and worship of Al-Rahman. They vividly describe how this blasphemy invokes His wrath. Is this the description of "The Beneficent" or "Most Gracious"? Do these ayat describe a benevolent benefactor (as in "beneficent") or a generous host (as in "gracious"), "graciously" accommodating His "guests" or the recipients of His largesse, or a kind-hearted ruler forgiving His subjects, or do they describe none but the Almighty? For a word of such magnitude, such immense significance, an inept substitute for the true meaning cannot be simply brushed off as a minor 'mistake'.------------ Just as the name Al-Raheem (the All-Merciful) is mentioned in the Quran (in reference to Allah) exactly twice as many times (114 times) as the mentioning of the name Al-Rahman (The Almighty) (57 times), so His power, being the "heavier" element, is balanced with twice as much mercy, such that His mercy "is as wide as everything" or encompasses all that exists (7:156).`,
  //     quranMentions: [
  //       {
  //         contentType: "text",
  //         content: `From the root ra-ha-mim (ر ح م), which has the following classical Arabic connotations: to have tenderness, kindness to love to have mercy, to have pity to show favor and goodness to have all that is required for beneficence.This Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is mentioned in the Quran for a total 114 times. Twice as much as the Ar-Rahman.From the root ra-ha-mim (ر ح م), which has the following classical Arabic connotations: to have tenderness, kindness to love to have mercy, to have pity to show favor and goodness to have all that is required for beneficence.This Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is mentioned in the Quran for a total 114 times. Twice as much as the Ar-Rahman.`,
  //       },
  //       {
  //         contentType: "ayah",
  //         content: `“That is the Knower of the seen and unseen—the Almighty, Most Merciful”`,
  //         ayahNo: "32:6",
  //         link: "https://quran.com/32/6",
  //       },
  //       {
  //         contentType: "ayah",
  //         content: `“Say, ˹O Prophet,˺ “Call upon Allah or call upon the Most Compassionate—whichever you call, He has the Most Beautiful Names.” Do not recite your prayers too loudly or silently, but seek a way between.”`,
  //         ayahNo: "17:10",
  //         link: "https://quran.com/17/110",
  //       },
  //       {
  //         contentType: "text",
  //         content: `Almighty Himself described the name Al-Rahman as being commensurate with the name Allah`,
  //       },
  //       {
  //         contentType: "ayah",
  //         content: `“She appealed, “I truly seek refuge in the Most Compassionate from you! ˹So leave me alone˺ if you are God-fearing.””`,
  //         ayahNo: "19:18",
  //         link: "https://quran.com/19/18",
  //       },
  //       {
  //         contentType: "text",
  //         content: `Mary asks for protection from Al-Rahman against one whom she perceives as an unknown man entering her private chambers, but who in fact is the Archangel Jibreel (Gabriel). She is asking for protection from the Most Powerful, the Almighty, not mercy from "the Beneficent"! (see editor's note 3). She is asking for protection from Al-Rahman against the "intruder" in order also to frighten the "intruder", for which situation the appellation "the Merciful" or "The Most Gracious" would hardly instill fear, and hence be unsuitable. Obviously, Maryam knew the meaning of the name Al-Rahman and we are shown here by Al-Rahman himself (who, according to 55:2, teaches us the Quran) that she used His name appropriately.`,
  //       },
  //       {
  //         contentType: "ayah",
  //         content: `“O  dear father! I truly fear that you will be touched by a torment from the Most Compassionate, and become Satan's companion ˹in Hell˺.””`,
  //         ayahNo: "19:45",
  //         link: "https://quran.com/19/45",
  //       },
  //       {
  //         contentType: "text",
  //         content: `The choice of which name for God to use by Abraham is very significant. Abraham wanted to warn his father and scare him of a great punishment from God. Abraham chose the name Al-Rahman knowing that great punishment is more appropriate to scare his father when associated to an Almighty rather a Most Merciful. This again sheds great light on the true meaning of the name Al-Rahman. It is within the bounds of the Almighty, His authority and power to afflict punishment, but it is not within the definition of "mercy" or "beneficence" or "graciousness" to afflict punishment or cause torture.`,
  //       },
  //       // {
  //       //   contentType: 'text',
  //       //   content: `From the root ra-ha-mim (ر ح م), which has the following classical Arabic connotations: to have tenderness, kindness to love to have mercy, to have pity to show favor and goodness to have all that is required for beneficence.This Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is mentioned in the Quran for a total 114 times. Twice as much as the Ar-Rahman.`,
  //       // },
  //     ],
  //     hadithMentions: [
  //       // {
  //       //   contentType: 'text',
  //       //   content: `From the root ra-ha-mim (ر ح م), which has the following classical Arabic connotations: to have tenderness, kindness to love to have mercy, to have pity to show favor and goodness to have all that is required for beneficence.This Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is mentioned in the Quran for a total 114 times. Twice as much as theAr-Rahman.`,
  //       // },
  //       {
  //         contentType: "hadees",
  //         narrated: "Abu Huraira",
  //         content: `The Prophet (ﷺ) said, "The word 'Ar-Rahm (womb) derives its name from Ar-Rahman (i.e., one of the names of Allah) and Allah said: 'I will keep good relation with the one who will keep good relation with you, (womb i.e. Kith and Kin) and sever the relation with him who will sever the relation with you, (womb, i.e. Kith and Kin).`,
  //         hadeesNo: "Bukhari:5988",
  //         link: "https://sunnah.com/bukhari:5988",
  //       },
  //       // {
  //       //   contentType: 'text',
  //       //   content: `From the root ra-ha-mim (ر ح م), which has the following classical Arabic connotations: to have tenderness, kindness to love to have mercy, to have pity to show favor and goodness to have all that is required for beneficence.This Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is mentioned in the Quran for a total 114 times. Twice as much as the Ar-Rahman.From the root ra-ha-mim (ر ح م), which has the following classical Arabic connotations: to have tenderness, kindness to love to have mercy, to have pity to show favor and goodness to have all that is required for beneficence.This Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is mentioned in the Quran for a total 114 times. Twice as much as the Ar-Rahman.`,
  //       // },
  //     ],
  //   },
  //   metaTitle: "Ar Rahman Meaning: The Entirely Merciful (99 Names of Allah)",
  //   metaDescription:
  //     "Explore Ar Rahman (الرَّحْمَنُ)  one of the 99 names of Allah, representing him with the attribute The Most Merciful. Discover the divine attributes of Ar Rahmaan and the significance of the 99 names of Allah on our website.",
  //   // <p>
  //   //     The name Ar-Rahman (The All-Merciful) is mentioned in the Quran exactly half as many times
  //   //     (57 times) as the name Allah (114 times). All creations are different and completely
  //   //     under His authority. The mountains, the heavens, and the earth all bow in awe and worship
  //   //     of Ar-Rahman. Allah's mercy to disbelievers is only for this world. In the afterlife, when they ask
  //   //     Allah to remove them from Hellfire and seek His help, they will admit their wrongdoing,
  //   //     showing that His mercy was truly not with them in the end.
  //   // </p>
  //   // ` Allah's mercy to disbelievers is only for this world. In the afterlife, when they ask
  //   //       Allah to remove them from Hellfire and seek His help, they will admit their wrongdoing,
  //   //       showing that His mercy was truly not with them in the end.`,
  //   // quranMentions: [
  //   //   {
  //   //     contentType: "text",
  //   //     content: `From the root ra-ha-mim (ر ح م), which has the following classical
  //   //               Arabic connotations: to have tenderness, kindness to love to have mercy,
  //   //               to have pity to show favor and goodness to have all that is required for
  //   //               beneficence.This Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is mentioned in the Quran for a total
  //   //               114 times. Twice as much as the Ar-Rahman.From the root ra-ha-mim (ر ح م),
  //   //               which has the following classical Arabic connotations: to have tenderness,
  //   //               kindness to love to have mercy, to have pity to show favor and goodness to
  //   //               have all that is required for beneficence.This Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is mentioned
  //   //               in the Quran for a total 114 times. Twice as much as the Ar-Rahman.`,
  //   //   },
  //   //   {
  //   //     contentType: "ayah",
  //   //     content: `“That is the Knower of the seen and unseen—the Almighty, Most Merciful”`,
  //   //     ayahNo: "32:6",
  //   //     link: "https://quran.com/32/6",
  //   //   },
  //   //   {
  //   //     contentType: "ayah",
  //   //     content: `“Say, ˹O Prophet,˺ “Call upon Allah or call upon the Most Compassionate—whichever
  //   //                 you call, He has the Most Beautiful Names.” Do not recite your prayers too loudly
  //   //                 or silently, but seek a way between.”`,
  //   //     ayahNo: "17:10",
  //   //     link: "https://quran.com/17/110",
  //   //   },
  //   //   {
  //   //     contentType: "text",
  //   //     content: `Almighty Himself described the name Al-Rahman as being commensurate with the name Allah`,
  //   //   },
  //   //   {
  //   //     contentType: "ayah",
  //   //     content: `“She appealed, “I truly seek refuge in the Most Compassionate from you! ˹So leave me alone˺ if you are God-fearing.””`,
  //   //     ayahNo: "19:18",
  //   //     link: "https://quran.com/19/18",
  //   //   },
  //   //   {
  //   //     contentType: "text",
  //   //     content: `Mary asks for protection from Al-Rahman against one whom she perceives as an unknown man entering her private chambers, but who in fact is the Archangel Jibreel (Gabriel). She is asking for protection from the Most Powerful, the Almighty, not mercy from "the Beneficent"! (see editor's note 3). She is asking for protection from Al-Rahman against the "intruder" in order also to frighten the "intruder", for which situation the appellation "the Merciful" or "The Most Gracious" would hardly instill fear, and hence be unsuitable. Obviously, Maryam knew the meaning of the name Al-Rahman and we are shown here by Al-Rahman himself (who, according to 55:2, teaches us the Quran) that she used His name appropriately.`,
  //   //   },
  //   //   {
  //   //     contentType: "ayah",
  //   //     content: `“O  dear father! I truly fear that you will be touched by a torment from the Most Compassionate, and become Satan's companion ˹in Hell˺.””`,
  //   //     ayahNo: "19:45",
  //   //     link: "https://quran.com/19/45",
  //   //   },
  //   //   {
  //   //     contentType: "text",
  //   //     content: `The choice of which name for God to use by Abraham is very significant. Abraham wanted to warn his father and scare him of a great punishment from God. Abraham chose the name Al-Rahman knowing that great punishment is more appropriate to scare his father when associated to an Almighty rather a Most Merciful. This again sheds great light on the true meaning of the name Al-Rahman. It is within the bounds of the Almighty, His authority and power to afflict punishment, but it is not within the definition of "mercy" or "beneficence" or "graciousness" to afflict punishment or cause torture.`,
  //   //   },
  //   // ],
  //   // hadithMentions: [
  //   //   {
  //   //     contentType: "hadees",
  //   //     narrated: "Abu Huraira",
  //   //     content: `The Prophet (ﷺ) said, "The word 'Ar-Rahm (womb) derives its
  //   //                 name from Ar-Rahman (i.e., one of the names of Allah) and Allah
  //   //                 said: 'I will keep good relation with the one who will keep good
  //   //                 relation with you, (womb i.e. Kith and Kin) and sever the relation
  //   //                  with him who will sever the relation with you, (womb, i.e. Kith and Kin).`,
  //   //     hadeesNo: "Bukhari:5988",
  //   //     link: "https://sunnah.com/bukhari:5988",
  //   //   },
  //   // ],
  // },
  // {
  //   image:
  //     "https://i.pinimg.com/originals/a3/22/53/a32253bc408d53b57672dc0880856302.jpg",
  //   imageBrightness: "45%",
  //   arabic: {
  //     name: "ٱلْرَّحِيْمُ",
  //   },
  //   english: {
  //     name: "AR-RAHEEM",
  //     meaning: "The Bestower of Mercy",
  //   },
  //   urdu: {
  //     meaning: "انتہائی رحم کرنے والا",
  //   },
  //   metaTitle: "Ar Raheem Meaning: The Bestower of Mercy (99 Names of Allah)",
  //   metaDescription: "",
  // },
  // {
  //   image:
  //     "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  //   imageBrightness: "40%",
  //   arabic: {
  //     name: "ٱلْمَلِكُ",
  //   },
  //   english: {
  //     name: "AL-MALIK",
  //     meaning: "The King and Owner of Dominion",
  //   },
  //   urdu: {
  //     meaning: "مالک، بادشاہ",
  //   },
  //   metaTitle:
  //     "Al Malik Meaning: The King and Owner of Dominion (99 Names of Allah)",
  //   metaDescription: "",
  // },
  // {
  //   image:
  //     "https://i.pinimg.com/564x/a8/21/83/a82183f88a40aef6e47629b1fb3cec96.jpg",
  //   imageBrightness: "45%",
  //   arabic: {
  //     name: "ٱلْقُدُّوسُ",
  //   },
  //   english: {
  //     name: "AL-QUDDUS",
  //     meaning: "The Absolutely Purest",
  //   },
  //   urdu: {
  //     meaning: "انتہائی پاک ذات",
  //   },
  //   metaTitle: "Al Qudoos Meaning: The Absolutely Purest (99 Names of Allah)",
  //   metaDescription: "",
  // },
  // {
  //   image:
  //     "https://i.pinimg.com/564x/86/f9/d3/86f9d34a8f6ae41717dfa98e4a8e7eaa.jpg",
  //   imageBrightness: "40%",
  //   arabic: {
  //     name: "ٱلْسَّلَامُ",
  //   },
  //   english: {
  //     name: "AS-SALAM",
  //     meaning: "The Perfection and Giver of Peace",
  //   },
  //   urdu: {
  //     meaning: "سلامتی والا",
  //   },
  //   metaTitle:
  //     "As Salam Meaning: The Perfection and Giver of Peace (99 Names of Allah)",
  //   metaDescription: "",
  // },
  // {
  //   image:
  //     "https://i.pinimg.com/750x/91/b2/d5/91b2d572151f1d6e49720b9bad0940f9.jpg",
  //   imageBrightness: "45%",
  //   arabic: {
  //     name: "ٱلْمُؤْمِنُ",
  //   },
  //   english: {
  //     name: "AL-MU'MIN",
  //     meaning: "The One Who gives Emaan and Security",
  //   },
  //   urdu: {
  //     meaning: "ایمان عطاء کرنے والا، امن دینے والا",
  //   },
  //   metaTitle:
  //     "Al Mu'min Meaning: The One Who gives Emaan and Security (99 Names of Allah)",
  //   metaDescription: "",
  // },
  // {
  //   image:
  //     "https://i.pinimg.com/564x/ef/c3/29/efc32913100d6d00a95b95b285c777b1.jpg",
  //   imageBrightness: "40%",
  //   arabic: {
  //     name: "ٱلْمُهَيْمِنُ",
  //   },
  //   english: {
  //     name: "AL-MUHAYMIN",
  //     meaning: "The Guardian, The Witness, The Overseer",
  //   },
  //   urdu: {
  //     meaning: "نگرانی کرنے والا",
  //   },
  //   metaTitle:
  //     "Al Muhaymin Meaning: The Guardian, The Witness, The Overseer (99 Names of Allah)",
  //   metaDescription: "",
  // },
  // {
  //   image:
  //     "https://i.pinimg.com/236x/ef/36/0a/ef360a9e971b2d965d72bb4a7556b48d.jpg",
  //   imageBrightness: "50%",
  //   arabic: {
  //     name: "ٱلْعَزِيزُ",
  //   },
  //   english: {
  //     name: "AL-AZEEZ",
  //     meaning: "The All Mighty",
  //   },
  //   urdu: {
  //     meaning: "غالب، زبردست، غلبہ والا، عزت دینے والا",
  //   },
  //   metaTitle: "Al Azeez Meaning: The All Mighty (99 Names of Allah)",
  //   metaDescription: "",
  // },
  // {
  //   image:
  //     "https://i.pinimg.com/564x/5e/64/23/5e6423c6be8e66b73d378c7eb9354688.jpg",
  //   imageBrightness: "40%",
  //   arabic: {
  //     name: "ٱلْجَبَّارُ",
  //   },
  //   english: {
  //     name: "AL-JABBAR",
  //     meaning: "The Compeller, The Restorer",
  //   },
  //   urdu: {
  //     meaning: "زبردست غلبہ رکھنے والا",
  //   },
  //   metaTitle:
  //     "Al Jabbar Meaning: The Compeller, The Restorer (99 Names of Allah)",
  //   metaDescription: "",
  // },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْمُتَكَبِّرُ",
    },
    english: {
      name: "AL-MUTAQABBIR",
      meaning: "The Supreme, The Majestic",
    },
    urdu: {
      meaning: "بڑائی والا",
    },
    metaTitle:
      "Al Mutaqabbir Meaning: The Supreme, The Majestic (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْخَالِقُ",
    },
    english: {
      name: "AL-KHAALIQ",
      meaning: "The Creator, The Maker",
    },
    urdu: {
      meaning: "پیدا کرنے والا",
    },
    metaTitle: "Al Khaaliq Meaning: The Creator, The Maker (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْبَارِئُ",
    },
    english: {
      name: "AL-BAARI'",
      meaning: "The Originator",
    },
    urdu: {
      meaning: "جڑ سے پیدا کرنے والا",
    },
    metaTitle: "Al Baari Meaning: The Originator (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْمُصَوِّرُ",
    },
    english: {
      name: "AL-MUSAWWIR",
      meaning: "The Shaper of Beauty",
    },
    urdu: {
      meaning: "صورتیں بنانے والا",
    },
    metaTitle: "Al Musawwir Meaning: The Shaper of Beauty (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْغَفَّارُ",
    },
    english: {
      name: "AL-GHAFFAR",
      meaning: "The All- and Oft-Forgiving",
    },
    urdu: {
      meaning: "بخشنے والا",
    },
    metaTitle:
      "Al Ghaffar Meaning: The All- and Oft-Forgiving (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْقَهَّارُ",
    },
    english: {
      name: "AL-QAHHAR",
      meaning: "The Subduer, The Ever-Dominating",
    },
    urdu: {
      meaning: "زبردست، قہر نازل کرنے والا",
    },
    metaTitle:
      "Al Qahhar Meaning: The Subduer, The Ever-Dominating (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "الْوَهَّابُ",
    },
    english: {
      name: "AL-WAHHAAB",
      meaning: "The Giver of All",
    },
    urdu: {
      meaning: "سب کچھ عطا کرنے والا",
    },
    metaTitle: "Al Wahhaab Meaning: The Giver of All (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْرَّزَّاقُ",
    },
    english: {
      name: "AR-RAZZAAQ",
      meaning: "The Sustainer",
    },
    urdu: {
      meaning: "رزق دینے والا",
    },
    metaTitle: "Al Razzaaq Meaning: The Sustainer (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْفَتَّاحُ",
    },
    english: {
      name: "AL-FATTAAH",
      meaning: "The Opener, The Victory Giver",
    },
    urdu: {
      meaning: "کھولنے والا",
    },
    metaTitle:
      "Al Fattaah Meaning: The Opener, The Victory Giver (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْعَلِيْمُ",
    },
    english: {
      name: "AL-‘ALEEM",
      meaning: "The All Knowing, The Omniscient",
    },
    urdu: {
      meaning: "جاننے والا، علم والا، باخبر",
    },
    metaTitle:
      "Al Aleem Meaning: The All Knowing, The Omniscient (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْقَابِضُ",
    },
    english: {
      name: "AL-QAABID",
      meaning: "The Constrictor",
    },
    urdu: {
      meaning: "قبض کرنے والا",
    },
    metaTitle: "Al Qaabid Meaning: The Constrictor (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْبَاسِطُ",
    },
    english: {
      name: "AL-BAASIT",
      meaning: "The Expander",
    },
    urdu: {
      meaning: "کشادہ کرنے والا ",
    },
    metaTitle: "Al Baasit Meaning: The Expander (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْخَافِضُ",
    },
    english: {
      name: "AL-KHAAFID",
      meaning: "The Abaser",
    },
    urdu: {
      meaning: "پست کرنے والا",
    },
    metaTitle: "Al Khaafid Meaning: The Abaser (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْرَّافِعُ",
    },
    english: {
      name: "AR-RAAFI'",
      meaning: "The Exalter",
    },
    urdu: {
      meaning: "بلند کرنے والا",
    },
    metaTitle: "Ar Raafi' Meaning: The Exalter (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْمُعِزُّ",
    },
    english: {
      name: "AL-MU'IZZ",
      meaning: "The Bestower of Honors",
    },
    urdu: {
      meaning: "عزت دینے والا",
    },
    metaTitle: "Al Mu'izz Meaning: The Bestower of Honors (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْمُذِلُّ",
    },
    english: {
      name: "AL-MUZIL",
      meaning: "The Dishonourer, The Humiliator",
    },
    urdu: {
      meaning: "ذلت دینے والا",
    },
    metaTitle:
      "Al Muzil Meaning: The Dishonourer, The Humiliator (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْسَّمِيعُ",
    },
    english: {
      name: "AS-SAMEE'",
      meaning: "The All-Hearing",
    },
    urdu: {
      meaning: "خوب سننے والا",
    },
    metaTitle: "As Sami' Meaning: The All-Hearing (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْبَصِيرُ",
    },
    english: {
      name: "AL-BASEER",
      meaning: "The All-Seeing",
    },
    urdu: {
      meaning: "خوب دیکھنے والا",
    },
    metaTitle: "Al Baseer Meaning: The All-Seeing (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْحَكَمُ",
    },
    english: {
      name: "AL-HAKAM",
      meaning: "The Judge",
    },
    urdu: {
      meaning: "فیصلہ کرنے والا، حاکم",
    },
    metaTitle: "Al Hakam Meaning: The Judge (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْعَدْلُ",
    },
    english: {
      name: "AL-‘ADL",
      meaning: "The Utterly Just",
    },
    urdu: {
      meaning: "انصاف کرنے والا",
    },
    metaTitle: "Al ‘Adl Meaning: The Utterly Just (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْلَّطِيفُ",
    },
    english: {
      name: "AL-LATEEF",
      meaning: "The Subtle One",
    },
    urdu: {
      meaning: "مہربان",
    },
    metaTitle: "Al Lateef Meaning: The Subtle One (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْخَبِيرُ",
    },
    english: {
      name: "AL-KHABEER",
      meaning: "The All-Aware",
    },
    urdu: {
      meaning: "خبردار، جاننے والا، خبر رکھنے والا",
    },
    metaTitle: "Al Khabeer Meaning: The All-Aware (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْحَلِيمُ",
    },
    english: {
      name: "AL-HALEEM",
      meaning: "The Most Forbearing",
    },
    urdu: {
      meaning: "بردبار",
    },
    metaTitle: "Al Haleem Meaning: The Most Forbearing (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْعَظِيمُ",
    },
    english: {
      name: "AL-‘AZEEM",
      meaning: "The Magnificent",
    },
    urdu: {
      meaning: "بہت عظمت والا",
    },
    metaTitle: "Al ‘Azeem Meaning: The Magnificent (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْغَفُورُ",
    },
    english: {
      name: "AL-GHAFOOR",
      meaning: "The Most-Forgiving",
    },
    urdu: {
      meaning: "خوب بخش دینے والا",
    },
    metaTitle: "Al Ghafoor Meaning: The Most-Forgiving (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْشَّكُورُ",
    },
    english: {
      name: "ASH-SHAKOOR",
      meaning: "The Rewarder of Thankfulness",
    },
    urdu: {
      meaning: "قدردان",
    },
    metaTitle:
      "Ash Shakoor Meaning: The Rewarder of Thankfulness (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْعَلِيُّ",
    },
    english: {
      name: "AL-‘ALEE",
      meaning: "The Highest",
    },
    urdu: {
      meaning: "اعلیٰ، سب سے افضل، برتر",
    },
    metaTitle: "Al ‘Alee Meaning: The Highest (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "بزرگی والا",
    },
    english: {
      name: "AL-KABEER",
      meaning: "The Great, The Most Grand",
    },
    urdu: {
      meaning: "بہت بڑا",
    },
    metaTitle:
      "Al Kabeer Meaning: The Great, The Most Grand (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْحَفِيظُ",
    },
    english: {
      name: "AL-HAFEEDH",
      meaning: "The Preserver",
    },
    urdu: {
      meaning: "حفاظت کرنے والا، نگہبان",
    },
    metaTitle: "Al Hafeedh Meaning: The Preserver (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْمُقِيتُ",
    },
    english: {
      name: "AL-MUQEET",
      meaning: "The Nourisher",
    },
    urdu: {
      meaning: "باقی رہنے والا، روزی دینے والا، نگہبان، قوت دینے والا",
    },
    metaTitle: "Al Muqeet Meaning: The   (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْحَسِيبُ",
    },
    english: {
      name: "AL-HASEEB",
      meaning: "The Reckoner",
    },
    urdu: {
      meaning: "حساب لینے والا",
    },
    metaTitle: "Al Haseeb Meaning: The Reckoner (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْجَلِيلُ",
    },
    english: {
      name: "AL-JALEEL",
      meaning: "The Majestic",
    },
    urdu: {
      meaning: "بڑے اور بلند مرتبے والا",
    },
    metaTitle: "Al Jaleel Meaning: The Majestic (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْكَرِيمُ",
    },
    english: {
      name: "AL-KAREEM",
      meaning: "The Generous",
    },
    urdu: {
      meaning: "کرم کرنے والا",
    },
    metaTitle: "Al Kareem Meaning: The Generous (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْرَّقِيبُ",
    },
    english: {
      name: "AR-RAQEEB",
      meaning: "The Watchful",
    },
    urdu: {
      meaning: "نگہبان، خیال رکھنے والا",
    },
    metaTitle: "Ar Raqeeb Meaning: The Watchful (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْمُجِيبُ",
    },
    english: {
      name: "AL-MUJEEB",
      meaning: "The Responsive, The Answerer of Prayers",
    },
    urdu: {
      meaning: "قبول کرنے والا",
    },
    metaTitle:
      "Al Mujeeb Meaning: The Responsive, The Answerer of Prayers (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْوَاسِعُ",
    },
    english: {
      name: "AL-WAASI'",
      meaning: "The Vast, The All-Encompassing",
    },
    urdu: {
      meaning: "لامحدود",
    },
    metaTitle:
      "Al Waasi' Meaning: The Vast, The All-Encompassing (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْحَكِيمُ",
    },
    english: {
      name: "AL-HAKEEM",
      meaning: "The Perfectly Wise",
    },
    urdu: {
      meaning: "حکمت والا",
    },
    metaTitle: "Al Hakeem Meaning: The Perfectly Wise (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْوَدُودُ",
    },
    english: {
      name: "AL-WADOOD",
      meaning: "The Loving One",
    },
    urdu: {
      meaning: "محبت کرنے والا",
    },
    metaTitle: "Al Wadood Meaning: The Loving One (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْمَجِيدُ",
    },
    english: {
      name: "AL-MAJEED",
      meaning: "The Most Glorious One",
    },
    urdu: {
      meaning: "بڑی شان والا",
    },
    metaTitle: "Al Majeed Meaning: The Most Glorious One (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْبَاعِثُ",
    },
    english: {
      name: "AL-BA'ITH",
      meaning: "The Resurrector",
    },
    urdu: {
      meaning: "اُٹھانے والا",
    },
    metaTitle: "Al Ba'ith Meaning: The Resurrector (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلشَّهِيدُ",
    },
    english: {
      name: "ASH-SHAHEED",
      meaning: "The Witness",
    },
    urdu: {
      meaning: "گواہ",
    },
    metaTitle: "Ash Shaheed Meaning: The Witness (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْحَقُّ",
    },
    english: {
      name: "AL-HAQQ",
      meaning: "The Truth",
    },
    urdu: {
      meaning: "سچا مالک",
    },
    metaTitle: "Al Haqq Meaning: The Truth (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْوَكِيلُ",
    },
    english: {
      name: "AL-WAKEEL",
      meaning: "The Trustee, The Dependable",
    },
    urdu: {
      meaning: "کام بنانے والا",
    },
    metaTitle:
      "Al Wakeel Meaning: The Trustee, The Dependable (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْقَوِىُّ",
    },
    english: {
      name: "AL-QAWIYY",
      meaning: " The Possessor of All Strength",
    },
    urdu: {
      meaning: "سب سے زیادہ طاقتور",
    },
    metaTitle:
      "Al Qawiyy Meaning:  The Possessor of All Strength (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْمَتِينُ",
    },
    english: {
      name: "AL-MATEEN",
      meaning: "The Firm, The Steadfast",
    },
    urdu: {
      meaning: "مضبوط، قوت والا",
    },
    metaTitle: "Al Mateen Meaning: The Firm, The Steadfast (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْوَلِىُّ",
    },
    english: {
      name: "AL-WALEE",
      meaning: "The Friend, The Ally",
    },
    urdu: {
      meaning: "دوست",
    },
    metaTitle: "Al Walee Meaning: The Friend, The Ally (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْحَمِيدُ",
    },
    english: {
      name: "AL-HAMEED",
      meaning: "The All Praiseworthy",
    },
    urdu: {
      meaning: "تعریف والا",
    },
    metaTitle: "Al Hameed Meaning: The All Praiseworthy (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْمُحْصِى",
    },
    english: {
      name: "AL-MUHSEE",
      meaning: "The Accounter, The Numberer of All",
    },
    urdu: {
      meaning: "شمار کرنے والا",
    },
    metaTitle:
      "Al Muhsee Meaning: The Accounter, The Numberer of All (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْمُبْدِئُ",
    },
    english: {
      name: "AL-MUBDI",
      meaning: "The Originator, The Initiator",
    },
    urdu: {
      meaning: "عدم سے عالم کو وجود لانے والا",
    },
    metaTitle:
      "Al Mubdi Meaning: The Originator, The Initiator (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْمُعِيدُ",
    },
    english: {
      name: "AL-MU'ID",
      meaning: "The Restorer, The Reinstater Who Brings Back All",
    },
    urdu: {
      meaning: "لوٹانے والا، پہلی بار پیدا کرنے والا",
    },
    metaTitle:
      "Al mu'id Meaning: The Restorer, The Reinstater Who Brings Back All (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْمُحْيِى",
    },
    english: {
      name: "AL-MUHYEE",
      meaning: "The Giver of Life",
    },
    urdu: {
      meaning: "زندہ کرنے والا",
    },
    metaTitle: "Al muhyee Meaning: The Giver of Life (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْمُمِيتُ",
    },
    english: {
      name: "AL-MUMEET",
      meaning: "The Bringer of Death, The Destroyer",
    },
    urdu: {
      meaning: "موت دینے والا",
    },
    metaTitle:
      "Al Mumeet Meaning: The Bringer of Death, The Destroyer (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْحَىُّ",
    },
    english: {
      name: "AL-HAYY",
      meaning: "The Ever Living One",
    },
    urdu: {
      meaning: "زندہ، ہمیشہ رہنے والا",
    },
    metaTitle: "Al Hayy Meaning: The Ever Living One (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْقَيُّومُ",
    },
    english: {
      name: "AL-QAYYOOM",
      meaning: "The Self-Existing, The One Who is Free from All Needs",
    },
    urdu: {
      meaning: "ہمیشہ خود موجود رہنے والا",
    },
    metaTitle:
      "Al Qayyoom Meaning: The Self-Existing, The One Who is Free from All Needs (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْوَاجِدُ",
    },
    english: {
      name: "AL-WAAJID",
      meaning: "The Perceiver, The Finder, The Unfailing",
    },
    urdu: {
      meaning: "پانے والا ،حاصل کرنے والا",
    },
    metaTitle:
      "Al Waajid Meaning: The Perceiver, The Finder, The Unfailing (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْمَاجِدُ",
    },
    english: {
      name: "AL-MAAJID",
      meaning: "The Glorious",
    },
    urdu: {
      meaning: "عزت والا",
    },
    metaTitle: "Al Majid Meaning: The Glorious (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْوَاحِدُ",
    },
    english: {
      name: "AL-WAAHID",
      meaning: " The One, the All Inclusive, The Indivisible",
    },
    urdu: {
      meaning: "اکیلا",
    },
    metaTitle:
      "Al Wahid Meaning:  The One, the All Inclusive, The Indivisible (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْأَحَدُ",
    },
    english: {
      name: "AL-AHAD",
      meaning: "The Unique One",
    },
    urdu: {
      meaning: "منفرد اکیلا",
    },
    metaTitle: "Al Ahad Meaning: The Unique One (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْصَّمَدُ",
    },
    english: {
      name: "AS-SAMAD",
      meaning:
        "The Self Sufficient, The Impregnable, The Eternally Besought of All, The Everlasting",
    },
    urdu: {
      meaning: "بے نیاز، مضبوط",
    },
    metaTitle:
      "As Samad Meaning: The Self Sufficient, The Impregnable, The Eternally Besought of All, The Everlasting (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْقَادِرُ",
    },
    english: {
      name: "AL-QAADER",
      meaning: "The Able, The All Capable, The Omnipotent",
    },
    urdu: {
      meaning: "قدرت والا",
    },
    metaTitle:
      "Al Qaader Meaning: The Able, The All Capable, The Omnipotent (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْمُقْتَدِرُ",
    },
    english: {
      name: "AL-MUQTADIR",
      meaning:
        "The Powerful, The Dominant, The One with the perfect Power that nothing is withheld from Him",
    },
    urdu: {
      meaning: "اقتدار والا، قادر مطلق",
    },
    metaTitle:
      "Al Muqtadir Meaning: The Powerful, The Dominant, The One with the perfect Power that nothing is withheld from Him (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْمُقَدِّمُ",
    },
    english: {
      name: "AL-MUQADDIM",
      meaning: "The Expediter, He who brings forward",
    },
    urdu: {
      meaning: "آگے کرنے والا",
    },
    metaTitle:
      "Al Muqaddim Meaning: The Expediter, He who brings forward (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْمُؤَخِّرُ",
    },
    english: {
      name: "AL-MU'AKHKHIR",
      meaning: "The Delayer, He who puts far away",
    },
    urdu: {
      meaning: "پیچھے کرے والا",
    },
    metaTitle:
      "Al Mu'akhkhir Meaning: The Delayer, He who puts far away (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلأوَّلُ",
    },
    english: {
      name: "AL-AWWAL",
      meaning: "The First",
    },
    urdu: {
      meaning: "سب سے پہلے",
    },
    metaTitle: "Al Awwal Meaning: The First (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلآخِرُ",
    },
    english: {
      name: "AL-AAKHIR",
      meaning: "The Last",
    },
    urdu: {
      meaning: "سب سے آخر",
    },
    metaTitle: "Al Aakhir Meaning: The Last (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلظَّاهِرُ",
    },
    english: {
      name: "AZ-DHAAHIR",
      meaning: "The Manifest, The Evident, The Outer",
    },
    urdu: {
      meaning: "ظاہر",
    },
    metaTitle:
      "Az Dhaahir Meaning: The Manifest, The Evident, The Outer (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْبَاطِنُ",
    },
    english: {
      name: "AL-BAATIN",
      meaning: "The Hidden, The Unmanifest, The Inner",
    },
    urdu: {
      meaning: "چھپا ہوا، باطن کو جاننے والا",
    },
    metaTitle:
      "AL-BAATIN Meaning: The Hidden, The Unmanifest, The Inner (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْوَالِي",
    },
    english: {
      name: "AL-WAALI",
      meaning: "The Protecting Friend",
    },
    urdu: {
      meaning: "حفاظت کرنے والا دوست",
    },
    metaTitle: "Al Waali Meaning: The Protecting Friend (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْمُتَعَالِي",
    },
    english: {
      name: "AL-MUTA'ALI",
      meaning: "The Self Exalted",
    },
    urdu: {
      meaning: "بلند صفتوں والا",
    },
    metaTitle: "Al Muta'ali Meaning: The Self Exalted (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْبَرُّ",
    },
    english: {
      name: "AL-BARR",
      meaning: "The Doer of Good",
    },
    urdu: {
      meaning: "احسان کرنے والا",
    },
    metaTitle: "Al Barr Meaning: The Doer of Good (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْتَّوَّابُ",
    },
    english: {
      name: "AT-TAWWAB",
      meaning: "The Ever-Acceptor of Repentance",
    },
    urdu: {
      meaning: "توبہ قبول کرنے والا",
    },
    metaTitle:
      "AT-TAWWAB Meaning: The Ever-Acceptor of Repentance (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْمُنْتَقِمُ",
    },
    english: {
      name: "AL-MUNTAQIM",
      meaning: "The Avenger",
    },
    urdu: {
      meaning: "بدلہ لینے والا",
    },
    metaTitle: "Al Muntaqim Meaning: The Avenger (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْعَفُوُّ",
    },
    english: {
      name: "AL-‘AFUWW",
      meaning: "The Forgiver",
    },
    urdu: {
      meaning: "معاف کرنے والا",
    },
    metaTitle: "Al ‘Afuww Meaning: The Forgiver (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْرَّؤُفُ",
    },
    english: {
      name: "AR-RA'OOF",
      meaning: "The Most Kind",
    },
    urdu: {
      meaning: "رحم کرنے والا، شفقت کرنے ولا",
    },
    metaTitle: "Ar Ra'oof Meaning: The Most Kind (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "مَالِكُ ٱلْمُلْكُ",
    },
    english: {
      name: "MAALIK-UL-MULK",
      meaning: "Master of the Kingdom, Owner of all Dominion",
    },
    urdu: {
      meaning: "بادشاہی کا مالک",
    },
    metaTitle:
      "Maalik ul mulk Meaning: Master of the Kingdom, Owner of all Dominion (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ذُو ٱلْجَلَالِ وَٱلْإِكْرَامُ",
    },
    english: {
      name: "DHUL-JALAALI WAL-IKRAAM",
      meaning: " The Lord of Majesty and Bounty",
    },
    urdu: {
      meaning: "جلال اور انعام و اکرام والا",
    },
    metaTitle:
      "Dhul jalaali wal ikram Meaning:  The Lord of Majesty and Bounty (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْمُقْسِطُ",
    },
    english: {
      name: "AL-MUQSIT",
      meaning: "The Equitable, the Requiter",
    },
    urdu: {
      meaning: "انصاف کرنے والا",
    },
    metaTitle:
      "Al Muqsit Meaning: The Equitable, the Requiter (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْجَامِعُ",
    },
    english: {
      name: "AL-JAAMI'",
      meaning: "The Gatherer, the Uniter",
    },
    urdu: {
      meaning: "اکھٹا کرنے والا",
    },
    metaTitle:
      "Al Jaami' Meaning: The Gatherer, the Uniter (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْغَنيُّ",
    },
    english: {
      name: "AL-GHANIYY",
      meaning: "The Self-Sufficient, The Wealthy",
    },
    urdu: {
      meaning: "بے پرواہ، غنی",
    },
    metaTitle:
      "Al Ghaniyy Meaning: The Self-Sufficient, The Wealthy (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْمُغْنِيُّ",
    },
    english: {
      name: "AL-MUGHNI",
      meaning: "The Enricher",
    },
    urdu: {
      meaning: "بے نیاز",
    },
    metaTitle: "Al Mughni Meaning: The Enricher (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْمَانِعُ",
    },
    english: {
      name: "AL-MANI'",
      meaning: "The Withholder",
    },
    urdu: {
      meaning: "روکنے والا، باز رکھنے والا",
    },
    metaTitle: "Al Mani' Meaning: The Withholder (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْضَّارُ",
    },
    english: {
      name: "AD-DHARR",
      meaning: "The Creator of The Harmful",
    },
    urdu: {
      meaning: "نقصان پہنچانے والا",
    },
    metaTitle:
      "Ad Dharr Meaning: The Creator of The Harmful (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْنَّافِعُ",
    },
    english: {
      name: "AN-NAFI'",
      meaning: "The Creator of Good",
    },
    urdu: {
      meaning: "نفع پہنچانے والا",
    },
    metaTitle: "An Nafi' Meaning: The Creator of Good (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْنُّورُ",
    },
    english: {
      name: "AN-NUR",
      meaning: "The Light, The Illuminator",
    },
    urdu: {
      meaning: "روشن، روشنی دینے والا",
    },
    metaTitle: "An Nur Meaning: The Light, The Illuminator (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْهَادِي",
    },
    english: {
      name: "AL-HAADI",
      meaning: "The Guide",
    },
    urdu: {
      meaning: "ہدایت دینے والا، راستہ دکھانے والا",
    },
    metaTitle: "Al Haadi Meaning: The Guide (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْبَدِيعُ",
    },
    english: {
      name: "AL-BADEE'",
      meaning: "The Incomparable Originator",
    },
    urdu: {
      meaning: "نادر پیدا کرنے والا",
    },
    metaTitle:
      "Al Badee' Meaning: The Incomparable Originator (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْبَاقِي",
    },
    english: {
      name: "AL-BAAQI",
      meaning: "The Everlasting",
    },
    urdu: {
      meaning: "ہمیشہ رہنے والا",
    },
    metaTitle: "Al Baaqi Meaning: The Everlasting (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْوَارِثُ",
    },
    english: {
      name: "AL-WAARITH",
      meaning: "The Inheritor, The Heir",
    },
    urdu: {
      meaning: "سب کا وارث",
    },
    metaTitle:
      "Al Waarith Meaning: The Inheritor, The Heir (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلرَّشِيدُ",
    },
    english: {
      name: "AR-RASHEED",
      meaning: "The Guide to the Right Path",
    },
    urdu: {
      meaning: "ہدایت دینے والا، رہنمائی کرنے والا",
    },
    metaTitle:
      "Ar Rasheed Meaning: The Guide to the Right Path (99 Names of Allah)",
    metaDescription: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلصَّبُورُ",
    },
    english: {
      name: "AS-SABOOR",
      meaning: "The Patient, The Timeless",
    },
    urdu: {
      meaning: "صبر کرنے والا",
    },
    metaTitle:
      "As Saboor Meaning: The Patient, The Timeless (99 Names of Allah)",
    metaDescription: "",
  },
];
