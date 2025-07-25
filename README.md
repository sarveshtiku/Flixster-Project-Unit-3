## Unit Assignment: Flixster

Submitted by: **Sarvesh Tiku**

Estimated time spent: **7** hours spent in total

Deployed Application (optional): [Flixster Deployed Site using Render](https://flixster-project-unit-3.onrender.com/)

<img width="1166" alt="Screenshot 2025-06-20 at 09 18 05" src="https://github.com/user-attachments/assets/876e3c9a-3ac2-4c09-bc92-9dd9549b9cd6" />

### Application Features

#### REQUIRED FEATURES

- [x] **Display Movies**
  - [x] Users can view a list of current movies from The Movie Database API in a grid view.
    - [x] Movie tiles should be reasonably sized (at least 6 playlists on your laptop when full screen; large enough that the playlist components detailed in the next feature are legible).
  - [x] For each movie displayed, users can see the movie's:
    - [x] Title
    - [x] Poster image
    - [x] Vote average
  - [x] Users can load more current movies by clicking a button which adds more movies to the grid without reloading the entire page. 
- [x] **Search Functionality**
  - [x] Users can use a search bar to search for movies by title.
  - [x] The search bar should include:
    - [x] Text input field
    - [x] Submit/Search button
    - [x] Clear button
  - [x] Movies with a title containing the search query in the text input field are displayed in a grid view when the user either:
    - [x] Presses the Enter key
    - [x] Clicks the Submit/Search button
  - [x] Users can click the Clear button. When clicked:
    - [x] All text in the text input field is deleted
    - [x] The most recent search results are cleared from the text input field and the grid view and all current movies are displayed in a grid view
- [x] **Design Features**
  - [x] Website implements all of the following accessibility features:
    - [x] Semantic HTML
    - [x] [Color contrast](https://webaim.org/resources/contrastchecker/)
    - [x] Alt text for images 
  - [x] Website implements responsive web design.
    - [x] Uses CSS Flexbox or CSS Grid
    - [x] Movie tiles and images shrink/grow in response to window size
  - [x] Users can click on a movie tile to view more details about a movie in a pop-up modal.
    - [x] The pop-up window is centered in the screen and does not occupy the entire screen.
    - [x] The pop-up window has a shadow to show that it is a pop-up and appears floating on the screen.
    - [x] The backdrop of the pop-up appears darker or in a different shade than before. including:
    - [x] The pop-up displays additional details about the moving including:
      - [x] Runtime in minutes
      - [x] Backdrop poster
      - [x] Release date
      - [x] Genres
      - [x] An overview
  - [x] Users can use a drop-down menu to sort movies.
    - [x] Drop-down allows movies to be sorted by:
      - [x] Title (alphabetic, A-Z)
      - [x] Release date (chronologically, most recent to oldest)
      - [x] Vote average (descending, highest to lowest)
    - [x] When a sort option is clicked, movies display in a grid according to selected criterion.
  - [x] Website displays:
    - [x] Header section
    - [x] Banner section
    - [x] Search bar
    - [x] Movie grid
    - [x] Footer section
    - [x] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: To ease the grading process, please use the [color contrast checker](https://webaim.org/resources/contrastchecker/) to demonstrate to the grading team that text and background colors on your website have appropriate contrast. The Contrast Ratio should be above 4.5:1 and should have a green box surrounding it. 

#### STRETCH FEATURES

- [x] **Deployment**
  - [x] Website is deployed via Render
  - [x] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: For ease of grading, please use the deployed version of your website when creating your walkthrough. 
- [x] **Embedded Movie Trailers**
  - [x] Within the pop-up modal displaying a movie's details, the movie trailer is viewable.
    - [x] When the trailer is clicked, users can play the movie trailer.
- [x] **Favorite Button**
  - [x] For each movie displayed, users can favorite the movie.
  - [x] There should be visual element (such as a heart icon) on each movie's tile to show whether or not the movie has been favorited.
  - [x] If the movie is not favorited:
    - [x] Clicking on the visual element should mark the movie as favorited
    - [x] There should be visual feedback (such as the heart turning a different color) to show that the movie has been favorited by the user.
  - [x] If the movie is already favorited:
    - [x] Clicking on the visual element should mark the movie as *not* favorited.
    - [x] There should be visual feedback (such as the heart turning a different color) to show that the movie has been unfavorited. 
- [x] **Watched Checkbox**
  - [x] For each movie displayed, users can mark the movie as watched.
  - [x] There should be visual element (such as an eye icon) on each movie's tile to show whether or not the movie has been watched.
  - [x] If the movie has not been watched:
    - [x] Clicking on the visual element should mark the movie as watched
    - [x] There should be visual feedback (such as the eye turning a different color) to show that the movie has been watched by the user.
  - [x] If the movie is already watched:
    - [x] Clicking on the visual element should mark the movie as *not* watched.
    - [x] There should be visual feedback (such as the eye turning a different color) to show that the movie has not been watched.
- [x] **Sidebar**
  - [x] The website includes a side navigation bar.
  - [x] The sidebar has three pages:
    - [x] Home
    - [x] Favorites
    - [x] Watched
  - [x] The Home page displays all current movies in a grid view, the search bar, and the sort movies drop-down.
  - [x] The Favorites page displays all favorited movies in a grid view.
  - [x] The Watched page displays all watched movies in a grid view.

### Walkthrough Video

* **PART 1**  
[Walkthrough Part 1](https://www.loom.com/share/949abe3d138046e4a0836f6349e24399?sid=ce151717-f9ff-4cd7-9758-00d77510932d)

* **PART 2**  
[Walkthrough Part 2](https://www.loom.com/share/bf5eae3c64ba4ba2ac000257fb1618d8?sid=16b945d1-afeb-40d8-8b2a-a96308caf6c6)

### Reflection

* **Did the topics discussed in your labs prepare you to complete the assignment?**  
  Absolutely. Our weekly labs on React fundamentals—using `useEffect` and `useState` to fetch and render data—directly prepared me for pulling movie data from the TMDB API and displaying it in a responsive grid. The CSS labs on Flexbox and Grid made it easy to implement a layout that adapts across screen sizes, and the accessibility exercises taught me to use semantic HTML, proper alt text, and high-contrast colors. I felt especially comfortable building the search bar with clear/reset functionality because we practiced controlled inputs and event handling in class. The one area I hadn’t encountered in the labs was client-side sorting using `useMemo`; wiring up the sort dropdown and optimizing renders required a bit of extra research.

* **If you had more time, what would you have done differently?**  
  With additional time, I would:  
  1. Enhance the visual design—making the UI more polished and ensuring full responsiveness across all devices.  
  2. Add features to reduce redundant API calls, for example by implementing client-side sorting of search results to improve performance and minimize network requests.  

* **Reflect on your project demo—what went well, and what would you try next time?**  
  The live demo of search, pagination, and the details modal went smoothly: the API calls were reliable, and the UI transitions felt snappy. I did hit a brief CORS hiccup when rapidly paging through results, but adding a simple loading indicator and disabling the button during fetches resolved it on the fly. Watching a classmate embed trailers in their modals inspired me to explore video players and richer content next time. Overall, I’m proud of how the core functionality aligns with the lab learnings, and I’m excited to tackle the remaining features in future iterations.

### Open-source libraries used

- **React** — declarative UI library for building components (https://reactjs.org/)  
- **PropTypes** — runtime type checking for React props (https://www.npmjs.com/package/prop-types)  
- **Vite** — build tool and development server (https://vitejs.dev/)  

### Shout out

Big shout out to Alex, Devarsh, Keith, and Lucia! Thanks for all the support and feedback throughout the project 🙏
