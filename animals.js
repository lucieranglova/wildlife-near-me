const ANIMALS = [
  {
    id: "huntsman",
    name: "Huntsman Spider",
    emoji: "🕷️",
    danger: 3,
    dangerLabel: "mírně nebezpečný",
    description: "Největší pavouk Austrálie – ale jen strašidelně vypadá.",
    regions: {
      QLD: 92, NSW: 88, VIC: 72, SA: 65, WA: 78, NT: 85, TAS: 30, ACT: 60
    },
    urban: 85,
    rural: 75,
    seasons: { summer: 90, autumn: 70, winter: 40, spring: 80 },
    mating: "Říjen–Leden",
    active: "Celý rok, vrchol v létě",
    warning: "Kousnutí způsobí místní bolest a otok – není smrtelné, ale nepříjemné. Rádi se schovávají za slunečními clonami v autě.",
    funFact: "Huntsman spider dokáže utéct rychlostí 1 metr za sekundu. A ano, umí padat ze stropu přímo na tebe.",
    icon: "spider"
  },
  {
    id: "funnel_web",
    name: "Funnel-web Spider",
    emoji: "🕸️",
    danger: 5,
    dangerLabel: "VELMI NEBEZPEČNÝ",
    description: "Jeden z nejjedovatějších pavouků světa. Sydney funnel-web je legenda.",
    regions: {
      QLD: 60, NSW: 95, VIC: 20, SA: 5, WA: 2, NT: 10, TAS: 5, ACT: 70
    },
    urban: 60,
    rural: 70,
    seasons: { summer: 95, autumn: 60, winter: 20, spring: 70 },
    mating: "Leden–Březen (samci hledají samice)",
    active: "Léto – po dešti",
    warning: "OKAMŽITĚ zavolejte záchranku při podezření na kousnutí. Použijte tlakový obvaz. Od roku 1981 (antidotum) žádné oběti – ale jednat musíte RYCHLE.",
    funFact: "Samec je 6× jedovatější než samice – rarita v živočišné říši. Jed je pro lidi toxičtější než pro jiné primáty.",
    icon: "spider"
  },
  {
    id: "saltwater_croc",
    name: "Mořský krokodýl",
    emoji: "🐊",
    danger: 5,
    dangerLabel: "SMRTELNĚ NEBEZPEČNÝ",
    description: "Největší plaz světa. V severní Austrálii je doma.",
    regions: {
      QLD: 75, NSW: 5, VIC: 0, SA: 0, WA: 60, NT: 98, TAS: 0, ACT: 0
    },
    urban: 15,
    rural: 85,
    seasons: { summer: 95, autumn: 70, winter: 50, spring: 80 },
    mating: "Září–Říjen",
    active: "Celý rok – ale agresivnější za tepla",
    warning: "Nikdy neplavte v označených oblastech! Krokodýl číhá i u pobřeží moře. 'Croc Country' značení berte VÁŽNĚ.",
    funFact: "Saltwater croc může žít přes 70 let a váží až 1 000 kg. Má nejsilnější skus ze všech živých zvířat.",
    icon: "croc"
  },
  {
    id: "freshwater_croc",
    name: "Krokodýl sladkovodní",
    emoji: "🐊",
    danger: 2,
    dangerLabel: "nízké riziko",
    description: "Menší bratranec – útočí jen při vyrušení.",
    regions: {
      QLD: 80, NSW: 0, VIC: 0, SA: 0, WA: 70, NT: 95, TAS: 0, ACT: 0
    },
    urban: 10,
    rural: 80,
    seasons: { summer: 85, autumn: 65, winter: 45, spring: 75 },
    mating: "Srpen–Září",
    active: "Celý rok",
    warning: "Nekousne, pokud ho nevyrušíte. Ale i tak – radši dodržujte vzdálenost.",
    funFact: "Freshwater crocs jsou výborní plavci a dokáží přežít suché období zahrabaní v bahně.",
    icon: "croc"
  },
  {
    id: "kangaroo",
    name: "Klokan",
    emoji: "🦘",
    danger: 1,
    dangerLabel: "obecně bezpečný",
    description: "Ikonický symbol Austrálie. Potkáš ho skoro všude.",
    regions: {
      QLD: 90, NSW: 95, VIC: 88, SA: 85, WA: 80, NT: 75, TAS: 60, ACT: 95
    },
    urban: 60,
    rural: 98,
    seasons: { summer: 75, autumn: 85, winter: 90, spring: 88 },
    mating: "Celý rok",
    active: "Soumrak a svítání",
    warning: "Pozor při jízdě autem za soumraku! Klokan na dálnici = velmi reálné nebezpečí. Nenahánějte samce – dokáže kopnout s silou 500 kg.",
    funFact: "Klokan neumí chodit pozpátku. Proto je na australském státním znaku – symbolizuje postup vpřed.",
    icon: "kangaroo"
  },
  {
    id: "camel",
    name: "Velbloud",
    emoji: "🐪",
    danger: 1,
    dangerLabel: "obecně bezpečný",
    description: "Ano, v Austrálii žije přes milion divokých velbloudů. Vyvezli je Britové.",
    regions: {
      QLD: 40, NSW: 20, VIC: 5, SA: 75, WA: 80, NT: 90, TAS: 0, ACT: 0
    },
    urban: 5,
    rural: 70,
    seasons: { summer: 60, autumn: 70, winter: 75, spring: 70 },
    mating: "Červen–Září",
    active: "Celý rok",
    warning: "V páření jsou samci agresivní. Velbloud může kopnout do všech stran – udržujte odstup.",
    funFact: "Austrálie exportuje velbloudy do Arabského poloostrova – jako jedinou zemi na světě má populaci „čistých" divokých velbloudů.",
    icon: "camel"
  },
  {
    id: "koala",
    name: "Koala",
    emoji: "🐨",
    danger: 1,
    dangerLabel: "obecně bezpečný",
    description: "Spí 18–22 hodin denně. Jí jen eukalypty.",
    regions: {
      QLD: 75, NSW: 80, VIC: 70, SA: 50, WA: 10, NT: 5, TAS: 0, ACT: 60
    },
    urban: 45,
    rural: 80,
    seasons: { summer: 60, autumn: 75, winter: 70, spring: 85 },
    mating: "Říjen–Únor",
    active: "Noc (vzácně vidět přes den)",
    warning: "Nekusujte koalu! Má ostré drápy a kouše silněji než čekáš. Je to divoké zvíře, ne plyšák.",
    funFact: "Koala má otisky prstů prakticky nerozeznatelné od lidských – dokonce i pro forenzní vědce.",
    icon: "koala"
  },
  {
    id: "cockatoo",
    name: "Kakadu",
    emoji: "🦜",
    danger: 1,
    dangerLabel: "obecně bezpečný",
    description: "Hlučný, inteligentní, všudypřítomný. Sulphur-crested cockatoo je australská klasika.",
    regions: {
      QLD: 90, NSW: 92, VIC: 85, SA: 70, WA: 75, NT: 80, TAS: 65, ACT: 88
    },
    urban: 90,
    rural: 85,
    seasons: { summer: 80, autumn: 85, winter: 75, spring: 90 },
    mating: "Srpen–Leden",
    active: "Den",
    warning: "Kakadu v hejnu dokáže za pár hodin zničit dřevěnou terasu nebo střechu. Silný zobák je vážný nástroj.",
    funFact: "Kakadu se dožívají až 80 let. Jsou tak inteligentní, že se nudí – a pak ničí věci z recese.",
    icon: "bird"
  },
  {
    id: "brown_snake",
    name: "Eastern Brown Snake",
    emoji: "🐍",
    danger: 5,
    dangerLabel: "SMRTELNĚ NEBEZPEČNÝ",
    description: "Druhý nejjedovatější had světa. Zodpovídá za nejvíce hadích smrtí v Austrálii.",
    regions: {
      QLD: 90, NSW: 95, VIC: 80, SA: 75, WA: 40, NT: 60, TAS: 10, ACT: 85
    },
    urban: 55,
    rural: 92,
    seasons: { summer: 95, autumn: 65, winter: 15, spring: 88 },
    mating: "Září–Říjen",
    active: "Jaro–Léto, přes den",
    warning: "Okamžitě zavolejte záchranku. Tlakový obvaz na celou končetinu. NEHÝBEJTE SE – pohyb urychluje vstřebávání jedu. Nepokoušejte se had chytit.",
    funFact: "Eastern brown snake je velmi nervózní a útočí opakovaně – i do 12krát za jeden incident. Přesto způsobuje smrt jen v méně než 10 % případů bez léčby.",
    icon: "snake"
  },
  {
    id: "shark",
    name: "Žralok bílý",
    emoji: "🦈",
    danger: 4,
    dangerLabel: "nebezpečný",
    description: "Great white shark – král australských vod.",
    regions: {
      QLD: 60, NSW: 75, VIC: 65, SA: 80, WA: 85, NT: 30, TAS: 70, ACT: 0
    },
    urban: 40,
    rural: 60,
    seasons: { summer: 85, autumn: 70, winter: 55, spring: 75 },
    mating: "Říjen–Leden",
    active: "Celý rok, ráno a podvečer",
    warning: "Plav v označených plážích s záchranáři. Vyvaruj se plavání za úsvitu, soumraku a v noci. Krvácející rány do vody = špatný nápad.",
    funFact: "Australané jsou globálně jednou z nejpostiženějších zemí útoky žraloků – ale stále je větší pravděpodobnost, že tě zabije klokan (autonehodou).",
    icon: "shark"
  },
  {
    id: "wombat",
    name: "Wombat",
    emoji: "🦡",
    danger: 1,
    dangerLabel: "obecně bezpečný",
    description: "Zavalitý, roztomilý, produkuje krychlový trus. Vážně.",
    regions: {
      QLD: 40, NSW: 75, VIC: 80, SA: 60, WA: 20, NT: 5, TAS: 85, ACT: 70
    },
    urban: 30,
    rural: 85,
    seasons: { summer: 60, autumn: 75, winter: 80, spring: 70 },
    mating: "Celý rok",
    active: "Noc",
    warning: "Wombat je silnější než vypadá – 35 kg svalu. Pokud ho naženete do nory, může tě rozdrtit o strop. Vážně se to stalo.",
    funFact: "Wombat je jediné zvíře na světě s krychlickým trusem. Vědci teprve nedávno zjistili jak – pomocí měkkého střeva s proměnnou tuhostí.",
    icon: "wombat"
  },
  {
    id: "dingo",
    name: "Dingo",
    emoji: "🐕",
    danger: 2,
    dangerLabel: "nízké riziko",
    description: "Australský divoký pes. Ikonická věta: 'A dingo ate my baby!'",
    regions: {
      QLD: 85, NSW: 75, VIC: 50, SA: 80, WA: 85, NT: 95, TAS: 5, ACT: 40
    },
    urban: 20,
    rural: 88,
    seasons: { summer: 75, autumn: 80, winter: 70, spring: 85 },
    mating: "Duben–Červen",
    active: "Soumrak a úsvit",
    warning: "Nikdy nekrmte dinga! Krmení způsobuje ztrátu strachu z lidí. Na Fraser Island jsou dingové agresivní – ohlašte každý kontakt.",
    funFact: "Dingo přišel do Austrálie asi před 4 000 lety s asijskými obchodníky. Pravděpodobně stojí za vyhynutím tasmánského tygra na pevnině.",
    icon: "dingo"
  },
  {
    id: "wallaby",
    name: "Wallaby",
    emoji: "🦘",
    danger: 1,
    dangerLabel: "obecně bezpečný",
    description: "Malý bratranec klokana. Roztomilejší, méně nebezpečný.",
    regions: {
      QLD: 85, NSW: 88, VIC: 82, SA: 70, WA: 75, NT: 65, TAS: 90, ACT: 80
    },
    urban: 50,
    rural: 90,
    seasons: { summer: 70, autumn: 80, winter: 85, spring: 88 },
    mating: "Celý rok",
    active: "Soumrak a svítání",
    warning: "Při jízdě autem za soumraku stejné riziko jako klokan – wallaby je menší a hůř viditelný.",
    funFact: "Wallaby má schopnost 'odložit' vývoj embrya (embryonic diapause) – mládě čeká v zárodku, dokud je pouštěno váček přijatelný.",
    icon: "kangaroo"
  },
  {
    id: "tasmanian_devil",
    name: "Tasmánský čert",
    emoji: "😈",
    danger: 2,
    dangerLabel: "nízké riziko",
    description: "Nejhlučnější a nejagresivnější vačnatec. Jí všechno včetně kostí.",
    regions: {
      QLD: 0, NSW: 0, VIC: 0, SA: 0, WA: 0, NT: 0, TAS: 95, ACT: 0
    },
    urban: 20,
    rural: 90,
    seasons: { summer: 65, autumn: 80, winter: 70, spring: 85 },
    mating: "Únor–Červen",
    active: "Noc",
    warning: "Neohánějte se poblíž tasmánského čerta, zejména u mrtvého zvířete – to je jeho teritorium a bude bránit jídlo zuby nehty.",
    funFact: "Tasmánský čert má relativně nejsilnější skus ze všech savců. Trpí nakažlivým nádorovým onemocněním (DFTD) – přenáší se kousnutím.",
    icon: "devil"
  },
  {
    id: "emu",
    name: "Emu",
    emoji: "🦤",
    danger: 2,
    dangerLabel: "nízké riziko",
    description: "Druhý největší pták světa. Neletí, ale běhá 50 km/h.",
    regions: {
      QLD: 85, NSW: 88, VIC: 75, SA: 82, WA: 90, NT: 85, TAS: 10, ACT: 65
    },
    urban: 25,
    rural: 92,
    seasons: { summer: 65, autumn: 75, winter: 85, spring: 80 },
    mating: "Duben–Červen",
    active: "Den",
    warning: "Emu může kopnout dopředu s velkou silou. Nikdy ho nenaháněj – v roce 1932 Austrálie doslova prohrála válku s emu.",
    funFact: "Emu war 1932 – australská armáda s kulomety vs. 20 000 emu. Emu vyhráli. Major Meredith přirovnal emu k zulům – každý potřeboval pět kulek.",
    icon: "bird"
  },
  {
    id: "magpie",
    name: "Magpie",
    emoji: "🐦",
    danger: 2,
    dangerLabel: "sezónní riziko",
    description: "Austrálii nejobávanější pták za hnízdění. Útočí na kolemjdoucí.",
    regions: {
      QLD: 90, NSW: 95, VIC: 92, SA: 85, WA: 80, NT: 60, TAS: 75, ACT: 95
    },
    urban: 95,
    rural: 85,
    seasons: { summer: 40, autumn: 30, winter: 20, spring: 98 },
    mating: "Srpen–Říjen (útočí při hnízdění!)",
    active: "Den",
    warning: "Na jaře: nosit sluneční brýle nebo přilbu na kole! Magpie cílí na oči. Existuje dokonce webová mapa útoků: magpiealert.com",
    funFact: "Magpie si pamatuje tváře lidí po léta. Pokud jsi byl hodný, přilétá a zpívá pro tebe. Pokud ne... víš.",
    icon: "bird"
  },
  {
    id: "box_jellyfish",
    name: "Box Jellyfish",
    emoji: "🪼",
    danger: 5,
    dangerLabel: "SMRTELNĚ NEBEZPEČNÝ",
    description: "Nejjedovatější mořský tvor světa. V severní Austrálii v létě.",
    regions: {
      QLD: 90, NSW: 20, VIC: 5, SA: 5, WA: 60, NT: 95, TAS: 0, ACT: 0
    },
    urban: 50,
    rural: 50,
    seasons: { summer: 98, autumn: 50, winter: 5, spring: 60 },
    mating: "Záříříjen",
    active: "Léto (Říjen–Duben)",
    warning: "Na severu Austrálie NIKDY neplavejte bez stinger suit v sezóně! Ocet neutralizuje chapadla – mít ho na pláži. Smrt může nastat do 2 minut.",
    funFact: "Box jellyfish má 24 očí (ve 4 skupinách po 6) – přestože nemá mozek. Vidí svět kolem sebe 360°.",
    icon: "jellyfish"
  }
];
