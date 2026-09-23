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
    file: 'assets/htmls/cl12minibattles.html'
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

// Tag original games as 'main'
const MAIN_GAMES_TAGGED = GAMES_REGISTRY.map(g => ({ ...g, tag: 'main' }));

// Combined Master Registry (134 Total Games)
const ALL_GAMES_REGISTRY = [...MAIN_GAMES_TAGGED, ...EXTRA_GAMES_REGISTRY];

// Secret passcode to permanently unlock Frosty
const SECRET_PASSCODE = 'NOCHEUFC';

// App State
let calcDisplay = '0';
let calcHistory = '';
let calcMode = 'alphabet'; // 'alphabet' | 'scientific'
let activeGameUrl = null;
let activeGameTitle = '';
let currentIframeElement = null;

// Filter & Section State
let currentCategoryFilter = 'all'; // 'all' | 'main' | 'extra'
let currentSearchQuery = '';
let currentCopyType = 'all'; // 'all' | 'main' | 'extra'

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
const sectionCopy = document.getElementById('section-copy');
const gamesGrid = document.getElementById('games-grid');
const searchInput = document.getElementById('search-games');
const gamesCountEl = document.getElementById('games-count');

// Modal DOM Elements
const copyModal = document.getElementById('copy-menu-modal');
const copyTextarea = document.getElementById('copy-games-list-text');
const copyStatusBadge = document.getElementById('copy-status-badge');
const copyActionBtn = document.getElementById('copy-all-games-action-btn');
const copyBtnText = document.getElementById('copy-btn-text');
const countModalAll = document.getElementById('count-modal-all');
const countModalExtra = document.getElementById('count-modal-extra');
const countModalMain = document.getElementById('count-modal-main');

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
    // Already unlocked forever: Show Frosty directly
    if (calculatorView) calculatorView.style.display = 'none';
    if (frostyView) frostyView.style.display = 'flex';
    document.title = 'Frosty';
    switchFrostySection('home');
  } else {
    // First time visitor: Show the cloak calculator
    if (calculatorView) calculatorView.style.display = 'flex';
    if (frostyView) frostyView.style.display = 'none';
    document.title = 'Frosty Calculator';
  }

  updateGamesDisplay();
  renderCopySectionList('all');
}

function unlockFrostyForever() {
  // Store permanent unlock in localStorage
  localStorage.setItem('frosty_unlocked', 'true');

  // Flash confirmation
  calcDisplayEl.style.color = '#38bdf8';
  calcDisplayEl.textContent = 'UNLOCKED';

  setTimeout(() => {
    calculatorView.style.display = 'none';
    frostyView.style.display = 'flex';
    document.title = 'Frosty';
    switchFrostySection('home');
  }, 350);
}

/* ============================================================================
   CALCULATOR ENGINE & SECRET PASSCODE HANDLER
   ============================================================================ */
function updateCalculatorDisplay() {
  calcDisplayEl.textContent = calcDisplay || '0';
  calcHistoryEl.textContent = calcHistory;
}

function handleCalculatorInput(val) {
  // Clear button (Clicked on [CLEAR] button or pressed Escape/Delete)
  if (val === 'CLEAR') {
    calcDisplay = '0';
    calcHistory = '';
    updateCalculatorDisplay();
    return;
  }

  // Backspace (Clicked [⌫] or pressed Backspace on keyboard)
  if (val === 'BACK') {
    if (calcDisplay.length > 1) {
      calcDisplay = calcDisplay.slice(0, -1);
    } else {
      calcDisplay = '0';
    }
    updateCalculatorDisplay();
    return;
  }

  // Submit / Equals / Enter
  if (val === '=' || val === 'ENTER') {
    checkSecretOrEvaluate();
    return;
  }

  // If currently displaying '0' and typing a regular character
  if (calcDisplay === '0' && val !== '.' && !['+', '-', '×', '÷', '%'].includes(val)) {
    calcDisplay = val;
  } else {
    calcDisplay += val;
  }

  // Instant unlock if passcode NOCHEUFC is typed
  if (calcDisplay.trim().toUpperCase().includes(SECRET_PASSCODE)) {
    unlockFrostyForever();
    return;
  }

  updateCalculatorDisplay();
}

function checkSecretOrEvaluate() {
  const rawInput = calcDisplay.trim().toUpperCase();

  // Check if passcode NOCHEUFC is typed anywhere in display
  if (rawInput.includes(SECRET_PASSCODE)) {
    unlockFrostyForever();
    return;
  }

  // Otherwise, evaluate as mathematical expression
  try {
    let expression = calcDisplay
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/π/g, 'Math.PI')
      .replace(/e/g, 'Math.E');

    // Safe mathematical validation
    if (/^[0-9+\-*/().,%\sMathPIEsincoztanqrlge^]+$/.test(expression)) {
      expression = expression.replace(/\^/g, '**');
      const result = Function(`'use strict'; return (${expression})`)();
      if (result !== undefined && !Number.isNaN(result)) {
        calcHistory = calcDisplay + ' =';
        calcDisplay = Number.isInteger(result) ? result.toString() : parseFloat(result.toFixed(8)).toString();
      } else {
        calcDisplay = '0';
      }
    } else {
      calcDisplay = '0';
    }
  } catch (e) {
    calcDisplay = '0';
  }

  updateCalculatorDisplay();
}

function handleScientificFunc(func) {
  try {
    const num = parseFloat(calcDisplay) || 0;
    let res = 0;
    switch (func) {
      case 'sin': res = Math.sin(num); break;
      case 'cos': res = Math.cos(num); break;
      case 'tan': res = Math.tan(num); break;
      case 'sqrt': res = Math.sqrt(num); break;
      case 'sq': res = Math.pow(num, 2); break;
      case 'log': res = Math.log10(num); break;
      case 'ln': res = Math.log(num); break;
      case 'pi': calcDisplay = Math.PI.toString(); updateCalculatorDisplay(); return;
      case 'e': calcDisplay = Math.E.toString(); updateCalculatorDisplay(); return;
    }
    calcHistory = `${func}(${num}) =`;
    calcDisplay = Number.isInteger(res) ? res.toString() : parseFloat(res.toFixed(8)).toString();
  } catch (e) {
    calcDisplay = '0';
  }
  updateCalculatorDisplay();
}

/* ============================================================================
   FROSTY NAVIGATION
   ============================================================================ */
function switchFrostySection(section) {
  const sHome = document.getElementById('section-home');
  const sGames = document.getElementById('section-games');
  const sCopy = document.getElementById('section-copy');

  const navHomeBtn = document.getElementById('nav-home-btn');
  const navGamesBtn = document.getElementById('nav-games-btn');
  const navCopyBtn = document.getElementById('nav-copy-btn');

  if (section === 'home') {
    if (sHome) sHome.style.display = 'block';
    if (sGames) sGames.style.display = 'none';
    if (sCopy) sCopy.style.display = 'none';

    if (navHomeBtn) navHomeBtn.classList.add('active');
    if (navGamesBtn) navGamesBtn.classList.remove('active');
    if (navCopyBtn) navCopyBtn.classList.remove('active');
  } else if (section === 'copy') {
    if (sHome) sHome.style.display = 'none';
    if (sGames) sGames.style.display = 'none';
    if (sCopy) sCopy.style.display = 'block';

    if (navHomeBtn) navHomeBtn.classList.remove('active');
    if (navGamesBtn) navGamesBtn.classList.remove('active');
    if (navCopyBtn) navCopyBtn.classList.add('active');

    renderCopySectionList(currentCopyType || 'all');
  } else {
    // 'games'
    if (sHome) sHome.style.display = 'none';
    if (sGames) sGames.style.display = 'block';
    if (sCopy) sCopy.style.display = 'none';

    if (navHomeBtn) navHomeBtn.classList.remove('active');
    if (navGamesBtn) navGamesBtn.classList.add('active');
    if (navCopyBtn) navCopyBtn.classList.remove('active');

    updateGamesDisplay();
  }
}
window.switchFrostySection = switchFrostySection;

function filterGamesCategory(filterType) {
  currentCategoryFilter = filterType || 'all';

  document.querySelectorAll('.filter-pill').forEach(pill => {
    if (pill.getAttribute('data-filter') === currentCategoryFilter) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

  updateGamesDisplay();
}
window.filterGamesCategory = filterGamesCategory;

function updateGamesDisplay() {
  let filtered = ALL_GAMES_REGISTRY;

  if (currentCategoryFilter === 'main') {
    filtered = filtered.filter(g => g.tag === 'main');
  } else if (currentCategoryFilter === 'extra') {
    filtered = filtered.filter(g => g.tag === 'extra');
  }

  if (currentSearchQuery) {
    filtered = filtered.filter(g => g.name.toLowerCase().includes(currentSearchQuery));
  }

  // Update pill counts
  const pillAll = document.getElementById('pill-count-all');
  const pillMain = document.getElementById('pill-count-main');
  const pillExtra = document.getElementById('pill-count-extra');
  if (pillAll) pillAll.textContent = ALL_GAMES_REGISTRY.length;
  if (pillMain) pillMain.textContent = MAIN_GAMES_TAGGED.length;
  if (pillExtra) pillExtra.textContent = EXTRA_GAMES_REGISTRY.length;

  renderGamesGrid(filtered, gamesGrid, gamesCountEl);
}
window.updateGamesDisplay = updateGamesDisplay;

/* ============================================================================
   COPY GAMES LIST MENU & TAB LOGIC
   ============================================================================ */
function getFormattedGamesList(type) {
  let list = ALL_GAMES_REGISTRY;
  if (type === 'main') {
    list = MAIN_GAMES_TAGGED;
  } else if (type === 'extra') {
    list = EXTRA_GAMES_REGISTRY;
  }
  return list.map((g, idx) => `${idx + 1}. ${g.name}`).join('\n');
}

function renderCopySectionList(type = 'all') {
  currentCopyType = type;

  const countAllEl = document.getElementById('tab-count-all');
  const countMainEl = document.getElementById('tab-count-main');
  const countExtraEl = document.getElementById('tab-count-extra');

  if (countAllEl) countAllEl.textContent = ALL_GAMES_REGISTRY.length;
  if (countMainEl) countMainEl.textContent = MAIN_GAMES_TAGGED.length;
  if (countExtraEl) countExtraEl.textContent = EXTRA_GAMES_REGISTRY.length;

  document.querySelectorAll('.copy-tab-btn').forEach(btn => {
    if (btn.getAttribute('data-copy-type') === type) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const sectionTextarea = document.getElementById('section-copy-textarea');
  if (sectionTextarea) {
    sectionTextarea.value = getFormattedGamesList(type);
  }

  if (copyTextarea) {
    copyTextarea.value = getFormattedGamesList(type);
  }
}
window.renderCopySectionList = renderCopySectionList;

function selectAllCopyText() {
  const sectionTextarea = document.getElementById('section-copy-textarea');
  if (sectionTextarea) {
    sectionTextarea.focus();
    sectionTextarea.select();
    sectionTextarea.setSelectionRange(0, 999999);
  }
}
window.selectAllCopyText = selectAllCopyText;

function copySectionAction() {
  const sectionTextarea = document.getElementById('section-copy-textarea');
  const sectionCopyBadge = document.getElementById('section-copy-badge');
  const sectionCopyBtnText = document.getElementById('section-copy-btn-text');
  copyTextFromElement(sectionTextarea, sectionCopyBadge, sectionCopyBtnText);
}
window.copySectionAction = copySectionAction;

function openGameListNewTab(type = currentCopyType || 'all') {
  const text = getFormattedGamesList(type);
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
}
window.openGameListNewTab = openGameListNewTab;

function openCopyGamesMenuModal(tabType = 'all') {
  if (countModalAll) countModalAll.textContent = ALL_GAMES_REGISTRY.length;
  if (countModalExtra) countModalExtra.textContent = EXTRA_GAMES_REGISTRY.length;
  if (countModalMain) countModalMain.textContent = MAIN_GAMES_TAGGED.length;

  document.querySelectorAll('.modal-tab').forEach(tab => {
    if (tab.dataset.type === tabType) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  if (copyTextarea) {
    copyTextarea.value = getFormattedGamesList(tabType);
  }

  if (copyStatusBadge) copyStatusBadge.style.display = 'none';
  if (copyBtnText) copyBtnText.textContent = 'Copy Numbered List';

  if (copyModal) {
    copyModal.style.display = 'flex';
  }
}

function closeCopyGamesMenuModal() {
  if (copyModal) {
    copyModal.style.display = 'none';
  }
}

function copyTextFromElement(textareaEl, badgeEl, btnTextEl) {
  if (!textareaEl) return;
  const textToCopy = textareaEl.value;
  if (!textToCopy) return;

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      showCopyFeedback(badgeEl, btnTextEl);
    }).catch(() => {
      fallbackCopyText(textareaEl, badgeEl, btnTextEl);
    });
  } else {
    fallbackCopyText(textareaEl, badgeEl, btnTextEl);
  }
}
window.copyTextFromElement = copyTextFromElement;

function fallbackCopyText(textareaEl, badgeEl, btnTextEl) {
  try {
    textareaEl.focus();
    textareaEl.select();
    textareaEl.setSelectionRange(0, 999999);
    document.execCommand('copy');
    showCopyFeedback(badgeEl, btnTextEl);
  } catch (e) {
    alert('List selected. Press Ctrl+C or Cmd+C to copy!');
  }
}

function showCopyFeedback(badgeEl, btnTextEl) {
  if (badgeEl) badgeEl.style.display = 'inline-block';
  if (btnTextEl) btnTextEl.textContent = '✓ Copied!';

  setTimeout(() => {
    if (badgeEl) badgeEl.style.display = 'none';
    if (btnTextEl) btnTextEl.textContent = 'Copy Numbered List';
  }, 2500);
}

/* ============================================================================
   DYNAMIC GAME COVER ART GENERATOR
   Generates vibrant HSL gradient cover art with gamepad icons & clean title text
   for any game missing a static cover image or failing to load over network.
   ============================================================================ */
const svgCoverCache = new Map();
function generateGameCoverSVG(title) {
  const safeTitle = (title || 'Game').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  if (svgCoverCache.has(safeTitle)) {
    return svgCoverCache.get(safeTitle);
  }

  let hash = 0;
  for (let i = 0; i < safeTitle.length; i++) {
    hash = safeTitle.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h1 = Math.abs(hash) % 360;
  const h2 = (h1 + 45) % 360;
  const fontSize = safeTitle.length > 25 ? 12 : safeTitle.length > 18 ? 14 : 16;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="100%" height="100%">
    <defs>
      <linearGradient id="g_${Math.abs(hash)}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="hsl(${h1}, 70%, 20%)" />
        <stop offset="100%" stop-color="hsl(${h2}, 80%, 10%)" />
      </linearGradient>
    </defs>
    <rect width="300" height="300" rx="12" fill="url(#g_${Math.abs(hash)})" />
    <circle cx="150" cy="115" r="42" fill="rgba(56, 189, 248, 0.12)" stroke="rgba(56, 189, 248, 0.35)" stroke-width="2" />
    <path d="M132 115 h36 M150 97 v36 M166 122 a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7 M134 122 a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" stroke="%2338bdf8" stroke-width="3" stroke-linecap="round" fill="none" />
    <text x="150" y="200" text-anchor="middle" fill="%23ffffff" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="${fontSize}">${safeTitle}</text>
    <rect x="80" y="222" width="140" height="24" rx="12" fill="rgba(56, 189, 248, 0.15)" stroke="rgba(56, 189, 248, 0.4)" stroke-width="1" />
    <text x="150" y="238" text-anchor="middle" fill="%2338bdf8" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="10" letter-spacing="1">UNBLOCKED</text>
  </svg>`;

  const result = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
  svgCoverCache.set(safeTitle, result);
  return result;
}
window.generateGameCoverSVG = generateGameCoverSVG;

/* ============================================================================
   GAMES GRID RENDERING WITH DOCUMENT FRAGMENT & EVENT DELEGATION
   ============================================================================ */
const PLACEHOLDER_SVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Crect width='512' height='512' fill='%23111827'/%3E%3C/svg%3E";

function renderGamesGrid(games, targetGrid = gamesGrid, counterEl = gamesCountEl) {
  if (!targetGrid) return;
  targetGrid.innerHTML = '';

  if (!games || games.length === 0) {
    targetGrid.innerHTML = `
      <div class="empty-games-box">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
        <p class="empty-games-title">No games found</p>
        <p class="empty-games-sub">Try adjusting your search filter.</p>
      </div>
    `;
    if (counterEl) counterEl.textContent = '0 games';
    return;
  }

  if (counterEl) {
    counterEl.textContent = `${games.length} game${games.length === 1 ? '' : 's'}`;
  }

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < games.length; i++) {
    const game = games[i];
    const card = document.createElement('div');
    card.className = 'game-card';
    card.setAttribute('data-name', game.name);
    card.setAttribute('data-file', game.file);
    card.setAttribute('id', `game-card-${i}`);

    const generatedCover = generateGameCoverSVG(game.name);
    const hasCustomCover = game.cover && game.cover.trim() !== '';
    const initialSrc = hasCustomCover ? PLACEHOLDER_SVG : generatedCover;
    const coverSrc = hasCustomCover ? game.cover : generatedCover;
    const safeTitleEscaped = game.name.replace(/"/g, '&quot;');

    card.innerHTML = `
      <div class="cover-box">
        <img 
          class="game-cover ${hasCustomCover ? 'lazy-img' : 'loaded'}" 
          data-src="${coverSrc}" 
          src="${initialSrc}" 
          alt="${safeTitleEscaped}" 
          loading="lazy" 
          decoding="async"
        />
        <div class="play-badge">PLAY</div>
      </div>
      <div class="game-meta">
        <div class="game-name" title="${safeTitleEscaped}">${game.name}</div>
      </div>
    `;

    fragment.appendChild(card);

    const img = card.querySelector('.game-cover');
    if (img) {
      img.onerror = function() {
        this.onerror = null;
        if (window.generateGameCoverSVG) {
          this.src = window.generateGameCoverSVG(game.name);
        }
        this.classList.add('loaded');
      };

      if (hasCustomCover && imgObserver) {
        imgObserver.observe(img);
      } else {
        img.src = coverSrc;
        img.classList.add('loaded');
      }
    }
  }

  targetGrid.appendChild(fragment);
}

/* ============================================================================
   ZERO-LEAK EMBEDDED GAME PLAYER LIFECYCLE
   Destroys and recreates iframe DOM element on demand to force the browser
   garbage collector to immediately reclaim 100% of WebGL, WASM, and Audio RAM!
   ============================================================================ */
function destroyCurrentIframe() {
  if (currentIframeElement) {
    currentIframeElement.onload = null;
    currentIframeElement.onerror = null;
    try {
      if (currentIframeElement.contentWindow) {
        currentIframeElement.contentWindow.location.replace('about:blank');
      }
    } catch (e) {}
    currentIframeElement.src = 'about:blank';
    if (currentIframeElement.parentNode) {
      currentIframeElement.parentNode.removeChild(currentIframeElement);
    }
    currentIframeElement = null;
  }
}

function launchGame(title, fileUrl) {
  let normalizedUrl = fileUrl || '';
  if (normalizedUrl && !normalizedUrl.startsWith('http') && !normalizedUrl.startsWith('/') && !normalizedUrl.startsWith('assets/')) {
    normalizedUrl = 'assets/htmls/' + normalizedUrl;
  }
  activeGameUrl = normalizedUrl;
  activeGameTitle = title;
  if (playerTitle) playerTitle.textContent = title;
  if (frameLoader) frameLoader.style.display = 'flex';
  if (gamePlayerView) gamePlayerView.style.display = 'flex';

  // Native fullscreen attempt if supported
  try {
    if (gamePlayerView && gamePlayerView.requestFullscreen) {
      gamePlayerView.requestFullscreen().catch(() => {});
    } else if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  } catch (err) {}

  // Flush any lingering memory from previous session
  destroyCurrentIframe();

  // Create brand-new, clean iframe element
  const iframe = document.createElement('iframe');
  iframe.id = 'game-iframe';
  iframe.setAttribute('referrerpolicy', 'no-referrer');
  iframe.setAttribute('allow', 'fullscreen; autoplay; gamepad; keyboard; accelerometer; gyroscope; xr-spatial-tracking');
  iframe.setAttribute('allowfullscreen', 'true');
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.style.display = 'block';

  const hideLoader = () => {
    if (frameLoader) frameLoader.style.display = 'none';
  };

  iframe.onload = () => {
    hideLoader();
    try {
      iframe.focus();
      if (iframe.contentWindow) {
        iframe.contentWindow.focus();
      }
    } catch (e) {}
  };

  iframe.onerror = () => {
    hideLoader();
  };

  // Dismiss loader automatically after 1.5s
  setTimeout(hideLoader, 1500);

  iframe.src = normalizedUrl;
  if (playerFrameWrap) playerFrameWrap.appendChild(iframe);
  currentIframeElement = iframe;
}

function closeGamePlayer() {
  if (document.fullscreenElement) {
    try {
      document.exitFullscreen().catch(() => {});
    } catch (e) {}
  }
  gamePlayerView.style.display = 'none';
  
  // Wipe out iframe from DOM to completely purge WebGL, AudioContext, and WASM memory
  destroyCurrentIframe();
  activeGameUrl = null;
  activeGameTitle = '';
}

function reloadCurrentGame() {
  if (activeGameUrl && activeGameTitle) {
    launchGame(activeGameTitle, activeGameUrl);
  }
}

function toggleGameFullscreen() {
  if (!document.fullscreenElement) {
    gamePlayerView.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}

/* ============================================================================
   EVENT LISTENERS & DELEGATION
   ============================================================================ */
function setupEvents() {
  // Calculator Mode Switcher
  document.querySelectorAll('.calc-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.calc-mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      calcMode = btn.dataset.mode;

      if (calcMode === 'alphabet') {
        alphaKeypad.style.display = 'grid';
        sciKeypad.style.display = 'none';
      } else if (calcMode === 'scientific') {
        sciKeypad.style.display = 'grid';
        alphaKeypad.style.display = 'none';
      } else {
        alphaKeypad.style.display = 'none';
        sciKeypad.style.display = 'none';
      }
    });
  });

  // Calculator On-Screen Clicks
  document.querySelectorAll('.calc-key, .alpha-key').forEach(key => {
    key.addEventListener('click', () => {
      const val = key.dataset.val;
      if (val) {
        handleCalculatorInput(val);
      }
    });
  });

  // Scientific On-Screen Clicks
  document.querySelectorAll('.sci-key').forEach(key => {
    key.addEventListener('click', () => {
      const func = key.dataset.func;
      if (func) {
        handleScientificFunc(func);
      }
    });
  });

  // Frosty Nav Buttons
  const navHome = document.getElementById('nav-home-btn');
  const navGames = document.getElementById('nav-games-btn');
  const navCopy = document.getElementById('nav-copy-btn');
  const heroGames = document.getElementById('hero-games-btn');
  const heroCopy = document.getElementById('hero-copy-btn');
  const brandHome = document.getElementById('brand-home-link');

  if (navHome) navHome.addEventListener('click', () => switchFrostySection('home'));
  if (navGames) navGames.addEventListener('click', () => switchFrostySection('games'));
  if (navCopy) navCopy.addEventListener('click', () => switchFrostySection('copy'));
  if (brandHome) brandHome.addEventListener('click', () => switchFrostySection('home'));

  if (heroGames) heroGames.addEventListener('click', () => switchFrostySection('games'));
  if (heroCopy) heroCopy.addEventListener('click', () => switchFrostySection('copy'));

  // Category Filter Pills in Games Section
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategoryFilter = pill.dataset.filter || 'all';
      updateGamesDisplay();
    });
  });

  // Category Filter Tabs in Copy Section
  document.querySelectorAll('.copy-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.copyType || 'all';
      renderCopySectionList(type);
    });
  });

  // Copy Section Action Buttons
  const sectionCopyActionBtn = document.getElementById('section-copy-action-btn');
  const sectionSelectAllBtn = document.getElementById('section-select-all-btn');
  const sectionCopyTextarea = document.getElementById('section-copy-textarea');
  const sectionCopyBadge = document.getElementById('section-copy-badge');
  const sectionCopyBtnText = document.getElementById('section-copy-btn-text');

  if (sectionCopyActionBtn) {
    sectionCopyActionBtn.addEventListener('click', () => {
      copyTextFromElement(sectionCopyTextarea, sectionCopyBadge, sectionCopyBtnText);
    });
  }

  if (sectionSelectAllBtn && sectionCopyTextarea) {
    sectionSelectAllBtn.addEventListener('click', () => {
      sectionCopyTextarea.focus();
      sectionCopyTextarea.select();
    });
  }

  // Modal Controls
  const modalClose = document.getElementById('modal-close-btn');
  const modalCancel = document.getElementById('modal-cancel-btn');

  if (modalClose) modalClose.addEventListener('click', closeCopyGamesMenuModal);
  if (modalCancel) modalCancel.addEventListener('click', closeCopyGamesMenuModal);
  if (copyActionBtn) {
    copyActionBtn.addEventListener('click', () => {
      copyTextFromElement(copyTextarea, copyStatusBadge, copyBtnText);
    });
  }

  if (copyModal) {
    copyModal.addEventListener('click', (e) => {
      if (e.target === copyModal) closeCopyGamesMenuModal();
    });
  }

  // Modal Tab Switching
  document.querySelectorAll('.modal-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const type = tab.dataset.type || 'all';
      renderCopySectionList(type);
    });
  });

  // Player Controls
  const playerBackBtn = document.getElementById('player-back-btn');
  const playerReloadBtn = document.getElementById('player-reload-btn');
  const playerFullscreenBtn = document.getElementById('player-fullscreen-btn');

  if (playerBackBtn) playerBackBtn.addEventListener('click', closeGamePlayer);
  if (playerReloadBtn) playerReloadBtn.addEventListener('click', reloadCurrentGame);
  if (playerFullscreenBtn) playerFullscreenBtn.addEventListener('click', toggleGameFullscreen);

  // Event Delegation for Games Grid
  if (gamesGrid) {
    gamesGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.game-card');
      if (card) {
        const name = card.getAttribute('data-name');
        const file = card.getAttribute('data-file');
        if (name && file) {
          launchGame(name, file);
        }
      }
    });
  }

  // Search Input for Games
  if (searchInput) {
    let searchRaf = null;
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      if (searchRaf) cancelAnimationFrame(searchRaf);
      searchRaf = requestAnimationFrame(() => {
        updateGamesDisplay();
      });
    });
  }

  // GLOBAL KEYBOARD SHORTCUTS HANDLER
  window.addEventListener('keydown', (e) => {
    // Capture Ctrl+Shift+J or Cmd+Shift+J to switch to Copy List section
    const isJKey = e.key && (e.key.toLowerCase() === 'j' || e.code === 'KeyJ');
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && isJKey) {
      e.preventDefault();
      e.stopPropagation();
      switchFrostySection('copy');
      return;
    }

    // Escape handling
    if (copyModal && copyModal.style.display === 'flex' && e.key === 'Escape') {
      e.preventDefault();
      closeCopyGamesMenuModal();
      return;
    }

    // 3. If game player is open and user presses Escape, close the game player
    if (gamePlayerView && gamePlayerView.style.display === 'flex') {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeGamePlayer();
        return;
      }
    }

    // If not on calculator, do not intercept typing
    const isUnlocked = localStorage.getItem('frosty_unlocked') === 'true';
    if (isUnlocked) return;

    // Disregard keyboard shortcuts with Cmd/Ctrl/Alt
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    if (e.key === 'Enter' || e.key === '=') {
      e.preventDefault();
      checkSecretOrEvaluate();
    } else if (e.key === 'Backspace') {
      e.preventDefault();
      handleCalculatorInput('BACK');
    } else if (e.key === 'Escape') {
      e.preventDefault();
      handleCalculatorInput('CLEAR');
    } else if (/^[0-9+\-*/.()]$/.test(e.key)) {
      handleCalculatorInput(e.key);
    } else if (/^[a-zA-Z]$/.test(e.key)) {
      handleCalculatorInput(e.key.toUpperCase());
    }
  });
}

// Initialize on DOM Ready or immediately if already loaded
function initApp() {
  setupEvents();
  checkInitialAccess();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
