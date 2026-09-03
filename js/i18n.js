/* ============================================================
   Sprachumschalter + Anfrage-Formular
   Sprachen: de (Standard) / tr / en — Wahl bleibt über
   localStorage seitenübergreifend erhalten.
   ============================================================ */

(function () {
  'use strict';

  var STORAGE_KEY = 'eskidandy-lang';
  var LANGS = ['de', 'tr', 'en'];
  var CONTACT_MAIL = 'kulturklang@outlook.de';

  var TRANSLATIONS = {
    /* ---------- Startseite (Eskidandy) ---------- */
    eski_tag: {
      de: 'Kultur · Musik · Köln',
      tr: 'Kültür · Müzik · Köln',
      en: 'Culture · Music · Cologne'
    },
    eski_teaser: {
      de: 'Gitarrenabende, anatolische Klänge und lange Gespräche unter Lichterketten — unser Wohnzimmer in Köln',
      tr: 'Gitar geceleri, Anadolu ezgileri ve ışıklar altında uzun sohbetler — Köln’deki oturma odamız.',
      en: 'Guitar nights, Anatolian sounds and long conversations under string lights — our living room in Cologne'
    },
    eski_body: {
      de: 'Eskidandy ist unser Wohnzimmer unter freiem Himmel: Livemusik, Gitarrenabende, türkische Kultur und nostalgische Yeşilçam-Atmosphäre. Hier wird zugehört, gesungen und gefeiert.',
      tr: 'Eskidandy açık havadaki oturma odamız: canlı müzik, gitar geceleri, Türk kültürü ve nostaljik Yeşilçam atmosferi. Burada dinlenir, söylenir ve kutlanır.',
      en: 'Eskidandy is our open-air living room: live music, guitar nights, Turkish culture and nostalgic Yeşilçam atmosphere. A place to listen, sing and celebrate.'
    },
    video_caption: {
      de: 'Ein Abend bei uns',
      tr: 'Bizde bir akşam',
      en: 'An evening with us'
    },
    hero_cta_rent: {
      de: 'Location mieten',
      tr: 'Mekân kirala',
      en: 'Rent the venue'
    },
    dandy_tag: {
      de: 'Club · Nacht · Köln',
      tr: 'Kulüp · Gece · Köln',
      en: 'Club · Night · Cologne'
    },
    dandy_teaser: {
      de: 'Wenn die Lichter wechseln: Clubnächte und besondere Abende unter dem Namen Dandy Köln.',
      tr: 'Işıklar değişince: Dandy Köln adıyla kulüp geceleri ve özel akşamlar.',
      en: 'When the lights change: club nights and special evenings under the name Dandy Köln.'
    },
    dandy_cta: {
      de: 'Zur Dandy-Seite →',
      tr: 'Dandy sayfasına git →',
      en: 'Visit the Dandy page →'
    },
    gallery_title: {
      de: 'Galerie',
      tr: 'Galeri',
      en: 'Gallery'
    },
    about_title: {
      de: 'Über uns',
      tr: 'Hakkımızda',
      en: 'About us'
    },
    about_body: {
      de: 'Eskidandy ist ein Ort, an dem Generationen und Kulturen zusammenkommen — vom akustischen Konzert bis zur Clubnacht. Getragen von Ehrenamt, offen für alle.',
      tr: 'Eskidandy, kuşakların ve kültürlerin buluştuğu bir mekân — akustik konserden kulüp gecesine. Gönüllülükle yürür, herkese açıktır.',
      en: 'Eskidandy is a place where generations and cultures come together — from acoustic concerts to club nights. Volunteer-run, open to everyone.'
    },
    rent_kicker: {
      de: 'Feiern · Konzerte · Firmenevents',
      tr: 'Kutlamalar · Konserler · Kurumsal etkinlikler',
      en: 'Parties · Concerts · Company events'
    },
    rent_title: {
      de: 'Location mieten',
      tr: 'Mekân kiralama',
      en: 'Rent the venue'
    },
    rent_body: {
      de: 'Terrasse, Innenraum und Technik können für private Feiern, Konzerte und Firmenevents gemietet werden. Schreib uns für Termine und Konditionen.',
      tr: 'Teras, iç mekân ve teknik ekipman özel kutlamalar, konserler ve kurumsal etkinlikler için kiralanabilir. Tarih ve koşullar için bize yazın.',
      en: 'Terrace, indoor space and equipment are available for private parties, concerts and company events. Write to us for dates and conditions.'
    },
    form_name: {
      de: 'Name',
      tr: 'İsim',
      en: 'Name'
    },
    form_email: {
      de: 'E-Mail',
      tr: 'E-posta',
      en: 'E-mail'
    },
    form_phone: {
      de: 'Telefon (optional)',
      tr: 'Telefon (isteğe bağlı)',
      en: 'Phone (optional)'
    },
    form_date: {
      de: 'Wunschtermin',
      tr: 'İstenen tarih',
      en: 'Preferred date'
    },
    form_type: {
      de: 'Art der Veranstaltung',
      tr: 'Etkinlik türü',
      en: 'Type of event'
    },
    form_type_private: {
      de: 'Private Feier',
      tr: 'Özel kutlama',
      en: 'Private party'
    },
    form_type_concert: {
      de: 'Konzert / Kulturabend',
      tr: 'Konser / Kültür gecesi',
      en: 'Concert / cultural evening'
    },
    form_type_company: {
      de: 'Firmenevent',
      tr: 'Kurumsal etkinlik',
      en: 'Company event'
    },
    form_type_other: {
      de: 'Sonstiges',
      tr: 'Diğer',
      en: 'Other'
    },
    form_guests: {
      de: 'Gästezahl (ca.)',
      tr: 'Kişi sayısı (yakl.)',
      en: 'Number of guests (approx.)'
    },
    form_message: {
      de: 'Nachricht',
      tr: 'Mesaj',
      en: 'Message'
    },
    form_error: {
      de: 'Bitte fülle Name, E-Mail und Nachricht aus.',
      tr: 'Lütfen isim, e-posta ve mesaj alanlarını doldurun.',
      en: 'Please fill in name, e-mail and message.'
    },
    form_submit: {
      de: 'Anfrage senden',
      tr: 'Talep gönder',
      en: 'Send inquiry'
    },
    form_note: {
      de: 'Beim Absenden öffnet sich dein E-Mail-Programm mit der fertigen Anfrage an kulturklang@outlook.de — du kannst sie dort noch prüfen und abschicken.',
      tr: 'Gönderdiğinizde, kulturklang@outlook.de adresine hazır talebinizle e-posta programınız açılır — göndermeden önce kontrol edebilirsiniz.',
      en: 'Submitting opens your e-mail app with the finished inquiry to kulturklang@outlook.de — you can review it there before sending.'
    },
    form_privacy: {
      de: 'Hinweise zum Umgang mit deinen Daten: Datenschutzerklärung',
      tr: 'Verilerinizin kullanımına ilişkin bilgiler: Gizlilik Politikası',
      en: 'How we handle your data: privacy policy'
    },
    form_mail_subject: {
      de: 'Anfrage Location-Miete — Eskidandy',
      tr: 'Mekân kiralama talebi — Eskidandy',
      en: 'Venue rental inquiry — Eskidandy'
    },
    form_source: {
      de: 'Angefragt über',
      tr: 'Talep kaynağı',
      en: 'Inquiry via'
    },
    dandy_rent_kicker: {
      de: 'Clubnächte · Partys · Private Events',
      tr: 'Kulüp geceleri · Partiler · Özel etkinlikler',
      en: 'Club nights · Parties · Private events'
    },
    dandy_rent_body: {
      de: 'Du willst die Nacht selbst gestalten? Der Laden kann für Clubnächte, Partys und private Feiern gemietet werden — Soundsystem und Licht inklusive. Schreib uns.',
      tr: 'Geceyi kendin şekillendirmek mi istiyorsun? Mekân kulüp geceleri, partiler ve özel kutlamalar için kiralanabilir — ses sistemi ve ışık dahil. Bize yaz.',
      en: 'Want to shape the night yourself? The venue can be rented for club nights, parties and private celebrations — sound system and lights included. Write to us.'
    },
    contact_title: {
      de: 'Anfahrt & Kontakt',
      tr: 'Ulaşım & İletişim',
      en: 'Directions & Contact'
    },
    address_label: {
      de: 'Adresse',
      tr: 'Adres',
      en: 'Address'
    },
    mail_label: {
      de: 'E-Mail',
      tr: 'E-posta',
      en: 'E-mail'
    },
    maps_link: {
      de: 'In Google Maps öffnen →',
      tr: 'Google Haritalar’da aç →',
      en: 'Open in Google Maps →'
    },

    /* ---------- Unsere Geschichte (Yeşilçam-Story) ---------- */
    story_kicker: {
      de: 'Unsere Geschichte',
      tr: 'Hikayemiz',
      en: 'Our story'
    },
    story_title: {
      de: 'EskiDandy: Eine Yeşilçam-Geschichte',
      tr: 'EskiDandy: Bir Yeşilçam Hikayesi',
      en: 'EskiDandy: A Yeşilçam Story'
    },
    story_p1: {
      de: 'Guten Abend, ihr Freunde mit dem schönen Herzen — meine Damen und Herren, die ihr Teil unserer Geschichte seid.',
      tr: 'İyi akşamlar gönlü güzel dostlar, hikayemize ortak olan hanımefendiler ve beyefendiler.',
      en: 'Good evening, dear friends with beautiful hearts — ladies and gentlemen who are part of our story.'
    },
    story_p2: {
      de: 'Ihr seid heute nicht einfach durch eine Tür getreten. Ihr seid in jenen Satz hineingetreten, den wir alle so sehr vermissen: „Ach, was es auch gab — es gab es früher. Alles war von damals …“',
      tr: 'Bugün burada sadece bir kapıdan içeri girmediniz; aslında hepimizin çok özlediği o cümleden içeri adım attınız: „Ah, ne varsa eskilerde vardı, her şey eskidendi...“',
      en: 'Tonight you didn’t just walk through a door. You stepped into the sentence we all miss so much: “Ah, whatever was good belonged to the old days — everything was better back then…”'
    },
    story_p3: {
      de: 'Unsere Reise begann 2008 unter dem Namen Dandy. Die Jahre vergingen, der Laden schloss — doch eure tiefe Sehnsucht endete nie. Immer wieder habt ihr uns nach dem Geschmack des „alten Dandy“ gefragt. In diesem Moment verstanden wir: Unser Name war längst gefunden. Wir verbanden unsere Marke mit diesem wehmütigen, warmen Wort des Türkischen — wir wurden EskiDandy.',
      tr: 'Bizim yolculuğumuz 2008 yılında Dandy olarak başladı. Yıllar geçti, dükkan kapandı ama sizlerin o derin özlemi hiç bitmedi. Bize hep o „Eski Dandy“nin tadını sordunuz. İşte o an anladık ki; bizim adımız çoktan konulmuş. Türkçenin o hüzünlü ama sıcak ifadesiyle markamızı birleştirdik: EskiDandy olduk.',
      en: 'Our journey began in 2008 under the name Dandy. Years passed, the shop closed — but your deep longing never faded. Again and again you asked us for the taste of the “old Dandy”. That was the moment we understood: our name had long been chosen. We joined our brand with that melancholy yet warm Turkish word — we became EskiDandy.'
    },
    story_p4: {
      de: 'Denn das Leben ist genau wie dieses Wortspiel: so elegant wie ein edler Dandy und zugleich so voller Sehnsucht wie ein leises „eskidendi“ — früher war’s.',
      tr: 'Çünkü hayat, tam da o kelime oyunundaki gibi; hem asil bir Dandy kadar şık, hem de „eskidendi“ diyecek kadar özlem dolu...',
      en: 'Because life is exactly like that play on words: as elegant as a true dandy, and as full of longing as a quiet “eskidendi” — it was all long ago.'
    },
    story_p5: {
      de: 'Schaut euch um. Diese alten Fernseher, verstaubten Schreibmaschinen, verstummten Grammophone … Sie mögen nicht mehr funktionieren, aber sie haben hier eine viel wichtigere Aufgabe: Sie sind keine Dekoration — sie sind Zeugen. Stille Wächter jener Yeşilçam-Tage voller Respekt, Würde und großer Liebesgeschichten.',
      tr: 'Etrafınıza bir bakın. Bu eski televizyonlar, tozlu daktilolar, suskun gramofonlar... Onlar artık çalışmıyor olabilirler, ama burada çok daha önemli bir görevleri var: Dekor değil, birer şahit olarak buradalar. Onlar Yeşilçam’ın o saygılı, seviyeli ve büyük aşklarla dolu günlerinin sessiz bekçileri.',
      en: 'Look around you. These old televisions, dusty typewriters, silent gramophones… They may not work anymore, but they have a far more important role here: they are not décor — they are witnesses. Silent guardians of those Yeşilçam days full of respect, dignity and great love stories.'
    },
    story_p6: {
      de: 'Wir haben diesen Ort nicht nur mit Dingen eingerichtet, sondern mit Ehrfurcht, Haltung und reinem Herzschlag. Für uns ist das hier kein Geschäft — es ist eine Verbeugung, mit der wir die zarte Seele des Yeşilçam-Kinos lebendig halten.',
      tr: 'Biz burayı sadece eşyalarla değil, hürmetle, klas duruşla ve safi kalp atışıyla donattık. Bizim için burası sadece bir işletme değil, Yeşilçam’ın o naif ruhunu yaşattığımız bir saygı duruşudur.',
      en: 'We furnished this place not just with objects, but with reverence, with poise, and with a pure heartbeat. To us this is not a business — it is a tribute that keeps the gentle soul of Yeşilçam cinema alive.'
    },
    story_p7: {
      de: 'Jetzt schlagen wir ein neues Kapitel auf: Wir gehen über das Dasein eines gewöhnlichen Betriebs hinaus und führen unseren Weg als Verein fort — als KulturKlang e.V. Unsere Tür steht allen offen, die diese Leidenschaft teilen und die Eleganz jener alten Tage kennenlernen und weiterleben lassen wollen. Dieser Ort ist das gemeinsame Zuhause aller, die ihr Herz an dieses kulturelle Erbe verloren haben.',
      tr: 'Artık bu yolculukta yeni bir sayfa açıyoruz: Sıradan bir ticari işletme olmanın ötesine geçerek, yolumuza KulturKlang e.V. (KültürelSes) derneği olarak devam ediyoruz. Bu tutkuyu paylaşan, o eski günlerin zarafetini tanımak ve yaşatmak isteyen herkese kapımız sonuna kadar açık. Burası, bu kültürel mirasa gönül veren herkesin ortak evi.',
      en: 'And now we are opening a new chapter: moving beyond being an ordinary commercial venture, we continue our journey as an association — KulturKlang e.V. Our door is wide open to everyone who shares this passion and wants to discover and keep alive the elegance of those old days. This place is the shared home of everyone who has given their heart to this cultural heritage.'
    },
    story_p8: {
      de: 'Genießt heute Abend zwischen diesen stillen Zeugen die Musik und die Erinnerungen. Lasst uns mit dem Respekt, den wir füreinander empfinden, die Klasse der alten Tage neu aufleben.',
      tr: 'Lütfen bu akşam bu sessiz tanıkların arasında, müziğin ve hatıraların tadını çıkarın. Birbirimize duyduğumuz saygıyla, o eski günlerin klasını yeniden yaşatalım.',
      en: 'Tonight, among these silent witnesses, enjoy the music and the memories. With the respect we hold for one another, let us bring the class of the old days back to life.'
    },
    story_p9: {
      de: 'Willkommen bei EskiDandy — willkommen in der Familie des KulturKlang e.V.',
      tr: 'EskiDandy’ye ve KulturKlang e.V. ailesine hoş geldiniz.',
      en: 'Welcome to EskiDandy — welcome to the KulturKlang e.V. family.'
    },
    story_more: {
      de: 'Die ganze Geschichte lesen',
      tr: 'Hikayenin devamını oku',
      en: 'Read the full story'
    },
    story_less: {
      de: 'Weniger anzeigen',
      tr: 'Daha az göster',
      en: 'Show less'
    },

    /* ---------- Dandy-Seite ---------- */
    dandy_page_tag: {
      de: 'Club · Nacht · Köln',
      tr: 'Kulüp · Gece · Köln',
      en: 'Club · Night · Cologne'
    },
    dandy_page_body: {
      de: 'Dandy ist die dunkle Schwester des Eskidandy: Clubnächte und Partys mit lokalen und internationalen DJs. Roh, laut und ehrlich — mitten in Köln.',
      tr: 'Dandy, Eskidandy’nin karanlık kardeşi: yerel ve uluslararası DJ’lerle kulüp geceleri ve partiler. Ham, yüksek ve dürüst — Köln’ün ortasında.',
      en: 'Dandy is Eskidandy’s dark sister: club nights and parties with local and international DJs. Raw, loud and honest — in the middle of Cologne.'
    },
  };

  var currentLang = 'de';

  function getLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (LANGS.indexOf(stored) !== -1) return stored;
    } catch (e) { /* privater Modus o. ä. */ }
    return 'de';
  }

  function setLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* egal */ }
    apply(lang);
  }

  function apply(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var entry = TRANSLATIONS[el.getAttribute('data-i18n')];
      if (entry && entry[lang]) el.textContent = entry[lang];
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
  }

  /* Anfrage-Formular: baut aus den Feldern eine fertige Mail
     und öffnet das E-Mail-Programm (kein Server nötig). */
  function setupRentForm(form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var get = function (name) {
        var field = form.elements[name];
        return field ? field.value.trim() : '';
      };

      var error = form.querySelector('[data-form-error]');
      if (!get('name') || !get('email') || !get('message')) {
        if (error) error.hidden = false;
        return;
      }
      if (error) error.hidden = true;

      var typeSelect = form.elements.type;
      var typeLabel = typeSelect.options[typeSelect.selectedIndex].textContent;

      var t = function (key) { return TRANSLATIONS[key][currentLang]; };
      var source = form.getAttribute('data-form-source');
      var lines = [
        source ? t('form_source') + ': ' + source : null,
        t('form_name') + ': ' + get('name'),
        t('form_email') + ': ' + get('email'),
        t('form_phone') + ': ' + (get('phone') || '—'),
        t('form_date') + ': ' + (get('date') || '—'),
        t('form_type') + ': ' + typeLabel,
        t('form_guests') + ': ' + (get('guests') || '—'),
        '',
        get('message')
      ].filter(function (line) { return line !== null; });

      window.location.href = 'mailto:' + CONTACT_MAIL +
        '?subject=' + encodeURIComponent(t('form_mail_subject')) +
        '&body=' + encodeURIComponent(lines.join('\n'));
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang'));
      });
    });

    /* "Weiterlesen"-Aufklapper der Geschichte */
    document.querySelectorAll('[data-story-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var section = btn.closest('.story');
        var open = section.classList.toggle('story--open');
        btn.setAttribute('data-i18n', open ? 'story_less' : 'story_more');
        btn.textContent = TRANSLATIONS[open ? 'story_less' : 'story_more'][currentLang];
        if (!open) section.scrollIntoView({ block: 'start' });
      });
    });

    document.querySelectorAll('[data-rent-form]').forEach(setupRentForm);

    apply(getLang());
  });
})();
