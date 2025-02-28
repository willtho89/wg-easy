'use strict';

const messages = { // eslint-disable-line no-unused-vars
  en: {
    name: 'Name',
    password: 'Password',
    signIn: 'Sign In',
    logout: 'Logout',
    updateAvailable: 'There is an update available!',
    update: 'Update',
    clients: 'Clients',
    new: 'New',
    deleteClient: 'Delete Client',
    deleteDialog1: 'Are you sure you want to delete',
    deleteDialog2: 'This action cannot be undone.',
    cancel: 'Cancel',
    create: 'Create',
    createdOn: 'Created on ',
    lastSeen: 'Last seen on ',
    totalDownload: 'Total Download: ',
    totalUpload: 'Total Upload: ',
    newClient: 'New Client',
    disableClient: 'Disable Client',
    enableClient: 'Enable Client',
    noClients: 'There are no clients yet.',
    showQR: 'Show QR Code',
    downloadConfig: 'Download Configuration',
    madeBy: 'Made by',
    donate: 'Donate',
  },
  ru: {
    name: 'Имя',
    password: 'Пароль',
    signIn: 'Войти',
    logout: 'Выйти',
    updateAvailable: 'Доступно обновление!',
    update: 'Обновить',
    clients: 'Клиенты',
    new: 'Создать',
    deleteClient: 'Удалить клиента',
    deleteDialog1: 'Вы уверены, что хотите удалить',
    deleteDialog2: 'Это действие невозможно отменить.',
    cancel: 'Закрыть',
    create: 'Создать',
    createdOn: 'Создано в ',
    lastSeen: 'Последнее подключение в ',
    totalDownload: 'Всего скачано: ',
    totalUpload: 'Всего загружено: ',
    newClient: 'Создать клиента',
    disableClient: 'Выключить клиента',
    enableClient: 'Включить клиента',
    noClients: 'Пока нет клиентов.',
    showQR: 'Показать QR-код',
    downloadConfig: 'Скачать конфигурацию',
    madeBy: 'Автор',
    donate: 'Поблагодарить',
  },
  tr: { // Müslüm Barış Korkmazer @babico
    name: 'İsim',
    password: 'Şifre',
    signIn: 'Giriş Yap',
    logout: 'Çıkış Yap',
    updateAvailable: 'Mevcut bir güncelleme var!',
    update: 'Güncelle',
    clients: 'Kullanıcılar',
    new: 'Yeni',
    deleteClient: 'Kullanıcı Sil',
    deleteDialog1: 'Silmek istediğine emin misin',
    deleteDialog2: 'Bu işlem geri alınamaz.',
    cancel: 'İptal',
    create: 'Oluştur',
    createdAt: 'Şu saatte oluşturuldu: ',
    lastSeen: 'Son görülme tarihi: ',
    totalDownload: 'Toplam İndirme: ',
    totalUpload: 'Toplam Yükleme: ',
    newClient: 'Yeni Kullanıcı',
    disableClient: 'İstemciyi Devre Dışı Bırak',
    enableClient: 'İstemciyi Etkinleştir',
    noClients: 'Henüz kullanıcı yok.',
    showQR: 'QR Kodunu Göster',
    downloadConfig: 'Yapılandırmayı İndir',
    madeBy: 'Yapan Kişi: ',
    donate: 'Bağış Yap',
    changeLang: 'Dil Değiştir',
  },
  no: { // github.com/digvalley
    name: 'Navn',
    password: 'Passord',
    signIn: 'Logg Inn',
    logout: 'Logg Ut',
    updateAvailable: 'En ny oppdatering er tilgjengelig!',
    update: 'Oppdater',
    clients: 'Klienter',
    new: 'Ny',
    deleteClient: 'Slett Klient',
    deleteDialog1: 'Er du sikker på at du vil slette?',
    deleteDialog2: 'Denne handlingen kan ikke angres',
    cancel: 'Avbryt',
    create: 'Opprett',
    createdOn: 'Opprettet ',
    lastSeen: 'Sist sett ',
    totalDownload: 'Total Nedlasting: ',
    totalUpload: 'Total Opplasting: ',
    newClient: 'Ny Klient',
    disableClient: 'Deaktiver Klient',
    enableClient: 'Aktiver Klient',
    noClients: 'Ingen klienter opprettet enda.',
    showQR: 'Vis QR Kode',
    downloadConfig: 'Last Ned Konfigurasjon',
    madeBy: 'Laget av',
    donate: 'Doner',
  },
  pl: { // github.com/archont94
    name: 'Nazwa',
    password: 'Hasło',
    signIn: 'Zaloguj się',
    logout: 'Wyloguj się',
    updateAvailable: 'Dostępna aktualizacja!',
    update: 'Aktualizuj',
    clients: 'Klienci',
    new: 'Stwórz klienta',
    deleteClient: 'Usuń klienta',
    deleteDialog1: 'Jesteś pewny że chcesz usunąć',
    deleteDialog2: 'Tej akcji nie da się cofnąć.',
    cancel: 'Anuluj',
    create: 'Stwórz',
    createdOn: 'Utworzono ',
    lastSeen: 'Ostatnio widziany ',
    totalDownload: 'Całkowite pobieranie: ',
    totalUpload: 'Całkowite wysyłanie: ',
    newClient: 'Nowy klient',
    disableClient: 'Wyłączenie klienta',
    enableClient: 'Włączenie klienta',
    noClients: 'Nie ma jeszcze klientów.',
    showQR: 'Pokaż kod QR',
    downloadConfig: 'Pobierz konfigurację',
    madeBy: 'Stworzone przez',
    donate: 'Wsparcie autora',
  },
  fr: { // github.com/clem3109
    name: 'Nom',
    password: 'Mot de passe',
    signIn: 'Se Connecter',
    logout: 'Se déconnecter',
    updateAvailable: 'Une mise à jour est disponible !',
    update: 'Mise à jour',
    clients: 'Clients',
    new: 'Nouveau',
    deleteClient: 'Supprimer ce client',
    deleteDialog1: 'Êtes-vous que vous voulez supprimer',
    deleteDialog2: 'Cette action ne peut pas être annulée.',
    cancel: 'Annuler',
    create: 'Créer',
    createdOn: 'Créé le ',
    lastSeen: 'Dernière connexion le ',
    totalDownload: 'Téléchargement total : ',
    totalUpload: 'Téléversement total : ',
    newClient: 'Nouveau client',
    disableClient: 'Désactiver ce client',
    enableClient: 'Activer ce client',
    noClients: 'Aucun client pour le moment.',
    showQR: 'Afficher le code à réponse rapide (QR Code)',
    downloadConfig: 'Télécharger la configuration',
    madeBy: 'Développé par',
    donate: 'Soutenir',
  },
  de: { // github.com/florian-asche
    name: 'Name',
    password: 'Passwort',
    signIn: 'Anmelden',
    logout: 'Abmelden',
    updateAvailable: 'Eine Aktualisierung steht zur Verfügung!',
    update: 'Aktualisieren',
    clients: 'Clients',
    new: 'Neu',
    deleteClient: 'Client löschen',
    deleteDialog1: 'Möchtest du wirklich löschen?',
    deleteDialog2: 'Diese Aktion kann nicht rückgängig gemacht werden.',
    cancel: 'Abbrechen',
    create: 'Erstellen',
    createdOn: 'Erstellt am ',
    lastSeen: 'Zuletzt Online ',
    totalDownload: 'Gesamt Download: ',
    totalUpload: 'Gesamt Upload: ',
    newClient: 'Neuer Client',
    disableClient: 'Client deaktivieren',
    enableClient: 'Client aktivieren',
    noClients: 'Es wurden noch keine Clients konfiguriert.',
    showQR: 'Zeige den QR Code',
    downloadConfig: 'Konfiguration herunterladen',
    madeBy: 'Erstellt von',
    donate: 'Spenden',
  },
};
