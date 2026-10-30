export interface ImageData {
  id: string
  src: string
  thumb: string
  alt: string
  category: 'color' | 'black-grey' | 'cover-up' | 'old-school' | 'japanese' | 'neo-traditional' | 'realism' | 'geometric' | 'mandala' | 'blackwork' | 'new-school' | 'lettering'
}

export const allImages: ImageData[] = [
  // Color — image.png til image (15).png
  { id: 'img-0',  src: '/images/galleri/00-stor.avif', thumb: '/images/galleri/00-liten.avif',         alt: 'Color tattoo', category: 'color' },
  { id: 'img-1',  src: '/images/galleri/01-stor.avif', thumb: '/images/galleri/01-liten.avif',   alt: 'Color tattoo', category: 'color' },
  { id: 'img-2',  src: '/images/galleri/02-stor.avif', thumb: '/images/galleri/02-liten.avif',   alt: 'Color tattoo', category: 'color' },
  { id: 'img-3',  src: '/images/galleri/03-stor.avif', thumb: '/images/galleri/03-liten.avif',   alt: 'Color tattoo', category: 'color' },
  { id: 'img-4',  src: '/images/galleri/04-stor.avif', thumb: '/images/galleri/04-liten.avif',   alt: 'Color tattoo', category: 'color' },
  { id: 'img-5',  src: '/images/galleri/05-stor.avif', thumb: '/images/galleri/05-liten.avif',   alt: 'Color tattoo', category: 'color' },
  { id: 'img-6',  src: '/images/galleri/06-stor.avif', thumb: '/images/galleri/06-liten.avif',   alt: 'Color tattoo', category: 'color' },
  { id: 'img-7',  src: '/images/galleri/07-stor.avif', thumb: '/images/galleri/07-liten.avif',   alt: 'Color tattoo', category: 'color' },
  { id: 'img-8',  src: '/images/galleri/08-stor.avif', thumb: '/images/galleri/08-liten.avif',   alt: 'Color tattoo', category: 'color' },
  { id: 'img-9',  src: '/images/galleri/09-stor.avif', thumb: '/images/galleri/09-liten.avif',   alt: 'Color tattoo', category: 'color' },
  { id: 'img-10', src: '/images/galleri/10-stor.avif', thumb: '/images/galleri/10-liten.avif',  alt: 'Color tattoo', category: 'color' },
  { id: 'img-11', src: '/images/galleri/11-stor.avif', thumb: '/images/galleri/11-liten.avif',  alt: 'Color tattoo', category: 'color' },
  { id: 'img-12', src: '/images/galleri/12-stor.avif', thumb: '/images/galleri/12-liten.avif',  alt: 'Color tattoo', category: 'color' },
  { id: 'img-13', src: '/images/galleri/13-stor.avif', thumb: '/images/galleri/13-liten.avif',  alt: 'Color tattoo', category: 'color' },
  { id: 'img-14', src: '/images/galleri/14-stor.avif', thumb: '/images/galleri/14-liten.avif',  alt: 'Color tattoo', category: 'color' },
  { id: 'img-15', src: '/images/galleri/15-stor.avif', thumb: '/images/galleri/15-liten.avif',  alt: 'Color tattoo', category: 'color' },

  // Black & Grey — image (16).png til image (40).png, minus (34)
  { id: 'img-16', src: '/images/galleri/16-stor.avif', thumb: '/images/galleri/16-liten.avif',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-17', src: '/images/galleri/17-stor.avif', thumb: '/images/galleri/17-liten.avif',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-18', src: '/images/galleri/18-stor.avif', thumb: '/images/galleri/18-liten.avif',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-19', src: '/images/galleri/19-stor.avif', thumb: '/images/galleri/19-liten.avif',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-20', src: '/images/galleri/20-stor.avif', thumb: '/images/galleri/20-liten.avif',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-21', src: '/images/galleri/21-stor.avif', thumb: '/images/galleri/21-liten.avif',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-22', src: '/images/galleri/22-stor.avif', thumb: '/images/galleri/22-liten.avif',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-23', src: '/images/galleri/23-stor.avif', thumb: '/images/galleri/23-liten.avif',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-24', src: '/images/galleri/24-stor.avif', thumb: '/images/galleri/24-liten.avif',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-25', src: '/images/galleri/25-stor.avif', thumb: '/images/galleri/25-liten.avif',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-26', src: '/images/galleri/26-stor.avif', thumb: '/images/galleri/26-liten.avif',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-27', src: '/images/galleri/27-stor.avif', thumb: '/images/galleri/27-liten.avif',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-28', src: '/images/galleri/28-stor.avif', thumb: '/images/galleri/28-liten.avif',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-29', src: '/images/galleri/29-stor.avif', thumb: '/images/galleri/29-liten.avif',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-30', src: '/images/galleri/30-stor.avif', thumb: '/images/galleri/30-liten.avif',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-31', src: '/images/galleri/31-stor.avif', thumb: '/images/galleri/31-liten.avif',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-32', src: '/images/galleri/32-stor.avif', thumb: '/images/galleri/32-liten.avif',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-33', src: '/images/galleri/33-stor.avif', thumb: '/images/galleri/33-liten.avif',  alt: 'Black & grey tattoo', category: 'black-grey' },

  // Cover up — image (34).png
  { id: 'img-34', src: '/images/galleri/34-stor.avif', thumb: '/images/galleri/34-liten.avif',  alt: 'Cover up tattoo', category: 'cover-up' },

  // Black & Grey forts.
  { id: 'img-35', src: '/images/galleri/35-stor.avif', thumb: '/images/galleri/35-liten.avif',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-36', src: '/images/galleri/36-stor.avif', thumb: '/images/galleri/36-liten.avif',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-37', src: '/images/galleri/37-stor.avif', thumb: '/images/galleri/37-liten.avif',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-38', src: '/images/galleri/38-stor.avif', thumb: '/images/galleri/38-liten.avif',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-39', src: '/images/galleri/39-stor.avif', thumb: '/images/galleri/39-liten.avif',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-40', src: '/images/galleri/40-stor.avif', thumb: '/images/galleri/40-liten.avif',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-41', src: '/images/galleri/41-stor.avif', thumb: '/images/galleri/41-liten.avif',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-42', src: '/images/galleri/42-stor.avif', thumb: '/images/galleri/42-liten.avif',  alt: 'Black & grey tattoo', category: 'black-grey' },
]
