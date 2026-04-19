export interface ImageData {
  id: string
  src: string
  alt: string
  category: 'color' | 'black-grey' | 'cover-up' | 'old-school' | 'japanese' | 'neo-traditional' | 'realism' | 'geometric' | 'mandala' | 'blackwork' | 'new-school' | 'lettering'
}

export const allImages: ImageData[] = [
  // Color — image.png til image (15).png
  { id: 'img-0',  src: '/images/image.png',         alt: 'Color tattoo', category: 'color' },
  { id: 'img-1',  src: '/images/image%20(1).png',   alt: 'Color tattoo', category: 'color' },
  { id: 'img-2',  src: '/images/image%20(2).png',   alt: 'Color tattoo', category: 'color' },
  { id: 'img-3',  src: '/images/image%20(3).png',   alt: 'Color tattoo', category: 'color' },
  { id: 'img-4',  src: '/images/image%20(4).png',   alt: 'Color tattoo', category: 'color' },
  { id: 'img-5',  src: '/images/image%20(5).png',   alt: 'Color tattoo', category: 'color' },
  { id: 'img-6',  src: '/images/image%20(6).png',   alt: 'Color tattoo', category: 'color' },
  { id: 'img-7',  src: '/images/image%20(7).png',   alt: 'Color tattoo', category: 'color' },
  { id: 'img-8',  src: '/images/image%20(8).png',   alt: 'Color tattoo', category: 'color' },
  { id: 'img-9',  src: '/images/image%20(9).png',   alt: 'Color tattoo', category: 'color' },
  { id: 'img-10', src: '/images/image%20(10).png',  alt: 'Color tattoo', category: 'color' },
  { id: 'img-11', src: '/images/image%20(11).png',  alt: 'Color tattoo', category: 'color' },
  { id: 'img-12', src: '/images/image%20(12).png',  alt: 'Color tattoo', category: 'color' },
  { id: 'img-13', src: '/images/image%20(13).png',  alt: 'Color tattoo', category: 'color' },
  { id: 'img-14', src: '/images/image%20(14).png',  alt: 'Color tattoo', category: 'color' },
  { id: 'img-15', src: '/images/image%20(15).png',  alt: 'Color tattoo', category: 'color' },

  // Black & Grey — image (16).png til image (40).png, minus (34)
  { id: 'img-16', src: '/images/image%20(16).png',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-17', src: '/images/image%20(17).png',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-18', src: '/images/image%20(18).png',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-19', src: '/images/image%20(19).png',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-20', src: '/images/image%20(20).png',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-21', src: '/images/image%20(21).png',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-22', src: '/images/image%20(22).png',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-23', src: '/images/image%20(23).png',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-24', src: '/images/image%20(24).png',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-25', src: '/images/image%20(25).png',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-26', src: '/images/image%20(26).png',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-27', src: '/images/image%20(27).png',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-28', src: '/images/image%20(28).png',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-29', src: '/images/image%20(29).png',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-30', src: '/images/image%20(30).png',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-31', src: '/images/image%20(31).png',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-32', src: '/images/image%20(32).png',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-33', src: '/images/image%20(33).png',  alt: 'Black & grey tattoo', category: 'black-grey' },

  // Cover up — image (34).png
  { id: 'img-34', src: '/images/image%20(34).png',  alt: 'Cover up tattoo', category: 'cover-up' },

  // Black & Grey forts.
  { id: 'img-35', src: '/images/image%20(35).png',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-36', src: '/images/image%20(36).png',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-37', src: '/images/image%20(37).png',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-38', src: '/images/image%20(38).png',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-39', src: '/images/image%20(39).png',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-40', src: '/images/image%20(40).png',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-41', src: '/images/image%20(41).png',  alt: 'Black & grey tattoo', category: 'black-grey' },
  { id: 'img-42', src: '/images/image%20(42).png',  alt: 'Black & grey tattoo', category: 'black-grey' },
]
