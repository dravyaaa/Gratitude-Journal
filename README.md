# CMPSC472_finalproject
=======

## Installation

#### 1. Clone the repository to your local machine using the following Git command:
```bash
git clone git@github.com:darsh8692/CMPSC472_finalproject.git
```
#### 2. Install the npm packages:
```bash
npm install
```
#### 3. Run the project using following command:
Runs the app in the development mode.
```bash
npm start
```
Launches the test runner in the interactive watch mode.
```bash
npm test
```
Builds the app for production to the `build` folder.
```bash
npm run build
```
## Usage instructions

#### Dashboard Navigation:
- Upons running the app, users will be directed to the dashboard.
- Use the navigation menu to explore different sections: Home, Entries, Personalized Prompts, and New Journal entry.

#### Create a Journal Entry:
- Click on the "New Entry" or "Create Journal Entry" button.
- For your entry begin typing or use the voice-to-text feature to record your thoughts.

#### Personalized Prompts:
- Explore the "Personalized Prompts" section for suggestions to enhance your gratitude practice.
- Respond to prompts by typing.

## Project Goals
- Develop a user-friendly Gratitude Journal web application tailored specifically for elderly users.
- Implement features for creating journal entries, including personalized prompts and voice-to-text entry.
- Prioritize simplicity and accessibility in the user interface to accommodate varying levels of technological familiarity among elderly users.
- Integrate gentle reminders to encourage and support consistent engagement with gratitude practices.
- Provide an option for users to attach images to their entries, fostering a more personalized and meaningful reflection.

## Significance of the Project

#### Enhancing Emotional Well-being:
- Cultivates a positive mindset by facilitating the expression and acknowledgment of daily moments of gratitude.
- Supports mental and emotional well-being by encouraging regular reflection on positive aspects of life.

#### Tailored Experience for the Elderly:
- Addresses the specific needs and preferences of elderly users through features like larger fonts, simplified navigation, and voice-to-text entry.
- Recognizes the importance of customization in technology for diverse user demographics.

#### Digital Companion for Loneliness:
- Acts as a digital companion for the elderly, fostering a sense of connection and companionship.
- Provides a platform for self-expression and reflection, reducing feelings of isolation.

#### Multimodal Input with Voice-to-Text:
- Enhances accessibility by including a voice-to-text feature, allowing users to effortlessly create journal entries without the need for typing.
- Acknowledges and accommodates diverse abilities and preferences among elderly users.

## Code Structure

#### Data Storage Location:
- The data and entries are stored on the client side within the browser's localStorage. This local storage provides a simple way to persistently store and retrieve JSON-formatted data.
- The React component (Entries) utilizes the localStorage feature to maintain and persist the journal entries. The entries are stored as a JSON-formatted string, allowing them to survive page reloads or closures.
- In this implementation, data storage is handled entirely on the client side, making it suitable for scenarios where server-side storage or a database is not required.
