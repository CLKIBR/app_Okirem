import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'BAŞLA',
    url: '/student/dashboard',
    iconComponent: { name: 'baslaIcon' },
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    name: 'ALIŞTIRMA YAP',
    url: '/admin/lesson',
    iconComponent: { name: 'alistirmaIcon' },
  },
  {
    name: 'SINAV ZAMANI',
    url: '/theme/typography',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'sinavIcon' },
  },
  {
    name: 'SINIF KUPASI',
    url: '/student/leaderboard',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'kupaIcon' },
  },
  {
    name: 'GÖREVLERİM',
    url: '/theme/typography',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'görevIcon' },
  },
  {
    name: 'MARKET',
    url: '/theme/typography',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'marketIcon' },
  },
  {
    name: 'PROFİL',
    url: '/theme/typography',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'profilIcon' },
  },

  {
    name: 'AYARLAR',
    url: '/student/settings',
    iconComponent: { name: 'ayarIcon' },
    children: [
      {
        name: 'Hesap Silme',
        url: '/student/settings/account',
        icon: 'nav-icon-bullet',
      },
    ],
  },
];
