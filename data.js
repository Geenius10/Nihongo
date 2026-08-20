window.NIHONGO_DATA = (() => {
  const HIRAGANA = [
  [
    "あ",
    "a"
  ],
  [
    "い",
    "i"
  ],
  [
    "う",
    "u"
  ],
  [
    "え",
    "e"
  ],
  [
    "お",
    "o"
  ],
  [
    "か",
    "ka"
  ],
  [
    "き",
    "ki"
  ],
  [
    "く",
    "ku"
  ],
  [
    "け",
    "ke"
  ],
  [
    "こ",
    "ko"
  ],
  [
    "さ",
    "sa"
  ],
  [
    "し",
    "shi"
  ],
  [
    "す",
    "su"
  ],
  [
    "せ",
    "se"
  ],
  [
    "そ",
    "so"
  ],
  [
    "た",
    "ta"
  ],
  [
    "ち",
    "chi"
  ],
  [
    "つ",
    "tsu"
  ],
  [
    "て",
    "te"
  ],
  [
    "と",
    "to"
  ],
  [
    "な",
    "na"
  ],
  [
    "に",
    "ni"
  ],
  [
    "ぬ",
    "nu"
  ],
  [
    "ね",
    "ne"
  ],
  [
    "の",
    "no"
  ],
  [
    "は",
    "ha"
  ],
  [
    "ひ",
    "hi"
  ],
  [
    "ふ",
    "fu"
  ],
  [
    "へ",
    "he"
  ],
  [
    "ほ",
    "ho"
  ],
  [
    "ま",
    "ma"
  ],
  [
    "み",
    "mi"
  ],
  [
    "む",
    "mu"
  ],
  [
    "め",
    "me"
  ],
  [
    "も",
    "mo"
  ],
  [
    "や",
    "ya"
  ],
  [
    "ゆ",
    "yu"
  ],
  [
    "よ",
    "yo"
  ],
  [
    "ら",
    "ra"
  ],
  [
    "り",
    "ri"
  ],
  [
    "る",
    "ru"
  ],
  [
    "れ",
    "re"
  ],
  [
    "ろ",
    "ro"
  ],
  [
    "わ",
    "wa"
  ],
  [
    "を",
    "wo"
  ],
  [
    "ん",
    "n"
  ],
  [
    "が",
    "ga"
  ],
  [
    "ぎ",
    "gi"
  ],
  [
    "ぐ",
    "gu"
  ],
  [
    "げ",
    "ge"
  ],
  [
    "ご",
    "go"
  ],
  [
    "ざ",
    "za"
  ],
  [
    "じ",
    "ji"
  ],
  [
    "ず",
    "zu"
  ],
  [
    "ぜ",
    "ze"
  ],
  [
    "ぞ",
    "zo"
  ],
  [
    "だ",
    "da"
  ],
  [
    "ぢ",
    "ji"
  ],
  [
    "づ",
    "zu"
  ],
  [
    "で",
    "de"
  ],
  [
    "ど",
    "do"
  ],
  [
    "ば",
    "ba"
  ],
  [
    "び",
    "bi"
  ],
  [
    "ぶ",
    "bu"
  ],
  [
    "べ",
    "be"
  ],
  [
    "ぼ",
    "bo"
  ],
  [
    "ぱ",
    "pa"
  ],
  [
    "ぴ",
    "pi"
  ],
  [
    "ぷ",
    "pu"
  ],
  [
    "ぺ",
    "pe"
  ],
  [
    "ぽ",
    "po"
  ],
  [
    "きゃ",
    "kya"
  ],
  [
    "きゅ",
    "kyu"
  ],
  [
    "きょ",
    "kyo"
  ],
  [
    "しゃ",
    "sha"
  ],
  [
    "しゅ",
    "shu"
  ],
  [
    "しょ",
    "sho"
  ],
  [
    "ちゃ",
    "cha"
  ],
  [
    "ちゅ",
    "chu"
  ],
  [
    "ちょ",
    "cho"
  ],
  [
    "にゃ",
    "nya"
  ],
  [
    "にゅ",
    "nyu"
  ],
  [
    "にょ",
    "nyo"
  ],
  [
    "ひゃ",
    "hya"
  ],
  [
    "ひゅ",
    "hyu"
  ],
  [
    "ひょ",
    "hyo"
  ],
  [
    "みゃ",
    "mya"
  ],
  [
    "みゅ",
    "myu"
  ],
  [
    "みょ",
    "myo"
  ],
  [
    "りゃ",
    "rya"
  ],
  [
    "りゅ",
    "ryu"
  ],
  [
    "りょ",
    "ryo"
  ],
  [
    "ぎゃ",
    "gya"
  ],
  [
    "ぎゅ",
    "gyu"
  ],
  [
    "ぎょ",
    "gyo"
  ],
  [
    "じゃ",
    "ja"
  ],
  [
    "じゅ",
    "ju"
  ],
  [
    "じょ",
    "jo"
  ],
  [
    "びゃ",
    "bya"
  ],
  [
    "びゅ",
    "byu"
  ],
  [
    "びょ",
    "byo"
  ],
  [
    "ぴゃ",
    "pya"
  ],
  [
    "ぴゅ",
    "pyu"
  ],
  [
    "ぴょ",
    "pyo"
  ]
];
  const KATAKANA = HIRAGANA.map(([j,r]) => [
    String(j).replace(/[ぁ-ゖ]/g, ch => String.fromCharCode(ch.charCodeAt(0) + 0x60)),
    r
  ]);
  const VOCAB = [
  [
    "N5",
    "私",
    "わたし · watashi",
    "ich",
    "私は学生です。",
    "Ich bin Student/in."
  ],
  [
    "N5",
    "あなた",
    "anata",
    "du / Sie",
    "あなたは先生ですか。",
    "Sind Sie Lehrer/in?"
  ],
  [
    "N5",
    "人",
    "ひと · hito",
    "Mensch / Person",
    "あの人は先生です。",
    "Diese Person ist Lehrer/in."
  ],
  [
    "N5",
    "日本",
    "にほん · Nihon",
    "Japan",
    "日本へ行きます。",
    "Ich fahre nach Japan."
  ],
  [
    "N5",
    "日本語",
    "にほんご · nihongo",
    "Japanisch",
    "日本語を勉強します。",
    "Ich lerne Japanisch."
  ],
  [
    "N5",
    "先生",
    "せんせい · sensei",
    "Lehrer/in",
    "田中先生です。",
    "Das ist Lehrer/in Tanaka."
  ],
  [
    "N5",
    "学生",
    "がくせい · gakusei",
    "Student/in",
    "学生です。",
    "Ich bin Student/in."
  ],
  [
    "N5",
    "友達",
    "ともだち · tomodachi",
    "Freund/in",
    "友達と話します。",
    "Ich spreche mit einem Freund."
  ],
  [
    "N5",
    "家族",
    "かぞく · kazoku",
    "Familie",
    "家族は四人です。",
    "Meine Familie besteht aus vier Personen."
  ],
  [
    "N5",
    "水",
    "みず · mizu",
    "Wasser",
    "水をください。",
    "Wasser, bitte."
  ],
  [
    "N5",
    "お茶",
    "おちゃ · ocha",
    "Tee",
    "お茶を飲みます。",
    "Ich trinke Tee."
  ],
  [
    "N5",
    "ご飯",
    "ごはん · gohan",
    "Reis / Mahlzeit",
    "ご飯を食べます。",
    "Ich esse."
  ],
  [
    "N5",
    "食べる",
    "たべる · taberu",
    "essen",
    "寿司を食べます。",
    "Ich esse Sushi."
  ],
  [
    "N5",
    "飲む",
    "のむ · nomu",
    "trinken",
    "水を飲みます。",
    "Ich trinke Wasser."
  ],
  [
    "N5",
    "行く",
    "いく · iku",
    "gehen / fahren",
    "学校へ行きます。",
    "Ich gehe zur Schule."
  ],
  [
    "N5",
    "来る",
    "くる · kuru",
    "kommen",
    "明日来ます。",
    "Ich komme morgen."
  ],
  [
    "N5",
    "見る",
    "みる · miru",
    "sehen",
    "映画を見ます。",
    "Ich sehe einen Film."
  ],
  [
    "N5",
    "聞く",
    "きく · kiku",
    "hören / fragen",
    "音楽を聞きます。",
    "Ich höre Musik."
  ],
  [
    "N5",
    "話す",
    "はなす · hanasu",
    "sprechen",
    "日本語を話します。",
    "Ich spreche Japanisch."
  ],
  [
    "N5",
    "読む",
    "よむ · yomu",
    "lesen",
    "本を読みます。",
    "Ich lese ein Buch."
  ],
  [
    "N5",
    "書く",
    "かく · kaku",
    "schreiben",
    "名前を書きます。",
    "Ich schreibe den Namen."
  ],
  [
    "N5",
    "買う",
    "かう · kau",
    "kaufen",
    "パンを買います。",
    "Ich kaufe Brot."
  ],
  [
    "N5",
    "大きい",
    "おおきい · ōkii",
    "groß",
    "大きい家です。",
    "Es ist ein großes Haus."
  ],
  [
    "N5",
    "小さい",
    "ちいさい · chiisai",
    "klein",
    "小さい犬です。",
    "Es ist ein kleiner Hund."
  ],
  [
    "N5",
    "新しい",
    "あたらしい · atarashii",
    "neu",
    "新しい本です。",
    "Es ist ein neues Buch."
  ],
  [
    "N5",
    "古い",
    "ふるい · furui",
    "alt",
    "古い車です。",
    "Es ist ein altes Auto."
  ],
  [
    "N5",
    "良い",
    "いい · ii",
    "gut",
    "いい天気です。",
    "Das Wetter ist gut."
  ],
  [
    "N5",
    "悪い",
    "わるい · warui",
    "schlecht",
    "気分が悪いです。",
    "Mir ist nicht gut."
  ],
  [
    "N5",
    "今日",
    "きょう · kyō",
    "heute",
    "今日は暑いです。",
    "Heute ist es heiß."
  ],
  [
    "N5",
    "明日",
    "あした · ashita",
    "morgen",
    "また明日。",
    "Bis morgen."
  ],
  [
    "N5",
    "昨日",
    "きのう · kinō",
    "gestern",
    "昨日勉強しました。",
    "Gestern habe ich gelernt."
  ],
  [
    "N5",
    "今",
    "いま · ima",
    "jetzt",
    "今何時ですか。",
    "Wie spät ist es jetzt?"
  ],
  [
    "N5",
    "朝",
    "あさ · asa",
    "Morgen",
    "朝ご飯を食べます。",
    "Ich frühstücke."
  ],
  [
    "N5",
    "夜",
    "よる · yoru",
    "Abend / Nacht",
    "夜に勉強します。",
    "Ich lerne abends."
  ],
  [
    "N5",
    "駅",
    "えき · eki",
    "Bahnhof",
    "駅はどこですか。",
    "Wo ist der Bahnhof?"
  ],
  [
    "N5",
    "学校",
    "がっこう · gakkō",
    "Schule",
    "学校へ行きます。",
    "Ich gehe zur Schule."
  ],
  [
    "N5",
    "病院",
    "びょういん · byōin",
    "Krankenhaus",
    "病院は近いです。",
    "Das Krankenhaus ist nah."
  ],
  [
    "N5",
    "店",
    "みせ · mise",
    "Geschäft",
    "店で買います。",
    "Ich kaufe im Geschäft."
  ],
  [
    "N5",
    "右",
    "みぎ · migi",
    "rechts",
    "右へ曲がります。",
    "Biegen Sie rechts ab."
  ],
  [
    "N5",
    "左",
    "ひだり · hidari",
    "links",
    "左にあります。",
    "Es ist links."
  ],
  [
    "N5",
    "上",
    "うえ · ue",
    "oben / auf",
    "机の上です。",
    "Es ist auf dem Tisch."
  ],
  [
    "N5",
    "下",
    "した · shita",
    "unten / unter",
    "椅子の下です。",
    "Es ist unter dem Stuhl."
  ],
  [
    "N5",
    "中",
    "なか · naka",
    "innen / in",
    "箱の中です。",
    "Es ist in der Box."
  ],
  [
    "N5",
    "外",
    "そと · soto",
    "außen",
    "外は寒いです。",
    "Draußen ist es kalt."
  ],
  [
    "N5",
    "いくら",
    "ikura",
    "wie viel?",
    "これはいくらですか。",
    "Wie viel kostet das?"
  ],
  [
    "N5",
    "どこ",
    "doko",
    "wo?",
    "駅はどこですか。",
    "Wo ist der Bahnhof?"
  ],
  [
    "N5",
    "何",
    "なに / なん · nani / nan",
    "was?",
    "これは何ですか。",
    "Was ist das?"
  ],
  [
    "N5",
    "誰",
    "だれ · dare",
    "wer?",
    "あの人は誰ですか。",
    "Wer ist diese Person?"
  ],
  [
    "N5",
    "ありがとう",
    "arigatō",
    "Danke",
    "ありがとうございます。",
    "Vielen Dank."
  ],
  [
    "N5",
    "すみません",
    "sumimasen",
    "Entschuldigung",
    "すみません、駅はどこですか。",
    "Entschuldigung, wo ist der Bahnhof?"
  ],
  [
    "N5",
    "お願いします",
    "おねがいします · onegaishimasu",
    "bitte",
    "水をお願いします。",
    "Wasser bitte."
  ],
  [
    "N5",
    "大丈夫",
    "だいじょうぶ · daijōbu",
    "okay / in Ordnung",
    "大丈夫です。",
    "Es ist okay."
  ],
  [
    "N4",
    "必要",
    "ひつよう · hitsuyō",
    "notwendig",
    "これは必要です。",
    "Das ist notwendig."
  ],
  [
    "N4",
    "予定",
    "よてい · yotei",
    "Plan / Termin",
    "明日の予定は何ですか。",
    "Was ist morgen geplant?"
  ],
  [
    "N4",
    "経験",
    "けいけん · keiken",
    "Erfahrung",
    "日本で働いた経験があります。",
    "Ich habe Erfahrung mit Arbeit in Japan."
  ],
  [
    "N4",
    "説明",
    "せつめい · setsumei",
    "Erklärung",
    "先生が説明します。",
    "Der Lehrer erklärt es."
  ],
  [
    "N4",
    "準備",
    "じゅんび · junbi",
    "Vorbereitung",
    "旅行の準備をします。",
    "Ich bereite die Reise vor."
  ],
  [
    "N4",
    "続ける",
    "つづける · tsuzukeru",
    "fortsetzen",
    "勉強を続けます。",
    "Ich lerne weiter."
  ],
  [
    "N4",
    "比べる",
    "くらべる · kuraberu",
    "vergleichen",
    "二つを比べます。",
    "Ich vergleiche zwei Dinge."
  ],
  [
    "N4",
    "選ぶ",
    "えらぶ · erabu",
    "auswählen",
    "好きなものを選びます。",
    "Ich wähle etwas aus, das ich mag."
  ],
  [
    "N3",
    "状況",
    "じょうきょう · jōkyō",
    "Situation",
    "状況を確認します。",
    "Ich überprüfe die Situation."
  ],
  [
    "N3",
    "理由",
    "りゆう · riyū",
    "Grund",
    "理由を教えてください。",
    "Bitte sagen Sie mir den Grund."
  ],
  [
    "N3",
    "影響",
    "えいきょう · eikyō",
    "Einfluss",
    "天気が予定に影響します。",
    "Das Wetter beeinflusst den Plan."
  ],
  [
    "N3",
    "方法",
    "ほうほう · hōhō",
    "Methode",
    "いい方法を考えます。",
    "Ich überlege eine gute Methode."
  ],
  [
    "N3",
    "関係",
    "かんけい · kankei",
    "Beziehung / Zusammenhang",
    "仕事と生活の関係です。",
    "Es geht um den Zusammenhang von Arbeit und Leben."
  ],
  [
    "N3",
    "可能",
    "かのう · kanō",
    "möglich",
    "変更は可能です。",
    "Eine Änderung ist möglich."
  ],
  [
    "N2",
    "判断",
    "はんだん · handan",
    "Urteil / Entscheidung",
    "状況を見て判断します。",
    "Ich entscheide nach Lage der Dinge."
  ],
  [
    "N2",
    "維持",
    "いじ · iji",
    "Erhalt / Aufrechterhaltung",
    "健康を維持します。",
    "Ich erhalte meine Gesundheit."
  ],
  [
    "N2",
    "傾向",
    "けいこう · keikō",
    "Tendenz",
    "最近その傾向があります。",
    "In letzter Zeit gibt es diese Tendenz."
  ],
  [
    "N2",
    "対応",
    "たいおう · taiō",
    "Umgang / Reaktion",
    "問題に対応します。",
    "Ich gehe mit dem Problem um."
  ],
  [
    "N1",
    "概念",
    "がいねん · gainen",
    "Konzept",
    "新しい概念を理解します。",
    "Ich verstehe ein neues Konzept."
  ],
  [
    "N1",
    "妥当",
    "だとう · datō",
    "angemessen / plausibel",
    "その判断は妥当です。",
    "Diese Entscheidung ist angemessen."
  ],
  [
    "N1",
    "遂行",
    "すいこう · suikō",
    "Durchführung",
    "計画を遂行します。",
    "Ich führe den Plan durch."
  ],
  [
    "N1",
    "顕著",
    "けんちょ · kencho",
    "deutlich / markant",
    "顕著な変化があります。",
    "Es gibt eine deutliche Veränderung."
  ],
  [
    "N5",
    "会う",
    "あう · au",
    "treffen",
    "友達に会います。",
    "Ich treffe einen Freund."
  ],
  [
    "N5",
    "開ける",
    "あける · akeru",
    "öffnen",
    "窓を開けます。",
    "Ich öffne das Fenster."
  ],
  [
    "N5",
    "閉める",
    "しめる · shimeru",
    "schließen",
    "ドアを閉めます。",
    "Ich schließe die Tür."
  ],
  [
    "N5",
    "起きる",
    "おきる · okiru",
    "aufstehen",
    "毎朝七時に起きます。",
    "Ich stehe jeden Morgen um sieben auf."
  ],
  [
    "N5",
    "寝る",
    "ねる · neru",
    "schlafen gehen",
    "十一時に寝ます。",
    "Ich gehe um elf Uhr schlafen."
  ],
  [
    "N5",
    "働く",
    "はたらく · hataraku",
    "arbeiten",
    "会社で働きます。",
    "Ich arbeite in einer Firma."
  ],
  [
    "N5",
    "休む",
    "やすむ · yasumu",
    "sich ausruhen / frei nehmen",
    "日曜日は休みます。",
    "Sonntags ruhe ich mich aus."
  ],
  [
    "N5",
    "待つ",
    "まつ · matsu",
    "warten",
    "駅で友達を待ちます。",
    "Ich warte am Bahnhof auf einen Freund."
  ],
  [
    "N5",
    "持つ",
    "もつ · motsu",
    "halten / besitzen",
    "かばんを持っています。",
    "Ich habe eine Tasche dabei."
  ],
  [
    "N5",
    "使う",
    "つかう · tsukau",
    "benutzen",
    "このペンを使います。",
    "Ich benutze diesen Stift."
  ],
  [
    "N5",
    "作る",
    "つくる · tsukuru",
    "machen / herstellen",
    "夕ご飯を作ります。",
    "Ich mache Abendessen."
  ],
  [
    "N5",
    "入る",
    "はいる · hairu",
    "hineingehen",
    "部屋に入ります。",
    "Ich gehe ins Zimmer."
  ],
  [
    "N5",
    "出る",
    "でる · deru",
    "hinausgehen / verlassen",
    "家を出ます。",
    "Ich verlasse das Haus."
  ],
  [
    "N5",
    "座る",
    "すわる · suwaru",
    "sitzen",
    "ここに座ってください。",
    "Bitte setzen Sie sich hier."
  ],
  [
    "N5",
    "立つ",
    "たつ · tatsu",
    "stehen / aufstehen",
    "立ってください。",
    "Bitte stehen Sie auf."
  ],
  [
    "N5",
    "分かる",
    "わかる · wakaru",
    "verstehen",
    "日本語が少し分かります。",
    "Ich verstehe ein wenig Japanisch."
  ],
  [
    "N5",
    "教える",
    "おしえる · oshieru",
    "lehren / sagen",
    "先生が日本語を教えます。",
    "Der Lehrer unterrichtet Japanisch."
  ],
  [
    "N5",
    "習う",
    "ならう · narau",
    "lernen / Unterricht nehmen",
    "日本語を習っています。",
    "Ich lerne Japanisch im Unterricht."
  ],
  [
    "N5",
    "勉強する",
    "べんきょうする · benkyō suru",
    "lernen",
    "毎日日本語を勉強します。",
    "Ich lerne jeden Tag Japanisch."
  ],
  [
    "N5",
    "始める",
    "はじめる · hajimeru",
    "beginnen",
    "勉強を始めます。",
    "Ich beginne zu lernen."
  ],
  [
    "N5",
    "終わる",
    "おわる · owaru",
    "enden",
    "仕事は五時に終わります。",
    "Die Arbeit endet um fünf."
  ],
  [
    "N5",
    "住む",
    "すむ · sumu",
    "wohnen",
    "東京に住んでいます。",
    "Ich wohne in Tokio."
  ],
  [
    "N5",
    "歩く",
    "あるく · aruku",
    "zu Fuß gehen",
    "駅まで歩きます。",
    "Ich gehe zu Fuß zum Bahnhof."
  ],
  [
    "N5",
    "走る",
    "はしる · hashiru",
    "laufen",
    "公園を走ります。",
    "Ich laufe im Park."
  ],
  [
    "N5",
    "泳ぐ",
    "およぐ · oyogu",
    "schwimmen",
    "海で泳ぎます。",
    "Ich schwimme im Meer."
  ],
  [
    "N5",
    "乗る",
    "のる · noru",
    "einsteigen / fahren",
    "電車に乗ります。",
    "Ich fahre mit dem Zug."
  ],
  [
    "N5",
    "降りる",
    "おりる · oriru",
    "aussteigen",
    "次の駅で降ります。",
    "Ich steige an der nächsten Station aus."
  ],
  [
    "N5",
    "曲がる",
    "まがる · magaru",
    "abbiegen",
    "右に曲がってください。",
    "Bitte biegen Sie rechts ab."
  ],
  [
    "N5",
    "着く",
    "つく · tsuku",
    "ankommen",
    "九時に駅に着きます。",
    "Ich komme um neun am Bahnhof an."
  ],
  [
    "N5",
    "帰る",
    "かえる · kaeru",
    "zurückkehren",
    "家に帰ります。",
    "Ich gehe nach Hause."
  ],
  [
    "N5",
    "切る",
    "きる · kiru",
    "schneiden",
    "紙を切ります。",
    "Ich schneide Papier."
  ],
  [
    "N5",
    "洗う",
    "あらう · arau",
    "waschen",
    "手を洗います。",
    "Ich wasche meine Hände."
  ],
  [
    "N5",
    "掃除する",
    "そうじする · sōji suru",
    "putzen",
    "部屋を掃除します。",
    "Ich putze das Zimmer."
  ],
  [
    "N5",
    "料理する",
    "りょうりする · ryōri suru",
    "kochen",
    "毎晩料理します。",
    "Ich koche jeden Abend."
  ],
  [
    "N5",
    "電話する",
    "でんわする · denwa suru",
    "telefonieren",
    "母に電話します。",
    "Ich rufe meine Mutter an."
  ],
  [
    "N5",
    "買い物する",
    "かいものする · kaimono suru",
    "einkaufen",
    "スーパーで買い物します。",
    "Ich kaufe im Supermarkt ein."
  ],
  [
    "N5",
    "高い",
    "たかい · takai",
    "teuer / hoch",
    "このかばんは高いです。",
    "Diese Tasche ist teuer."
  ],
  [
    "N5",
    "安い",
    "やすい · yasui",
    "billig",
    "この店は安いです。",
    "Dieses Geschäft ist günstig."
  ],
  [
    "N5",
    "暑い",
    "あつい · atsui",
    "heiß",
    "今日は暑いです。",
    "Heute ist es heiß."
  ],
  [
    "N5",
    "寒い",
    "さむい · samui",
    "kalt",
    "冬は寒いです。",
    "Im Winter ist es kalt."
  ],
  [
    "N5",
    "暖かい",
    "あたたかい · atatakai",
    "warm",
    "今日は暖かいです。",
    "Heute ist es warm."
  ],
  [
    "N5",
    "涼しい",
    "すずしい · suzushii",
    "kühl / angenehm",
    "夜は涼しいです。",
    "Abends ist es angenehm kühl."
  ],
  [
    "N5",
    "難しい",
    "むずかしい · muzukashii",
    "schwierig",
    "漢字は難しいです。",
    "Kanji sind schwierig."
  ],
  [
    "N5",
    "易しい",
    "やさしい · yasashii",
    "einfach",
    "この問題は易しいです。",
    "Diese Aufgabe ist einfach."
  ],
  [
    "N5",
    "面白い",
    "おもしろい · omoshiroi",
    "interessant",
    "この本は面白いです。",
    "Dieses Buch ist interessant."
  ],
  [
    "N5",
    "忙しい",
    "いそがしい · isogashii",
    "beschäftigt",
    "今日は忙しいです。",
    "Heute bin ich beschäftigt."
  ],
  [
    "N5",
    "楽しい",
    "たのしい · tanoshii",
    "spaßig / angenehm",
    "旅行は楽しいです。",
    "Reisen macht Spaß."
  ],
  [
    "N5",
    "近い",
    "ちかい · chikai",
    "nah",
    "駅は近いです。",
    "Der Bahnhof ist nah."
  ],
  [
    "N5",
    "遠い",
    "とおい · tōi",
    "weit",
    "学校は遠いです。",
    "Die Schule ist weit weg."
  ],
  [
    "N5",
    "早い",
    "はやい · hayai",
    "früh / schnell",
    "朝早く起きます。",
    "Ich stehe früh auf."
  ],
  [
    "N5",
    "遅い",
    "おそい · osoi",
    "spät / langsam",
    "電車が遅いです。",
    "Der Zug ist langsam/spät."
  ],
  [
    "N5",
    "長い",
    "ながい · nagai",
    "lang",
    "長い映画です。",
    "Es ist ein langer Film."
  ],
  [
    "N5",
    "短い",
    "みじかい · mijikai",
    "kurz",
    "短い休みです。",
    "Es ist eine kurze Pause."
  ],
  [
    "N5",
    "白い",
    "しろい · shiroi",
    "weiß",
    "白い車です。",
    "Es ist ein weißes Auto."
  ],
  [
    "N5",
    "黒い",
    "くろい · kuroi",
    "schwarz",
    "黒いかばんです。",
    "Es ist eine schwarze Tasche."
  ],
  [
    "N5",
    "赤い",
    "あかい · akai",
    "rot",
    "赤いりんごです。",
    "Es ist ein roter Apfel."
  ],
  [
    "N5",
    "青い",
    "あおい · aoi",
    "blau",
    "青い空です。",
    "Der Himmel ist blau."
  ],
  [
    "N5",
    "好き",
    "すき · suki",
    "mögen",
    "音楽が好きです。",
    "Ich mag Musik."
  ],
  [
    "N5",
    "嫌い",
    "きらい · kirai",
    "nicht mögen",
    "魚が嫌いです。",
    "Ich mag Fisch nicht."
  ],
  [
    "N5",
    "元気",
    "げんき · genki",
    "gesund / fit",
    "元気ですか。",
    "Wie geht es dir?"
  ],
  [
    "N5",
    "静か",
    "しずか · shizuka",
    "ruhig",
    "この部屋は静かです。",
    "Dieses Zimmer ist ruhig."
  ],
  [
    "N5",
    "にぎやか",
    "nigiyaka",
    "lebhaft",
    "町はにぎやかです。",
    "Die Stadt ist lebhaft."
  ],
  [
    "N5",
    "きれい",
    "kirei",
    "schön / sauber",
    "部屋はきれいです。",
    "Das Zimmer ist sauber."
  ],
  [
    "N5",
    "便利",
    "べんり · benri",
    "praktisch",
    "このアプリは便利です。",
    "Diese App ist praktisch."
  ],
  [
    "N5",
    "不便",
    "ふべん · fuben",
    "unpraktisch",
    "ここは少し不便です。",
    "Hier ist es etwas unpraktisch."
  ],
  [
    "N5",
    "春",
    "はる · haru",
    "Frühling",
    "春は暖かいです。",
    "Im Frühling ist es warm."
  ],
  [
    "N5",
    "夏",
    "なつ · natsu",
    "Sommer",
    "夏は暑いです。",
    "Im Sommer ist es heiß."
  ],
  [
    "N5",
    "秋",
    "あき · aki",
    "Herbst",
    "秋が好きです。",
    "Ich mag den Herbst."
  ],
  [
    "N5",
    "冬",
    "ふゆ · fuyu",
    "Winter",
    "冬は寒いです。",
    "Im Winter ist es kalt."
  ],
  [
    "N5",
    "天気",
    "てんき · tenki",
    "Wetter",
    "今日はいい天気です。",
    "Heute ist gutes Wetter."
  ],
  [
    "N5",
    "雨",
    "あめ · ame",
    "Regen",
    "雨が降っています。",
    "Es regnet."
  ],
  [
    "N5",
    "雪",
    "ゆき · yuki",
    "Schnee",
    "雪が降ります。",
    "Es schneit."
  ],
  [
    "N5",
    "風",
    "かぜ · kaze",
    "Wind",
    "風が強いです。",
    "Der Wind ist stark."
  ],
  [
    "N5",
    "空",
    "そら · sora",
    "Himmel",
    "空が青いです。",
    "Der Himmel ist blau."
  ],
  [
    "N5",
    "海",
    "うみ · umi",
    "Meer",
    "海で泳ぎます。",
    "Ich schwimme im Meer."
  ],
  [
    "N5",
    "町",
    "まち · machi",
    "Stadt / Ort",
    "この町は静かです。",
    "Diese Stadt ist ruhig."
  ],
  [
    "N5",
    "国",
    "くに · kuni",
    "Land",
    "どの国から来ましたか。",
    "Aus welchem Land kommst du?"
  ],
  [
    "N5",
    "家",
    "いえ · ie",
    "Haus",
    "家に帰ります。",
    "Ich gehe nach Hause."
  ],
  [
    "N5",
    "部屋",
    "へや · heya",
    "Zimmer",
    "部屋は二階です。",
    "Das Zimmer ist im zweiten Stock."
  ],
  [
    "N5",
    "机",
    "つくえ · tsukue",
    "Schreibtisch",
    "本は机の上です。",
    "Das Buch liegt auf dem Schreibtisch."
  ],
  [
    "N5",
    "椅子",
    "いす · isu",
    "Stuhl",
    "椅子に座ります。",
    "Ich setze mich auf den Stuhl."
  ],
  [
    "N5",
    "窓",
    "まど · mado",
    "Fenster",
    "窓を開けます。",
    "Ich öffne das Fenster."
  ],
  [
    "N5",
    "ドア",
    "doa",
    "Tür",
    "ドアを閉めます。",
    "Ich schließe die Tür."
  ],
  [
    "N5",
    "本",
    "ほん · hon",
    "Buch",
    "本を読みます。",
    "Ich lese ein Buch."
  ],
  [
    "N5",
    "新聞",
    "しんぶん · shinbun",
    "Zeitung",
    "新聞を読みます。",
    "Ich lese Zeitung."
  ],
  [
    "N5",
    "手紙",
    "てがみ · tegami",
    "Brief",
    "手紙を書きます。",
    "Ich schreibe einen Brief."
  ],
  [
    "N5",
    "写真",
    "しゃしん · shashin",
    "Foto",
    "写真を撮ります。",
    "Ich mache ein Foto."
  ],
  [
    "N5",
    "時計",
    "とけい · tokei",
    "Uhr",
    "時計を見ます。",
    "Ich schaue auf die Uhr."
  ],
  [
    "N5",
    "電話",
    "でんわ · denwa",
    "Telefon",
    "電話を使います。",
    "Ich benutze das Telefon."
  ],
  [
    "N5",
    "車",
    "くるま · kuruma",
    "Auto",
    "車で行きます。",
    "Ich fahre mit dem Auto."
  ],
  [
    "N5",
    "電車",
    "でんしゃ · densha",
    "Zug",
    "電車に乗ります。",
    "Ich fahre mit dem Zug."
  ],
  [
    "N5",
    "自転車",
    "じてんしゃ · jitensha",
    "Fahrrad",
    "自転車で学校へ行きます。",
    "Ich fahre mit dem Fahrrad zur Schule."
  ],
  [
    "N5",
    "飛行機",
    "ひこうき · hikōki",
    "Flugzeug",
    "飛行機で日本へ行きます。",
    "Ich fliege nach Japan."
  ],
  [
    "N5",
    "食べ物",
    "たべもの · tabemono",
    "Essen / Lebensmittel",
    "日本の食べ物が好きです。",
    "Ich mag japanisches Essen."
  ],
  [
    "N5",
    "飲み物",
    "のみもの · nomimono",
    "Getränk",
    "飲み物は何ですか。",
    "Was möchtest du trinken?"
  ],
  [
    "N5",
    "肉",
    "にく · niku",
    "Fleisch",
    "肉を食べます。",
    "Ich esse Fleisch."
  ],
  [
    "N5",
    "魚",
    "さかな · sakana",
    "Fisch",
    "魚が好きです。",
    "Ich mag Fisch."
  ],
  [
    "N5",
    "野菜",
    "やさい · yasai",
    "Gemüse",
    "野菜を食べます。",
    "Ich esse Gemüse."
  ],
  [
    "N5",
    "果物",
    "くだもの · kudamono",
    "Obst",
    "果物を買います。",
    "Ich kaufe Obst."
  ],
  [
    "N5",
    "パン",
    "pan",
    "Brot",
    "朝パンを食べます。",
    "Morgens esse ich Brot."
  ],
  [
    "N5",
    "牛乳",
    "ぎゅうにゅう · gyūnyū",
    "Milch",
    "牛乳を飲みます。",
    "Ich trinke Milch."
  ],
  [
    "N5",
    "卵",
    "たまご · tamago",
    "Ei",
    "卵を二つ買います。",
    "Ich kaufe zwei Eier."
  ],
  [
    "N5",
    "お金",
    "おかね · okane",
    "Geld",
    "お金があります。",
    "Ich habe Geld."
  ],
  [
    "N5",
    "円",
    "えん · en",
    "Yen",
    "千円です。",
    "Es kostet 1000 Yen."
  ],
  [
    "N5",
    "時間",
    "じかん · jikan",
    "Zeit / Stunden",
    "時間がありますか。",
    "Hast du Zeit?"
  ],
  [
    "N5",
    "分",
    "ふん / ぷん · fun / pun",
    "Minute",
    "十分待ってください。",
    "Bitte warten Sie zehn Minuten."
  ],
  [
    "N5",
    "週",
    "しゅう · shū",
    "Woche",
    "一週間休みます。",
    "Ich habe eine Woche frei."
  ],
  [
    "N5",
    "月曜日",
    "げつようび · getsuyōbi",
    "Montag",
    "月曜日に働きます。",
    "Ich arbeite am Montag."
  ],
  [
    "N5",
    "火曜日",
    "かようび · kayōbi",
    "Dienstag",
    "火曜日に勉強します。",
    "Ich lerne am Dienstag."
  ],
  [
    "N5",
    "水曜日",
    "すいようび · suiyōbi",
    "Mittwoch",
    "水曜日は休みです。",
    "Mittwoch habe ich frei."
  ],
  [
    "N5",
    "木曜日",
    "もくようび · mokuyōbi",
    "Donnerstag",
    "木曜日に会いましょう。",
    "Treffen wir uns am Donnerstag."
  ],
  [
    "N5",
    "金曜日",
    "きんようび · kin'yōbi",
    "Freitag",
    "金曜日は忙しいです。",
    "Freitag bin ich beschäftigt."
  ],
  [
    "N5",
    "土曜日",
    "どようび · doyōbi",
    "Samstag",
    "土曜日に買い物します。",
    "Samstags gehe ich einkaufen."
  ],
  [
    "N5",
    "日曜日",
    "にちようび · nichiyōbi",
    "Sonntag",
    "日曜日は休みます。",
    "Sonntags ruhe ich mich aus."
  ],
  [
    "N4",
    "赤ちゃん",
    "あかちゃん · akachan",
    "Baby",
    "赤ちゃんが寝ています。",
    "Das Baby schläft."
  ],
  [
    "N4",
    "味",
    "あじ · aji",
    "Geschmack",
    "このスープは味が薄いです。",
    "Diese Suppe schmeckt mild."
  ],
  [
    "N4",
    "安心",
    "あんしん · anshin",
    "Beruhigung / Sicherheit",
    "無事だと聞いて安心しました。",
    "Ich war beruhigt, als ich hörte, dass alles in Ordnung ist."
  ],
  [
    "N4",
    "安全",
    "あんぜん · anzen",
    "Sicherheit",
    "ここは安全です。",
    "Hier ist es sicher."
  ],
  [
    "N4",
    "案内",
    "あんない · annai",
    "Führung / Information",
    "駅まで案内します。",
    "Ich zeige Ihnen den Weg zum Bahnhof."
  ],
  [
    "N4",
    "以下",
    "いか · ika",
    "höchstens / darunter",
    "十歳以下は無料です。",
    "Kinder bis zehn Jahre sind kostenlos."
  ],
  [
    "N4",
    "以外",
    "いがい · igai",
    "außer",
    "日曜日以外は開いています。",
    "Außer sonntags ist geöffnet."
  ],
  [
    "N4",
    "医学",
    "いがく · igaku",
    "Medizin",
    "大学で医学を学んでいます。",
    "Ich studiere Medizin an der Universität."
  ],
  [
    "N4",
    "意見",
    "いけん · iken",
    "Meinung",
    "あなたの意見を聞きたいです。",
    "Ich möchte Ihre Meinung hören."
  ],
  [
    "N4",
    "石",
    "いし · ishi",
    "Stein",
    "道に大きな石があります。",
    "Auf dem Weg liegt ein großer Stein."
  ],
  [
    "N4",
    "一度",
    "いちど · ichido",
    "einmal",
    "一度日本へ行きたいです。",
    "Ich möchte einmal nach Japan reisen."
  ],
  [
    "N4",
    "一生懸命",
    "いっしょうけんめい · isshōkenmei",
    "mit vollem Einsatz",
    "一生懸命勉強しています。",
    "Ich lerne sehr fleißig."
  ],
  [
    "N4",
    "受付",
    "うけつけ · uketsuke",
    "Empfang / Rezeption",
    "受付で名前を書いてください。",
    "Bitte schreiben Sie Ihren Namen an der Rezeption auf."
  ],
  [
    "N4",
    "腕",
    "うで · ude",
    "Arm",
    "腕が痛いです。",
    "Mein Arm tut weh."
  ],
  [
    "N4",
    "運転",
    "うんてん · unten",
    "Fahren",
    "父は毎日車を運転します。",
    "Mein Vater fährt jeden Tag Auto."
  ],
  [
    "N4",
    "運転手",
    "うんてんしゅ · untenshu",
    "Fahrer/in",
    "バスの運転手です。",
    "Er/Sie ist Busfahrer/in."
  ],
  [
    "N4",
    "駅員",
    "えきいん · ekiin",
    "Bahnhofsangestellte/r",
    "駅員に聞きました。",
    "Ich habe den Bahnhofsangestellten gefragt."
  ],
  [
    "N4",
    "枝",
    "えだ · eda",
    "Ast",
    "木の枝に鳥がいます。",
    "Auf einem Ast sitzt ein Vogel."
  ],
  [
    "N4",
    "遠慮",
    "えんりょ · enryo",
    "Zurückhaltung",
    "遠慮しないでください。",
    "Bitte seien Sie nicht zurückhaltend."
  ],
  [
    "N4",
    "お祝い",
    "おいわい · oiwai",
    "Feier / Glückwunsch",
    "誕生日のお祝いをします。",
    "Wir feiern Geburtstag."
  ],
  [
    "N4",
    "屋上",
    "おくじょう · okujō",
    "Dachterrasse",
    "屋上から町が見えます。",
    "Von der Dachterrasse sieht man die Stadt."
  ],
  [
    "N4",
    "贈り物",
    "おくりもの · okurimono",
    "Geschenk",
    "友達に贈り物をしました。",
    "Ich habe einem Freund ein Geschenk gemacht."
  ],
  [
    "N4",
    "お宅",
    "おたく · otaku",
    "Ihr Zuhause",
    "明日お宅へ伺います。",
    "Ich komme morgen zu Ihnen nach Hause."
  ],
  [
    "N4",
    "お土産",
    "おみやげ · omiyage",
    "Souvenir",
    "家族にお土産を買いました。",
    "Ich habe meiner Familie ein Souvenir gekauft."
  ],
  [
    "N4",
    "会議",
    "かいぎ · kaigi",
    "Besprechung",
    "午後に会議があります。",
    "Am Nachmittag gibt es eine Besprechung."
  ],
  [
    "N4",
    "会場",
    "かいじょう · kaijō",
    "Veranstaltungsort",
    "会場は二階です。",
    "Der Veranstaltungsort ist im zweiten Stock."
  ],
  [
    "N4",
    "会話",
    "かいわ · kaiwa",
    "Gespräch",
    "日本語で会話を練習します。",
    "Ich übe Gespräche auf Japanisch."
  ],
  [
    "N4",
    "帰り",
    "かえり · kaeri",
    "Rückweg",
    "帰りにスーパーへ寄ります。",
    "Auf dem Rückweg gehe ich noch zum Supermarkt."
  ],
  [
    "N4",
    "科学",
    "かがく · kagaku",
    "Wissenschaft",
    "科学に興味があります。",
    "Ich interessiere mich für Wissenschaft."
  ],
  [
    "N4",
    "鏡",
    "かがみ · kagami",
    "Spiegel",
    "鏡を見ます。",
    "Ich schaue in den Spiegel."
  ],
  [
    "N4",
    "飾る",
    "かざる · kazaru",
    "dekorieren",
    "部屋に花を飾ります。",
    "Ich dekoriere das Zimmer mit Blumen."
  ],
  [
    "N4",
    "ガス",
    "gasu",
    "Gas",
    "ガスを止めてください。",
    "Bitte stellen Sie das Gas ab."
  ],
  [
    "N4",
    "形",
    "かたち · katachi",
    "Form",
    "この箱は変わった形です。",
    "Diese Schachtel hat eine ungewöhnliche Form."
  ],
  [
    "N4",
    "片付ける",
    "かたづける · katazukeru",
    "aufräumen",
    "部屋を片付けます。",
    "Ich räume das Zimmer auf."
  ],
  [
    "N4",
    "勝つ",
    "かつ · katsu",
    "gewinnen",
    "試合に勝ちました。",
    "Wir haben das Spiel gewonnen."
  ],
  [
    "N4",
    "悲しい",
    "かなしい · kanashii",
    "traurig",
    "その話を聞いて悲しくなりました。",
    "Die Geschichte hat mich traurig gemacht."
  ],
  [
    "N4",
    "必ず",
    "かならず · kanarazu",
    "unbedingt / sicher",
    "明日は必ず来てください。",
    "Bitte kommen Sie morgen unbedingt."
  ],
  [
    "N4",
    "彼",
    "かれ · kare",
    "er / Freund",
    "彼は会社員です。",
    "Er ist Angestellter."
  ],
  [
    "N4",
    "彼女",
    "かのじょ · kanojo",
    "sie / Freundin",
    "彼女は学生です。",
    "Sie ist Studentin."
  ],
  [
    "N4",
    "乾く",
    "かわく · kawaku",
    "trocknen",
    "服がまだ乾いていません。",
    "Die Kleidung ist noch nicht trocken."
  ],
  [
    "N4",
    "変わる",
    "かわる · kawaru",
    "sich ändern",
    "予定が変わりました。",
    "Der Plan hat sich geändert."
  ],
  [
    "N4",
    "考える",
    "かんがえる · kangaeru",
    "denken / überlegen",
    "少し考えてください。",
    "Bitte denken Sie kurz darüber nach."
  ],
  [
    "N4",
    "関係",
    "かんけい · kankei",
    "Beziehung / Zusammenhang",
    "仕事と生活は関係があります。",
    "Arbeit und Leben hängen zusammen."
  ],
  [
    "N4",
    "看護師",
    "かんごし · kangoshi",
    "Pflegekraft",
    "姉は看護師です。",
    "Meine ältere Schwester ist Pflegekraft."
  ],
  [
    "N4",
    "簡単",
    "かんたん · kantan",
    "einfach",
    "この問題は簡単です。",
    "Diese Aufgabe ist einfach."
  ],
  [
    "N4",
    "気",
    "き · ki",
    "Gefühl / Aufmerksamkeit",
    "気をつけてください。",
    "Bitte passen Sie auf."
  ],
  [
    "N4",
    "機会",
    "きかい · kikai",
    "Gelegenheit",
    "日本語を話す機会がありません。",
    "Ich habe keine Gelegenheit, Japanisch zu sprechen."
  ],
  [
    "N4",
    "危険",
    "きけん · kiken",
    "Gefahr / gefährlich",
    "ここは危険です。",
    "Hier ist es gefährlich."
  ],
  [
    "N4",
    "聞こえる",
    "きこえる · kikoeru",
    "hörbar sein",
    "音が聞こえます。",
    "Man kann ein Geräusch hören."
  ],
  [
    "N4",
    "決まる",
    "きまる · kimaru",
    "entschieden werden",
    "日程が決まりました。",
    "Der Termin steht fest."
  ],
  [
    "N4",
    "決める",
    "きめる · kimeru",
    "entscheiden",
    "旅行の日を決めます。",
    "Ich entscheide den Reisetag."
  ],
  [
    "N4",
    "気持ち",
    "きもち · kimochi",
    "Gefühl",
    "今の気持ちを話してください。",
    "Bitte sprechen Sie über Ihr momentanes Gefühl."
  ],
  [
    "N4",
    "急",
    "きゅう · kyū",
    "plötzlich / dringend",
    "急な予定が入りました。",
    "Es ist kurzfristig ein Termin dazugekommen."
  ],
  [
    "N4",
    "急行",
    "きゅうこう · kyūkō",
    "Expresszug",
    "急行に乗ります。",
    "Ich nehme den Expresszug."
  ],
  [
    "N4",
    "教育",
    "きょういく · kyōiku",
    "Bildung / Erziehung",
    "教育は大切です。",
    "Bildung ist wichtig."
  ],
  [
    "N4",
    "興味",
    "きょうみ · kyōmi",
    "Interesse",
    "日本文化に興味があります。",
    "Ich interessiere mich für japanische Kultur."
  ],
  [
    "N4",
    "近所",
    "きんじょ · kinjo",
    "Nachbarschaft",
    "近所に公園があります。",
    "In der Nachbarschaft gibt es einen Park."
  ],
  [
    "N4",
    "具合",
    "ぐあい · guai",
    "Zustand / Befinden",
    "体の具合はどうですか。",
    "Wie geht es Ihnen körperlich?"
  ],
  [
    "N4",
    "空気",
    "くうき · kūki",
    "Luft",
    "部屋の空気を入れ替えます。",
    "Ich lüfte das Zimmer."
  ],
  [
    "N4",
    "空港",
    "くうこう · kūkō",
    "Flughafen",
    "空港までバスで行きます。",
    "Ich fahre mit dem Bus zum Flughafen."
  ],
  [
    "N4",
    "比べる",
    "くらべる · kuraberu",
    "vergleichen",
    "二つの商品を比べます。",
    "Ich vergleiche zwei Produkte."
  ],
  [
    "N4",
    "暮らす",
    "くらす · kurasu",
    "leben",
    "家族と東京で暮らしています。",
    "Ich lebe mit meiner Familie in Tokio."
  ],
  [
    "N4",
    "計画",
    "けいかく · keikaku",
    "Plan",
    "旅行の計画を立てます。",
    "Ich plane eine Reise."
  ],
  [
    "N4",
    "警察",
    "けいさつ · keisatsu",
    "Polizei",
    "警察に電話しました。",
    "Ich habe die Polizei angerufen."
  ],
  [
    "N4",
    "景色",
    "けしき · keshiki",
    "Landschaft / Aussicht",
    "山の景色がきれいです。",
    "Die Aussicht auf die Berge ist schön."
  ],
  [
    "N4",
    "原因",
    "げんいん · gen'in",
    "Ursache",
    "事故の原因を調べます。",
    "Wir untersuchen die Unfallursache."
  ],
  [
    "N4",
    "研究",
    "けんきゅう · kenkyū",
    "Forschung",
    "大学で研究しています。",
    "Ich forsche an der Universität."
  ],
  [
    "N4",
    "健康",
    "けんこう · kenkō",
    "Gesundheit",
    "健康のために歩きます。",
    "Ich gehe der Gesundheit zuliebe spazieren."
  ],
  [
    "N4",
    "見物",
    "けんぶつ · kenbutsu",
    "Besichtigung",
    "京都を見物しました。",
    "Ich habe Kyoto besichtigt."
  ],
  [
    "N4",
    "工場",
    "こうじょう · kōjō",
    "Fabrik",
    "父は工場で働いています。",
    "Mein Vater arbeitet in einer Fabrik."
  ],
  [
    "N4",
    "交通",
    "こうつう · kōtsū",
    "Verkehr",
    "この町は交通が便利です。",
    "Der Verkehr in dieser Stadt ist praktisch."
  ],
  [
    "N4",
    "答え",
    "こたえ · kotae",
    "Antwort",
    "答えを書いてください。",
    "Bitte schreiben Sie die Antwort."
  ],
  [
    "N4",
    "故障",
    "こしょう · koshō",
    "Defekt",
    "エアコンが故障しました。",
    "Die Klimaanlage ist kaputt."
  ],
  [
    "N4",
    "ご存じ",
    "ごぞんじ · gozonji",
    "kennen / wissen (höflich)",
    "この店をご存じですか。",
    "Kennen Sie dieses Geschäft?"
  ],
  [
    "N4",
    "込む",
    "こむ · komu",
    "überfüllt sein",
    "電車が込んでいます。",
    "Der Zug ist voll."
  ],
  [
    "N4",
    "怖い",
    "こわい · kowai",
    "ängstlich / unheimlich",
    "夜道は少し怖いです。",
    "Der Weg bei Nacht ist etwas unheimlich."
  ],
  [
    "N4",
    "壊す",
    "こわす · kowasu",
    "kaputt machen",
    "時計を壊してしまいました。",
    "Ich habe die Uhr kaputt gemacht."
  ],
  [
    "N4",
    "壊れる",
    "こわれる · kowareru",
    "kaputtgehen",
    "パソコンが壊れました。",
    "Der Computer ist kaputtgegangen."
  ],
  [
    "N4",
    "今度",
    "こんど · kondo",
    "nächstes Mal / diesmal",
    "今度一緒に行きましょう。",
    "Lass uns nächstes Mal zusammen gehen."
  ],
  [
    "N4",
    "最近",
    "さいきん · saikin",
    "in letzter Zeit",
    "最近忙しいです。",
    "In letzter Zeit bin ich beschäftigt."
  ],
  [
    "N4",
    "最後",
    "さいご · saigo",
    "letzte/r/s",
    "最後のページを読みます。",
    "Ich lese die letzte Seite."
  ],
  [
    "N4",
    "最初",
    "さいしょ · saisho",
    "erste/r/s",
    "最初に名前を書きます。",
    "Zuerst schreibe ich den Namen."
  ],
  [
    "N4",
    "坂",
    "さか · saka",
    "Hang / Steigung",
    "この坂は急です。",
    "Dieser Hang ist steil."
  ],
  [
    "N4",
    "探す",
    "さがす · sagasu",
    "suchen",
    "鍵を探しています。",
    "Ich suche den Schlüssel."
  ],
  [
    "N4",
    "下がる",
    "さがる · sagaru",
    "sinken",
    "気温が下がりました。",
    "Die Temperatur ist gesunken."
  ],
  [
    "N4",
    "下げる",
    "さげる · sageru",
    "senken",
    "音を下げてください。",
    "Bitte machen Sie leiser."
  ],
  [
    "N4",
    "差し上げる",
    "さしあげる · sashiageru",
    "geben (höflich)",
    "先生にお土産を差し上げました。",
    "Ich habe dem Lehrer ein Souvenir gegeben."
  ],
  [
    "N4",
    "十分",
    "じゅうぶん · jūbun",
    "genug / ausreichend",
    "時間は十分あります。",
    "Es ist genug Zeit da."
  ],
  [
    "N4",
    "自由",
    "じゆう · jiyū",
    "Freiheit / frei",
    "自由に使ってください。",
    "Bitte benutzen Sie es frei."
  ],
  [
    "N4",
    "習慣",
    "しゅうかん · shūkan",
    "Gewohnheit",
    "毎朝歩く習慣があります。",
    "Ich habe die Gewohnheit, jeden Morgen zu gehen."
  ],
  [
    "N4",
    "住所",
    "じゅうしょ · jūsho",
    "Adresse",
    "住所を書いてください。",
    "Bitte schreiben Sie Ihre Adresse."
  ],
  [
    "N4",
    "出発",
    "しゅっぱつ · shuppatsu",
    "Abfahrt / Abreise",
    "七時に出発します。",
    "Wir fahren um sieben ab."
  ],
  [
    "N4",
    "紹介",
    "しょうかい · shōkai",
    "Vorstellung / Einführung",
    "友達を紹介します。",
    "Ich stelle einen Freund vor."
  ],
  [
    "N4",
    "小説",
    "しょうせつ · shōsetsu",
    "Roman",
    "日本の小説を読みます。",
    "Ich lese einen japanischen Roman."
  ],
  [
    "N4",
    "将来",
    "しょうらい · shōrai",
    "Zukunft",
    "将来日本で働きたいです。",
    "Ich möchte später in Japan arbeiten."
  ],
  [
    "N4",
    "知らせる",
    "しらせる · shiraseru",
    "informieren",
    "時間が決まったら知らせます。",
    "Ich sage Bescheid, sobald die Zeit feststeht."
  ],
  [
    "N4",
    "調べる",
    "しらべる · shiraberu",
    "nachschlagen / untersuchen",
    "辞書で意味を調べます。",
    "Ich schlage die Bedeutung im Wörterbuch nach."
  ],
  [
    "N4",
    "人口",
    "じんこう · jinkō",
    "Bevölkerung",
    "東京は人口が多いです。",
    "Tokio hat eine große Bevölkerung."
  ],
  [
    "N4",
    "親切",
    "しんせつ · shinsetsu",
    "freundlich / hilfsbereit",
    "店員はとても親切でした。",
    "Der Verkäufer war sehr freundlich."
  ],
  [
    "N4",
    "心配",
    "しんぱい · shinpai",
    "Sorge",
    "そんなに心配しないでください。",
    "Bitte machen Sie sich nicht so viele Sorgen."
  ],
  [
    "N4",
    "進む",
    "すすむ · susumu",
    "vorangehen",
    "工事が進んでいます。",
    "Die Bauarbeiten kommen voran."
  ],
  [
    "N4",
    "進める",
    "すすめる · susumeru",
    "vorantreiben",
    "計画を進めます。",
    "Ich treibe den Plan voran."
  ],
  [
    "N4",
    "捨てる",
    "すてる · suteru",
    "wegwerfen",
    "ごみを捨てます。",
    "Ich werfe den Müll weg."
  ],
  [
    "N4",
    "生活",
    "せいかつ · seikatsu",
    "Leben / Alltag",
    "日本の生活に慣れました。",
    "Ich habe mich an das Leben in Japan gewöhnt."
  ],
  [
    "N4",
    "説明",
    "せつめい · setsumei",
    "Erklärung",
    "使い方を説明します。",
    "Ich erkläre die Benutzung."
  ],
  [
    "N4",
    "選ぶ",
    "えらぶ · erabu",
    "auswählen",
    "好きなものを選んでください。",
    "Bitte wählen Sie etwas aus, das Sie mögen."
  ],
  [
    "N4",
    "相談",
    "そうだん · sōdan",
    "Beratung / Besprechung",
    "先生に相談します。",
    "Ich bespreche es mit dem Lehrer."
  ],
  [
    "N4",
    "育てる",
    "そだてる · sodateru",
    "aufziehen / anbauen",
    "庭で野菜を育てています。",
    "Ich baue im Garten Gemüse an."
  ],
  [
    "N4",
    "卒業",
    "そつぎょう · sotsugyō",
    "Abschluss",
    "来年大学を卒業します。",
    "Nächstes Jahr mache ich meinen Uniabschluss."
  ],
  [
    "N4",
    "大体",
    "だいたい · daitai",
    "ungefähr / im Großen und Ganzen",
    "大体分かりました。",
    "Ich habe es ungefähr verstanden."
  ],
  [
    "N4",
    "確か",
    "たしか · tashika",
    "sicher / wenn ich mich recht erinnere",
    "確か三時でした。",
    "Wenn ich mich recht erinnere, war es drei Uhr."
  ],
  [
    "N4",
    "訪ねる",
    "たずねる · tazuneru",
    "besuchen",
    "友達を訪ねます。",
    "Ich besuche einen Freund."
  ],
  [
    "N4",
    "尋ねる",
    "たずねる · tazuneru",
    "fragen",
    "駅員に道を尋ねました。",
    "Ich fragte den Bahnhofsangestellten nach dem Weg."
  ],
  [
    "N4",
    "建てる",
    "たてる · tateru",
    "bauen",
    "新しい家を建てています。",
    "Sie bauen ein neues Haus."
  ],
  [
    "N4",
    "足りる",
    "たりる · tariru",
    "ausreichen",
    "お金が足りません。",
    "Das Geld reicht nicht."
  ],
  [
    "N4",
    "暖房",
    "だんぼう · danbō",
    "Heizung",
    "暖房をつけます。",
    "Ich schalte die Heizung ein."
  ],
  [
    "N4",
    "注意",
    "ちゅうい · chūi",
    "Vorsicht / Aufmerksamkeit",
    "車に注意してください。",
    "Bitte achten Sie auf Autos."
  ],
  [
    "N4",
    "駐車場",
    "ちゅうしゃじょう · chūshajō",
    "Parkplatz",
    "駐車場はどこですか。",
    "Wo ist der Parkplatz?"
  ],
  [
    "N4",
    "都合",
    "つごう · tsugō",
    "Umstände / Verfügbarkeit",
    "明日は都合が悪いです。",
    "Morgen passt es mir nicht."
  ],
  [
    "N4",
    "続く",
    "つづく · tsuzuku",
    "andauern",
    "雨が三日続きました。",
    "Der Regen dauerte drei Tage an."
  ],
  [
    "N4",
    "伝える",
    "つたえる · tsutaeru",
    "übermitteln",
    "先生に伝えてください。",
    "Bitte richten Sie es dem Lehrer aus."
  ],
  [
    "N4",
    "包む",
    "つつむ · tsutsumu",
    "einpacken",
    "プレゼントを包みます。",
    "Ich packe das Geschenk ein."
  ],
  [
    "N4",
    "丁寧",
    "ていねい · teinei",
    "höflich / sorgfältig",
    "丁寧に書いてください。",
    "Bitte schreiben Sie sorgfältig."
  ],
  [
    "N4",
    "適当",
    "てきとう · tekitō",
    "geeignet / passend",
    "適当な時間を選んでください。",
    "Bitte wählen Sie eine passende Zeit."
  ],
  [
    "N4",
    "手伝う",
    "てつだう · tetsudau",
    "helfen",
    "母の料理を手伝います。",
    "Ich helfe meiner Mutter beim Kochen."
  ],
  [
    "N4",
    "途中",
    "とちゅう · tochū",
    "unterwegs / mittendrin",
    "途中で雨が降りました。",
    "Unterwegs begann es zu regnen."
  ],
  [
    "N4",
    "届ける",
    "とどける · todokeru",
    "zustellen / bringen",
    "荷物を家まで届けます。",
    "Wir liefern das Paket bis nach Hause."
  ],
  [
    "N4",
    "泊まる",
    "とまる · tomaru",
    "übernachten",
    "ホテルに泊まります。",
    "Ich übernachte im Hotel."
  ],
  [
    "N4",
    "直す",
    "なおす · naosu",
    "reparieren / korrigieren",
    "自転車を直します。",
    "Ich repariere das Fahrrad."
  ],
  [
    "N4",
    "治る",
    "なおる · naoru",
    "heilen",
    "風邪が治りました。",
    "Meine Erkältung ist vorbei."
  ],
  [
    "N4",
    "治す",
    "なおす · naosu",
    "heilen / behandeln",
    "病気を治します。",
    "Ich behandle die Krankheit."
  ],
  [
    "N4",
    "慣れる",
    "なれる · nareru",
    "sich gewöhnen",
    "日本の生活に慣れました。",
    "Ich habe mich an das Leben in Japan gewöhnt."
  ],
  [
    "N4",
    "似る",
    "にる · niru",
    "ähnlich sein",
    "母によく似ています。",
    "Er/Sie sieht der Mutter sehr ähnlich."
  ],
  [
    "N4",
    "入院",
    "にゅういん · nyūin",
    "Krankenhausaufnahme",
    "祖父が入院しました。",
    "Mein Großvater wurde ins Krankenhaus aufgenommen."
  ],
  [
    "N4",
    "眠い",
    "ねむい · nemui",
    "schläfrig",
    "今日はとても眠いです。",
    "Heute bin ich sehr müde."
  ],
  [
    "N4",
    "残る",
    "のこる · nokoru",
    "übrig bleiben",
    "料理が少し残りました。",
    "Etwas Essen ist übrig geblieben."
  ],
  [
    "N4",
    "乗り換える",
    "のりかえる · norikaeru",
    "umsteigen",
    "東京駅で乗り換えます。",
    "Ich steige am Bahnhof Tokio um."
  ],
  [
    "N4",
    "場合",
    "ばあい · baai",
    "Fall / Situation",
    "雨の場合は中止です。",
    "Bei Regen fällt es aus."
  ],
  [
    "N4",
    "倍",
    "ばい · bai",
    "doppelt / -fach",
    "値段が二倍になりました。",
    "Der Preis hat sich verdoppelt."
  ],
  [
    "N4",
    "運ぶ",
    "はこぶ · hakobu",
    "tragen / transportieren",
    "荷物を運びます。",
    "Ich trage das Gepäck."
  ],
  [
    "N4",
    "始まる",
    "はじまる · hajimaru",
    "beginnen",
    "映画は七時に始まります。",
    "Der Film beginnt um sieben."
  ],
  [
    "N4",
    "発音",
    "はつおん · hatsuon",
    "Aussprache",
    "発音を練習します。",
    "Ich übe die Aussprache."
  ],
  [
    "N4",
    "払う",
    "はらう · harau",
    "bezahlen",
    "カードで払います。",
    "Ich bezahle mit Karte."
  ],
  [
    "N4",
    "冷える",
    "ひえる · hieru",
    "kalt werden",
    "夜はかなり冷えます。",
    "Nachts wird es ziemlich kalt."
  ],
  [
    "N4",
    "光",
    "ひかり · hikari",
    "Licht",
    "窓から光が入ります。",
    "Durch das Fenster fällt Licht herein."
  ],
  [
    "N4",
    "引っ越す",
    "ひっこす · hikkosu",
    "umziehen",
    "来月大阪へ引っ越します。",
    "Nächsten Monat ziehe ich nach Osaka."
  ],
  [
    "N4",
    "必要",
    "ひつよう · hitsuyō",
    "notwendig",
    "パスポートが必要です。",
    "Ein Reisepass ist notwendig."
  ],
  [
    "N4",
    "増える",
    "ふえる · fueru",
    "zunehmen",
    "観光客が増えました。",
    "Die Zahl der Touristen ist gestiegen."
  ],
  [
    "N4",
    "増やす",
    "ふやす · fuyasu",
    "erhöhen",
    "勉強時間を増やします。",
    "Ich erhöhe meine Lernzeit."
  ],
  [
    "N4",
    "復習",
    "ふくしゅう · fukushū",
    "Wiederholung",
    "毎日復習します。",
    "Ich wiederhole jeden Tag."
  ],
  [
    "N4",
    "普通",
    "ふつう · futsū",
    "normal / gewöhnlich",
    "普通の電車に乗ります。",
    "Ich nehme den normalen Zug."
  ],
  [
    "N4",
    "文化",
    "ぶんか · bunka",
    "Kultur",
    "日本文化を勉強しています。",
    "Ich lerne über japanische Kultur."
  ],
  [
    "N4",
    "変",
    "へん · hen",
    "seltsam",
    "変な音がします。",
    "Es gibt ein seltsames Geräusch."
  ],
  [
    "N4",
    "貿易",
    "ぼうえき · bōeki",
    "Handel",
    "この国は貿易が盛んです。",
    "In diesem Land ist der Handel stark."
  ],
  [
    "N4",
    "法律",
    "ほうりつ · hōritsu",
    "Gesetz",
    "法律を守らなければなりません。",
    "Man muss das Gesetz einhalten."
  ],
  [
    "N4",
    "間に合う",
    "まにあう · maniau",
    "rechtzeitig schaffen",
    "電車に間に合いました。",
    "Ich habe den Zug rechtzeitig erreicht."
  ],
  [
    "N4",
    "間違える",
    "まちがえる · machigaeru",
    "sich irren",
    "答えを間違えました。",
    "Ich habe die Antwort falsch gemacht."
  ],
  [
    "N4",
    "間違い",
    "まちがい · machigai",
    "Fehler",
    "間違いを直してください。",
    "Bitte korrigieren Sie den Fehler."
  ],
  [
    "N4",
    "周り",
    "まわり · mawari",
    "Umgebung",
    "家の周りは静かです。",
    "Die Umgebung des Hauses ist ruhig."
  ],
  [
    "N4",
    "見える",
    "みえる · mieru",
    "sichtbar sein",
    "ここから山が見えます。",
    "Von hier aus sieht man die Berge."
  ],
  [
    "N4",
    "見つける",
    "みつける · mitsukeru",
    "finden",
    "いい店を見つけました。",
    "Ich habe ein gutes Geschäft gefunden."
  ],
  [
    "N4",
    "迎える",
    "むかえる · mukaeru",
    "abholen / empfangen",
    "駅まで友達を迎えに行きます。",
    "Ich hole einen Freund am Bahnhof ab."
  ],
  [
    "N4",
    "珍しい",
    "めずらしい · mezurashii",
    "selten / ungewöhnlich",
    "珍しい花を見ました。",
    "Ich habe eine seltene Blume gesehen."
  ],
  [
    "N4",
    "申し込む",
    "もうしこむ · mōshikomu",
    "sich anmelden / beantragen",
    "コースに申し込みました。",
    "Ich habe mich für den Kurs angemeldet."
  ],
  [
    "N4",
    "戻る",
    "もどる · modoru",
    "zurückkehren",
    "すぐ戻ります。",
    "Ich komme gleich zurück."
  ],
  [
    "N4",
    "戻す",
    "もどす · modosu",
    "zurückstellen",
    "本を棚に戻します。",
    "Ich stelle das Buch ins Regal zurück."
  ],
  [
    "N4",
    "役に立つ",
    "やくにたつ · yaku ni tatsu",
    "nützlich sein",
    "この辞書は役に立ちます。",
    "Dieses Wörterbuch ist nützlich."
  ],
  [
    "N4",
    "予約",
    "よやく · yoyaku",
    "Reservierung",
    "ホテルを予約しました。",
    "Ich habe ein Hotel reserviert."
  ],
  [
    "N4",
    "理由",
    "りゆう · riyū",
    "Grund",
    "理由を説明してください。",
    "Bitte erklären Sie den Grund."
  ],
  [
    "N4",
    "利用",
    "りよう · riyō",
    "Nutzung",
    "このサービスを利用します。",
    "Ich nutze diesen Service."
  ],
  [
    "N4",
    "留学",
    "りゅうがく · ryūgaku",
    "Auslandsstudium",
    "日本へ留学したいです。",
    "Ich möchte in Japan studieren."
  ],
  [
    "N4",
    "両方",
    "りょうほう · ryōhō",
    "beide",
    "両方好きです。",
    "Ich mag beide."
  ],
  [
    "N4",
    "連絡",
    "れんらく · renraku",
    "Kontakt / Nachricht",
    "後で連絡します。",
    "Ich melde mich später."
  ],
  [
    "N4",
    "沸かす",
    "わかす · wakasu",
    "zum Kochen bringen",
    "お湯を沸かします。",
    "Ich koche Wasser."
  ],
  [
    "N4",
    "笑う",
    "わらう · warau",
    "lachen",
    "みんなで笑いました。",
    "Wir haben alle gelacht."
  ]
];
  const GRAMMAR = [
  [
    "N5",
    "A は B です",
    "A wa B desu",
    "A ist B.",
    "私は学生です。",
    "Ich bin Student/in."
  ],
  [
    "N5",
    "～ですか",
    "desu ka",
    "Frageform",
    "学生ですか。",
    "Sind Sie Student/in?"
  ],
  [
    "N5",
    "A の B",
    "A no B",
    "B von A / A-B",
    "日本の本",
    "ein japanisches Buch"
  ],
  [
    "N5",
    "A も B",
    "A mo B",
    "A auch B",
    "私も学生です。",
    "Ich bin auch Student/in."
  ],
  [
    "N5",
    "～を + Verb",
    "o",
    "direktes Objekt",
    "水を飲みます。",
    "Ich trinke Wasser."
  ],
  [
    "N5",
    "～に",
    "ni",
    "Zeitpunkt / Ziel / Existenzort",
    "七時に起きます。",
    "Ich stehe um sieben auf."
  ],
  [
    "N5",
    "～へ",
    "e",
    "Richtung / Ziel",
    "日本へ行きます。",
    "Ich fahre nach Japan."
  ],
  [
    "N5",
    "～で",
    "de",
    "Ort einer Handlung / Mittel",
    "学校で勉強します。",
    "Ich lerne in der Schule."
  ],
  [
    "N5",
    "～と",
    "to",
    "mit / und / Zitat",
    "友達と話します。",
    "Ich spreche mit einem Freund."
  ],
  [
    "N5",
    "～から / ～まで",
    "kara / made",
    "von / bis",
    "九時から五時まで。",
    "Von neun bis fünf."
  ],
  [
    "N5",
    "あります / います",
    "arimasu / imasu",
    "es gibt / befindet sich",
    "猫がいます。",
    "Es gibt eine Katze."
  ],
  [
    "N5",
    "～たいです",
    "tai desu",
    "möchte tun",
    "日本へ行きたいです。",
    "Ich möchte nach Japan fahren."
  ],
  [
    "N5",
    "～てください",
    "te kudasai",
    "Bitte tun Sie …",
    "待ってください。",
    "Bitte warten Sie."
  ],
  [
    "N5",
    "～てもいいです",
    "te mo ii desu",
    "dürfen",
    "ここで食べてもいいです。",
    "Man darf hier essen."
  ],
  [
    "N5",
    "～てはいけません",
    "te wa ikemasen",
    "nicht dürfen",
    "ここで写真を撮ってはいけません。",
    "Fotografieren ist hier verboten."
  ],
  [
    "N5",
    "～ませんか",
    "masen ka",
    "Einladung",
    "一緒に行きませんか。",
    "Wollen wir zusammen gehen?"
  ],
  [
    "N5",
    "～ましょう",
    "mashō",
    "Lass uns …",
    "行きましょう。",
    "Lass uns gehen."
  ],
  [
    "N4",
    "～ながら",
    "nagara",
    "während",
    "音楽を聞きながら勉強します。",
    "Ich lerne, während ich Musik höre."
  ],
  [
    "N4",
    "～と思います",
    "to omoimasu",
    "ich denke, dass …",
    "明日は雨だと思います。",
    "Ich denke, morgen regnet es."
  ],
  [
    "N4",
    "～なければならない",
    "nakereba naranai",
    "müssen",
    "勉強しなければなりません。",
    "Ich muss lernen."
  ],
  [
    "N4",
    "～たことがある",
    "ta koto ga aru",
    "schon einmal getan haben",
    "日本へ行ったことがあります。",
    "Ich war schon einmal in Japan."
  ],
  [
    "N3",
    "～ようにする",
    "yō ni suru",
    "darauf achten, dass …",
    "毎日読むようにします。",
    "Ich achte darauf, täglich zu lesen."
  ],
  [
    "N3",
    "～ことになる",
    "koto ni naru",
    "es wird beschlossen / ergibt sich",
    "来月日本へ行くことになりました。",
    "Es hat sich ergeben, dass ich nächsten Monat nach Japan fahre."
  ],
  [
    "N3",
    "～わけではない",
    "wake de wa nai",
    "es ist nicht so, dass …",
    "嫌いなわけではありません。",
    "Es ist nicht so, dass ich es nicht mag."
  ],
  [
    "N2",
    "～に違いない",
    "ni chigai nai",
    "muss sicher … sein",
    "彼は知っているに違いない。",
    "Er muss es sicher wissen."
  ],
  [
    "N2",
    "～ものの",
    "mono no",
    "obwohl",
    "買ったものの、まだ使っていません。",
    "Obwohl ich es gekauft habe, habe ich es noch nicht benutzt."
  ],
  [
    "N2",
    "～に伴って",
    "ni tomonatte",
    "einhergehend mit",
    "人口の増加に伴って問題も増えます。",
    "Mit dem Bevölkerungswachstum nehmen auch Probleme zu."
  ],
  [
    "N1",
    "～を皮切りに",
    "o kawakiri ni",
    "beginnend mit …",
    "東京を皮切りに全国で開催されます。",
    "Beginnend in Tokio findet es landesweit statt."
  ],
  [
    "N1",
    "～に堪えない",
    "ni taenai",
    "nicht ertragen können / sehr …",
    "見るに堪えない。",
    "Es ist nicht anzusehen."
  ],
  [
    "N1",
    "～を余儀なくされる",
    "o yogi naku sareru",
    "gezwungen sein",
    "計画の変更を余儀なくされました。",
    "Wir waren gezwungen, den Plan zu ändern."
  ],
  [
    "N4",
    "～と思う",
    "to omou",
    "denken, dass …",
    "明日は雨だと思います。",
    "Ich denke, dass es morgen regnet."
  ],
  [
    "N4",
    "～と言う",
    "to iu",
    "sagen, dass …",
    "先生は明日休みだと言いました。",
    "Der Lehrer sagte, dass morgen frei ist."
  ],
  [
    "N4",
    "～たり～たりする",
    "tari tari suru",
    "unter anderem … tun",
    "休みの日は本を読んだり映画を見たりします。",
    "An freien Tagen lese ich unter anderem Bücher und schaue Filme."
  ],
  [
    "N4",
    "～なければならない",
    "nakereba naranai",
    "müssen",
    "薬を飲まなければなりません。",
    "Ich muss Medizin nehmen."
  ],
  [
    "N4",
    "～なくてもいい",
    "nakute mo ii",
    "nicht müssen",
    "明日は来なくてもいいです。",
    "Du musst morgen nicht kommen."
  ],
  [
    "N4",
    "～かもしれない",
    "kamo shirenai",
    "vielleicht",
    "午後は雨が降るかもしれません。",
    "Vielleicht regnet es am Nachmittag."
  ],
  [
    "N4",
    "～でしょう",
    "deshō",
    "wahrscheinlich / nicht wahr?",
    "明日は寒いでしょう。",
    "Morgen wird es wahrscheinlich kalt."
  ],
  [
    "N4",
    "～そうだ（様態）",
    "sō da",
    "sieht so aus, als …",
    "雨が降りそうです。",
    "Es sieht nach Regen aus."
  ],
  [
    "N4",
    "～そうだ（伝聞）",
    "sō da",
    "ich habe gehört, dass …",
    "田中さんは来ないそうです。",
    "Ich habe gehört, dass Herr/Frau Tanaka nicht kommt."
  ],
  [
    "N4",
    "～ようと思う",
    "yō to omou",
    "vorhaben",
    "来年日本へ行こうと思っています。",
    "Ich habe vor, nächstes Jahr nach Japan zu fahren."
  ],
  [
    "N4",
    "～予定だ",
    "yotei da",
    "geplant sein",
    "来月引っ越す予定です。",
    "Ich plane, nächsten Monat umzuziehen."
  ],
  [
    "N4",
    "～つもりだ",
    "tsumori da",
    "beabsichtigen",
    "毎日勉強するつもりです。",
    "Ich habe vor, jeden Tag zu lernen."
  ],
  [
    "N4",
    "～ほうがいい",
    "hō ga ii",
    "es ist besser, …",
    "早く寝たほうがいいです。",
    "Du solltest besser früh schlafen gehen."
  ],
  [
    "N4",
    "～すぎる",
    "sugiru",
    "zu sehr / zu viel",
    "食べすぎました。",
    "Ich habe zu viel gegessen."
  ],
  [
    "N4",
    "～やすい",
    "yasui",
    "leicht zu …",
    "この本は読みやすいです。",
    "Dieses Buch ist leicht zu lesen."
  ],
  [
    "N4",
    "～にくい",
    "nikui",
    "schwer zu …",
    "この漢字は覚えにくいです。",
    "Dieses Kanji ist schwer zu merken."
  ],
  [
    "N4",
    "～始める",
    "hajimeru",
    "anfangen zu …",
    "雨が降り始めました。",
    "Es hat angefangen zu regnen."
  ],
  [
    "N4",
    "～終わる",
    "owaru",
    "fertig …",
    "本を読み終わりました。",
    "Ich habe das Buch fertig gelesen."
  ],
  [
    "N4",
    "～続ける",
    "tsuzukeru",
    "weiter …",
    "日本語を勉強し続けます。",
    "Ich lerne weiter Japanisch."
  ],
  [
    "N4",
    "～てみる",
    "te miru",
    "versuchen, … zu tun",
    "この料理を食べてみます。",
    "Ich probiere dieses Gericht."
  ],
  [
    "N4",
    "～ておく",
    "te oku",
    "im Voraus tun",
    "ホテルを予約しておきます。",
    "Ich reserviere das Hotel im Voraus."
  ],
  [
    "N4",
    "～てしまう",
    "te shimau",
    "vollständig / bedauerlicherweise tun",
    "財布を忘れてしまいました。",
    "Ich habe leider mein Portemonnaie vergessen."
  ],
  [
    "N4",
    "～てある",
    "te aru",
    "absichtlich in einem Zustand sein",
    "窓が開けてあります。",
    "Das Fenster ist absichtlich geöffnet."
  ],
  [
    "N4",
    "～ているところだ",
    "te iru tokoro da",
    "gerade dabei sein",
    "今ご飯を食べているところです。",
    "Ich esse gerade."
  ],
  [
    "N4",
    "～るところだ",
    "ru tokoro da",
    "gerade im Begriff sein",
    "今から出かけるところです。",
    "Ich bin gerade im Begriff loszugehen."
  ],
  [
    "N4",
    "～たところだ",
    "ta tokoro da",
    "gerade getan haben",
    "今帰ったところです。",
    "Ich bin gerade zurückgekommen."
  ],
  [
    "N4",
    "～ようになる",
    "yō ni naru",
    "dazu kommen, dass / fähig werden",
    "日本語が話せるようになりました。",
    "Ich kann inzwischen Japanisch sprechen."
  ],
  [
    "N4",
    "～ようにする",
    "yō ni suru",
    "darauf achten, dass",
    "毎日歩くようにしています。",
    "Ich achte darauf, täglich zu gehen."
  ],
  [
    "N4",
    "～ので",
    "node",
    "weil",
    "雨なので出かけません。",
    "Weil es regnet, gehe ich nicht aus."
  ],
  [
    "N4",
    "～のに",
    "noni",
    "obwohl",
    "勉強したのに忘れました。",
    "Obwohl ich gelernt habe, habe ich es vergessen."
  ],
  [
    "N4",
    "～し",
    "shi",
    "und außerdem / weil",
    "この店は安いし、おいしいです。",
    "Dieses Restaurant ist günstig und außerdem lecker."
  ],
  [
    "N4",
    "～なら",
    "nara",
    "wenn es um … geht / falls",
    "京都なら春がおすすめです。",
    "Wenn es um Kyoto geht, empfehle ich den Frühling."
  ],
  [
    "N4",
    "～たら",
    "tara",
    "wenn / nachdem",
    "家に帰ったら電話します。",
    "Wenn ich zu Hause bin, rufe ich an."
  ],
  [
    "N4",
    "～ば",
    "ba",
    "wenn",
    "時間があれば行きます。",
    "Wenn ich Zeit habe, gehe ich."
  ],
  [
    "N4",
    "～と",
    "to",
    "wenn immer / sobald",
    "春になると暖かくなります。",
    "Wenn Frühling wird, wird es warm."
  ],
  [
    "N4",
    "～ても",
    "te mo",
    "auch wenn",
    "雨が降っても行きます。",
    "Auch wenn es regnet, gehe ich."
  ],
  [
    "N4",
    "～しか～ない",
    "shika nai",
    "nur",
    "千円しかありません。",
    "Ich habe nur 1000 Yen."
  ],
  [
    "N4",
    "～でも",
    "demo",
    "zum Beispiel / selbst",
    "お茶でも飲みませんか。",
    "Wollen wir vielleicht Tee trinken?"
  ],
  [
    "N4",
    "～について",
    "ni tsuite",
    "über / bezüglich",
    "日本文化について勉強します。",
    "Ich lerne über japanische Kultur."
  ],
  [
    "N4",
    "～によると",
    "ni yoru to",
    "laut",
    "天気予報によると、明日は雨です。",
    "Laut Wetterbericht regnet es morgen."
  ],
  [
    "N4",
    "～までに",
    "made ni",
    "bis spätestens",
    "五時までに帰ってください。",
    "Bitte kommen Sie bis fünf Uhr zurück."
  ],
  [
    "N4",
    "～間に",
    "aida ni",
    "während",
    "子どもが寝ている間に勉強します。",
    "Ich lerne, während das Kind schläft."
  ],
  [
    "N4",
    "～前に",
    "mae ni",
    "bevor",
    "寝る前に歯を磨きます。",
    "Vor dem Schlafengehen putze ich die Zähne."
  ],
  [
    "N4",
    "～後で",
    "ato de",
    "nachdem / später",
    "仕事の後で買い物します。",
    "Nach der Arbeit gehe ich einkaufen."
  ],
  [
    "N4",
    "～ために",
    "tame ni",
    "um … zu / für",
    "日本で働くために勉強しています。",
    "Ich lerne, um in Japan zu arbeiten."
  ],
  [
    "N4",
    "～方",
    "kata",
    "Art und Weise",
    "使い方を教えてください。",
    "Bitte zeigen Sie mir, wie man es benutzt."
  ],
  [
    "N4",
    "～かどうか",
    "ka dō ka",
    "ob oder nicht",
    "行くかどうかまだ決めていません。",
    "Ich habe noch nicht entschieden, ob ich gehe."
  ],
  [
    "N4",
    "～ようだ",
    "yō da",
    "es scheint / wie",
    "彼は疲れているようです。",
    "Er scheint müde zu sein."
  ]
];
  const KANJI = [
  [
    "N5",
    "日",
    "にち・ひ",
    "Tag / Sonne",
    "日本・日曜日"
  ],
  [
    "N5",
    "月",
    "げつ・つき",
    "Monat / Mond",
    "月曜日"
  ],
  [
    "N5",
    "火",
    "か・ひ",
    "Feuer",
    "火曜日"
  ],
  [
    "N5",
    "水",
    "すい・みず",
    "Wasser",
    "水曜日"
  ],
  [
    "N5",
    "木",
    "もく・き",
    "Baum / Holz",
    "木曜日"
  ],
  [
    "N5",
    "金",
    "きん・かね",
    "Gold / Geld",
    "金曜日"
  ],
  [
    "N5",
    "土",
    "ど・つち",
    "Erde / Boden",
    "土曜日"
  ],
  [
    "N5",
    "山",
    "さん・やま",
    "Berg",
    "富士山"
  ],
  [
    "N5",
    "川",
    "せん・かわ",
    "Fluss",
    "川"
  ],
  [
    "N5",
    "田",
    "でん・た",
    "Reisfeld",
    "田中"
  ],
  [
    "N5",
    "人",
    "じん・にん・ひと",
    "Mensch",
    "日本人"
  ],
  [
    "N5",
    "口",
    "こう・くち",
    "Mund",
    "入口"
  ],
  [
    "N5",
    "目",
    "もく・め",
    "Auge",
    "目"
  ],
  [
    "N5",
    "耳",
    "じ・みみ",
    "Ohr",
    "耳"
  ],
  [
    "N5",
    "手",
    "しゅ・て",
    "Hand",
    "手"
  ],
  [
    "N5",
    "足",
    "そく・あし",
    "Fuß / Bein",
    "足"
  ],
  [
    "N5",
    "上",
    "じょう・うえ",
    "oben",
    "上"
  ],
  [
    "N5",
    "下",
    "か・した",
    "unten",
    "下"
  ],
  [
    "N5",
    "中",
    "ちゅう・なか",
    "Mitte / innen",
    "中国"
  ],
  [
    "N5",
    "外",
    "がい・そと",
    "außen",
    "外国"
  ],
  [
    "N5",
    "大",
    "だい・おお",
    "groß",
    "大学"
  ],
  [
    "N5",
    "小",
    "しょう・ちい",
    "klein",
    "小学校"
  ],
  [
    "N5",
    "一",
    "いち",
    "eins",
    "一人"
  ],
  [
    "N5",
    "二",
    "に",
    "zwei",
    "二人"
  ],
  [
    "N5",
    "三",
    "さん",
    "drei",
    "三人"
  ],
  [
    "N5",
    "四",
    "し・よん",
    "vier",
    "四月"
  ],
  [
    "N5",
    "五",
    "ご",
    "fünf",
    "五月"
  ],
  [
    "N5",
    "六",
    "ろく",
    "sechs",
    "六月"
  ],
  [
    "N5",
    "七",
    "しち・なな",
    "sieben",
    "七月"
  ],
  [
    "N5",
    "八",
    "はち",
    "acht",
    "八月"
  ],
  [
    "N5",
    "九",
    "きゅう",
    "neun",
    "九月"
  ],
  [
    "N5",
    "十",
    "じゅう",
    "zehn",
    "十月"
  ],
  [
    "N5",
    "百",
    "ひゃく",
    "hundert",
    "百円"
  ],
  [
    "N5",
    "千",
    "せん",
    "tausend",
    "千円"
  ],
  [
    "N5",
    "万",
    "まん",
    "zehntausend",
    "一万円"
  ],
  [
    "N5",
    "円",
    "えん",
    "Yen / Kreis",
    "百円"
  ],
  [
    "N5",
    "年",
    "ねん・とし",
    "Jahr",
    "今年"
  ],
  [
    "N5",
    "時",
    "じ・とき",
    "Zeit / Uhr",
    "七時"
  ],
  [
    "N5",
    "分",
    "ぶん・ふん",
    "Minute / Teil",
    "十分"
  ],
  [
    "N5",
    "半",
    "はん",
    "Hälfte",
    "七時半"
  ],
  [
    "N5",
    "今",
    "こん・いま",
    "jetzt",
    "今日"
  ],
  [
    "N5",
    "先",
    "せん・さき",
    "vorher / voraus",
    "先生"
  ],
  [
    "N5",
    "生",
    "せい・い",
    "Leben / geboren",
    "学生"
  ],
  [
    "N5",
    "学",
    "がく・まな",
    "lernen",
    "学校"
  ],
  [
    "N5",
    "校",
    "こう",
    "Schule",
    "学校"
  ],
  [
    "N5",
    "本",
    "ほん・もと",
    "Buch / Ursprung",
    "日本"
  ],
  [
    "N5",
    "語",
    "ご",
    "Sprache / Wort",
    "日本語"
  ],
  [
    "N5",
    "食",
    "しょく・た",
    "essen",
    "食べる"
  ],
  [
    "N5",
    "飲",
    "いん・の",
    "trinken",
    "飲む"
  ],
  [
    "N5",
    "見",
    "けん・み",
    "sehen",
    "見る"
  ],
  [
    "N5",
    "聞",
    "ぶん・き",
    "hören / fragen",
    "聞く"
  ],
  [
    "N5",
    "話",
    "わ・はな",
    "sprechen",
    "話す"
  ],
  [
    "N5",
    "読",
    "どく・よ",
    "lesen",
    "読む"
  ],
  [
    "N5",
    "書",
    "しょ・か",
    "schreiben",
    "書く"
  ],
  [
    "N5",
    "買",
    "ばい・か",
    "kaufen",
    "買う"
  ],
  [
    "N5",
    "行",
    "こう・い",
    "gehen",
    "行く"
  ],
  [
    "N5",
    "来",
    "らい・く",
    "kommen",
    "来る"
  ],
  [
    "N5",
    "車",
    "しゃ・くるま",
    "Auto / Fahrzeug",
    "電車"
  ],
  [
    "N5",
    "電",
    "でん",
    "Elektrizität",
    "電車"
  ],
  [
    "N5",
    "駅",
    "えき",
    "Bahnhof",
    "東京駅"
  ],
  [
    "N5",
    "店",
    "てん・みせ",
    "Geschäft",
    "店"
  ],
  [
    "N5",
    "道",
    "どう・みち",
    "Weg",
    "道"
  ],
  [
    "N4",
    "会",
    "かい・あ",
    "treffen / Versammlung",
    "会社・会う"
  ],
  [
    "N4",
    "社",
    "しゃ",
    "Firma / Schrein",
    "会社"
  ],
  [
    "N4",
    "者",
    "しゃ・もの",
    "Person",
    "医者"
  ],
  [
    "N4",
    "事",
    "じ・こと",
    "Sache / Ereignis",
    "仕事"
  ],
  [
    "N4",
    "物",
    "ぶつ・もの",
    "Ding",
    "食べ物"
  ],
  [
    "N4",
    "方",
    "ほう・かた",
    "Richtung / Person",
    "方法"
  ],
  [
    "N4",
    "地",
    "ち・じ",
    "Erde / Gebiet",
    "地下"
  ],
  [
    "N4",
    "場",
    "じょう・ば",
    "Ort",
    "場所"
  ],
  [
    "N4",
    "所",
    "しょ・ところ",
    "Ort",
    "住所"
  ],
  [
    "N4",
    "自",
    "じ・みずか",
    "selbst",
    "自分"
  ],
  [
    "N4",
    "動",
    "どう・うご",
    "bewegen",
    "動物"
  ],
  [
    "N4",
    "作",
    "さく・つく",
    "machen",
    "作文"
  ],
  [
    "N3",
    "関",
    "かん・せき",
    "Beziehung / Schranke",
    "関係"
  ],
  [
    "N3",
    "係",
    "けい・かかり",
    "Bezug / zuständig",
    "関係"
  ],
  [
    "N3",
    "情",
    "じょう・なさ",
    "Gefühl / Information",
    "情報"
  ],
  [
    "N3",
    "報",
    "ほう・むく",
    "Meldung / berichten",
    "情報"
  ],
  [
    "N3",
    "状",
    "じょう",
    "Zustand / Form",
    "状況"
  ],
  [
    "N3",
    "況",
    "きょう",
    "Situation",
    "状況"
  ],
  [
    "N3",
    "影",
    "えい・かげ",
    "Schatten / Einfluss",
    "影響"
  ],
  [
    "N3",
    "響",
    "きょう・ひび",
    "Wirkung / klingen",
    "影響"
  ],
  [
    "N2",
    "判",
    "はん",
    "Urteil",
    "判断"
  ],
  [
    "N2",
    "断",
    "だん・た",
    "abschneiden / urteilen",
    "判断"
  ],
  [
    "N2",
    "維",
    "い",
    "erhalten",
    "維持"
  ],
  [
    "N2",
    "持",
    "じ・も",
    "halten",
    "維持"
  ],
  [
    "N2",
    "傾",
    "けい・かたむ",
    "neigen",
    "傾向"
  ],
  [
    "N2",
    "向",
    "こう・む",
    "Richtung",
    "傾向"
  ],
  [
    "N1",
    "概",
    "がい",
    "ungefähr / Konzept",
    "概念"
  ],
  [
    "N1",
    "念",
    "ねん",
    "Gedanke",
    "概念"
  ],
  [
    "N1",
    "妥",
    "だ",
    "angemessen",
    "妥当"
  ],
  [
    "N1",
    "遂",
    "すい・と",
    "durchführen",
    "遂行"
  ],
  [
    "N1",
    "顕",
    "けん",
    "deutlich",
    "顕著"
  ],
  [
    "N1",
    "著",
    "ちょ・あらわ",
    "deutlich / verfassen",
    "顕著"
  ],
  [
    "N4",
    "同",
    "どう・おな",
    "gleich",
    "同じ"
  ],
  [
    "N4",
    "使",
    "し・つか",
    "benutzen",
    "使う"
  ],
  [
    "N4",
    "思",
    "し・おも",
    "denken",
    "思う"
  ],
  [
    "N4",
    "持",
    "じ・も",
    "halten",
    "持つ"
  ],
  [
    "N4",
    "待",
    "たい・ま",
    "warten",
    "待つ"
  ],
  [
    "N4",
    "終",
    "しゅう・お",
    "Ende",
    "終わる"
  ],
  [
    "N4",
    "始",
    "し・はじ",
    "beginnen",
    "始める"
  ],
  [
    "N4",
    "着",
    "ちゃく・き",
    "ankommen / tragen",
    "到着・着る"
  ],
  [
    "N4",
    "服",
    "ふく",
    "Kleidung",
    "洋服"
  ],
  [
    "N4",
    "送",
    "そう・おく",
    "schicken",
    "送る"
  ],
  [
    "N4",
    "度",
    "ど・たび",
    "Grad / Mal",
    "一度"
  ],
  [
    "N4",
    "借",
    "しゃく・か",
    "leihen",
    "借りる"
  ],
  [
    "N4",
    "貸",
    "たい・か",
    "verleihen",
    "貸す"
  ],
  [
    "N4",
    "返",
    "へん・かえ",
    "zurückgeben",
    "返す"
  ],
  [
    "N4",
    "教",
    "きょう・おし",
    "lehren",
    "教える"
  ],
  [
    "N4",
    "習",
    "しゅう・なら",
    "lernen",
    "習う"
  ],
  [
    "N4",
    "勉",
    "べん",
    "Anstrengung",
    "勉強"
  ],
  [
    "N4",
    "強",
    "きょう・つよ",
    "stark",
    "勉強・強い"
  ],
  [
    "N4",
    "旅",
    "りょ・たび",
    "Reise",
    "旅行"
  ],
  [
    "N4",
    "館",
    "かん",
    "Gebäude / Halle",
    "図書館"
  ],
  [
    "N4",
    "図",
    "ず・と",
    "Plan / Zeichnung",
    "地図"
  ],
  [
    "N4",
    "館",
    "かん",
    "Halle / Gebäude",
    "映画館"
  ],
  [
    "N4",
    "映",
    "えい・うつ",
    "projizieren",
    "映画"
  ],
  [
    "N4",
    "画",
    "が・かく",
    "Bild",
    "映画"
  ],
  [
    "N4",
    "音",
    "おん・おと",
    "Ton",
    "音楽"
  ],
  [
    "N4",
    "楽",
    "がく・たの",
    "Musik / angenehm",
    "音楽・楽しい"
  ],
  [
    "N4",
    "歌",
    "か・うた",
    "Lied",
    "歌う"
  ],
  [
    "N4",
    "医",
    "い",
    "Medizin",
    "医者"
  ],
  [
    "N4",
    "病",
    "びょう・や",
    "Krankheit",
    "病院"
  ],
  [
    "N4",
    "院",
    "いん",
    "Institution",
    "病院"
  ],
  [
    "N4",
    "薬",
    "やく・くすり",
    "Medizin",
    "薬"
  ],
  [
    "N4",
    "体",
    "たい・からだ",
    "Körper",
    "体"
  ],
  [
    "N4",
    "心",
    "しん・こころ",
    "Herz / Geist",
    "心配"
  ],
  [
    "N4",
    "配",
    "はい・くば",
    "verteilen",
    "心配"
  ],
  [
    "N4",
    "理",
    "り",
    "Grund / Logik",
    "理由"
  ],
  [
    "N4",
    "由",
    "ゆ・よし",
    "Grund / Ursache",
    "理由"
  ],
  [
    "N4",
    "計",
    "けい・はか",
    "messen / planen",
    "計画"
  ],
  [
    "N4",
    "画",
    "が・かく",
    "Plan / Bild",
    "計画"
  ],
  [
    "N4",
    "予",
    "よ",
    "vorher",
    "予定"
  ],
  [
    "N4",
    "定",
    "てい・さだ",
    "festlegen",
    "予定"
  ],
  [
    "N4",
    "約",
    "やく",
    "ungefähr / Versprechen",
    "予約"
  ],
  [
    "N4",
    "連",
    "れん・つら",
    "verbinden",
    "連絡"
  ],
  [
    "N4",
    "絡",
    "らく・から",
    "verwickeln",
    "連絡"
  ],
  [
    "N4",
    "相",
    "そう・あい",
    "gegenseitig",
    "相談"
  ],
  [
    "N4",
    "談",
    "だん",
    "Gespräch",
    "相談"
  ],
  [
    "N4",
    "説",
    "せつ・と",
    "Erklärung",
    "説明"
  ],
  [
    "N4",
    "明",
    "めい・あか",
    "hell / klar",
    "説明"
  ],
  [
    "N4",
    "選",
    "せん・えら",
    "wählen",
    "選ぶ"
  ],
  [
    "N4",
    "運",
    "うん・はこ",
    "transportieren / Glück",
    "運転"
  ],
  [
    "N4",
    "転",
    "てん・ころ",
    "drehen",
    "運転"
  ],
  [
    "N4",
    "空",
    "くう・そら",
    "leer / Himmel",
    "空港"
  ],
  [
    "N4",
    "港",
    "こう・みなと",
    "Hafen",
    "空港"
  ],
  [
    "N4",
    "発",
    "はつ",
    "Abfahrt / starten",
    "出発"
  ],
  [
    "N4",
    "到",
    "とう",
    "ankommen",
    "到着"
  ],
  [
    "N4",
    "着",
    "ちゃく・き",
    "ankommen / tragen",
    "到着"
  ],
  [
    "N4",
    "住",
    "じゅう・す",
    "wohnen",
    "住所"
  ],
  [
    "N4",
    "所",
    "しょ・ところ",
    "Ort",
    "場所"
  ],
  [
    "N4",
    "地",
    "ち・じ",
    "Erde / Gebiet",
    "地図"
  ],
  [
    "N4",
    "図",
    "ず",
    "Karte / Plan",
    "地図"
  ],
  [
    "N4",
    "京",
    "きょう",
    "Hauptstadt",
    "東京・京都"
  ],
  [
    "N4",
    "県",
    "けん",
    "Präfektur",
    "県"
  ],
  [
    "N4",
    "市",
    "し・いち",
    "Stadt / Markt",
    "市"
  ],
  [
    "N4",
    "町",
    "ちょう・まち",
    "Stadt / Viertel",
    "町"
  ],
  [
    "N4",
    "村",
    "そん・むら",
    "Dorf",
    "村"
  ],
  [
    "N4",
    "区",
    "く",
    "Bezirk",
    "区"
  ],
  [
    "N4",
    "都",
    "と・みやこ",
    "Metropole",
    "東京都"
  ],
  [
    "N4",
    "府",
    "ふ",
    "Präfektur",
    "大阪府"
  ],
  [
    "N4",
    "屋",
    "おく・や",
    "Haus / Laden",
    "屋上"
  ],
  [
    "N4",
    "室",
    "しつ・むろ",
    "Zimmer",
    "教室"
  ],
  [
    "N4",
    "階",
    "かい",
    "Stockwerk",
    "二階"
  ],
  [
    "N4",
    "建",
    "けん・た",
    "bauen",
    "建物"
  ],
  [
    "N4",
    "物",
    "ぶつ・もの",
    "Ding",
    "建物"
  ],
  [
    "N4",
    "工",
    "こう",
    "Handwerk",
    "工場"
  ],
  [
    "N4",
    "場",
    "じょう・ば",
    "Ort",
    "工場"
  ],
  [
    "N4",
    "店",
    "てん・みせ",
    "Geschäft",
    "店員"
  ],
  [
    "N4",
    "員",
    "いん",
    "Mitglied / Angestellte",
    "店員"
  ],
  [
    "N4",
    "員",
    "いん",
    "Personal",
    "駅員"
  ],
  [
    "N4",
    "員",
    "いん",
    "Mitglied",
    "会社員"
  ],
  [
    "N4",
    "会",
    "かい",
    "Treffen / Firma",
    "会社"
  ],
  [
    "N4",
    "社",
    "しゃ",
    "Firma",
    "会社"
  ],
  [
    "N4",
    "仕",
    "し",
    "dienen",
    "仕事"
  ],
  [
    "N4",
    "事",
    "じ・こと",
    "Sache",
    "仕事"
  ],
  [
    "N4",
    "業",
    "ぎょう・わざ",
    "Beruf / Tätigkeit",
    "卒業"
  ],
  [
    "N4",
    "卒",
    "そつ",
    "Abschluss",
    "卒業"
  ],
  [
    "N4",
    "研",
    "けん・と",
    "schärfen / forschen",
    "研究"
  ],
  [
    "N4",
    "究",
    "きゅう・きわ",
    "erforschen",
    "研究"
  ],
  [
    "N4",
    "質",
    "しつ",
    "Qualität / Frage",
    "質問"
  ],
  [
    "N4",
    "問",
    "もん・と",
    "Frage",
    "質問"
  ],
  [
    "N4",
    "答",
    "とう・こた",
    "Antwort",
    "答え"
  ],
  [
    "N4",
    "題",
    "だい",
    "Thema / Aufgabe",
    "問題"
  ],
  [
    "N4",
    "問",
    "もん・と",
    "Frage",
    "問題"
  ],
  [
    "N4",
    "試",
    "し・こころ",
    "versuchen / Prüfung",
    "試験"
  ],
  [
    "N4",
    "験",
    "けん",
    "Erfahrung / Prüfung",
    "試験"
  ],
  [
    "N4",
    "宿",
    "しゅく・やど",
    "Unterkunft",
    "宿題"
  ],
  [
    "N4",
    "題",
    "だい",
    "Aufgabe",
    "宿題"
  ],
  [
    "N4",
    "文",
    "ぶん・ふみ",
    "Text",
    "文章"
  ],
  [
    "N4",
    "章",
    "しょう",
    "Kapitel",
    "文章"
  ],
  [
    "N4",
    "字",
    "じ・あざ",
    "Zeichen",
    "漢字"
  ],
  [
    "N4",
    "漢",
    "かん",
    "chinesisch",
    "漢字"
  ],
  [
    "N4",
    "英",
    "えい",
    "englisch / hervorragend",
    "英語"
  ],
  [
    "N4",
    "語",
    "ご・かた",
    "Sprache",
    "英語"
  ],
  [
    "N4",
    "意",
    "い",
    "Absicht / Bedeutung",
    "意味"
  ],
  [
    "N4",
    "味",
    "み・あじ",
    "Geschmack / Bedeutung",
    "意味"
  ],
  [
    "N4",
    "発",
    "はつ",
    "Ausgabe / Start",
    "発音"
  ],
  [
    "N4",
    "音",
    "おん・おと",
    "Ton",
    "発音"
  ],
  [
    "N4",
    "読",
    "どく・よ",
    "lesen",
    "読書"
  ],
  [
    "N4",
    "書",
    "しょ・か",
    "schreiben",
    "読書"
  ],
  [
    "N4",
    "紙",
    "し・かみ",
    "Papier",
    "紙"
  ],
  [
    "N4",
    "写",
    "しゃ・うつ",
    "kopieren",
    "写真"
  ],
  [
    "N4",
    "真",
    "しん・ま",
    "wahr",
    "写真"
  ],
  [
    "N4",
    "色",
    "しょく・いろ",
    "Farbe",
    "色"
  ],
  [
    "N4",
    "赤",
    "せき・あか",
    "rot",
    "赤い"
  ],
  [
    "N4",
    "青",
    "せい・あお",
    "blau",
    "青い"
  ],
  [
    "N4",
    "白",
    "はく・しろ",
    "weiß",
    "白い"
  ],
  [
    "N4",
    "黒",
    "こく・くろ",
    "schwarz",
    "黒い"
  ],
  [
    "N4",
    "茶",
    "ちゃ",
    "Tee / braun",
    "お茶"
  ],
  [
    "N4",
    "春",
    "しゅん・はる",
    "Frühling",
    "春"
  ],
  [
    "N4",
    "夏",
    "か・なつ",
    "Sommer",
    "夏"
  ],
  [
    "N4",
    "秋",
    "しゅう・あき",
    "Herbst",
    "秋"
  ],
  [
    "N4",
    "冬",
    "とう・ふゆ",
    "Winter",
    "冬"
  ],
  [
    "N4",
    "朝",
    "ちょう・あさ",
    "Morgen",
    "朝"
  ],
  [
    "N4",
    "昼",
    "ちゅう・ひる",
    "Mittag",
    "昼"
  ],
  [
    "N4",
    "夜",
    "や・よる",
    "Nacht",
    "夜"
  ],
  [
    "N4",
    "夕",
    "せき・ゆう",
    "Abend",
    "夕方"
  ],
  [
    "N4",
    "方",
    "ほう・かた",
    "Richtung / Person",
    "夕方"
  ],
  [
    "N4",
    "曜",
    "よう",
    "Wochentag",
    "曜日"
  ],
  [
    "N4",
    "週",
    "しゅう",
    "Woche",
    "一週間"
  ],
  [
    "N4",
    "毎",
    "まい",
    "jede/r/s",
    "毎日"
  ],
  [
    "N4",
    "去",
    "きょ・さ",
    "vergehen",
    "去年"
  ],
  [
    "N4",
    "来",
    "らい・く",
    "kommen",
    "来年"
  ],
  [
    "N4",
    "今",
    "こん・いま",
    "jetzt",
    "今年"
  ],
  [
    "N4",
    "早",
    "そう・はや",
    "früh",
    "早い"
  ],
  [
    "N4",
    "遅",
    "ち・おそ",
    "spät",
    "遅い"
  ],
  [
    "N4",
    "近",
    "きん・ちか",
    "nah",
    "近い"
  ],
  [
    "N4",
    "遠",
    "えん・とお",
    "weit",
    "遠い"
  ],
  [
    "N4",
    "弱",
    "じゃく・よわ",
    "schwach",
    "弱い"
  ],
  [
    "N4",
    "重",
    "じゅう・おも",
    "schwer",
    "重い"
  ],
  [
    "N4",
    "軽",
    "けい・かる",
    "leicht",
    "軽い"
  ],
  [
    "N4",
    "太",
    "たい・ふと",
    "dick",
    "太い"
  ],
  [
    "N4",
    "細",
    "さい・ほそ",
    "dünn",
    "細い"
  ],
  [
    "N4",
    "広",
    "こう・ひろ",
    "weit",
    "広い"
  ],
  [
    "N4",
    "狭",
    "きょう・せま",
    "eng",
    "狭い"
  ],
  [
    "N4",
    "悪",
    "あく・わる",
    "schlecht",
    "悪い"
  ],
  [
    "N4",
    "特",
    "とく",
    "besonders",
    "特別"
  ],
  [
    "N4",
    "別",
    "べつ・わか",
    "getrennt",
    "特別"
  ],
  [
    "N4",
    "便",
    "べん・びん",
    "praktisch / Post",
    "便利"
  ],
  [
    "N4",
    "利",
    "り",
    "Vorteil",
    "便利"
  ],
  [
    "N4",
    "不",
    "ふ",
    "nicht",
    "不便"
  ],
  [
    "N4",
    "切",
    "せつ・き",
    "schneiden / wichtig",
    "大切"
  ],
  [
    "N4",
    "親",
    "しん・おや",
    "Eltern / vertraut",
    "親切"
  ],
  [
    "N4",
    "急",
    "きゅう・いそ",
    "dringend",
    "急行"
  ],
  [
    "N4",
    "通",
    "つう・とお",
    "durchgehen",
    "交通"
  ],
  [
    "N4",
    "交",
    "こう・まじ",
    "Verkehr / Austausch",
    "交通"
  ],
  [
    "N4",
    "道",
    "どう・みち",
    "Weg",
    "道路"
  ],
  [
    "N4",
    "路",
    "ろ・じ",
    "Straße",
    "道路"
  ],
  [
    "N4",
    "橋",
    "きょう・はし",
    "Brücke",
    "橋"
  ],
  [
    "N4",
    "駐",
    "ちゅう",
    "parken",
    "駐車場"
  ],
  [
    "N4",
    "車",
    "しゃ・くるま",
    "Fahrzeug",
    "駐車場"
  ],
  [
    "N4",
    "荷",
    "か・に",
    "Gepäck",
    "荷物"
  ],
  [
    "N4",
    "物",
    "ぶつ・もの",
    "Ding",
    "荷物"
  ],
  [
    "N4",
    "旅",
    "りょ・たび",
    "Reise",
    "旅館"
  ],
  [
    "N4",
    "館",
    "かん",
    "Gebäude",
    "旅館"
  ],
  [
    "N4",
    "予",
    "よ",
    "vorher",
    "予約"
  ],
  [
    "N4",
    "約",
    "やく",
    "Reservierung / ungefähr",
    "予約"
  ],
  [
    "N4",
    "案",
    "あん",
    "Plan / Vorschlag",
    "案内"
  ],
  [
    "N4",
    "内",
    "ない・うち",
    "innen",
    "案内"
  ],
  [
    "N4",
    "世",
    "せい・よ",
    "Welt / Generation",
    "世界"
  ],
  [
    "N4",
    "界",
    "かい",
    "Welt",
    "世界"
  ],
  [
    "N4",
    "文",
    "ぶん・ふみ",
    "Kultur / Text",
    "文化"
  ],
  [
    "N4",
    "化",
    "か・ば",
    "Veränderung",
    "文化"
  ],
  [
    "N4",
    "歴",
    "れき",
    "Geschichte",
    "歴史"
  ],
  [
    "N4",
    "史",
    "し",
    "Geschichte",
    "歴史"
  ],
  [
    "N4",
    "政",
    "せい",
    "Politik",
    "政治"
  ],
  [
    "N4",
    "治",
    "じ・おさ",
    "regieren / heilen",
    "政治"
  ],
  [
    "N4",
    "経",
    "けい・へ",
    "durchgehen",
    "経済"
  ],
  [
    "N4",
    "済",
    "さい・す",
    "beenden",
    "経済"
  ],
  [
    "N4",
    "法",
    "ほう",
    "Gesetz / Methode",
    "法律"
  ],
  [
    "N4",
    "律",
    "りつ",
    "Regel",
    "法律"
  ],
  [
    "N4",
    "教",
    "きょう・おし",
    "Lehre",
    "教育"
  ],
  [
    "N4",
    "育",
    "いく・そだ",
    "erziehen",
    "教育"
  ],
  [
    "N4",
    "育",
    "いく・そだ",
    "aufziehen",
    "育てる"
  ],
  [
    "N4",
    "産",
    "さん・う",
    "produzieren",
    "生産"
  ],
  [
    "N4",
    "業",
    "ぎょう",
    "Industrie",
    "産業"
  ],
  [
    "N4",
    "農",
    "のう",
    "Landwirtschaft",
    "農業"
  ],
  [
    "N4",
    "貿",
    "ぼう",
    "Handel",
    "貿易"
  ],
  [
    "N4",
    "易",
    "えき・やさ",
    "Handel / leicht",
    "貿易"
  ],
  [
    "N4",
    "科",
    "か",
    "Fach / Wissenschaft",
    "科学"
  ],
  [
    "N4",
    "学",
    "がく・まな",
    "lernen",
    "科学"
  ],
  [
    "N4",
    "医",
    "い",
    "Medizin",
    "医学"
  ],
  [
    "N4",
    "技",
    "ぎ・わざ",
    "Technik",
    "技術"
  ],
  [
    "N4",
    "術",
    "じゅつ",
    "Kunst / Technik",
    "技術"
  ],
  [
    "N4",
    "情",
    "じょう・なさ",
    "Gefühl / Information",
    "情報"
  ],
  [
    "N4",
    "報",
    "ほう・むく",
    "Meldung",
    "情報"
  ],
  [
    "N4",
    "新",
    "しん・あたら",
    "neu",
    "新聞"
  ],
  [
    "N4",
    "聞",
    "ぶん・き",
    "hören",
    "新聞"
  ],
  [
    "N4",
    "番",
    "ばん",
    "Nummer / Reihenfolge",
    "番号"
  ],
  [
    "N4",
    "号",
    "ごう",
    "Nummer",
    "番号"
  ],
  [
    "N4",
    "受",
    "じゅ・う",
    "empfangen",
    "受付"
  ],
  [
    "N4",
    "付",
    "ふ・つ",
    "anhaften",
    "受付"
  ],
  [
    "N4",
    "連",
    "れん",
    "verbinden",
    "連絡"
  ],
  [
    "N4",
    "絡",
    "らく",
    "verwickeln",
    "連絡"
  ],
  [
    "N4",
    "相",
    "そう",
    "gegenseitig",
    "相談"
  ],
  [
    "N4",
    "注",
    "ちゅう・そそ",
    "Aufmerksamkeit",
    "注意"
  ],
  [
    "N4",
    "意",
    "い",
    "Absicht",
    "注意"
  ],
  [
    "N4",
    "危",
    "き・あぶ",
    "gefährlich",
    "危険"
  ],
  [
    "N4",
    "険",
    "けん・けわ",
    "gefährlich",
    "危険"
  ],
  [
    "N4",
    "安",
    "あん・やす",
    "sicher / billig",
    "安全"
  ],
  [
    "N4",
    "全",
    "ぜん・まった",
    "ganz",
    "安全"
  ],
  [
    "N4",
    "健",
    "けん・すこ",
    "gesund",
    "健康"
  ],
  [
    "N4",
    "康",
    "こう",
    "gesund",
    "健康"
  ],
  [
    "N4",
    "活",
    "かつ・い",
    "Leben / aktiv",
    "生活"
  ],
  [
    "N4",
    "生",
    "せい・い",
    "Leben",
    "生活"
  ],
  [
    "N4",
    "慣",
    "かん・な",
    "gewöhnen",
    "慣れる"
  ],
  [
    "N4",
    "残",
    "ざん・のこ",
    "übrig",
    "残る"
  ],
  [
    "N4",
    "増",
    "ぞう・ふ",
    "zunehmen",
    "増える"
  ],
  [
    "N4",
    "減",
    "げん・へ",
    "abnehmen",
    "減る"
  ],
  [
    "N4",
    "比",
    "ひ・くら",
    "vergleichen",
    "比べる"
  ],
  [
    "N4",
    "較",
    "かく",
    "vergleichen",
    "比較"
  ],
  [
    "N4",
    "選",
    "せん・えら",
    "auswählen",
    "選ぶ"
  ],
  [
    "N4",
    "決",
    "けつ・き",
    "entscheiden",
    "決める"
  ],
  [
    "N4",
    "必",
    "ひつ・かなら",
    "unbedingt",
    "必要"
  ],
  [
    "N4",
    "要",
    "よう・い",
    "notwendig",
    "必要"
  ],
  [
    "N4",
    "準",
    "じゅん",
    "Standard / Vorbereitung",
    "準備"
  ],
  [
    "N4",
    "備",
    "び・そな",
    "vorbereiten",
    "準備"
  ]
];
  const VERBS = [
  {
    "dict": "食べる",
    "type": "Ichidan",
    "meaning": "essen",
    "masu": "食べます",
    "negative": "食べない",
    "past": "食べた",
    "te": "食べて",
    "potential": "食べられる"
  },
  {
    "dict": "見る",
    "type": "Ichidan",
    "meaning": "sehen",
    "masu": "見ます",
    "negative": "見ない",
    "past": "見た",
    "te": "見て",
    "potential": "見られる"
  },
  {
    "dict": "行く",
    "type": "Godan",
    "meaning": "gehen",
    "masu": "行きます",
    "negative": "行かない",
    "past": "行った",
    "te": "行って",
    "potential": "行ける"
  },
  {
    "dict": "書く",
    "type": "Godan",
    "meaning": "schreiben",
    "masu": "書きます",
    "negative": "書かない",
    "past": "書いた",
    "te": "書いて",
    "potential": "書ける"
  },
  {
    "dict": "読む",
    "type": "Godan",
    "meaning": "lesen",
    "masu": "読みます",
    "negative": "読まない",
    "past": "読んだ",
    "te": "読んで",
    "potential": "読める"
  },
  {
    "dict": "話す",
    "type": "Godan",
    "meaning": "sprechen",
    "masu": "話します",
    "negative": "話さない",
    "past": "話した",
    "te": "話して",
    "potential": "話せる"
  },
  {
    "dict": "する",
    "type": "unregelmäßig",
    "meaning": "machen",
    "masu": "します",
    "negative": "しない",
    "past": "した",
    "te": "して",
    "potential": "できる"
  },
  {
    "dict": "来る",
    "type": "unregelmäßig",
    "meaning": "kommen",
    "masu": "来ます",
    "negative": "来ない",
    "past": "来た",
    "te": "来て",
    "potential": "来られる"
  }
];
  const COUNTERS = [
  [
    "人",
    "にん",
    "Menschen",
    "一人 ひとり・二人 ふたり・三人 さんにん"
  ],
  [
    "本",
    "ほん",
    "lange zylindrische Dinge",
    "一本 いっぽん・三本 さんぼん・六本 ろっぽん"
  ],
  [
    "枚",
    "まい",
    "flache Dinge",
    "一枚 いちまい・三枚 さんまい"
  ],
  [
    "匹",
    "ひき",
    "kleine Tiere",
    "一匹 いっぴき・三匹 さんびき・六匹 ろっぴき"
  ],
  [
    "台",
    "だい",
    "Maschinen/Fahrzeuge",
    "一台 いちだい・二台 にだい"
  ],
  [
    "回",
    "かい",
    "Male / Wiederholungen",
    "一回 いっかい・三回 さんかい"
  ],
  [
    "冊",
    "さつ",
    "gebundene Bücher",
    "一冊 いっさつ・八冊 はっさつ"
  ],
  [
    "個",
    "こ",
    "kleine Gegenstände",
    "一個 いっこ・六個 ろっこ"
  ]
];
  const CONFUSIONS = [
  [
    "ぬ",
    "め",
    "Hiragana"
  ],
  [
    "れ",
    "ね",
    "Hiragana"
  ],
  [
    "さ",
    "き",
    "Hiragana"
  ],
  [
    "シ",
    "ツ",
    "Katakana"
  ],
  [
    "ソ",
    "ン",
    "Katakana"
  ],
  [
    "ク",
    "ケ",
    "Katakana"
  ],
  [
    "フ",
    "ワ",
    "Katakana"
  ],
  [
    "ロ",
    "口",
    "Katakana/Kanji"
  ]
];
  const LESSONS = [
  {
    "id": "n5-01",
    "level": "N5",
    "title": "です & は",
    "summary": "Aussagesätze und das Thema eines Satzes",
    "explanation": "です macht eine Aussage höflich. は markiert das Thema. Es wird als 'wa' gesprochen.",
    "examples": [
      [
        "私は学生です。",
        "Ich bin Student/in."
      ],
      [
        "これは本です。",
        "Das hier ist ein Buch."
      ]
    ],
    "tip": "は schreibt man hier 'ha', spricht es aber 'wa'."
  },
  {
    "id": "n5-02",
    "level": "N5",
    "title": "か",
    "summary": "Fragen bilden",
    "explanation": "Mit か am Satzende wird eine höfliche Aussage zur Frage.",
    "examples": [
      [
        "学生ですか。",
        "Sind Sie Student/in?"
      ],
      [
        "日本人ですか。",
        "Sind Sie Japaner/in?"
      ]
    ],
    "tip": "In höflichen Sätzen reicht か meist aus; die Wortstellung bleibt gleich."
  },
  {
    "id": "n5-03",
    "level": "N5",
    "title": "の",
    "summary": "Besitz und Zugehörigkeit",
    "explanation": "A の B verbindet zwei Nomen. B gehört zu A oder wird durch A näher bestimmt.",
    "examples": [
      [
        "私の本",
        "mein Buch"
      ],
      [
        "日本の車",
        "ein japanisches Auto"
      ]
    ],
    "tip": "Die Reihenfolge ist oft umgekehrt zum Deutschen: Japan の Buch."
  },
  {
    "id": "n5-04",
    "level": "N5",
    "title": "を",
    "summary": "Direktes Objekt",
    "explanation": "を markiert, worauf sich eine Handlung direkt richtet.",
    "examples": [
      [
        "水を飲みます。",
        "Ich trinke Wasser."
      ],
      [
        "本を読みます。",
        "Ich lese ein Buch."
      ]
    ],
    "tip": "を wird als 'o' gesprochen."
  },
  {
    "id": "n5-05",
    "level": "N5",
    "title": "に & へ",
    "summary": "Zeitpunkt und Richtung",
    "explanation": "に markiert u. a. einen konkreten Zeitpunkt oder Zielpunkt. へ betont die Richtung.",
    "examples": [
      [
        "七時に起きます。",
        "Ich stehe um sieben auf."
      ],
      [
        "日本へ行きます。",
        "Ich fahre nach Japan."
      ]
    ],
    "tip": "Bei Richtungen sind に und へ häufig beide möglich, mit leicht anderer Nuance."
  },
  {
    "id": "n5-06",
    "level": "N5",
    "title": "で",
    "summary": "Ort einer Handlung",
    "explanation": "で markiert den Ort, an dem eine Handlung stattfindet, oder ein Mittel.",
    "examples": [
      [
        "学校で勉強します。",
        "Ich lerne in der Schule."
      ],
      [
        "電車で行きます。",
        "Ich fahre mit dem Zug."
      ]
    ],
    "tip": "Existenz mit あります/います verwendet dagegen häufig に."
  },
  {
    "id": "n5-07",
    "level": "N5",
    "title": "あります & います",
    "summary": "Es gibt / sich befinden",
    "explanation": "あります wird für unbelebte Dinge verwendet, います für Menschen und Tiere.",
    "examples": [
      [
        "机があります。",
        "Es gibt einen Schreibtisch."
      ],
      [
        "猫がいます。",
        "Es gibt eine Katze."
      ]
    ],
    "tip": "Bei Ort + Existenz: 机の上に本があります。"
  },
  {
    "id": "n5-08",
    "level": "N5",
    "title": "い-Adjektive",
    "summary": "Adjektive wie 高い, 大きい, 暑い",
    "explanation": "い-Adjektive können direkt vor Nomen stehen oder einen Satz abschließen.",
    "examples": [
      [
        "高い車です。",
        "Es ist ein teures Auto."
      ],
      [
        "今日は暑いです。",
        "Heute ist es heiß."
      ]
    ],
    "tip": "Die Verneinung endet typischerweise auf ～くないです."
  },
  {
    "id": "n5-09",
    "level": "N5",
    "title": "な-Adjektive",
    "summary": "Adjektive wie 静か, 便利, 元気",
    "explanation": "Vor einem Nomen brauchen viele dieser Adjektive な. Als Prädikat steht es ohne な.",
    "examples": [
      [
        "静かな町です。",
        "Es ist eine ruhige Stadt."
      ],
      [
        "この町は静かです。",
        "Diese Stadt ist ruhig."
      ]
    ],
    "tip": "きれい sieht wie ein い-Adjektiv aus, ist aber ein な-Adjektiv."
  },
  {
    "id": "n5-10",
    "level": "N5",
    "title": "ます-Form",
    "summary": "Höfliche Verben in Gegenwart/Zukunft",
    "explanation": "Die ます-Form ist eine höfliche Verbform für Gewohnheiten, Gegenwart und Zukunft.",
    "examples": [
      [
        "食べます。",
        "Ich esse / werde essen."
      ],
      [
        "行きます。",
        "Ich gehe / werde gehen."
      ]
    ],
    "tip": "Japanische Verben verändern sich nicht nach Person."
  },
  {
    "id": "n5-11",
    "level": "N5",
    "title": "ません",
    "summary": "Höfliche Verneinung",
    "explanation": "～ません ist die höfliche negative Form.",
    "examples": [
      [
        "食べません。",
        "Ich esse nicht."
      ],
      [
        "行きません。",
        "Ich gehe nicht."
      ]
    ],
    "tip": "Zeitangaben entscheiden oft, ob Gegenwart oder Zukunft gemeint ist."
  },
  {
    "id": "n5-12",
    "level": "N5",
    "title": "ました & ませんでした",
    "summary": "Vergangenheit",
    "explanation": "～ました ist höfliche Vergangenheit, ～ませんでした die höfliche negative Vergangenheit.",
    "examples": [
      [
        "昨日勉強しました。",
        "Gestern habe ich gelernt."
      ],
      [
        "昨日行きませんでした。",
        "Gestern bin ich nicht gegangen."
      ]
    ],
    "tip": "Die Vergangenheit steckt im Verbende."
  },
  {
    "id": "n5-13",
    "level": "N5",
    "title": "て-Form",
    "summary": "Grundform für viele Konstruktionen",
    "explanation": "Die て-Form verbindet Handlungen und ist Basis für zahlreiche Grammatikmuster.",
    "examples": [
      [
        "食べてください。",
        "Bitte essen Sie."
      ],
      [
        "見てください。",
        "Bitte schauen Sie."
      ]
    ],
    "tip": "Die Bildung hängt von der Verbgruppe ab; deshalb lohnt sich gezieltes Üben."
  },
  {
    "id": "n5-14",
    "level": "N5",
    "title": "～てください",
    "summary": "Höfliche Bitte",
    "explanation": "Verb in て-Form + ください bedeutet 'Bitte tun Sie …'.",
    "examples": [
      [
        "待ってください。",
        "Bitte warten Sie."
      ],
      [
        "座ってください。",
        "Bitte setzen Sie sich."
      ]
    ],
    "tip": "Direkt, aber höflich – sehr nützlich im Alltag."
  },
  {
    "id": "n5-15",
    "level": "N5",
    "title": "～てもいいです",
    "summary": "Erlaubnis",
    "explanation": "て-Form + もいいです bedeutet, dass etwas erlaubt ist.",
    "examples": [
      [
        "ここに座ってもいいです。",
        "Man darf hier sitzen."
      ],
      [
        "写真を撮ってもいいです。",
        "Man darf ein Foto machen."
      ]
    ],
    "tip": "Als Frage: ～てもいいですか。"
  },
  {
    "id": "n5-16",
    "level": "N5",
    "title": "～てはいけません",
    "summary": "Verbot",
    "explanation": "て-Form + はいけません bedeutet 'man darf nicht …'.",
    "examples": [
      [
        "ここで食べてはいけません。",
        "Hier darf man nicht essen."
      ],
      [
        "入ってはいけません。",
        "Man darf nicht hineingehen."
      ]
    ],
    "tip": "Das Gegenstück zu ～てもいいです."
  },
  {
    "id": "n5-17",
    "level": "N5",
    "title": "～たいです",
    "summary": "Wünsche ausdrücken",
    "explanation": "Verbstamm + たいです bedeutet 'möchte … tun'.",
    "examples": [
      [
        "日本へ行きたいです。",
        "Ich möchte nach Japan fahren."
      ],
      [
        "寿司を食べたいです。",
        "Ich möchte Sushi essen."
      ]
    ],
    "tip": "たい verhält sich grammatisch ähnlich wie ein い-Adjektiv."
  },
  {
    "id": "n5-18",
    "level": "N5",
    "title": "～ませんか / ～ましょう",
    "summary": "Einladen und vorschlagen",
    "explanation": "～ませんか ist eine höfliche Einladung; ～ましょう bedeutet 'Lass uns …'.",
    "examples": [
      [
        "一緒に行きませんか。",
        "Wollen wir zusammen gehen?"
      ],
      [
        "行きましょう。",
        "Lass uns gehen."
      ]
    ],
    "tip": "～ませんか klingt oft etwas weicher als ～ましょう."
  },
  {
    "id": "n5-19",
    "level": "N5",
    "title": "好き / 嫌い",
    "summary": "Vorlieben",
    "explanation": "好き und 嫌い verwenden häufig が für das, was man mag oder nicht mag.",
    "examples": [
      [
        "日本語が好きです。",
        "Ich mag Japanisch."
      ],
      [
        "魚が嫌いです。",
        "Ich mag Fisch nicht."
      ]
    ],
    "tip": "Nicht automatisch を verwenden, obwohl das im Deutschen wie ein Objekt wirkt."
  },
  {
    "id": "n5-20",
    "level": "N5",
    "title": "Zähler",
    "summary": "Dinge korrekt zählen",
    "explanation": "Japanisch verwendet je nach Art des Gegenstands unterschiedliche Zählwörter.",
    "examples": [
      [
        "りんごを三個ください。",
        "Drei Äpfel bitte."
      ],
      [
        "本を二冊買います。",
        "Ich kaufe zwei Bücher."
      ]
    ],
    "tip": "Bei einigen Zählern ändern sich Laute, z. B. 一本 いっぽん."
  },
  {
    "id": "n4-01",
    "level": "N4",
    "title": "～ながら",
    "summary": "Zwei Handlungen gleichzeitig",
    "explanation": "Die ます-Stammform + ながら verbindet zwei gleichzeitig ausgeführte Handlungen. Die wichtigere Handlung steht meist am Satzende.",
    "examples": [
      [
        "音楽を聞きながら勉強します。",
        "Ich lerne, während ich Musik höre."
      ],
      [
        "歩きながら話しました。",
        "Wir haben gesprochen, während wir gingen."
      ]
    ],
    "tip": "Das Subjekt beider Handlungen ist normalerweise gleich."
  },
  {
    "id": "n4-02",
    "level": "N4",
    "title": "～たことがある",
    "summary": "Erfahrungen ausdrücken",
    "explanation": "Verb in た-Form + ことがある bedeutet, etwas schon einmal erlebt oder getan zu haben.",
    "examples": [
      [
        "日本へ行ったことがあります。",
        "Ich war schon einmal in Japan."
      ],
      [
        "納豆を食べたことがありません。",
        "Ich habe noch nie Natto gegessen."
      ]
    ],
    "tip": "Für ein konkretes Ereignis gestern etc. verwendet man die normale Vergangenheit, nicht dieses Muster."
  },
  {
    "id": "n4-03",
    "level": "N4",
    "title": "～たり～たりする",
    "summary": "Beispiele von Handlungen nennen",
    "explanation": "Mit たり-Formen nennt man beispielhaft mehrere Aktivitäten, ohne eine vollständige Liste zu behaupten.",
    "examples": [
      [
        "本を読んだり映画を見たりします。",
        "Ich lese unter anderem Bücher und schaue Filme."
      ],
      [
        "週末は掃除したり買い物したりしました。",
        "Am Wochenende habe ich unter anderem geputzt und eingekauft."
      ]
    ],
    "tip": "Am Ende steht する bzw. eine konjugierte Form davon."
  },
  {
    "id": "n4-04",
    "level": "N4",
    "title": "～なければならない",
    "summary": "Pflicht und Notwendigkeit",
    "explanation": "Die negative ない-Form wird zu ～なければならない: etwas muss getan werden.",
    "examples": [
      [
        "薬を飲まなければなりません。",
        "Ich muss Medizin nehmen."
      ],
      [
        "明日早く起きなければなりません。",
        "Ich muss morgen früh aufstehen."
      ]
    ],
    "tip": "Im Gespräch hört man oft kürzere Varianten wie ～なきゃ."
  },
  {
    "id": "n4-05",
    "level": "N4",
    "title": "～なくてもいい",
    "summary": "Etwas nicht tun müssen",
    "explanation": "Die ない-Form + なくてもいい bedeutet, dass etwas nicht notwendig ist.",
    "examples": [
      [
        "明日は来なくてもいいです。",
        "Du musst morgen nicht kommen."
      ],
      [
        "全部食べなくてもいいです。",
        "Du musst nicht alles essen."
      ]
    ],
    "tip": "Nicht mit ～てはいけない verwechseln: Das bedeutet 'nicht dürfen'."
  },
  {
    "id": "n4-06",
    "level": "N4",
    "title": "～かもしれない",
    "summary": "Möglichkeit ausdrücken",
    "explanation": "～かもしれない bedeutet 'vielleicht / möglicherweise'. Es zeigt geringere Sicherheit als でしょう.",
    "examples": [
      [
        "午後は雨かもしれません。",
        "Vielleicht regnet es am Nachmittag."
      ],
      [
        "彼は来ないかもしれません。",
        "Vielleicht kommt er nicht."
      ]
    ],
    "tip": "Höflich: ～かもしれません."
  },
  {
    "id": "n4-07",
    "level": "N4",
    "title": "～でしょう",
    "summary": "Vermutung und Bestätigung",
    "explanation": "でしょう drückt eine relativ wahrscheinliche Vermutung aus oder bittet um Bestätigung.",
    "examples": [
      [
        "明日は寒いでしょう。",
        "Morgen wird es wahrscheinlich kalt."
      ],
      [
        "これは田中さんの本でしょう。",
        "Das ist doch Tanakas Buch, oder?"
      ]
    ],
    "tip": "Im lockeren Stil: だろう."
  },
  {
    "id": "n4-08",
    "level": "N4",
    "title": "～そうだ",
    "summary": "Anschein und Hörensagen",
    "explanation": "そうだ kann je nach Anschluss entweder 'sieht so aus' oder 'ich habe gehört, dass' bedeuten.",
    "examples": [
      [
        "雨が降りそうです。",
        "Es sieht nach Regen aus."
      ],
      [
        "田中さんは休むそうです。",
        "Ich habe gehört, dass Tanaka frei nimmt."
      ]
    ],
    "tip": "Die Form vor そう ist je nach Bedeutung unterschiedlich."
  },
  {
    "id": "n4-09",
    "level": "N4",
    "title": "～つもりだ",
    "summary": "Absichten ausdrücken",
    "explanation": "Wörterbuchform + つもりだ bedeutet, dass man fest beabsichtigt, etwas zu tun.",
    "examples": [
      [
        "来年留学するつもりです。",
        "Ich habe vor, nächstes Jahr im Ausland zu studieren."
      ],
      [
        "今日は出かけないつもりです。",
        "Ich habe vor, heute nicht auszugehen."
      ]
    ],
    "tip": "Stärker als ein spontaner Gedanke."
  },
  {
    "id": "n4-10",
    "level": "N4",
    "title": "～予定だ",
    "summary": "Geplante Ereignisse",
    "explanation": "予定だ beschreibt einen Plan oder Termin, der bereits festgelegt ist.",
    "examples": [
      [
        "来月引っ越す予定です。",
        "Ich plane, nächsten Monat umzuziehen."
      ],
      [
        "会議は三時に始まる予定です。",
        "Die Besprechung soll um drei beginnen."
      ]
    ],
    "tip": "Für persönliche Absicht passt つもり oft besser."
  },
  {
    "id": "n4-11",
    "level": "N4",
    "title": "～ほうがいい",
    "summary": "Rat geben",
    "explanation": "Vergangenheit + ほうがいい empfiehlt eine Handlung; negative ない-Form + ほうがいい rät davon ab.",
    "examples": [
      [
        "早く寝たほうがいいです。",
        "Du solltest besser früh schlafen gehen."
      ],
      [
        "無理をしないほうがいいです。",
        "Du solltest dich nicht überfordern."
      ]
    ],
    "tip": "Es ist ein relativ direkter Rat."
  },
  {
    "id": "n4-12",
    "level": "N4",
    "title": "～すぎる",
    "summary": "Zu viel / zu sehr",
    "explanation": "Verbstamm oder Adjektivstamm + すぎる bedeutet, dass etwas übermäßig ist.",
    "examples": [
      [
        "食べすぎました。",
        "Ich habe zu viel gegessen."
      ],
      [
        "このかばんは高すぎます。",
        "Diese Tasche ist zu teuer."
      ]
    ],
    "tip": "Bei い-Adjektiven fällt das い weg: 高い → 高すぎる."
  },
  {
    "id": "n4-13",
    "level": "N4",
    "title": "～やすい / ～にくい",
    "summary": "Leicht oder schwer zu tun",
    "explanation": "Verbstamm + やすい bzw. にくい beschreibt, wie leicht oder schwer eine Handlung ist.",
    "examples": [
      [
        "この本は読みやすいです。",
        "Dieses Buch ist leicht zu lesen."
      ],
      [
        "この漢字は覚えにくいです。",
        "Dieses Kanji ist schwer zu merken."
      ]
    ],
    "tip": "Beide verhalten sich wie い-Adjektive."
  },
  {
    "id": "n4-14",
    "level": "N4",
    "title": "～てみる",
    "summary": "Etwas ausprobieren",
    "explanation": "て-Form + みる bedeutet, eine Handlung probeweise zu versuchen.",
    "examples": [
      [
        "この料理を食べてみます。",
        "Ich probiere dieses Gericht."
      ],
      [
        "日本語で話してみてください。",
        "Versuchen Sie bitte, auf Japanisch zu sprechen."
      ]
    ],
    "tip": "Nicht wörtlich als 'sehen' übersetzen."
  },
  {
    "id": "n4-15",
    "level": "N4",
    "title": "～ておく",
    "summary": "Vorbereitung im Voraus",
    "explanation": "て-Form + おく bedeutet, etwas vorbereitend oder vorsorglich zu tun.",
    "examples": [
      [
        "ホテルを予約しておきます。",
        "Ich reserviere das Hotel im Voraus."
      ],
      [
        "資料を読んでおいてください。",
        "Bitte lesen Sie die Unterlagen vorher."
      ]
    ],
    "tip": "Umgangssprachlich oft ～とく."
  },
  {
    "id": "n4-16",
    "level": "N4",
    "title": "～てしまう",
    "summary": "Abschluss oder Bedauern",
    "explanation": "て-Form + しまう kann ausdrücken, dass etwas vollständig abgeschlossen wird oder leider passiert ist.",
    "examples": [
      [
        "宿題を全部してしまいました。",
        "Ich habe die Hausaufgaben komplett erledigt."
      ],
      [
        "財布を忘れてしまいました。",
        "Ich habe leider mein Portemonnaie vergessen."
      ]
    ],
    "tip": "Umgangssprachlich oft ～ちゃう / ～じゃう."
  },
  {
    "id": "n4-17",
    "level": "N4",
    "title": "～てある",
    "summary": "Absichtlich hergestellter Zustand",
    "explanation": "Transitiver Verb in て-Form + ある beschreibt einen Zustand als Ergebnis einer absichtlichen Handlung.",
    "examples": [
      [
        "窓が開けてあります。",
        "Das Fenster wurde absichtlich geöffnet."
      ],
      [
        "名前が書いてあります。",
        "Der Name steht dort geschrieben."
      ]
    ],
    "tip": "Fokus liegt auf dem vorhandenen Ergebnis."
  },
  {
    "id": "n4-18",
    "level": "N4",
    "title": "～ところだ",
    "summary": "Zeitpunkt einer Handlung",
    "explanation": "Wörterbuchform, ている oder た + ところだ unterscheiden 'gerade im Begriff', 'gerade dabei' und 'gerade getan'.",
    "examples": [
      [
        "今から食べるところです。",
        "Ich bin gerade im Begriff zu essen."
      ],
      [
        "今食べているところです。",
        "Ich esse gerade."
      ]
    ],
    "tip": "Mit た: 今食べたところです = Ich habe gerade gegessen."
  },
  {
    "id": "n4-19",
    "level": "N4",
    "title": "～ようになる",
    "summary": "Veränderung einer Fähigkeit oder Gewohnheit",
    "explanation": "～ようになる beschreibt, dass etwas im Laufe der Zeit möglich oder üblich wird.",
    "examples": [
      [
        "日本語が話せるようになりました。",
        "Ich kann inzwischen Japanisch sprechen."
      ],
      [
        "早く起きるようになりました。",
        "Ich stehe inzwischen früh auf."
      ]
    ],
    "tip": "Es geht um eine Veränderung des Zustands."
  },
  {
    "id": "n4-20",
    "level": "N4",
    "title": "～ようにする",
    "summary": "Bewusst auf etwas achten",
    "explanation": "～ようにする beschreibt eine bewusste Bemühung oder Gewohnheit.",
    "examples": [
      [
        "毎日歩くようにしています。",
        "Ich achte darauf, täglich zu gehen."
      ],
      [
        "夜遅く食べないようにしています。",
        "Ich versuche, nachts nicht spät zu essen."
      ]
    ],
    "tip": "Vergleiche ようになる: dort geschieht die Veränderung eher als Ergebnis."
  },
  {
    "id": "n4-21",
    "level": "N4",
    "title": "～ので / ～のに",
    "summary": "Grund und Gegensatz",
    "explanation": "ので gibt einen Grund höflicher/weicher an; のに drückt einen unerwarteten Gegensatz aus.",
    "examples": [
      [
        "雨なので出かけません。",
        "Weil es regnet, gehe ich nicht aus."
      ],
      [
        "勉強したのに忘れました。",
        "Obwohl ich gelernt habe, habe ich es vergessen."
      ]
    ],
    "tip": "ので klingt oft sachlicher als から."
  },
  {
    "id": "n4-22",
    "level": "N4",
    "title": "～し",
    "summary": "Mehrere Gründe oder Eigenschaften",
    "explanation": "し verbindet mehrere Gründe oder Merkmale und lässt oft offen, dass es noch weitere gibt.",
    "examples": [
      [
        "安いし、おいしいです。",
        "Es ist günstig und außerdem lecker."
      ],
      [
        "駅も近いし、便利です。",
        "Der Bahnhof ist nah und es ist praktisch."
      ]
    ],
    "tip": "Sehr nützlich für Begründungen."
  },
  {
    "id": "n4-23",
    "level": "N4",
    "title": "～なら",
    "summary": "Themenbezogene Bedingung",
    "explanation": "なら bedeutet ungefähr 'wenn es um X geht / falls X der Fall ist'.",
    "examples": [
      [
        "京都なら春がおすすめです。",
        "Wenn es um Kyoto geht, empfehle ich den Frühling."
      ],
      [
        "時間がないなら、明日にしましょう。",
        "Wenn du keine Zeit hast, machen wir es morgen."
      ]
    ],
    "tip": "Oft reagiert なら auf Information aus dem vorherigen Gespräch."
  },
  {
    "id": "n4-24",
    "level": "N4",
    "title": "～たら",
    "summary": "Flexible Bedingung",
    "explanation": "たら kann 'wenn', 'falls' oder 'nachdem' bedeuten.",
    "examples": [
      [
        "家に帰ったら電話します。",
        "Wenn ich zu Hause bin, rufe ich an."
      ],
      [
        "雨だったら行きません。",
        "Wenn es regnet, gehe ich nicht."
      ]
    ],
    "tip": "Sehr vielseitig und im Alltag häufig."
  },
  {
    "id": "n4-25",
    "level": "N4",
    "title": "～ば",
    "summary": "Bedingung",
    "explanation": "Die ば-Form drückt eine Bedingung aus: wenn X, dann Y.",
    "examples": [
      [
        "時間があれば行きます。",
        "Wenn ich Zeit habe, gehe ich."
      ],
      [
        "安ければ買います。",
        "Wenn es günstig ist, kaufe ich es."
      ]
    ],
    "tip": "Die Bildung unterscheidet sich bei Verben und Adjektiven."
  },
  {
    "id": "n4-26",
    "level": "N4",
    "title": "～と",
    "summary": "Automatische Folge",
    "explanation": "Konditionales と wird für natürliche, automatische oder wiederkehrende Folgen verwendet.",
    "examples": [
      [
        "春になると暖かくなります。",
        "Wenn Frühling wird, wird es warm."
      ],
      [
        "このボタンを押すとドアが開きます。",
        "Wenn man diesen Knopf drückt, öffnet sich die Tür."
      ]
    ],
    "tip": "Nicht ideal für persönliche Willensentscheidungen im Folgesatz."
  },
  {
    "id": "n4-27",
    "level": "N4",
    "title": "～ても",
    "summary": "Auch wenn",
    "explanation": "て-Form + も bedeutet, dass der Folgesatz trotz der Bedingung gilt.",
    "examples": [
      [
        "雨が降っても行きます。",
        "Auch wenn es regnet, gehe ich."
      ],
      [
        "高くても買いたいです。",
        "Auch wenn es teuer ist, möchte ich es kaufen."
      ]
    ],
    "tip": "Adjektive und Nomen haben eigene Anschlussformen."
  },
  {
    "id": "n4-28",
    "level": "N4",
    "title": "～しか～ない",
    "summary": "Nur / nichts außer",
    "explanation": "しか steht mit einer negativen Verbform und bedeutet 'nur'.",
    "examples": [
      [
        "千円しかありません。",
        "Ich habe nur 1000 Yen."
      ],
      [
        "一人しか来ませんでした。",
        "Nur eine Person kam."
      ]
    ],
    "tip": "Obwohl die Bedeutung positiv wirkt, ist das Verb negativ."
  },
  {
    "id": "n4-29",
    "level": "N4",
    "title": "～について",
    "summary": "Über ein Thema",
    "explanation": "Nomen + について bedeutet 'über / bezüglich'.",
    "examples": [
      [
        "日本文化について勉強します。",
        "Ich lerne über japanische Kultur."
      ],
      [
        "この問題について話しましょう。",
        "Lass uns über dieses Problem sprechen."
      ]
    ],
    "tip": "In formelleren Texten sehr häufig."
  },
  {
    "id": "n4-30",
    "level": "N4",
    "title": "～によると",
    "summary": "Quelle einer Information",
    "explanation": "Nomen + によると bedeutet 'laut / gemäß'.",
    "examples": [
      [
        "天気予報によると、明日は雨です。",
        "Laut Wetterbericht regnet es morgen."
      ],
      [
        "ニュースによると、電車が遅れています。",
        "Laut Nachrichten hat der Zug Verspätung."
      ]
    ],
    "tip": "Danach steht häufig そうだ oder eine andere Informationsform."
  },
  {
    "id": "n4-31",
    "level": "N4",
    "title": "～までに",
    "summary": "Frist",
    "explanation": "までに bedeutet 'bis spätestens zu einem Zeitpunkt'.",
    "examples": [
      [
        "五時までに帰ってください。",
        "Bitte kommen Sie bis fünf Uhr zurück."
      ],
      [
        "金曜日までに出してください。",
        "Bitte geben Sie es bis Freitag ab."
      ]
    ],
    "tip": "まで = bis andauernd; までに = spätestens bis."
  },
  {
    "id": "n4-32",
    "level": "N4",
    "title": "～間に",
    "summary": "Während eines Zeitraums",
    "explanation": "間に markiert eine Handlung, die innerhalb eines Zeitraums stattfindet.",
    "examples": [
      [
        "子どもが寝ている間に勉強します。",
        "Ich lerne, während das Kind schläft."
      ],
      [
        "日本にいる間に京都へ行きたいです。",
        "Während ich in Japan bin, möchte ich nach Kyoto."
      ]
    ],
    "tip": "間 ohne に betont eher die gesamte Dauer."
  },
  {
    "id": "n4-33",
    "level": "N4",
    "title": "～ために",
    "summary": "Zweck",
    "explanation": "Wörterbuchform + ために beschreibt einen Zweck. Auch Nomen + のために ist möglich.",
    "examples": [
      [
        "日本で働くために勉強しています。",
        "Ich lerne, um in Japan zu arbeiten."
      ],
      [
        "健康のために歩きます。",
        "Ich gehe meiner Gesundheit zuliebe spazieren."
      ]
    ],
    "tip": "Für Fähigkeiten oder unbeabsichtigte Ergebnisse wird oft ように verwendet."
  },
  {
    "id": "n4-34",
    "level": "N4",
    "title": "～方",
    "summary": "Wie man etwas tut",
    "explanation": "Verbstamm + 方 bedeutet 'Art und Weise, etwas zu tun'.",
    "examples": [
      [
        "使い方を教えてください。",
        "Bitte zeigen Sie mir, wie man es benutzt."
      ],
      [
        "漢字の読み方が分かりません。",
        "Ich kenne die Lesung des Kanji nicht."
      ]
    ],
    "tip": "方 wird hier かた gelesen."
  },
  {
    "id": "n4-35",
    "level": "N4",
    "title": "～かどうか",
    "summary": "Ob oder nicht",
    "explanation": "～かどうか bettet eine Ja/Nein-Frage in einen größeren Satz ein.",
    "examples": [
      [
        "行くかどうかまだ決めていません。",
        "Ich habe noch nicht entschieden, ob ich gehe."
      ],
      [
        "開いているかどうか確認します。",
        "Ich prüfe, ob es geöffnet ist."
      ]
    ],
    "tip": "Bei Fragewörtern verwendet man direkt Fragewort + か."
  }
];


  const ROMAJI_MAP = {
  "A の B": "A no B",
  "A は B です": "A wa B desu",
  "A も B": "A mo B",
  "Zähler": "Z ä h l e r",
  "あなた": "anata",
  "あなたの意見を聞きたいです。": "anata no iken wo kikitaidesu.",
  "あなたは先生ですか。": "anata ha sensei desu ka.",
  "あの人は先生です。": "a no にん ha sensei de su.",
  "あの人は誰ですか。": "a no にん ha dare desu ka.",
  "ありがとう": "arigatō",
  "ありがとうございます。": "arigatō go za i ma su.",
  "あります & います": "a ri ma su & i ma su",
  "あります / います": "arimasu / imasu",
  "い-Adjektive": "i - A d j e k t i v e",
  "いい天気です。": "i i tenki de su.",
  "いい店を見つけました。": "i i ten / mise wo mitsukemashita.",
  "いい方法を考えます。": "i i hōhō wo kangaemasu.",
  "いくら": "ikura",
  "お土産": "omiyage",
  "お宅": "otaku",
  "お湯を沸かします。": "o yu wo wakashimasu.",
  "お祝い": "oiwai",
  "お茶": "ocha",
  "お茶でも飲みませんか。": "ocha demo nomimasenka.",
  "お茶を飲みます。": "ocha wo nomimasu.",
  "お金": "okane",
  "お金があります。": "okane ga a ri ma su.",
  "お金が足りません。": "okane ga tarimasen.",
  "お願いします": "onegaishimasu",
  "か": "ka",
  "かどうか": "ka dō ka",
  "かばんを持っています。": "ka ba n wo ji / mo tteimasu.",
  "かもしれない": "kamo shirenai",
  "き": "ki",
  "きれい": "kirei",
  "ここから山が見えます。": "ko ko ka ra yama ga miemasu.",
  "ここで写真を撮ってはいけません。": "ko ko de shashin wo tottewaikemasen.",
  "ここで食べてはいけません。": "ko ko de tabetewaikemasen.",
  "ここで食べてもいいです。": "ko ko de tabetemoiidesu.",
  "ここに座ってください。": "ko ko ni suwattekudasai.",
  "ここに座ってもいいです。": "ko ko ni suwattemoiidesu.",
  "ここは危険です。": "ko ko ha kiken de su.",
  "ここは安全です。": "ko ko ha anzen de su.",
  "ここは少し不便です。": "ko ko ha sukoshi fuben de su.",
  "このかばんは高いです。": "ko no ka ba n ha takai de su.",
  "このかばんは高すぎます。": "ko no ka ba n ha takasugimasu.",
  "このアプリは便利です。": "ko no apuri ha benri de su.",
  "このサービスを利用します。": "ko no sābisu wo riyō shi ma su.",
  "このスープは味が薄いです。": "ko no sūpu ha mi / aji ga usuidesu.",
  "このペンを使います。": "ko no pe n wo tsukaimasu.",
  "このボタンを押すとドアが開きます。": "ko no botan wo osutodoaga akimasu.",
  "この問題について話しましょう。": "ko no mondai ni tsuite hanashimashou.",
  "この問題は易しいです。": "ko no mondai ha yasashii de su.",
  "この問題は簡単です。": "ko no mondai ha kantan de su.",
  "この国は貿易が盛んです。": "ko no kuni ha bōeki ga sakandesu.",
  "この坂は急です。": "ko no saka ha kyuu / iso de su.",
  "この店は安いし、おいしいです。": "ko no ten / mise ha yasui shi, o i shi i de su.",
  "この店は安いです。": "ko no ten / mise ha yasui de su.",
  "この店をご存じですか。": "ko no ten / mise wo gozonji desu ka.",
  "この料理を食べてみます。": "ko no ryōri wo tabetemimasu.",
  "この本は読みやすいです。": "ko no ほん ha yomiyasuidesu.",
  "この本は面白いです。": "ko no ほん ha omoshiroi de su.",
  "この漢字は覚えにくいです。": "ko no kanji ha oboenikuidesu.",
  "この町は交通が便利です。": "ko no chou / machi ha kōtsū ga benri de su.",
  "この町は静かです。": "ko no chou / machi ha shizuka de su.",
  "この箱は変わった形です。": "ko no hako ha kawatta katachi de su.",
  "この辞書は役に立ちます。": "ko no jisho ha yaku ni tachimasu.",
  "この部屋は静かです。": "ko no heya ha shizuka de su.",
  "これはいくらですか。": "ko re ha ikura desu ka.",
  "これは何ですか。": "ko re ha nani / nan desu ka.",
  "これは必要です。": "ko re ha hitsuyō de su.",
  "これは本です。": "ko re ha ほん de su.",
  "これは田中さんの本でしょう。": "ko re ha tanaka sa n no ほん deshō.",
  "ごみを捨てます。": "go mi wo sutemasu.",
  "ご存じ": "gozonji",
  "ご飯": "gohan",
  "ご飯を食べます。": "gohan wo tabemasu.",
  "さ": "sa",
  "し": "shi",
  "しかない": "shika nai",
  "した": "shi ta",
  "して": "shi te",
  "しない": "shi na i",
  "します": "shi ma su",
  "すぎる": "sugiru",
  "すぐ戻ります。": "su gu modorimasu.",
  "すみません": "sumimasen",
  "すみません、駅はどこですか。": "sumimasen, eki ha doko desu ka.",
  "する": "su ru",
  "そうだ": "so u da",
  "その判断は妥当です。": "so no handan ha datō de su.",
  "その話を聞いて悲しくなりました。": "so no wa / wana wo bun / ki i te kanashishikunarimashita.",
  "そんなに心配しないでください。": "so n na ni shinpai shi na i de ku da sa i.",
  "たいです": "tai desu",
  "たことがある": "ta koto ga aru",
  "ために": "tame ni",
  "たら": "tara",
  "たりたりする": "tari tari suru",
  "つもりだ": "tsumori da",
  "て-Form": "te - F o r m",
  "てある": "te aru",
  "ておく": "te oku",
  "てください": "te kudasai",
  "てしまう": "te shimau",
  "てはいけません": "te wa ikemasen",
  "てみる": "te miru",
  "ても": "te mo",
  "てもいいです": "te mo ii desu",
  "で": "de",
  "できる": "de ki ru",
  "でしょう": "deshō",
  "です & は": "de su & ha",
  "と": "to",
  "ところだ": "to ko ro da",
  "どこ": "doko",
  "どの国から来ましたか。": "do no kuni ka ra rai / ku ma shi ta ka.",
  "な-Adjektive": "na - A d j e k t i v e",
  "ながら": "nagara",
  "なくてもいい": "nakute mo ii",
  "なければならない": "nakereba naranai",
  "なら": "nara",
  "に & へ": "ni & he",
  "にぎやか": "nigiyaka",
  "について": "ni tsuite",
  "によると": "ni yoru to",
  "ぬ": "nu",
  "ね": "ne",
  "の": "no",
  "ので / のに": "node / noni",
  "ば": "ba",
  "ほうがいい": "hō ga ii",
  "ました & ませんでした": "ma shi ta & ma se n de shi ta",
  "ます-Form": "ma su - F o r m",
  "ません": "ma se n",
  "ませんか / ましょう": "masen ka / mashō",
  "また明日。": "ma ta ashita.",
  "までに": "made ni",
  "みんなで笑いました。": "mi n na de waraimashita.",
  "め": "me",
  "やすい / にくい": "yasui / nikui",
  "ようにする": "yō ni suru",
  "ようになる": "yō ni naru",
  "りんごを三個ください。": "ri n go wo sanko ku da sa i.",
  "れ": "re",
  "を": "wo",
  "エアコンが故障しました。": "eakon ga koshō shi ma shi ta.",
  "カードで払います。": "kādo de haraimasu.",
  "ガス": "gasu",
  "ガスを止めてください。": "gasu wo tometekudasai.",
  "ク": "ku",
  "ケ": "ke",
  "コースに申し込みました。": "kōsu ni mōshikomimashita.",
  "シ": "shi",
  "スーパーで買い物します。": "sūpā de kai butsu / mono shi ma su.",
  "ソ": "so",
  "ツ": "tsu",
  "ドア": "doa",
  "ドアを閉めます。": "doa wo shimemasu.",
  "ニュースによると、電車が遅れています。": "nyūsu ni yoru to, densha ga chi / oso re te i ma su.",
  "バスの運転手です。": "basu no untenshu de su.",
  "パスポートが必要です。": "pasupōto ga hitsuyō de su.",
  "パソコンが壊れました。": "pasokon ga kowaremashita.",
  "パン": "pan",
  "パンを買います。": "pan wo kaimasu.",
  "フ": "fu",
  "プレゼントを包みます。": "purezento wo tsutsumimasu.",
  "ホテルに泊まります。": "hoteru ni tomarimasu.",
  "ホテルを予約しておきます。": "hoteru wo yoyaku shi te o ki ma su.",
  "ホテルを予約しました。": "hoteru wo yoyaku shi ma shi ta.",
  "ロ": "ro",
  "ワ": "wa",
  "ン": "n",
  "一": "ichi",
  "一万円": "ichi man en",
  "一人": "hitori",
  "一人しか来ませんでした。": "hitori shi ka rai / ku ma se n de shi ta.",
  "一度": "ichido",
  "一度日本へ行きたいです。": "ichido nihon he ikitaidesu.",
  "一生懸命": "isshōkenmei",
  "一生懸命勉強しています。": "isshōkenmei benkyō shi te i ma su.",
  "一緒に行きませんか。": "issho ni ikimasenka.",
  "一週間": "isshūkan",
  "一週間休みます。": "isshūkan yasumimasu.",
  "丁寧": "teinei",
  "丁寧に書いてください。": "teinei ni sho / ka i te kudasai.",
  "七": "shichi / nana",
  "七時": "shichi-ji",
  "七時に出発します。": "shichi-ji ni shuppatsu shi ma su.",
  "七時に起きます。": "shichi-ji ni okimasu.",
  "七時半": "shichi-ji wan",
  "七月": "shichi / nana getsu / tsuki",
  "万": "man",
  "三": "san",
  "三人": "san にん",
  "上": "jou / ue",
  "下": "ka / shita",
  "下がる": "sagaru",
  "下げる": "sageru",
  "不": "fu",
  "不便": "fuben",
  "世": "sei / yo",
  "世界": "sei / yo kai",
  "両方": "ryōhō",
  "両方好きです。": "ryōhō suki de su.",
  "中": "chuu / naka",
  "中国": "chuu / naka kuni",
  "乗り換える": "norikaeru",
  "乗る": "noru",
  "九": "kyuu",
  "九時から五時まで。": "ku-ji ka ra go-ji ma de.",
  "九時に駅に着きます。": "ku-ji ni eki ni tsukimasu.",
  "九月": "kyuu getsu / tsuki",
  "乾く": "kawaku",
  "予": "yo",
  "予定": "yotei",
  "予定が変わりました。": "yotei ga kawarimashita.",
  "予定だ": "yotei da",
  "予約": "yoyaku",
  "事": "ji / koto",
  "事故の原因を調べます。": "jiko no gen'in wo shirabemasu.",
  "二": "ni",
  "二つの商品を比べます。": "ni tsu no shōhin wo kurabemasu.",
  "二つを比べます。": "ni tsu wo kurabemasu.",
  "二人": "ni にん",
  "二階": "ni-kai",
  "五": "go",
  "五時までに帰ってください。": "go-ji made ni kaettekudasai.",
  "五月": "go getsu / tsuki",
  "交": "kou / maji",
  "交通": "kōtsū",
  "京": "kyou",
  "京都なら春がおすすめです。": "kyōto nara shun / waru ga o su su me de su.",
  "京都を見物しました。": "kyōto wo kenbutsu shi ma shi ta.",
  "人": "にん",
  "人口": "jinkō",
  "人口の増加に伴って問題も増えます。": "jinkō no zōka ni tomonatte mondai mo fuemasu.",
  "今": "kon / ima",
  "今から出かけるところです。": "kon / ima ka ra dekakerutokorodesu.",
  "今から食べるところです。": "kon / ima ka ra taberu to ko ro de su.",
  "今ご飯を食べているところです。": "kon / ima gohan wo tabeteirutokorodesu.",
  "今の気持ちを話してください。": "kon / ima no kimochi wo hanashitekudasai.",
  "今何時ですか。": "kon / ima nani / nan ji / toki desu ka.",
  "今帰ったところです。": "kon / ima kaettatokorodesu.",
  "今年": "kon / ima nen / toshi",
  "今度": "kondo",
  "今度一緒に行きましょう。": "kondo issho ni ikimashou.",
  "今日": "kyō",
  "今日はいい天気です。": "kyō ha i i tenki de su.",
  "今日はとても眠いです。": "kyō ha to te mo nemui de su.",
  "今日は出かけないつもりです。": "kyō ha dekakenaitsumoridesu.",
  "今日は忙しいです。": "kyō ha isogashii de su.",
  "今日は暑いです。": "kyō ha atsui de su.",
  "今日は暖かいです。": "kyō ha atatakai de su.",
  "今食べているところです。": "kon / ima tabeteirutokorodesu.",
  "仕": "shi",
  "仕事": "shigoto",
  "仕事と生活の関係です。": "shigoto to seikatsu no kankei de su.",
  "仕事と生活は関係があります。": "shigoto to seikatsu ha kankei ga a ri ma su.",
  "仕事の後で買い物します。": "shigoto no ato de kai butsu / mono shi ma su.",
  "仕事は五時に終わります。": "shigoto ha go-ji ni owarimasu.",
  "付": "fu / tsu",
  "以下": "ika",
  "以外": "igai",
  "休みの日は本を読んだり映画を見たりします。": "yasumino hi ha ほん wo doku / yo n da ri eiga wo ken / mi ta ri shi ma su.",
  "休む": "yasumu",
  "会": "kai",
  "会う": "au",
  "会場": "kaijō",
  "会場は二階です。": "kaijō ha ni-kai de su.",
  "会社": "kaisha",
  "会社で働きます。": "kaisha de hatarakimasu.",
  "会社・会う": "kaisha ・ au",
  "会社員": "kaisha in",
  "会話": "kaiwa",
  "会議": "kaigi",
  "会議は三時に始まる予定です。": "kaigi ha san-ji ni hajimaru yotei de su.",
  "伝える": "tsutaeru",
  "似る": "niru",
  "住": "juu / su",
  "住む": "sumu",
  "住所": "jūsho",
  "住所を書いてください。": "jūsho wo sho / ka i te kudasai.",
  "体": "karada",
  "体の具合はどうですか。": "karada no guai ha do u desu ka.",
  "何": "nani / nan",
  "作": "saku / tsuku",
  "作る": "tsukuru",
  "作文": "saku / tsuku bun / fumi",
  "使": "shi / tsuka",
  "使い方を教えてください。": "tsukai hou / kata wo oshietekudasai.",
  "使い方を説明します。": "tsukai hou / kata wo setsumei shi ma su.",
  "使う": "tsukau",
  "便": "ben / bin",
  "便利": "benri",
  "係": "kei / kakari",
  "倍": "bai",
  "借": "shaku / ka",
  "借りる": "shaku / ka ri ru",
  "値段が二倍になりました。": "nedan ga ni-bai ni na ri ma shi ta.",
  "健": "ken / suko",
  "健康": "kenkō",
  "健康のために歩きます。": "kenkō no tame ni arukimasu.",
  "健康を維持します。": "kenkō wo iji shi ma su.",
  "備": "bi / sona",
  "傾": "kei / katamu",
  "傾向": "keikō",
  "働く": "hataraku",
  "元気": "genki",
  "元気ですか。": "genki desu ka.",
  "先": "sen / saki",
  "先生": "sensei",
  "先生が日本語を教えます。": "sensei ga nihongo wo oshiemasu.",
  "先生が説明します。": "sensei ga setsumei shi ma su.",
  "先生にお土産を差し上げました。": "sensei ni omiyage wo sashiagemashita.",
  "先生に伝えてください。": "sensei ni tsutaetekudasai.",
  "先生に相談します。": "sensei ni sōdan shi ma su.",
  "先生は明日休みだと言いました。": "sensei ha ashita yasumidato iimashita.",
  "光": "hikari",
  "入ってはいけません。": "haittewaikemasen.",
  "入る": "hairu",
  "入口": "hai kou / kuchi",
  "入院": "nyūin",
  "全": "zen / matta",
  "全部食べなくてもいいです。": "zenbu tabenakutemoiidesu.",
  "八": "wachi",
  "八月": "wachi getsu / tsuki",
  "公園を走ります。": "kōen wo hashirimasu.",
  "六": "roku",
  "六月": "roku getsu / tsuki",
  "具合": "guai",
  "内": "nai / uchi",
  "円": "en",
  "写": "sha / utsu",
  "写真": "shashin",
  "写真を撮ってもいいです。": "shashin wo tottemoiidesu.",
  "写真を撮ります。": "shashin wo torimasu.",
  "冬": "tou / fuyu",
  "冬は寒いです。": "tou / fuyu ha samui de su.",
  "冷える": "hieru",
  "出る": "deru",
  "出発": "shuppatsu",
  "分": "bun / fun",
  "分かる": "wakaru",
  "切": "setsu / ki",
  "切る": "kiru",
  "判": "wan",
  "判断": "handan",
  "別": "betsu / waka",
  "利": "ri",
  "利用": "riyō",
  "到": "tou",
  "到着": "tou chaku / ki",
  "到着・着る": "tou chaku / ki ・ chaku / ki ru",
  "勉": "ben",
  "勉強": "benkyō",
  "勉強したのに忘れました。": "benkyō shi ta noni wasuremashita.",
  "勉強しなければなりません。": "benkyō shi na ke re ba na ri ma se n.",
  "勉強する": "benkyō suru",
  "勉強を始めます。": "benkyō wo hajimemasu.",
  "勉強を続けます。": "benkyō wo tsuzukemasu.",
  "勉強・強い": "benkyō ・ kyou / tsuyo i",
  "勉強時間を増やします。": "benkyō jikan wo fuyashimasu.",
  "動": "dou / ugo",
  "動物": "dou / ugo butsu / mono",
  "勝つ": "katsu",
  "包む": "tsutsumu",
  "化": "ka / ba",
  "区": "ku",
  "医": "i",
  "医学": "igaku",
  "医者": "i sha / mono",
  "十": "juu",
  "十一時に寝ます。": "jūichi-ji ni nemasu.",
  "十分": "jūbun",
  "十分待ってください。": "jūbun tai / ma ttekudasai.",
  "十月": "juu getsu / tsuki",
  "十歳以下は無料です。": "jussai ika ha muryō de su.",
  "千": "sen",
  "千円": "sen-en",
  "千円しかありません。": "sen-en shi ka a ri ma se n.",
  "千円です。": "sen-en de su.",
  "午後に会議があります。": "gogo ni kaigi ga a ri ma su.",
  "午後は雨かもしれません。": "gogo ha ame ka mo shi re ma se n.",
  "午後は雨が降るかもしれません。": "gogo ha ame ga furukamoshiremasen.",
  "半": "wan",
  "卒": "sotsu",
  "卒業": "sotsugyō",
  "危": "ki / abu",
  "危険": "kiken",
  "卵": "tamago",
  "卵を二つ買います。": "tamago wo ni tsu kaimasu.",
  "原因": "gen'in",
  "去": "kyo / sa",
  "去年": "kyo / sa nen / toshi",
  "友達": "tomodachi",
  "友達と話します。": "tomodachi to hanashimasu.",
  "友達に会います。": "tomodachi ni kai i ma su.",
  "友達に贈り物をしました。": "tomodachi ni okurimono wo shi ma shi ta.",
  "友達を紹介します。": "tomodachi wo shōkai shi ma su.",
  "友達を訪ねます。": "tomodachi wo tazunemasu.",
  "受": "ju / u",
  "受付": "uketsuke",
  "受付で名前を書いてください。": "uketsuke de namae wo sho / ka i te kudasai.",
  "口": "kou / kuchi",
  "古い": "furui",
  "古い車です。": "furui sha / kuruma de su.",
  "可能": "kanō",
  "史": "shi",
  "右": "migi",
  "右に曲がってください。": "migi ni magattekudasai.",
  "右へ曲がります。": "migi he magarimasu.",
  "号": "gou",
  "同": "dou / ona",
  "同じ": "dou / ona ji",
  "名前が書いてあります。": "namae ga sho / ka i te a ri ma su.",
  "名前を書きます。": "namae wo kakimasu.",
  "向": "kou / mu",
  "周り": "mawari",
  "味": "mi / aji",
  "員": "in",
  "問": "mon / to",
  "問題": "mondai",
  "問題に対応します。": "mondai ni taiō shi ma su.",
  "四": "shi / yon",
  "四月": "shi / yon getsu / tsuki",
  "図": "zu",
  "図書館": "zu sho / ka kan",
  "国": "kuni",
  "土": "do / tsuchi",
  "土曜日": "doyōbi",
  "土曜日に買い物します。": "doyōbi ni kai butsu / mono shi ma su.",
  "地": "chi / ji",
  "地下": "chi / ji ka / shita",
  "地図": "chi / ji zu",
  "坂": "saka",
  "報": "hou / muku",
  "場": "jou / ba",
  "場合": "baai",
  "場所": "jou / ba sho / tokoro",
  "増": "zou / fu",
  "増える": "fueru",
  "増やす": "fuyasu",
  "壊す": "kowasu",
  "壊れる": "kowareru",
  "変": "hen",
  "変な音がします。": "hen na oto ga shi ma su.",
  "変わる": "kawaru",
  "変更は可能です。": "hen kōwa kanō de su.",
  "夏": "ka / natsu",
  "夏は暑いです。": "ka / natsu ha atsui de su.",
  "夕": "seki / yuu",
  "夕ご飯を作ります。": "seki / yuu gohan wo tsukurimasu.",
  "夕方": "seki / yuu hou / kata",
  "外": "gai / soto",
  "外は寒いです。": "gai / soto ha samui de su.",
  "外国": "gai / soto kuni",
  "夜": "ya / yoru",
  "夜に勉強します。": "ya / yoru ni benkyō shi ma su.",
  "夜はかなり冷えます。": "ya / yoru ha ka na ri hiemasu.",
  "夜は涼しいです。": "ya / yoru ha suzushii de su.",
  "夜遅く食べないようにしています。": "ya / yoru chi / oso ku tabenaiyounishiteimasu.",
  "夜道は少し怖いです。": "ya / yoru michi ha sukoshi kowai de su.",
  "大": "dai / oo",
  "大きい": "ōkii",
  "大きい家です。": "ōkii ie de su.",
  "大丈夫": "daijōbu",
  "大丈夫です。": "daijōbu de su.",
  "大体": "daitai",
  "大体分かりました。": "daitai wakarimashita.",
  "大切": "taisetsu",
  "大学": "daigaku",
  "大学で医学を学んでいます。": "daigaku de igaku wo gaku / mana n de i ma su.",
  "大学で研究しています。": "daigaku de kenkyū shi te i ma su.",
  "大阪府": "ōsaka fu",
  "天気": "tenki",
  "天気が予定に影響します。": "tenki ga yotei ni eikyō shi ma su.",
  "天気予報によると、明日は雨です。": "tenki yohō ni yoru to, ashita ha ame de su.",
  "太": "tai / futo",
  "太い": "tai / futo i",
  "好き": "suki",
  "好き / 嫌い": "suki / kirai",
  "好きなものを選びます。": "suki na mo no wo sen / era bi ma su.",
  "好きなものを選んでください。": "suki na mo no wo sen / era n de ku da sa i.",
  "妥": "da",
  "妥当": "datō",
  "姉は看護師です。": "ane ha kangoshi de su.",
  "始": "shi / waji",
  "始まる": "hajimaru",
  "始める": "hajimeru",
  "嫌い": "kirai",
  "嫌いなわけではありません。": "kirai na wa ke de ha a ri ma se n.",
  "子どもが寝ている間に勉強します。": "ko do mo ga neteiru aida ni benkyō shi ma su.",
  "字": "ji / aza",
  "学": "gaku / mana",
  "学校": "gakkō",
  "学校で勉強します。": "gakkō de benkyō shi ma su.",
  "学校は遠いです。": "gakkō ha tōi de su.",
  "学校へ行きます。": "gakkō he ikimasu.",
  "学生": "gakusei",
  "学生です。": "gakusei de su.",
  "学生ですか。": "gakusei desu ka.",
  "安": "an / yasu",
  "安い": "yasui",
  "安いし、おいしいです。": "yasui shi, o i shi i de su.",
  "安ければ買います。": "an / yasu ke re ba kaimasu.",
  "安全": "anzen",
  "安心": "anshin",
  "定": "tei / sada",
  "室": "shitsu / muro",
  "家": "ie",
  "家に帰ったら電話します。": "ie ni kaettara denwa shi ma su.",
  "家に帰ります。": "ie ni kaeri ma su.",
  "家の周りは静かです。": "ie no mawari ha shizuka de su.",
  "家を出ます。": "ie wo demasu.",
  "家族": "kazoku",
  "家族と東京で暮らしています。": "kazoku to tōkyō de kurashiteimasu.",
  "家族にお土産を買いました。": "kazoku ni omiyage wo kaimashita.",
  "家族は四人です。": "kazoku ha yo-nin de su.",
  "宿": "shuku / yado",
  "宿題": "shukudai",
  "宿題を全部してしまいました。": "shukudai wo zenbu shi te shi ma i ma shi ta.",
  "富士山": "fujisan",
  "寒い": "samui",
  "寝る": "neru",
  "寝る前に歯を磨きます。": "neru mae ni ha wo migakimasu.",
  "対応": "taiō",
  "寿司を食べたいです。": "sushi wo tabetaidesu.",
  "寿司を食べます。": "sushi wo tabemasu.",
  "将来": "shōrai",
  "将来日本で働きたいです。": "shōrai Nihon de hatarakitaidesu.",
  "尋ねる": "tazuneru",
  "小": "shou / chii",
  "小さい": "chiisai",
  "小さい犬です。": "chiisai inu de su.",
  "小学校": "shou / chii gakkō",
  "小説": "shōsetsu",
  "少し考えてください。": "sukoshi kangaetekudasai.",
  "届ける": "todokeru",
  "屋": "oku / ya",
  "屋上": "okujō",
  "屋上から町が見えます。": "okujō ka ra chou / machi ga miemasu.",
  "山": "yama",
  "山の景色がきれいです。": "yama no keshiki ga kirei de su.",
  "川": "sen / kawa",
  "工": "kou",
  "工事が進んでいます。": "kōji ga susundeimasu.",
  "工場": "kōjō",
  "左": "hidari",
  "左にあります。": "hidari ni a ri ma su.",
  "差し上げる": "sashiageru",
  "市": "shi / ichi",
  "帰り": "kaeri",
  "帰りにスーパーへ寄ります。": "kaeri ni sūpā he yorimasu.",
  "帰る": "kaeru",
  "年": "nen / toshi",
  "広": "kou / hiro",
  "広い": "kou / hiro i",
  "店": "ten / mise",
  "店で買います。": "ten / mise de kaimasu.",
  "店員": "ten / mise in",
  "店員はとても親切でした。": "ten / mise in ha to te mo shinsetsu de shi ta.",
  "府": "fu",
  "度": "do / tabi",
  "座ってください。": "suwattekudasai.",
  "座る": "suwaru",
  "庭で野菜を育てています。": "niwa de yasai wo sodateteimasu.",
  "康": "kou",
  "建": "ken / ta",
  "建てる": "tateru",
  "建物": "ken / ta butsu / mono",
  "引っ越す": "hikkosu",
  "弱": "jaku / yowa",
  "弱い": "jaku / yowa i",
  "強": "kyou / tsuyo",
  "形": "katachi",
  "影": "ei / kage",
  "影響": "eikyō",
  "役に立つ": "yaku ni tatsu",
  "彼": "kare",
  "彼は会社員です。": "kare ha kaisha in de su.",
  "彼は来ないかもしれません。": "kare ha rai / ku na i ka mo shi re ma se n.",
  "彼は疲れているようです。": "kare ha tsukareteiruyoudesu.",
  "彼は知っているに違いない。": "kare ha shitteiruni chigainai.",
  "彼女": "kanojo",
  "彼女は学生です。": "kanojo ha gakusei de su.",
  "待": "tai / ma",
  "待ってください。": "tai / ma ttekudasai.",
  "待つ": "matsu",
  "律": "ritsu",
  "後で連絡します。": "ato de renraku shi ma su.",
  "復習": "fukushū",
  "心": "shin / kokoro",
  "心配": "shinpai",
  "必": "hitsu / kanara",
  "必ず": "kanarazu",
  "必要": "hitsuyō",
  "忙しい": "isogashii",
  "念": "nen",
  "怖い": "kowai",
  "思": "shi / omo",
  "思う": "shi / omo u",
  "急": "kyuu / iso",
  "急な予定が入りました。": "kyuu / iso na yotei ga hairimashita.",
  "急行": "kyūkō",
  "急行に乗ります。": "kyūkō ni norimasu.",
  "悪": "aku / waru",
  "悪い": "warui",
  "悲しい": "kanashii",
  "情": "jou / nasa",
  "情報": "jou / nasa hou / muku",
  "意": "i",
  "意味": "imi",
  "意見": "iken",
  "慣": "kan / na",
  "慣れる": "nareru",
  "戻す": "modosu",
  "戻る": "modoru",
  "所": "sho / tokoro",
  "手": "shu / te",
  "手を洗います。": "shu / te wo araimasu.",
  "手伝う": "tetsudau",
  "手紙": "tegami",
  "手紙を書きます。": "tegami wo kakimasu.",
  "払う": "harau",
  "技": "gi / waza",
  "技術": "gi / waza jutsu",
  "持": "ji / mo",
  "持つ": "motsu",
  "捨てる": "suteru",
  "掃除する": "sōji suru",
  "探す": "sagasu",
  "政": "sei",
  "政治": "sei ji / osa",
  "故障": "koshō",
  "教": "kyou / oshi",
  "教える": "oshieru",
  "教室": "kyou / oshi shitsu / muro",
  "教育": "kyōiku",
  "教育は大切です。": "kyōiku ha taisetsu de su.",
  "文": "bun / fumi",
  "文化": "bunka",
  "文章": "bun / fumi shou",
  "料理が少し残りました。": "ryōri ga sukoshi nokorimashita.",
  "料理する": "ryōri suru",
  "断": "dan / ta",
  "新": "shin / atara",
  "新しい": "atarashii",
  "新しい家を建てています。": "atarashii ie wo tateteimasu.",
  "新しい本です。": "atarashii ほん de su.",
  "新しい概念を理解します。": "atarashii gainen wo rikai shi ma su.",
  "新聞": "shinbun",
  "新聞を読みます。": "shinbun wo yomimasu.",
  "方": "hou / kata",
  "方法": "hōhō",
  "旅": "ryo / tabi",
  "旅行": "ryokō",
  "旅行の日を決めます。": "ryokō no hi wo kimemasu.",
  "旅行の準備をします。": "ryokō no junbi wo shi ma su.",
  "旅行の計画を立てます。": "ryokō no keikaku wo tatemasu.",
  "旅行は楽しいです。": "ryokō ha tanoshii de su.",
  "旅館": "ryo / tabi kan",
  "日": "hi",
  "日曜日": "nichiyōbi",
  "日曜日は休みます。": "nichiyōbi ha yasumimasu.",
  "日曜日以外は開いています。": "nichiyōbi igai ha aiteimasu.",
  "日本": "Nihon",
  "日本で働いた経験があります。": "Nihon de hataraita keiken ga a ri ma su.",
  "日本で働くために勉強しています。": "Nihon de hataraku tame ni benkyō shi te i ma su.",
  "日本にいる間に京都へ行きたいです。": "Nihon ni i ru aida ni kyōto he ikitaidesu.",
  "日本の小説を読みます。": "Nihon no shōsetsu wo yomimasu.",
  "日本の本": "Nihon no ほん",
  "日本の生活に慣れました。": "Nihon no seikatsu ni naremashita.",
  "日本の車": "Nihon no sha / kuruma",
  "日本の食べ物が好きです。": "Nihon no tabemono ga suki de su.",
  "日本へ留学したいです。": "Nihon he ryūgaku shi tai desu.",
  "日本へ行きたいです。": "Nihon he ikitaidesu.",
  "日本へ行きます。": "Nihon he ikimasu.",
  "日本へ行ったことがあります。": "Nihon he kou / i ttakotogaarimasu.",
  "日本・日曜日": "Nihon ・ nichiyōbi",
  "日本人": "Nihon にん",
  "日本人ですか。": "Nihon にん desu ka.",
  "日本文化について勉強します。": "Nihon bunka ni tsuite benkyō shi ma su.",
  "日本文化に興味があります。": "Nihon bunka ni kyōmi ga a ri ma su.",
  "日本文化を勉強しています。": "Nihon bunka wo benkyō shi te i ma su.",
  "日本語": "nihongo",
  "日本語が好きです。": "nihongo ga suki de su.",
  "日本語が少し分かります。": "nihongo ga sukoshi wakarimasu.",
  "日本語が話せるようになりました。": "nihongo ga wa / wana se ru yo u ni na ri ma shi ta.",
  "日本語で会話を練習します。": "nihongo de kaiwa wo renshū shi ma su.",
  "日本語で話してみてください。": "nihongo de hanashitemitekudasai.",
  "日本語を勉強します。": "nihongo wo benkyō shi ma su.",
  "日本語を勉強し続けます。": "nihongo wo benkyō shi tsuzukemasu.",
  "日本語を習っています。": "nihongo wo shuu / nara tteimasu.",
  "日本語を話します。": "nihongo wo hanashimasu.",
  "日本語を話す機会がありません。": "nihongo wo hanasu kikai ga a ri ma se n.",
  "日程が決まりました。": "nittei ga kimarimashita.",
  "早": "sou / waya",
  "早い": "hayai",
  "早く寝たほうがいいです。": "sou / waya ku netahougaiidesu.",
  "早く起きるようになりました。": "sou / waya ku okiru yo u ni na ri ma shi ta.",
  "明": "mei / aka",
  "明日": "ashita",
  "明日お宅へ伺います。": "ashita otaku he ukagaimasu.",
  "明日の予定は何ですか。": "ashita no yotei ha nani / nan desu ka.",
  "明日は寒いでしょう。": "ashita ha samui deshō.",
  "明日は必ず来てください。": "ashita ha kanarazu rai / ku te kudasai.",
  "明日は来なくてもいいです。": "ashita ha rai / ku nakute mo ii de su.",
  "明日は都合が悪いです。": "ashita ha tsugō ga warui de su.",
  "明日は雨だと思います。": "ashita ha ame da to omoimasu.",
  "明日早く起きなければなりません。": "ashita sou / waya ku okinakerebanarimasen.",
  "明日来ます。": "ashita rai / ku ma su.",
  "易": "eki / yasa",
  "易しい": "yasashii",
  "映": "ei / utsu",
  "映画": "eiga",
  "映画は七時に始まります。": "eiga ha shichi-ji ni hajimarimasu.",
  "映画を見ます。": "eiga wo ken / mi ma su.",
  "映画館": "eiga kan",
  "春": "shun / waru",
  "春になると暖かくなります。": "shun / waru ni na ru to atatakakunarimasu.",
  "春は暖かいです。": "shun / waru ha atatakai de su.",
  "昨日": "kinō",
  "昨日勉強しました。": "kinō benkyō shi ma shi ta.",
  "昨日行きませんでした。": "kinō ikimasendeshita.",
  "昼": "chuu / hiru",
  "時": "ji / toki",
  "時計": "tokei",
  "時計を壊してしまいました。": "tokei wo kowashiteshimaimashita.",
  "時計を見ます。": "tokei wo ken / mi ma su.",
  "時間": "jikan",
  "時間がありますか。": "jikan ga a ri ma su ka.",
  "時間があれば行きます。": "jikan ga a re ba ikimasu.",
  "時間がないなら、明日にしましょう。": "jikan ga na i nara, ashita ni shi mashō.",
  "時間が決まったら知らせます。": "jikan ga kimattara shirasemasu.",
  "時間は十分あります。": "jikan ha jūbun a ri ma su.",
  "普通": "futsū",
  "普通の電車に乗ります。": "futsū no densha ni norimasu.",
  "景色": "keshiki",
  "暑い": "atsui",
  "暖かい": "atatakai",
  "暖房": "danbō",
  "暖房をつけます。": "danbō wo tsu ke ma su.",
  "暮らす": "kurasu",
  "曜": "you",
  "曜日": "you hi",
  "曲がる": "magaru",
  "書": "sho / ka",
  "書いた": "sho / ka i ta",
  "書いて": "sho / ka i te",
  "書かない": "sho / ka ka na i",
  "書きます": "kakimasu",
  "書く": "kaku",
  "書ける": "sho / ka ke ru",
  "最初": "saisho",
  "最初に名前を書きます。": "saisho ni namae wo kakimasu.",
  "最後": "saigo",
  "最後のページを読みます。": "saigo no pēji wo yomimasu.",
  "最近": "saikin",
  "最近その傾向があります。": "saikin so no keikō ga a ri ma su.",
  "最近忙しいです。": "saikin isogashii de su.",
  "月": "getsu / tsuki",
  "月曜日": "getsuyōbi",
  "月曜日に働きます。": "getsuyōbi ni hatarakimasu.",
  "服": "fuku",
  "服がまだ乾いていません。": "fuku ga ma da kawaiteimasen.",
  "朝": "chou / asa",
  "朝ご飯を食べます。": "chou / asa gohan wo tabemasu.",
  "朝パンを食べます。": "chou / asa pan wo tabemasu.",
  "朝早く起きます。": "chou / asa sou / waya ku okimasu.",
  "木": "ki",
  "木の枝に鳥がいます。": "ki no eda ni tori ga i ma su.",
  "木曜日": "mokuyōbi",
  "木曜日に会いましょう。": "mokuyōbi ni kai i mashō.",
  "本": "ほん",
  "本は机の上です。": "ほん ha tsukue no jou / ue de su.",
  "本を二冊買います。": "ほん wo ni-satsu ka i ma su.",
  "本を棚に戻します。": "ほん wo tana ni modoshimasu.",
  "本を読みます。": "ほん wo yomimasu.",
  "本を読み終わりました。": "ほん wo yomi owarimashita.",
  "本を読んだり映画を見たりします。": "ほん wo doku / yo n da ri eiga wo ken / mi ta ri shi ma su.",
  "机": "tsukue",
  "机があります。": "tsukue ga a ri ma su.",
  "机の上です。": "tsukue no jou / ue de su.",
  "村": "son / mura",
  "来": "rai / ku",
  "来た": "rai / ku ta",
  "来て": "rai / ku te",
  "来ない": "rai / ku na i",
  "来ます": "rai / ku ma su",
  "来られる": "rai / ku ra re ru",
  "来る": "kuru",
  "来年": "rai / ku nen / toshi",
  "来年大学を卒業します。": "rai / ku nen daigaku wo sotsugyō shi ma su.",
  "来年日本へ行こうと思っています。": "rai / ku nen nihon he kou / i ko u to shi / omo tteimasu.",
  "来年留学するつもりです。": "rai / ku nen ryūgaku su ru tsu mo ri de su.",
  "来月大阪へ引っ越します。": "rai / ku gatsu ōsaka he hikkoshimasu.",
  "来月引っ越す予定です。": "rai / ku getsu / tsuki hikkosu yotei de su.",
  "来月日本へ行くことになりました。": "rai / ku gatsu nihon he iku ko to ni na ri ma shi ta.",
  "東京に住んでいます。": "tōkyō ni juu / su n de i ma su.",
  "東京は人口が多いです。": "tōkyō ha jinkō ga ōidesu.",
  "東京を皮切りに全国で開催されます。": "tōkyō o kawakiri ni zenkoku de kaisai sa re ma su.",
  "東京・京都": "tōkyō ・ kyōto",
  "東京都": "tōkyō to / miyako",
  "東京駅": "tōkyō eki",
  "東京駅で乗り換えます。": "tōkyō eki de norikaemasu.",
  "果物": "kudamono",
  "果物を買います。": "kudamono wo kaimasu.",
  "枝": "eda",
  "校": "kou",
  "案": "an",
  "案内": "annai",
  "椅子": "isu",
  "椅子に座ります。": "isu ni suwarimasu.",
  "椅子の下です。": "isu no ka / shita de su.",
  "業": "gyou",
  "楽": "gaku / tano",
  "楽しい": "tanoshii",
  "概": "gai",
  "概念": "gainen",
  "橋": "kyou / washi",
  "機会": "kikai",
  "次の駅で降ります。": "tsugi no eki de orimasu.",
  "歌": "ka / uta",
  "歌う": "ka / uta u",
  "歩きながら話しました。": "arukinagara hanashimashita.",
  "歩く": "aruku",
  "歴": "reki",
  "歴史": "reki shi",
  "残": "zan / noko",
  "残る": "nokoru",
  "母によく似ています。": "haha ni yo ku niteimasu.",
  "母に電話します。": "haha ni denwa shi ma su.",
  "母の料理を手伝います。": "haha no ryōri wo tetsudaimasu.",
  "毎": "mai",
  "毎日": "mai hi",
  "毎日勉強するつもりです。": "mai hi benkyō suru tsu mo ri de su.",
  "毎日復習します。": "mai hi fukushū shi ma su.",
  "毎日日本語を勉強します。": "mai hi nihongo wo benkyō shi ma su.",
  "毎日歩くようにしています。": "mai hi aruku yo u ni shi te i ma su.",
  "毎日読むようにします。": "mai hi yomu yo u ni shi ma su.",
  "毎晩料理します。": "maiban ryōri shi ma su.",
  "毎朝七時に起きます。": "mai chou / asa shichi-ji ni okimasu.",
  "毎朝歩く習慣があります。": "mai chou / asa aruku shūkan ga a ri ma su.",
  "比": "hi / kura",
  "比べる": "kuraberu",
  "比較": "hi / kura kaku",
  "気": "ki",
  "気をつけてください。": "ki wo tsu ke te kudasai.",
  "気分が悪いです。": "ki bun / fun ga warui de su.",
  "気持ち": "kimochi",
  "気温が下がりました。": "ki atataga sagarimashita.",
  "水": "sui / mizu",
  "水をお願いします。": "sui / mizu wo onegaishimasu.",
  "水をください。": "sui / mizu wo ku da sa i.",
  "水を飲みます。": "sui / mizu wo nomimasu.",
  "水曜日": "suiyōbi",
  "水曜日は休みです。": "suiyōbi ha yasumidesu.",
  "決": "ketsu / ki",
  "決まる": "kimaru",
  "決める": "kimeru",
  "沸かす": "wakasu",
  "治": "ji / osa",
  "治す": "naosu",
  "治る": "naoru",
  "況": "kyou",
  "泊まる": "tomaru",
  "法": "hou",
  "法律": "hōritsu",
  "法律を守らなければなりません。": "hōritsu wo mamoranakerebanarimasen.",
  "注": "chuu / soso",
  "注意": "chūi",
  "泳ぐ": "oyogu",
  "洋服": "yōfuku",
  "洗う": "arau",
  "活": "katsu / i",
  "海": "umi",
  "海で泳ぎます。": "umi de oyogimasu.",
  "涼しい": "suzushii",
  "済": "sai / su",
  "減": "gen / e",
  "減る": "gen / e ru",
  "港": "kou / minato",
  "準": "jun",
  "準備": "junbi",
  "漢": "kan",
  "漢字": "kanji",
  "漢字の読み方が分かりません。": "kanji no yomi hou / kata ga wakarimasen.",
  "漢字は難しいです。": "kanji ha muzukashii de su.",
  "火": "ka / hi",
  "火曜日": "kayōbi",
  "火曜日に勉強します。": "kayōbi ni benkyō shi ma su.",
  "無事だと聞いて安心しました。": "buji da to bun / ki i te anshin shi ma shi ta.",
  "無理をしないほうがいいです。": "muri wo shi na i hō ga ii de su.",
  "父は工場で働いています。": "chichi ha kōjō de hataraiteimasu.",
  "父は毎日車を運転します。": "chichi ha mai hi sha / kuruma wo unten shi ma su.",
  "片付ける": "katazukeru",
  "牛乳": "gyūnyū",
  "牛乳を飲みます。": "gyūnyū wo nomimasu.",
  "物": "butsu / mono",
  "特": "toku",
  "特別": "toku betsu / waka",
  "状": "jou",
  "状況": "jōkyō",
  "状況を確認します。": "jōkyō wo kakunin shi ma su.",
  "状況を見て判断します。": "jōkyō wo ken / mi te handan shi ma su.",
  "狭": "kyou / sema",
  "狭い": "kyou / sema i",
  "猫がいます。": "neko ga i ma su.",
  "珍しい": "mezurashii",
  "珍しい花を見ました。": "mezurashii hana wo ken / mi ma shi ta.",
  "理": "ri",
  "理由": "riyū",
  "理由を教えてください。": "riyū wo oshietekudasai.",
  "理由を説明してください。": "riyū wo setsumei shi te kudasai.",
  "生": "sei / i",
  "生活": "seikatsu",
  "生産": "sei / i san / u",
  "産": "san / u",
  "産業": "san / u gyou",
  "田": "den / ta",
  "田中": "tanaka",
  "田中さんは休むそうです。": "tanaka sa n ha yasumu so u de su.",
  "田中さんは来ないそうです。": "tanaka sa n ha rai / ku na i so u de su.",
  "田中先生です。": "tanaka sensei de su.",
  "由": "yu / yoshi",
  "申し込む": "mōshikomu",
  "町": "chou / machi",
  "町はにぎやかです。": "chou / machi ha nigiyaka de su.",
  "画": "ga / kaku",
  "界": "kai",
  "留学": "ryūgaku",
  "番": "ban",
  "番号": "ban gou",
  "病": "byou / ya",
  "病気を治します。": "byōki wo naoshimasu.",
  "病院": "byōin",
  "病院は近いです。": "byōin ha chikai de su.",
  "発": "watsu",
  "発音": "hatsuon",
  "発音を練習します。": "hatsuon wo renshū shi ma su.",
  "白": "waku / shiro",
  "白い": "shiroi",
  "白い車です。": "shiroi sha / kuruma de su.",
  "百": "hyaku",
  "百円": "hyaku en",
  "目": "moku / me",
  "直す": "naosu",
  "相": "sou",
  "相談": "sōdan",
  "看護師": "kangoshi",
  "県": "ken",
  "真": "shin / ma",
  "眠い": "nemui",
  "着": "chaku / ki",
  "着く": "tsuku",
  "知らせる": "shiraseru",
  "短い": "mijikai",
  "短い休みです。": "mijikai yasumidesu.",
  "石": "ishi",
  "研": "ken / to",
  "研究": "kenkyū",
  "確か": "tashika",
  "確か三時でした。": "tashika san-ji de shi ta.",
  "社": "sha",
  "祖父が入院しました。": "sofu ga nyūin shi ma shi ta.",
  "私": "watashi",
  "私の本": "watashi no ほん",
  "私は学生です。": "watashi ha gakusei de su.",
  "私も学生です。": "watashi mo gakusei de su.",
  "秋": "shuu / aki",
  "秋が好きです。": "shuu / aki ga suki de su.",
  "科": "ka",
  "科学": "kagaku",
  "科学に興味があります。": "kagaku ni kyōmi ga a ri ma su.",
  "究": "kyuu / kiwa",
  "空": "kuu / sora",
  "空が青いです。": "kuu / sora ga aoi de su.",
  "空気": "kūki",
  "空港": "kūkō",
  "空港までバスで行きます。": "kūkō ma de basu de ikimasu.",
  "窓": "mado",
  "窓から光が入ります。": "mado ka ra hikari ga hairimasu.",
  "窓が開けてあります。": "mado ga aketearimasu.",
  "窓を開けます。": "mado wo akemasu.",
  "立ってください。": "tattekudasai.",
  "立つ": "tatsu",
  "章": "shou",
  "笑う": "warau",
  "答": "tou / kota",
  "答え": "kotae",
  "答えを書いてください。": "kotae wo sho / ka i te kudasai.",
  "答えを間違えました。": "kotae wo machigaemashita.",
  "箱の中です。": "hako no chuu / naka de su.",
  "簡単": "kantan",
  "約": "yaku",
  "納豆を食べたことがありません。": "nattō wo tabetakotogaarimasen.",
  "紙": "kami",
  "紙を切ります。": "kami wo setsu / ki ri ma su.",
  "細": "sai / hoso",
  "細い": "sai / hoso i",
  "紹介": "shōkai",
  "終": "shuu / o",
  "終わる": "owaru",
  "経": "kei / e",
  "経済": "kei / e sai / su",
  "経験": "keiken",
  "絡": "raku",
  "続く": "tsuzuku",
  "続ける": "tsuzukeru",
  "維": "i",
  "維持": "iji",
  "習": "shuu / nara",
  "習う": "narau",
  "習慣": "shūkan",
  "考える": "kangaeru",
  "者": "sha / mono",
  "耳": "ji / mimi",
  "聞": "bun / ki",
  "聞く": "kiku",
  "聞こえる": "kikoeru",
  "肉": "niku",
  "肉を食べます。": "niku wo tabemasu.",
  "育": "iku / soda",
  "育てる": "sodateru",
  "腕": "ude",
  "腕が痛いです。": "ude ga itaidesu.",
  "自": "ji / mizuka",
  "自分": "ji / mizuka bun / fun",
  "自由": "jiyū",
  "自由に使ってください。": "jiyū ni shi / tsuka ttekudasai.",
  "自転車": "jitensha",
  "自転車で学校へ行きます。": "jitensha de gakkō he ikimasu.",
  "自転車を直します。": "jitensha wo naoshimasu.",
  "興味": "kyōmi",
  "良い": "ii",
  "色": "shoku / iro",
  "英": "ei",
  "英語": "ei go / kata",
  "茶": "cha",
  "荷": "ka / ni",
  "荷物": "nimotsu",
  "荷物を家まで届けます。": "nimotsu wo ie ma de todokemasu.",
  "荷物を運びます。": "nimotsu wo hakobimasu.",
  "著": "cho / arawa",
  "薬": "kusuri",
  "薬を飲まなければなりません。": "kusuri wo in / no ma na ke re ba na ri ma se n.",
  "行": "kou / i",
  "行かない": "kou / i ka na i",
  "行きましょう。": "ikimashou.",
  "行きます": "ikimasu",
  "行きます。": "ikimasu.",
  "行きません。": "ikimasen.",
  "行く": "iku",
  "行くかどうかまだ決めていません。": "iku ka dō ka ma da kimeteimasen.",
  "行ける": "kou / i ke ru",
  "行った": "kou / i tta",
  "行って": "kou / i tte",
  "術": "jutsu",
  "要": "you / i",
  "見": "ken / mi",
  "見える": "mieru",
  "見た": "ken / mi ta",
  "見つける": "mitsukeru",
  "見て": "ken / mi te",
  "見てください。": "ken / mi te kudasai.",
  "見ない": "ken / mi na i",
  "見ます": "ken / mi ma su",
  "見られる": "ken / mi ra re ru",
  "見る": "miru",
  "見るに堪えない。": "miru ni taenai.",
  "見物": "kenbutsu",
  "親": "shin / oya",
  "親切": "shinsetsu",
  "観光客が増えました。": "kankōkyaku ga fuemashita.",
  "計": "kei / waka",
  "計画": "keikaku",
  "計画の変更を余儀なくされました。": "keikaku no hen kōo yogi na ku sa re ma shi ta.",
  "計画を進めます。": "keikaku wo susumemasu.",
  "計画を遂行します。": "keikaku wo suikō shi ma su.",
  "訪ねる": "tazuneru",
  "試": "shi / kokoro",
  "試合に勝ちました。": "shiai ni kachimashita.",
  "試験": "shi / kokoro ken",
  "話": "wa / wana",
  "話さない": "wa / wana sa na i",
  "話した": "hanashita",
  "話して": "hanashite",
  "話します": "hanashimasu",
  "話す": "hanasu",
  "話せる": "wa / wana se ru",
  "誕生日のお祝いをします。": "tanjōbi no oiwai wo shi ma su.",
  "語": "go / kata",
  "説": "setsu / to",
  "説明": "setsumei",
  "読": "doku / yo",
  "読まない": "doku / yo ma na i",
  "読みます": "yomimasu",
  "読む": "yomu",
  "読める": "doku / yo me ru",
  "読んだ": "doku / yo n da",
  "読んで": "doku / yo n de",
  "読書": "doku / yo sho / ka",
  "誰": "dare",
  "調べる": "shiraberu",
  "談": "dan",
  "警察": "keisatsu",
  "警察に電話しました。": "keisatsu ni denwa shi ma shi ta.",
  "財布を忘れてしまいました。": "saifu wo wasureteshimaimashita.",
  "買": "bai / ka",
  "買い物する": "kaimono suru",
  "買う": "kau",
  "買ったものの、まだ使っていません。": "bai / ka ttamonono, ma da shi / tsuka tteimasen.",
  "貸": "tai / ka",
  "貸す": "tai / ka su",
  "貿": "bou",
  "貿易": "bōeki",
  "資料を読んでおいてください。": "shiryō wo doku / yo n de o i te kudasai.",
  "質": "shitsu",
  "質問": "shitsu mon / to",
  "贈り物": "okurimono",
  "赤": "seki / aka",
  "赤い": "akai",
  "赤いりんごです。": "akai ri n go de su.",
  "赤ちゃん": "akachan",
  "赤ちゃんが寝ています。": "akachan ga neteimasu.",
  "走る": "hashiru",
  "起きる": "okiru",
  "足": "soku / ashi",
  "足りる": "tariru",
  "路": "ro / ji",
  "車": "sha / kuruma",
  "車で行きます。": "sha / kuruma de ikimasu.",
  "車に注意してください。": "sha / kuruma ni chūi shi te kudasai.",
  "転": "ten / koro",
  "軽": "kei / karu",
  "軽い": "kei / karu i",
  "較": "kaku",
  "辞書で意味を調べます。": "jisho de imi wo shirabemasu.",
  "農": "nou",
  "農業": "nou gyou",
  "込む": "komu",
  "迎える": "mukaeru",
  "近": "kin / chika",
  "近い": "chikai",
  "近所": "kinjo",
  "近所に公園があります。": "kinjo ni kōen ga a ri ma su.",
  "返": "en / kae",
  "返す": "en / kae su",
  "送": "sou / oku",
  "送る": "sou / oku ru",
  "途中": "tochū",
  "途中で雨が降りました。": "tochū de ame ga orimashita.",
  "通": "tsuu / too",
  "連": "ren",
  "連絡": "renraku",
  "週": "shuu",
  "週末は掃除したり買い物したりしました。": "shūmatsu ha sōji shi ta ri kai butsu / mono shi ta ri shi ma shi ta.",
  "進む": "susumu",
  "進める": "susumeru",
  "遂": "sui / to",
  "遂行": "suikō",
  "遅": "chi / oso",
  "遅い": "osoi",
  "運": "un / wako",
  "運ぶ": "hakobu",
  "運転": "unten",
  "運転手": "untenshu",
  "道": "michi",
  "道に大きな石があります。": "michi ni dai / oo ki na ishi ga a ri ma su.",
  "道路": "michi ro / ji",
  "遠": "en / too",
  "遠い": "tōi",
  "遠慮": "enryo",
  "遠慮しないでください。": "enryo shi na i de ku da sa i.",
  "適当": "tekitō",
  "適当な時間を選んでください。": "tekitō na jikan wo sen / era n de ku da sa i.",
  "選": "sen / era",
  "選ぶ": "erabu",
  "部屋": "heya",
  "部屋に入ります。": "heya ni hairimasu.",
  "部屋に花を飾ります。": "heya ni hana wo kazarimasu.",
  "部屋の空気を入れ替えます。": "heya no kūki wo haire kaemasu.",
  "部屋はきれいです。": "heya ha kirei de su.",
  "部屋は二階です。": "heya ha ni-kai de su.",
  "部屋を掃除します。": "heya wo sōji shi ma su.",
  "部屋を片付けます。": "heya wo katazukemasu.",
  "都": "to / miyako",
  "都合": "tsugō",
  "配": "wai / kuba",
  "重": "juu / omo",
  "重い": "juu / omo i",
  "野菜": "yasai",
  "野菜を食べます。": "yasai wo tabemasu.",
  "金": "kin / kane",
  "金曜日": "kin'yōbi",
  "金曜日は忙しいです。": "kin'yōbi ha isogashii de su.",
  "金曜日までに出してください。": "kin'yōbi made ni deshitekudasai.",
  "鍵を探しています。": "kagi wo sagashiteimasu.",
  "鏡": "kagami",
  "鏡を見ます。": "kagami wo ken / mi ma su.",
  "長い": "nagai",
  "長い映画です。": "nagai eiga de su.",
  "閉める": "shimeru",
  "開いているかどうか確認します。": "aiteirukadouka kakunin shi ma su.",
  "開ける": "akeru",
  "間に": "aida ni",
  "間に合う": "maniau",
  "間違い": "machigai",
  "間違いを直してください。": "machigai wo naoshitekudasai.",
  "間違える": "machigaeru",
  "関": "kan / seki",
  "関係": "kankei",
  "降りる": "oriru",
  "院": "in",
  "険": "ken / kewa",
  "階": "kai",
  "難しい": "muzukashii",
  "雨": "ame",
  "雨が三日続きました。": "ame ga mikka tsuzukimashita.",
  "雨が降っています。": "ame ga futteimasu.",
  "雨が降っても行きます。": "ame ga futtemo ikimasu.",
  "雨が降りそうです。": "ame ga orisoudesu.",
  "雨が降り始めました。": "ame ga ori hajimemashita.",
  "雨だったら行きません。": "ame da ttara ikimasen.",
  "雨なので出かけません。": "ame na node dekakemasen.",
  "雨の場合は中止です。": "ame no baai ha chuu / naka todesu.",
  "雪": "yuki",
  "雪が降ります。": "yuki ga orimasu.",
  "電": "den",
  "電話": "denwa",
  "電話する": "denwa suru",
  "電話を使います。": "denwa wo tsukaimasu.",
  "電車": "densha",
  "電車が込んでいます。": "densha ga kondeimasu.",
  "電車が遅いです。": "densha ga osoi de su.",
  "電車で行きます。": "densha de ikimasu.",
  "電車に乗ります。": "densha ni norimasu.",
  "電車に間に合いました。": "densha ni maniaimashita.",
  "青": "sei / ao",
  "青い": "aoi",
  "青い空です。": "aoi kuu / sora de su.",
  "静か": "shizuka",
  "静かな町です。": "shizuka na chou / machi de su.",
  "面白い": "omoshiroi",
  "音": "oto",
  "音が聞こえます。": "oto ga kikoemasu.",
  "音を下げてください。": "oto wo sagetekudasai.",
  "音楽": "ongaku",
  "音楽が好きです。": "ongaku ga suki de su.",
  "音楽を聞きながら勉強します。": "ongaku wo kikinagara benkyō shi ma su.",
  "音楽を聞きます。": "ongaku wo kikimasu.",
  "音楽・楽しい": "ongaku ・ tanoshii",
  "響": "kyou / hibi",
  "題": "dai",
  "顕": "ken",
  "顕著": "kencho",
  "顕著な変化があります。": "kencho na hen ka / ba ga a ri ma su.",
  "風": "kaze",
  "風が強いです。": "kaze ga kyou / tsuyo i de su.",
  "風邪が治りました。": "kaze ga naorimashita.",
  "飛行機": "hikōki",
  "飛行機で日本へ行きます。": "hikōki de Nihon he ikimasu.",
  "食": "shoku / ta",
  "食べすぎました。": "tabesugimashita.",
  "食べた": "tabeta",
  "食べて": "tabete",
  "食べてください。": "tabetekudasai.",
  "食べない": "tabenai",
  "食べます": "tabemasu",
  "食べます。": "tabemasu.",
  "食べません。": "tabemasen.",
  "食べられる": "taberareru",
  "食べる": "taberu",
  "食べ物": "tabemono",
  "飲": "in / no",
  "飲み物": "nomimono",
  "飲み物は何ですか。": "nomimono ha nani / nan desu ka.",
  "飲む": "nomu",
  "飾る": "kazaru",
  "館": "kan",
  "駅": "eki",
  "駅で友達を待ちます。": "eki de tomodachi wo tai / ma chi ma su.",
  "駅はどこですか。": "eki ha doko desu ka.",
  "駅は近いです。": "eki ha chikai de su.",
  "駅まで友達を迎えに行きます。": "eki ma de tomodachi wo mukaeni ikimasu.",
  "駅まで案内します。": "eki ma de annai shi ma su.",
  "駅まで歩きます。": "eki ma de arukimasu.",
  "駅も近いし、便利です。": "eki mo chikai shi, benri de su.",
  "駅員": "ekiin",
  "駅員に聞きました。": "ekiin ni kikimashita.",
  "駅員に道を尋ねました。": "ekiin ni michi wo tazunemashita.",
  "駐": "chuu",
  "駐車場": "chūshajō",
  "駐車場はどこですか。": "chūshajō ha doko desu ka.",
  "験": "ken",
  "高い": "takai",
  "高い車です。": "takai sha / kuruma de su.",
  "高くても買いたいです。": "takakutemo kaitaidesu.",
  "魚": "sakana",
  "魚が好きです。": "sakana ga suki de su.",
  "魚が嫌いです。": "sakana ga kirai de su.",
  "黒": "koku / kuro",
  "黒い": "kuroi",
  "黒いかばんです。": "kuroi ka ba n de su.",
  "～かどうか": "～ ka dō ka",
  "～かもしれない": "～ kamo shirenai",
  "～から / ～まで": "～ ka ra / ～ ma de",
  "～ことになる": "～ koto ni naru",
  "～し": "～ shi",
  "～しか～ない": "～ shi ka ～ na i",
  "～すぎる": "～ sugiru",
  "～そうだ（伝聞）": "～ sō da",
  "～そうだ（様態）": "～ sō da",
  "～たいです": "～ tai desu",
  "～たことがある": "～ ta koto ga aru",
  "～たところだ": "～ ta tokoro da",
  "～ために": "～ tame ni",
  "～たら": "～ tara",
  "～たり～たりする": "～ ta ri ～ ta ri su ru",
  "～つもりだ": "～ tsumori da",
  "～てある": "～ te aru",
  "～ているところだ": "～ te iru tokoro da",
  "～ておく": "～ te oku",
  "～てください": "～ te kudasai",
  "～てしまう": "～ te shimau",
  "～てはいけません": "～ te wa ikemasen",
  "～てみる": "～ te miru",
  "～ても": "～ te mo",
  "～てもいいです": "～ te mo ii desu",
  "～で": "～ de",
  "～でしょう": "～ deshō",
  "～ですか": "～ desu ka",
  "～でも": "～ demo",
  "～と": "～ to",
  "～と思います": "～ to omoimasu",
  "～と思う": "～ to omou",
  "～と言う": "～ to iu",
  "～ながら": "～ nagara",
  "～なくてもいい": "～ nakute mo ii",
  "～なければならない": "～ nakereba naranai",
  "～なら": "～ nara",
  "～に": "～ ni",
  "～にくい": "～ nikui",
  "～について": "～ ni tsuite",
  "～によると": "～ ni yoru to",
  "～に伴って": "～ ni tomonatte",
  "～に堪えない": "～ ni taenai",
  "～に違いない": "～ ni chigai nai",
  "～ので": "～ node",
  "～のに": "～ noni",
  "～ば": "～ ba",
  "～へ": "～ he",
  "～ほうがいい": "～ hō ga ii",
  "～ましょう": "～ mashō",
  "～ませんか": "～ masen ka",
  "～までに": "～ made ni",
  "～ものの": "～ mono no",
  "～やすい": "～ yasui",
  "～ようだ": "～ yō da",
  "～ようと思う": "～ yō to omou",
  "～ようにする": "～ yō ni suru",
  "～ようになる": "～ yō ni naru",
  "～るところだ": "～ ru tokoro da",
  "～わけではない": "～ wake de wa nai",
  "～を + Verb": "～ o",
  "～を余儀なくされる": "～ o yogi naku sareru",
  "～を皮切りに": "～ o kawakiri ni",
  "～予定だ": "～ yotei da",
  "～前に": "～ mae ni",
  "～始める": "～ hajimeru",
  "～後で": "～ ato de",
  "～方": "～ hou / kata",
  "～終わる": "～ owaru",
  "～続ける": "～ tsuzukeru",
  "～間に": "～ aida ni",
  "一人 ひとり・二人 ふたり・三人 さんにん": "hitori · futari · sannin",
  "一本 いっぽん・三本 さんぼん・六本 ろっぽん": "ippon · sanbon · roppon",
  "一枚 いちまい・三枚 さんまい": "ichimai · sanmai",
  "一匹 いっぴき・三匹 さんびき・六匹 ろっぴき": "ippiki · sanbiki · roppiki",
  "一台 いちだい・二台 にだい": "ichidai · nidai",
  "一回 いっかい・三回 さんかい": "ikkai · sankai",
  "一冊 いっさつ・八冊 はっさつ": "issatsu · wassatsu",
  "一個 いっこ・六個 ろっこ": "ikko · rokko",
  "一 いち · 二 に · 三 さん · 四 よん · 五 ご · 六 ろく · 七 なな · 八 はち · 九 きゅう · 十 じゅう": "ichi · ni · san · yon · go · roku · nana · hachi · kyū · jū",
  "二十 にじゅう · 五十 ごじゅう · 百 ひゃく": "nijū · gojū · hyaku",
  "三百 さんびゃく · 六百 ろっぴゃく · 八百 はっぴゃく · 千 せん": "sanbyaku · roppyaku · happyaku · sen",
  "三千 さんぜん · 八千 はっせん · 一万 いちまん": "sanzen · hassen · ichiman",
  "一時 いちじ · 四時 よじ · 七時 しちじ · 九時 くじ": "ichiji · yoji · shichiji · kuji",
  "一分 いっぷん · 三分 さんぷん · 六分 ろっぷん · 八分 はっぷん · 十分 じゅっぷん": "ippun · sanpun · roppun · happun · juppun",
  "一歳 いっさい · 八歳 はっさい · 十歳 じゅっさい · 二十歳 はたち": "issai · hassai · jussai · hatachi"
};
  const romajiFor = (text) => ROMAJI_MAP[String(text||"")] || "";
  const latinFromReading = (reading, fallback="") => {
    const s=String(reading||"");
    const parts=s.split("·");
    const candidate=(parts.length>1?parts[parts.length-1]:"").trim();
    return /[A-Za-zāīūēōĀĪŪĒŌ]/.test(candidate) ? candidate : (romajiFor(fallback) || "");
  };
  const buildCards = () => {
    const cards = [];
    HIRAGANA.forEach(([j,r],i)=>cards.push({id:`h-${i}`,deck:"Hiragana",level:"Kana",front:j,reading:j,romaji:r,meaning:r,example:"",exampleRomaji:"",exampleDe:""}));
    KATAKANA.forEach(([j,r],i)=>cards.push({id:`k-${i}`,deck:"Katakana",level:"Kana",front:j,reading:j,romaji:r,meaning:r,example:"",exampleRomaji:"",exampleDe:""}));
    VOCAB.forEach(([level,j,r,m,ex,de],i)=>cards.push({id:`v-${level}-${i}`,deck:"Vokabeln",level,front:j,reading:r,romaji:latinFromReading(r,j),meaning:m,example:ex,exampleRomaji:romajiFor(ex),exampleDe:de}));
    GRAMMAR.forEach(([level,j,r,m,ex,de],i)=>cards.push({id:`g-${level}-${i}`,deck:"Grammatik",level,front:j,reading:r,romaji:latinFromReading(r,j),meaning:m,example:ex,exampleRomaji:romajiFor(ex),exampleDe:de}));
    KANJI.forEach(([level,j,r,m,ex],i)=>cards.push({id:`c-${level}-${i}`,deck:"Kanji",level,front:j,reading:r,romaji:romajiFor(j),meaning:m,example:ex,exampleRomaji:romajiFor(ex),exampleDe:""}));
    return cards;
  };

  return {HIRAGANA,KATAKANA,VOCAB,GRAMMAR,KANJI,VERBS,COUNTERS,CONFUSIONS,LESSONS,ROMAJI_MAP,romajiFor,buildCards};
})();
