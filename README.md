# Rick and Morty Episode and Character Browser

## Description

This web application displays episodes from the Rick and Morty series and the characters within those episodes. It features:

* **Episode List:** A sidebar with a list of episodes, supporting infinite scrolling.
* **Character Grid:** A main content area displaying characters. Clicking an episode in the sidebar shows the characters from that episode.
* **Dynamic Data Fetching:** Fetches episode and character data from the Rick and Morty API.
* **Error Handling:** Gracefully handles API fetch errors.

## Technologies Used

* React
* Tailwind CSS
* Rick and Morty API

## Setup and Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```

2.  **Install dependencies:**

    ```bash
    npm install # or yarn install
    ```

3.  **Run the application:**

    ```bash
    npm run dev # or yarn dev
    ```

    The application will be accessible at `http://localhost:3000` (or the port specified in your development environment).

## How to Use

1.  **View Episodes:** The left sidebar displays a list of episodes. Scroll down to load more episodes.
2.  **View Episode Characters:** Click on an episode in the sidebar to see the characters from that episode displayed in the main content area.
3.  **View All Characters:** If no episode is selected, all characters are displayed.
4.  **Unselect Episode:** If an episode is selected, a button will appear to allow you to unselect it and return to the full character list.

## Code Structure

* `src/app/pages.tsx`: The main page component (`HomePage`) that fetches and displays the data. It uses Server Components for initial data fetching and Client Components for interactivity.
* `components/EpisodeList.tsx`: A Client Component that displays the list of episodes and handles user interaction (scrolling and clicking).
* `components/CharacterGrid.tsx`: A Client Component that displays the grid of characters.
* `src/types/episode.ts`: TypeScript type definition for an episode.
* `src/types/character.ts`: TypeScript type definition for a character.

## Notes

* The application uses the Rick and Morty API (<https://rickandmortyapi.com/>) to fetch data.
* Error handling is implemented to display a message if the API fails to load data.

## README Usage

* **For Project Users/Visitors:** This README provides instructions on how to get the application running and how to use its features.
* **For Developers:** This README provides an overview of the application's architecture, technologies used, and code structure, which can be helpful for understanding, debugging, or contributing to the project.
