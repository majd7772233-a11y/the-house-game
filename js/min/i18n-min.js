(function (window, document) {
"use strict";
var translations = {
  "Enter": "دخول",
  "reset game": "إعادة اللعبة",
  "Start from the beginning.": "ابدأ من البداية",
  "full screen": "ملء الشاشة",
  "Hey!": "مهلاً!",
  "Hello!": "مرحباً!",
  "I hope he's alive...": "آمل أن يكون ما زال حياً...",
  "What?!": "ماذا؟!",
  "What's going on?!": "ما الذي يحدث؟!",
  "Where am I?": "أين أنا؟",
  "Locked!": "مغلق!",
  "This aquarium is... Strange": "هذا الحوض... غريب",
  "Teleport!? ...": "انتقال آني؟! ...",
  "Come downstairs...": "انزل إلى الطابق السفلي...",
  "NOW!": "الآن!",
  "Merge with me.": "اندماج... انضم إليّ.",
  "WHAT the...!?": "ما هذا بحق...؟!",
  "Would you like to step into the darkness?": "هل ترغب في الدخول إلى الظلام؟",
  "Ok": "حسناً",
  "OK": "حسناً",
  "No!": "لا!",
  "Cancel": "إلغاء",
  "The game will start from the beggining. Save data will be erased.": "ستبدأ اللعبة من جديد، وسيتم مسح بيانات الحفظ.",
  "Use the switch": "استخدم المفتاح",
  " seconds remaining": " ثوانٍ متبقية",
  "time out": "انتهى الوقت",
  "It works now!": "إنه يعمل الآن!",
  "Good luck!": "حظاً موفقاً!",
  "Thank you man!": "شكراً لك يا رجل!",
  "What was that?!": "ما ذلك؟!",
  "Was it real?": "هل كان ذلك حقيقياً؟",
  "Huh?": "هاه؟",
  "Fssssssss": "سسسسسسس!",
  "Leave me alone!": "اتركني وشأني!",
  "The item \"": "العنصر \"",
  "\" has been used!": "\" تم استخدامه!",
  "Item": "عنصر",
  "Fish": "السمكة",
  "Hi.": "أهلاً.",
  "I don't have time to talk with you.": "ليس لدي وقت للتحدث معك.",
  "Oh really? I have A LOT.": "حقاً؟ لدي الكثير من الوقت.",
  "Tell me... Did you look through the window?": "أخبرني... هل نظرت من النافذة؟",
  "Yes I did.": "نعم، فعلت.",
  "No.": "لا.",
  "So please take a look and tell me what did you see.": "إذن ألقِ نظرة وأخبرني ماذا رأيت.",
  "So what did you see then?": "إذن، ماذا رأيت؟",
  "So what did you see than?": "إذن، ماذا رأيت؟",
  "Yeah. C'mon! Check that window.": "أجل. هيا! ألقِ نظرة من تلك النافذة.",
  "Many flying... Objects?": "أجسام... طائرة كثيرة؟",
  "Wow. I have to check it out!": "رائع! يجب أن أتحقق من الأمر!",
  "The furnace wants to eat a twig": "الفرن يريد أن يأكل غصناً.",
  "The furnace wants to eat your note. You may need it later – maybe you should write it down?": "الفرن يريد أن يأكل ملاحظتك. قد تحتاج إليها لاحقاً؛ ربما عليك تدوينها؟",
  "The furnace want's to eat your note.": "الفرن يريد أن يأكل ملاحظتك.",
  "The furnace want's to eat a coal.": "الفرن يريد أن يأكل قطعة فحم.",
  "Give a note.": "أعطه الملاحظة.",
  "Keep a note to yourself.": "احتفظ بالملاحظة لنفسك.",
  "Nom, nom, nom.": "ممم... لذيذ!",
  "I want more!": "أريد المزيد!",
  "YEAH!": "أجل!",
  "Check your room! Things have changed!": "تفقد غرفتك! لقد تغيرت أشياء كثيرة!",
  "I'm weak...": "أنا ضعيف...",
  "Help me please...": "ساعدني أرجوك...",
  "Still hungry...": "ما زلت جائعاً...",
  "Sheet of paper": "ورقة",
  "Some kind of illustration. Interesting... Might be useful.": "نوع من الرسومات. مثير للاهتمام... قد يكون مفيداً.",
  "The Picture": "اللوحة",
  "Look through the window": "انظر عبر النافذة",
  "A plant": "نبتة",
  "The Aquarium": "حوض الأسماك",
  "Go to the corridor": "اذهب إلى الممر",
  "The key!": "المفتاح!",
  "The golden key": "المفتاح الذهبي",
  "Back to the room": "عد إلى الغرفة",
  "The gate": "البوابة",
  "A twig": "غصن",
  "A twig from the... Picture.": "غصن من... اللوحة.",
  "The phone": "الهاتف",
  "Go to the kitchen": "اذهب إلى المطبخ",
  "Go to the toilet": "اذهب إلى المرحاض",
  "Go to the bathroom": "اذهب إلى الحمّام",
  "Go downstairs": "انزل إلى الأسفل",
  "Take a look outside": "ألقِ نظرة إلى الخارج",
  "The fridge": "الثلاجة",
  "Looks like it": "يبدو كذلك",
  "Flush it!": "اسحب السيفون!",
  "Take a look in the mirror": "انظر في المرآة",
  "The washing curtain": "ستارة الحمّام",
  "Use the computer": "استخدم الحاسوب",
  "A coal": "قطعة فحم",
  "A coal.": "قطعة فحم.",
  "The Furnace": "الفرن",
  "Way out": "طريق الخروج",
  "Enter the train": "ادخل القطار",
  "Back to the platform": "عد إلى الرصيف",
  "Examine panel": "افحص لوحة التحكم",
  "Darkness...": "الظلام...",
  "Exit": "خروج",
  "Awake": "استيقظ",
  "How to enable javascript?": "كيفية تفعيل JavaScript؟",
  "see instructions": "اطّلع على التعليمات",
  "You have to enable javascript on your browser in order to play The House:": "يجب تفعيل JavaScript في متصفحك لتتمكن من لعب The House:",
  "Note:": "ملاحظة:",
  "You'll also need the latest browser version. Otherwise the game won't start!": "ستحتاج أيضاً إلى أحدث إصدار من المتصفح، وإلا فلن تبدأ اللعبة!",
  "Game made by": "من تطوير",
  "Follow me on": "تابعني على",
  "Twitter": "Twitter",
  "Learn more about the game on": "تعرف على المزيد عن اللعبة في",
  "Github": "GitHub",
  "Loading...": "جارٍ التحميل...",
  "Resume": "متابعة",
  "Restart": "إعادة البدء",
  "The House": "The House",
  "Switch game language": "تغيير لغة اللعبة",
  "key": "المفتاح",
  "note": "الملاحظة",
  "twig": "الغصن",
  "coal": "الفحم",
  "Go to the room": "اذهب إلى الغرفة",
  "Looks like it's turned off.": "يبدو أنه مطفأ.",
  "I... I don't think it's a good idea to go there.": "أنا... لا أعتقد أن الذهاب إلى هناك فكرة جيدة.",
  "There's NO WAY I'm going there!": "لا يمكنني الذهاب إلى هناك إطلاقاً!",
  "counting...": "جارٍ العد...",
  "You're not ready yet": "لست مستعداً بعد.",
  "You have to be at least partially complete to travel...": "يجب أن تنجز جزءاً من المهمة على الأقل حتى تتمكن من الانتقال...",
  "You're ready. You can go now...": "أصبحت مستعداً. يمكنك الذهاب الآن...",
  "But... Where?": "لكن... إلى أين؟",
  "To meet with yourself.": "لتقابل نفسك.",
  "It doesn't work anymore...": "لم يعد يعمل...",
  "completion: ": "نسبة الإنجاز: ",
  "status: hidden": "الحالة: مخفي",
  "status: revealed": "الحالة: مكشوف",
  "activate?": "تفعيل؟",
  "I'm waiting...": "أنا أنتظر...",
  "It's coming!": "إنه قادم!",
  "Show me the way to him.": "أرني الطريق إليه.",
  "I feel... Kind of... Better now.": "أشعر... أنني... أفضل قليلاً الآن.",
  "It's so nice outside!": "الجو في الخارج جميل جداً!",
  "Your stop is next.": "محطتك التالية.",
  "You have to leave the train.": "عليك مغادرة القطار.",
  "Huh..?": "ماذا..؟",
  "OK...": "حسناً...",
  "I guess I have no choice. I need to accept you.": "أظن أنه ليس لدي خيار. عليّ تقبّلك.",
  "But this time...": "لكن هذه المرة...",
  "I'll absorb you.": "سأمتصّك.",
  "Looks like your browser is a little": "يبدو أن متصفحك",
  "too old": "قديم جداً",
  "to run this game. ;)": "لتشغيل هذه اللعبة. ;)",
  "In order to play": "لكي تلعب",
  "you have to": "يجب عليك",
  "install one of the modern browsers": "تثبيت أحد المتصفحات الحديثة",
  "Pick tiles": "اختيار المربعات",
  "x width": "العرض الأفقي",
  "y width": "العرض العمودي",
  "Generate!": "إنشاء!",
  "Array:": "المصفوفة:",
  "Selectors:": "المحددات:",
  "Switch to English": "التبديل إلى الإنجليزية",
  "Switch to Arabic": "التبديل إلى العربية",
  "Wznów": "متابعة",
  "Od nowa": "إعادة البدء"
};
for (var translationKey in translations) {
 if (Object.prototype.hasOwnProperty.call(translations, translationKey)) {
  var normalizedKey = translationKey.replace(/^\s+|\s+$/g, "");
  if (normalizedKey !== translationKey && !Object.prototype.hasOwnProperty.call(translations, normalizedKey)) {
   translations[normalizedKey] = translations[translationKey].replace(/^\s+|\s+$/g, "");
  }
 }
}
var reverseTranslations = {};
for (var originalKey in translations) {
 if (Object.prototype.hasOwnProperty.call(translations, originalKey)) {
  var arabicValue = translations[originalKey].replace(/^\s+|\s+$/g, "");
  var englishValue = originalKey.replace(/^\s+|\s+$/g, "");
  if (arabicValue && !Object.prototype.hasOwnProperty.call(reverseTranslations, arabicValue)) reverseTranslations[arabicValue] = englishValue;
 }
}
var attributes=["title","alt","placeholder","aria-label"];
var storageKey="the-house-language-v2";
var language="ar", languageItem=null, languageText=null;
try { var saved=window.localStorage.getItem(storageKey); if(saved==="ar"||saved==="en") language=saved; } catch(ignore) {}
function translate(value) {
 if(typeof value!=="string") return value;
 var match=value.match(/^(\s*)([\s\S]*?)(\s*)$/), core=match?match[2]:value;
 if(language==="ar") {
  if(Object.prototype.hasOwnProperty.call(translations,core)) return (match?match[1]:"")+translations[core]+(match?match[3]:"");
  return value.replace(/The item "([^"]+)" has been used!/g,function(all,item){return "تم استخدام العنصر «"+(translations[item]||item)+"»!";});
 }
 if(Object.prototype.hasOwnProperty.call(reverseTranslations,core)) return (match?match[1]:"")+reverseTranslations[core]+(match?match[3]:"");
 return value.replace(/تم استخدام العنصر «([^»]+)»!/g,function(all,item){return 'The item "'+(reverseTranslations[item]||item)+'" has been used!';});
}
function hasSwitcherAncestor(node) {
 while(node&&node.nodeType===1){if(node.hasAttribute("data-house-i18n-keep"))return true;node=node.parentNode;}
 return false;
}
function syncText(node) {
 if(!node||node.nodeType!==3||!node.nodeValue||!node.nodeValue.trim()||hasSwitcherAncestor(node.parentNode))return;
 var current=node.nodeValue;
 if(node.__houseI18nOriginal===undefined)node.__houseI18nOriginal=current;
 else if(current!==node.__houseI18nRendered&&current!==node.__houseI18nOriginal)node.__houseI18nOriginal=current;
 var next=translate(node.__houseI18nOriginal);node.__houseI18nRendered=next;if(current!==next)node.nodeValue=next;
}
function syncAttribute(el,name) {
 if(!el||el.nodeType!==1||el.hasAttribute("data-house-i18n-keep"))return;
 var current=el.getAttribute(name);if(current===null)return;
 if(!el.__houseI18nAttributes)el.__houseI18nAttributes={};
 var state=el.__houseI18nAttributes[name];
 if(!state)state=el.__houseI18nAttributes[name]={original:current,rendered:null};
 else if(current!==state.rendered&&current!==state.original)state.original=current;
 var next=translate(state.original);state.rendered=next;if(current!==next)el.setAttribute(name,next);
}
function scan(root) {
 if(!root)return;if(root.nodeType===3){syncText(root);return;}
 if(root.nodeType!==1&&root.nodeType!==9&&root.nodeType!==11)return;
 if(root.nodeType===1)for(var a=0;a<attributes.length;a++)syncAttribute(root,attributes[a]);
 var walker=document.createTreeWalker(root,4,null,false),node;while((node=walker.nextNode()))syncText(node);
 if(root.querySelectorAll){var all=root.querySelectorAll("*");for(var i=0;i<all.length;i++)for(var j=0;j<attributes.length;j++)syncAttribute(all[i],attributes[j]);}
}
function updateLanguageItem() {
 if(!languageItem||!languageText)return;
 languageText.nodeValue=language==="ar"?"English":"العربية";
 languageItem.setAttribute("title",language==="ar"?"Switch to English":"Switch to Arabic");
 languageItem.setAttribute("aria-label",language==="ar"?"Switch to English":"Switch to Arabic");
}
function addLanguageControl() {
 var list=document.querySelector("#settings ul");if(!list||document.getElementById("settings_language"))return;
 languageItem=document.createElement("li");languageItem.id="settings_language";
 languageItem.setAttribute("data-house-i18n-keep","true");languageItem.setAttribute("role","button");languageItem.setAttribute("tabindex","0");
 languageText=document.createTextNode("");languageItem.appendChild(languageText);
 function toggle(event){if(event){event.preventDefault();event.stopPropagation();}setLanguage(language==="ar"?"en":"ar");}
 languageItem.addEventListener("click",toggle,false);
 languageItem.addEventListener("keydown",function(event){if(event.key==="Enter"||event.key===" ")toggle(event);},false);
 list.insertBefore(languageItem,list.firstChild);updateLanguageItem();
}
function refresh() {
 if(!document.body)return;
 document.documentElement.lang=language;document.documentElement.dir=language==="ar"?"rtl":"ltr";
 document.body.className=document.body.className.replace(/\bhouse-ar\b/g,"").replace(/\s+/g," ").replace(/^\s+|\s+$/g,"");
 if(language==="ar")document.body.className+=(document.body.className?" ":"")+"house-ar";
 scan(document.body);addLanguageControl();updateLanguageItem();
}
function setLanguage(next) {
 if(next!=="ar"&&next!=="en")return;language=next;
 try{window.localStorage.setItem(storageKey,language);}catch(ignore){}
 refresh();
}
function initialize() {
 if(!document.body)return;refresh();
 if(window.MutationObserver){
  var observer=new MutationObserver(function(records){
   for(var i=0;i<records.length;i++){
    var record=records[i];
    if(record.type==="characterData")syncText(record.target);
    else if(record.type==="attributes")syncAttribute(record.target,record.attributeName);
    else for(var j=0;j<record.addedNodes.length;j++)scan(record.addedNodes[j]);
   }
   addLanguageControl();
  });
  observer.observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:attributes});
 }
}
window.TheHouseI18n={setLanguage:setLanguage,getLanguage:function(){return language;},translate:translate,refresh:refresh};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",initialize,false);else initialize();
})(window,document);