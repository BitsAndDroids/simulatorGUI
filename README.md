# SimulatorGUI

I built this project using the Angular (typescript) framework. The interface represents a quick proof of concept displaying several UX techniques for a technical skill test I'm taking. The time limit I've set for myself was 4~5 hours(not considering writing the documentation). Due to this time constraint, the end product is a demo aimed at the interface/experience without too much backend magic.

You're able to view the project at:
https://bitsanddroids.github.io/simulatorGUI/

## Installation
Angular is a Javascript/Typescript framework that lets you create dynamic web applications. These can be hosted on any web hosting server that supports node.js applications. A local installation might be a better option to interface with the simulator directly. This approach requires a local webserver to run the application. Updating / installing the application could be reduced to a single drag and drop action. Place the build files into the web server's directory, and you're ready for take-off. Depending on the needs of the client/the software bundle, we could assemble a tailored solution to make the installation as easy as possible.

# Start screen
![start screen](https://github.com/BitsAndDroids/simulatorGUI/blob/main/src/assets/startScreen.jpg?raw=true)
I wanted to keep the start screen modular and functional. It displays all the data you'll need before starting a flight and provides easy access to the edit menu. Due to the modular card-based approach, adjusting mobile platforms' layout won't require too much development time. When you're inside the simulator cockpit, having to grab a wireless keyboard/mouse combo could be cumbersome. Starting your training from the press of a button on your phone will increase the user experience and interaction. Visualizing (useful) data is a huge trend nowadays. While booting up your flight, you're able to find the logs of your last flight and a graph displaying your latest landing (I've opted to go with indicated airspeed + indicated altitude for the sake of this demo).  

# Settings menu
![flight settings](https://github.com/BitsAndDroids/simulatorGUI/blob/main/src/assets/editFlightSettings.jpg?raw=true)
Since I don't know the full scope of functionalities the simulation software suite offers, I've opted to create a settings menu that lets you change basic parameters. That is why I've decided to display the active runway in an interactive element. You're able to click different runways to change the runway you'll take off from. It gives pilots a sense of recognition seeing the layout of their favorite airport while setting up their flight. Making this modular gives us the opportunity to display this data on the loading screen/home screen as well (due to the scope of this test, I've opted only to add it to the settings menu).

![runway selection](https://github.com/BitsAndDroids/simulatorGUI/blob/main/src/assets/runway.gif?raw=true)

# Progress spinner
![loading spinner](https://github.com/BitsAndDroids/simulatorGUI/blob/main/src/assets/spinner.gif?raw=true)
Booting up any sim can take a while. Nothing causes more frustration than pressing a button and getting no response. Another annoyance is loading screens that don't offer any feedback. Adding a spinner that indicates a sense of progress ensures the user that the system is working instead of crashing. I've opted to add some loading fluff aviation fluff lines that change overtime to add some distraction. 
