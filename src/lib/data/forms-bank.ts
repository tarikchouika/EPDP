// Banking & social security forms — accounts, cards, loans, standing
// orders and banking incidents. Extended catalog.
import type { DocumentItem } from "./documents";
import { T7, D7, W7 } from "./forms-shared";

export const formsBank: DocumentItem[] = [
  // ─── Comptes & cartes ───
  {
    id: "bnk-ghlid-hisab",
    cat: "bank",
    title: T7(
      "طلب غلق حساب بنكي",
      "Demande de clôture de compte bancaire",
      "Application to close a bank account",
      "Solicitud de cierre de cuenta bancaria",
      "Domanda di chiusura di conto bancario",
      "Antrag auf Schließung eines Bankkontos",
      "Заявление на закрытие банковского счёта"
    ),
    desc: D7(
      "طلب يقدم للبنك لغلق الحساب واسترجاع الرصيد المتبقي بعد أداء المستحقات.",
      "Demande adressée à la banque pour clôturer le compte et récupérer le solde après règlement des dues.",
      "Application to the bank to close the account and recover the balance after settling dues.",
      "Solicitud al banco para cerrar la cuenta y recuperar el saldo tras liquidar lo debido.",
      "Domanda alla banca di chiudere il conto e recuperare il saldo dopo il saldo delle poste dovute.",
      "Antrag an die Bank auf Kontoschließung und Auszahlung des Restguthabens nach Begleichung.",
      "Заявление в банк на закрытие счёта и возврат остатка после расчётов."
    ),
    where: W7(
      "فرع البنك أو مكتب البريد بنك حيث فتح الحساب، أو عبر خدمات البنك الرقمية",
      "Agence bancaire ou bureau de Barid Bank où le compte est ouvert, ou via les services numériques de la banque",
      "Bank branch or Barid Bank office where the account is held, or via the bank's digital services",
      "Sucursal bancaria u oficina de Barid Bank, o a través de los servicios digitales del banco",
      "Filiale della banca o ufficio Barid Bank, o tramite i servizi digitali della banca",
      "Bankfiliale oder Barid-Bank-Büro, oder über die digitalen Dienste der Bank",
      "Отделение банка или офис Barid Bank, либо через цифровые сервисы банка"
    ),
    keywords: ["غلق حساب", "clôture compte", "close account", "بنك", "banque", "bank"],
    popular: true,
  },
  {
    id: "bnk-tawqif-bitaqa",
    cat: "bank",
    title: T7(
      "طلب توقيف بطاقة السحب الآلي",
      "Demande de blocage de la carte de retrait",
      "Request to block a debit card",
      "Solicitud de bloqueo de la tarjeta de retiro",
      "Richiesta di blocco della carta di prelievo",
      "Antrag auf Sperrung der Geldkarte",
      "Заявление о блокировке банковской карты"
    ),
    desc: D7(
      "إخطار عاجل يوجه إلى البنك لتوقيف البطاقة عند الضياع أو السرقة أو الاشتباه في استعمال غير مشروع.",
      "Avis urgent adressé à la banque pour bloquer la carte en cas de perte, de vol ou de suspicion d'utilisation frauduleuse.",
      "Urgent notice to the bank to block the card in the event of loss, theft or suspected fraudulent use.",
      "Aviso urgente al banco para bloquear la tarjeta en caso de pérdida, robo o sospecha de uso fraudulento.",
      "Avviso urgente alla banca per bloccare la carta in caso di smarrimento, furto o sospetto uso fraudolento.",
      "Dringende Mitteilung an die Bank zur Sperrung der Karte bei Verlust, Diebstahl oder Verdacht auf Missbrauch.",
      "Срочное уведомление в банк о блокировке карты при утере, краже или подозрении на мошенничество."
    ),
    where: W7(
      "فورا عبر مركز نداء البنك، مع تأكيد الطلب كتابة لدى الفرع أو عبر التطبيق.",
      "Immédiatement via le centre d'appel de la banque, puis confirmation écrite en agence ou via l'application.",
      "Immediately via the bank's call centre, then written confirmation at the branch or through the app.",
      "De inmediato por el centro de llamadas del banco, con confirmación por escrito en la sucursal o mediante la app.",
      "Immediatamente tramite il call center della banca, con conferma scritta in filiale o tramite l'app.",
      "Sofort über das Callcenter der Bank, anschließend schriftliche Bestätigung in der Filiale oder über die App.",
      "Немедленно через колл-центр банка с последующим письменным подтверждением в отделении или через приложение."
    ),
    keywords: ["توقيف بطاقة", "blocage carte", "card block", "ضياع", "perte", "vol"],
  },
  {
    id: "bnk-bitaqa-jadida",
    cat: "bank",
    title: T7(
      "طلب الحصول على بطاقة سحب آلي جديدة",
      "Demande d'une nouvelle carte de retrait",
      "Request for a new debit card",
      "Solicitud de una nueva tarjeta de retiro",
      "Richiesta di una nuova carta di prelievo",
      "Antrag auf eine neue Geldkarte",
      "Заявление на выпуск новой банковской карты"
    ),
    desc: D7(
      "استمارة تسمح بالحصول على بطاقة سحب آلي جديدة عند انتهاء صلاحية البطاقة السابقة أو تلفها.",
      "Formulaire permettant d'obtenir une nouvelle carte de retrait à l'expiration de la précédente ou en cas de détérioration.",
      "Form used to obtain a new debit card upon expiry of the previous one or when it is damaged.",
      "Formulario para obtener una nueva tarjeta de retiro al vencer la anterior o cuando se deteriora.",
      "Modulo per ottenere una nuova carta di prelievo alla scadenza della precedente o in caso di deterioramento.",
      "Formular zum Erhalt einer neuen Geldkarte nach Ablauf der alten oder bei Beschädigung.",
      "Форма для получения новой карты по истечении срока прежней или при её повреждении."
    ),
    where: W7(
      "تودع لدى الفرع البنكي مرفقة ببطاقة التعريف الوطنية، أو عبر تطبيق البنك عند توفر الخدمة.",
      "À déposer à l'agence bancaire avec la carte nationale d'identité, ou via l'application de la banque.",
      "Submit at the bank branch with the national ID card, or via the bank's mobile app.",
      "Presentar en la sucursal bancaria con el DNI, o a través de la aplicación del banco.",
      "Depositare presso la filiale bancaria con la carta d'identità, oppure tramite l'app della banca.",
      "In der Bankfiliale mit dem Personalausweis einreichen oder über die App der Bank.",
      "Подать в отделение банка с удостоверением личности либо через мобильное приложение банка."
    ),
    keywords: ["بطاقة سحب", "carte bancaire", "debit card", "بطاقة جديدة", "nouvelle carte"],
  },
  {
    id: "bnk-daftar-shikatat",
    cat: "bank",
    title: T7(
      "طلب دفتر شيكات",
      "Demande de carnet de chèques",
      "Chequebook request",
      "Solicitud de talonario de cheques",
      "Richiesta di libretto di assegni",
      "Antrag auf ein Scheckheft",
      "Заявление на выдачу чековой книжки"
    ),
    desc: D7(
      "طلب يسلم للبنك للحصول على دفتر شيكات جديد بعد استنفاد الدفتر السابق أو تلفه.",
      "Demande remise à la banque pour obtenir un nouveau carnet après épuisement ou détérioration du précédent.",
      "Request handed to the bank for a new chequebook once the previous one is used up or damaged.",
      "Solicitud entregada al banco para obtener un nuevo talonario tras agotarse o deteriorarse el anterior.",
      "Richiesta consegnata alla banca per ottenere un nuovo libretto dopo l'esaurimento o il deterioramento del precedente.",
      "Antrag an die Bank auf ein neues Scheckheft nach Aufbrauch oder Beschädigung des bisherigen.",
      "Заявление в банк на новую чековую книжку после использования или повреждения прежней."
    ),
    where: W7(
      "فرع البنك حيث يوجد الحساب، أو عبر الخدمات الرقمية للبنك بالنسبة للحسابات المؤهلة.",
      "Agence bancaire où le compte est ouvert, ou via les services numériques pour les comptes éligibles.",
      "The branch where the account is held, or the bank's digital services for eligible accounts.",
      "Sucursal donde está abierta la cuenta, o los servicios digitales del banco para cuentas elegibles.",
      "Filiale dove è aperto il conto, oppure i servizi digitali della banca per i conti idonei.",
      "Filiale, in der das Konto geführt wird, oder digitale Dienste für berechtigte Konten.",
      "Отделение, где открыт счёт, либо цифровые сервисы банка для подходящих счетов."
    ),
    keywords: ["دفتر شيكات", "carnet de chèques", "chequebook", "شيك", "chèque"],
  },
  {
    id: "bnk-khadamat-raqamiya",
    cat: "bank",
    title: T7(
      "طلب الاشتراك في الخدمات الرقمية للبنك",
      "Demande d'adhésion aux services bancaires numériques",
      "Application to enrol in the bank's digital services",
      "Solicitud de alta en los servicios digitales del banco",
      "Domanda di adesione ai servizi digitali della banca",
      "Antrag auf Anmeldung zu den digitalen Bankdiensten",
      "Заявление на подключение цифровых сервисов банка"
    ),
    desc: D7(
      "طلب يمكّن الزبون من الاشتراك في تطبيق البنك والخدمات عبر الإنترنت لمتابعة حسابه وإجراء العمليات عن بعد.",
      "Demande permettant au client d'activer l'application bancaire et les services en ligne pour suivre son compte à distance.",
      "Application enabling the customer to activate the banking app and online services to manage the account remotely.",
      "Solicitud que permite al cliente activar la app bancaria y los servicios en línea para gestionar su cuenta a distancia.",
      "Domanda che consente al cliente di attivare l'app bancaria e i servizi online per gestire il conto a distanza.",
      "Antrag, mit dem der Kunde die Banking-App und Online-Dienste zur fernmündlichen Kontoführung aktiviert.",
      "Заявление на активацию банковского приложения и онлайн-сервисов для удалённого управления счётом."
    ),
    where: W7(
      "تعبئته عند الفرع عند فتح الحساب أو لاحقا، ويمكن أيضا التسجيل مباشرة عبر الموقع الإلكتروني للبنك.",
      "À remplir en agence lors de l'ouverture du compte ou ultérieurement, ou directement sur le site de la banque.",
      "Complete at the branch when opening the account or later, or register directly on the bank's website.",
      "Completar en la sucursal al abrir la cuenta o después, o registrarse directamente en la web del banco.",
      "Da compilare in filiale all'apertura del conto o in seguito, oppure registrandosi direttamente sul sito della banca.",
      "In der Filiale bei Kontoeröffnung oder später ausfüllen bzw. direkt auf der Bankwebsite registrieren.",
      "Заполнить в отделении при открытии счёта или позднее, либо зарегистрироваться напрямую на сайте банка."
    ),
    keywords: ["خدمات رقمية", "banque en ligne", "online banking", "تطبيق البنك", "application bancaire"],
  },
  {
    id: "bnk-hawala-bankiya",
    cat: "bank",
    title: T7(
      "طلب تنفيذ حوالة بنكية",
      "Demande d'exécution d'un virement bancaire",
      "Request to execute a bank transfer",
      "Solicitud de ejecución de una transferencia bancaria",
      "Richiesta di esecuzione di un bonifico bancario",
      "Antrag auf Ausführung einer Banküberweisung",
      "Заявление на выполнение банковского перевода"
    ),
    desc: D7(
      "نموذج يعبأ لتنفيذ حوالة من الحساب نحو حساب آخر داخل المغرب أو خارجه مع تحديد المبلغ والمرجع.",
      "Formulaire à remplir pour virer des fonds vers un autre compte au Maroc ou à l'étranger, en précisant le montant et la référence.",
      "Form completed to transfer funds to another account in Morocco or abroad, specifying the amount and reference.",
      "Formulario para transferir fondos a otra cuenta en Marruecos o en el extranjero, indicando importe y referencia.",
      "Modulo da compilare per trasferire fondi verso un altro conto in Marocco o all'estero, indicando importo e riferimento.",
      "Formular zur Überweisung von Geldern auf ein anderes Konto in Marokko oder im Ausland, mit Betrag und Referenz.",
      "Форма для перевода средств на другой счёт в Марокко или за рубеж с указанием суммы и реквизитов."
    ),
    where: W7(
      "يودع بالفرع البنكي مرفقا بتفاصيل حساب المستفيد، أو ينفذ مباشرة عبر تطبيق البنك.",
      "À déposer en agence avec les coordonnées du compte bénéficiaire, ou à exécuter directement via l'application.",
      "Lodge at the branch with the beneficiary's account details, or execute directly through the app.",
      "Presentar en la sucursal con los datos de la cuenta beneficiaria, o ejecutar directamente en la app.",
      "Depositare in filiale con i dati del conto beneficiario, oppure eseguire direttamente tramite l'app.",
      "In der Filiale mit den Kontoangaben des Empfängers einreichen oder direkt über die App ausführen.",
      "Подать в отделение с реквизитами счёта получателя либо выполнить напрямую через приложение."
    ),
    keywords: ["حوالة بنكية", "virement", "transfer", "تحويل مالي", "compte bénéficiaire"],
  },
  {
    id: "bnk-kashf-hisab-dawri",
    cat: "bank",
    title: T7(
      "طلب الاشتراك في كشف حساب دوري",
      "Demande d'abonnement au relevé de compte périodique",
      "Application to subscribe to periodic account statements",
      "Solicitud de suscripción a estados de cuenta periódicos",
      "Domanda di abbonamento all'estratto conto periodico",
      "Antrag auf regelmäßige Kontoauszüge",
      "Заявление на регулярную выписку по счёту"
    ),
    desc: D7(
      "طلب للاستفادة من كشف حساب دوري يرسله البنك شهريا أو فصليا إلى العنوان أو البريد الإلكتروني للزبون.",
      "Demande d'abonnement à un relevé périodique adressé par la banque chaque mois ou trimestre au client.",
      "Request to subscribe to a periodic statement the bank sends to the customer every month or quarter.",
      "Solicitud de suscripción a un estado de cuenta periódico que el banco envía al cliente cada mes o trimestre.",
      "Domanda di abbonamento a un estratto conto periodico che la banca invia al cliente ogni mese o trimestre.",
      "Antrag auf einen periodischen Kontoauszug, den die Bank dem Kunden monatlich oder vierteljährlich zusendet.",
      "Заявление на периодическую выписку, которую банк направляет клиенту ежемесячно или ежеквартально."
    ),
    where: W7(
      "توجه إلى الفرع البنكي المشغل للحساب، مع اختيار التسليم الورقي أو الإلكتروني حسب رغبة الزبون.",
      "Adressée à l'agence gestionnaire du compte, avec un choix de remise papier ou électronique selon la préférence du client.",
      "Addressed to the branch managing the account, choosing paper or electronic delivery as preferred.",
      "Dirigida a la sucursal gestora de la cuenta, eligiendo entrega en papel o electrónica según preferencia.",
      "Indirizzata alla filiale gestrice del conto, scegliendo la consegna cartacea o elettronica preferita.",
      "An die kontoführende Filiale richten, mit Wahl zwischen Papier- oder Elektronikzustellung.",
      "Направляется в отделение, ведущее счёт, с выбором бумажной или электронной доставки."
    ),
    keywords: ["كشف حساب دوري", "relevé périodique", "periodic statement", "relevé mensuel", "abonnement"],
  },
  {
    id: "bnk-sarf-umla",
    cat: "bank",
    title: T7(
      "طلب صرف عملة أجنبية للسفر",
      "Demande de change de devises pour voyage à l'étranger",
      "Application to buy foreign currency for travel",
      "Solicitud de cambio de divisas para viajar al extranjero",
      "Domanda di cambio valuta per viaggio all'estero",
      "Antrag auf Devisenankauf für Auslandsreisen",
      "Заявление на покупку валюты для поездки за границу"
    ),
    desc: D7(
      "وثيقة تودع لدى البنك أو مكتب صرف معتمد للحصول على عملة صعبة في حدود المبلغ السنوي المسموح به لأغراض السفر.",
      "Document à déposer auprès de la banque ou d'un office de change agréé pour obtenir des devises dans la limite de la dotation annuelle de voyage.",
      "Document lodged with the bank or a licensed exchange office to obtain foreign currency within the annual travel allowance.",
      "Documento a presentar ante el banco o una oficina de cambio autorizada para obtener divisas dentro del cupo anual de viaje.",
      "Documento da depositare presso la banca o un ufficio di cambio autorizzato per ottenere valuta entro la dotazione annuale di viaggio.",
      "Bei der Bank oder einem zugelassenen Wechselbüro einzureichendes Dokument zum Devisenkauf im Rahmen des jährlichen Reisebudgets.",
      "Документ, подаваемый в банк или лицензированный обменный пункт для покупки валюты в пределах годовой квоты на поездки."
    ),
    where: W7(
      "فرع البنك أو مكتب صرف معتمد، مع إبراز جواز السفر والتذاكر وتأشيرة السفر عند الاقتضاء.",
      "Agence bancaire ou office de change agréé, sur présentation du passeport, des billets et du visa éventuel.",
      "Bank branch or licensed exchange office, upon presentation of the passport, tickets and any visa.",
      "Sucursal bancaria u oficina de cambio autorizada, presentando pasaporte, billetes y visado si procede.",
      "Filiale bancaria o ufficio di cambio autorizzato, previa presentazione di passaporto, biglietti ed eventuale visto.",
      "Bankfiliale oder zugelassenes Wechselbüro, gegen Vorlage von Pass, Tickets und gegebenenfalls Visum.",
      "Отделение банка или лицензированный обменный пункт при предъявлении паспорта, билетов и визы (при наличии)."
    ),
    keywords: ["صرف عملة", "change devises", "foreign currency", "سفر", "voyage", "devises"],
  },
  {
    id: "bnk-tahwil-daim",
    cat: "bank",
    title: T7(
      "طلب إحداث تحويل دائم",
      "Demande de mise en place d'un virement permanent",
      "Request to set up a standing order",
      "Solicitud de creación de una transferencia permanente",
      "Richiesta di attivazione di un bonifico permanente",
      "Antrag auf Einrichtung eines Dauerauftrags",
      "Заявление на создание постоянного платёжного поручения"
    ),
    desc: D7(
      "طلب لبرمجة تحويل آلي متكرر من الحساب نحو مستفيد محدد في تواريخ دورية ثابتة.",
      "Demande de programmation d'un virement automatique récurrent vers un bénéficiaire déterminé, à des dates fixes.",
      "Request to schedule an automatic recurring transfer to a set beneficiary on fixed dates.",
      "Solicitud para programar una transferencia automática recurrente a un beneficiario fijo en fechas determinadas.",
      "Richiesta di programmare un bonifico automatico ricorrente verso un beneficiario fisso a date prestabilite.",
      "Antrag auf Einrichtung einer automatischen, wiederkehrenden Überweisung an einen festen Empfänger zu festen Terminen.",
      "Заявление на настройку автоматического регулярного перевода фиксированному получателю в определённые даты."
    ),
    where: W7(
      "فرع البنك المشغل للحساب أو تطبيق البنك ضمن قسم التحويلات الدائمة.",
      "Agence gestionnaire du compte ou application bancaire, rubrique des virements permanents.",
      "The account-holding branch or the banking app, under the standing-transfers section.",
      "Sucursal gestora de la cuenta o la app del banco, en el apartado de transferencias permanentes.",
      "Filiale gestrice del conto oppure l'app della banca, sezione dei bonifici permanenti.",
      "Kontoführende Filiale oder Banking-App, im Bereich Daueraufträge.",
      "Отделение, ведущее счёт, либо приложение банка в разделе постоянных переводов."
    ),
    keywords: ["تحويل دائم", "virement permanent", "standing order", "تحويل آلي", "virement automatique"],
  },
  {
    id: "bnk-tahdith-malumat",
    cat: "bank",
    title: T7(
      "طلب تحديث المعطيات الشخصية للحساب البنكي",
      "Demande de mise à jour des données personnelles du compte",
      "Request to update personal details on a bank account",
      "Solicitud de actualización de los datos personales de la cuenta",
      "Richiesta di aggiornamento dei dati personali del conto",
      "Antrag auf Aktualisierung der persönlichen Kontodaten",
      "Заявление на обновление личных данных по счёту"
    ),
    desc: D7(
      "رسالة توجه إلى البنك لتحيين المعطيات الشخصية المرتبطة بالحساب كالعنوان ورقم الهاتف وبطاقة التعريف المحدثة.",
      "Lettre adressée à la banque pour actualiser les informations rattachées au compte, telles que l'adresse, le téléphone ou la carte d'identité renouvelée.",
      "Letter to the bank updating the details linked to the account, such as address, phone number or a renewed ID card.",
      "Carta dirigida al banco para actualizar los datos vinculados a la cuenta, como domicilio, teléfono o el DNI renovado.",
      "Lettera alla banca per aggiornare i dati collegati al conto, quali indirizzo, telefono o la carta d'identità rinnovata.",
      "Schreiben an die Bank zur Aktualisierung der Kontodaten wie Adresse, Telefonnummer oder erneuerter Ausweis.",
      "Письмо в банк об обновлении данных по счёту: адреса, телефона или обновлённого удостоверения личности."
    ),
    where: W7(
      "فرع البنك مرفقا بالوثائق المثبتة للمعطيات الجديدة، أو عبر تطبيق البنك عند توفر الخدمة.",
      "Agence bancaire avec les justificatifs des nouvelles informations, ou via l'application lorsque le service est disponible.",
      "Bank branch with supporting documents for the new details, or via the app where the service is available.",
      "Sucursal bancaria con los justificantes de los nuevos datos, o mediante la app si está disponible.",
      "Filiale della banca con i documenti giustificativi dei nuovi dati, oppure tramite l'app ove disponibile.",
      "Bankfiliale mit Nachweisen der neuen Angaben oder über die App, sofern verfügbar.",
      "Отделение банка с документами, подтверждающими новые данные, либо через приложение (при наличии услуги)."
    ),
    keywords: ["تحديث المعطيات", "mise à jour", "update details", "تغيير العنوان", "changement d'adresse"],
  },

  // ─── Crédits & épargne ───
  {
    id: "bnk-qard-istihlaki",
    cat: "bank",
    title: T7(
      "طلب قرض استهلاكي",
      "Demande de crédit à la consommation",
      "Consumer loan application",
      "Solicitud de préstamo al consumo",
      "Domanda di prestito al consumo",
      "Antrag auf Konsumentenkredit",
      "Заявление на потребительский кредит"
    ),
    desc: D7(
      "ملف يودع لدى البنك للحصول على قرض استهلاكي لتمويل حاجيات شخصية مع تحديد المبلغ والمدة والقسط الشهري.",
      "Dossier déposé auprès de la banque pour obtenir un crédit à la consommation destiné à des besoins personnels, avec montant, durée et mensualité à préciser.",
      "File lodged with the bank to obtain a consumer loan for personal needs, specifying the amount, term and monthly instalment.",
      "Expediente presentado ante el banco para obtener un préstamo al consumo para necesidades personales, indicando importe, plazo y cuota mensual.",
      "Pratica depositata presso la banca per ottenere un prestito al consumo per esigenze personali, indicando importo, durata e rata mensile.",
      "Bei der Bank eingereichter Antrag auf einen Konsumentenkredit für persönliche Bedürfnisse, mit Betrag, Laufzeit und Rate.",
      "Заявление в банк на потребительский кредит для личных нужд с указанием суммы, срока и ежемесячного платежа."
    ),
    where: W7(
      "يودع بفرع البنك المانح مرفقا ببطاقات الأجر وآخر كشوف الحساب ووثائق تثبت القدرة على السداد.",
      "À déposer à l'agence prêteuse avec les bulletins de salaire, les derniers relevés et les justificatifs de capacité de remboursement.",
      "Lodge at the lending branch with pay slips, recent statements and proof of repayment capacity.",
      "Presentar en la sucursal prestamista con las nóminas, los últimos extractos y justificantes de capacidad de pago.",
      "Depositare presso la filiale erogante con le buste paga, gli ultimi estratti conto e la prova di capacità di rimborso.",
      "Bei der kreditgebenden Filiale einreichen, mit Lohnabrechnungen, aktuellen Auszügen und Nachweis der Rückzahlungsfähigkeit.",
      "Подать в отделение банка-кредитора с расчётными листами, свежими выписками и подтверждением платёжеспособности."
    ),
    keywords: ["قرض استهلاكي", "crédit consommation", "consumer loan", "تمويل شخصي", "prêt personnel"],
    popular: true,
  },
  {
    id: "bnk-qard-sayyara",
    cat: "bank",
    title: T7(
      "طلب قرض سيارة",
      "Demande de crédit automobile",
      "Car loan application",
      "Solicitud de préstamo para automóvil",
      "Domanda di prestito auto",
      "Antrag auf Autokredit",
      "Заявление на автокредит"
    ),
    desc: D7(
      "طلب تمويل لاقتناء سيارة جديدة أو مستعملة يحدد فيه الثمن والمساهمة الشخصية وأجل السداد.",
      "Demande de financement pour l'acquisition d'un véhicule neuf ou d'occasion, précisant le prix, l'apport personnel et la durée de remboursement.",
      "Financing application to buy a new or used vehicle, stating the price, personal contribution and repayment term.",
      "Solicitud de financiación para adquirir un vehículo nuevo o usado, indicando precio, entrada personal y plazo de reembolso.",
      "Domanda di finanziamento per l'acquisto di un veicolo nuovo o usato, indicando prezzo, acconto personale e durata del rimborso.",
      "Finanzierungsantrag für den Kauf eines Neu- oder Gebrauchtwagens, mit Preis, Eigenanteil und Rückzahlungsdauer.",
      "Заявление на финансирование покупки нового или подержанного автомобиля с указанием цены, взноса и срока погашения."
    ),
    where: W7(
      "فرع البنك مرفقا بفاتورة أولية للسيارة ونسخة من البطاقة الرمادية عند تعلق الأمر بسيارة مستعملة.",
      "Agence bancaire avec la facture pro forma du véhicule et une copie de la carte grise pour un véhicule d'occasion.",
      "Bank branch with the vehicle's pro forma invoice and a copy of the registration card for a used car.",
      "Sucursal bancaria con la factura pro forma del vehículo y copia del permiso de circulación si es usado.",
      "Filiale bancaria con la fattura pro forma del veicolo e copia della carta di circolazione per un usato.",
      "Bankfiliale mit Proforma-Rechnung des Fahrzeugs und Kopie des Fahrzeugscheins bei einem Gebrauchtwagen.",
      "Отделение банка со счётом-проформой на автомобиль и копией свидетельства о регистрации для подержанного авто."
    ),
    keywords: ["قرض سيارة", "crédit auto", "car loan", "تمويل سيارة", "véhicule"],
  },
  {
    id: "bnk-qard-aqari",
    cat: "bank",
    title: T7(
      "طلب قرض عقاري",
      "Demande de crédit immobilier",
      "Home loan application",
      "Solicitud de préstamo hipotecario",
      "Domanda di mutuo ipotecario",
      "Antrag auf Immobilienkredit",
      "Заявление на ипотечный кредит"
    ),
    desc: D7(
      "وثيقة تمكن من طلب قرض عقاري لاقتناء مسكن أو بنائه مع تحديد كلفة المشروع والمساهمة الذاتية.",
      "Document permettant de solliciter un crédit immobilier pour acquérir ou construire un logement, en précisant le coût du projet et l'apport personnel.",
      "Document used to apply for a home loan to buy or build a dwelling, stating the project cost and personal contribution.",
      "Documento para solicitar un préstamo hipotecario con el fin de comprar o construir una vivienda, indicando el coste del proyecto y el ahorro previo.",
      "Documento per richiedere un mutuo al fine di acquistare o costruire un alloggio, indicando il costo del progetto e l'apporto personale.",
      "Dokument zur Beantragung eines Immobilienkredits für Kauf oder Bau einer Wohnung, mit Projektkosten und Eigenkapital.",
      "Документ для подачи заявки на ипотечный кредит для покупки или строительства жилья с указанием стоимости и первоначального взноса."
    ),
    where: W7(
      "تودع بالفرع البنكي مرفقا بعقد البيع الأولي أو رخصة البناء ودراسة المشروع ووثائق الدخل.",
      "À déposer à l'agence avec le compromis de vente ou le permis de construire, l'étude du projet et les justificatifs de revenus.",
      "Lodge at the branch with the preliminary sale agreement or building permit, the project study and income documents.",
      "Presentar en la sucursal con el contrato preliminar de venta o la licencia de obra, el estudio del proyecto y justificantes de ingresos.",
      "Depositare in filiale con la proposta preliminare di vendita o il permesso di costruire, lo studio del progetto e i documenti di reddito.",
      "In der Filiale einreichen mit Vorvertrag oder Baugenehmigung, Projektunterlagen und Einkommensnachweisen.",
      "Подать в отделение с предварительным договором купли или разрешением на строительство, проектной документацией и подтверждением доходов."
    ),
    keywords: ["قرض عقاري", "crédit immobilier", "mortgage", "قرض سكني", "logement"],
  },
  {
    id: "bnk-tajil-aqsat",
    cat: "bank",
    title: T7(
      "طلب تأجيل أو إعادة جدولة أقساط القرض",
      "Demande de report ou de rééchelonnement des échéances de crédit",
      "Request to defer or reschedule loan instalments",
      "Solicitud de aplazamiento o reprogramación de las cuotas del préstamo",
      "Richiesta di rinvio o ristrutturazione delle rate del prestito",
      "Antrag auf Stundung oder Neustrukturierung der Kreditraten",
      "Заявление об отсрочке или реструктуризации платежей по кредиту"
    ),
    desc: D7(
      "مراسلة توجه إلى البنك لطلب تأجيل قسط أو إعادة جدولة القرض عند مواجهة صعوبات مالية مؤقتة.",
      "Correspondance adressée à la banque pour demander le report d'une échéance ou le rééchelonnement du crédit face à des difficultés financières passagères.",
      "Correspondence to the bank requesting deferral of an instalment or rescheduling of the loan amid temporary financial difficulties.",
      "Comunicación dirigida al banco para solicitar el aplazamiento de una cuota o la reprogramación del préstamo ante dificultades financieras temporales.",
      "Comunicazione alla banca per chiedere il rinvio di una rata o la ristrutturazione del prestito in caso di temporanee difficoltà finanziarie.",
      "Schreiben an die Bank mit dem Antrag auf Stundung einer Rate oder Neustrukturierung des Kredits bei vorübergehenden finanziellen Schwierigkeiten.",
      "Письмо в банк с просьбой об отсрочке платежа или реструктуризации кредита при временных финансовых трудностях."
    ),
    where: W7(
      "توجه إلى الفرع البنكي المانح للقرض مشفوعة بشرح الأسباب والوثائق المثبتة للوضعية المادية.",
      "Adressée à l'agence ayant accordé le crédit, accompagnée d'une justification des motifs et des pièces attestant la situation financière.",
      "Addressed to the branch that granted the loan, with an explanation of the reasons and documents evidencing the financial situation.",
      "Dirigida a la sucursal que concedió el préstamo, con explicación de los motivos y documentos que acrediten la situación económica.",
      "Indirizzata alla filiale che ha erogato il prestito, corredata dalla motivazione e dai documenti attestanti la situazione economica.",
      "An die kreditgebende Filiale gerichtet, mit Begründung und Nachweisen der finanziellen Lage.",
      "Направляется в отделение, выдавшее кредит, с обоснованием причин и документами о финансовом положении."
    ),
    keywords: ["إعادة جدولة", "rééchelonnement", "reschedule", "تأجيل الأقساط", "report échéance"],
  },
  {
    id: "bnk-hisab-tawfir",
    cat: "bank",
    title: T7(
      "طلب فتح حساب توفير",
      "Demande d'ouverture d'un compte d'épargne",
      "Savings account opening application",
      "Solicitud de apertura de cuenta de ahorro",
      "Domanda di apertura di un conto di risparmio",
      "Antrag auf Eröffnung eines Sparkontos",
      "Заявление на открытие сберегательного счёта"
    ),
    desc: D7(
      "طلب يهدف إلى فتح حساب توفير لإيداع المدخرات والاستفادة من الفوائد السنوية المحددة من طرف البنك.",
      "Demande visant à ouvrir un compte d'épargne pour placer ses économies et bénéficier des intérêts annuels fixés par la banque.",
      "Application to open a savings account to deposit savings and earn the annual interest set by the bank.",
      "Solicitud de apertura de una cuenta de ahorro para depositar ahorros y percibir el interés anual fijado por el banco.",
      "Domanda di apertura di un conto di risparmio per depositare i risparmi e percepire gli interessi annui stabiliti dalla banca.",
      "Antrag auf Eröffnung eines Sparkontos zur Anlage von Ersparnissen und auf die von der Bank festgelegten Jahreszinsen.",
      "Заявление на открытие сберегательного счёта для размещения накоплений и получения годовых процентов банка."
    ),
    where: W7(
      "فرع البنك أو وكالة البريد بنك مع تعبئة استمارة الاشتراك وإيداع المبلغ الأولي.",
      "Agence bancaire ou bureau de Barid Bank, avec formulaire d'adhésion et dépôt du montant initial.",
      "Bank branch or Barid Bank office, with a subscription form and the initial deposit.",
      "Sucursal bancaria u oficina de Barid Bank, con formulario de adhesión y depósito del importe inicial.",
      "Filiale bancaria o ufficio Barid Bank, con modulo di adesione e versamento dell'importo iniziale.",
      "Bankfiliale oder Barid-Bank-Büro, mit Antragsformular und Einzahlung des Anfangsbetrags.",
      "Отделение банка или офис Barid Bank с заполнением формы и внесением начальной суммы."
    ),
    keywords: ["حساب توفير", "compte épargne", "savings account", "ادخار", "épargne"],
  },
  {
    id: "bnk-tamwil-dirasi",
    cat: "bank",
    title: T7(
      "طلب تمويل دراسي",
      "Demande de crédit études",
      "Student financing application",
      "Solicitud de préstamo para estudios",
      "Domanda di prestito per studi",
      "Antrag auf Studienkredit",
      "Заявление на образовательный кредит"
    ),
    desc: D7(
      "طلب تمويل بنكي لتغطية مصاريف الدراسة بالمدارس الخاصة أو الجامعات مع تسديد تدريجي بعد التخرج.",
      "Demande de financement bancaire pour couvrir les frais de scolarité dans les établissements privés ou universitaires, avec remboursement progressif après l'obtention du diplôme.",
      "Bank financing application to cover private school or university tuition, with gradual repayment after graduation.",
      "Solicitud de financiación bancaria para cubrir las matrículas de centros privados o universidades, con reembolso gradual tras graduarse.",
      "Domanda di finanziamento bancario per coprire le tasse scolastiche private o universitarie, con rimborso graduale dopo il diploma.",
      "Antrag auf Bankfinanzierung für private Schul- oder Studiengebühren mit allmählicher Rückzahlung nach dem Abschluss.",
      "Заявление на банковское финансирование оплаты обучения в частных школах или вузах с постепенным погашением после выпуска."
    ),
    where: W7(
      "يودع بفرع البنك مرفقا بشهادة التسجيل وفاتورة المعهد وتفاصيل البرنامج الدراسي.",
      "À déposer à l'agence avec le certificat d'inscription, la facture de l'établissement et le détail du programme.",
      "Lodge at the branch with the enrolment certificate, the institution's invoice and programme details.",
      "Presentar en la sucursal con el certificado de matrícula, la factura del centro y el detalle del programa.",
      "Depositare in filiale con il certificato di iscrizione, la fattura dell'istituto e il dettaglio del programma.",
      "In der Filiale einreichen mit Immatrikulationsbescheinigung, Rechnung der Einrichtung und Programmübersicht.",
      "Подать в отделение со справкой о зачислении, счётом учебного заведения и описанием программы."
    ),
    keywords: ["تمويل دراسي", "crédit études", "student loan", "قرض الدراسة", "frais de scolarité"],
  },
  {
    id: "bnk-barnamij-tawfir",
    cat: "bank",
    title: T7(
      "طلب الاشتراك في برنامج ادخار",
      "Demande d'adhésion à un programme d'épargne",
      "Application to join a savings programme",
      "Solicitud de adhesión a un programa de ahorro",
      "Domanda di adesione a un programma di risparmio",
      "Antrag auf Teilnahme an einem Sparprogramm",
      "Заявление на участие в программе накопления"
    ),
    desc: D7(
      "طلب الانخراط في خطة ادخار دورية تسمح بجمع مبلغ محدد على مدى سنوات لتمويل مشروع مستقبلي.",
      "Demande d'adhésion à un plan d'épargne périodique permettant d'accumuler un montant déterminé sur plusieurs années pour financer un projet futur.",
      "Application to join a periodic savings plan that builds a set amount over several years to fund a future project.",
      "Solicitud de adhesión a un plan de ahorro periódico que acumula un importe determinado a lo largo de varios años para financiar un proyecto futuro.",
      "Domanda di adesione a un piano di risparmio periodico che accumula un importo prefissato in diversi anni per finanziare un progetto futuro.",
      "Antrag auf ein periodisches Sparplan-Programm, das über mehrere Jahre einen festgelegten Betrag für ein künftiges Projekt ansammelt.",
      "Заявление на участие в программе регулярных накоплений, формирующей заданную сумму на будущий проект за несколько лет."
    ),
    where: W7(
      "تعبئته لدى الفرع البنكي مع تحديد مبلغ الادخار الدوري وأجله، أو عبر خدمات البنك الرقمية.",
      "À remplir en agence en précisant le montant périodique et la durée, ou via les services numériques de la banque.",
      "Complete at the branch, specifying the periodic amount and term, or via the bank's digital services.",
      "Completar en la sucursal indicando importe periódico y plazo, o a través de los servicios digitales del banco.",
      "Da compilare in filiale indicando importo periodico e durata, oppure tramite i servizi digitali della banca.",
      "In der Filiale ausfüllen, mit periodischem Betrag und Laufzeit, oder über die digitalen Dienste der Bank.",
      "Заполнить в отделении с указанием периодической суммы и срока либо через цифровые сервисы банка."
    ),
    keywords: ["برنامج ادخار", "plan épargne", "savings plan", "ادخار دوري", "épargne périodique"],
  },
  {
    id: "bnk-tasdid-qard",
    cat: "bank",
    title: T7(
      "طلب تسديد القرض قبل انتهاء الأجل",
      "Demande de remboursement anticipé du crédit",
      "Request for early repayment of a loan",
      "Solicitud de reembolso anticipado del préstamo",
      "Richiesta di estinzione anticipata del prestito",
      "Antrag auf vorzeitige Kreditrückzahlung",
      "Заявление на досрочное погашение кредита"
    ),
    desc: D7(
      "طلب يخول للزبون تسديد الرصيد المتبقي من القرض قبل حلول أجله مع أداء العمولات المستحقة.",
      "Demande autorisant le client à solder le capital restant dû avant l'échéance, moyennant le paiement des indemnités éventuelles.",
      "Request authorising the customer to settle the outstanding balance before maturity, subject to payment of any applicable fees.",
      "Solicitud que autoriza al cliente a liquidar el saldo pendiente antes del vencimiento, previo pago de las comisiones aplicables.",
      "Richiesta che autorizza il cliente a estinguere il debito residuo prima della scadenza, previo pagamento delle eventuali penali.",
      "Antrag, der dem Kunden die vorzeitige Tilgung des Restbetrags gegen Zahlung etwaiger Gebühren ermöglicht.",
      "Заявление на досрочное погашение остатка долга с уплатой возможных комиссий."
    ),
    where: W7(
      "يقدم لفرع البنك المقرض لتحديد مبلغ التسديد النهائي وتاريخ تنفيذ العملية.",
      "À soumettre à l'agence prêteuse pour fixer le montant du décompte final et la date d'exécution.",
      "Submit to the lending branch to determine the final settlement amount and the execution date.",
      "Presentar en la sucursal prestamista para fijar el importe de la liquidación final y la fecha de ejecución.",
      "Da presentare alla filiale erogante per determinare il saldo finale e la data di esecuzione.",
      "Bei der kreditgebenden Filiale einreichen, um Endabrechnungsbetrag und Ausführungsdatum festzulegen.",
      "Подать в отделение банка-кредитора для расчёта итоговой суммы и даты операции."
    ),
    keywords: ["تسديد قبل الأجل", "remboursement anticipé", "early repayment", "قرض", "crédit"],
  },

  // ─── Incidents & oppositions ───
  {
    id: "bnk-muaradat-shik",
    cat: "bank",
    title: T7(
      "طلب معارضة شيك مفقود أو مسروق",
      "Demande d'opposition sur chèque perdu ou volé",
      "Request to stop a lost or stolen cheque",
      "Solicitud de oposición a cheque perdido o robado",
      "Richiesta di opposizione su assegno perso o rubato",
      "Antrag auf Sperre eines verlorenen oder gestohlenen Schecks",
      "Заявление о стоп-платеже по утерянному или украденному чеку"
    ),
    desc: D7(
      "طلب يستهدف منع صرف شيك ضاع أو سرق قبل تقديمه للاستخلاص تفاديا لأي استعمال غير مشروع.",
      "Demande visant à interdire l'encaissement d'un chèque perdu ou volé avant sa présentation, afin d'éviter tout usage frauduleux.",
      "Request to prevent a lost or stolen cheque from being cashed before presentation, averting any fraudulent use.",
      "Solicitud para impedir el cobro de un cheque perdido o robado antes de su presentación, evitando todo uso fraudulento.",
      "Richiesta volta a impedire l'incasso di un assegno perso o rubato prima della presentazione, evitando usi fraudolenti.",
      "Antrag, die Einlösung eines verlorenen oder gestohlenen Schecks vor Vorlage zu verhindern und Missbrauch abzuwenden.",
      "Заявление о запрете оплаты утерянного или украденного чека до его предъявления во избежание мошенничества."
    ),
    where: W7(
      "فورا لدى الفرع البنكي أو مركز النداء مع تحديد رقم الشيك والمستفيد، ثم تأكيد المعارضة كتابة.",
      "Immédiatement auprès de l'agence ou du centre d'appel avec le numéro du chèque et du bénéficiaire, puis confirmation écrite.",
      "Immediately at the branch or call centre with the cheque and beneficiary numbers, then written confirmation.",
      "De inmediato en la sucursal o el centro de llamadas con el número del cheque y del beneficiario, y confirmación por escrito.",
      "Immediatamente presso la filiale o il call center con numero dell'assegno e del beneficiario, poi conferma scritta.",
      "Sofort bei der Filiale oder im Callcenter mit Scheck- und Empfängernummer, anschließend schriftliche Bestätigung.",
      "Немедленно в отделении или колл-центр с номером чека и данными получателя, затем письменное подтверждение."
    ),
    keywords: ["معارضة شيك", "opposition chèque", "stop cheque", "شيك مفقود", "chèque volé"],
    popular: true,
  },
  {
    id: "bnk-muaradat-hawala",
    cat: "bank",
    title: T7(
      "طلب معارضة حوالة بنكية",
      "Demande d'opposition sur virement bancaire",
      "Request to recall a bank transfer",
      "Solicitud de oposición a una transferencia bancaria",
      "Richiesta di revoca di un bonifico bancario",
      "Antrag auf Rückruf einer Banküberweisung",
      "Заявление об отзыве банковского перевода"
    ),
    desc: D7(
      "معارضة ترفع إلى البنك لإيقاف حوالة أو استرجاعها في حالة الخطأ في المبلغ أو رقم حساب المستفيد.",
      "Opposition soumise à la banque pour bloquer ou rappeler un virement en cas d'erreur sur le montant ou le compte bénéficiaire.",
      "Opposition filed with the bank to halt or recall a transfer in the event of an error in the amount or beneficiary account.",
      "Oposición presentada ante el banco para detener o recuperar una transferencia en caso de error en el importe o la cuenta beneficiaria.",
      "Opposizione presentata alla banca per bloccare o revocare un bonifico in caso di errore sull'importo o sul conto beneficiario.",
      "Widerspruch bei der Bank, eine Überweisung bei falschem Betrag oder Empfängerkonto zu stoppen oder zurückzurufen.",
      "Возражение в банк об остановке или отзыве перевода при ошибке в сумме или счёте получателя."
    ),
    where: W7(
      "بأسرع وقت لدى الفرع البنكي أو عبر مركز النداء، مع تقديم مرجع الحوالة موضوع المعارضة.",
      "Dans les meilleurs délais auprès de l'agence ou via le centre d'appel, en communiquant la référence du virement contesté.",
      "As soon as possible at the branch or via the call centre, providing the reference of the disputed transfer.",
      "Lo antes posible en la sucursal o por el centro de llamadas, facilitando la referencia de la transferencia impugnada.",
      "Al più presto presso la filiale o tramite il call center, comunicando il riferimento del bonifico contestato.",
      "So schnell wie möglich bei der Filiale oder über das Callcenter, unter Angabe der Referenz der beanstandeten Überweisung.",
      "Как можно скорее в отделении или через колл-центр, указав реквизиты оспариваемого перевода."
    ),
    keywords: ["معارضة حوالة", "opposition virement", "transfer recall", "إلغاء تحويل", "annulation virement"],
  },
  {
    id: "bnk-istirja-bitaqa",
    cat: "bank",
    title: T7(
      "طلب استرجاع بطاقة محتجزة في آلة السحب الآلي",
      "Demande de récupération d'une carte retenue par un distributeur automatique",
      "Request to recover a card retained by an ATM",
      "Solicitud de recuperación de una tarjeta retenida por un cajero automático",
      "Richiesta di recupero di una carta trattenuta dal bancomat",
      "Antrag auf Rückholung einer vom Geldautomaten einbehaltenen Karte",
      "Заявление о возврате карты, задержанной банкоматом"
    ),
    desc: D7(
      "تصريح يقدم لاسترجاع بطاقة احتجزتها آلة السحب الآلي بسبب عطب تقني أو إدخال متكرر للرمز السري الخطأ.",
      "Déclaration déposée pour récupérer une carte retenue par un distributeur automatique à la suite d'un incident technique ou de codes erronés répétés.",
      "Declaration filed to recover a card retained by an ATM following a technical fault or repeated wrong PIN entries.",
      "Declaración presentada para recuperar una tarjeta retenida por un cajero tras una avería técnica o códigos erróneos repetidos.",
      "Dichiarazione presentata per recuperare una carta trattenuta dal bancomat a seguito di un guasto tecnico o di PIN errati ripetuti.",
      "Antrag auf Rückholung einer Karte, die nach einer technischen Störung oder mehrfach falscher PIN eingezogen wurde.",
      "Заявление о возврате карты, задержанной банкоматом из-за технического сбоя или неоднократного неверного ввода ПИН-кода."
    ),
    where: W7(
      "لدى الفرع البنكي التابع له آلة السحب الآلي، مع إبراز بطاقة التعريف الوطنية.",
      "Auprès de l'agence à laquelle appartient le distributeur, sur présentation de la carte nationale d'identité.",
      "At the branch responsible for the ATM, upon presentation of the national ID card.",
      "En la sucursal a la que pertenece el cajero, presentando el DNI.",
      "Presso la filiale cui appartiene il bancomat, previa presentazione della carta d'identità.",
      "Bei der Filiale, zu der der Automat gehört, gegen Vorlage des Personalausweises.",
      "В отделении, которому принадлежит банкомат, при предъявлении удостоверения личности."
    ),
    keywords: ["بطاقة محتجزة", "carte avalée", "retained card", "distributeur", "آلة السحب الآلي", "ATM"],
  },
  {
    id: "bnk-idafa-mustafid",
    cat: "bank",
    title: T7(
      "طلب إضافة مستفيد جديد للتحويل البنكي",
      "Demande d'ajout d'un bénéficiaire de virement",
      "Request to add a transfer beneficiary",
      "Solicitud de alta de un beneficiario de transferencia",
      "Richiesta di aggiunta di un beneficiario di bonifico",
      "Antrag auf Hinzufügen eines Überweisungsempfängers",
      "Заявление на добавление получателя перевода"
    ),
    desc: D7(
      "طلب لتسجيل مستفيد جديد في قائمة التحويلات لتمكين إرسال الحوالات إليه عبر القنوات البنكية المتاحة.",
      "Demande d'enregistrement d'un nouveau bénéficiaire dans la liste des virements afin de pouvoir lui adresser des fonds.",
      "Request to register a new beneficiary in the transfer list so that funds can be sent to them.",
      "Solicitud de registro de un nuevo beneficiario en la lista de transferencias para poder enviarle fondos.",
      "Richiesta di registrazione di un nuovo beneficiario nell'elenco dei bonifici per potergli inviare fondi.",
      "Antrag, einen neuen Empfänger in die Überweisungsliste aufzunehmen, um ihm Geld senden zu können.",
      "Заявление о регистрации нового получателя в списке переводов для отправки ему средств."
    ),
    where: W7(
      "عبر تطبيق البنك أو الخدمات عبر الإنترنت، أو بتعبئة الاستمارة المخصصة لدى الفرع.",
      "Via l'application ou les services en ligne de la banque, ou en remplissant le formulaire dédié en agence.",
      "Through the bank's app or online services, or by completing the dedicated form at the branch.",
      "Mediante la app o los servicios en línea del banco, o completando el formulario específico en la sucursal.",
      "Tramite l'app o i servizi online della banca, oppure compilando l'apposito modulo in filiale.",
      "Über die App oder Online-Dienste der Bank oder per Formular in der Filiale.",
      "Через приложение или онлайн-сервисы банка либо по специальной форме в отделении."
    ),
    keywords: ["إضافة مستفيد", "ajout bénéficiaire", "add beneficiary", "تحويل", "virement"],
  },
  {
    id: "bnk-iada-ramz-siri",
    cat: "bank",
    title: T7(
      "طلب إعادة إصدار الرمز السري (كلمة السر)",
      "Demande de réémission du code secret",
      "Request to reissue a secret code or password",
      "Solicitud de reemisión de la clave secreta",
      "Richiesta di riemissione del codice segreto",
      "Antrag auf Neuausstellung des Geheimcodes",
      "Заявление на перевыпуск секретного кода"
    ),
    desc: D7(
      "عند نسيان الرمز السري للبطاقة أو كلمة سر الخدمات الرقمية، يطلب هذا النموذج إعادة الإصدار لاستعادة الولوج إلى الحساب.",
      "En cas d'oubli du code secret de la carte ou du mot de passe des services numériques, ce formulaire en demande la réémission pour rétablir l'accès au compte.",
      "When the card PIN or digital-services password is forgotten, this form requests reissue to restore account access.",
      "En caso de olvido de la clave de la tarjeta o de los servicios digitales, este formulario solicita su reemisión para recuperar el acceso a la cuenta.",
      "In caso di dimenticanza del PIN o della password dei servizi digitali, questo modulo ne chiede la riemissione per ripristinare l'accesso al conto.",
      "Bei Vergessen der PIN oder des Passworts der digitalen Dienste beantragt dieses Formular die Neuausstellung zur Wiederherstellung des Kontozugangs.",
      "При утрате ПИН-кода или пароля от цифровых сервисов эта форма запрашивает перевыпуск для восстановления доступа к счёту."
    ),
    where: W7(
      "لدى الفرع البنكي بإبراز بطاقة التعريف الوطنية، أو عبر خاصية نسيان كلمة السر في التطبيق.",
      "Auprès de l'agence avec la carte nationale d'identité, ou via la fonction « mot de passe oublié » de l'application.",
      "At the branch with the national ID card, or via the app's 'forgot password' feature.",
      "En la sucursal con el DNI, o mediante la función «contraseña olvidada» de la app.",
      "Presso la filiale con la carta d'identità, oppure tramite la funzione «password dimenticata» dell'app.",
      "In der Filiale mit Personalausweis oder über die Funktion „Passwort vergessen“ in der App.",
      "В отделении с удостоверением личности либо через функцию «Забыли пароль» в приложении."
    ),
    keywords: ["نسيان كلمة السر", "code oublié", "forgot PIN", "الرمز السري", "code secret"],
  },
  {
    id: "bnk-isharat-sms",
    cat: "bank",
    title: T7(
      "طلب الاشتراك في الإشعار بعمليات الحساب عبر الرسائل القصيرة",
      "Demande d'abonnement aux alertes SMS bancaires",
      "Application to subscribe to banking SMS alerts",
      "Solicitud de suscripción a alertas SMS bancarias",
      "Domanda di attivazione degli avvisi SMS bancari",
      "Antrag auf Banking-SMS-Benachrichtigungen",
      "Заявление на подключение SMS-уведомлений банка"
    ),
    desc: D7(
      "اشتراك يفعَّل لتلقي إشعارات فورية عبر رسائل الهاتف عند كل عملية سحب أو أداء أو تحويل من الحساب.",
      "Abonnement activé pour recevoir des notifications instantanées par SMS à chaque retrait, paiement ou virement sur le compte.",
      "Subscription activated to receive instant SMS notifications for every withdrawal, payment or transfer on the account.",
      "Suscripción activada para recibir notificaciones instantáneas por SMS en cada reintegro, pago o transferencia de la cuenta.",
      "Abbonamento attivato per ricevere notifiche istantanee via SMS per ogni prelievo, pagamento o bonifico sul conto.",
      "Abonnement für sofortige SMS-Benachrichtigungen bei jeder Auszahlung, Zahlung oder Überweisung auf dem Konto.",
      "Подписка на мгновенные SMS-уведомления о каждой операции снятия, оплаты или перевода по счёту."
    ),
    where: W7(
      "تعبئته لدى الفرع أو عبر خدمات البنك الرقمية، مع تحديد رقم الهاتف المستقبل للإشعارات.",
      "À remplir en agence ou via les services numériques, en indiquant le numéro de téléphone destinataire des alertes.",
      "Complete at the branch or via digital services, specifying the phone number to receive the alerts.",
      "Completar en la sucursal o por los servicios digitales, indicando el número de móvil que recibirá las alertas.",
      "Da compilare in filiale o tramite i servizi digitali, indicando il numero di telefono che riceverà gli avvisi.",
      "In der Filiale oder über digitale Dienste ausfüllen, mit Angabe der Telefonnummer für die Hinweise.",
      "Заполнить в отделении или через цифровые сервисы, указав номер телефона для получения уведомлений."
    ),
    keywords: ["إشعار SMS", "alertes SMS", "SMS alerts", "إشعار بالعمليات", "notification"],
  },
  {
    id: "bnk-tazallum-bank",
    cat: "bank",
    title: T7(
      "طلب تظلم لدى البنك (شكاية داخلية)",
      "Réclamation interne auprès de la banque",
      "Internal complaint to the bank",
      "Reclamación interna ante el banco",
      "Reclamo interno alla banca",
      "Interne Beschwerde bei der Bank",
      "Внутренняя жалоба в банк"
    ),
    desc: D7(
      "تظلم كتابي يوجه إلى مدير الفرع لحل نزاع يتعلق بعمولة أو عملية، قبل اللجوء إلى وسيط بنك المغرب.",
      "Réclamation écrite adressée au directeur d'agence pour résoudre un litige relatif à des frais ou à une opération, avant toute saisine du médiateur.",
      "Written complaint to the branch manager to resolve a dispute over fees or a transaction before referring it to the mediator.",
      "Reclamación escrita al director de la sucursal para resolver una disputa por comisiones u operaciones antes de acudir al mediador.",
      "Reclamo scritto al direttore della filiale per risolvere una controversia su commissioni o operazioni prima di adire il mediatore.",
      "Schriftliche Beschwerde an den Filialleiter zur Lösung eines Streits über Gebühren oder Transaktionen, bevor der Mediator eingeschaltet wird.",
      "Письменная жалоба управляющему отделением для решения спора о комиссиях или операциях до обращения к медиатору."
    ),
    where: W7(
      "تودع بسجل الوكالة البنكية أو ترسل عبر البريد الإلكتروني للبنك مرفقة بالوثائق المؤيدة، مع الاحتفاظ بنسخة.",
      "À déposer au guichet de l'agence ou à envoyer à l'adresse électronique de la banque avec les pièces justificatives, en gardant copie.",
      "File at the branch counter or send to the bank's email address with supporting documents, keeping a copy.",
      "Presentar en el mostrador de la sucursal o enviar al correo electrónico del banco con documentos justificativos, guardando copia.",
      "Depositare allo sportello della filiale o inviare all'e-mail della banca con documenti giustificativi, conservandone copia.",
      "Am Schalter der Filiale einreichen oder per E-Mail der Bank mit Belegen senden, eine Kopie behalten.",
      "Подать в отделении банка или на электронную почту банка с подтверждающими документами, сохранив копию."
    ),
    keywords: ["تظلم بنكي", "réclamation bancaire", "bank complaint", "شكاية البنك", "litige"],
  },
];
