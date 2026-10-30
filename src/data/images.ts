import { u } from "../lib/url"

export interface ImageData {
  id: string
  src: string
  thumb: string
  alt: string
  category: 'color' | 'black-grey' | 'cover-up' | 'old-school' | 'japanese' | 'neo-traditional' | 'realism' | 'geometric' | 'mandala' | 'blackwork' | 'new-school' | 'lettering'
}

export const allImages: ImageData[] = [
  // Color — image.png til image (15).png
  { id: 'img-0',  src: u('/images/galleri/00-stor.avif'), thumb: u('/images/galleri/00-liten.avif'),         alt: 'Fargetatovering av en rødøyd frosk på et blad i japanske bølger, på låret', category: 'color' },
  { id: 'img-1',  src: u('/images/galleri/01-stor.avif'), thumb: u('/images/galleri/01-liten.avif'),   alt: 'Fargetatovering av et japansk spøkelsesansikt med blod, på armen', category: 'color' },
  { id: 'img-2',  src: u('/images/galleri/02-stor.avif'), thumb: u('/images/galleri/02-liten.avif'),   alt: 'Fargetatovering av en skarv foran store bølger og en rød sol, på brystet', category: 'color' },
  { id: 'img-3',  src: u('/images/galleri/03-stor.avif'), thumb: u('/images/galleri/03-liten.avif'),   alt: 'Fargetatovering av en rød blekksprut i japansk stil over hele armen, sett fra fire sider', category: 'color' },
  { id: 'img-4',  src: u('/images/galleri/04-stor.avif'), thumb: u('/images/galleri/04-liten.avif'),   alt: 'Fargetatovering av The Mask med grønt ansikt og oransje hatt, sett fra to vinkler', category: 'color' },
  { id: 'img-5',  src: u('/images/galleri/05-stor.avif'), thumb: u('/images/galleri/05-liten.avif'),   alt: 'Fargetatovering av en hannya-demon med horn, på magen', category: 'color' },
  { id: 'img-6',  src: u('/images/galleri/06-stor.avif'), thumb: u('/images/galleri/06-liten.avif'),   alt: 'Fargetatovering av en brølende gorilla, på håndbaken', category: 'color' },
  { id: 'img-7',  src: u('/images/galleri/07-stor.avif'), thumb: u('/images/galleri/07-liten.avif'),   alt: 'Fargetatovering av en hai med blodig gap og en blekksprut, på overarmen', category: 'color' },
  { id: 'img-8',  src: u('/images/galleri/08-stor.avif'), thumb: u('/images/galleri/08-liten.avif'),   alt: 'Fargetatovering av en skjeggete sjømann med strikkelue og pipe', category: 'color' },
  { id: 'img-9',  src: u('/images/galleri/09-stor.avif'), thumb: u('/images/galleri/09-liten.avif'),   alt: 'Fargetatovering av en blekksprut med blå ringer rundt en globus, på armen', category: 'color' },
  { id: 'img-10', src: u('/images/galleri/10-stor.avif'), thumb: u('/images/galleri/10-liten.avif'),  alt: 'Fargetatovering av en føniks i sterke farger, på hofta og ryggen', category: 'color' },
  { id: 'img-11', src: u('/images/galleri/11-stor.avif'), thumb: u('/images/galleri/11-liten.avif'),  alt: 'Japansk tatovering over hele ryggen og setet, med grønn hannya-maske, peoner og hodeskalle', category: 'color' },
  { id: 'img-12', src: u('/images/galleri/12-stor.avif'), thumb: u('/images/galleri/12-liten.avif'),  alt: 'Fargetatovering av en drage i japansk stil, på leggen', category: 'color' },
  { id: 'img-13', src: u('/images/galleri/13-stor.avif'), thumb: u('/images/galleri/13-liten.avif'),  alt: 'Fargetatovering av en hannya-maske, på underarmen', category: 'color' },
  { id: 'img-14', src: u('/images/galleri/14-stor.avif'), thumb: u('/images/galleri/14-liten.avif'),  alt: 'Fargetatovering av en brølende gorilla i tradisjonell stil, på leggen', category: 'color' },
  { id: 'img-15', src: u('/images/galleri/15-stor.avif'), thumb: u('/images/galleri/15-liten.avif'),  alt: 'Fargetatovering av en samurai med sverd i japansk stil', category: 'color' },

  // Black & Grey — image (16).png til image (40).png, minus (34)
  { id: 'img-16', src: u('/images/galleri/16-stor.avif'), thumb: u('/images/galleri/16-liten.avif'),  alt: 'Black and grey-tatovering av en viking med ravn og ornamenter, på armen', category: 'black-grey' },
  { id: 'img-17', src: u('/images/galleri/17-stor.avif'), thumb: u('/images/galleri/17-liten.avif'),  alt: 'Black and grey-tatovering av en snerrende ulv, på armen', category: 'black-grey' },
  { id: 'img-18', src: u('/images/galleri/18-stor.avif'), thumb: u('/images/galleri/18-liten.avif'),  alt: 'Black and grey-tatovering av en brølende bjørn med hodeskaller og piggtråd, over hele ryggen', category: 'black-grey' },
  { id: 'img-19', src: u('/images/galleri/19-stor.avif'), thumb: u('/images/galleri/19-liten.avif'),  alt: 'Black and grey-tatovering av en kvinne med fjærhodeplagg, sett i profil', category: 'black-grey' },
  { id: 'img-20', src: u('/images/galleri/20-stor.avif'), thumb: u('/images/galleri/20-liten.avif'),  alt: 'Black and grey-tatovering over brystet og magen med kvinneansikter, en maske og skrift', category: 'black-grey' },
  { id: 'img-21', src: u('/images/galleri/21-stor.avif'), thumb: u('/images/galleri/21-liten.avif'),  alt: 'Black and grey-tatovering av Frankensteins monster, på låret', category: 'black-grey' },
  { id: 'img-22', src: u('/images/galleri/22-stor.avif'), thumb: u('/images/galleri/22-liten.avif'),  alt: 'Black and grey-tatovering av en snerrende ulv, på armen', category: 'black-grey' },
  { id: 'img-23', src: u('/images/galleri/23-stor.avif'), thumb: u('/images/galleri/23-liten.avif'),  alt: 'Black and grey-tatovering av et kompass med tau og kart, på skulderen', category: 'black-grey' },
  { id: 'img-24', src: u('/images/galleri/24-stor.avif'), thumb: u('/images/galleri/24-liten.avif'),  alt: 'Black and grey-tatovering av Filurkatten og den hvite kaninen fra Alice i Eventyrland', category: 'black-grey' },
  { id: 'img-25', src: u('/images/galleri/25-stor.avif'), thumb: u('/images/galleri/25-liten.avif'),  alt: 'Black and grey-tatovering av et brennende lys og en hodeskalle, på armen', category: 'black-grey' },
  { id: 'img-26', src: u('/images/galleri/26-stor.avif'), thumb: u('/images/galleri/26-liten.avif'),  alt: 'Black and grey-tatovering av en tiger under en samuraihjelm, på brystet og siden', category: 'black-grey' },
  { id: 'img-27', src: u('/images/galleri/27-stor.avif'), thumb: u('/images/galleri/27-liten.avif'),  alt: 'Black and grey-tatovering av Superman som flyr, på underarmen', category: 'black-grey' },
  { id: 'img-28', src: u('/images/galleri/28-stor.avif'), thumb: u('/images/galleri/28-liten.avif'),  alt: 'Old school-tatovering av to svaler og en blomst foran en sol, på håndbaken', category: 'black-grey' },
  { id: 'img-29', src: u('/images/galleri/29-stor.avif'), thumb: u('/images/galleri/29-liten.avif'),  alt: 'Black and grey-tatovering av en japansk krigerguddom med tau, på armen', category: 'black-grey' },
  { id: 'img-30', src: u('/images/galleri/30-stor.avif'), thumb: u('/images/galleri/30-liten.avif'),  alt: 'Black and grey-tatovering av en samurairustning med maske og skyer, på brystet', category: 'black-grey' },
  { id: 'img-31', src: u('/images/galleri/31-stor.avif'), thumb: u('/images/galleri/31-liten.avif'),  alt: 'Black and grey-tatovering av en kvinne med halvt sminket ansikt, på underarmen', category: 'black-grey' },
  { id: 'img-32', src: u('/images/galleri/32-stor.avif'), thumb: u('/images/galleri/32-liten.avif'),  alt: 'Black and grey-tatovering av en hodeskalle med hette, på underarmen', category: 'black-grey' },
  { id: 'img-33', src: u('/images/galleri/33-stor.avif'), thumb: u('/images/galleri/33-liten.avif'),  alt: 'Black and grey-tatovering av Michael Myers fra Halloween og et skrikende ansikt, på hånden', category: 'black-grey' },

  // Cover up — image (34).png
  { id: 'img-34', src: u('/images/galleri/34-stor.avif'), thumb: u('/images/galleri/34-liten.avif'),  alt: 'Cover-up: koifisk i black and grey over skulderen og armen, som dekker en eldre tatovering', category: 'cover-up' },

  // Black & Grey forts.
  { id: 'img-35', src: u('/images/galleri/35-stor.avif'), thumb: u('/images/galleri/35-liten.avif'),  alt: 'Black and grey-tatovering over hele armen med en gorilla og en kriger med hodeskalle', category: 'black-grey' },
  { id: 'img-36', src: u('/images/galleri/36-stor.avif'), thumb: u('/images/galleri/36-liten.avif'),  alt: 'Tatovering av et japansk kvinneansikt med kniv og geometrisk mønster, på armen', category: 'black-grey' },
  { id: 'img-37', src: u('/images/galleri/37-stor.avif'), thumb: u('/images/galleri/37-liten.avif'),  alt: 'Black and grey-tatoveringer over hele beinet, med en klovn og et kvinneansikt', category: 'black-grey' },
  { id: 'img-38', src: u('/images/galleri/38-stor.avif'), thumb: u('/images/galleri/38-liten.avif'),  alt: 'Black and grey-tatovering av en løve og et kvinneansikt som glir over i hverandre, på låret', category: 'black-grey' },
  { id: 'img-39', src: u('/images/galleri/39-stor.avif'), thumb: u('/images/galleri/39-liten.avif'),  alt: 'Black and grey-tatovering av en hodeskalle, på leggen', category: 'black-grey' },
  { id: 'img-40', src: u('/images/galleri/40-stor.avif'), thumb: u('/images/galleri/40-liten.avif'),  alt: 'Black and grey-tatovering av et kvinneansikt med mandala og geometriske mønstre, på underarmen', category: 'black-grey' },
  { id: 'img-41', src: u('/images/galleri/41-stor.avif'), thumb: u('/images/galleri/41-liten.avif'),  alt: 'Black and grey-tatovering av en biomekanisk hodeskalle over hele ryggen', category: 'black-grey' },
  { id: 'img-42', src: u('/images/galleri/42-stor.avif'), thumb: u('/images/galleri/42-liten.avif'),  alt: 'Black and grey-tatovering av Popeye med skip og bølger over hele ryggen, med skriften «Outward Bound»', category: 'black-grey' },
]
