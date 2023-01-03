export interface DemoSectionsType {
  [key: string]: DemoType[];
}

export interface DemoType {
  name: string;
  url: string;
  image: string;
  description: string;
  id?: number;
}

export const demos: DemoSectionsType = {
  'Production projects': [
    {
      name: 'Roaries',
      url: 'https://roaries.com/',
      description: `## Roaries
      
> Online pet's food store

**Position:** Full-stack developer

**Used technologies:** React, Redux, typescript, ci/cd, git flow, express, webpack

**My accomplishments:** 

- Developed middleware express.js server for connection between API and frontend
- Developed functionality and fixed styles for multiple components and pages
- Developed complex video block for the main page
      `,
      image: 'https://res.cloudinary.com/dxyapxi2t/image/upload/v1671785717/Untitled_v4igae.png',
    },
    {
      name: 'Starly',
      url: 'https://starly.io/',
      description: `## Starly

> NFTs marketplace

**Position:** Front-end developer

**Used technologies:** React, Redux, Redux-saga, styled-components, storybook, typescript, react-hook-forms, firebase, flow blockchain, ci/cd, git flow

**My accomplishments:** 

- Developed reusable components using a styled-components library and pixel-perfect mobile/desktop page layouts.
- Firebase/Redux/Redux-Saga component/pages integration.`,
      image:
        'https://res.cloudinary.com/dxyapxi2t/image/upload/v1671724774/Screenshot_2022-12-21_151001_x6kpvu.png',
    },
    {
      name: 'MyTend.com',
      url: 'https://mytend.com/',
      description: `## Mytend.com

> House warranty and insurance product NDA (USA)

**Role:** full-stack developer

**Used technologies:** TypeScript, React, Redux-toolkit, Next.js, HubSpot.

**My accomplishments:**

- Create claims and transactions tables in user portal;
- Implement new widget design;
- Complex visual components.`,
      image:
        'https://res.cloudinary.com/dxyapxi2t/image/upload/v1671785718/Screenshot_2022-05-05_154947_snb5e8.png',
    },
  ],
  'My pet projects': [
    {
      name: 'Next Notes',
      url: 'https://next-notes.netlify.app/',
      description: `## NEXT NOTES

This is an application where users can create their own notes and set up them as they wish.

Here you can set reminder for each unique note, that will alarm you as the estimated time. 

You can change:
- note title;
- note text itself;
- background and text color of each note.

User is able to set presettings for notes and new notes will be created according to them. 

There you can also select notification sound.

![image](https://res.cloudinary.com/dkfwehxio/image/upload/v1645523563/Screenshot_2022-02-22_125146_g9h7hg.png)

You can create account and start using this app [here](https://next-notes.netlify.app/)!

## SETUP and USAGE

The steps below will take you through cloning your own fork, installing dependencies and building:

1. Fork and/or clone this repository. To use Git from command line, see the [Setting up Git](https://help.github.com/articles/set-up-git/) and [Fork repo](https://help.github.com/articles/fork-a-repo/) articles.

\`\`\`bash
git clone https://github.com/BlackPawsStudio/Next-notes/
\`\`\`

2. Open your copied repo folder in terminal and install necessary modules with command, make sure that you have installed [npm](https://www.npmjs.com/get-npm):

\`\`\`bash
npm install
\`\`\`

3. Now you are able to run or build the project:

To run the project write \`npm run dev\` in terminal and live development server will open.
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run \`npm run build\` to build the project. The build files will be stored in the \`.next/\` directory. 
Run \`npm run start\` to start production ready project on [http://localhost:3000](http://localhost:3000).`,
      image: 'https://res.cloudinary.com/dxyapxi2t/image/upload/v1671785717/image_p92gw8.png',
    },
    {
      name: 'Dungeon cards AI',
      url: 'https://blackpawsstudio.github.io/Dungeon-cards/',
      description: `## DUNGEON CARDS GAME

This is an adaptation of android game [Dungeon cards](https://play.google.com/store/apps/details?id=com.The717pixels.DungeonCards&hl=ru&gl=US) and implementation of autoplay algorithm.

Here you play as a brave knight fighting against monsters. You can walk horizontally and vertically only to the closest cards.
If you tap on a monster, you will lose as much hp as the monster has.
If you tap on a health potion, you will recieve as much hp as the potion has.
You must keep your health above 0 or you will lose!

You can press \`Enable auto play\` button to make computer play instead of you and then press again to disable algorithm, 

![image](https://res.cloudinary.com/dkfwehxio/image/upload/v1640197618/Screenshot_2021-12-22_212625_vmwiqm.png)

You can try this game yourself in [application demo](https://blackpawsstudio.github.io/Dominoes-tech-challenge/)!

## SETUP and USAGE

The steps below will take you through cloning your own fork, installing dependencies and building:

1. Fork and/or clone this repository. To use Git from command line, see the [Setting up Git](https://help.github.com/articles/set-up-git/) and [Fork repo](https://help.github.com/articles/fork-a-repo/) articles.

\`\`\`bash
git clone https://github.com/BlackPawsStudio/Dungeon-cards/
\`\`\`

2. Open your copied repo folder in terminal and install necessary modules with command, make sure that you have installed [npm](https://www.npmjs.com/get-npm):

\`\`\`bash
npm install
\`\`\`

3. Now you are able to run or build the project:

To run the project write \`npm run\` in terminal and live development server will open.

Run \`npm run build\` to build the project. The build files will be stored in the \`dist/\` directory. 
You can go to the \`dist/\` directory and open \`index.html\` file to see the results.`,
      image:
        'https://res.cloudinary.com/dxyapxi2t/image/upload/v1671785716/Screenshot_2022-01-12_131042_sdlhqz.png',
    },
    {
      name: 'Auto Dominoes',
      url: 'https://blackpawsstudio.github.io/Dominoes-game/',
      description: `## Dominoes Game

This is an application that stimulates game of Dominoes between several players.

Messages of what is happening in the game are printed in the middle of the screen. User can decide how many players there will be, from 2 to 5. Also you can choose the speed of the game, if it's too fast. You can pause it to check if everything is correct or reset to zero at any time.

#### Preparations: 

- players pick the same amount of dices from the pile;
- the game automatically sorts them by the most valuable dice;
- random dice is picked from the pile and placed into the table;
- players wait for the user to start the game.

#### Actual game:

- players take turns and play dices into the table;
- if player cannot play any of how dices, he picks random dice from the pile;
- if the pile is empty and player cannot place dice, he skips his turn.

#### Move rules:

- dices are placed into the table, forming a line, that has two ends;
- new dice can be placed only if one of it's ends matches any of table row end.

#### Game end:
- player that places all of his dices first wins;
- if all players skip their turns, game ends with a draw.

***

![image](https://res.cloudinary.com/dkfwehxio/image/upload/v1645657860/Screenshot_2022-02-24_021038_uczjj9.png)

You can see this game [here](https://next-notes.netlify.app/)!

## SETUP and USAGE

The steps below will take you through cloning your own fork, installing dependencies and building:

1. Fork and/or clone this repository. To use Git from command line, see the [Setting up Git](https://help.github.com/articles/set-up-git/) and [Fork repo](https://help.github.com/articles/fork-a-repo/) articles.

\`\`\`bash
git clone https://github.com/BlackPawsStudio/Dominoes-game/
\`\`\`

2. Open your copied repo folder in terminal and install necessary modules with command, make sure that you have installed [npm](https://www.npmjs.com/get-npm):

\`\`\`bash
npm install
\`\`\`

3. Now you are able to run or build the project:

To run the project write \`npm run start\` in terminal and live development server will open and start [http://localhost:3000](http://localhost:3000) page in your browser.

Run \`npm run build\` to build the project. The build files will be stored in the \`build/\` directory. 
You can go to the \`build/\` directory and open index.html file to see the results.`,
      image: 'https://res.cloudinary.com/dxyapxi2t/image/upload/v1671785717/image_1_yyam8h.png',
    },
  ],
};
