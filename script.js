/**
 * ============================================================================
 * FROSTY - 100% VANILLA JAVASCRIPT (ES6+)
 * Completely Static, Ultra-Low Memory, No Frameworks, GitHub Pages Native
 * ============================================================================
 */

/* ============================================================================
   GAMES REGISTRY:
   Pure static registry with relative paths compatible with GitHub Pages
   and static web hosts.
   ============================================================================ */
const GAMES_REGISTRY = [
  {
    name: '10 Minutes Till Dawn',
    cover: 'assets/covers/10minutestilldawn.png',
    file: 'assets/htmls/cl10minutestildawn.html'
  },
  {
    name: '12 Mini Battles',
    cover: 'assets/covers/12minibattles.png',
    file: '12-mini-battles.html'
  },
  {
    name: '1v1.lol',
    cover: 'assets/covers/1v1-lol.png',
    file: 'assets/htmls/cl1v1lol.html'
  },
  {
    name: '2-3-4 Player Games',
    cover: 'assets/covers/234playergames.jpeg',
    file: 'assets/htmls/cl234playergame.html'
  },
  {
    name: '2048',
    cover: 'assets/covers/2048.jpg',
    file: 'assets/htmls/cl2048.html'
  },
  {
    name: '2DOOM',
    cover: 'assets/covers/2DOOM.png',
    file: 'assets/htmls/cl2doom.html'
  },
  {
    name: '8 Ball Classic',
    cover: 'assets/covers/8ballclassic.png',
    file: 'assets/htmls/cl8ballclassic.html'
  },
  {
    name: 'Absolute Madness',
    cover: 'assets/covers/absolutemadness.jpg',
    file: 'assets/htmls/clabsolutemadness.html'
  },
  {
    name: 'Achievement Unlocked',
    cover: 'assets/covers/achievementunlocked1.webp',
    file: 'assets/htmls/clachievementunlocked.html'
  },
  {
    name: 'Achievement Unlocked 2',
    cover: 'assets/covers/achievementunlocked2.webp',
    file: 'assets/htmls/clachievmentunlocked2.html'
  },
  {
    name: 'Achievement Unlocked 3',
    cover: 'assets/covers/achievementunlocked3.jpeg',
    file: 'assets/htmls/clachievmentunlocked3.html'
  },
  {
    name: 'AdVenture Capitalist',
    cover: 'assets/covers/adventurecapatilist.png',
    file: 'assets/htmls/clAdventureCapatalist.html'
  },
  {
    name: 'Agar.io',
    cover: 'assets/covers/agario.png',
    file: 'assets/htmls/clagariolite.html'
  },
  {
    name: 'Ages of Conflict',
    cover: 'assets/covers/agesofconflict.webp',
    file: 'assets/htmls/clagesofconflict.html'
  },
  {
    name: 'Airline Tycoon',
    cover: 'assets/covers/airlinetycoonidle.jpeg',
    file: 'assets/htmls/clairlinetycoonidle.html'
  },
  {
    name: 'Angry Birds',
    cover: 'assets/covers/angrybirds.jpeg',
    file: 'assets/htmls/clangrybirds.html'
  },
  {
    name: 'Angry Birds 2',
    cover: 'assets/covers/angrybirds2.webp',
    file: 'assets/htmls/clangrybirds2.html'
  },
  {
    name: 'Angry Birds Space',
    cover: 'assets/covers/angrybirdsspace.jpg',
    file: 'assets/htmls/clangry-birdsspace.html'
  },
  {
    name: 'Angry Birds Showdown',
    cover: 'assets/covers/angrybirdsshowdown.webp',
    file: 'assets/htmls/clangrybirdsshowdown.html'
  },
  {
    name: 'Bad Parenting 1',
    cover: 'assets/covers/badparenting.png',
    file: 'assets/htmls/clbadparenting.html'
  },
  {
    name: 'Bad Piggies',
    cover: 'assets/covers/badpiggies.jpeg',
    file: 'assets/htmls/clbadpiggies.html'
  },
  {
    name: "Baldi's Basics Classic Remastered",
    cover: 'assets/covers/baldisbasicremastered.jpeg',
    file: 'assets/htmls/clbaldisbasicsremaster.html'
  },
  {
    name: 'Bank Robbery 1',
    cover: 'assets/covers/bankrobber1.jpeg',
    file: 'assets/htmls/clbankrobbery.html'
  },
  {
    name: 'Bank Robbery 2',
    cover: 'assets/covers/bankrobber2.webp',
    file: 'assets/htmls/clbankrobbery2.html'
  },
  {
    name: 'Basket Random',
    cover: 'assets/covers/basketrandom.jpeg',
    file: 'assets/htmls/clbasketrandom.html'
  },
  {
    name: 'Basketball Stars',
    cover: 'assets/covers/basketballstars.jpeg',
    file: 'assets/htmls/clbasketballstars.html'
  },
  {
    name: 'Big Shot Boxing',
    cover: 'assets/covers/bigshotboxing.avif',
    file: 'assets/htmls/clbigshotboxing2.html'
  },
  {
    name: 'BitLife',
    cover: 'assets/covers/bitlife.png',
    file: 'assets/htmls/clbitlife.html'
  },
  {
    name: 'Blackjack',
    cover: 'assets/covers/blackjack.webp',
    file: 'assets/htmls/clblackjack.html'
  },
  {
    name: 'Block Blast',
    cover: 'assets/covers/blockblast.png',
    file: 'assets/htmls/clblockblast.html'
  },
  {
    name: 'Bob The Robber',
    cover: 'assets/covers/bobtherobber1.jpeg',
    file: 'assets/htmls/clbobtherobber.html'
  },
  {
    name: 'Bob The Robber 2',
    cover: 'assets/covers/bobtherobber2.jpeg',
    file: 'assets/htmls/clbobtherobber2.html'
  },
  {
    name: 'Bob The Robber 5',
    cover: 'assets/covers/bobtherobber5.png',
    file: 'assets/htmls/clbobtherobber5.html'
  },
  {
    name: 'Boxing Live 2',
    cover: 'assets/covers/boxing-live-2.jpg',
    file: 'assets/htmls/clboxinglive-2.html'
  },
  {
    name: 'Boxing Random',
    cover: 'assets/covers/boxingrandom.png',
    file: 'assets/htmls/clboxingrandom.html'
  },
  {
    name: 'Build Now',
    cover: 'assets/covers/buildnow.png',
    file: 'assets/htmls/clbuildnowgg.html'
  },
  {
    name: 'Burrito Bison: Launcha Libre',
    cover: 'assets/covers/burritobisonlaunchelibre.webp',
    file: 'assets/htmls/clburritobisonlaunchalibre.html'
  },
  {
    name: 'Cactus McCoy',
    cover: 'assets/covers/cactusmcoy1200x700.webp',
    file: 'assets/htmls/clcactusmccoy.html'
  },
  {
    name: 'Cactus McCoy 2',
    cover: 'assets/covers/cactusmcoy2.jpg',
    file: 'assets/htmls/clcactusmccoy2.html'
  },
  {
    name: 'Cookie Clicker',
    cover: 'assets/covers/cookieclicker.jpeg',
    file: 'assets/htmls/clcookieclicker.html'
  },
  {
    name: 'Football Bros',
    cover: 'assets/covers/footballbros.jpg',
    file: 'assets/htmls/clfootballbros.html'
  },
  {
    name: 'Papa Louie: When Pizzas Attack!',
    cover: 'assets/covers/papalouie1.jpg',
    file: 'assets/htmls/clpapalouiewhenpizzasattack.html'
  },
  {
    name: 'Papa Louie 2: When Burgers Attack!',
    cover: 'assets/covers/papalouie2.webp',
    file: 'assets/htmls/clpapalouiewhenburgersattack.html'
  },
  {
    name: 'Papa Louie 3: When Sundaes Attack!',
    cover: 'assets/covers/papalouie3.webp',
    file: 'assets/htmls/clpapalouiewhensundaesattack.html'
  },
  {
    name: 'Wrassling',
    cover: 'assets/covers/wrassling.jpeg',
    file: 'assets/htmls/clwrassling.html'
  },
  {
    name: 'Bloons TD 2',
    cover: 'assets/covers/bloonstd2.png',
    file: 'bloons-TD-2.html'
  },
  {
    name: 'Bloons TD 4',
    cover: 'assets/covers/bloonstd4.jpg',
    file: 'bloons-TD-4.html'
  },
  {
    name: 'Duck Life',
    cover: 'assets/covers/ducklife.png',
    file: 'duck-life.html'
  },
  {
    name: 'Duck Life 2',
    cover: 'assets/covers/ducklife2.png',
    file: 'duck-life-2.html'
  },
  {
    name: 'Duck Life 3',
    cover: 'assets/covers/ducklife3.png',
    file: 'duck-life-3.html'
  },
  {
    name: 'Duck Life 4',
    cover: 'assets/covers/ducklife4.jpg',
    file: 'duck-life-4.html'
  },
  {
    name: 'Duck Life 5: Treasure Hunt',
    cover: 'assets/covers/ducklife5.jpg',
    file: 'duck-life-5.html'
  },
  {
    name: 'Fireboy & Watergirl',
    cover: 'assets/covers/fireboywatergirl.jpg',
    file: 'fireboy-and-watergirl.html'
  },
  {
    name: 'Zombie Rush',
    cover: 'assets/covers/zombierush.jpg',
    file: 'zombie-rush.html'
  }
];

/* ============================================================================
   EXTRA ADDED GAMES REGISTRY (81 Standalone HTML Games - Zero Duplicates)
   ============================================================================ */

const EXTRA_GAMES_REGISTRY = [
  { name: 'Cut the Rope', cover: '', file: 'assets/htmls/clcuttherope.html', tag: 'extra' },
  { name: 'Drift Boss', cover: '', file: 'assets/htmls/cldriftboss.html', tag: 'extra' },
  { name: 'Drive Mad', cover: '', file: 'assets/htmls/cldrivemad.html', tag: 'extra' },
  { name: 'Duck Life Battle', cover: '', file: 'assets/htmls/clducklifebattle.html', tag: 'extra' },
  { name: 'Duck Life Space', cover: '', file: 'assets/htmls/clducklifespace.html', tag: 'extra' },
  { name: 'Escape Road 3', cover: '', file: 'assets/htmls/clescaperoad3.html', tag: 'extra' },
  { name: 'Fall Guys', cover: '', file: 'assets/htmls/clfallguys.html', tag: 'extra' },
  { name: 'Fireboy & Watergirl 2', cover: '', file: 'assets/htmls/clfireboyandwatergirl2.html', tag: 'extra' },
  { name: 'Fireboy & Watergirl 3', cover: '', file: 'assets/htmls/clfireboyandwatergirl3.html', tag: 'extra' },
  { name: "Five Nights at Freddy's", cover: '', file: 'assets/htmls/clFNAF.html', tag: 'extra' },
  { name: "Five Nights at Freddy's 2", cover: '', file: 'assets/htmls/clFNAF2.html', tag: 'extra' },
  { name: "Five Nights at Freddy's 3", cover: '', file: 'assets/htmls/clFNAF3.html', tag: 'extra' },
  { name: "Five Nights at Freddy's 4", cover: '', file: 'assets/htmls/clFNAF4.html', tag: 'extra' },
  { name: 'FNAF 4 Halloween Edition', cover: '', file: 'assets/htmls/clfnaf4halloween.html', tag: 'extra' },
  { name: "Freddy Fazbear's Pizzeria Simulator", cover: '', file: 'assets/htmls/clfnafps.html', tag: 'extra' },
  { name: 'FNAF: Sister Location', cover: '', file: 'assets/htmls/clfnafsl.html', tag: 'extra' },
  { name: 'FNAF: Ultimate Custom Night', cover: '', file: 'assets/htmls/clfnafucn.html', tag: 'extra' },
  { name: 'Football Legends', cover: '', file: 'assets/htmls/clfootballlegends.html', tag: 'extra' },
  { name: 'Fruit Ninja', cover: '', file: 'assets/htmls/clfruitninja.html', tag: 'extra' },
  { name: 'Funny Battle 2', cover: '', file: 'assets/htmls/clfunnybattle2.html', tag: 'extra' },
  { name: 'Funny Shooter 2', cover: '', file: 'assets/htmls/clfunnyshooter2.html', tag: 'extra' },
  { name: 'Geometry Dash Breeze', cover: '', file: 'assets/htmls/clgdbreeze.html', tag: 'extra' },
  { name: 'Getaway Shootout v2', cover: '', file: 'assets/htmls/clgetawayshootoutv2.html', tag: 'extra' },
  { name: 'Granny', cover: '', file: 'assets/htmls/clgrannyy.html', tag: 'extra' },
  { name: 'Granny 2', cover: '', file: 'assets/htmls/clgranny22.html', tag: 'extra' },
  { name: 'Granny 3', cover: '', file: 'assets/htmls/clgranny3.html', tag: 'extra' },
  { name: 'Half-Life', cover: '', file: 'assets/htmls/clhalflife.html', tag: 'extra' },
  { name: 'Hanger 2', cover: '', file: 'assets/htmls/clhanger2.html', tag: 'extra' },
  { name: 'Hole.io', cover: '', file: 'assets/htmls/clholeio.html', tag: 'extra' },
  { name: 'Idle Football Manager', cover: '', file: 'assets/htmls/clidlefootballmanager.html', tag: 'extra' },
  { name: 'Infinite Craft', cover: '', file: 'assets/htmls/clinfinitecraft.html', tag: 'extra' },
  { name: 'Jetpack Joyride', cover: '', file: 'assets/htmls/cljetpackjoyride.html', tag: 'extra' },
  { name: 'Johnny Upgrade', cover: '', file: 'assets/htmls/cljohnnyupgrade.html', tag: 'extra' },
  { name: 'Karate Bros', cover: '', file: 'assets/htmls/clkaratebros.html', tag: 'extra' },
  { name: 'Level Devil', cover: '', file: 'assets/htmls/clleveldevil.html', tag: 'extra' },
  { name: 'Madalin Stunt Cars Multiplayer', cover: '', file: 'assets/htmls/clmadalinstuntcarsmultiplayerfixed.html', tag: 'extra' },
  { name: 'Madalin Stunt Cars 2', cover: '', file: 'assets/htmls/clmadstuntcars2.html', tag: 'extra' },
  { name: 'Melon Playground', cover: '', file: 'assets/htmls/clmelonplayground.html', tag: 'extra' },
  { name: 'Monkey Mart', cover: '', file: 'assets/htmls/clmonkeymart.html', tag: 'extra' },
  { name: 'Moto X3M', cover: '', file: 'assets/htmls/clmotox3mm.html', tag: 'extra' },
  { name: 'Moto X3M 2', cover: '', file: 'assets/htmls/clmotox3m2.html', tag: 'extra' },
  { name: 'Moto X3M 3', cover: '', file: 'assets/htmls/clmotox3m3.html', tag: 'extra' },
  { name: 'Moto X3M Pool Party', cover: '', file: 'assets/htmls/clmotox3mpoolparty.html', tag: 'extra' },
  { name: 'Moto X3M Spooky Land', cover: '', file: 'assets/htmls/clmotox3mspookyland.html', tag: 'extra' },
  { name: 'Moto X3M Winter', cover: '', file: 'assets/htmls/clmotox3mwinter.html', tag: 'extra' },
  { name: 'OvO', cover: '', file: 'assets/htmls/clovofixed.html', tag: 'extra' },
  { name: 'OvO 2', cover: '', file: 'assets/htmls/clovo2.html', tag: 'extra' },
  { name: 'OvO Dimensions', cover: '', file: 'assets/htmls/clovodimensions.html', tag: 'extra' },
  { name: 'Ragdoll Hit', cover: '', file: 'assets/htmls/clragollhit.html', tag: 'extra' },
  { name: 'Retro Bowl', cover: '', file: 'assets/htmls/clretrobowl.html', tag: 'extra' },
  { name: 'Retro Bowl College', cover: '', file: 'assets/htmls/clretrobowlcollege.html', tag: 'extra' },
  { name: 'Roulette Knight', cover: '', file: 'assets/htmls/clrouletteknight.html', tag: 'extra' },
  { name: 'Run 3', cover: '', file: 'assets/htmls/clrun3.html', tag: 'extra' },
  { name: 'Scrap Metal 3', cover: '', file: 'assets/htmls/clscrapmetal3.html', tag: 'extra' },
  { name: 'Shift', cover: '', file: 'assets/htmls/clshift.html', tag: 'extra' },
  { name: 'Shift 2', cover: '', file: 'assets/htmls/clshift2.html', tag: 'extra' },
  { name: 'Snowball.io', cover: '', file: 'assets/htmls/clsnowballio.html', tag: 'extra' },
  { name: 'Snow Rider 3D', cover: '', file: 'assets/htmls/clsnowrider.html', tag: 'extra' },
  { name: 'Soccer Bros', cover: '', file: 'assets/htmls/clsoccerbros.html', tag: 'extra' },
  { name: 'Summer Rider 3D', cover: '', file: 'assets/htmls/clsummerrider.html', tag: 'extra' },
  { name: 'Super Mario 64', cover: '', file: 'assets/htmls/clmario64webgl.html', tag: 'extra' },
  { name: 'Sword Fight', cover: '', file: 'assets/htmls/clswordfight.html', tag: 'extra' },
  { name: "Papa's Taco Mia", cover: '', file: 'assets/htmls/cltacostand.html', tag: 'extra' },
  { name: 'Tag', cover: '', file: 'assets/htmls/cltag-.html', tag: 'extra' },
  { name: 'Temple Run 2', cover: '', file: 'assets/htmls/cltemplerun2.html', tag: 'extra' },
  { name: 'The Man From The Window', cover: '', file: 'assets/htmls/clthemaninthewindow.html', tag: 'extra' },
  { name: 'Time Shooter 2', cover: '', file: 'assets/htmls/cltimeshooter2.html', tag: 'extra' },
  { name: 'Time Shooter 3 SWAT', cover: '', file: 'assets/htmls/cltimeshooter3.html', tag: 'extra' },
  { name: 'Tiny Fishing', cover: '', file: 'assets/htmls/cltinyfishing.html', tag: 'extra' },
  { name: 'Tunnel Rush', cover: '', file: 'assets/htmls/cltunnelrushbetter.html', tag: 'extra' },
  { name: 'Vex 3', cover: '', file: 'assets/htmls/clvex3.html', tag: 'extra' },
  { name: 'Vex 3 Xmas', cover: '', file: 'assets/htmls/clvex3xmas.html', tag: 'extra' },
  { name: 'Vex 4', cover: '', file: 'assets/htmls/clvex4.html', tag: 'extra' },
  { name: 'Vex 5', cover: '', file: 'assets/htmls/clvex5.html', tag: 'extra' },
  { name: 'Vex 6', cover: '', file: 'assets/htmls/clvex6.html', tag: 'extra' },
  { name: 'Vex 7', cover: '', file: 'assets/htmls/clvex7.html', tag: 'extra' },
  { name: 'Vex 8', cover: '', file: 'assets/htmls/clvex8.html', tag: 'extra' },
  { name: 'Vex X3M', cover: '', file: 'assets/htmls/clvexx3m.html', tag: 'extra' },
  { name: 'Vex X3M 2', cover: '', file: 'assets/htmls/clvexx3m2.html', tag: 'extra' },
  { name: 'Volley Random', cover: '', file: 'assets/htmls/clvolleyrandom.html', tag: 'extra' },
  { name: 'Wrestle Bros', cover: '', file: 'assets/htmls/clwrestlebros.html', tag: 'extra' },
  { name: 'OneShot Legacy', cover: '', file: 'assets/htmls/cloneshotold.html', tag: 'extra' },
  { name: 'Paper.io 2', cover: '', file: 'assets/htmls/clpaperio.html', tag: 'extra' },
  { name: 'Pizza Tower', cover: '', file: 'assets/htmls/clpizzatower.html', tag: 'extra' },
  { name: 'Planet Life', cover: '', file: 'assets/htmls/clplanetlife.html', tag: 'extra' },
  { name: 'Portal 2D', cover: '', file: 'assets/htmls/clportal2d.html', tag: 'extra' },
  { name: 'PvZ 2 Gardendless', cover: '', file: 'assets/htmls/clpvz2gardenless.html', tag: 'extra' },
  { name: 'Quake III Arena', cover: '', file: 'assets/htmls/clquake3.html', tag: 'extra' },
  { name: 'Ruffle Player', cover: '', file: 'assets/htmls/clruffle.html', tag: 'extra' }
];

/* ============================================================================
   CURATION & QUALITY METADATA (134 GAMES)
   Carefully curated metadata for each game checking popularity, gameplay depth,
   fluidity, and acclaimed quality.
   ============================================================================ */
const GAME_CURATION = {
  // Action & Shooters
  '1v1.lol': { genre: 'action', isPopular: true, isMasterpiece: false, score: 97 },
  'Quake III Arena': { genre: 'action', isPopular: true, isMasterpiece: true, score: 97 },
  'Half-Life': { genre: 'action', isPopular: true, isMasterpiece: true, score: 98 },
  'Time Shooter 2': { genre: 'action', isPopular: false, isMasterpiece: true, score: 93 },
  'Time Shooter 3 SWAT': { genre: 'action', isPopular: false, isMasterpiece: true, score: 94 },
  '2DOOM': { genre: 'action', isPopular: false, isMasterpiece: false, score: 88 },
  'Bank Robbery 1': { genre: 'action', isPopular: false, isMasterpiece: false, score: 86 },
  'Bank Robbery 2': { genre: 'action', isPopular: false, isMasterpiece: false, score: 87 },
  'Funny Shooter 2': { genre: 'action', isPopular: false, isMasterpiece: false, score: 88 },
  'Funny Battle 2': { genre: 'action', isPopular: false, isMasterpiece: false, score: 85 },
  'Absolute Madness': { genre: 'action', isPopular: false, isMasterpiece: false, score: 89, isFlash: true },
  'Zombie Rush': { genre: 'action', isPopular: true, isMasterpiece: false, score: 92 },
  'Getaway Shootout v2': { genre: 'action', isPopular: false, isMasterpiece: false, score: 88 },
  'Ragdoll Hit': { genre: 'action', isPopular: false, isMasterpiece: false, score: 89 },
  'Sword Fight': { genre: 'action', isPopular: false, isMasterpiece: false, score: 84 },
  '10 Minutes Till Dawn': { genre: 'action', isPopular: false, isMasterpiece: true, score: 91 },
  'Burrito Bison: Launcha Libre': { genre: 'action', isPopular: true, isMasterpiece: false, score: 91 },
  'Jetpack Joyride': { genre: 'action', isPopular: true, isMasterpiece: false, score: 93 },
  'Fruit Ninja': { genre: 'action', isPopular: true, isMasterpiece: false, score: 90 },
  'Paper.io 2': { genre: 'action', isPopular: true, isMasterpiece: false, score: 96 },
  'Hole.io': { genre: 'action', isPopular: true, isMasterpiece: false, score: 90 },
  'Agar.io': { genre: 'action', isPopular: true, isMasterpiece: false, score: 90 },
  'Snowball.io': { genre: 'action', isPopular: false, isMasterpiece: false, score: 88 },
  'Build Now': { genre: 'action', isPopular: false, isMasterpiece: false, score: 87 },
  'Cactus McCoy': { genre: 'action', isPopular: false, isMasterpiece: true, score: 95, isFlash: true },
  'Cactus McCoy 2': { genre: 'action', isPopular: false, isMasterpiece: true, score: 94, isFlash: true },

  // Platformer
  'Super Mario 64': { genre: 'platformer', isPopular: true, isMasterpiece: true, score: 99 },
  'Pizza Tower': { genre: 'platformer', isPopular: true, isMasterpiece: true, score: 98 },
  'Run 3': { genre: 'platformer', isPopular: true, isMasterpiece: false, score: 96 },
  'Papa Louie: When Pizzas Attack!': { genre: 'platformer', isPopular: true, isMasterpiece: true, score: 94, isFlash: true },
  'Papa Louie 2: When Burgers Attack!': { genre: 'platformer', isPopular: true, isMasterpiece: true, score: 93, isFlash: true },
  'Papa Louie 3: When Sundaes Attack!': { genre: 'platformer', isPopular: true, isMasterpiece: true, score: 92, isFlash: true },
  'Portal 2D': { genre: 'platformer', isPopular: false, isMasterpiece: true, score: 95 },
  'Level Devil': { genre: 'platformer', isPopular: false, isMasterpiece: true, score: 93 },
  'Vex 8': { genre: 'platformer', isPopular: true, isMasterpiece: false, score: 93 },
  'Vex 7': { genre: 'platformer', isPopular: false, isMasterpiece: false, score: 92 },
  'Vex 6': { genre: 'platformer', isPopular: false, isMasterpiece: false, score: 91 },
  'Vex 5': { genre: 'platformer', isPopular: false, isMasterpiece: false, score: 90 },
  'Vex 4': { genre: 'platformer', isPopular: false, isMasterpiece: false, score: 89 },
  'Vex 3': { genre: 'platformer', isPopular: false, isMasterpiece: false, score: 88 },
  'Vex 3 Xmas': { genre: 'platformer', isPopular: false, isMasterpiece: false, score: 87 },
  'Vex X3M': { genre: 'platformer', isPopular: false, isMasterpiece: false, score: 90 },
  'Vex X3M 2': { genre: 'platformer', isPopular: false, isMasterpiece: false, score: 91 },
  'OvO': { genre: 'platformer', isPopular: true, isMasterpiece: false, score: 92 },
  'OvO 2': { genre: 'platformer', isPopular: false, isMasterpiece: false, score: 91 },
  'OvO Dimensions': { genre: 'platformer', isPopular: false, isMasterpiece: false, score: 92 },
  'Geometry Dash Breeze': { genre: 'platformer', isPopular: true, isMasterpiece: false, score: 93 },
  'Hanger 2': { genre: 'platformer', isPopular: false, isMasterpiece: false, score: 89, isFlash: true },
  'Johnny Upgrade': { genre: 'platformer', isPopular: false, isMasterpiece: true, score: 90, isFlash: true },
  'Tag': { genre: 'platformer', isPopular: false, isMasterpiece: false, score: 87 },
  'Tunnel Rush': { genre: 'platformer', isPopular: true, isMasterpiece: false, score: 91 },
  'Temple Run 2': { genre: 'platformer', isPopular: true, isMasterpiece: false, score: 92 },
  'Subway Surfers': { genre: 'platformer', isPopular: true, isMasterpiece: false, score: 94 },
  'Fall Guys': { genre: 'platformer', isPopular: false, isMasterpiece: false, score: 89 },

  // RPG & Story
  'OneShot Legacy': { genre: 'rpg', isPopular: false, isMasterpiece: true, score: 98 },
  'Planet Life': { genre: 'rpg', isPopular: false, isMasterpiece: true, score: 97 },
  'BitLife': { genre: 'rpg', isPopular: true, isMasterpiece: false, score: 95 },
  'Roulette Knight': { genre: 'rpg', isPopular: false, isMasterpiece: true, score: 92 },
  'Duck Life': { genre: 'rpg', isPopular: true, isMasterpiece: true, score: 95, isFlash: true },
  'Duck Life 2': { genre: 'rpg', isPopular: true, isMasterpiece: false, score: 93, isFlash: true },
  'Duck Life 3': { genre: 'rpg', isPopular: true, isMasterpiece: true, score: 95, isFlash: true },
  'Duck Life 4': { genre: 'rpg', isPopular: true, isMasterpiece: true, score: 98, isFlash: true },
  'Duck Life 5: Treasure Hunt': { genre: 'rpg', isPopular: true, isMasterpiece: false, score: 94, isFlash: true },
  'Duck Life Battle': { genre: 'rpg', isPopular: false, isMasterpiece: false, score: 90 },
  'Duck Life Space': { genre: 'rpg', isPopular: false, isMasterpiece: false, score: 89 },
  'PvZ 2 Gardendless': { genre: 'rpg', isPopular: false, isMasterpiece: true, score: 93 },
  'Melon Playground': { genre: 'rpg', isPopular: false, isMasterpiece: false, score: 89 },
  'Monkey Mart': { genre: 'rpg', isPopular: true, isMasterpiece: false, score: 91 },
  'Infinite Craft': { genre: 'rpg', isPopular: true, isMasterpiece: false, score: 92 },

  // Sports & Bros
  'Retro Bowl': { genre: 'sports', isPopular: true, isMasterpiece: true, score: 99 },
  'Retro Bowl College': { genre: 'sports', isPopular: true, isMasterpiece: true, score: 98 },
  'Wrestle Bros': { genre: 'sports', isPopular: true, isMasterpiece: false, score: 94 },
  'Soccer Bros': { genre: 'sports', isPopular: true, isMasterpiece: false, score: 93 },
  'Football Bros': { genre: 'sports', isPopular: true, isMasterpiece: false, score: 93 },
  'Karate Bros': { genre: 'sports', isPopular: false, isMasterpiece: false, score: 90 },
  'Basketball Stars': { genre: 'sports', isPopular: true, isMasterpiece: false, score: 93 },
  'Basket Random': { genre: 'sports', isPopular: true, isMasterpiece: false, score: 92 },
  'Boxing Random': { genre: 'sports', isPopular: false, isMasterpiece: false, score: 91 },
  'Soccer Random': { genre: 'sports', isPopular: false, isMasterpiece: false, score: 90 },
  'Volley Random': { genre: 'sports', isPopular: false, isMasterpiece: false, score: 90 },
  'Wrassling': { genre: 'sports', isPopular: false, isMasterpiece: false, score: 88 },
  'Big Shot Boxing': { genre: 'sports', isPopular: false, isMasterpiece: false, score: 89 },
  'Boxing Live 2': { genre: 'sports', isPopular: false, isMasterpiece: false, score: 89, isFlash: true },
  'Football Legends': { genre: 'sports', isPopular: false, isMasterpiece: false, score: 89 },
  'Idle Football Manager': { genre: 'sports', isPopular: false, isMasterpiece: false, score: 86 },
  '8 Ball Classic': { genre: 'sports', isPopular: false, isMasterpiece: false, score: 89 },
  '12 Mini Battles': { genre: 'sports', isPopular: false, isMasterpiece: false, score: 90 },
  '2-3-4 Player Games': { genre: 'sports', isPopular: false, isMasterpiece: false, score: 90 },

  // Racing
  'Drive Mad': { genre: 'racing', isPopular: true, isMasterpiece: true, score: 95 },
  'Moto X3M': { genre: 'racing', isPopular: true, isMasterpiece: false, score: 95 },
  'Moto X3M Winter': { genre: 'racing', isPopular: false, isMasterpiece: false, score: 93 },
  'Moto X3M Pool Party': { genre: 'racing', isPopular: false, isMasterpiece: false, score: 92 },
  'Moto X3M Spooky Land': { genre: 'racing', isPopular: false, isMasterpiece: false, score: 91 },
  'Moto X3M 2': { genre: 'racing', isPopular: false, isMasterpiece: false, score: 90 },
  'Moto X3M 3': { genre: 'racing', isPopular: false, isMasterpiece: false, score: 90 },
  'Drift Boss': { genre: 'racing', isPopular: true, isMasterpiece: false, score: 91 },
  'Drift Hunters': { genre: 'racing', isPopular: true, isMasterpiece: false, score: 92 },
  'Madalin Stunt Cars 2': { genre: 'racing', isPopular: true, isMasterpiece: false, score: 93 },
  'Madalin Stunt Cars Multiplayer': { genre: 'racing', isPopular: false, isMasterpiece: false, score: 91 },
  'Snow Rider 3D': { genre: 'racing', isPopular: true, isMasterpiece: false, score: 92 },
  'Summer Rider 3D': { genre: 'racing', isPopular: false, isMasterpiece: false, score: 89 },
  'Scrap Metal 3': { genre: 'racing', isPopular: false, isMasterpiece: false, score: 88 },
  'Escape Road 3': { genre: 'racing', isPopular: false, isMasterpiece: false, score: 87 },

  // Horror
  'Five Nights at Freddy\'s': { genre: 'horror', isPopular: true, isMasterpiece: true, score: 97 },
  'Five Nights at Freddy\'s 2': { genre: 'horror', isPopular: false, isMasterpiece: false, score: 94 },
  'Five Nights at Freddy\'s 3': { genre: 'horror', isPopular: false, isMasterpiece: false, score: 92 },
  'Five Nights at Freddy\'s 4': { genre: 'horror', isPopular: false, isMasterpiece: false, score: 93 },
  'FNAF 4 Halloween Edition': { genre: 'horror', isPopular: false, isMasterpiece: false, score: 91 },
  'Freddy Fazbear\'s Pizzeria Simulator': { genre: 'horror', isPopular: false, isMasterpiece: false, score: 93 },
  'FNAF: Sister Location': { genre: 'horror', isPopular: false, isMasterpiece: false, score: 94 },
  'FNAF: Ultimate Custom Night': { genre: 'horror', isPopular: true, isMasterpiece: false, score: 95 },
  'The Man From The Window': { genre: 'horror', isPopular: false, isMasterpiece: true, score: 94 },
  'Granny': { genre: 'horror', isPopular: true, isMasterpiece: false, score: 92 },
  'Granny 2': { genre: 'horror', isPopular: false, isMasterpiece: false, score: 90 },
  'Granny 3': { genre: 'horror', isPopular: false, isMasterpiece: false, score: 89 },
  'Bad Parenting 1': { genre: 'horror', isPopular: false, isMasterpiece: true, score: 91 },
  'Baldi\'s Basics Classic Remastered': { genre: 'horror', isPopular: true, isMasterpiece: false, score: 91 },

  // Puzzle & Strategy
  'Cut the Rope': { genre: 'puzzle', isPopular: true, isMasterpiece: true, score: 95 },
  'Shift': { genre: 'puzzle', isPopular: false, isMasterpiece: true, score: 96, isFlash: true },
  'Shift 2': { genre: 'puzzle', isPopular: false, isMasterpiece: true, score: 95, isFlash: true },
  'Achievement Unlocked': { genre: 'puzzle', isPopular: false, isMasterpiece: true, score: 94, isFlash: true },
  'Achievement Unlocked 2': { genre: 'puzzle', isPopular: false, isMasterpiece: true, score: 93, isFlash: true },
  'Achievement Unlocked 3': { genre: 'puzzle', isPopular: false, isMasterpiece: true, score: 92, isFlash: true },
  '2048': { genre: 'puzzle', isPopular: true, isMasterpiece: false, score: 93 },
  'Tiny Fishing': { genre: 'puzzle', isPopular: false, isMasterpiece: true, score: 93 },
  'Fireboy & Watergirl': { genre: 'puzzle', isPopular: true, isMasterpiece: true, score: 98 },
  'Fireboy & Watergirl 2': { genre: 'puzzle', isPopular: true, isMasterpiece: false, score: 92 },
  'Fireboy & Watergirl 3': { genre: 'puzzle', isPopular: true, isMasterpiece: false, score: 92 },
  'Bloons TD 2': { genre: 'puzzle', isPopular: true, isMasterpiece: false, score: 92, isFlash: true },
  'Bloons TD 4': { genre: 'puzzle', isPopular: true, isMasterpiece: true, score: 97, isFlash: true },
  'Bob The Robber': { genre: 'puzzle', isPopular: false, isMasterpiece: true, score: 92, isFlash: true },
  'Bob The Robber 2': { genre: 'puzzle', isPopular: false, isMasterpiece: false, score: 91 },
  'Bob The Robber 5': { genre: 'puzzle', isPopular: false, isMasterpiece: false, score: 90 },
  'Angry Birds': { genre: 'puzzle', isPopular: true, isMasterpiece: false, score: 92 },
  'Angry Birds 2': { genre: 'puzzle', isPopular: true, isMasterpiece: false, score: 91 },
  'Angry Birds Space': { genre: 'puzzle', isPopular: false, isMasterpiece: false, score: 90, isFlash: true },
  'Angry Birds Showdown': { genre: 'puzzle', isPopular: false, isMasterpiece: false, score: 88 },
  'Bad Piggies': { genre: 'puzzle', isPopular: true, isMasterpiece: false, score: 92 },
  'Cookie Clicker': { genre: 'puzzle', isPopular: true, isMasterpiece: false, score: 91 },
  'AdVenture Capitalist': { genre: 'puzzle', isPopular: false, isMasterpiece: false, score: 89 },
  'Block Blast': { genre: 'puzzle', isPopular: true, isMasterpiece: false, score: 90 },
  'Blackjack': { genre: 'puzzle', isPopular: false, isMasterpiece: false, score: 87 },
  'Papa\'s Taco Mia': { genre: 'puzzle', isPopular: false, isMasterpiece: false, score: 89 },
  'Ages of Conflict': { genre: 'puzzle', isPopular: false, isMasterpiece: false, score: 88 },
  'Airline Tycoon': { genre: 'puzzle', isPopular: false, isMasterpiece: false, score: 87 },

  // Flash Player Tool
  'Ruffle Player': { genre: 'flash', isPopular: true, isMasterpiece: true, score: 99, isFlash: true }
};

// Combined Master Registry with Curation Metadata (134 Total Games)
const ALL_GAMES_REGISTRY = [...GAMES_REGISTRY, ...EXTRA_GAMES_REGISTRY].map(game => {
  const meta = GAME_CURATION[game.name] || {
    genre: 'action',
    isPopular: false,
    isMasterpiece: false,
    score: 85,
    isFlash: false
  };
  return {
    ...game,
    genre: meta.genre,
    isPopular: !!meta.isPopular,
    isMasterpiece: !!meta.isMasterpiece,
    score: meta.score || 85,
    isFlash: !!meta.isFlash
  };
});

// Curated Sections for Insane Curation mode
const CURATED_SECTIONS = [
  {
    id: 'legendary',
    title: '👑 Hall of Fame: Legendary Hits',
    badge: 'Popular & Top Tier',
    filter: g => g.isPopular && g.score >= 92,
    description: 'The most popular, critically acclaimed, viral blockbusters.'
  },
  {
    id: 'masterpieces',
    title: '💎 Underrated Masterpieces & Hidden Gems',
    badge: 'Cult Classics',
    filter: g => g.isMasterpiece,
    description: 'Indie storytelling, mind-bending puzzles, and cult masterpieces.'
  },
  {
    id: 'platformer',
    title: '🏃 Platformer & Precision Velocity',
    badge: 'Jump & Speedrun',
    filter: g => g.genre === 'platformer',
    description: 'Parkour, obstacle dodging, and tight momentum physics.'
  },
  {
    id: 'sports',
    title: '🥊 Competitive Sports & "Bros" Chaos',
    badge: 'Tournament & Co-op',
    filter: g => g.genre === 'sports',
    description: 'From football dynasties to slapstick physics fighting.'
  },
  {
    id: 'racing',
    title: '🏎️ Speed, Stunts & Drifting',
    badge: 'High Octane',
    filter: g => g.genre === 'racing',
    description: 'Trial stunts, drifting, velocity, and aerial loops.'
  },
  {
    id: 'action',
    title: '🎯 Tactical Action & Combat Shooters',
    badge: 'Combat & Reflexes',
    filter: g => g.genre === 'action',
    description: 'Guns, slow-mo, reflexes, and adrenaline arena combat.'
  },
  {
    id: 'rpg',
    title: '⚔️ RPG, Adventure & Quirky Lore',
    badge: 'Story & Quests',
    filter: g => g.genre === 'rpg',
    description: 'Level up, explore bizarre realms, and embark on quests.'
  },
  {
    id: 'horror',
    title: '👻 Atmospheric & Survival Horror',
    badge: 'Survival & Dread',
    filter: g => g.genre === 'horror',
    description: 'Survive the night, evade monsters, and escape dread.'
  },
  {
    id: 'puzzle',
    title: '🧠 Logic Puzzles, Physics & Strategy',
    badge: 'Brain Teasers',
    filter: g => g.genre === 'puzzle',
    description: 'Tactile contraptions, arithmetic challenges, and strategy.'
  },
  {
    id: 'flash',
    title: '⚡ WebAssembly Flash Classics',
    badge: 'Ruffle Powered',
    filter: g => g.isFlash || g.genre === 'flash',
    description: 'The golden age of browser gaming emulated at full 60 FPS.'
  }
];

// Secret passcode to permanently unlock Frosty
const SECRET_PASSCODE = 'NOCHEUFC';

// App State
let calcDisplay = '0';
let calcHistory = '';
let calcMode = 'alphabet'; // 'alphabet' | 'scientific'
let activeGameUrl = null;
let activeGameTitle = '';
let currentIframeElement = null;

// Filter State: 'curated' | 'alpha' | 'popular' | 'masterpiece' | 'platformer' | 'rpg' | 'action' | 'racing' | 'sports' | 'horror' | 'puzzle' | 'flash'
let currentCuratedFilter = 'curated';
let alphaSortDirection = 'asc'; // 'asc' | 'desc'
let currentSearchQuery = '';

// DOM Elements
const calculatorView = document.getElementById('calculator-view');
const frostyView = document.getElementById('frosty-view');
const gamePlayerView = document.getElementById('game-player-view');
const playerFrameWrap = document.querySelector('.player-frame-wrap');
const playerTitle = document.getElementById('player-title');
const frameLoader = document.getElementById('frame-loader');

const calcDisplayEl = document.getElementById('calc-display');
const calcHistoryEl = document.getElementById('calc-history');
const alphaKeypad = document.getElementById('keypad-alphabet');
const sciKeypad = document.getElementById('keypad-scientific');

const sectionHome = document.getElementById('section-home');
const sectionGames = document.getElementById('section-games');
const gamesGrid = document.getElementById('games-grid');
const searchInput = document.getElementById('search-games');
const gamesCountEl = document.getElementById('games-count');
const alphaFilterBtn = document.getElementById('alpha-filter-btn');

// Modal DOM Elements
const copyModal = document.getElementById('copy-menu-modal');
const copyTextarea = document.getElementById('copy-games-list-text');
const copyStatusBadge = document.getElementById('copy-status-badge');
const copyActionBtn = document.getElementById('copy-all-games-action-btn');
const copyBtnText = document.getElementById('copy-btn-text');

/* ============================================================================
   SINGLETON INTERSECTION OBSERVER
   Low-memory, single observer that disconnects immediately after image load
   ============================================================================ */
let imgObserver = null;
if ('IntersectionObserver' in window) {
  imgObserver = new IntersectionObserver((entries, observer) => {
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');
        if (src) {
          img.src = src;
          if (img.complete) {
            img.classList.add('loaded');
          } else {
            img.onload = () => {
              img.classList.add('loaded');
              img.onload = null;
            };
          }
        }
        observer.unobserve(img);
      }
    }
  }, { rootMargin: '250px 0px', threshold: 0.01 });
}

/* ============================================================================
   ONE-TIME UNLOCK LOGIC ("UR IN FOREVER")
   Once code is entered, user NEVER sees calculator again unless cache is cleared.
   ============================================================================ */
function checkInitialAccess() {
  const isUnlocked = localStorage.getItem('frosty_unlocked') === 'true';

  if (isUnlocked) {
    if (calculatorView) calculatorView.style.display = 'none';
    if (frostyView) frostyView.style.display = 'flex';
    document.title = 'Frosty';
    switchFrostySection('home');
  } else {
    if (calculatorView) calculatorView.style.display = 'flex';
    if (frostyView) frostyView.style.display = 'none';
    document.title = 'Frosty Calculator';
  }

  updateGamesDisplay();
}

function unlockFrostyForever() {
  localStorage.setItem('frosty_unlocked', 'true');

  if (calcDisplayEl) {
    calcDisplayEl.style.color = '#38bdf8';
    calcDisplayEl.textContent = 'UNLOCKED';
  }

  setTimeout(() => {
    if (calculatorView) calculatorView.style.display = 'none';
    if (frostyView) frostyView.style.display = 'flex';
    document.title = 'Frosty';
    switchFrostySection('home');
  }, 350);
}

/* ============================================================================
   CALCULATOR ENGINE & SECRET PASSCODE HANDLER
   ============================================================================ */
function updateCalculatorDisplay() {
  if (calcDisplayEl) calcDisplayEl.textContent = calcDisplay || '0';
  if (calcHistoryEl) calcHistoryEl.textContent = calcHistory;
}

function handleCalculatorInput(val) {
  if (val === 'CLEAR') {
    calcDisplay = '0';
    calcHistory = '';
    updateCalculatorDisplay();
    return;
  }

  if (val === 'BACK') {
    calcDisplay = calcDisplay.length > 1 ? calcDisplay.slice(0, -1) : '0';
    updateCalculatorDisplay();
    return;
  }

  if (val === '=' || val === 'ENTER') {
    checkSecretOrEvaluate();
    return;
  }

  if (val === 'MODE_STANDARD') {
    calcMode = 'standard';
    if (alphaKeypad) alphaKeypad.style.display = 'none';
    if (sciKeypad) sciKeypad.style.display = 'none';
    return;
  }
  if (val === 'MODE_SCIENTIFIC') {
    calcMode = 'scientific';
    if (alphaKeypad) alphaKeypad.style.display = 'none';
    if (sciKeypad) sciKeypad.style.display = 'grid';
    return;
  }
  if (val === 'MODE_ALPHABET') {
    calcMode = 'alphabet';
    if (alphaKeypad) alphaKeypad.style.display = 'grid';
    if (sciKeypad) sciKeypad.style.display = 'none';
    return;
  }

  if (calcDisplay === '0' || calcDisplay === 'Error') {
    calcDisplay = val;
  } else {
    calcDisplay += val;
  }
  updateCalculatorDisplay();
}

function checkSecretOrEvaluate() {
  const sanitized = (calcDisplay || '').toUpperCase().trim();

  if (sanitized === SECRET_PASSCODE) {
    unlockFrostyForever();
    return;
  }

  try {
    const expr = calcDisplay
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/−/g, '-')
      .replace(/π/g, 'Math.PI')
      .replace(/e/g, 'Math.E')
      .replace(/sin\(/g, 'Math.sin(')
      .replace(/cos\(/g, 'Math.cos(')
      .replace(/tan\(/g, 'Math.tan(')
      .replace(/sqrt\(/g, 'Math.sqrt(')
      .replace(/log\(/g, 'Math.log10(')
      .replace(/ln\(/g, 'Math.log(');

    if (/[A-Za-z]/.test(expr) && !expr.includes('Math.')) {
      calcHistory = calcDisplay + ' =';
      calcDisplay = 'Error';
      updateCalculatorDisplay();
      return;
    }

    const result = Function('"use strict"; return (' + expr + ')')();
    calcHistory = calcDisplay + ' =';
    calcDisplay = (result === undefined || isNaN(result)) ? 'Error' : String(result);
  } catch (err) {
    calcHistory = calcDisplay + ' =';
    calcDisplay = 'Error';
  }
  updateCalculatorDisplay();
}

/* ============================================================================
   FROSTY HUB VIEW ROUTING
   ============================================================================ */
function switchFrostySection(sectionName) {
  const sHome = document.getElementById('section-home');
  const sGames = document.getElementById('section-games');
  const navHomeBtn = document.getElementById('nav-home-btn');
  const navGamesBtn = document.getElementById('nav-games-btn');

  if (sectionName === 'home') {
    if (sHome) sHome.style.display = 'flex';
    if (sGames) sGames.style.display = 'none';

    if (navHomeBtn) navHomeBtn.classList.add('active');
    if (navGamesBtn) navGamesBtn.classList.remove('active');
  } else if (sectionName === 'games') {
    if (sHome) sHome.style.display = 'none';
    if (sGames) sGames.style.display = 'block';

    if (navHomeBtn) navHomeBtn.classList.remove('active');
    if (navGamesBtn) navGamesBtn.classList.add('active');

    updateGamesDisplay();
  }
}
window.switchFrostySection = switchFrostySection;

/* ============================================================================
   CURATED & ALPHABETICAL FILTER CONTROLLER
   ============================================================================ */
function setCuratedFilter(filterKey) {
  if (filterKey === 'alpha') {
    if (currentCuratedFilter === 'alpha') {
      alphaSortDirection = alphaSortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      alphaSortDirection = 'asc';
    }
    if (alphaFilterBtn) {
      const label = alphaSortDirection === 'asc' ? 'A-Z' : 'Z-A';
      alphaFilterBtn.innerHTML = '<span class="pill-icon">🔤</span> Alphabetical (' + label + ')';
    }
  }

  currentCuratedFilter = filterKey;

  document.querySelectorAll('.filter-pill').forEach(pill => {
    if (pill.getAttribute('data-filter') === filterKey) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

  updateGamesDisplay();
}
window.setCuratedFilter = setCuratedFilter;

/* ============================================================================
   GAMES DISPLAY & INSANE CURATED RENDERER
   ============================================================================ */
function createGameCardElement(game) {
  const card = document.createElement('div');
  card.className = 'game-card';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', 'Play ' + game.name);

  // Badge determination: Popular hit > Underrated gem > Flash classic
  let badgeHtml = '';
  if (game.isPopular && game.score >= 92) {
    badgeHtml = '<span class="card-badge-pill card-badge-hit">👑 Hit</span>';
  } else if (game.isMasterpiece) {
    badgeHtml = '<span class="card-badge-pill card-badge-gem">💎 Gem</span>';
  } else if (game.isFlash || game.genre === 'flash') {
    badgeHtml = '<span class="card-badge-pill card-badge-flash">⚡ Flash</span>';
  }

  // Cover Box with Shimmer Skeleton placeholder
  const coverBox = document.createElement('div');
  coverBox.className = 'cover-box';
  coverBox.innerHTML = badgeHtml + '<span class="play-badge">PLAY</span>';

  const img = document.createElement('img');
  img.className = 'game-cover';
  img.alt = game.name;
  img.decoding = 'async';

  if (game.cover) {
    img.setAttribute('data-src', game.cover);
    if (imgObserver) {
      imgObserver.observe(img);
    } else {
      img.src = game.cover;
    }
  } else {
    img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240"><rect width="100%" height="100%" fill="%23111827"/><text x="50%" y="50%" fill="%2394a3b8" font-family="system-ui,sans-serif" font-size="15" font-weight="700" dominant-baseline="middle" text-anchor="middle">' + encodeURIComponent(game.name) + '</text></svg>';
    img.classList.add('loaded');
  }

  img.onerror = () => {
    img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240"><rect width="100%" height="100%" fill="%231e293b"/><text x="50%" y="50%" fill="%2338bdf8" font-family="system-ui,sans-serif" font-size="14" font-weight="bold" dominant-baseline="middle" text-anchor="middle">' + encodeURIComponent(game.name) + '</text></svg>';
    img.classList.add('loaded');
  };

  coverBox.appendChild(img);

  // Meta & Title
  const metaEl = document.createElement('div');
  metaEl.className = 'game-meta';
  const nameEl = document.createElement('div');
  nameEl.className = 'game-name';
  nameEl.textContent = game.name;
  metaEl.appendChild(nameEl);

  card.appendChild(coverBox);
  card.appendChild(metaEl);

  const launchHandler = (e) => {
    e.preventDefault();
    launchGame(game.name, game.file);
  };

  card.addEventListener('click', launchHandler);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      launchHandler(e);
    }
  });

  return card;
}

function updateGamesDisplay() {
  if (!gamesGrid) return;
  gamesGrid.innerHTML = '';

  const q = currentSearchQuery.toLowerCase().trim();

  // Mode 1: Insane Curation (Default when no search query is active)
  if (currentCuratedFilter === 'curated' && !q) {
    if (gamesCountEl) gamesCountEl.textContent = ALL_GAMES_REGISTRY.length + ' games';

    const fragment = document.createDocumentFragment();

    CURATED_SECTIONS.forEach(section => {
      const sectionGames = ALL_GAMES_REGISTRY.filter(section.filter);
      sectionGames.sort((a, b) => b.score - a.score);

      if (sectionGames.length === 0) return;

      const groupEl = document.createElement('div');
      groupEl.className = 'curated-group';

      const headerEl = document.createElement('div');
      headerEl.className = 'curated-group-header';
      headerEl.innerHTML = '<div class="curated-group-title"><span>' + section.title + '</span><span class="curated-group-badge">' + section.badge + '</span></div><span class="curated-group-count">' + sectionGames.length + ' titles</span>';

      const gridEl = document.createElement('div');
      gridEl.className = 'curated-games-grid';

      sectionGames.forEach(game => {
        gridEl.appendChild(createGameCardElement(game));
      });

      groupEl.appendChild(headerEl);
      groupEl.appendChild(gridEl);
      fragment.appendChild(groupEl);
    });

    gamesGrid.appendChild(fragment);
    return;
  }

  // Mode 2: Filtered or Alphabetical Grid
  let filtered = [...ALL_GAMES_REGISTRY];

  if (q) {
    filtered = filtered.filter(g =>
      g.name.toLowerCase().includes(q) ||
      g.genre.toLowerCase().includes(q)
    );
  }

  if (currentCuratedFilter === 'alpha') {
    filtered.sort((a, b) => {
      return alphaSortDirection === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
  } else if (currentCuratedFilter === 'popular') {
    filtered = filtered.filter(g => g.isPopular);
    filtered.sort((a, b) => b.score - a.score);
  } else if (currentCuratedFilter === 'masterpiece') {
    filtered = filtered.filter(g => g.isMasterpiece);
    filtered.sort((a, b) => b.score - a.score);
  } else if (currentCuratedFilter === 'flash') {
    filtered = filtered.filter(g => g.isFlash || g.genre === 'flash');
    filtered.sort((a, b) => b.score - a.score);
  } else if (currentCuratedFilter !== 'curated') {
    filtered = filtered.filter(g => g.genre === currentCuratedFilter);
    filtered.sort((a, b) => b.score - a.score);
  } else {
    filtered.sort((a, b) => b.score - a.score);
  }

  if (gamesCountEl) {
    gamesCountEl.textContent = filtered.length + ' games';
  }

  if (filtered.length === 0) {
    const emptyState = document.createElement('div');
    emptyState.className = 'empty-state';
    emptyState.innerHTML = '<div style="font-size: 32px; margin-bottom: 12px;">🔍</div><div style="font-size: 16px; font-weight: 700; color: #fff;">No matching games found</div><div style="font-size: 13px; color: #94a3b8; margin-top: 4px;">Try searching with a different term</div>';
    gamesGrid.appendChild(emptyState);
    return;
  }

  const regularGrid = document.createElement('div');
  regularGrid.className = 'curated-games-grid';

  const fragment = document.createDocumentFragment();
  filtered.forEach(game => {
    fragment.appendChild(createGameCardElement(game));
  });

  regularGrid.appendChild(fragment);
  gamesGrid.appendChild(regularGrid);
}
window.updateGamesDisplay = updateGamesDisplay;

/* ============================================================================
   EXPORT NUMBERED GAMES LIST (CTRL + SHIFT + J EXCLUSIVE)
   ============================================================================ */
function getNumberedGamesCatalog() {
  const sorted = [...ALL_GAMES_REGISTRY].sort((a, b) => a.name.localeCompare(b.name));
  return sorted.map((g, idx) => (idx + 1) + '. ' + g.name).join('\n');
}

function openCopyGamesModal() {
  if (copyTextarea) {
    copyTextarea.value = getNumberedGamesCatalog();
  }
  if (copyStatusBadge) {
    copyStatusBadge.style.display = 'none';
  }
  if (copyBtnText) {
    copyBtnText.textContent = 'Copy ' + ALL_GAMES_REGISTRY.length + ' Games';
  }
  if (copyModal) {
    copyModal.style.display = 'flex';
  }
}

function closeCopyGamesModal() {
  if (copyModal) {
    copyModal.style.display = 'none';
  }
}

function toggleCopyGamesModal() {
  if (!copyModal) return;
  if (copyModal.style.display === 'flex') {
    closeCopyGamesModal();
  } else {
    openCopyGamesModal();
  }
}

/* ============================================================================
   GAME PLAYER CONTROLLER & FULLSCREEN ENGINE
   ============================================================================ */
function launchGame(title, fileUrl) {
  let normalizedUrl = fileUrl || '';
  if (normalizedUrl && !normalizedUrl.startsWith('http') && !normalizedUrl.startsWith('/') && !normalizedUrl.startsWith('assets/')) {
    normalizedUrl = 'assets/htmls/' + normalizedUrl;
  }

  activeGameUrl = normalizedUrl;
  activeGameTitle = title || 'Game';

  if (playerTitle) playerTitle.textContent = activeGameTitle;
  if (frameLoader) frameLoader.style.display = 'flex';

  if (currentIframeElement && currentIframeElement.parentNode) {
    currentIframeElement.src = 'about:blank';
    currentIframeElement.parentNode.removeChild(currentIframeElement);
    currentIframeElement = null;
  }

  const iframe = document.createElement('iframe');
  iframe.className = 'game-iframe';
  iframe.id = 'active-game-frame';
  iframe.setAttribute('allow', 'autoplay; fullscreen; keyboard; gamepad; focus-without-user-activation *');
  iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-popups allow-forms allow-pointer-lock allow-downloads');
  iframe.setAttribute('tabindex', '0');

  iframe.onload = () => {
    if (frameLoader) frameLoader.style.display = 'none';
    try {
      iframe.focus();
      if (iframe.contentWindow) iframe.contentWindow.focus();
    } catch (err) {}
  };

  iframe.src = normalizedUrl;
  currentIframeElement = iframe;
  playerFrameWrap.appendChild(iframe);

  if (gamePlayerView) gamePlayerView.style.display = 'flex';
  if (frostyView) frostyView.style.display = 'none';
  document.title = activeGameTitle + ' - Frosty';
}

function closeGamePlayer() {
  if (currentIframeElement && currentIframeElement.parentNode) {
    currentIframeElement.src = 'about:blank';
    currentIframeElement.parentNode.removeChild(currentIframeElement);
    currentIframeElement = null;
  }

  activeGameUrl = null;
  activeGameTitle = '';

  if (gamePlayerView) gamePlayerView.style.display = 'none';
  if (frostyView) frostyView.style.display = 'flex';
  document.title = 'Frosty';
}

function reloadCurrentGame() {
  if (currentIframeElement && activeGameUrl) {
    if (frameLoader) frameLoader.style.display = 'flex';
    currentIframeElement.src = 'about:blank';
    setTimeout(() => {
      if (currentIframeElement) {
        currentIframeElement.src = activeGameUrl;
      }
    }, 50);
  }
}

function toggleGameFullscreen() {
  if (!gamePlayerView) return;
  if (!document.fullscreenElement) {
    if (gamePlayerView.requestFullscreen) {
      gamePlayerView.requestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

/* ============================================================================
   GLOBAL EVENT BINDINGS
   ============================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  checkInitialAccess();

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      updateGamesDisplay();
    });
  }

  // Calculator buttons
  document.querySelectorAll('.calc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-val');
      if (val) handleCalculatorInput(val);
    });
  });

  // Mode toggles
  document.querySelectorAll('.calc-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.calc-mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.getAttribute('data-mode');
      if (mode === 'standard') handleCalculatorInput('MODE_STANDARD');
      if (mode === 'scientific') handleCalculatorInput('MODE_SCIENTIFIC');
      if (mode === 'alphabet') handleCalculatorInput('MODE_ALPHABET');
    });
  });

  // Game player controls
  const backBtn = document.getElementById('player-back-btn');
  const reloadBtn = document.getElementById('player-reload-btn');
  const fsBtn = document.getElementById('player-fullscreen-btn');
  if (backBtn) backBtn.addEventListener('click', closeGamePlayer);
  if (reloadBtn) reloadBtn.addEventListener('click', reloadCurrentGame);
  if (fsBtn) fsBtn.addEventListener('click', toggleGameFullscreen);

  // Copy modal actions
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCancelBtn = document.getElementById('modal-cancel-btn');
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeCopyGamesModal);
  if (modalCancelBtn) modalCancelBtn.addEventListener('click', closeCopyGamesModal);

  if (copyModal) {
    copyModal.addEventListener('click', (e) => {
      if (e.target === copyModal) closeCopyGamesModal();
    });
  }

  if (copyActionBtn) {
    copyActionBtn.addEventListener('click', () => {
      if (copyTextarea) {
        copyTextarea.focus();
        copyTextarea.select();
        try {
          navigator.clipboard.writeText(copyTextarea.value).then(() => {
            if (copyStatusBadge) copyStatusBadge.style.display = 'inline-block';
            if (copyBtnText) copyBtnText.textContent = '✓ Copied!';
            setTimeout(() => {
              if (copyStatusBadge) copyStatusBadge.style.display = 'none';
              if (copyBtnText) copyBtnText.textContent = 'Copy ' + ALL_GAMES_REGISTRY.length + ' Games';
            }, 2500);
          });
        } catch (err) {
          document.execCommand('copy');
          if (copyStatusBadge) copyStatusBadge.style.display = 'inline-block';
        }
      }
    });
  }

  // GLOBAL KEYBOARD SHORTCUTS
  window.addEventListener('keydown', (e) => {
    // Exclusive Shortcut: Ctrl+Shift+J or Cmd+Shift+J opens the Numbered Games Catalog Modal
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
      e.preventDefault();
      toggleCopyGamesModal();
      return;
    }

    // Escape closes modal
    if (e.key === 'Escape' && copyModal && copyModal.style.display === 'flex') {
      closeCopyGamesModal();
      return;
    }

    // Calculator typing support if calculator view is active
    if (calculatorView && calculatorView.style.display !== 'none') {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleCalculatorInput('=');
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        handleCalculatorInput('BACK');
      } else if (e.key === 'Escape') {
        e.preventDefault();
        handleCalculatorInput('CLEAR');
      } else if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
        const char = e.key.toUpperCase();
        if (/^[0-9A-Z+\-*/.()=%]$/.test(char)) {
          handleCalculatorInput(char);
        }
      }
    }
  });
});
