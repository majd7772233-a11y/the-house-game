(function (window, document) {
  "use strict";

  var translations = {
    "Enter":"دخول","reset game":"إعادة اللعبة","Start from the beginning.":"ابدأ من البداية","full screen":"ملء الشاشة",
    "Hey!":"مهلاً!","Hello!":"مرحباً!","I hope he's alive...":"آمل أن يكون ما زال حياً...","What?!":"ماذا؟!","What's going on?!":"ما الذي يحدث؟!",
    "Where am I?":"أين أنا؟","Locked!":"مغلق!","This aquarium is... Strange":"هذا الحوض... غريب","Teleport!? ...":"انتقال آني؟! ...",
    "Come downstairs...":"انزل إلى الطابق السفلي...","NOW!":"الآن!","Merge with me.":"اندماج... انضم إليّ.",
    "WHAT the...!?":"ما هذا بحق...؟!","Would you like to step into the darkness?":"هل ترغب في الدخول إلى الظلام؟",
    "Ok":"حسناً","OK":"حسناً","No!":"لا!","Cancel":"إلغاء","The game will start from the beggining. Save data will be erased.":"ستبدأ اللعبة من جديد، وسيتم مسح بيانات الحفظ.",
    "Use the switch":"استخدم المفتاح"," seconds remaining":" ثوانٍ متبقية","time out":"انتهى الوقت","It works now!":"إنه يعمل الآن!","Good luck!":"حظاً موفقاً!",
    "Thank you man!":"شكراً لك يا رجل!","What was that?!":"ما ذلك؟!","Was it real?":"هل كان ذلك حقيقياً؟","Huh?":"هاه؟","Fssssssss":"سسسسسسس!",
    "Leave me alone!":"اتركني وشأني!","The item \"":"العنصر \"","\" has been used!":"\" تم استخدامه!","Item":"عنصر",
    "Fish":"السمكة","Hi.":"أهلاً.","I don't have time to talk with you.":"ليس لدي وقت للتحدث معك.","Oh really? I have A LOT.":"حقاً؟ لدي الكثير من الوقت.",
    "Tell me... Did you look through the window?":"أخبرني... هل نظرت من النافذة؟","Yes I did.":"نعم، فعلت.","No.":"لا.",
    "So please take a look and tell me what did you see.":"إذن ألقِ نظرة وأخبرني ماذا رأيت.","So what did you see then?":"إذن، ماذا رأيت؟",
    "So what did you see than?":"إذن، ماذا رأيت؟","Yeah. C'mon! Check that window.":"أجل. هيا! ألقِ نظرة من تلك النافذة.",
    "Many flying... Objects?":"أجسام... طائرة كثيرة؟","Wow. I have to check it out!":"رائع! يجب أن أتحقق من الأمر!",
    "The furnace wants to eat a twig":"الفرن يريد أن يأكل غصناً.","The furnace wants to eat your note. You may need it later – maybe you should write it down?":"الفرن يريد أن يأكل ملاحظتك. قد تحتاج إليها لاحقاً؛ ربما عليك تدوينها؟",
    "The furnace want's to eat your note.":"الفرن يريد أن يأكل ملاحظتك.","The furnace want's to eat a coal.":"الفرن يريد أن يأكل قطعة فحم.",
    "Give a note.":"أعطه الملاحظة.","Keep a note to yourself.":"احتفظ بالملاحظة لنفسك.","Nom, nom, nom.":"ممم... لذيذ!","I want more!":"أريد المزيد!",
    "YEAH!":"أجل!","Thank you man!":"شكراً لك يا رجل!","Check your room! Things have changed!":"تفقد غرفتك! لقد تغيرت أشياء كثيرة!",
    "I'm weak...":"أنا ضعيف...","Help me please...":"ساعدني أرجوك...","Still hungry...":"ما زلت جائعاً...",
    "Sheet of paper":"ورقة","Some kind of illustration. Interesting... Might be useful.":"نوع من الرسومات. مثير للاهتمام... قد يكون مفيداً.",
    "The Picture":"اللوحة","Look through the window":"انظر عبر النافذة","A plant":"نبتة","The Aquarium":"حوض الأسماك","Go to the corridor":"اذهب إلى الممر",
    "The key!":"المفتاح!","The golden key":"المفتاح الذهبي","Back to the room":"عد إلى الغرفة","The gate":"البوابة",
    "A twig":"غصن","A twig from the... Picture.":"غصن من... اللوحة.","The phone":"الهاتف","Go to the kitchen":"اذهب إلى المطبخ",
    "Go to the toilet":"اذهب إلى المرحاض","Go to the bathroom":"اذهب إلى الحمّام","Go downstairs":"انزل إلى الأسفل",
    "Take a look outside":"ألقِ نظرة إلى الخارج","The fridge":"الثلاجة","Looks like it":"يبدو كذلك","Flush it!":"اسحب السيفون!",
    "Take a look in the mirror":"انظر في المرآة","The washing curtain":"ستارة الحمّام","Use the computer":"استخدم الحاسوب",
    "A coal":"قطعة فحم","A coal.":"قطعة فحم.","The Furnace":"الفرن","Way out":"طريق الخروج","Enter the train":"ادخل القطار",
    "Back to the platform":"عد إلى الرصيف","Examine panel":"افحص لوحة التحكم","Darkness...":"الظلام...","Exit":"خروج","Awake":"استيقظ",
    "How to enable javascript?":"كيفية تفعيل JavaScript؟","see instructions":"اطّلع على التعليمات","You have to enable javascript on your browser in order to play The House:":"يجب تفعيل JavaScript في متصفحك لتتمكن من لعب The House:",
    "Note:":"ملاحظة:","You'll also need the latest browser version. Otherwise the game won't start!":"ستحتاج أيضاً إلى أحدث إصدار من المتصفح، وإلا فلن تبدأ اللعبة!",
    "Game made by":"من تطوير","Follow me on":"تابعني على","Twitter":"Twitter","Learn more about the game on":"تعرف على المزيد عن اللعبة في","Github":"GitHub",
    "Loading...":"جارٍ التحميل...","Resume":"متابعة","Restart":"إعادة البدء","The House":"The House","Switch game language":"تغيير لغة اللعبة","key":"المفتاح","note":"الملاحظة","twig":"الغصن","coal":"الفحم","Go to the room":"اذهب إلى الغرفة",
    "Looks like it's turned off.":"يبدو أنه مطفأ.","I... I don't think it's a good idea to go there.":"أنا... لا أعتقد أن الذهاب إلى هناك فكرة جيدة.",
    "There's NO WAY I'm going there!":"لا يمكنني الذهاب إلى هناك إطلاقاً!","counting...":"جارٍ العد...","You're not ready yet":"لست مستعداً بعد.",
    "You have to be at least partially complete to travel...":"يجب أن تنجز جزءاً من المهمة على الأقل حتى تتمكن من الانتقال...",
    "You're ready. You can go now...":"أصبحت مستعداً. يمكنك الذهاب الآن...","But... Where?":"لكن... إلى أين؟","To meet with yourself.":"لتقابل نفسك.",
    "It doesn't work anymore...":"لم يعد يعمل...","completion: ":"نسبة الإنجاز: ","status: hidden":"الحالة: مخفي","status: revealed":"الحالة: مكشوف",
    "activate?":"تفعيل؟","I'm waiting...":"أنا أنتظر...","It's coming!":"إنه قادم!","Show me the way to him.":"أرني الطريق إليه.",
    "I feel... Kind of... Better now.":"أشعر... أنني... أفضل قليلاً الآن.","It's so nice outside!":"الجو في الخارج جميل جداً!",
    "Your stop is next.":"محطتك التالية.","You have to leave the train.":"عليك مغادرة القطار.","Huh..?":"ماذا..؟","OK...":"حسناً...",
    "I guess I have no choice. I need to accept you.":"أظن أنه ليس لدي خيار. عليّ تقبّلك.","But this time...":"لكن هذه المرة...","I'll absorb you.":"سأمتصّك.",
    "The furnace want's to eat your note.":"الفرن يريد أن يأكل ملاحظتك.","The furnace want's to eat a coal.":"الفرن يريد أن يأكل قطعة فحم.",
    "The furnace wants to eat a twig":"الفرن يريد أن يأكل غصناً.","The furnace wants to eat your note. You may need it later – maybe you should write it down?":"الفرن يريد أن يأكل ملاحظتك. قد تحتاج إليها لاحقاً؛ ربما عليك تدوينها؟",
    "I don't have time to talk with you.":"ليس لدي وقت للتحدث معك.","Oh really? I have A LOT.":"حقاً؟ لدي الكثير من الوقت.",
    "Tell me... Did you look through the window?":"أخبرني... هل نظرت من النافذة؟","Yes I did.":"نعم، فعلت.",
    "So please take a look and tell me what did you see.":"إذن ألقِ نظرة وأخبرني ماذا رأيت.","Yeah. C'mon! Check that window.":"أجل. هيا! ألقِ نظرة من تلك النافذة.",
    "Many flying... Objects?":"أجسام... طائرة كثيرة؟","Wow. I have to check it out!":"رائع! يجب أن أتحقق من الأمر!",
    "Give a note.":"أعطه الملاحظة.","Keep a note to yourself.":"احتفظ بالملاحظة لنفسك.","I'm weak...":"أنا ضعيف...",
    "Help me please...":"ساعدني أرجوك...","Still hungry...":"ما زلت جائعاً..."
    "Looks like your browser is a little":"يبدو أن متصفحك",
    "too old":"قديم جداً",
    "to run this game. ;)":"لتشغيل هذه اللعبة. ;)",
    "In order to play":"لكي تلعب",
    "you have to":"يجب عليك",
    "install one of the modern browsers":"تثبيت أحد المتصفحات الحديثة",
    "Pick tiles":"اختيار المربعات",
    "x width":"العرض الأفقي",
    "y width":"العرض العمودي",
    "Generate!":"إنشاء!",
    "Array:":"المصفوفة:",
    "Selectors:":"المحددات:",
    "Switch to English":"التبديل إلى الإنجليزية",
    "Switch to Arabic":"التبديل إلى العربية",
    "Wznów":"متابعة",
    "Od nowa":"إعادة البدء"

  };
  var attrs = ["data-tooltip","data-info","title","alt","placeholder","aria-label"];
  var originalText = $.fn.text;
  var language = "ar";
  var observer = null;
  function translate(value) {
    if (typeof value !== "string" || language !== "ar") return value;
    var match = value.match(/^(\s*)([\s\S]*?)(\s*)$/);
    var core = match ? match[2] : value;
    if (Object.prototype.hasOwnProperty.call(translations, core)) return (match ? match[1] : "") + translations[core] + (match ? match[3] : "");
    return value.replace(/The item "([^"]+)" has been used!/g, function (_, item) {
      return "تم استخدام العنصر «" + (translations[item] || item) + "»!";
    });
  }
  function setText(node) {
    if (!node || node.nodeType !== 3) return;
    var current = node.nodeValue;
    if (!current || !current.trim()) return;
    if (node.__houseEnglish === undefined) {
      node.__houseEnglish = current;
      for (var key in translations) if (translations[key] === current) { node.__houseEnglish = key; break; }
    } else if (current !== translate(node.__houseEnglish) && current !== node.__houseEnglish) {
      node.__houseEnglish = current;
      for (var key2 in translations) if (translations[key2] === current) { node.__houseEnglish = key2; break; }
    }
    var nextText = translate(node.__houseEnglish);
    if (node.nodeValue !== nextText) node.nodeValue = nextText;
  }
  function setAttribute(el, name) {
    var saved = "houseEnglish" + name.replace(/[^a-z]/gi, "");
    var current = el.getAttribute(name);
    if (current === null) return;
    if (!el.dataset[saved]) {
      var original = current;
      for (var key in translations) if (translations[key] === current) { original = key; break; }
      el.dataset[saved] = original;
    } else if (current !== translate(el.dataset[saved]) && current !== el.dataset[saved]) {
      el.dataset[saved] = current;
      for (var key2 in translations) if (translations[key2] === current) { el.dataset[saved] = key2; break; }
    }
    var nextValue = translate(el.dataset[saved]);
    if (current !== nextValue) el.setAttribute(name, nextValue);
  }
  function scan(root) {
    if (!root) return;
    if (root.nodeType === 3) { setText(root); return; }
    if (root.nodeType !== 1 && root.nodeType !== 9) return;
    if (root.nodeType === 1) for (var a=0; a<attrs.length; a++) setAttribute(root, attrs[a]);
    var walker = document.createTreeWalker(root, 4, null, false), node;
    while ((node = walker.nextNode())) setText(node);
    if (root.querySelectorAll) {
      var all = root.querySelectorAll("*");
      for (var i=0; i<all.length; i++) for (var j=0; j<attrs.length; j++) setAttribute(all[i], attrs[j]);
    }
  }
  $.fn.text = function (value) {
    if (arguments.length === 0 || typeof value !== "string") return originalText.apply(this, arguments);
    return this.each(function () {
      this.__houseEnglishText = value;
      originalText.call($(this), translate(value));
    });
  };
  function refresh() {
    var nodes = document.querySelectorAll("*");
    for (var i=0; i<nodes.length; i++) {
      if (nodes[i].__houseEnglishText !== undefined) originalText.call($(nodes[i]), translate(nodes[i].__houseEnglishText));
    }
    scan(document.body);
    document.documentElement.lang = language === "ar" ? "ar" : "en";
    document.body.className = document.body.className.replace(/\bhouse-ar\b/g, "").replace(/\s+/g, " ");
    if (language === "ar") document.body.className += " house-ar";
    var switcher = document.getElementById("settings_language");
    if (switcher) originalText.call($(switcher), language === "ar" ? "English" : "العربية");
  }
  function addLanguageControl() {
    var list = document.querySelector("#settings ul");
    if (!list || document.getElementById("settings_language")) return;
    var item = document.createElement("li");
    item.id = "settings_language";
    item.appendChild(document.createTextNode("English"));
    item.title = "Switch game language";
    list.insertBefore(item, list.firstChild);
    $(item).on("click", function (event) {
      event.stopPropagation();
      language = language === "ar" ? "en" : "ar";
      try { window.localStorage.setItem("the-house-language", language); } catch (e) {}
      refresh();
    });
  }
  try {
    var saved = window.localStorage.getItem("the-house-language");
    if (saved === "en" || saved === "ar") language = saved;
  } catch (e) {}
  if (window.MutationObserver) {
    observer = new MutationObserver(function (records) {
      for (var i=0; i<records.length; i++) {
        if (records[i].type === "characterData") setText(records[i].target);
        else if (records[i].type === "attributes") setAttribute(records[i].target, records[i].attributeName);
        else for (var j=0; j<records[i].addedNodes.length; j++) scan(records[i].addedNodes[j]);
      }
    });
    observer.observe(document.documentElement, {subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:attrs});
  }
  $(function () {
    addLanguageControl();
    refresh();
  });
  window.TheHouseI18n = {setLanguage:function (value) { if (value === "ar" || value === "en") { language=value; refresh(); } }, getLanguage:function () { return language; }, translate:translate};
})(window, document, window.jQuery);
  var attributes = ["data-tooltip", "data-info", "title", "alt", "placeholder", "aria-label"];
  var storageKey = "the-house-language-v2";
  var language = "ar";
  var languageItem = null;
  var languageText = null;

  try {
    var savedLanguage = window.localStorage.getItem(storageKey);
    if (savedLanguage === "ar" || savedLanguage === "en") language = savedLanguage;
  } catch (ignore) {}

  function translate(value) {
    if (typeof value !== "string" || language !== "ar") return value;
    var match = value.match(/^(\\s*)([\\s\\S]*?)(\\s*)$/);
    var core = match ? match[2] : value;
    if (Object.prototype.hasOwnProperty.call(translations, core)) {
      return (match ? match[1] : "") + translations[core] + (match ? match[3] : "");
    }
    return value.replace(/The item "([^"]+)" has been used!/g, function (all, item) {
      return "تم استخدام العنصر «" + (translations[item] || item) + "»!";
    });
  }

  function syncText(node) {
    if (!node || node.nodeType !== 3 || !node.nodeValue || !node.nodeValue.trim()) return;
    if (node.parentNode && node.parentNode.closest && node.parentNode.closest("[data-house-i18n-keep]")) return;

    var current = node.nodeValue;
    if (node.__houseI18nOriginal === undefined) {
      node.__houseI18nOriginal = current;
    } else if (current !== node.__houseI18nRendered && current !== node.__houseI18nOriginal) {
      node.__houseI18nOriginal = current;
    }

    var next = translate(node.__houseI18nOriginal);
    node.__houseI18nRendered = next;
    if (current !== next) node.nodeValue = next;
  }

  function syncAttribute(element, name) {
    if (!element || element.nodeType !== 1 || element.hasAttribute("data-house-i18n-keep")) return;
    var current = element.getAttribute(name);
    if (current === null) return;

    if (!element.__houseI18nAttributes) element.__houseI18nAttributes = {};
    var state = element.__houseI18nAttributes[name];
    if (!state) {
      state = element.__houseI18nAttributes[name] = { original: current, rendered: null };
    } else if (current !== state.rendered && current !== state.original) {
      state.original = current;
    }

    var next = translate(state.original);
    state.rendered = next;
    if (current !== next) element.setAttribute(name, next);
  }

  function scan(root) {
    if (!root) return;
    if (root.nodeType === 3) {
      syncText(root);
      return;
    }
    if (root.nodeType !== 1 && root.nodeType !== 9 && root.nodeType !== 11) return;

    if (root.nodeType === 1) {
      for (var a = 0; a < attributes.length; a++) syncAttribute(root, attributes[a]);
    }

    var walker = document.createTreeWalker(root, 4, null, false);
    var node;
    while ((node = walker.nextNode())) syncText(node);

    if (root.querySelectorAll) {
      var elements = root.querySelectorAll("*");
      for (var i = 0; i < elements.length; i++) {
        for (var j = 0; j < attributes.length; j++) syncAttribute(elements[i], attributes[j]);
      }
    }
  }

  function updateLanguageItem() {
    if (!languageItem || !languageText) return;
    languageText.nodeValue = language === "ar" ? "English" : "العربية";
    languageItem.setAttribute("title", language === "ar" ? "Switch to English" : "Switch to Arabic");
    languageItem.setAttribute("aria-label", language === "ar" ? "Switch to English" : "Switch to Arabic");
  }

  function refresh() {
    if (!document.body) return;
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.body.className = document.body.className.replace(/\\bhouse-ar\\b/g, "").replace(/\\s+/g, " ").replace(/^\\s+|\\s+$/g, "");
    if (language === "ar") document.body.className += (document.body.className ? " " : "") + "house-ar";
    scan(document.body);
    updateLanguageItem();
    addLanguageControl();
  }

  function setLanguage(nextLanguage) {
    if (nextLanguage !== "ar" && nextLanguage !== "en") return;
    language = nextLanguage;
    try { window.localStorage.setItem(storageKey, language); } catch (ignore) {}
    refresh();
  }

  function addLanguageControl() {
    var list = document.querySelector("#settings ul");
    if (!list || document.getElementById("settings_language")) return;

    languageItem = document.createElement("li");
    languageItem.id = "settings_language";
    languageItem.setAttribute("data-house-i18n-keep", "true");
    languageItem.setAttribute("role", "button");
    languageItem.setAttribute("tabindex", "0");
    languageText = document.createTextNode("");
    languageItem.appendChild(languageText);

    function toggleLanguage(event) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      setLanguage(language === "ar" ? "en" : "ar");
    }
    languageItem.addEventListener("click", toggleLanguage, false);
    languageItem.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") toggleLanguage(event);
    }, false);

    list.insertBefore(languageItem, list.firstChild);
    updateLanguageItem();
  }

  function initialize() {
    if (!document.body) return;
    refresh();
    if (window.MutationObserver) {
      var observer = new MutationObserver(function (records) {
        for (var i = 0; i < records.length; i++) {
          var record = records[i];
          if (record.type === "characterData") syncText(record.target);
          else if (record.type === "attributes") syncAttribute(record.target, record.attributeName);
          else {
            for (var j = 0; j < record.addedNodes.length; j++) scan(record.addedNodes[j]);
          }
        }
        addLanguageControl();
      });
      observer.observe(document.documentElement, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true,
        attributeFilter: attributes
      });
    }
  }

  window.TheHouseI18n = {
    setLanguage: setLanguage,
    getLanguage: function () { return language; },
    translate: translate,
    refresh: refresh
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, false);
  } else {
    initialize();
  }
})(window, document);
