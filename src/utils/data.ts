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
  "Production projects": [
    {
      name: "Langzy App",
      url: "https://app.langzy.org/",
      description: `## Langzy App

> Language learning application with AI chat. Allows learning wide range of languages while communicating with specially configured chat bot.

**Position:** Full-stack developer

**Used Technologies:** React, Next.js, ShadCn, Tailwind, Clerk, Stripe, ChatGPT

**My accomplishments:**

- Created client side of the application.
- Created onboarding flow, collecting data about the user.
- Integrated stripe with subscriptions and one-time purchases system.
- Implemented Clerk for Authentication with Google, Facebook or Email.
`,
      image:
        "https://res-console.cloudinary.com/dxyapxi2t/thumbnails/v1/image/upload/v1729677116/U2NyZWVuc2hvdF8yMDI0LTEwLTIzX2F0XzEyLjUxLjQxX3B1bHZmZg",
    },
    {
      name: "OmniStack platform",
      url: "https://frontend-rho-tan.vercel.app/",
      description: `## OmniStack

> Crypto platform admin panel

**Position:** Full-stack developer

**Used Technologies:** React, Next.js, ShadCn, Tailwind, Clerk

**My accomplishments:**

- Created whole application layout and server part.
- Created multiple components to build the application faster and easier.
- Integrated complex API from the client.
- Created custom Clerk authorization pages and flow.
`,
      image:
        "https://res-console.cloudinary.com/dxyapxi2t/thumbnails/v1/image/upload/v1729675957/U2NyZWVuc2hvdF8yMDI0LTEwLTIzX2F0XzEyLjMyLjI0X3JhbHpkYg==/as_is",
    },
    {
      name: "Athletic Greens AG1",
      url: "https://drinkag1.com/",
      description: `## Athletic Greens AG1

> Marketplace for selling a science-driven supplement that supports physical health and mental performance.

**Position:** Full-stack developer

**Used Technologies:** React, Next.js, Sanity, SCSS, Storybook, Jest, Trustpilot, Klaviyo

**My accomplishments:**

- Implemented Klaviyo flow for customers to leave reviews on Trustpilot generated reviews pages.
- Developed multiple components to use in Sanity CMS for building pages.
- Implemented various systems in different parts of the app.
- Huge number of created Storybooks and tests for components.
`,
      image:
        "https://res.cloudinary.com/dxyapxi2t/image/upload/v1715092419/Untitled_qv9by4.png",
    },
    {
      name: "Infinity2Go",
      url: "https://i2go.app/",
      description: `## Infinity2Go

> The application for storing and selling courses and information about cryptocurrencies in the integrated platform

**Position:** Full-stack developer

**Used Technologies:** React, Next.js, tailwind, serverless, AWS Lambda, AWS DynamoDB, React Query, React Native

**My accomplishments:**

- Enhanced the functionality of all admin panel pages by optimizing logic and reducing API requests, resulting in cost savings.
- Improved the web and mobile apps in accordance with updated UX/UI guidelines.
- Implemented smart filters for the admin app.
- Provided development support for AWS Lambdas on the backend.
    `,
      image:
        "https://res.cloudinary.com/dxyapxi2t/image/upload/v1698398944/Untitled_1_tzktd6.png",
    },
    {
      name: "ExploreLocations",
      url: "https://explorelocations.com/",
      description: `## ExploreLocations

> The platform that we are building helps users discover various points of interest across the world on the up-to-date map

**Position:** Full-stack developer

**Used technologies:** React, Next.js, tailwind, AWS, Leaflet React, Stadia Maps API

**My accomplishments:**

- Build all pages from design
- Create Leaflet Maps using Stadia Maps API and add application data on them
- Building MVP application from scratch
      `,
      image:
        "https://res.cloudinary.com/dxyapxi2t/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1698395656/Untitled_zeqeob.jpg?_s=public-apps",
    },
    {
      name: "Roaries",
      url: "https://roaries.com/",
      description: `## Roaries
      
> Online pet's food store

**Position:** Full-stack developer

**Used technologies:** React, Redux, typescript, ci/cd, git flow, express, webpack

**My accomplishments:** 

- Developed middleware express.js server for connection between API and frontend
- Developed functionality and fixed styles for multiple components and pages
- Developed complex video block for the main page
      `,
      image:
        "https://res.cloudinary.com/dxyapxi2t/image/upload/v1671785717/Untitled_v4igae.png",
    },
    {
      name: "Starly",
      url: "https://starly.io/",
      description: `## Starly

> NFTs marketplace

**Position:** Front-end developer

**Used technologies:** React, Redux, Redux-saga, styled-components, storybook, typescript, react-hook-forms, firebase, flow blockchain, ci/cd, git flow

**My accomplishments:** 

- Developed reusable components using a styled-components library and pixel-perfect mobile/desktop page layouts.
- Firebase/Redux/Redux-Saga component/pages integration.`,
      image:
        "https://res.cloudinary.com/dxyapxi2t/image/upload/v1671724774/Screenshot_2022-12-21_151001_x6kpvu.png",
    },
    {
      name: "MyTend.com",
      url: "https://mytend.com/",
      description: `## Mytend.com

> House warranty and insurance product NDA (USA)

**Role:** full-stack developer

**Used technologies:** TypeScript, React, Redux-toolkit, Next.js, HubSpot.

**My accomplishments:**

- Create claims and transactions tables in user portal;
- Implement new widget design;
- Complex visual components.`,
      image:
        "https://res.cloudinary.com/dxyapxi2t/image/upload/v1671785718/Screenshot_2022-05-05_154947_snb5e8.png",
    },
  ],
  "My pet projects": [
    {
      name: "Next Notes",
      url: "https://next-notes.netlify.app/",
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
      image:
        "https://res.cloudinary.com/dxyapxi2t/image/upload/v1671785717/image_p92gw8.png",
    },
    {
      name: "Dungeon cards",
      url: "https://blackpawsstudio.github.io/Dungeon-cards/",
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
        "https://res.cloudinary.com/dxyapxi2t/image/upload/v1671785716/Screenshot_2022-01-12_131042_sdlhqz.png",
    },
    {
      name: "Auto Dominoes",
      url: "https://blackpawsstudio.github.io/Dominoes-game/",
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
      image:
        "https://res.cloudinary.com/dxyapxi2t/image/upload/v1671785717/image_1_yyam8h.png",
    },
    {
      name: "A-life",
      url: "https://blackpawsstudio.github.io/A-life",
      image:
        "https://res.cloudinary.com/dxyapxi2t/image/upload/v1673678464/Screenshot_2023-01-14_094036_eutzkd.png",
      description: `## A Life

This is an application that is simulating artificial cell life based on the attraction and repulsion between dots.

![image](https://res.cloudinary.com/dxyapxi2t/image/upload/v1673678464/Screenshot_2023-01-14_094036_eutzkd.png)

#### How to play

You can choose color and amount of dots manually or leave them being random, application generates random values automatically. Press \`Add\` button to add dots to the field. 

Program automatically generates relations between dots (attraction or repulsion). 

If you add another group, rules of relations with every dots group for it will be generated automatically as well. You can change those relation rules manually changing sliders in the \`Rules\` section. You can also randomize all rules by pressing \`Randomize rules\` button. 

You also can pause and continue the simulation.`,
    },
    //     {
    //       name: "A-star",
    //       url: "https://blackpawsstudio.github.io/A-star",
    //       image:
    //         "https://res.cloudinary.com/dxyapxi2t/image/upload/v1673679339/Screenshot_2023-01-14_095211_jkuecg.png",
    //       description: `## A Star

    // This application is the realization of A-Star pathfinding algorithm.

    // ![image](https://res.cloudinary.com/dxyapxi2t/image/upload/v1673679339/Screenshot_2023-01-14_095211_jkuecg.png)

    // #### How to use

    // First you choose the size of the field you want to create. Keep in mind that this is an old project and huge fields will took long to render.

    // When the field renders you have to set the start and end points of the field. Then you can set obstacles and choose if you want algorithm to count walking diagonally. When everything is set up, press \`Count path\` and the algorithm will render the path with blue color and all options it was looking through with wheat color. Press \`Reset path\` if you want to modify obstacles or \`Reset all\` to fully recreate the field.`,
    //     },
  ],
  RSS: [
    {
      name: "Wildlife",
      url: "https://rolling-scopes-school.github.io/blackpawsstudio-JSFE2021Q1/wildlife/",
      description: "",
      image:
        "https://res.cloudinary.com/dxyapxi2t/image/upload/v1717322629/Screenshot_2024-06-02_at_12.52.58_o38tpb.png",
    },
    {
      name: "Virtual piano",
      url: "https://rolling-scopes-school.github.io/blackpawsstudio-JSFE2021Q1/virtual-piano/",
      description: "",
      image:
        "https://res.cloudinary.com/dxyapxi2t/image/upload/v1717322628/Screenshot_2024-06-02_at_12.53.42_btesjx.png",
    },
    {
      name: "Online zoo",
      url: "https://rolling-scopes-school.github.io/blackpawsstudio-JSFE2021Q1/online-zoo/",
      description: "",
      image:
        "https://res.cloudinary.com/dxyapxi2t/image/upload/v1717322631/Screenshot_2024-06-02_at_12.54.37_immd1c.png",
    },
    {
      name: "Photo filter",
      url: "https://rolling-scopes-school.github.io/blackpawsstudio-JSFE2021Q1/photo-filter/",
      description: "",
      image:
        "https://res.cloudinary.com/dxyapxi2t/image/upload/v1717322629/Screenshot_2024-06-02_at_12.54.50_ws4zkz.png",
    },
    {
      name: "Match-match game",
      url: "https://rolling-scopes-school.github.io/blackpawsstudio-JSFE2021Q1/match-match%20game/",
      description: "",
      image:
        "https://res.cloudinary.com/dxyapxi2t/image/upload/v1717322629/Screenshot_2024-06-02_at_12.55.14_jx8s5b.png",
    },
  ],
};
