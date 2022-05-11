#### Link to the project - https://what-to-watch-sanich123.vercel.app/

#### Project's technologies: React, React-Router, Redux (RTK Queries), TypeScript.

#### About the project

"What to see" is a new generation online cinema. 
Watch new items absolutely free and in the best quality. 
Leave reviews, rate and choose only the best from the world of big cinema.

#### Description of functionality

The application consists of several pages: Main (/), Sign In (/login), MyList (/mylist), Film (/films/:id), Add review (/films/:id/review), Player (/player/ :id).

MyList, Add review pages are available only to authorized users. 
If the user is not logged in, then accessing these pages will redirect you to the "Sign In" page.
If the user is not authorized, then when trying to navigate to a private page, a redirect to the "Sign In" page (/login) is performed.

In the right corner of the header, the user's avatar and the "Sign Out" button (if the user is authorized) or the "Sign In" link (if the user is not authorized) are displayed.

Clicking on the “Sign Out” button leads to the end of the session - exit from the closed part of the application.
Clicking on the user's avatar takes you to the MyList page (/mylist).

Accessing a non-existent page (for example, through the address bar) does not lead to errors in the application, but is correctly processed by routing. The user is redirected to a 404 page. 

#### Main page

The main page contains genres, movie previews.
The page with a detailed description of the film is available to all users.
The page header displays the poster and cover of the promotional film.
The promotional film can be viewed immediately by pressing the "Play" button or added to the "My List" list.
After downloading the application, 8 cards of films of arbitrary genres are displayed. In the list of genres, "All genres" is highlighted.
The list of genres is built on the basis of information about movies received from the server.
The list of genres displays no more than 9 genres + All genres (displays films of any genres in the list).
When changing the genre or getting information about movies from the server, no more than 8 movies are displayed in the movie list.
Showing additional films is performed by clicking on the "Show more" button.
Clicking on the "Show more" button adds the next 8 films to the list or the remaining films, if there are less of them.

Clicking on an image or movie title takes you to the "Film" page (/films/:id).
When you hover and hold the mouse cursor over a movie image, a video preview of the movie starts playing instead of the image.

#### Film page
The page with a detailed description of the movie is available at /films/:id, where id is the movie ID received from the server. For example: /films/123.
The page with a detailed description of the film is available to all users.
The "More like this" block shows similar movies. The block displays up to 4 cards of similar films.
Clicking on a card from the "More like this" block will take you to the "Film" page of the corresponding movie.
Adding a new review is done by clicking the "Add review" button. The button should only be displayed to authorized users.
Clicking the "Add review" button will take you to the Add review page (/films/:id/review).
The page is available only to authorized users. Unauthorized users are redirected to the Sign In page.
The user rates the movie from 1 to 10. The score is set by highlighting a certain number of stars. 
If users did not have time to rate the movie, the server will return 0 as a rating.
The review text must be no less than 50 and no more than 400 characters.
Until the user has rated and entered the allowed amount of text, the send feedback button is not active.
When you click the "Post" button and submit the data, the "Submit" button and the entire form will be blocked. 
The form and button are unlocked when the submission is successful or when an error occurs.
If the form is submitted successfully, the user is redirected to the card of the current movie.
If an error occurs, the user should be notified. The way the error is displayed is up to the developer.

#### MyList Page
The page contains information about films added to the "To Watch" list.
Adding to the "To Watch" list is carried out by clicking on the "+ MyList" button on the "Film" page and on the main page for the promotional film. 
The "+ MyList" button is replaced by the "✓ MyList" button.
If the movie has already been added to the "To Watch" list, pressing the "✓ My List" button removes the movie from the list. 
The "✓ MyList" button is replaced by the "+ MyList" button.
The "MyList" page is available only to authorized users. Unauthorized users are redirected to the "Sign In" page.
Clicking on the movie card (image, title) takes you to the "Film" page with a detailed description of the movie.

#### Sign In Page
The "Sign in" page is available at /login.
To enter the service, the user enters a login (email) and password.
Since the service does not have the ability to register, the login and password can be anything, but not empty.
A valid email address must be entered in the "login" field.
A valid password must be entered in the "password" field. A valid password is a password that consists of at least one letter and a number.
The page is accessible only to unauthorized users. Redirects authorized users to the main page.
Error information is displayed in the error block.

#### Watching films
When you click on the "Play" button, the player is drawn and the selected movie starts showing. An animated spinner is displayed while the movie is loading. 

#### Player functionality:
Play/Pause. Start/stop video.
Fullscreen. Transfer to full screen mode.
Time elapsed. Remaining video playback time. The time is displayed in the format -MM:SS - minutes, seconds or -HH:MM:SS - hours, minutes, seconds, if the video duration is more than one hour, for example:
Less than an hour: -53:12;
More than an hour: -01:45:35.
Exit. Stop browsing. The player is hidden.
The player is implemented using <video>.

#### If you want, you can:

clone this project ('git clone [name of repository]'),
navigate into the project's folder ('cd [folder's name]')
install dependencies ('npm i'),
and run the project with the 'npm run start' script. 

