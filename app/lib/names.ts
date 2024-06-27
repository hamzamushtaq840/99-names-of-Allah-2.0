const names = [
  {
    id: 1,
    image: "/names-images/one.jpg",
    imageBrightness: "40%",
    arabic: {
      name: "الرَّحْمَنُ",
      meaning: "",
    },
    english: {
      name: "AR-RAHMAAN",
      meaning: "The Entirely Merciful",
    },
    urdu: {
      name: "الرحمن",
      meaning: "انتہائی مہربان",
    },
  },
  {
    id: 2,
    image: "/names-images/two.jpg",
    imageBrightness: "45%",
    arabic: {
      name: "ٱلْرَّحِيْمُ",
      meaning: "",
    },
    english: {
      name: "AR-RAHEEM",
      meaning: "The Bestower of Mercy",
    },
    urdu: {
      name: "",
      meaning: "انتہائی رحم کرنے والا",
    },
  },
  {
    id: 3,
    image: "/names-images/three.avif",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْمَلِكُ",
      meaning: "",
    },
    english: {
      name: "AL-MALIK",
      meaning: "The King and Owner of Dominion",
    },
    urdu: {
      name: "",
      meaning: "مالک، بادشاہ",
    },
  },
  {
    id: 4,
    image: "/names-images/four.jpg",
    imageBrightness: "45%",
    arabic: {
      name: "ٱلْقُدُّوسُ",
      meaning: "",
    },
    english: {
      name: "AL-QUDDUS",
      meaning: "The Absolutely Purest",
    },
    urdu: {
      name: "",
      meaning: "انتہائی پاک ذات",
    },
  },
  {
    id: 5,
    image: "/names-images/five.jpg",
    imageBrightness: "40%",
    arabic: {
      name: "ٱلْسَّلَامُ",
      meaning: "",
    },
    english: {
      name: "AS-SALAM",
      meaning: "The Perfection and Giver of Peace",
    },
    urdu: {
      name: "",
      meaning: "سلامتی والا",
    },
  },
  {
    id: 6,
    image:
      "https://i.pinimg.com/750x/91/b2/d5/91b2d572151f1d6e49720b9bad0940f9.jpg",
    imageBrightness: "45%",
    arabic: {
      name: "ٱلْمُؤْمِنُ",
      meaning: "",
    },
    english: {
      name: "AL-MU’MIN",
      meaning: "The One Who gives Emaan and Security",
    },
    urdu: {
      name: "",
      meaning: "ایمان عطاء کرنے والا، امن دینے والا",
    },
  },
];

const singleNamesData = [
  {
    arabic: {
      name: "الرَّحْمَنُ",
      meaning: "",
    },
    english: {
      name: "AR-RAHMAAN",
      meaning: "The Entirely Merciful",
    },
    intro: [
      `Allah calls Himself Ar-Rahman. Rahman is derived from the root "ر-ح-م" (r-h-m), 
            which is related to mercy and compassion. In Arabic, Rahman takes the form of "faʿlan," 
            which is an "ism sifa" (a descriptive noun) indicating a state of being. For Allah, this 
            term signifies mercy to the utmost degree.`,
      `'Ar-Rahman' never appears in the Quran followed by 'with them' or 'to them' because it 
            means that “mercy” is Allah’s inherent attribute. This mercy is shown through His 
            boundless compassion and kindness: the lush green plants 🍃 and trees 🌳, the simple joys of 
            home life, the breath of life in our lungs, and the rain 🌧️ that nourishes the earth. 
            Ar-Rahman reflects Allah’s steady and all-encompassing mercy to all creation.`,
      `The name Ar-Rahman (The All-Merciful) is mentioned in the Quran exactly half as many times 
            (57 times) as the name Allah (114 times). All creations are different and completely 
            under His authority. The mountains, the heavens, and the earth all bow in awe and worship 
            of Ar-Rahman. Allah’s mercy to disbelievers is only for this world. In the afterlife, when they ask 
            Allah to remove them from Hellfire and seek His help, they will admit their wrongdoing, 
            showing that His mercy was truly not with them in the end.`,
      // ` Allah’s mercy to disbelievers is only for this world. In the afterlife, when they ask
      //       Allah to remove them from Hellfire and seek His help, they will admit their wrongdoing,
      //       showing that His mercy was truly not with them in the end.`,
    ],
    quranMentions: [
      {
        contentType: "text",
        content: `From the root ra-ha-mim (ر ح م), which has the following classical 
                  Arabic connotations: to have tenderness, kindness to love to have mercy,
                  to have pity to show favor and goodness to have all that is required for
                  beneficence.This Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is mentioned in the Quran for a total
                  114 times. Twice as much as the Ar-Rahman.From the root ra-ha-mim (ر ح م),
                  which has the following classical Arabic connotations: to have tenderness,
                  kindness to love to have mercy, to have pity to show favor and goodness to
                  have all that is required for beneficence.This Allah سُبْحَٰنَهُۥ وَتَعَٰلَىٰ is mentioned
                  in the Quran for a total 114 times. Twice as much as the Ar-Rahman.`,
      },
      {
        contentType: "ayah",
        content: `“That is the Knower of the seen and unseen—the Almighty, Most Merciful”`,
        ayahNo: "32:6",
        link: "https://quran.com/32/6",
      },
      {
        contentType: "ayah",
        content: `“Say, ˹O Prophet,˺ “Call upon Allah or call upon the Most Compassionate—whichever
                    you call, He has the Most Beautiful Names.” Do not recite your prayers too loudly
                    or silently, but seek a way between.”`,
        ayahNo: "17:10",
        link: "https://quran.com/17/110",
      },
      {
        contentType: "text",
        content: `Almighty Himself described the name Al-Rahman as being commensurate with the name Allah`,
      },
      {
        contentType: "ayah",
        content: `“She appealed, “I truly seek refuge in the Most Compassionate from you! ˹So leave me alone˺ if you are God-fearing.””`,
        ayahNo: "19:18",
        link: "https://quran.com/19/18",
      },
      {
        contentType: "text",
        content: `Mary asks for protection from Al-Rahman against one whom she perceives as an unknown man entering her private chambers, but who in fact is the Archangel Jibreel (Gabriel). She is asking for protection from the Most Powerful, the Almighty, not mercy from "the Beneficent"! (see editor's note 3). She is asking for protection from Al-Rahman against the "intruder" in order also to frighten the "intruder", for which situation the appellation "the Merciful" or "The Most Gracious" would hardly instill fear, and hence be unsuitable. Obviously, Maryam knew the meaning of the name Al-Rahman and we are shown here by Al-Rahman himself (who, according to 55:2, teaches us the Quran) that she used His name appropriately.`,
      },
      {
        contentType: "ayah",
        content: `“O  dear father! I truly fear that you will be touched by a torment from the Most Compassionate, and become Satan's companion ˹in Hell˺.””`,
        ayahNo: "19:45",
        link: "https://quran.com/19/45",
      },
      {
        contentType: "text",
        content: `The choice of which name for God to use by Abraham is very significant. Abraham wanted to warn his father and scare him of a great punishment from God. Abraham chose the name Al-Rahman knowing that great punishment is more appropriate to scare his father when associated to an Almighty rather a Most Merciful. This again sheds great light on the true meaning of the name Al-Rahman. It is within the bounds of the Almighty, His authority and power to afflict punishment, but it is not within the definition of "mercy" or "beneficence" or "graciousness" to afflict punishment or cause torture.`,
      },
    ],
    hadithMentions: [
      {
        contentType: "hadees",
        narrated: "Abu Huraira",
        content: `The Prophet (ﷺ) said, "The word 'Ar-Rahm (womb) derives its
                    name from Ar-Rahman (i.e., one of the names of Allah) and Allah
                    said: 'I will keep good relation with the one who will keep good
                    relation with you, (womb i.e. Kith and Kin) and sever the relation
                     with him who will sever the relation with you, (womb, i.e. Kith and Kin).`,
        hadeesNo: "Bukhari:5988",
        link: "https://sunnah.com/bukhari:5988",
      },
    ],
    metaTitle: "Ar Rahmaan Meaning: The Entirely Merciful (99 Names of Allah)",
    metaDescription: `Explore Ar Rahmaan (الرَّحْمَنُ)  one of the 99 names of Allah,
                      representing him with the attribute The Most Merciful. Discover
                      the divine attributes of Ar Rahmaan and the significance of
                      the 99 names of Allah on our website.`,
  },
];

export { names, singleNamesData };
