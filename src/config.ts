export const STATION = {
  name: "Esmeralda Web Rádio",
  url: "https://esmeraldawebradio.duckdns.org/listen/esmeralda/esmeralda",
  mobileUrl: "https://esmeraldawebradio.duckdns.org/listen/esmeralda/esmeralda",
  apiUrl: "https://esmeraldawebradio.duckdns.org/api/nowplaying/esmeralda"
};

export const CONTACT = {
  whatsapp: "5574999999999",
  email: "marlonsantiago.0002@gmail.com"
};

export interface NewsSource {
  name: string;
  feedUrl: string;
  homeUrl: string;
}

export const NEWS_SOURCES: NewsSource[] = [
  { name: 'G1',        feedUrl: 'https://g1.globo.com/rss/g1/',                        homeUrl: 'https://g1.globo.com' },
  { name: 'UOL',       feedUrl: 'https://rss.uol.com.br/feed/noticias.xml',            homeUrl: 'https://noticias.uol.com.br' },
  { name: 'Folha',     feedUrl: 'https://feeds.folha.uol.com.br/folha/emcimadahora/rss091.xml', homeUrl: 'https://www.folha.uol.com.br' },
  { name: 'CNN Brasil',feedUrl: 'https://www.cnnbrasil.com.br/feed/',                  homeUrl: 'https://www.cnnbrasil.com.br' },
  { name: 'Estadão',   feedUrl: 'https://www.estadao.com.br/rss/',                     homeUrl: 'https://www.estadao.com.br' },
];

export const SCHEDULE = [
  {
    time: "00:00 - 06:00",
    program: "Programação Musical",
    days: "Todos os dias",
    description: "Seleção variada de ritmos pra embalar a madrugada"
  },
  {
    time: "06:00 - 08:00",
    program: "Bom Dia Esmeralda",
    days: "Todos os dias",
    description: "Forró raiz e pé-de-serra pra começar o dia com alegria"
  },
  {
    time: "08:00 - 10:00",
    program: "Sertanejo Universitário",
    days: "Todos os dias",
    description: "O melhor do sertanejo universitário e modão"
  },
  {
    time: "10:00 - 12:00",
    program: "Piseiro & Pisadinha",
    days: "Todos os dias",
    description: "Piseiro, pisadinha e forró estilizado"
  },
  {
    time: "12:00 - 14:00",
    program: "Brega & Seresta",
    days: "Todos os dias",
    description: "Brega romântico e seresta das antigas"
  },
  {
    time: "14:00 - 18:00",
    program: "Tarde Musical",
    days: "Todos os dias",
    description: "Mistura de ritmos pra alegrar sua tarde"
  },
  {
    time: "18:00 - 20:00",
    program: "Forró & Vaquejada",
    days: "Todos os dias",
    description: "Forró, vaquejada e baião pra esquentar a noite"
  },
  {
    time: "20:00 - 22:00",
    program: "Modão Sertanejo",
    days: "Todos os dias",
    description: "Sertanejo raiz e modão de viola"
  },
  {
    time: "22:00 - 00:00",
    program: "Brega Night",
    days: "Todos os dias",
    description: "Brega, seresta e românticas pra fechar a noite"
  }
];
