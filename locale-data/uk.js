!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.uk=t())}(this,function(){"use strict";return[{locale:"uk",pluralRuleFunction:function(e,t){var a=String(e).split("."),n=a[0],o=!a[1],r=Number(a[0])==e,i=r&&a[0].slice(-1),l=r&&a[0].slice(-2),f=n.slice(-1),m=n.slice(-2);return t?3==i&&13!=l?"few":"other":o&&1==f&&11!=m?"one":o&&2<=f&&f<=4&&(m<12||14<m)?"few":o&&0==f||o&&5<=f&&f<=9||o&&11<=m&&m<=14?"many":"other"},fields:{year:{displayName:"рік",relative:{0:"цього року",1:"наступного року","-1":"торік"},relativeTime:{future:{one:"через {0} рік",few:"через {0} роки",many:"через {0} років",other:"через {0} року"},past:{one:"{0} рік тому",few:"{0} роки тому",many:"{0} років тому",other:"{0} року тому"}}},month:{displayName:"місяць",relative:{0:"цього місяця",1:"наступного місяця","-1":"минулого місяця"},relativeTime:{future:{one:"через {0} місяць",few:"через {0} місяці",many:"через {0} місяців",other:"через {0} місяця"},past:{one:"{0} місяць тому",few:"{0} місяці тому",many:"{0} місяців тому",other:"{0} місяця тому"}}},day:{displayName:"день",relative:{0:"сьогодні",1:"завтра",2:"післязавтра","-2":"позавчора","-1":"учора"},relativeTime:{future:{one:"через {0} день",few:"через {0} дні",many:"через {0} днів",other:"через {0} дня"},past:{one:"{0} день тому",few:"{0} дні тому",many:"{0} днів тому",other:"{0} дня тому"}}},hour:{displayName:"година",relative:{0:"цієї години"},relativeTime:{future:{one:"через {0} годину",few:"через {0} години",many:"через {0} годин",other:"через {0} години"},past:{one:"{0} годину тому",few:"{0} години тому",many:"{0} годин тому",other:"{0} години тому"}}},minute:{displayName:"хвилина",relative:{0:"цієї хвилини"},relativeTime:{future:{one:"через {0} хвилину",few:"через {0} хвилини",many:"через {0} хвилин",other:"через {0} хвилини"},past:{one:"{0} хвилину тому",few:"{0} хвилини тому",many:"{0} хвилин тому",other:"{0} хвилини тому"}}},second:{displayName:"секунда",relative:{0:"зараз"},relativeTime:{future:{one:"через {0} секунду",few:"через {0} секунди",many:"через {0} секунд",other:"через {0} секунди"},past:{one:"{0} секунду тому",few:"{0} секунди тому",many:"{0} секунд тому",other:"{0} секунди тому"}}}}}]});
