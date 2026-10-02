// Photo data for the See Napa gallery and the homepage photo strip.
// Images live in /public/images/see-napa/ as <slug>.webp (900px) and <slug>-sm.webp (480px).
// Captions only name places confirmed by Tim's file labels or visible signage.

export const groups = [
  {
    id: 'river',
    eyebrow: '01 · Along the River',
    title: 'Where downtown meets the water',
    intro: 'The River Walk, the old mill, and a mosaic mural most people walk right past.',
    link: { href: '/tours', label: 'SEE ALL FOUR WALKS →' },
    photos: [
      { slug: 'river-walk', alt: 'Two walkers on the Napa River Walk beside the river under a blue sky', caption: 'The Napa River Walk, steps from the Napa River Inn.' },
      { slug: 'china-point', alt: 'Two people standing inside a large circular steel arch at China Point with the river behind them', caption: 'The circular arch at China Point, overlooking the river.' },
      { slug: 'napa-mill', alt: 'The Napa Mill building and its concrete silos with red patio umbrellas in front', caption: 'The Napa Mill building and its silos, home of the Napa River Inn.' },
      { slug: 'napa-river-inn-garden', alt: 'A curving path through landscaped gardens beside the Napa River Inn', caption: 'Gardens along the path at the Napa River Inn.' },
      { slug: 'celadon-canopy', alt: 'Two women standing on a path under an arched canopy of vines and flowers', caption: 'Under the vine canopy at Celadon restaurant.' },
      { slug: 'mural-napa-river-inn', alt: 'Colorful mosaic mural showing a farm worker, a train, and wine barrels', caption: 'The mosaic mural behind the Napa River Inn.' },
      { slug: 'mural-detail', alt: 'Close-up of mosaic tile detail with a seal and swirling colors', caption: 'Mosaic detail, behind the Napa River Inn.' },
      { slug: 'mural-walkers', alt: 'Two walkers stopping to look at a long mosaic mural wall', caption: 'Stopping to take in the historic mural behind the Napa River Inn.' },
    ],
  },
  {
    id: 'heritage',
    eyebrow: '02 · Old Napa, Still Standing',
    title: 'The buildings that survived',
    intro: 'Cornerstones, plaques, and facades that have outlasted a century and a couple of earthquakes.',
    link: { href: '/tours/heritage-walk', label: 'ABOUT THE HERITAGE WALK →' },
    photos: [
      { slug: 'courthouse', alt: 'The historic Napa courthouse with JUSTICE carved above the entrance', caption: 'The historic Napa courthouse, "Justice" carved over the door.' },
      { slug: 'courthouse-grounds', alt: 'A large shade tree over a path on the courthouse grounds', caption: 'Shade on the courthouse grounds.' },
      { slug: 'courthouse-cornerstone', alt: 'Stone block carved LAID JULY 29TH 1856, RELAID SEPT 21ST 78', caption: 'Courthouse cornerstone: laid July 29th, 1856, relaid Sept. 21st, ’78.' },
      { slug: 'goodman-library', alt: 'Stone wall with a bronze plaque and a block carved LAID 1901', caption: 'The Goodman Library Building on First Street, laid 1901.' },
      { slug: 'napa-register-building', alt: 'A historic two-story corner building with arched windows', caption: 'The Old Napa Register building.' },
      { slug: 'napa-register-plaque', alt: 'National Register plaque for the Old Napa Register Building, 1905', caption: 'Built 1905, designed by Luther M. Turton, per its National Register plaque.' },
      { slug: 'oberon-plaque', alt: 'Bronze plaque for the Oberon Saloon describing its history', caption: 'The Oberon Saloon plaque: built in 1893, now home to Downtown Joe’s.' },
      { slug: 'second-street-post-office', alt: 'The long facade of the Second Street post office building along the sidewalk', caption: 'The Second Street Post Office.' },
      { slug: 'first-street-historic', alt: 'A historic building with tall arched windows on First Street', caption: 'Historic storefronts on First Street.' },
      { slug: 'loudspeaker-monument', alt: 'A bronze loudspeaker horn statue on a stone pedestal on the sidewalk', caption: 'The First Street monument marking Napa as the birthplace of the loudspeaker.' },
      { slug: 'napa-historical-society', alt: 'Wooden door of the Napa Historical Society with a museum hours sign', caption: 'The front door of the Napa Historical Society.' },
      { slug: 'veterans-park-memorial', alt: 'A stone memorial with bronze plaques at Veterans Park', caption: 'The memorial at Veterans Park.' },
      { slug: 'napa-city-hall', alt: 'Flags flying in front of Napa City Hall', caption: 'Napa City Hall.' },
    ],
  },
  {
    id: 'pours',
    eyebrow: '03 · Pours & Plates',
    title: 'Where the tasting happens',
    intro: 'A few of the rooms you will actually sit down in, on Sip & Nibble and Hops & Bites.',
    link: { href: '/tours/sip-and-nibble', label: 'SEE SIP & NIBBLE →', alt: { href: '/tours/hops-and-bites', label: 'SEE HOPS & BITES →' } },
    photos: [
      { slug: 'downtown-joes', alt: 'The tiled corner entrance of Downtown Joe’s with a neon sign in the window', caption: 'Downtown Joe’s, a stop on Sip & Nibble and Hops & Bites.' },
      { slug: 'downtown-joes-bar', alt: 'The wooden bar and stools inside Downtown Joe’s', caption: 'Inside Downtown Joe’s.' },
      { slug: 'the-garden-sign', alt: 'The Garden logo painted on a red brick wall', caption: 'The Garden, downtown’s beer garden.' },
      { slug: 'the-garden-hall', alt: 'Long wooden tables under an open, canopied roof at The Garden', caption: 'Long tables under the open roof at The Garden.' },
      { slug: 'the-garden-stage', alt: 'The stage and seating area at The Garden', caption: 'The stage at The Garden.' },
      { slug: 'oenotri-walk', alt: 'Two walkers heading down a sunny downtown sidewalk past Oenotri', caption: 'Walking past Oenotri.' },
    ],
  },
  {
    id: 'shops',
    eyebrow: '04 · Coffee, Shops & Side Streets',
    title: 'The in-between is the good part',
    intro: 'Coffee counters, boutiques, alleys, and the odd surprise set into the sidewalk.',
    link: { href: '/tours/boutique-row', label: 'ABOUT BOUTIQUE ROW →' },
    photos: [
      { slug: 'coffee-roasting-company', alt: 'Striped awning over the Napa Valley Coffee Roasting Company storefront', caption: 'Napa Valley Coffee Roasting Company.' },
      { slug: 'moulin-bakery', alt: 'People at patio tables outside Moulin coffee and bakery', caption: 'Patio tables at Moulin coffee and bakery.' },
      { slug: 'ohm-coffee', alt: 'OHM Coffee storefront with blue umbrellas on the sidewalk', caption: 'OHM Coffee.' },
      { slug: 'kindled-and-grounded', alt: 'Open storefront of Kindled & Grounded with chairs out front', caption: 'Kindled & Grounded, on Second Street.' },
      { slug: 'field-day', alt: 'White storefront with FIELD DAY in red letters', caption: 'Field Day, on Second Street.' },
      { slug: 'carpe-diem-corner', alt: 'A four-story stone corner building with bay windows', caption: 'The corner at Carpe Diem.' },
      { slug: 'first-street-shops', alt: 'A modern building with shops at street level on First Street', caption: 'Shops on First Street.' },
      { slug: 'andaz-hotel', alt: 'The Andaz hotel building on a sunny downtown street', caption: 'The Andaz hotel, downtown.' },
      { slug: 'first-street-east', alt: 'View down First Street with storefronts and a traffic light', caption: 'Looking east down First Street.' },
      { slug: 'marquee-alley', alt: 'A brick-paved alley with string lights and outdoor tables', caption: 'The alley by Marquee Pinball.' },
      { slug: 'big-chair', alt: 'An oversized wooden chair on a brick sidewalk', caption: 'The big chair. You’ll know it when you see it.' },
      { slug: 'cha-cha-cha', alt: 'Dance step footprints inlaid in the sidewalk labeled THE CHA CHA CHA', caption: 'Dance steps set in the sidewalk. Yes, it’s the cha cha cha.' },
    ],
  },
];

// Curated set for the homepage strip.
const pick = ['river-walk', 'celadon-canopy', 'mural-napa-river-inn', 'courthouse', 'the-garden-hall', 'downtown-joes', 'moulin-bakery', 'china-point'];
const all = groups.flatMap((g) => g.photos);
export const highlights = pick.map((s) => all.find((p) => p.slug === s));
