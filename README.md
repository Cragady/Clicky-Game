# **Purpose**

The purpose of this project was to create a memory game with react. The point of the game is to click through all of the characters, if you click the same character twice, the round ends. The application keeps track of the number of times clicked correctly, and will end the game when the user clicks on a character that they have already clicked that round.

The users score is displayed along with their highest score for that session and how many clicks left they have until they win the game.

# **Functionality**

**A bit for the setup**

When the user clicks a character, the character's name is set to the state in the component named `ThePortrayer`. `ImageComp` receives an `onClick` method via props from `ThePortrayer` that is set to another method so that it can have an argument placed inside the method without executing on page load. When you set inline functions in an element, if you include the parentheses the function is executed on page load instead of on the click. This setup was to avoid executing the `onClick` on a load, while giving the `onClick` an argument.

**Score Keeping**

The user's score is kept in `ThePortrayer`'s state. Everytime there is a click, `ThePortrayer` receives the name of the character clicked from the `onClick` method passed to `ImageComp`. It is in `ThePortrayer` where the last character clicked is compared against who has already been clicked. If the character has not been clicked yet, the character's name is saved in the `state`. If the character has been clicked, the user is shown a gameover message and their score is set to zero. 

Although the user's score has been set to zero, their highest score is saved to the state and is kept for the user to view, and to beat. The user is also shown how many clicks are left to win the game.

**After Click**

After each click, `ThePortrayer` is rerendered. With how `ThePortrayer` renders, it pushes all of the images, that are set to the same component template using a for loop, into an array. That array is then shuffled using a method named `shufArr` and rendered.

# **Images**
* Star Versus the Forces of Evil
* Gravity Falls
* Phineas and Ferb

# **Background Image**
* Photo by Ricardo Gomez Angel on Unsplash @ripato

# **Link**

[Link](https://cragady.github.io/Clicky-Game/)