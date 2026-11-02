// Complaint & grievance forms — utilities, telecom, banking, insurance,
// consumer protection, neighbourhood and public services. Extended catalog.
import type { DocumentItem } from "./documents";
import { T7, D7, W7 } from "./forms-shared";

export const formsChikayat: DocumentItem[] = [
  // ─── Eau & électricité (ONEE) ───
  {
    id: "chk-onee-coupure-injustifiee",
    cat: "chikayat",
    title: T7(
      "شكاية انقطاع غير مبرر للماء والكهرباء",
      "Réclamation pour coupure injustifiée d'eau et d'électricité",
      "Complaint about unjustified water and electricity cut-off",
      "Reclamación por corte injustificado de agua y electricidad",
      "Reclamo per sospensione ingiustificata di acqua ed elettricità",
      "Beschwerde über ungerechtfertigte Wasser- und Stromsperre",
      "Жалоба на неоправданное отключение воды и электроэнергии"
    ),
    desc: D7(
      "شكاية تقدم إلى المكتب الوطني للكهرباء والماء حين يتم قطع الخدمة دون إنذار مسبق أو سبب مشروع.",
      "Réclamation adressée à l'ONEE lorsque la fourniture est coupée sans préavis ni motif légitime.",
      "Complaint filed with ONEE when the supply is cut off without notice or legitimate reason.",
      "Reclamación presentada ante la ONEE cuando el suministro se corta sin aviso ni motivo legítimo.",
      "Reclamo presentato alla ONEE quando la fornitura viene sospesa senza preavviso.",
      "Beschwerde bei der ONEE, wenn die Versorgung ohne Vorankündigung gesperrt wird.",
      "Жалоба в ONEE на отключение без предупреждения и законного основания."
    ),
    where: W7(
      "وكالة المكتب الوطني للكهرباء والماء (ONEE) أو بوابة الشكايات chikaya.ma",
      "Agence de l'ONEE ou portail national des réclamations chikaya.ma",
      "ONEE local agency or the national complaints portal chikaya.ma",
      "Agencia de la ONEE o portal nacional de reclamaciones chikaya.ma",
      "Agenzia ONEE o portale nazionale dei reclami chikaya.ma",
      "ONEE-Agentur oder nationales Beschwerdeportal chikaya.ma",
      "Агентство ONEE или национальный портал жалоб chikaya.ma"
    ),
    authority: "one",
    keywords: ["انقطاع", "ONEE", "coupure", "كهرباء", "ماء", "cut-off"],
    popular: true,
  },
  {
    id: "chk-onee-facture-erronee",
    cat: "chikayat",
    title: T7(
      "شكاية فاتورة خاطئة للماء والكهرباء",
      "Réclamation pour facture erronée d'eau et d'électricité",
      "Complaint about an erroneous water and electricity bill",
      "Reclamación por factura errónea de agua y electricidad",
      "Reclamo per fattura errata di acqua ed elettricità",
      "Beschwerde über eine fehlerhafte Wasser- und Stromrechnung",
      "Жалоба на ошибочный счёт за воду и электроэнергию"
    ),
    desc: D7(
      "شكاية تقدَّم حين تتضمن الفاتورة مبالغ لا تعكس الاستهلاك الحقيقي للزبون.",
      "Réclamation déposée lorsque la facture inclut des sommes qui ne reflètent pas la consommation réelle du client.",
      "Complaint filed when the bill includes amounts that do not reflect the customer's actual consumption.",
      "Reclamación presentada cuando la factura incluye importes que no reflejan el consumo real del abonado.",
      "Reclamo presentato quando la fattura comprende importi che non riflettono il consumo reale dell'utente.",
      "Beschwerde, wenn die Rechnung Beträge enthält, die nicht den tatsächlichen Verbrauch des Kunden widerspiegeln.",
      "Жалоба подаётся, когда счёт содержит суммы, не отражающие фактическое потребление клиента."
    ),
    where: W7(
      "تودع بوكالة المكتب الوطني للكهرباء والماء أو عبر chikaya.ma، مع إرفاق الفاتورة محل النزاع.",
      "À déposer à une agence de l'ONEE ou sur chikaya.ma, en joignant la facture contestée.",
      "File at an ONEE agency or on chikaya.ma, attaching the disputed bill.",
      "Presentar en una agencia de la ONEE o en chikaya.ma, adjuntando la factura impugnada.",
      "Depositare presso un'agenzia ONEE o su chikaya.ma, allegando la fattura contestata.",
      "Bei einer ONEE-Agentur oder über chikaya.ma einreichen, unter Beifügung der beanstandeten Rechnung.",
      "Подать в агентство ONEE или через chikaya.ma, приложив оспариваемый счёт."
    ),
    authority: "one",
    keywords: ["فاتورة", "surfacturation", "facture", "ONEE", "bill"],
  },
  {
    id: "chk-onee-compteur-defectueux",
    cat: "chikayat",
    title: T7(
      "شكاية عداد معطل أو غير دقيق",
      "Réclamation pour compteur défectueux",
      "Complaint about a defective utility meter",
      "Reclamación por contador defectuoso",
      "Reclamo per contatore difettoso",
      "Beschwerde über einen defekten Zähler",
      "Жалоба на неисправный счётчик"
    ),
    desc: D7(
      "طلب فحص العداد ومراقبته حين يُشتبه في دقة تسجيله أو يتوقف عرضه عن العمل.",
      "Demande de vérification du compteur lorsque son enregistrement paraît inexact ou son affichage reste bloqué.",
      "Request for meter inspection when its readings seem inaccurate or its display has stopped.",
      "Solicitud de verificación del contador cuando su registro parece inexacto o su pantalla se bloquea.",
      "Richiesta di verifica del contatore quando le registrazioni appaiono inesatte o il display si blocca.",
      "Antrag auf Zählerprüfung, wenn die Aufzeichnung ungenau erscheint oder die Anzeige stehen bleibt.",
      "Запрос на проверку счётчика, если его показания кажутся неточными или индикация остановилась."
    ),
    where: W7(
      "تودع بوكالة ONEE أو عبر chikaya.ma، مع ذكر رقم العداد وعنوان العقار.",
      "À déposer à une agence ONEE ou sur chikaya.ma, en précisant le numéro du compteur et l'adresse du bien.",
      "File at an ONEE agency or on chikaya.ma, stating the meter number and property address.",
      "Presentar en una agencia de la ONEE o en chikaya.ma, indicando el número del contador y la dirección.",
      "Depositare presso un'agenzia ONEE o su chikaya.ma, indicando il numero del contatore e l'indirizzo.",
      "Bei einer ONEE-Agentur oder über chikaya.ma einreichen, mit Angabe der Zählernummer und Anschrift.",
      "Подать в агентство ONEE или через chikaya.ma, указав номер счётчика и адрес объекта."
    ),
    authority: "one",
    keywords: ["عداد", "compteur", "meter", "ONEE", "فحص"],
  },
  {
    id: "chk-onee-retard-branchement",
    cat: "chikayat",
    title: T7(
      "شكاية تأخر ربط العقار بالماء والكهرباء",
      "Réclamation pour retard de raccordement à l'eau et à l'électricité",
      "Complaint about delayed water and electricity connection",
      "Reclamación por retraso en la conexión de agua y electricidad",
      "Reclamo per ritardo nell'allacciamento ad acqua ed elettricità",
      "Beschwerde über verzögerten Wasser- und Stromanschluss",
      "Жалоба на задержку подключения воды и электричества"
    ),
    desc: D7(
      "تظلم من تجاوز أجل ربط مسكن بالماء أو الكهرباء رغم أداء مصاريف الربط كاملة.",
      "Recours contre le dépassement des délais de raccordement d'un logement malgré le paiement intégral des frais.",
      "Grievance over missed connection deadlines for a home despite full payment of the charges.",
      "Recurso contra el retraso en el allanamiento de una vivienda a pesar del pago íntegro de los gastos.",
      "Ricorso contro il superamento dei termini di allacciamento di un'abitazione malgrado il pagamento integrale.",
      "Beschwerde über überschrittene Anschlusstermine trotz vollständiger Zahlung der Gebühren.",
      "Жалоба на нарушение сроков подключения жилья при полной оплате сборов."
    ),
    where: W7(
      "تودع بوكالة ONEE أو عبر one.org.ma، مرفقة بوصل أداء مصاريف الربط.",
      "À déposer à une agence ONEE ou via one.org.ma, accompagnée de la quittance des frais de raccordement.",
      "File at an ONEE agency or via one.org.ma, with the receipt for the connection charges.",
      "Presentar en una agencia de la ONEE o vía one.org.ma, con el recibo de los gastos de conexión.",
      "Depositare presso un'agenzia ONEE o via one.org.ma, con la ricevuta delle spese di allacciamento.",
      "Bei einer ONEE-Agentur oder über one.org.ma, mit der Quittung der Anschlussgebühren.",
      "Подать в агентство ONEE или через one.org.ma, приложив квитанцию об оплате подключения."
    ),
    authority: "one",
    keywords: ["ربط", "raccordement", "connection", "تأخر", "ONEE"],
  },
  {
    id: "chk-onee-tension-faible",
    cat: "chikayat",
    title: T7(
      "شكاية ضعف التوتر الكهربائي في الشبكة",
      "Réclamation pour faible tension du réseau électrique",
      "Complaint about low voltage in the electricity network",
      "Reclamación por baja tensión en la red eléctrica",
      "Reclamo per bassa tensione nella rete elettrica",
      "Beschwerde über niedrige Spannung im Stromnetz",
      "Жалоба на низкое напряжение в электросети"
    ),
    desc: D7(
      "شكاية من انخفاض التوتر الكهربائي بما يتلف الأجهزة المنزلية ويقلص جودة الخدمة المقدمة.",
      "Plainte signalant une tension insuffisante qui endommage les appareils ménagers et dégrade la qualité de la fourniture.",
      "Complaint about insufficient voltage that damages household appliances and degrades the quality of supply.",
      "Reclamación por una tensión insuficiente que daña los electrodomésticos y degrada la calidad del suministro.",
      "Reclamo per una tensione insufficiente che danneggia gli elettrodomestici e degrada la qualità della fornitura.",
      "Beschwerde über unzureichende Spannung, die Haushaltsgeräte beschädigt und die Versorgungsqualität verschlechtert.",
      "Жалоба на недостаточное напряжение, которое портит бытовые приборы и снижает качество электроснабжения."
    ),
    where: W7(
      "تودع بوكالة ONEE أو عبر chikaya.ma مع وصف دقيق لطبيعة الضعف المسجل.",
      "À déposer à une agence ONEE ou sur chikaya.ma, avec une description précise de la baisse constatée.",
      "File at an ONEE agency or on chikaya.ma, describing precisely the drop observed.",
      "Presentar en una agencia de la ONEE o en chikaya.ma, describiendo con precisión la caída constatada.",
      "Depositare presso un'agenzia ONEE o su chikaya.ma, descrivendo con precisione il calo constatato.",
      "Bei einer ONEE-Agentur oder über chikaya.ma, mit genauer Beschreibung des festgestellten Spannungsabfalls.",
      "Подать в агентство ONEE или через chikaya.ma, точно описав зафиксированное падение напряжения."
    ),
    authority: "one",
    keywords: ["توتر", "tension", "voltage", "شبكة", "réseau"],
  },
  {
    id: "chk-onee-coupures-repetees",
    cat: "chikayat",
    title: T7(
      "شكاية تكرار انقطاع الماء والكهرباء",
      "Réclamation pour coupures répétées d'eau et d'électricité",
      "Complaint about repeated water and electricity outages",
      "Reclamación por cortes repetidos de agua y electricidad",
      "Reclamo per interruzioni ripetute di acqua ed elettricità",
      "Beschwerde über wiederholte Wasser- und Stromausfälle",
      "Жалоба на повторяющиеся отключения воды и электричества"
    ),
    desc: D7(
      "احتجاج على تكرار انقطاع الخدمة بنفس الحي دون تدخل المكتب لمعالجة الخلل القائم.",
      "Protestation contre des coupures fréquentes du réseau dans le même quartier, sans intervention corrective de l'office.",
      "Protest against frequent network outages in the same neighbourhood, with no corrective action by the office.",
      "Protesta por cortes frecuentes en el mismo barrio, sin intervención correctora de la oficina.",
      "Protesta contro interruzioni frequenti nello stesso quartiere, senza alcun intervento correttivo dell'ufficio.",
      "Protest gegen häufige Versorgungsunterbrechungen im selben Viertel ohne korrigierendes Eingreifen des Amtes.",
      "Протест против частых отключений в одном и том же районе без корректирующих мер со стороны офиса."
    ),
    where: W7(
      "توجه إلى المديرية الجهوية لـ ONEE أو عبر بوابة الشكايات chikaya.ma.",
      "À adresser à la direction régionale de l'ONEE ou via le portail chikaya.ma.",
      "Send to the ONEE regional directorate or via the chikaya.ma portal.",
      "Dirigir a la dirección regional de la ONEE o vía el portal chikaya.ma.",
      "Da indirizzare alla direzione regionale ONEE o tramite il portale chikaya.ma.",
      "An die ONEE-Regionaldirektion oder über das Portal chikaya.ma richten.",
      "Направить в региональную дирекцию ONEE или через портал chikaya.ma."
    ),
    authority: "one",
    keywords: ["انقطاعات", "coupures", "outages", "تكرار", "ONEE"],
  },
  {
    id: "chk-onee-erreur-releve",
    cat: "chikayat",
    title: T7(
      "شكاية خطأ في قراءة العداد",
      "Réclamation pour erreur de relevé du compteur",
      "Complaint about a faulty meter reading",
      "Reclamación por error de lectura del contador",
      "Reclamo per errore di lettura del contatore",
      "Beschwerde über fehlerhafte Zählerablesung",
      "Жалоба на ошибочное снятие показаний счётчика"
    ),
    desc: D7(
      "طلب تصحيح فاتورة بُنيت على قراءة خاطئة أو تقدير تعسفي للاستهلاك الشهري.",
      "Demande de rectification d'une facture établie sur la base d'une lecture erronée ou d'une estimation arbitraire.",
      "Request to correct a bill built on an erroneous reading or an arbitrary estimate of consumption.",
      "Solicitud de rectificación de una factura basada en una lectura errónea o una estimación arbitraria.",
      "Richiesta di rettifica di una fattura basata su una lettura errata o su una stima arbitraria.",
      "Antrag auf Berichtigung einer Rechnung, die auf einer fehlerhaften Ablesung oder willkürlichen Schätzung beruht.",
      "Требование исправить счёт, составленный на основе ошибочного показания или произвольной оценки потребления."
    ),
    where: W7(
      "تودع بوكالة ONEE مرفقة بصورة من الفاتورة وقراءة العداد الحالية.",
      "À déposer à une agence ONEE avec copie de la facture et la lecture actuelle du compteur.",
      "File at an ONEE agency with a copy of the bill and the current meter reading.",
      "Presentar en una agencia de la ONEE con copia de la factura y la lectura actual del contador.",
      "Depositare presso un'agenzia ONEE con copia della fattura e la lettura attuale del contatore.",
      "Bei einer ONEE-Agentur mit Kopie der Rechnung und der aktuellen Zählerablesung einreichen.",
      "Подать в агентство ONEE с копией счёта и текущими показаниями счётчика."
    ),
    authority: "one",
    keywords: ["قراءة", "relevé", "reading", "عداد", "تصحيح"],
  },
  {
    id: "chk-onee-refus-regularisation",
    cat: "chikayat",
    title: T7(
      "شكاية رفض تسوية وضعية الحساب",
      "Réclamation pour refus de régularisation du compte",
      "Complaint about refusal to regularise the account",
      "Reclamación por negativa a regularizar la cuenta",
      "Reclamo per rifiuto di regolarizzazione del conto",
      "Beschwerde über verweigerte Kontobereinigung",
      "Жалоба на отказ урегулировать состояние счёта"
    ),
    desc: D7(
      "تظلم من رفض المكتب تسوية رصيد الحساب بعد ثبوت وجود خطأ واضح في الفوترة.",
      "Recours lorsque l'office refuse d'ajuster le solde du compte après la constatation d'une facturation manifestement erronée.",
      "Grievance filed when the office refuses to adjust the account balance after an obviously erroneous bill.",
      "Recurso cuando la oficina se niega a ajustar el saldo tras comprobarse una facturación manifiestamente errónea.",
      "Ricorso quando l'ufficio rifiuta di rettificare il saldo dopo l'accertamento di una fatturazione manifestamente errata.",
      "Beschwerde, wenn das Amt den Kontostand nach einer offensichtlich fehlerhaften Abrechnung nicht anpasst.",
      "Жалоба подаётся, когда офис отказывается скорректировать баланс после явно ошибочной тарификации."
    ),
    where: W7(
      "تودع بوكالة ONEE أو عبر chikaya.ma مع الإشارة إلى مراسلات التصحيح السابقة.",
      "À déposer à une agence ONEE ou sur chikaya.ma, en référençant les correspondances de correction antérieures.",
      "File at an ONEE agency or on chikaya.ma, referencing previous correction letters.",
      "Presentar en una agencia de la ONEE o en chikaya.ma, citando las correcciones anteriores.",
      "Depositare presso un'agenzia ONEE o su chikaya.ma, citando le precedenti richieste di correzione.",
      "Bei einer ONEE-Agentur oder über chikaya.ma, unter Hinweis auf frühere Korrekturschreiben.",
      "Подать в агентство ONEE или через chikaya.ma, сославшись на предыдущую переписку об исправлении."
    ),
    authority: "one",
    keywords: ["تسوية", "régularisation", "حساب", "ONEE", "رفض"],
  },
  {
    id: "chk-onee-indemnite-dommages",
    cat: "chikayat",
    title: T7(
      "طلب تعويض عن تلف أجهزة كهربائية",
      "Demande d'indemnisation pour appareils électriques endommagés",
      "Claim for compensation for damaged electrical appliances",
      "Solicitud de indemnización por aparatos eléctricos dañados",
      "Domanda di risarcimento per apparecchi elettrici danneggiati",
      "Antrag auf Entschädigung für beschädigte Elektrogeräte",
      "Требование возместить ущерб за повреждённую электротехнику"
    ),
    desc: D7(
      "مطالبة كتابية بتعويض عن أجهزة تلفت إثر عطب في الشبكة أو عودة مفاجئة للتيار.",
      "Demande écrite de dédommagement pour des appareils grillés à la suite d'un incident de tension imputable au réseau.",
      "Written claim for appliances burnt out following a network incident attributable to the supplier.",
      "Solicitud escrita de indemnización por aparatos dañados tras un incidente de tensión imputable a la red.",
      "Richiesta scritta di risarcimento per apparecchi danneggiati a seguito di un incidente di tensione imputabile alla rete.",
      "Schriftliche Forderung nach Ersatz für Geräte, die durch einen dem Netz zurechenbaren Zwischenfall zerstört wurden.",
      "Письменное требование о возмещении за приборы, сгоревшие вследствие перепада напряжения по вине сети."
    ),
    where: W7(
      "توجه إلى المكتب الوطني للكهرباء والماء مع إرفاق فواتير شراء أو إصلاح الأجهزة.",
      "À adresser à l'ONEE en joignant les factures d'achat ou de réparation des appareils.",
      "Send to ONEE, enclosing purchase or repair invoices for the appliances.",
      "Dirigir a la ONEE adjuntando las facturas de compra o reparación de los aparatos.",
      "Da indirizzare alla ONEE allegando le fatture di acquisto o riparazione degli apparecchi.",
      "An die ONEE richten, mit Kauf- oder Reparaturrechnungen der Geräte.",
      "Направить в ONEE, приложив счета о покупке или ремонте приборов."
    ),
    authority: "one",
    keywords: ["تعويض", "indemnisation", "dommages", "أجهزة", "appareils"],
  },
  {
    id: "chk-onee-poteau-dangereux",
    cat: "chikayat",
    title: T7(
      "شكاية عمود كهرباء مائل أو خطر",
      "Réclamation pour poteau électrique dangereux",
      "Complaint about a dangerous electricity pole",
      "Reclamación por poste eléctrico peligroso",
      "Reclamo per palo elettrico pericoloso",
      "Beschwerde über gefährlichen Strommasten",
      "Жалоба на опасный электрический столб"
    ),
    desc: D7(
      "تبليغ عن عمود مائل أو أسلاك مكشوفة تعرض المارة والساكنة لخطر مباشر.",
      "Signalement d'un poteau penché ou de câbles dénudés exposant les riverains à un danger immédiat.",
      "Report of a leaning pole or bare cables exposing residents to immediate danger.",
      "Denuncia de un poste inclinado o cables desnudos que exponen a los vecinos a un peligro inmediato.",
      "Segnalazione di un palo inclinato o di cavi scoperti che espongono i residenti a un pericolo immediato.",
      "Meldung eines schiefen Mastes oder freiliegender Kabel, die Anwohner einer unmittelbaren Gefahr aussetzen.",
      "Сообщение о наклонном столбе либо оголённых проводах, подвергающих жителей прямой опасности."
    ),
    where: W7(
      "تبلغ فورا لوكالة ONEE أو مصلحة الطوارئ التابعة لها بالمنطقة.",
      "À signaler sans délai à l'agence ONEE ou à son service d'urgence régional.",
      "Report immediately to the ONEE agency or its regional emergency service.",
      "Comunicar de inmediato a la agencia ONEE o a su servicio de urgencias regional.",
      "Segnalare senza ritardo all'agenzia ONEE o al suo servizio d'emergenza regionale.",
      "Unverzüglich der ONEE-Agentur oder ihrem regionalen Notdienst melden.",
      "Немедленно сообщить в агентство ONEE или его региональную аварийную службу."
    ),
    authority: "one",
    keywords: ["عمود", "poteau", "pole", "خطر", "أسلاك"],
  },

  // ─── Télécom & internet ───
  {
    id: "chk-telecom-facturation-abusive",
    cat: "chikayat",
    title: T7(
      "شكاية فوترة مبالغ فيها لدى مشغل الاتصالات",
      "Réclamation pour facturation abusive auprès d'un opérateur télécom",
      "Complaint about abusive billing by a telecom operator",
      "Reclamación por facturación abusiva de un operador de telecomunicaciones",
      "Reclamo per fatturazione abusiva di un operatore di telecomunicazioni",
      "Beschwerde über überhöhte Abrechnung eines Telekommunikationsanbieters",
      "Жалоба на завышенную тарификацию оператора связи"
    ),
    desc: D7(
      "طعن في مبلغ فوتر فوق مضمون العرض أو لا يتناسب مع الاستعمال الفعلي الموثق.",
      "Contestation d'un montant facturé au-delà du forfait souscrit ou sans correspondance avec l'usage réel constaté.",
      "Dispute over an amount billed beyond the subscribed plan or out of line with actual recorded usage.",
      "Disputa sobre un importe facturado por encima del plan contratado o sin correspondencia con el uso real.",
      "Contestazione di un importe fatturato oltre il piano sottoscritto o non corrispondente all'uso reale.",
      "Beanstandung eines über den gebuchten Tarif hinaus berechneten Betrags ohne Bezug zum tatsächlichen Verbrauch.",
      "Оспаривание суммы, выставленной сверх тарифного плана и не соответствующей фактическому использованию."
    ),
    where: W7(
      "توجه إلى خدمة الزبائن للمشغل كتابة، مع الاحتفاظ بإشعار الإيداع كإثبات.",
      "À adresser au service client de l'opérateur par écrit, en conservant l'accusé de réception comme preuve.",
      "Send in writing to the operator's customer service, keeping the acknowledgement as proof.",
      "Enviar por escrito al servicio de atención del operador, conservando el acuse de recibo como prueba.",
      "Da inviare per iscritto al servizio clienti dell'operatore, conservando la ricevuta come prova.",
      "Schriftlich an den Kundendienst des Anbieters richten und den Empfangsbeleg als Nachweis aufbewahren.",
      "Направить письменно в службу клиентов оператора, сохранив подтверждение о вручении как доказательство."
    ),
    keywords: ["فاتورة", "فوترة", "facturation", "billing", "مشغل"],
    popular: true,
  },
  {
    id: "chk-telecom-debit-insuffisant",
    cat: "chikayat",
    title: T7(
      "شكاية ضعف سرعة الأنترنت عن المعروض",
      "Réclamation pour débit très inférieur à l'offre souscrite",
      "Complaint about speed far below the subscribed offer",
      "Reclamación por velocidad muy inferior a la oferta contratada",
      "Reclamo per velocità molto inferiore all'offerta sottoscritta",
      "Beschwerde über weit unter der gebuchten Tarifleistung liegende Geschwindigkeit",
      "Жалоба на скорость, значительно ниже заявленной в тарифе"
    ),
    desc: D7(
      "إثبات أن سرعة القياس تبقى بكثير تحت السرعة المعلنة في العرض المتعاقد عليه.",
      "Constatation d'un débit mesuré très en dessous du débit annoncé dans l'offre commerciale acceptée par le client.",
      "Finding that the measured speed falls far below the figure advertised in the offer the customer accepted.",
      "Constatación de una velocidad medida muy por debajo de la anunciada en la oferta aceptada por el cliente.",
      "Constatazione di una velocità misurata ben al di sotto di quella annunciata nell'offerta accettata dal cliente.",
      "Feststellung, dass die gemessene Geschwindigkeit weit unter der beworbenen Leistung der gebuchten Offerte liegt.",
      "Установление, что измеренная скорость намного ниже заявленной в принятом клиентом предложении."
    ),
    where: W7(
      "تودع لدى خدمة زبائن المشغل مقرونة بنتيجة قياس موثقة للسرعة.",
      "À déposer auprès du service client de l'opérateur, assortie d'un relevé de mesure du débit.",
      "File with the operator's customer service, accompanied by a recorded speed measurement.",
      "Presentar ante el servicio de atención del operador, junto con una medición documentada de la velocidad.",
      "Depositare presso il servizio clienti dell'operatore, corredata da una misura documentata della velocità.",
      "Beim Kundendienst des Anbieters einreichen, mit dokumentiertem Geschwindigkeitsmessprotokoll.",
      "Подать в службу клиентов оператора, приложив документированный замер скорости."
    ),
    keywords: ["سرعة", "débit", "speed", "أنترنت", "internet"],
  },
  {
    id: "chk-telecom-interruption-prolongee",
    cat: "chikayat",
    title: T7(
      "شكاية انقطاع ممتد للأنترنت أو الهاتف",
      "Réclamation pour interruption prolongée d'internet ou du téléphone",
      "Complaint about prolonged internet or phone outage",
      "Reclamación por interrupción prolongada de internet o teléfono",
      "Reclamo per interruzione prolungata di internet o telefonia",
      "Beschwerde über langanhaltenden Internet- oder Telefon-ausfall",
      "Жалоба на длительное отключение интернета или телефона"
    ),
    desc: D7(
      "شكاية من انقطاع خدمة دام عدة أيام دون إصلاح ولا إخبار من المشغل.",
      "Plainte pour une coupure de service qui dure plusieurs jours sans rétablissement ni information de l'opérateur.",
      "Complaint about an outage lasting several days with no repair or information from the operator.",
      "Reclamación por un corte que dura varios días sin reparación ni información del operador.",
      "Reclamo per un'interruzione durata diversi giorni senza ripristino né informazione da parte dell'operatore.",
      "Beschwerde über einen mehrtägigen Ausfall ohne Wiederherstellung oder Information durch den Anbieter.",
      "Жалоба на перебой длиной в несколько дней без восстановления и без объяснений оператора."
    ),
    where: W7(
      "تودع لدى المشغل كتابة، مع إمكانية تصعيدها إلى الوكالة (anrt.ma).",
      "À déposer par écrit auprès de l'opérateur, avec saisine éventuelle de l'ANRT (anrt.ma).",
      "File in writing with the operator, with possible referral to ANRT (anrt.ma).",
      "Presentar por escrito ante el operador, con posible recurso a la ANRT (anrt.ma).",
      "Depositare per iscritto presso l'operatore, con eventuale ricorso all'ANRT (anrt.ma).",
      "Schriftlich beim Anbieter einreichen, gegebenenfalls mit Rüge bei der ANRT (anrt.ma).",
      "Подать письменно оператору с возможной эскалацией в ANRT (anrt.ma)."
    ),
    keywords: ["انقطاع", "interruption", "outage", "خدمة", "service"],
  },
  {
    id: "chk-telecom-non-activation",
    cat: "chikayat",
    title: T7(
      "شكاية عدم تفعيل الاشتراك رغم الأداء",
      "Réclamation pour abonnement non activé après paiement",
      "Complaint about subscription not activated after payment",
      "Reclamación por suscripción no activada tras el pago",
      "Reclamo per abbonamento non attivato dopo il pagamento",
      "Beschwerde über nach Zahlung nicht aktivierte Dienstleitung",
      "Жалоба на неактивированную подписку после оплаты"
    ),
    desc: D7(
      "مساءلة مشغل لم يفعّل الخط رغم أداء مشترك لمصاريف التفعيل كاملة.",
      "Mise en cause d'un opérateur qui n'active pas la ligne alors que les frais d'activation ont été réglés.",
      "Holding an operator accountable for not activating a line though activation fees were paid.",
      "Exigencia a un operador que no activa la línea aunque se pagaron las tasas de activación.",
      "Contestazione verso un operatore che non attiva la linea malgrado il pagamento delle spese di attivazione.",
      "Beanstandung eines Anbieters, der die Leitung trotz bezahlter Aktivierungsgebühren nicht schaltet.",
      "Претензия к оператору, не активировавшему линию при оплаченном взносе за активацию."
    ),
    where: W7(
      "تودع لدى المشغل مرفقة بوصل الأداء ورقم الطلب أو التفعيل.",
      "À déposer auprès de l'opérateur avec le justificatif de paiement et la référence de la demande.",
      "File with the operator, attaching proof of payment and the application reference.",
      "Presentar ante el operador con el justificante de pago y la referencia de la solicitud.",
      "Depositare presso l'operatore con la prova di pagamento e il riferimento della richiesta.",
      "Beim Anbieter einreichen mit Zahlungsnachweis und Vorgangsnummer.",
      "Подать оператору с подтверждением оплаты и номером заявки."
    ),
    keywords: ["تفعيل", "activation", "اشتراك", "abonnement"],
  },
  {
    id: "chk-telecom-remboursement-resiliation",
    cat: "chikayat",
    title: T7(
      "شكاية رفض إرجاع المبالغ بعد فسخ العقد",
      "Réclamation pour remboursement refusé après résiliation",
      "Complaint about refund refused after termination",
      "Reclamación por reembolso denegado tras la baja",
      "Reclamo per rimborso negato dopo la disdetta",
      "Beschwerde über verweigerte Rückerstattung nach Kündigung",
      "Жалоба на отказ вернуть средства после расторжения"
    ),
    desc: D7(
      "مطالبة باسترجاع رصيد الاشتراك بعد فسخ مؤكد، عند رفض المشغل الإرجاع رغم المراسلات.",
      "Revendication du remboursement du solde de l'abonnement après résiliation confirmée, en cas de refus persistant de l'opérateur.",
      "Claim for the subscription balance after confirmed termination, in case of the operator's persistent refusal.",
      "Reclamación del saldo de la suscripción tras la baja confirmada, ante la negativa persistente del operador.",
      "Richiesta del saldo dell'abbonamento dopo la disdetta confermata, di fronte al rifiuto persistente dell'operatore.",
      "Forderung nach Rückerstattung des Guthabens nach bestätigter Kündigung bei anhaltender Weigerung des Anbieters.",
      "Требование вернуть остаток средств после подтверждённого расторжения при упорном отказе оператора."
    ),
    where: W7(
      "ترسل كتابة مضمونا مع الإشعار بالتوصل إلى المشغل، وإلا ترفع لدى ANRT.",
      "Par lettre recommandée à l'opérateur, sinon à porter devant l'ANRT.",
      "By registered letter to the operator, otherwise to be taken to ANRT.",
      "Por carta certificada al operador, en caso contrario ante la ANRT.",
      "Con raccomandata all'operatore, altrimenti davanti all'ANRT.",
      "Per Einschreiben an den Anbieter, sonst vor der ANRT.",
      "Заказным письмом оператору, иначе — в ANRT."
    ),
    keywords: ["استرجاع", "remboursement", "refund", "فسخ", "résiliation"],
  },
  {
    id: "chk-telecom-prelevement-resiliation",
    cat: "chikayat",
    title: T7(
      "شكاية استمرار الاقتطاع بعد فسخ العقد",
      "Réclamation pour prélèvements après résiliation",
      "Complaint about debits after termination",
      "Reclamación por cargos tras la baja",
      "Reclamo per addebiti dopo la disdetta",
      "Beschwerde über Abbuchungen nach Kündigung",
      "Жалоба на списания после расторжения договора"
    ),
    desc: D7(
      "احتجاج على مواصلة الاقتطاع عن خط تم فسخه، مع طلب رد المبالغ كاملة.",
      "Protestation contre des prélèvements poursuivis sur une ligne résiliée, avec demande de remboursement intégral des sommes.",
      "Protest against debits continued on a terminated line, with a demand for full reimbursement.",
      "Protesta contra cargos continuados sobre una línea dada de baja, con exigencia de reembolso íntegro.",
      "Protesta contro addebiti proseguiti su una linea disdetta, con richiesta di rimborso integrale.",
      "Protest gegen fortgesetzte Abbuchungen auf einer gekündigten Leitung mit Forderung voller Rückerstattung.",
      "Протест против списаний по расторгнутой линии с требованием полного возврата средств."
    ),
    where: W7(
      "تودع لدى المشغل مع إثبات وثيقة الفسخ وتاريخ سريانها.",
      "À déposer auprès de l'opérateur avec la preuve de la résiliation et sa date d'effet.",
      "File with the operator, with proof of termination and its effective date.",
      "Presentar ante el operador con prueba de la baja y su fecha de efecto.",
      "Depositare presso l'operatore con la prova della disdetta e la sua data di efficacia.",
      "Beim Anbieter einreichen mit Nachweis der Kündigung und deren Wirksamkeitsdatum.",
      "Подать оператору с доказательством расторжения и датой его вступления в силу."
    ),
    keywords: ["اقتطاع", "prélèvement", "debit", "فسخ", "résiliation"],
  },
  {
    id: "chk-telecom-anrt-recours",
    cat: "chikayat",
    title: T7(
      "تظلم لدى الوكالة الوطنية لتنظيم الاتصالات (ANRT)",
      "Recours auprès de l'ANRT (télécoms)",
      "Referral to ANRT (telecoms)",
      "Recurso ante la ANRT (telecomunicaciones)",
      "Ricorso presso l'ANRT (telecomunicazioni)",
      "Beschwerde bei der ANRT (Telekommunikation)",
      "Обращение в ANRT (телеком)"
    ),
    desc: D7(
      "تصعيد النزاع إلى الجهة المنظمة للاتصالات بعدما لم يجب المشغل أو لم يقدم حلا مرضيا.",
      "Saisine du régulateur des télécommunications lorsque l'opérateur n'a pas répondu ou n'a pas offert de solution satisfaisante.",
      "Escalation to the telecom regulator when the operator failed to reply or offered no satisfactory solution.",
      "Acudir al regulador de telecomunicaciones cuando el operador no respondió ni ofreció solución satisfactoria.",
      "Ricorso al regolatore delle telecomunicazioni quando l'operatore non ha risposto né offerto una soluzione soddisfacente.",
      "Rüge bei der Regulierungsbehörde, wenn der Anbieter nicht antwortete oder keine zufrieden stellende Lösung bot.",
      "Эскалация к регулятору связи, когда оператор не ответил или не предложил удовлетворительного решения."
    ),
    where: W7(
      "يودع عبر بوابة الوكالة anrt.ma أو بكتاب مضمون إلى مقرها بالرباط.",
      "À déposer via le portail anrt.ma ou par lettre recommandée au siège de l'Agence à Rabat.",
      "File via the anrt.ma portal or by registered letter to the Agency's Rabat headquarters.",
      "Presentar vía el portal anrt.ma o por carta certificada a la sede de la Agencia en Rabat.",
      "Depositare tramite il portale anrt.ma o per raccomandata alla sede dell'Agenzia a Rabat.",
      "Über das Portal anrt.ma oder per Einschreiben an den Sitz der Behörde in Rabat.",
      "Подать через портал anrt.ma или заказным письмом в штаб-квартиру агентства в Рабате."
    ),
    keywords: ["ANRT", "تظلم", "recours", "telecom", "تصعيد"],
  },
  {
    id: "chk-telecom-modification-unilaterale",
    cat: "chikayat",
    title: T7(
      "شكاية تعديل أحادي لشروط العقد",
      "Réclamation pour modification unilatérale du contrat",
      "Complaint about unilateral change of contract terms",
      "Reclamación por modificación unilateral del contrato",
      "Reclamo per modifica unilaterale del contratto",
      "Beschwerde über einseitige Vertragsänderung",
      "Жалоба на одностороннее изменение условий договора"
    ),
    desc: D7(
      "طعن في رفع للثمن أو تغيير للشروط فُرض دون إعلام مسبق ولا موافقة المشترك.",
      "Contestation d'une hausse de tarif ou d'un changement de conditions imposé sans information préalable ni accord du client.",
      "Dispute over a price rise or condition change imposed without prior notice or the customer's agreement.",
      "Disputa sobre una subida de precio o cambio de condiciones impuesto sin aviso previo ni consentimiento.",
      "Contestazione di un aumento di tariffa o di una modifica imposti senza preavviso né consenso del cliente.",
      "Beanstandung einer ohne Vorankündigung oder Zustimmung auferlegten Preiserhöhung oder Bedingungsänderung.",
      "Оспаривание повышения цены или изменения условий, навязанных без уведомления и согласия абонента."
    ),
    where: W7(
      "تودع لدى المشغل مع نسخة من العقد وشروطه المتعاقد عليها.",
      "À déposer auprès de l'opérateur avec copie du contrat et de ses conditions convenues.",
      "File with the operator, enclosing a copy of the contract and its agreed terms.",
      "Presentar ante el operador con copia del contrato y sus condiciones pactadas.",
      "Depositare presso l'operatore con copia del contratto e delle condizioni convenute.",
      "Beim Anbieter mit Vertragskopie und den vereinbarten Bedingungen einreichen.",
      "Подать оператору с копией договора и согласованных условий."
    ),
    keywords: ["تعديل", "modification", "عقد", "unilatérale", "contrat"],
  },
  {
    id: "chk-telecom-mise-en-demeure",
    cat: "chikayat",
    title: T7(
      "إنذار مشغل الاتصالات بشكاية دون جواب",
      "Mise en demeure d'un opérateur pour réclamation restée sans réponse",
      "Formal notice to an operator for an unanswered complaint",
      "Requerimiento a un operador por reclamación sin respuesta",
      "Diffida a un operatore per reclamo rimasto senza risposta",
      "Fristsetzung an einen Anbieter wegen einer unbeantworteten Beschwerde",
      "Официальное требование к оператору ответить на жалобу"
    ),
    desc: D7(
      "رسالة تحدد للمشغل أجلا نهائيا للجواب، وإلا رُفع النزاع إلى الجهة المنظمة للقطاع.",
      "Lettre fixant un dernier délai à l'opérateur pour répondre, faute de quoi le litige sera porté devant le régulateur.",
      "Letter setting the operator a final deadline, failing which the dispute goes to the regulator.",
      "Carta que fija al operador un plazo final, vencido el cual el litigio se llevará al regulador.",
      "Lettera che fissa all'operatore un termine ultimo, scaduto il quale la controversia sarà portata al regolatore.",
      "Schreiben, das dem Anbieter eine letzte Frist setzt, andernfalls landet der Streit vor der Regulierungsbehörde.",
      "Письмо с последним сроком для оператора, иначе спор будет передан регулятору."
    ),
    where: W7(
      "ترسل كتابة مضمونا مع الإشعار بالتوصل إلى العنوان الرسمي للمشغل.",
      "À envoyer en recommandé avec accusé de réception à l'adresse officielle de l'opérateur.",
      "Send by registered mail with acknowledgement to the operator's official address.",
      "Enviar por carta certificada con acuse de recibo a la dirección oficial del operador.",
      "Inviare per raccomandata con ricevuta di ritorno all'indirizzo ufficiale dell'operatore.",
      "Per Einschreiben mit Rückschein an die offizielle Adresse des Anbieters senden.",
      "Отправить заказным письмом с уведомлением на официальный адрес оператора."
    ),
    keywords: ["إنذار", "mise en demeure", "notice", "شكاية", "réclamation"],
  },
  {
    id: "chk-telecom-sva-factures",
    cat: "chikayat",
    title: T7(
      "شكاية خدمات ذات قيمة مضافة فوترت دون موافقة",
      "Réclamation pour services à valeur ajoutée facturés sans souscription",
      "Complaint about value-added services billed without consent",
      "Reclamación por servicios de valor añadido facturados sin suscripción",
      "Reclamo per servizi a valore aggiunto fatturati senza sottoscrizione",
      "Beschwerde über ohne Bestellung abgerechnete Mehrwertdienste",
      "Жалоба на платные сервисы, подключённые без согласия"
    ),
    desc: D7(
      "نزاع حول تفعيل خدمات مؤدى عنها دون طلب، مع المطالبة بإيقافها ورد مبالغها.",
      "Contestation d'activations de services payants non demandés, avec exigence de leur arrêt et du remboursement intégral.",
      "Dispute over paid services activated without request, demanding their deactivation and full refund.",
      "Disputa por servicios de pago activados sin solicitud, exigiendo su desactivación y reembolso íntegro.",
      "Contestazione di servizi a pagamento attivati senza richiesta, con richiesta di disattivazione e rimborso integrale.",
      "Beanstandung nicht bestellter kostenpflichtiger Dienste mit Forderung nach Abschaltung und voller Rückerstattung.",
      "Спор о платных сервисах, активированных без запроса, с требованием отключить их и вернуть деньги."
    ),
    where: W7(
      "تودع لدى المشغل مع طلب إيقاف الخدمات المؤدى عنها ورد مبالغها.",
      "À déposer auprès de l'opérateur avec demande d'arrêt des services et de reversement des sommes.",
      "File with the operator, requesting deactivation of the services and repayment of the amounts.",
      "Presentar ante el operador solicitando la desactivación de los servicios y el reembolso.",
      "Depositare presso l'operatore chiedendo la disattivazione dei servizi e il rimborso degli importi.",
      "Beim Anbieter mit Antrag auf Abschaltung der Dienste und Rückzahlung der Beträge.",
      "Подать оператору с требованием отключить сервисы и вернуть суммы."
    ),
    keywords: ["قيمة مضافة", "SVA", "value-added", "فوترة", "facturation"],
  },

  // ─── Poste & courrier (Barid Al-Maghrib) ───
  {
    id: "chk-poste-courrier-perdu",
    cat: "chikayat",
    title: T7(
      "شكاية ضياع مرسل بريدي أو مضمون",
      "Réclamation pour courrier ou recommandé non distribué",
      "Complaint about undelivered mail or registered letter",
      "Reclamación por correspondencia o carta certificada no entregada",
      "Reclamo per posta o raccomandata non consegnata",
      "Beschwerde über nicht zugestellte Post oder Einschreiben",
      "Жалоба на неврученное письмо или заказное отправление"
    ),
    desc: D7(
      "شكاية تفتح بحثا لدى بريد المغرب عن مرسل ضائع، مع المطالبة بتعويض عند تأكيد الفقدان.",
      "Réclamation ouvrant une enquête de Barid Al-Maghrib sur un envoi égaré, avec demande d'indemnité si la perte est confirmée.",
      "Complaint opening a Barid Al-Maghrib investigation into a lost item, with compensation sought if loss is confirmed.",
      "Reclamación que abre una investigación de Barid Al-Maghrib sobre un envío extraviado, con indemnización si se confirma.",
      "Reclamo che apre un'indagine di Barid Al-Maghrib su una spedizione smarrita, con indennizzo se la perdita è confermata.",
      "Beschwerde, die eine Untersuchung von Barid Al-Maghrib zu einem verlorenen Sendung einleitet, mit Entschädigung bei bestätigtem Verlust.",
      "Жалоба, открывающая расследование Barid Al-Maghrib по утерянному отправлению, с компенсацией при подтверждении утраты."
    ),
    where: W7(
      "تودع بمكتب البريد الأصلي أو عبر chikaya.ma، مع رقم تعريف الإرسال.",
      "Au bureau d'origine de la poste ou via chikaya.ma, en fournissant le numéro de suivi.",
      "At the originating post office or via chikaya.ma, providing the tracking number.",
      "En la oficina postal de origen o vía chikaya.ma, facilitando el número de seguimiento.",
      "Presso l'ufficio postale di origine o via chikaya.ma, fornendo il numero di tracciamento.",
      "Beim Ursprungspostamt oder über chikaya.ma, mit Angabe der Sendungsnummer.",
      "В исходном почтовом отделении или через chikaya.ma с номером отслеживания."
    ),
    authority: "poste",
    keywords: ["بريد", "courrier", "mail", "ضياع", "recommandé"],
  },
  {
    id: "chk-poste-colis-endommage",
    cat: "chikayat",
    title: T7(
      "شكاية وصول طرد متضرر أو ناقص",
      "Réclamation pour colis endommagé ou incomplet",
      "Complaint about a damaged or incomplete parcel",
      "Reclamación por paquete dañado o incompleto",
      "Reclamo per pacco danneggiato o incompleto",
      "Beschwerde über beschädigtes oder unvollständiges Paket",
      "Жалоба на повреждённую или неполную посылку"
    ),
    desc: D7(
      "إشعار بالأضرار المسجلة عند تسلم طرد، مقرونا بمطالبة بتعويض عن قيمته.",
      "Signalement des dégradations relevées à la réception d'un colis, assorti d'une demande d'indemnisation détaillée.",
      "Report of damage noted on receiving a parcel, accompanied by a detailed compensation claim.",
      "Comunicación de los daños constatados al recibir un paquete, junto con una reclamación de indemnización detallada.",
      "Segnalazione dei danni riscontrati alla consegna di un pacco, corredata da una richiesta di indennizzo dettagliata.",
      "Anzeige der bei Empfang eines Pakets festgestellten Schäden mit detailliertem Entschädigungsanspruch.",
      "Сообщение о повреждениях при получении посылки с приложением детализированного требования компенсации."
    ),
    where: W7(
      "تودع بمكتب التسليم مرفقة بالطرد وصورة من وصل الإرسال.",
      "Au bureau de livraison, avec le colis et une copie du récépissé d'envoi.",
      "At the delivery office, with the parcel and a copy of the dispatch receipt.",
      "En la oficina de entrega, con el paquete y copia del resguardo de envío.",
      "All'ufficio di consegna, con il pacco e una copia della ricevuta di spedizione.",
      "Bei der Ausgabestelle mit dem Paket und einer Kopie des Absenderscheins.",
      "В отделении выдачи с посылкой и копией квитанции об отправке."
    ),
    authority: "poste",
    keywords: ["طرد", "colis", "parcel", "تلف", "poste"],
  },
  {
    id: "chk-poste-retard-distribution",
    cat: "chikayat",
    title: T7(
      "شكاية تأخر توزيع البريد",
      "Réclamation pour retard de distribution du courrier",
      "Complaint about delayed mail delivery",
      "Reclamación por retraso en la distribución del correo",
      "Reclamo per ritardo nella distribuzione della posta",
      "Beschwerde über verzögerte Zustellung der Post",
      "Жалоба на задержку доставки почты"
    ),
    desc: D7(
      "شكوى من وصول البريد بصفة متأخرة على مدار أسابيع في نفس العنوان رغم المراسلات السابقة.",
      "Plainte contre une distribution du courrier systématiquement tardive dans le même secteur, malgré les relances antérieures.",
      "Complaint about systematically late delivery in the same area, despite previous follow-ups.",
      "Reclamación por una distribución sistemáticamente tardía en la misma zona, pese a reclamaciones previas.",
      "Reclamo contro una distribuzione sistematicamente in ritardo nella stessa zona, nonostante i solleciti precedenti.",
      "Beschwerde über regelmäßig verspätete Zustellung im selben Gebiet trotz früherer Nachfragen.",
      "Жалоба на систематическую задержку доставки в одном и том же районе несмотря на предыдущие обращения."
    ),
    where: W7(
      "تودع بمكتب البريد التابع للمنطقة أو عبر chikaya.ma.",
      "Au bureau de poste du secteur ou via chikaya.ma.",
      "At the local post office or via chikaya.ma.",
      "En la oficina de correos de la zona o vía chikaya.ma.",
      "Presso l'ufficio postale della zona o via chikaya.ma.",
      "Beim Postamt des Gebiets oder über chikaya.ma.",
      "В местном почтовом отделении или через chikaya.ma."
    ),
    authority: "poste",
    keywords: ["توزيع", "distribution", "بريد", "تأخر", "courrier"],
  },
  {
    id: "chk-poste-reexpedition",
    cat: "chikayat",
    title: T7(
      "شكاية عدم إعادة توجيه المراسلات",
      "Réclamation pour réexpédition du courrier non effectuée",
      "Complaint about mail forwarding not carried out",
      "Reclamación por no efectuar el reenvío del correo",
      "Reclamo per mancata rispedizione della posta",
      "Beschwerde über nicht durchgeführte Nachsendung",
      "Жалоба на невыполненную переадресацию почты"
    ),
    desc: D7(
      "تظلم من عدم وصول المراسلات إلى العنوان الجديد رغم الاكتتاب بأداء خدمة إعادة التوجيه.",
      "Recours lorsque les courriers ne parviennent pas à la nouvelle adresse malgré la souscription payante du service de réexpédition.",
      "Grievance that mail does not reach the new address despite paid subscription to the forwarding service.",
      "Recurso cuando el correo no llega a la nueva dirección pese a la suscripción pagada del reenvío.",
      "Ricorso quando la posta non giunge al nuovo indirizzo malgrado la sottoscrizione a pagamento del servizio.",
      "Beschwerde, dass die Post die neue Adresse nicht erreicht, obwohl der kostenpflichtige Nachsendedienst gebucht wurde.",
      "Жалоба на неполучение почты по новому адресу при оплаченной услуге переадресации."
    ),
    where: W7(
      "تودع بمكتب البريد الأصلي مرفقة بوصل الاكتتاب بخدمة إعادة التوجيه.",
      "Au bureau d'origine, avec le reçu de souscription au service de réexpédition.",
      "At the originating office, with the receipt for the forwarding subscription.",
      "En la oficina de origen, con el recibo de suscripción al reenvío.",
      "All'ufficio di origine, con la ricevuta di sottoscrizione al servizio.",
      "Beim Ursprungsamt mit der Quittung über die Nachsende-Buchung.",
      "В исходном отделении с квитанцией об оплате услуги переадресации."
    ),
    authority: "poste",
    keywords: ["إعادة توجيه", "réexpédition", "forwarding", "بريد", "adresse"],
  },
  {
    id: "chk-poste-mandat-impaye",
    cat: "chikayat",
    title: T7(
      "شكاية عدم أداء حوالة بريدية",
      "Réclamation pour mandat postal non payé",
      "Complaint about an unpaid postal money order",
      "Reclamación por giro postal no pagado",
      "Reclamo per vaglia postale non pagato",
      "Beschwerde über nicht ausgezahlten Postauftrag",
      "Жалоба на неоплаченный почтовый перевод"
    ),
    desc: D7(
      "تبليغ عن رفض غير مبرر لأداء مبلغ حوالة لمستفيدها، مع طلب تسوية عاجلة.",
      "Signalement d'un refus injustifié de payer un mandat à son bénéficiaire, exigeant la régularisation sans délai.",
      "Report of an unjustified refusal to pay a money order to its beneficiary, demanding prompt settlement.",
      "Denuncia de una negativa injustificada a pagar un giro a su beneficiario, exigiendo regularización inmediata.",
      "Segnalazione di un rifiuto ingiustificato di pagare un vaglia al beneficiario, chiedendo la regolarizzazione immediata.",
      "Meldung einer ungerechtfertigten Auszahlungsverweigerung an den Begünstigten mit Forderung rascher Klärung.",
      "Сообщение о необоснованном отказе выплачивать перевод получателю с требованием срочного урегулирования."
    ),
    where: W7(
      "تودع بمكتب البريد مسحوبة منه الحوالة، مع رقمها المرجعي.",
      "Au bureau postal émetteur du mandat, en indiquant sa référence.",
      "At the post office that issued the order, quoting its reference.",
      "En la oficina postal emisora del giro, indicando su referencia.",
      "Presso l'ufficio postale emittente del vaglia, indicandone il riferimento.",
      "Beim ausstellenden Postamt unter Angabe der Referenznummer.",
      "В выдавшем перевод отделении с указанием его номера."
    ),
    authority: "poste",
    keywords: ["حوالة", "mandat", "postal order", "أداء", "poste"],
  },

  // ─── Banque & assurance ───
  {
    id: "chk-banque-prelevement-abusif",
    cat: "chikayat",
    title: T7(
      "شكاية اقتطاع غير مبرر من الحساب البنكي",
      "Réclamation pour prélèvement abusif sur compte bancaire",
      "Complaint about an abusive debit on a bank account",
      "Reclamación por cargo abusivo en cuenta bancaria",
      "Reclamo per addebito abusivo su conto bancario",
      "Beschwerde über unrechtmäßige Abbuchung vom Bankkonto",
      "Жалоба на неправомерное списание с банковского счёта"
    ),
    desc: D7(
      "طعن في مبلغ مديون بدون تفويض من صاحب الحساب، مع المطالبة بعودته فورا.",
      "Contestation d'un débit effectué sans autorisation du titulaire, suivie d'une exigence de reversement immédiat des fonds.",
      "Dispute over a debit made without the holder's authorisation, followed by a demand for immediate restitution.",
      "Disputa por un cargo realizado sin autorización del titular, seguida de exigencia de devolución inmediata.",
      "Contestazione di un addebito effettuato senza autorizzazione del titolare, con richiesta di restituzione immediata.",
      "Beanstandung einer ohne Zustimmung des Kontoinhabers vorgenommenen Abbuchung mit sofortiger Rückerstattungsforderung.",
      "Оспаривание списания без авторизации владельца счёта с требованием немедленного возврата средств."
    ),
    where: W7(
      "تودع بمصلحة الزبائن بالفرع البنكي أو كتابة مضمونة إلى الإدارة العامة للبنك.",
      "Au service client de l'agence ou par lettre recommandée à la direction générale de la banque.",
      "At the branch customer service or by registered letter to the bank's head office.",
      "En el servicio de atención de la sucursal o por carta certificada a la dirección general del banco.",
      "Al servizio clienti della filiale o per raccomandata alla direzione generale della banca.",
      "Beim Kundendienst der Filiale oder per Einschreiben an die Generaldirektion der Bank.",
      "В клиентскую службу филиала или заказным письмом в головной офис банка."
    ),
    keywords: ["اقتطاع", "prélèvement", "debit", "حساب بنكي", "compte"],
    popular: true,
  },
  {
    id: "chk-banque-frais-injustifies",
    cat: "chikayat",
    title: T7(
      "شكاية مصاريف وعمولات بنكية غير مبررة",
      "Réclamation pour frais bancaires injustifiés",
      "Complaint about unjustified bank fees",
      "Reclamación por comisiones bancarias injustificadas",
      "Reclamo per commissioni bancarie ingiustificate",
      "Beschwerde über unbegründete Bankgebühren",
      "Жалоба на необоснованные банковские комиссии"
    ),
    desc: D7(
      "شكاية من عمولات أو مصاريف اقتطعت خارج ما تنص عليه اتفاقية الحساب الموقعة.",
      "Réclamation contre des commissions ou frais de tenue de compte prélevés en dehors des conditions convenues dans la convention.",
      "Complaint about commissions or account fees charged outside the terms agreed in the account convention.",
      "Reclamación contra comisiones o gastos cobrados al margen de las condiciones pactadas en la convención.",
      "Reclamo contro commissioni o spese prelevate al di fuori delle condizioni previste dalla convenzione.",
      "Beschwerde über Entgelte, die außerhalb der vereinbarten Konditionen abgebucht wurden.",
      "Жалоба на комиссии, списанные в обход условий подписанного соглашения."
    ),
    where: W7(
      "تودع بالفرع البنكي مرفقة باتفاقية الحساب وكشوف الاقتطاعات.",
      "À l'agence bancaire, avec la convention de compte et les relevés des frais.",
      "At the bank branch, with the account convention and fee statements.",
      "En la sucursal bancaria, con la convención de cuenta y los extractos de comisiones.",
      "Alla filiale della banca, con la convenzione di conto e gli estratti delle spese.",
      "In der Bankfiliale mit Kontoübereinkunft und Gebührenaufstellungen.",
      "В филиал банка с соглашением по счёту и выписками по списаниям."
    ),
    keywords: ["مصاريف", "frais", "fees", "بنك", "banque"],
  },
  {
    id: "chk-banque-erreur-virement",
    cat: "chikayat",
    title: T7(
      "شكاية خطأ في تحويل بنكي",
      "Réclamation pour erreur de virement bancaire",
      "Complaint about a mistaken bank transfer",
      "Reclamación por error en transferencia bancaria",
      "Reclamo per errore di bonifico bancario",
      "Beschwerde über fehlerhafte Banküberweisung",
      "Жалоба на ошибочный банковский перевод"
    ),
    desc: D7(
      "طلب عاجل باسترجاع تحويل نُفذ نحو مستفيد خاطئ أو بمبلغ غير صحيح.",
      "Demande urgente de rappel d'un virement exécuté vers un mauvais bénéficiaire ou pour un montant erroné.",
      "Urgent request to recall a transfer sent to the wrong beneficiary or for a wrong amount.",
      "Solicitud urgente de anulación de una transferencia hecha a un beneficiario erróneo o por importe incorrecto.",
      "Richiesta urgente di revoca di un bonifico eseguito verso un beneficiario errato o per un importo sbagliato.",
      "Dringender Antrag auf Rückruf einer an den falschen Empfänger gerichteten Überweisung.",
      "Срочная просьба отозвать перевод, отправленный неверному получателю или на неверную сумму."
    ),
    where: W7(
      "تبلغ فورا للبنك هاتفيا ثم كتابة لتوثيق طلب الاسترجاع.",
      "À signaler immédiatement à la banque par téléphone, puis par écrit pour tracer la demande de rappel.",
      "Report to the bank at once by phone, then in writing to document the recall request.",
      "Comunicar de inmediato al banco por teléfono y luego por escrito para documentar la solicitud.",
      "Segnalare subito alla banca per telefono, poi per iscritto per tracciare la richiesta di revoca.",
      "Sofort telefonisch und anschließend schriftlich der Bank melden, um den Rückruf zu belegen.",
      "Немедленно сообщить банку по телефону, затем письменно для фиксации запроса на отзыв."
    ),
    keywords: ["تحويل", "virement", "transfer", "خطأ", "erreur"],
  },
  {
    id: "chk-banque-blocage-fonds",
    cat: "chikayat",
    title: T7(
      "شكاية تجميد رصيد دون مبرر",
      "Réclamation pour blocage de fonds sans motif",
      "Complaint about funds frozen without cause",
      "Reclamación por bloqueo de fondos sin motivo",
      "Reclamo per blocco di fondi senza motivo",
      "Beschwerde über grundlose Kontosperrung",
      "Жалоба на блокировку средств без основания"
    ),
    desc: D7(
      "احتجاج على تجميد الرصيد أو رفض تنفيذ العمليات دون تسبيب قانوني يبلغ للعميل.",
      "Protestation contre l'immobilisation du solde ou le refus d'exécuter des opérations sans justification légale communiquée au client.",
      "Protest against the freezing of a balance or refusal to execute transactions without legal justification given.",
      "Protesta contra la inmovilización del saldo o la negativa a ejecutar operaciones sin justificación legal.",
      "Protesta contro il congelamento del saldo o il rifiuto di eseguire operazioni senza giustificazione legale.",
      "Protest gegen die Sperrung des Guthabens oder Verweigerung von Transaktionen ohne rechtliche Begründung.",
      "Протест против заморозки средств или отказа проводить операции без правового обоснования."
    ),
    where: W7(
      "تودع بالفرع البنكي كتابة مضمونة مع المطالبة بتسبيب القرار كتابة.",
      "À l'agence par lettre recommandée, en exigeant la motivation écrite de la décision.",
      "At the branch by registered letter, demanding written justification of the decision.",
      "En la sucursal por carta certificada, exigiendo la motivación escrita de la decisión.",
      "Alla filiale per raccomandata, esigendo la motivazione scritta della decisione.",
      "In der Filiale per Einschreiben mit der Forderung nach schriftlicher Begründung.",
      "В филиал заказным письмом с требованием письменного обоснования решения."
    ),
    keywords: ["تجميد", "blocage", "freeze", "رصيد", "fonds"],
  },
  {
    id: "chk-banque-operations-non-reconnues",
    cat: "chikayat",
    title: T7(
      "شكاية عمليات غير معترف بها على الحساب",
      "Réclamation pour opérations non reconnues sur le compte",
      "Complaint about unrecognised transactions on the account",
      "Reclamación por operaciones no reconocidas en la cuenta",
      "Reclamo per operazioni non riconosciute sul conto",
      "Beschwerde über nicht anerkannte Transaktionen",
      "Жалоба на не признанные владельцем операции"
    ),
    desc: D7(
      "إبلاغ المستشار بسحوبات أو أداءات منازع فيها، مع طلب فتح بحث داخلي فيها.",
      "Signalement au conseiller de retraits ou paiements contestés, exigeant une enquête interne et le gel des prélèvements futurs.",
      "Report to the adviser of disputed withdrawals or payments, requiring an internal inquiry and blocking further debits.",
      "Comunicación al asesor de reintegros o pagos disputados, exigiendo investigación interna y bloqueo de futuros cargos.",
      "Segnalazione al consulente di prelievi o pagamenti contestati, chiedendo un'indagine interna e il blocco degli addebiti.",
      "Anzeige umstrittener Abhebungen oder Zahlungen mit Forderung nach interner Untersuchung und Sperrung künftiger Abbuchungen.",
      "Сообщение консультанту об оспариваемых операциях с требованием внутренней проверки и блокировки списаний."
    ),
    where: W7(
      "تبلغ فورا للبنك مع طلب تجميد الوسيلة وتغيير أرقامها السرية.",
      "À signaler aussitôt à la banque, en demandant le blocage du moyen de paiement.",
      "Report to the bank at once, requesting the blocking of the payment instrument.",
      "Comunicar de inmediato al banco solicitando el bloqueo del medio de pago.",
      "Segnalare subito alla banca chiedendo il blocco dello strumento di pagamento.",
      "Der Bank sofort melden und die Sperrung des Zahlungsmittels verlangen.",
      "Немедленно сообщить банку с требованием заблокировать платёжное средство."
    ),
    keywords: ["عمليات", "opérations", "transactions", "نزاع", "carte"],
  },
  {
    id: "chk-banque-mediateur-bkam",
    cat: "chikayat",
    title: T7(
      "تظلم لدى وسيط بنك المغرب",
      "Saisine du Médiateur de Bank Al-Maghrib",
      "Referral to the Bank Al-Maghrib Mediator",
      "Recurso ante el Mediador de Bank Al-Maghrib",
      "Ricorso presso il Mediatore di Bank Al-Maghrib",
      "Beschwerde beim Ombudsmann der Bank Al-Maghrib",
      "Обращение к медиатору Банк аль-Магриб"
    ),
    desc: D7(
      "تصعيد مجاني لنزاع بنكي بقي دون حل، بإحالته على وسيط بنك المغرب للفصل فيه.",
      "Escalade gratuite d'un litige bancaire resté sans solution, confié au médiateur institutionnel de Bank Al-Maghrib.",
      "Free escalation of an unresolved banking dispute, referred to the institutional mediator of Bank Al-Maghrib.",
      "Escalada gratuita de un litigio bancario sin solución, sometido al mediador institucional de Bank Al-Maghrib.",
      "Escalazione gratuita di una controversia bancaria irrisolta, deferita al mediatore istituzionale di Bank Al-Maghrib.",
      "Kostenlose Eskalation eines ungelösten Bankstreits an den institutionellen Ombudsmann der Bank Al-Maghrib.",
      "Бесплатная эскалация нерешённого банковского спора к медиатору Банк аль-Магриб."
    ),
    where: W7(
      "يقدم عبر بوابة بنك المغرب (bkam.ma) بعد استنفاد الشكاية لدى البنك.",
      "Via le portail de Bank Al-Maghrib (bkam.ma), après épuisement du recours auprès de la banque.",
      "Through the Bank Al-Maghrib portal (bkam.ma), after exhausting the complaint with the bank.",
      "Vía el portal de Bank Al-Maghrib (bkam.ma), tras agotar la reclamación ante el banco.",
      "Tramite il portale di Bank Al-Maghrib (bkam.ma), dopo aver esaurito il reclamo presso la banca.",
      "Über das Portal der Bank Al-Maghrib (bkam.ma), nachdem der Rekurs bei der Bank erschöpft ist.",
      "Через портал Банк аль-Магриб (bkam.ma) после исчерпания обращения в банке."
    ),
    authority: "bkam",
    keywords: ["وسيط", "médiateur", "mediator", "بنك المغرب", "BAM"],
  },
  {
    id: "chk-assurance-refus-indemnisation",
    cat: "chikayat",
    title: T7(
      "شكاية رفض تعويض عن حادث",
      "Réclamation pour refus d'indemnisation d'un sinistre",
      "Complaint about refusal to indemnify a claim",
      "Reclamación por negativa a indemnizar un siniestro",
      "Reclamo per rifiuto di indennizzo di un sinistro",
      "Beschwerde über verweigerte Schadensregulierung",
      "Жалоба на отказ возместить ущерб по страховому случаю"
    ),
    desc: D7(
      "طعن في رفض طلب تعويض عن ضرر يظله عقد التأمين المبرم بين الطرفين.",
      "Contestation du rejet d'une demande d'indemnisation alors que le dommage est couvert par la police d'assurance souscrite.",
      "Dispute over the rejection of a claim although the loss is covered by the policy taken out.",
      "Disputa por el rechazo de una indemnización pese a que el daño está cubierto por la póliza.",
      "Contestazione del rifiuto di indennizzo benché il danno sia coperto dalla polizza sottoscritta.",
      "Beanstandung der Ablehnung, obwohl der Schaden durch die abgeschlossene Police gedeckt ist.",
      "Оспаривание отказа при том, что ущерб покрыт заключённым полисом."
    ),
    where: W7(
      "توجه إلى مقر الشركة مرفقة بوثائق العقد وتقرير الخبرة إن وجد.",
      "Au siège de la compagnie, avec la police d'assurance et le rapport d'expertise s'il existe.",
      "At the insurer's head office, with the policy and the expert report if any.",
      "En la sede de la compañía, con la póliza y el informe pericial si existe.",
      "Alla sede della compagnia, con la polizza e la perizia se esiste.",
      "Im Hauptsitz der Versicherung mit Police und Gutachten, falls vorhanden.",
      "В головной офис компании с полисом и отчётом экспертизы при наличии."
    ),
    keywords: ["تعويض", "indemnisation", "claim", "حادث", "sinistre"],
    popular: true,
  },
  {
    id: "chk-assurance-retard-reglement",
    cat: "chikayat",
    title: T7(
      "شكاية تأخر أداء التعويض",
      "Réclamation pour retard de règlement d'indemnité",
      "Complaint about delayed claim settlement",
      "Reclamación por retraso en el pago de la indemnización",
      "Reclamo per ritardo nel pagamento dell'indennizzo",
      "Beschwerde über verzögerte Schadenszahlung",
      "Жалоба на задержку выплаты возмещения"
    ),
    desc: D7(
      "تنبيه شركة تأمين تماطل في صرف تعويض متفق عليه بعد انقضاء الأجل القانوني.",
      "Relance d'une compagnie qui tarde à verser l'indemnité convenue, au-delà du délai réglementaire de règlement des sinistres.",
      "Follow-up of an insurer slow to pay the agreed indemnity beyond the regulatory settlement deadline.",
      "Requerimiento a una aseguradora lenta en pagar la indemnización pactada más allá del plazo reglamentario.",
      "Sollecito a una compagnia che tarda a versare l'indennizzo oltre il termine regolamentare.",
      "Mahnung eines Versicherers, der die vereinbarte Entschädigung über die reguläre Frist hinaus schuldig bleibt.",
      "Напоминание страховщику, задерживающему выплату сверх установленного срока."
    ),
    where: W7(
      "تودع لدى الشركة مرفقة بمراسلات التسوية السابقة وأرقام الملف.",
      "À déposer auprès de la compagnie avec les correspondances antérieures et les références du dossier.",
      "File with the insurer with previous correspondence and the claim references.",
      "Presentar ante la aseguradora con la correspondencia previa y las referencias del expediente.",
      "Depositare presso la compagnia con la corrispondenza precedente e i riferimenti del dossier.",
      "Beim Versicherer mit früherer Korrespondenz und den Vorgangsreferenzen.",
      "В страховую компанию с предыдущей перепиской и номерами дела."
    ),
    keywords: ["تأخر", "retard", "delay", "تسوية", "indemnité"],
  },
  {
    id: "chk-assurance-expertise-baissee",
    cat: "chikayat",
    title: T7(
      "شكاية تقدير الخبرة بأقل من قيمة الضرر",
      "Réclamation pour expertise révisée à la baisse",
      "Complaint about an appraisal revised downwards",
      "Reclamación por peritaje revisado a la baja",
      "Reclamo per perizia ridotta in basso",
      "Beschwerde über nach unten korrigiertes Gutachten",
      "Жалоба на заниженную оценку ущерба"
    ),
    desc: D7(
      "طلب خبرة مضادة حين يثبت تقدير الأضرار أقل بكثير من قيمة الخسائر الحقيقية.",
      "Demande d'une contre-expertise lorsque l'évaluation des dommages s'avère très inférieure au montant réel des pertes subies.",
      "Request for a counter-appraisal when the damage valuation falls far below the actual losses incurred.",
      "Solicitud de contraperitaje cuando la valoración resulta muy inferior a las pérdidas reales.",
      "Richiesta di controperizia quando la valutazione risulta di molto inferiore alle perdite reali subite.",
      "Antrag auf Gegengutachten, wenn die Schadensbewertung weit unter dem tatsächlichen Verlust liegt.",
      "Требование встречной экспертизы, когда оценка намного ниже реального ущерба."
    ),
    where: W7(
      "توجه إلى الشركة مطالبة بتنظيم خبرة مضادة بين الخبيرين.",
      "À adresser à la compagnie en demandant l'organisation d'une contre-expertise contradictoire.",
      "To the insurer, requesting an adversarial counter-appraisal.",
      "A la aseguradora solicitando una contraperitaje contradictoria.",
      "Alla compagnia chiedendo una controperizia contraddittoria.",
      "An die Versicherung mit Antrag auf kontradiktorisches Gegengutachten.",
      "В страховую с требованием провести состязательную встречную экспертизу."
    ),
    keywords: ["خبرة", "expertise", "تقدير", "أضرار", "dommages"],
  },
  {
    id: "chk-assurance-franchise-contestee",
    cat: "chikayat",
    title: T7(
      "شكاية مبلغ تحمل مرتفع عن العقد",
      "Réclamation pour franchise contestée",
      "Complaint about a contested deductible",
      "Reclamación por franquicia discutida",
      "Reclamo per franchigia contestata",
      "Beschwerde über strittige Selbstbeteiligung",
      "Жалоба на оспариваемую франшизу"
    ),
    desc: D7(
      "مراجعة مبلغ التحمل المقتطع من التعويض حين يجاوز ما حدد في الشروط الخاصة.",
      "Vérification de la franchise déduite de l'indemnité, lorsqu'elle dépasse le montant fixé dans les conditions particulières.",
      "Review of the deductible withheld from the indemnity when it exceeds the figure set in the specific terms.",
      "Revisión de la franquicia deducida de la indemnización cuando supera lo fijado en las condiciones particulares.",
      "Verifica della franchigia trattenuta dall'indennizzo quando supera l'importo fissato nelle condizioni particolari.",
      "Prüfung des vom Schaden abgezogenen Selbstbehalts, der über die vereinbarte Summe hinausgeht.",
      "Проверка франшизы, удержанной из выплаты, когда она превышает установленную договором сумму."
    ),
    where: W7(
      "تودع لدى الشركة مرفقة بالشروط الخاصة للعقد وفاتورة الأداء.",
      "À déposer auprès de la compagnie avec les conditions particulières et la quittance de prime.",
      "File with the insurer with the specific terms and the premium receipt.",
      "Presentar ante la aseguradora con las condiciones particulares y el recibo de prima.",
      "Depositare presso la compagnia con le condizioni particolari e la ricevuta di premio.",
      "Beim Versicherer mit den besonderen Vertragsbedingungen und der Prämiенquittung.",
      "В страховую с особыми условиями договора и квитанцией премии."
    ),
    keywords: ["تحمل", "franchise", "deductible", "تعويض", "indemnité"],
  },
  {
    id: "chk-assurance-prise-en-charge-refusee",
    cat: "chikayat",
    title: T7(
      "شكاية رفض التكفل بمصاريف علاج",
      "Réclamation pour refus de prise en charge de soins",
      "Complaint about refusal to cover medical expenses",
      "Reclamación por negativa a cubrir gastos médicos",
      "Reclamo per rifiuto di copertura delle spese mediche",
      "Beschwerde über verweigerte Übernahme von Behandlungskosten",
      "Жалоба на отказ оплатить расходы на лечение"
    ),
    desc: D7(
      "طعن في رفض التكفل بمصاريف علاج يغطيها عقد التأمين الصحي المبرم.",
      "Contestation du refus de couvrir des frais de soins pourtant couverts par la formule de garantie santé souscrite.",
      "Dispute over refusal to cover treatment costs that are covered by the health plan taken out.",
      "Disputa por la negativa a cubrir gastos amparados por la garantía de salud contratada.",
      "Contestazione del rifiuto di coprire spese sanitarie coperte dalla garanzia salute sottoscritta.",
      "Beanstandung der Weigerung, nach der gebuchten Krankenabsicherung abgedeckte Kosten zu erstatten.",
      "Оспаривание отказа оплатить лечение, покрытое оформленным медстрахованием."
    ),
    where: W7(
      "تودع لدى الشركة مرفقة بالوصفات الطبية وفواتير العلاج غير المؤداة.",
      "À déposer auprès de la compagnie avec les ordonnances et les factures des soins non réglés.",
      "File with the insurer with prescriptions and unpaid treatment invoices.",
      "Presentar ante la aseguradora con las recetas y las facturas pendientes de pago.",
      "Depositare presso la compagnia con le ricette e le fatture delle cure non saldate.",
      "Beim Versicherer mit Rezepten und unbezahlten Behandlungsrechnungen.",
      "В страховую с рецептами и неоплаченными счетами за лечение."
    ),
    keywords: ["تغطية", "prise en charge", "coverage", "صحية", "soins"],
  },
  {
    id: "chk-assurance-prime-apres-resiliation",
    cat: "chikayat",
    title: T7(
      "شكاية اقتطاع أقساط بعد فسخ عقد التأمين",
      "Réclamation pour primes prélevées après résiliation du contrat",
      "Complaint about premiums charged after terminating the policy",
      "Reclamación por primas cobradas tras la baja del contrato",
      "Reclamo per premi riscossi dopo la disdetta del contratto",
      "Beschwerde über nach Kündigung weiter eingezogene Prämien",
      "Жалоба на взносы, списываемые после расторжения полиса"
    ),
    desc: D7(
      "مطالبة برد أقساط اقتطعت بعد فسخ أبلغ به الطرف وفق الأشكال المتفق عليها.",
      "Exigence de remboursement des primes continuées après une résiliation notifiée dans les formes prévues par le contrat.",
      "Demand for repayment of premiums continued after termination notified in the manner provided by the contract.",
      "Exigencia de reembolso de primas continuadas tras una baja notificada en la forma prevista.",
      "Richiesta di rimborso dei premi proseguiti dopo una disdetta notificata nelle forme previste.",
      "Forderung nach Rückerstattung von Prämien, die nach vertragsgemäß gekündigter Police weiter abgebucht wurden.",
      "Требование вернуть взносы, списанные после расторжения, оформленного по правилам договора."
    ),
    where: W7(
      "تودع لدى الشركة مرفقة بوثيقة الفسخ وإشعار توصله.",
      "À déposer auprès de la compagnie avec l'avis de résiliation et son accusé de réception.",
      "File with the insurer with the termination notice and its acknowledgement.",
      "Presentar ante la aseguradora con el aviso de baja y su acuse de recibo.",
      "Depositare presso la compagnia con l'avviso di disdetta e la relativa ricevuta.",
      "Beim Versicherer mit Kündigungsanzeige und Empfangsbestätigung.",
      "В страховую с уведомлением о расторжении и подтверждением его получения."
    ),
    keywords: ["أقساط", "primes", "premiums", "فسخ", "résiliation"],
  },

  // ─── Commerce & consommation ───
  {
    id: "chk-commerce-produit-defectueux",
    cat: "chikayat",
    title: T7(
      "شكاية بيع منتوج معطوب",
      "Réclamation pour vente d'un produit défectueux",
      "Complaint about the sale of a defective product",
      "Reclamación por venta de producto defectuoso",
      "Reclamo per vendita di prodotto difettoso",
      "Beschwerde über den Verkauf mangelhafter Ware",
      "Жалоба на продажу дефектного товара"
    ),
    desc: D7(
      "إخطار البائع بعيب مصنعي في المبيع، مع طلب إصلاحه أو استبداله طبقا للقانون.",
      "Notification au vendeur d'un défaut de fabrication affectant le bien vendu, avec demande de réparation ou de remplacement.",
      "Notice to the seller of a manufacturing defect in the goods sold, demanding repair or replacement.",
      "Comunicación al vendedor de un defecto de fabricación, con petición de reparación o sustitución.",
      "Comunicazione al venditore di un difetto di fabbricazione, con richiesta di riparazione o sostituzione.",
      "Anzeige des Verkäufers über einen Herstellungsfehler mit Forderung nach Reparatur oder Austausch.",
      "Уведомление продавца о производственном дефекте с требованием ремонта или замены."
    ),
    where: W7(
      "تودع لدى البائع مرفقة بالفاتورة ووصف العيب المصنعي.",
      "À déposer auprès du vendeur avec la facture et la description du défaut.",
      "File with the seller with the invoice and a description of the defect.",
      "Presentar ante el vendedor con la factura y la descripción del defecto.",
      "Depositare presso il venditore con la fattura e la descrizione del difetto.",
      "Beim Verkäufer mit Rechnung und Beschreibung des Mangels.",
      "Подать продавцу с чеком и описанием дефекта."
    ),
    keywords: ["معطوب", "défectueux", "defective", "منتوج", "produit"],
  },
  {
    id: "chk-commerce-refus-garantie",
    cat: "chikayat",
    title: T7(
      "شكاية رفض تطبيق الضمان القانوني",
      "Réclamation pour refus d'appliquer la garantie",
      "Complaint about refusal to honour the warranty",
      "Reclamación por negativa a aplicar la garantía",
      "Reclamo per rifiuto di applicare la garanzia",
      "Beschwerde über verweigerte Gewährleistung",
      "Жалоба на отказ применить гарантию"
    ),
    desc: D7(
      "تذكير البائع بالتزاماته القانونية حين يكون العيب داخل أجل الضمان المحدد قانونا.",
      "Rappel au vendeur de ses obligations légales lorsque la garantie du bien couvre manifestement la panne constatée.",
      "Reminder to the seller of legal duties when the warranty clearly covers the observed fault.",
      "Recordatorio al vendedor de sus obligaciones cuando la garantía cubre la avería constatada.",
      "Promemoria al venditore dei suoi obblighi legali quando la garanzia copre il guasto constatato.",
      "Hinweis an den Verkäufer auf gesetzliche Pflichten, wenn die Garantie den Mangel deutlich abdeckt.",
      "Напоминание продавцу о законных обязанностях, когда гарантия явно покрывает поломку."
    ),
    where: W7(
      "تودع لدى البائع مرفقة ببطاقة الضمان وفاتورة الشراء.",
      "À déposer auprès du vendeur avec le certificat de garantie et la facture d'achat.",
      "File with the seller with the warranty card and the purchase invoice.",
      "Presentar ante el vendedor con la tarjeta de garantía y la factura de compra.",
      "Depositare presso il venditore con il certificato di garanzia e la fattura d'acquisto.",
      "Beim Verkäufer mit Garantiekarte und Kaufbeleg.",
      "Подать продавцу с гарантийным талоном и чеком покупки."
    ),
    keywords: ["ضمان", "garantie", "warranty", "عيب", "panne"],
  },
  {
    id: "chk-commerce-livraison-non-effectuee",
    cat: "chikayat",
    title: T7(
      "شكاية طلب إلكتروني لم يسلَّم",
      "Réclamation pour achat en ligne non livré",
      "Complaint about an undelivered online purchase",
      "Reclamación por compra online no entregada",
      "Reclamo per acquisto online non consegnato",
      "Beschwerde über nicht gelieferte Online-Bestellung",
      "Жалоба на недоставленный интернет-заказ"
    ),
    desc: D7(
      "إنذار بائع إلكتروني بتسليم طلب مؤدى عنه أو برد ثمنه كاملا للمشتري.",
      "Mise en demeure d'un vendeur en ligne de livrer une commande payée ou d'en rembourser intégralement le montant.",
      "Formal notice to an online seller to deliver a paid order or refund it in full.",
      "Requerimiento a un vendedor en línea para entregar un pedido pagado o reembolsarlo íntegramente.",
      "Diffida a un venditore online per la consegna di un ordine pagato o il rimborso integrale.",
      "Fristsetzung an einen Onlinehändler zur Lieferung einer bezahlten Bestellung oder voller Rückerstattung.",
      "Требование к онлайн-продавцу доставить оплаченный заказ или полностью вернуть деньги."
    ),
    where: W7(
      "توجه إلى البائع الإلكتروني مع رقم الطلب وإثبات الأداء.",
      "Au vendeur en ligne, avec le numéro de commande et la preuve de paiement.",
      "To the online seller, with the order number and proof of payment.",
      "Al vendedor en línea, con el número de pedido y el justificante de pago.",
      "Al venditore online, con il numero d'ordine e la prova di pagamento.",
      "An den Onlinehändler mit Bestellnummer und Zahlungsnachweis.",
      "Онлайн-продавцу с номером заказа и подтверждением оплаты."
    ),
    keywords: ["توصيل", "livraison", "delivery", "أنترنت", "en ligne"],
  },
  {
    id: "chk-commerce-refus-remboursement",
    cat: "chikayat",
    title: T7(
      "شكاية رفض إرجاع ثمن سلعة",
      "Réclamation pour refus de remboursement",
      "Complaint about refusal to refund",
      "Reclamación por negativa a reembolsar",
      "Reclamo per rifiuto di rimborso",
      "Beschwerde über verweigerte Rückerstattung",
      "Жалоба на отказ вернуть деньги за товар"
    ),
    desc: D7(
      "مطالبة برد ثمن سلعة أرجعت وفق الشروط، إزاء رفض المتجر المستمر لذلك.",
      "Revendication du remboursement d'un article retourné dans les conditions admises, face au refus persistant du magasin.",
      "Claim for the refund of an item returned on accepted terms, against the store's persistent refusal.",
      "Reclamación del reembolso de un artículo devuelto en condiciones admitidas, ante la negativa persistente de la tienda.",
      "Richiesta di rimborso di un articolo restituito a condizioni regolari, di fronte al rifiuto persistente del negozio.",
      "Forderung nach Erstattung eines regulär zurückgegebenen Artikels trotz anhaltender Weigerung des Geschäfts.",
      "Требование вернуть деньги за товар, сданный по правилам, при упорном отказе магазина."
    ),
    where: W7(
      "تودع لدى المتجر مرفقة بالفاتورة وما يثبت إرجاع السلعة.",
      "À déposer au magasin avec la facture et la preuve de restitution de l'article.",
      "File at the store with the invoice and proof the item was returned.",
      "Presentar en la tienda con la factura y la prueba de devolución del artículo.",
      "Depositare al negozio con la fattura e la prova di restituzione dell'articolo.",
      "Im Geschäft mit Rechnung und Nachweis der Rückgabe.",
      "В магазин с чеком и подтверждением возврата товара."
    ),
    keywords: ["إرجاع", "remboursement", "refund", "متجر", "magasin"],
    popular: true,
  },
  {
    id: "chk-commerce-pub-trompeuse",
    cat: "chikayat",
    title: T7(
      "شكاية إعلان تجاري مضلل",
      "Réclamation pour publicité trompeuse",
      "Complaint about misleading advertising",
      "Reclamación por publicidad engañosa",
      "Reclamo per pubblicità ingannevole",
      "Beschwerde über irreführende Werbung",
      "Жалоба на недобросовестную рекламу"
    ),
    desc: D7(
      "تبليغ عن دعاية تتضمن ادعاءات تدفع المستهلك إلى الخطأ حول المنتوج المعني.",
      "Signalement d'une annonce comportant des allégations de nature à induire le consommateur en erreur sur le produit.",
      "Report of an advertisement containing claims likely to mislead the consumer about the product.",
      "Denuncia de un anuncio con afirmaciones que inducen a error al consumidor sobre el producto.",
      "Segnalazione di un annuncio contenente affermazioni idonee a ingannare il consumatore sul prodotto.",
      "Meldung einer Anzeige mit Behauptungen, die den Verbraucher über das Produkt täuschen.",
      "Сообщение о рекламе с утверждениями, вводящими потребителя в заблуждение о товаре."
    ),
    where: W7(
      "لدى البائع أولا، ثم إلى مصالح حماية المستهلك بوزارة الصناعة والتجارة (mcinet.gov.ma).",
      "Auprès du vendeur d'abord, puis auprès des services de la protection du consommateur (mcinet.gov.ma).",
      "With the seller first, then with the consumer-protection services (mcinet.gov.ma).",
      "Ante el vendedor primero y luego ante los servicios de protección del consumidor (mcinet.gov.ma).",
      "Prima presso il venditore, poi presso i servizi di tutela dei consumatori (mcinet.gov.ma).",
      "Zuerst beim Verkäufer, dann bei den Verbraucherschutzstellen (mcinet.gov.ma).",
      "Сначала продавцу, затем в службы защиты прав потребителей (mcinet.gov.ma)."
    ),
    authority: "mcinet",
    keywords: ["إعلان", "publicité", "advertising", "تضليل", "consumer"],
  },
  {
    id: "chk-commerce-produit-perime",
    cat: "chikayat",
    title: T7(
      "شكاية عرض منتوج منتهي الصلاحية",
      "Réclamation pour produit périmé mis en vente",
      "Complaint about expired products on sale",
      "Reclamación por producto caducado en venta",
      "Reclamo per prodotto scaduto messo in vendita",
      "Beschwerde über abgelaufene Ware im Verkauf",
      "Жалоба на просроченный товар в продаже"
    ),
    desc: D7(
      "تنبيه إلى وجود مواد غذائية تجاوزت أجلها، مع طلب سحبها فورا من الرفوف.",
      "Alerte sur la présence de denrées dont la date est dépassée, demandant leur retrait immédiat des rayons.",
      "Alert on the presence of goods past their date, demanding their immediate removal from shelves.",
      "Alerta sobre la presencia de productos con fecha vencida, exigiendo su retiro inmediato de los estantes.",
      "Allerta sulla presenza di derrate scadute, con richiesta di ritiro immediato dagli scaffali.",
      "Warnung vor abgelaufenen Lebensmitteln mit Forderung nach sofortiger Entfernung aus den Regalen.",
      "Сообщение о просроченных продуктах с требованием немедленно убрать их с полок."
    ),
    where: W7(
      "تودع لدى البائع مع تصوير رف العرض، ثم عبر mcinet.gov.ma.",
      "Auprès du vendeur avec photo du rayon, puis signalement sur mcinet.gov.ma.",
      "With the seller with a photo of the shelf, then reported on mcinet.gov.ma.",
      "Ante el vendedor con foto del estante y luego denuncia en mcinet.gov.ma.",
      "Presso il venditore con foto dello scaffale, poi segnalazione su mcinet.gov.ma.",
      "Beim Verkäufer mit Regalfoto, anschließend Meldung über mcinet.gov.ma.",
      "Продавцу с фото полки, затем сообщение на mcinet.gov.ma."
    ),
    keywords: ["صلاحية", "périmé", "expired", "غذائي", "denrées"],
  },
  {
    id: "chk-commerce-refus-echange",
    cat: "chikayat",
    title: T7(
      "شكاية رفض تبديل سلعة",
      "Réclamation pour refus d'échange d'un article",
      "Complaint about refusal to exchange an item",
      "Reclamación por negativa a cambiar un artículo",
      "Reclamo per rifiuto di scambio di un articolo",
      "Beschwerde über verweigerten Umtausch",
      "Жалоба на отказ обменять товар"
    ),
    desc: D7(
      "طلب تبديل سلعة غير مطابقة أو بمقاس غير مناسب داخل الأجل المعلن بالمتجر.",
      "Demande d'échange d'un article non conforme ou de mauvaise taille, présenté dans le délai affiché par le magasin.",
      "Request to exchange a non-conforming or wrong-size item, presented within the store's stated deadline.",
      "Solicitud de cambio de un artículo no conforme o de talla errónea dentro del plazo del comercio.",
      "Richiesta di scambio di un articolo non conforme o di taglia sbagliata entro il termine esposto dal negozio.",
      "Antrag auf Umtausch eines mangelhaften oder falsch bemessenen Artikels innerhalb der Frist.",
      "Просьба обменять неподходящий или неправильный размер в срок, указанный магазином."
    ),
    where: W7(
      "تودع لدى المتجر مرفقة بالفاتورة والسلعة داخل أجلها.",
      "À déposer au magasin avec la facture et l'article dans son emballage.",
      "File at the store with the invoice and the item in its packaging.",
      "Presentar en la tienda con la factura y el artículo en su embalaje.",
      "Depositare al negozio con la fattura e l'articolo nella confezione.",
      "Im Geschäft mit Rechnung und Artikel in der Verpackung.",
      "В магазин с чеком и товаром в упаковке."
    ),
    keywords: ["تبديل", "échange", "exchange", "متجر", "retour"],
  },
  {
    id: "chk-commerce-prix-encaisse",
    cat: "chikayat",
    title: T7(
      "شكاية فرق بين الثمن المعروض والمؤدى",
      "Réclamation pour écart entre prix affiché et prix encaissé",
      "Complaint about a gap between the displayed and charged price",
      "Reclamación por diferencia entre precio mostrado y cobrado",
      "Reclamo per scarto tra prezzo esposto e prezzo incassato",
      "Beschwerde über Abweichung zwischen ausgewiesenem und kassiertem Preis",
      "Жалоба на расхождение цены на полке и в чеке"
    ),
    desc: D7(
      "احتجاج على أداء مبلغ يفوق الثمن المعروض، مع طلب رد الفرق للمشتري.",
      "Protestation contre un encaissement supérieur à l'étiquette, avec demande de remboursement de la différence constatée.",
      "Protest against being charged more than the label, demanding the difference back.",
      "Protesta contra un cobro superior al de la etiqueta, exigiendo la devolución de la diferencia.",
      "Protesta contro un incasso superiore all'etichetta, chiedendo la restituzione della differenza.",
      "Protest gegen einen über dem Etikett liegenden Kassierungsbetrag mit Rückerstattung der Differenz.",
      "Протест против суммы выше ценника с требованием вернуть разницу."
    ),
    where: W7(
      "تبلغ فورا عند الأداء مع تصوير السعر المعروض على الرف.",
      "À signaler à la caisse, avec photo de l'étiquette en rayon.",
      "Report at the till, with a photo of the shelf label.",
      "Comunicar en caja con foto de la etiqueta del estante.",
      "Segnalare alla cassa con foto dell'etichetta a scaffale.",
      "An der Kasse melden, mit Foto des Regaletiketts.",
      "Сообщить у кассы с фото ценника на полке."
    ),
    keywords: ["سعر", "prix", "price", "فرق", "étiquette"],
  },
  {
    id: "chk-commerce-refus-facture",
    cat: "chikayat",
    title: T7(
      "شكاية رفض تسليم فاتورة الشراء",
      "Réclamation pour refus de délivrance de facture",
      "Complaint about refusal to issue an invoice",
      "Reclamación por negativa a entregar factura",
      "Reclamo per rifiuto di rilascio della fattura",
      "Beschwerde über verweigerte Rechnungsausstellung",
      "Жалоба на отказ выдать счёт-фактуру"
    ),
    desc: D7(
      "إلزام البائع بتسليم فاتورة عن البيع، وهي وثيقة لازمة لممارسة أي حق لاحق.",
      "Obligation faite au vendeur de délivrer une facture, acte nécessaire pour exercer tout recours ultérieur.",
      "Demand that the seller issue an invoice, a document needed to exercise any later remedy.",
      "Exigencia al vendedor de entregar una factura, documento necesario para ejercer acciones posteriores.",
      "Obbligo per il venditore di rilasciare fattura, atto necessario per esercitare eventuali ricorsi.",
      "Verpflichtung des Verkäufers zur Rechnungserteilung als Grundlage späterer Ansprüche.",
      "Обязать продавца выдать счёт — документ, необходимый для защиты прав покупателя."
    ),
    where: W7(
      "تطلب من البائع كتابة، وإلا تببلغ لمصلحة حماية المستهلك (mcinet.gov.ma).",
      "À exiger du vendeur par écrit, sinon à signaler à la protection du consommateur (mcinet.gov.ma).",
      "To be demanded from the seller in writing, else reported to consumer protection (mcinet.gov.ma).",
      "Exigir por escrito, de lo contrario denunciar ante protección al consumidor (mcinet.gov.ma).",
      "Da esigere per iscritto, altrimenti segnalare alla tutela dei consumatori (mcinet.gov.ma).",
      "Schriftlich vom Verkäufer fordern, sonst der Verbraucherschutzstelle (mcinet.gov.ma) melden.",
      "Требовать письменно у продавца, иначе сообщить в защиту прав потребителей (mcinet.gov.ma)."
    ),
    keywords: ["فاتورة", "facture", "invoice", "شراء", "achat"],
  },
  {
    id: "chk-commerce-livraison-non-conforme",
    cat: "chikayat",
    title: T7(
      "شكاية تسليم طلب مخالف للمواصفات",
      "Réclamation pour article livré non conforme à la commande",
      "Complaint about an item delivered not as ordered",
      "Reclamación por artículo entregado no conforme al pedido",
      "Reclamo per articolo consegnato non conforme all'ordine",
      "Beschwerde über Lieferung nicht bestellungsgemäßer Ware",
      "Жалоба на доставку товара, не соответствующего заказу"
    ),
    desc: D7(
      "إشعار باستلام منتوج مغاير للوصف أو المواصفات المتفق عليها عند الطلب الإلكتروني.",
      "Signalement d'un produit reçu différent de la description ou des caractéristiques convenues lors de la commande en ligne.",
      "Report of a product received differing from the description or features agreed when ordering online.",
      "Comunicación de un producto recibido distinto de la descripción o características pactadas en el pedido.",
      "Segnalazione di un prodotto ricevuto diverso dalla descrizione o caratteristiche convenute nell'ordine.",
      "Anzeige einer Ware, die von der online vereinbarten Beschreibung abweicht.",
      "Сообщение о товаре, отличном от описания или характеристик, согласованных при заказе."
    ),
    where: W7(
      "تودع لدى البائع الإلكتروني مع تصوير السلعة ومراسلات الطلب.",
      "Auprès du vendeur en ligne, avec photos de l'article et capture de la commande.",
      "With the online seller, with photos of the item and a copy of the order.",
      "Ante el vendedor en línea, con fotos del artículo y copia del pedido.",
      "Presso il venditore online, con foto dell'articolo e copia dell'ordine.",
      "Beim Onlinehändler mit Fotos und Bestellbeleg.",
      "Онлайн-продавцу с фото товара и скриншотом заказа."
    ),
    keywords: ["مخالف", "non conforme", "غير مطابق", "طلب", "commande"],
  },

  // ─── Voisinage & nuisances ───
  {
    id: "chk-voisinage-bruit-cafe",
    cat: "chikayat",
    title: T7(
      "شكاية ضجيج مقهى مجاور",
      "Réclamation pour bruit d'un café voisin",
      "Complaint about noise from a neighbouring café",
      "Reclamación por ruido de un café vecino",
      "Reclamo per rumore di un caffè vicino",
      "Beschwerde über Lärm aus einem Nachbarcafé",
      "Жалоба на шум из соседнего кафе"
    ),
    desc: D7(
      "شكاية من ضجيج مقهى أو محل تجاري مجاور يتجاوز الحدود المسموح بها ليلا.",
      "Plainte contre les nuisances sonores d'un café ou local commercial voisin, dépassant les limites autorisées la nuit.",
      "Complaint about noise from a neighbouring café or shop exceeding permitted limits at night.",
      "Reclamación por las molestias de un café o local vecino que supera los límites permitidos de noche.",
      "Reclamo per il rumore di un caffè o esercizio vicino che supera i limiti consentiti di notte.",
      "Beschwerde über Lärm eines Nachbarcafés, der nachts die erlaubten Grenzwerte überschreitet.",
      "Жалоба на шум соседнего кафе, превышающий ночью допустимые нормы."
    ),
    where: W7(
      "لدى السلطة المحلية (باشوية أو قيادة) أو مصالح الجماعة.",
      "Auprès de l'autorité locale (pacha ou caïdat) ou des services de la commune.",
      "With the local authority (pacha or caïdat) or the commune services.",
      "Ante la autoridad local o los servicios de la comuna.",
      "Presso l'autorità locale o i servizi del comune.",
      "Bei der örtlichen Behörde (Pascha/Kaidat) oder der Kommunalverwaltung.",
      "В местные органы власти (паша/кайдат) или службы коммуны."
    ),
    keywords: ["ضجيج", "bruit", "noise", "مقهى", "café"],
  },
  {
    id: "chk-voisinage-fumee-four",
    cat: "chikayat",
    title: T7(
      "شكاية دخان فرن مجاور",
      "Réclamation pour fumée du four voisin",
      "Complaint about smoke from a neighbouring oven",
      "Reclamación por humo del horno vecino",
      "Reclamo per fumo del forno vicino",
      "Beschwerde über Rauch des Nachbarbackhauses",
      "Жалоба на дым из соседней пекарни"
    ),
    desc: D7(
      "تبليغ عن أدخنة فرن تقليدي مجاور تزعج الساكنة وتوسخ واجهات المنازل.",
      "Signalement des émanations d'un four traditionnel voisin qui incommodent le voisinage et salissent les façades.",
      "Report of fumes from a neighbouring traditional oven that disturb residents and blacken façades.",
      "Denuncia de humos de un horno tradicional vecino que molestan y ensucian las fachadas.",
      "Segnalazione dei fumi di un forno tradizionale vicino che disturbano e anneriscono le facciate.",
      "Meldung über Rauch eines traditionellen Backofens, der Anwohner belästigt und Fassaden beschmutzt.",
      "Сообщение о дыме традиционной пекарни, мешающем жителям и загрязняющем фасады."
    ),
    where: W7(
      "لدى السلطة المحلية أو مصالح الجماعة، مع وصف موقع المدخنة.",
      "Auprès de l'autorité locale ou de la commune, en décrivant l'emplacement de la cheminée.",
      "With the local authority or commune, describing the chimney's position.",
      "Ante la autoridad local o la comuna, describiendo la ubicación de la chimenea.",
      "Presso l'autorità locale o il comune, descrivendo la posizione della canna fumaria.",
      "Bei der örtlichen Behörde oder Kommune, mit Beschreibung des Kamins.",
      "В местные органы или коммуну с описанием расположения трубы."
    ),
    keywords: ["دخان", "fumée", "smoke", "فرن", "four"],
  },
  {
    id: "chk-voisinage-arbre-debordant",
    cat: "chikayat",
    title: T7(
      "شكاية شجرة تتدلى من الجار",
      "Réclamation pour arbre débordant du voisin",
      "Complaint about a tree overhanging from the neighbour",
      "Reclamación por árbol que invade desde el vecino",
      "Reclamo per albero invadente del vicino",
      "Beschwerde über vom Nachbarn herüber ragenden Baum",
      "Жалоба на дерево, нависающее от соседа"
    ),
    desc: D7(
      "طلب تقليم أغصان تمتد فوق عقار الجار وتسقط أوراقها وثمارها فوق سطحه.",
      "Demande d'élagage des branches qui avancent sur un fonds voisin et y laissent tomber feuilles et fruits.",
      "Request to prune branches encroaching on a neighbouring property and dropping leaves and fruit.",
      "Solicitud de poda de ramas que invaden la finca vecina dejando caer hojas y frutos.",
      "Richiesta di potatura dei rami che si protendono sul fondo vicino lasciandovi cadere foglie e frutti.",
      "Antrag auf Rückschnitt von Zweigen, die auf das Nachbargrundstück ragen.",
      "Просьба подрезать ветви, нависающие над участком соседа и сбрасывающие листья и плоды."
    ),
    where: W7(
      "تبلغ للجار كتابة أولا، وإلا ترفع لدى المحكمة الابتدائية.",
      "À notifier par écrit au voisin, sinon à porter devant le tribunal de première instance.",
      "To be notified to the neighbour in writing, else taken to the court of first instance.",
      "Notificar por escrito al vecino, de lo contrario ante el tribunal de primera instancia.",
      "Da notificare per iscritto al vicino, altrimenti davanti al tribunale di prima istanza.",
      "Dem Nachbarn schriftlich mitteilen, sonst vor dem Gericht erster Instanz.",
      "Уведомить соседа письменно, иначе — в суд первой инстанции."
    ),
    keywords: ["شجرة", "arbre", "tree", "أغصان", "branches"],
  },
  {
    id: "chk-voisinage-eaux-usees",
    cat: "chikayat",
    title: T7(
      "شكاية تصريف مياه مستعملة نحو الغير",
      "Réclamation pour écoulement d'eaux usées vers autrui",
      "Complaint about wastewater discharged onto others",
      "Reclamación por vertido de aguas residuales hacia otros",
      "Reclamo per scarico di acque reflue verso altri",
      "Beschwerde über Abwasserleitung auf fremdes Grundstück",
      "Жалоба на слив сточных вод на чужой участок"
    ),
    desc: D7(
      "احتجاج على تصريف مياه مستعملة نحو عقار الجار أو الطريق العمومي دون حق ثابت.",
      "Protestation contre le rejet d'eaux usées sur un fonds voisin ou sur la voie publique, en l'absence de toute servitude.",
      "Protest against wastewater being discharged onto a neighbour's land or the public way without any easement.",
      "Protesta contra el vertido de aguas residuales en finca ajena o vía pública sin servidumbre alguna.",
      "Protesta contro lo scarico di acque reflue su un fondo altrui o sulla pubblica via senza servitù.",
      "Protest gegen die Ableitung von Abwasser auf fremdes Grundstück oder die öffentliche Straße ohne Servitut.",
      "Протест против сброса сточных вод на чужой участок или дорогу без какого-либо права."
    ),
    where: W7(
      "توجه للجار كتابة، وإلا ترفع أمام المحكمة الابتدائية المختصة.",
      "Par écrit au voisin, sinon devant le tribunal de première instance compétent.",
      "In writing to the neighbour, else before the competent court of first instance.",
      "Por escrito al vecino, de lo contrario ante el tribunal competente de primera instancia.",
      "Per iscritto al vicino, altrimenti davanti al tribunale competente di prima istanza.",
      "Schriftlich an den Nachbarn, sonst vor dem zuständigen Gericht erster Instanz.",
      "Письменно соседу, иначе — в компетентный суд первой инстанции."
    ),
    keywords: ["مياه مستعملة", "eaux usées", "wastewater", "تصريف", "voisin"],
  },
  {
    id: "chk-voisinage-chiens-errants",
    cat: "chikayat",
    title: T7(
      "شكاية كلاب سائبة تشكل خطرا",
      "Réclamation pour chiens errants dangereux",
      "Complaint about dangerous stray dogs",
      "Reclamación por perros callejeros peligrosos",
      "Reclamo per cani randagi pericolosi",
      "Beschwerde über gefährliche streunende Hunde",
      "Жалоба на опасных бродячих собак"
    ),
    desc: D7(
      "نداء إلى مصالح النظافة لاقتناص كلاب سائبة تشكل خطرا قرب المساكن والمدارس.",
      "Appel aux services d'hygiène pour capturer des chiens errants présentant un danger près des habitations et des écoles.",
      "Call on hygiene services to catch stray dogs posing a danger near homes and schools.",
      "Llamada a los servicios de higiene para capturar perros callejeros que amenazan viviendas y escuelas.",
      "Appello ai servizi d'igiene per catturare cani randagi pericolosi vicino ad abitazioni e scuole.",
      "Appell an das Gesundheitsamt, gefährliche streunende Hunde nahe Wohnungen und Schulen einzufangen.",
      "Обращение в санитарные службы с просьбой отловить бродячих собак у домов и школ."
    ),
    where: W7(
      "لدى مصالح النظافة بالجماعة أو العمالة/الإقليم بحسب جهة السكن.",
      "Auprès des services d'hygiène de la commune ou de la préfecture/province concernée.",
      "With the commune's hygiene services or the concerned prefecture/province.",
      "Ante los servicios de higiene de la comuna o la prefectura/provincia.",
      "Presso i servizi d'igiene del comune o della prefettura/provincia interessata.",
      "Bei den Hygienediensten der Kommune oder der Präfektur/Provinz.",
      "В санитарные службы коммуны или префектуры/провинции."
    ),
    keywords: ["كلاب", "chiens errants", "stray dogs", "خطر", "hygiène"],
  },
  {
    id: "chk-voisinage-odeurs-restaurant",
    cat: "chikayat",
    title: T7(
      "شكاية روائح مطعم مجاور",
      "Réclamation pour odeurs d'un restaurant voisin",
      "Complaint about smells from a neighbouring restaurant",
      "Reclamación por olores de un restaurante vecino",
      "Reclamo per odori di un ristorante vicino",
      "Beschwerde über Gerüche aus einem Nachbarrestaurant",
      "Жалоба на запахи из соседнего ресторана"
    ),
    desc: D7(
      "شكاية من أدخنة الطبخ بمطعم مجاور تتسرب إلى المنازل عبر النوافذ.",
      "Plainte contre les émanations de cuisson d'un restaurant voisin qui pénètrent les logements par les fenêtres.",
      "Complaint about cooking fumes from a nearby restaurant entering homes through the windows.",
      "Reclamación contra los humos de cocina de un restaurante vecino que entran por las ventanas.",
      "Reclamo contro i fumi di cucina di un ristorante vicino che entrano dalle finestre.",
      "Beschwerde über Kochdünste eines Nachbarrestaurants, die durch die Fenster dringen.",
      "Жалоба на кухонный дым соседнего ресторана, проникающий в дома через окна."
    ),
    where: W7(
      "لدى السلطة المحلية أو مصالح الصحة بالجماعة، مع بيان موقع المطعم.",
      "Auprès de l'autorité locale ou des services d'hygiène, en précisant l'adresse du restaurant.",
      "With the local authority or hygiene services, giving the restaurant's address.",
      "Ante la autoridad local o higiene, indicando la dirección del restaurante.",
      "Presso l'autorità locale o l'igiene, indicando l'indirizzo del ristorante.",
      "Bei der örtlichen Behörde oder dem Gesundheitsamt mit Adressangabe.",
      "В местные органы или санслужбу с указанием адреса ресторана."
    ),
    keywords: ["روائح", "odeurs", "smells", "مطعم", "restaurant"],
  },
  {
    id: "chk-voisinage-travaux-nuit",
    cat: "chikayat",
    title: T7(
      "شكاية أشغال ليلية بالحي",
      "Réclamation pour travaux de nuit dans le quartier",
      "Complaint about night-time works in the neighbourhood",
      "Reclamación por obras nocturnas en el barrio",
      "Reclamo per lavori notturni nel quartiere",
      "Beschwerde über nächtliche Bauarbeiten im Viertel",
      "Жалоба на ночные работы в квартале"
    ),
    desc: D7(
      "شكاية من أشغال تجاوزت المواعيد المسموح بها وتواصل في الليل داخل حي سكني.",
      "Réclamation contre des travaux dépassant les horaires tolérés et se poursuivant tard dans la nuit en zone résidentielle.",
      "Complaint about works exceeding tolerated hours and continuing late into the night in a residential area.",
      "Reclamación contra obras que superan los horarios tolerados y continúan de noche en zona residencial.",
      "Reclamo contro lavori che superano gli orari tollerati e proseguono di notte in zona residenziale.",
      "Beschwerde über Arbeiten, die die geduldeten Zeiten überschreiten und nachts in einem Wohngebiet weiterlaufen.",
      "Жалоба на работы, выходящие за рамки допустимых часов и продолжающиеся ночью в жилом районе."
    ),
    where: W7(
      "لدى السلطة المحلية أو مصالح الجماعة مع تحديد موقع الأشغال.",
      "Auprès de l'autorité locale ou de la commune, en indiquant l'adresse du chantier.",
      "With the local authority or commune, indicating the site address.",
      "Ante la autoridad local o la comuna, indicando la dirección de la obra.",
      "Presso l'autorità locale o il comune, indicando l'indirizzo del cantiere.",
      "Bei der örtlichen Behörde oder Kommune mit Angabe der Baustelle.",
      "В местные органы или коммуну с указанием адреса стройки."
    ),
    keywords: ["أشغال", "travaux", "works", "ليل", "chantier"],
  },
  {
    id: "chk-voisinage-encombrants",
    cat: "chikayat",
    title: T7(
      "شكاية رمي أنقاض أمام المنزل",
      "Réclamation pour encombrants déposés devant le logement",
      "Complaint about bulky waste dumped in front of the home",
      "Reclamación por escombros depositados frente a la vivienda",
      "Reclamo per ingombranti depositati davanti all'abitazione",
      "Beschwerde über Sperrmüll vor der Wohnung",
      "Жалоба на хлам перед домом"
    ),
    desc: D7(
      "تبليغ عن تراكم أنقاض وأشياء قديمة أمام باب المنزل تعيق المرور وتشوه المحيط.",
      "Signalement d'un dépôt d'encombrants qui entrave l'accès au logement et dégrade la salubrité de la rue.",
      "Report of dumped bulky items blocking access to the home and degrading street cleanliness.",
      "Denuncia de un depósito de escombros que impide el acceso y degrada la salubridad de la calle.",
      "Segnalazione di un deposito di ingombranti che impedisce l'accesso e degrada la salubrità della strada.",
      "Meldung entsorgter Sperrmüll, der den Zugang versperrt und die Sauberkeit der Straße beeinträchtigt.",
      "Сообщение о свалке хлама, перекрывающей вход в дом и портящей чистоту улицы."
    ),
    where: W7(
      "تبلغ لمصالح الجماعة أو السلطة المحلية مع تصوير الأنقاض.",
      "Aux services de la commune ou à l'autorité locale, avec photos du dépôt.",
      "To the commune services or local authority, with photos of the dump.",
      "A los servicios de la comuna o autoridad local, con fotos del depósito.",
      "Ai servizi del comune o all'autorità locale, con foto del deposito.",
      "An die Kommune oder örtliche Behörde mit Fotos der Ablagerung.",
      "В коммуну или местные органы с фото свалки."
    ),
    keywords: ["أنقاض", "encombrants", "bulky waste", "نظافة", "commune"],
  },
  {
    id: "chk-voisinage-tapage-nocturne",
    cat: "chikayat",
    title: T7(
      "شكاية ضجيج ليلي لدى الشرطة",
      "Plainte pour tapage nocturne auprès de la police",
      "Complaint about night noise filed with the police",
      "Denuncia por ruido nocturno ante la policía",
      "Denuncia per schiamazzi notturni alla polizia",
      "Anzeige nächtlichen Lärms bei der Polizei",
      "Заявление о ночном шуме в полицию"
    ),
    desc: D7(
      "تبليغ الأمن عن ضجيج ليلي مستمر يمنع راحة الساكنة في الحي.",
      "Signalement aux forces de l'ordre de bruits nocturnes persistants qui empêchent le repos des habitants.",
      "Report to the police of persistent night noise preventing residents from resting.",
      "Comunicación a las fuerzas de seguridad de ruidos nocturnos persistentes que impiden el descanso.",
      "Segnalazione alle forze dell'ordine di rumori notturni persistenti che impediscono il riposo.",
      "Meldung an die Polizei über anhaltenden nächtlichen Lärm, der die Ruhe der Anwohner verhindert.",
      "Сообщение полиции о постоянном ночном шуме, лишающем жителей отдыха."
    ),
    where: W7(
      "لدى أقرب مفوضية للأمن الوطني أو مركز للدرك الملكي حسب منطقة السكن.",
      "Au commissariat de police ou au poste de gendarmerie le plus proche du domicile.",
      "At the nearest police station or gendarmerie post to the home.",
      "En la comisaría o puesto de gendarmería más cercano al domicilio.",
      "Presso il commissariato o il posto della gendarmeria più vicino.",
      "Bei der nächstgelegenen Polizeiwache oder Gendarmeriestation.",
      "В ближайший комиссариат полиции или жандармерию."
    ),
    keywords: ["ضجيج ليلي", "tapage", "noise at night", "شرطة", "police"],
    popular: true,
  },
  {
    id: "chk-voisinage-passage-bloque",
    cat: "chikayat",
    title: T7(
      "شكاية سيارة تسد مدخل المنزل",
      "Réclamation pour véhicule bloquant l'accès au logement",
      "Complaint about a vehicle blocking access to the home",
      "Reclamación por vehículo que bloquea el acceso a la vivienda",
      "Reclamo per veicolo che blocca l'accesso all'abitazione",
      "Beschwerde über ein Fahrzeug, das den Zugang versperrt",
      "Жалоба на автомобиль, блокирующий въезд к дому"
    ),
    desc: D7(
      "تبليغ عن سيارة ركنت أمام الباب أو الممر ومانعة الدخول والخروج.",
      "Signalement d'un véhicule garé devant le portail ou sur le passage, empêchant toute entrée et sortie.",
      "Report of a car parked in front of the gate or on the passage, preventing all entry and exit.",
      "Comunicación de un vehículo aparcado frente al portal que impide la entrada y salida.",
      "Segnalazione di un veicolo parcheggiato davanti al portone che impedisce l'ingresso e l'uscita.",
      "Meldung eines vor dem Tor geparkten Fahrzeugs, das Ein- und Ausfahrt verhindert.",
      "Сообщение об автомобиле, припаркованном перед воротами и мешающем въезду и выезду."
    ),
    where: W7(
      "لدى الشرطة (مصالح المرور) أو السلطة المحلية، مع تحديد لوحة السيارة.",
      "Auprès de la police (circulation) ou de l'autorité locale, avec le numéro d'immatriculation.",
      "With the traffic police or local authority, giving the registration number.",
      "Ante la policía de tráfico o la autoridad local, con el número de matrícula.",
      "Presso la polizia stradale o l'autorità locale, con il numero di targa.",
      "Bei der Verkehrspolizei oder örtlichen Behörde mit Kennzeichen.",
      "В ГИБДД-службу полиции или местные органы с номером машины."
    ),
    keywords: ["سيارة", "véhicule", "vehicle", "مرور", "passage"],
  },
  {
    id: "chk-voisinage-elevage-residentiel",
    cat: "chikayat",
    title: T7(
      "شكاية تربية مواشي في حي سكني",
      "Réclamation pour élevage en zone résidentielle",
      "Complaint about livestock kept in a residential area",
      "Reclamación por ganadería en zona residencial",
      "Reclamo per allevamento in zona residenziale",
      "Beschwerde über Tierhaltung im Wohngebiet",
      "Жалоба на скот во дворе жилого квартала"
    ),
    desc: D7(
      "شكاية من تربية مواشي أو دواجن داخل حي سكني وما تسببه من روائح وضجيج.",
      "Plainte contre l'élevage d'animaux dans un quartier d'habitation, source d'odeurs et de bruit permanents.",
      "Complaint about keeping animals in a housing district, a source of constant smells and noise.",
      "Reclamación contra la cría de animales en un barrio de vivienda, fuente de olores y ruido permanentes.",
      "Reclamo contro l'allevamento di animali in un quartiere residenziale, fonte di odori e rumore permanenti.",
      "Beschwerde über Tierhaltung in einem Wohnviertel als ständige Quelle von Geruch und Lärm.",
      "Жалоба на разведение скота в жилом квартале как источник постоянных запахов и шума."
    ),
    where: W7(
      "لدى السلطة المحلية أو مصالح الجماعة حسب موقع الإقامة.",
      "Auprès de l'autorité locale ou de la commune selon le lieu de résidence.",
      "With the local authority or commune depending on the place of residence.",
      "Ante la autoridad local o la comuna según el lugar de residencia.",
      "Presso l'autorità locale o il comune secondo il luogo di residenza.",
      "Bei der örtlichen Behörde oder Kommune je nach Wohnort.",
      "В местные органы или коммуну в зависимости от места проживания."
    ),
    keywords: ["مواشي", "élevage", "livestock", "حي سكني", "nuisances"],
  },
  {
    id: "chk-voisinage-fuite-appartement",
    cat: "chikayat",
    title: T7(
      "شكاية تسرب مياه من الجار العلوي",
      "Réclamation pour fuite d'eau depuis le voisin du dessus",
      "Complaint about a leak from the upstairs neighbour",
      "Reclamación por fuga de agua del vecino de arriba",
      "Reclamo per perdita d'acqua dal vicino di sopra",
      "Beschwerde über Wasserschaden vom Nachbarn oben",
      "Жалоба на протечку от соседа сверху"
    ),
    desc: D7(
      "دعوة الجار العلوي إلى إصلاح تسرب يضر بسقف وجدران المسكن الأسفل.",
      "Invitation du voisin supérieur à réparer une fuite qui endommage plafonds et murs du logement inférieur.",
      "Call on the upstairs neighbour to repair a leak damaging the ceilings and walls of the flat below.",
      "Requerimiento al vecino de arriba para reparar una fuga que daña techos y paredes.",
      "Invito del vicino superiore a riparare una perdita che danneggia soffitti e pareti.",
      "Aufforderung an den oberen Nachbarn, ein Leck zu beheben, das Decken und Wände beschädigt.",
      "Требование к соседу сверху устранить течь, повреждающую потолок и стены."
    ),
    where: W7(
      "تبلغ للجار كتابة أولا، وإلا ترفع لدى المحكمة الابتدائية.",
      "À notifier par écrit au voisin, sinon à porter devant le tribunal de première instance.",
      "To be notified to the neighbour in writing, else taken to the court of first instance.",
      "Notificar por escrito, de lo contrario acudir al tribunal de primera instancia.",
      "Da notificare per iscritto, altrimenti davanti al tribunale di prima istanza.",
      "Schriftlich mitteilen, sonst vor dem Gericht erster Instanz.",
      "Уведомить соседа письменно, иначе обратиться в суд первой инстанции."
    ),
    keywords: ["تسرب", "fuite", "leak", "الجار", "voisin"],
  },

  // ─── Services publics & administration ───
  {
    id: "chk-admin-retard-dossier",
    cat: "chikayat",
    title: T7(
      "شكاية تأخر البت في ملف إداري",
      "Réclamation pour retard de traitement d'un dossier",
      "Complaint about delayed processing of a file",
      "Reclamación por retraso en la tramitación de un expediente",
      "Reclamo per ritardo nell'istruttoria di una pratica",
      "Beschwerde über verzögerte Bearbeitung eines Antrags",
      "Жалоба на затяжку рассмотрения дела"
    ),
    desc: D7(
      "تظلم من تجاوز الآجال القانونية لمعالجة ملف لدى إدارة عمومية دون مبرر.",
      "Recours contre le dépassement des délais réglementaires de traitement d'un dossier par une administration publique.",
      "Grievance over a public administration exceeding the statutory deadlines for processing a file.",
      "Recurso contra el incumplimiento de los plazos reglamentarios de tramitación por una administración pública.",
      "Ricorso contro il superamento dei termini regolamentari di trattamento da parte di una pubblica amministrazione.",
      "Beschwerde über die Überschreitung der gesetzten Fristen durch eine öffentliche Verwaltung.",
      "Жалоба на нарушение публичным ведомством установленных сроков рассмотрения."
    ),
    where: W7(
      "لدى الإدارة المعنية أو عبر بوابة الشكايات الوطنية chikaya.ma.",
      "Auprès de l'administration concernée ou via le portail national des réclamations chikaya.ma.",
      "With the administration concerned or via the national complaints portal chikaya.ma.",
      "Ante la administración concerniente o vía el portal nacional chikaya.ma.",
      "Presso l'amministrazione interessata o via il portale nazionale chikaya.ma.",
      "Bei der zuständigen Behörde oder über das Beschwerdeportal chikaya.ma.",
      "В соответствующее ведомство или через портал chikaya.ma."
    ),
    authority: "chikaya",
    keywords: ["تأخر", "retard", "delay", "ملف", "dossier"],
    popular: true,
  },
  {
    id: "chk-admin-perte-dossier",
    cat: "chikayat",
    title: T7(
      "شكاية فقدان ملف بمصلحة إدارية",
      "Réclamation pour perte d'un dossier par l'administration",
      "Complaint about a file lost by the administration",
      "Reclamación por pérdida de un expediente por la administración",
      "Reclamo per smarrimento di una pratica da parte dell'amministrazione",
      "Beschwerde über von der Behörde verlorenen Akte",
      "Жалоба на утерю дела ведомством"
    ),
    desc: D7(
      "طلب إعادة تكوين ملف ضاع بعد إثبات إيداعه، حتى تستأنف الإدارة البت فيه.",
      "Demande de reconstitution d'un dossier égaré après la preuve de son dépôt, afin de poursuivre l'instruction.",
      "Request to rebuild a lost file after proving its submission, so that processing can resume.",
      "Solicitud de reconstrucción de un expediente extraviado tras acreditar su presentación.",
      "Richiesta di ricostruzione di una pratica smarrita dopo la prova del deposito, per proseguire l'istruttoria.",
      "Antrag auf Wiederherstellung eines verlorenen Aktenvorgangs zum Nachweis der Einreichung.",
      "Требование восстановить утерянное дело при доказанной подаче, чтобы возобновить рассмотрение."
    ),
    where: W7(
      "لدى المصلحة المودع لديها الملف أو عبر chikaya.ma مع وصل الإيداع.",
      "Auprès du service dépositaire ou via chikaya.ma, avec le récépissé de dépôt.",
      "With the receiving service or via chikaya.ma, with the deposit receipt.",
      "Ante el servicio receptor o vía chikaya.ma, con el resguardo de depósito.",
      "Presso il servizio ricevente o via chikaya.ma, con la ricevuta di deposito.",
      "Bei der empfangenden Stelle oder über chikaya.ma mit Empfangsbeleg.",
      "В принявшую службу или через chikaya.ma с квитанцией о подаче."
    ),
    authority: "chikaya",
    keywords: ["فقدان", "perte", "loss", "ملف", "dossier"],
  },
  {
    id: "chk-admin-refus-acte",
    cat: "chikayat",
    title: T7(
      "شكاية رفض تسليم وثيقة دون مبرر",
      "Réclamation pour refus de délivrance d'un acte sans motif",
      "Complaint about refusal to issue a document without cause",
      "Reclamación por negativa a entregar un acta sin motivo",
      "Reclamo per rifiuto di rilascio di un atto senza motivo",
      "Beschwerde über grundlose Verweigerung einer Bescheinigung",
      "Жалоба на отказ выдать документ без оснований"
    ),
    desc: D7(
      "طعن في رفض تسليم وثيقة دون تسند أي أساس قانوني لصاحب الطلب.",
      "Contestation d'un refus de délivrance opposé sans citation d'aucun fondement légal à l'intéressé.",
      "Dispute over a refusal imposed on the applicant without citing any legal basis.",
      "Disputa contra una negativa sin cita de fundamento legal alguno.",
      "Contestazione di un rifiuto opposto senza richiamo ad alcun fondamento legale.",
      "Beanstandung einer Verweigerung ohne Angabe einer gesetzlichen Grundlage.",
      "Оспаривание отказа без ссылки на какое-либо правовое основание."
    ),
    where: W7(
      "لدى الإدارة المعنية أو عبر chikaya.ma، مع تحديد الوثيقة المطلوبة.",
      "Auprès de l'administration concernée ou via chikaya.ma, en désignant l'acte demandé.",
      "With the administration concerned or via chikaya.ma, naming the document sought.",
      "Ante la administración o vía chikaya.ma, designando el acta solicitada.",
      "Presso l'amministrazione o via chikaya.ma, indicando l'atto richiesto.",
      "Bei der Behörde oder über chikaya.ma unter Bezeichnung des Dokuments.",
      "В ведомство или через chikaya.ma с указанием требуемого документа."
    ),
    authority: "chikaya",
    keywords: ["وثيقة", "acte", "refus", "تسليم", "délivrance"],
  },
  {
    id: "chk-admin-comportement-fonctionnaire",
    cat: "chikayat",
    title: T7(
      "شكاية سلوك موظف عمومي",
      "Réclamation pour comportement d'un agent public",
      "Complaint about a public official's conduct",
      "Reclamación por comportamiento de un funcionario",
      "Reclamo per comportamento di un dipendente pubblico",
      "Beschwerde über das Verhalten eines Beamten",
      "Жалоба на поведение госслужащего"
    ),
    desc: D7(
      "تبليغ عن تجاوزات أو سوء تعامل من موظف أثناء أدائه لمهامه بالنافذة.",
      "Signalement d'incivilités ou d'abus commis par un agent dans l'exercice de ses fonctions au guichet.",
      "Report of incivility or abuse by an official performing duties at the counter.",
      "Denuncia de incivismo o abuso de un funcionario en el ejercicio de sus funciones.",
      "Segnalazione di scortesie o abusi commessi da un dipendente nell'esercizio delle sue funzioni.",
      "Meldung von Unfreundlichkeiten oder Übergriffen eines Beamten im Dienst.",
      "Сообщение о грубости или злоупотреблениях служащего при исполнении обязанностей."
    ),
    where: W7(
      "لدى الرئيس التسلسلي للموظف أو عبر chikaya.ma مع تحديد النافذة والتاريخ.",
      "Auprès du supérieur hiérarchique de l'agent ou via chikaya.ma, en précisant le guichet et la date.",
      "With the official's line manager or via chikaya.ma, stating the counter and date.",
      "Ante el superior jerárquico o vía chikaya.ma, indicando ventanilla y fecha.",
      "Presso il superiore gerarchico o via chikaya.ma, indicando lo sportello e la data.",
      "Bei der vorgesetzten Stelle oder über chikaya.ma mit Angabe von Schalter und Datum.",
      "Руководителю служащего или через chikaya.ma с указанием окна и даты."
    ),
    authority: "chikaya",
    keywords: ["موظف", "fonctionnaire", "agent", "سلوك", "comportement"],
  },
  {
    id: "chk-ecole-transport-retards",
    cat: "chikayat",
    title: T7(
      "شكاية تأخر النقل المدرسي",
      "Réclamation pour retards du transport scolaire",
      "Complaint about school transport delays",
      "Reclamación por retrasos del transporte escolar",
      "Reclamo per ritardi del trasporto scolastico",
      "Beschwerde über Verspätungen des Schultransports",
      "Жалоба на задержки школьного транспорта"
    ),
    desc: D7(
      "شكاية من تأخر متكرر للنقل المدرسي يعرض التلاميذ لانتظار خطير بالطرق.",
      "Plainte contre des retards répétés du transport scolaire qui exposent les élèves à des attentes dangereuses.",
      "Complaint about repeated school transport delays exposing pupils to dangerous waits.",
      "Reclamación contra retrasos repetidos que exponen a los alumnos a esperas peligrosas.",
      "Reclamo contro ritardi ripetuti che espongono gli alunni ad attese pericolose.",
      "Beschwerde über wiederholte Verspätungen, die Schüler gefährlichen Wartezeiten aussetzen.",
      "Жалоба на постоянные задержки, подвергающие учеников опасному ожиданию."
    ),
    where: W7(
      "لدى مؤسسة النقل أو المديرية الإقليمية للتربية الوطنية.",
      "Auprès de l'entreprise de transport ou de la direction provinciale de l'éducation.",
      "With the transport company or the provincial education directorate.",
      "Ante la empresa de transporte o la dirección provincial de educación.",
      "Presso l'impresa di trasporto o la direzione provinciale dell'istruzione.",
      "Beim Transportunternehmen oder der Provinzialdirektion für Bildung.",
      "В транспортную компанию или провинциальную дирекцию образования."
    ),
    keywords: ["نقل مدرسي", "transport scolaire", "school transport", "تأخر", "élèves"],
  },
  {
    id: "chk-ecole-cantine-hygiene",
    cat: "chikayat",
    title: T7(
      "شكاية نظافة المطعم المدرسي",
      "Réclamation pour hygiène de la cantine scolaire",
      "Complaint about hygiene in the school canteen",
      "Reclamación por higiene del comedor escolar",
      "Reclamo per igiene della mensa scolastica",
      "Beschwerde über Hygiene in der Schulkantine",
      "Жалоба на санитарное состояние школьной столовой"
    ),
    desc: D7(
      "تنبيه إلى اختلال شروط النظافة بالمطعم المدرسي وما يهدد صحة التلاميذ.",
      "Alerte sur des conditions d'hygiène défaillantes du restaurant scolaire, mettant en cause la santé des élèves.",
      "Alert on failing hygiene conditions in the school canteen, affecting pupils' health.",
      "Alerta sobre condiciones higiénicas deficientes del comedor que afectan la salud de los alumnos.",
      "Allerta su condizioni igieniche carenti della mensa che ledono la salute degli alunni.",
      "Warnung vor mangelhafter Hygiene in der Kantine, die die Gesundheit der Schüler gefährdet.",
      "Предупреждение о нарушении санитарных норм в столовой, угрожающем здоровью учеников."
    ),
    where: W7(
      "لدى إدارة المؤسسة أو المديرية الإقليمية للتربية الوطنية (men.gov.ma).",
      "Auprès de la direction de l'établissement ou de la direction provinciale relevant du ministère (men.gov.ma).",
      "With the school management or the provincial directorate under the ministry (men.gov.ma).",
      "Ante la dirección del centro o la dirección provincial del ministerio (men.gov.ma).",
      "Presso la direzione dell'istituto o la direzione provinciale del ministero (men.gov.ma).",
      "Bei der Schulleitung oder der Provinzialdirektion des Ministeriums (men.gov.ma).",
      "Дирекции школы или провинциальной дирекции министерства (men.gov.ma)."
    ),
    authority: "men",
    keywords: ["مطعم مدرسي", "cantine", "hygiène", "نظافة", "école"],
  },
  {
    id: "chk-oncf-retards",
    cat: "chikayat",
    title: T7(
      "شكاية تأخر قطارات ONCF",
      "Réclamation pour retards des trains de l'ONCF",
      "Complaint about ONCF train delays",
      "Reclamación por retrasos de los trenes de la ONCF",
      "Reclamo per ritardi dei treni dell'ONCF",
      "Beschwerde über Zugverspätungen der ONCF",
      "Жалоба на задержки поездов ONCF"
    ),
    desc: D7(
      "شكاية من تأخر متكرر للقطارات يعطل تنقلات المسافرين اليومية.",
      "Réclamation contre des retards fréquents des trains qui perturbent les déplacements quotidiens des usagers.",
      "Complaint about frequent train delays disrupting passengers' daily journeys.",
      "Reclamación contra retrasos frecuentes que alteran los desplazamientos diarios de los viajeros.",
      "Reclamo contro frequenti ritardi che disturbano gli spostamenti quotidiani dei viaggiatori.",
      "Beschwerde über häufige Verspätungen, die den Alltag der Fahrgäste stören.",
      "Жалоба на частые задержки, нарушающие ежедневные поездки пассажиров."
    ),
    where: W7(
      "عبر موقع ONCF (oncf.ma) أو مكاتب المحطات.",
      "Via le site de l'ONCF (oncf.ma) ou les guichets des gares.",
      "Via the ONCF website (oncf.ma) or station ticket offices.",
      "Vía el sitio de la ONCF (oncf.ma) o las taquillas de las estaciones.",
      "Via il sito dell'ONCF (oncf.ma) o gli sportelli delle stazioni.",
      "Über die Website der ONCF (oncf.ma) oder die Bahnhofsschalter.",
      "Через сайт ONCF (oncf.ma) или кассы станций."
    ),
    authority: "oncf",
    keywords: ["قطار", "train", "ONCF", "تأخر", "retard"],
  },
  {
    id: "chk-oncf-bagages",
    cat: "chikayat",
    title: T7(
      "شكاية ضياع أغراض بالقطار",
      "Réclamation pour perte d'effets à bord d'un train",
      "Complaint about belongings lost on a train",
      "Reclamación por pérdida de efectos a bordo de un tren",
      "Reclamo per smarrimento di effetti a bordo di un treno",
      "Beschwerde über im Zug verlorengegangene Gegenstände",
      "Жалоба на утерю вещей в поезде"
    ),
    desc: D7(
      "تصريح بفقدان أغراض شخصية بالقطار، مع طلب البحث فيها والتعويض عند الاقتضاء.",
      "Déclaration de perte d'effets personnels dans un train, avec demande d'enquête et d'indemnisation le cas échéant.",
      "Declaration of personal effects lost on a train, with a request for inquiry and compensation if due.",
      "Declaración de efectos personales perdidos en un tren, con solicitud de investigación e indemnización.",
      "Dichiarazione di effetti personali smarriti su un treno, con richiesta di indagine e indennizzo.",
      "Anzeige im Zug verlorengegangener Gegenstände mit Untersuchungs- und Entschädigungsanspruch.",
      "Заявление об утере личных вещей в поезде с просьбой о розыске и компенсации."
    ),
    where: W7(
      "لدى مصلحة الشكايات بمحطة الوصول أو عبر موقع ONCF (oncf.ma).",
      "Au service réclamations de la gare ou via le site de l'ONCF (oncf.ma).",
      "At the station's complaints service or via the ONCF website (oncf.ma).",
      "En el servicio de reclamaciones de la estación o vía oncf.ma.",
      "Al servizio reclami della stazione o via oncf.ma.",
      "Beim Beschwerdedienst des Bahnhofs oder über oncf.ma.",
      "В службу жалоб станции или через сайт oncf.ma."
    ),
    authority: "oncf",
    keywords: ["أمتعة", "bagages", "luggage", "ONCF", "ضياع"],
  },
  {
    id: "chk-chikaya-depot-en-ligne",
    cat: "chikayat",
    title: T7(
      "إيداع شكاية عبر بوابة chikaya.ma",
      "Dépôt d'une réclamation en ligne via chikaya.ma",
      "Filing a complaint online via chikaya.ma",
      "Presentación de una reclamación en línea vía chikaya.ma",
      "Presentazione di un reclamo online via chikaya.ma",
      "Online-Beschwerde über chikaya.ma",
      "Подача жалобы онлайн через chikaya.ma"
    ),
    desc: D7(
      "مسطرة إلكترونية لإخبار الإدارة المعنية ومتابعة معالجة الشكاية عن بعد.",
      "Procédure électronique permettant de saisir l'administration concernée et de suivre en ligne le traitement de la réclamation.",
      "Electronic procedure to notify the administration concerned and track the complaint's handling online.",
      "Procedimiento electrónico para notificar a la administración y seguir en línea la reclamación.",
      "Procedura elettronica per coinvolgere l'amministrazione e seguire online il reclamo.",
      "Elektronisches Verfahren zur Unterrichtung der Behörde und Online-Verfolgung.",
      "Электронная процедура уведомления ведомства и отслеживания жалобы онлайн."
    ),
    where: W7(
      "عبر البوابة الوطنية للشكايات chikaya.ma بعد إنشاء حساب مجاني.",
      "Sur le portail national des réclamations chikaya.ma après création d'un compte gratuit.",
      "On the national complaints portal chikaya.ma after creating a free account.",
      "En el portal nacional de reclamaciones chikaya.ma tras crear una cuenta gratuita.",
      "Sul portale nazionale dei reclami chikaya.ma dopo la creazione di un account gratuito.",
      "Auf dem Beschwerdeportal chikaya.ma nach kostenloser Registrierung.",
      "На портале chikaya.ma после бесплатной регистрации."
    ),
    authority: "chikaya",
    keywords: ["chikaya.ma", "شكاية", "réclamation", "online", "إلكتروني"],
    popular: true,
  },
  {
    id: "chk-admin-acces-information",
    cat: "chikayat",
    title: T7(
      "شكاية رفض تسليم معلومة عمومية",
      "Réclamation pour refus d'accès à une information",
      "Complaint about refusal of access to information",
      "Reclamación por denegación de acceso a la información",
      "Reclamo per rifiuto di accesso a un'informazione",
      "Beschwerde über verweigerten Zugang zu Informationen",
      "Жалоба на отказ в доступе к информации"
    ),
    desc: D7(
      "تظلم من إدارة رفضت تسليم معلومة عمومية عملا بالقانون رقم 31.13.",
      "Recours contre une administration qui refuse de communiquer une information publique en vertu de la loi 31-13.",
      "Grievance against an administration refusing to release public information under law 31-13.",
      "Recurso contra una administración que se niega a facilitar información pública conforme a la ley 31-13.",
      "Ricorso contro un'amministrazione che rifiuta di comunicare informazioni pubbliche ex legge 31-13.",
      "Beschwerde gegen eine Behörde, die nach Gesetz 31-13 öffentliche Informationen verweigert.",
      "Жалоба на ведомство, отказывающее предоставить публичную информацию по закону 31-13."
    ),
    where: W7(
      "لدى الإدارة الماسكة للمعلومة، مع الطعن أمام اللجنة الوطنية للحق في الحصول على المعلومة.",
      "Auprès de l'administration détentrice, avec recours devant la Commission nationale d'accès à l'information.",
      "With the holding administration, appealing to the national access-to-information commission.",
      "Ante la administración depositaria, con recurso ante la Comisión Nacional de Acceso a la Información.",
      "Presso l'amministrazione detentrice, con ricorso alla Commissione nazionale d'accesso all'informazione.",
      "Bei der verwahrenden Behörde mit Beschwerde bei der nationalen Informationszugangskommission.",
      "В держащее информацию ведомство с обжалованием в национальную комиссию по доступу."
    ),
    keywords: ["معلومة", "information", "31-13", "وصول", "accès"],
  },
  {
    id: "chk-cndh-reclamation",
    cat: "chikayat",
    title: T7(
      "شكاية إلى المجلس الوطني لحقوق الإنسان",
      "Réclamation auprès du Conseil National des Droits de l'Homme (CNDH)",
      "Complaint to the National Human Rights Council (CNDH)",
      "Reclamación ante el Consejo Nacional de Derechos Humanos (CNDH)",
      "Reclamo presso il Consiglio Nazionale dei Diritti Umani (CNDH)",
      "Beschwerde beim Nationalen Menschenrechtsrat (CNDH)",
      "Жалоба в Национальный совет по правам человека (CNDH)"
    ),
    desc: D7(
      "إخبار المؤسسة الوطنية لحقوق الإنسان بخرق مدعى لحق من الحقوق الأساسية.",
      "Saisine de l'institution nationale des droits de l'homme pour un manquement allégué à un droit fondamental.",
      "Referral to the national human rights institution over an alleged breach of a fundamental right.",
      "Acudir a la institución nacional de derechos humanos por una presunta vulneración de un derecho fundamental.",
      "Ricorso all'istituzione nazionale dei diritti umani per una presunta violazione di un diritto fondamentale.",
      "Rüge bei der nationalen Menschenrechtsinstitution wegen behaupteter Verletzung eines Grundrechts.",
      "Обращение в национальный институт по правам человека из-за предполагаемого нарушения права."
    ),
    where: W7(
      "بمقر المجلس (cndh.ma) أو إحدى مندوبياته الجهوية عبر كامل التراب.",
      "Au siège du Conseil (cndh.ma) ou dans l'une de ses délégations régionales.",
      "At the Council's head office (cndh.ma) or one of its regional delegations.",
      "En la sede del Consejo (cndh.ma) o en una de sus delegaciones regionales.",
      "Presso la sede del Consiglio (cndh.ma) o una delle delegazioni regionali.",
      "Im Hauptsitz des Rates (cndh.ma) oder einer regionalen Vertretung.",
      "В штаб-квартиру Совета (cndh.ma) или региональное представительство."
    ),
    authority: "cndh",
    keywords: ["حقوق الإنسان", "CNDH", "droits humains", "شكاية", "rights"],
  },
];
