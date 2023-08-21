//import self-scss
import "./case-study.scss"

//import images
import ViewChanging from "../../img/case-study/view-changing.jpg"

export const CaseStudy = () => {
    return (
        <>
        <div className="case-study-content">
            <h3 className="case-study__title">Wedding Invitation Case Study</h3>

            <h4 className="case-study__content--header">Overview</h4>

            <p>
                It is a two-person project, where I worked with my fiancée to plan and develop our wedding 
                invitation webpage. She created the UI design of the website, and I was the developer. It is 
                written in Hungarian because it is ours and our guests’ mother language.
            </p>

            <h4 className="case-study__content--header">Objective</h4>

            <p>
                Our goal was to create an invitation for our wedding as a web page, so we can invite the people 
                we want to celebrate with through social media.
            </p>

            <h4 className="case-study__content--header">Project Duration</h4>

            <p>Two weeks</p>

            <h4 className="case-study__content--header">Role</h4>

            <p>Lead Developer</p>

            <h4 className="case-study__content--header">Collaborators</h4>

            <p>
                <a 
                    href="https://www.linkedin.com/in/kincso-borsos-kosi/" 
                    rel="Kincső's LinkedIn page"
                    target="_blank"
                >
                    Kincső Kósi
                </a>
            </p>

            <h4 className="case-study__content--header">Tools used</h4>

            <p>Frontend</p>
            <p className="margin-one">- JavaScript</p>
            <p className="margin-two">- Framework</p>
            <p className="margin-three">- React</p>
            <p className="margin-one">- SCSS</p>
            <p>Backend</p>
            <p className="margin-one">- Node.js</p>
            <p className="margin-two">- Framework</p>
            <p className="margin-three">- Express</p>

            <h4 className="case-study__content--header">Creating the view-changing function</h4>

            <a href="../../img/view-changing.jpg" target="_blank"><img src={ViewChanging}/></a>

            <p>
            This is one of the most crucial functions the app must have. First I created the arrow buttons, which 
            take the user to the next or previous page upon clicking. The logic behind it is pretty simple. I added 
            a state called “page”, which contains only a number. Upon clicking the button, it adds or subtracts one 
            from the current state. According to the number, the website will change the view. Later I added the 
            possibility to move the views using the keyboard with arrow keys, ‘A’ and ‘D’ letters, and on mobile 
            swiping (I didn’t add animation to the swipe movement) or pressing the phone's sides.
            </p>
            <p>
            During implementation, I learned that in React I have to remove the event listeners after execution, 
            otherwise, on the existing event listener a new one will be created as well, so the action will be 
            executed multiple times and the webpage will have serious performance issues.
            </p>

            <h4 className="case-study__content--header">
                Adding elements to the view according to the design, 
                and style them
            </h4>

            <p>
                Without this step, the website wouldn’t be useful. It contains all the information about the 
                wedding we wanted to display to the visitors of the page. I used the UI design provided by my 
                fiancée to display everything exactly as planned. I used Figma to see the design, and all the 
                devices we have at home to test if the website looks good on different screen sizes. 
            </p>
            <p>
                I learned a lot in this process. I didn’t have a lot of time to finish the project, so I didn’t 
                have time to optimize the website in the best possible way, but I tried the best I could. First, 
                I wanted to use flex, to have the items vertically and horizontally in the middle of the container 
                or screen (depending on which element we are talking about). After saving, the elements were all 
                placed next to each other, and I wanted to place them under each other. Now I’m aware that I can 
                set the flex-direction as well, but I approached with another method. I added width to the elements 
                and set the margin to auto. It was a decent solution, but a time-consuming one.
            </p>
            <p>
                Second, I added UI elements and placed them in the location they should be, and styled them 
                accordingly. I did this because I never worked with a UI design before, and I wanted to see how 
                accurately can I place the elements on the screen. However, when I added the next element, I had 
                to set the previous elements as well, because they were pushed out of their position when the new 
                element was added. This way I lost a lot of time again, but I learned a lot throughout the 
                development.
            </p>
            <p>
                Third, I had to achieve, that the website to be displayed responsively on any device. In my first 
                approach, I used the resolution of the desktop PCs. I didn’t understand, after coding with 
                referencing the resolutions, the view didn’t fit on the screen accordingly. Later, I figured out, 
                that I have to consider the browser’s size instead of the monitor’s. Then I had to check on a 
                laptop, how it looks, and the height of the screen wasn’t accurate again. There I discovered, that 
                on laptops, the screen is scaled with 125% of the normal screen sizes. I saw in the settings, that 
                it can be set from 100% to 175%, so I placed the elements accordingly after checking the exact 
                resolutions after zooming. That way, I had to add the height of the browser size, otherwise the 
                browser would change the view differently than I intended.
            </p>
            <p>
                For tablets and mobile screens, I searched for screen sizes and calculated an average screen size 
                for tablets and phones, and I used them to create the views’ styling and positioning accordingly. 
                For reference, I checked the smallest screen sizes and checked if they fit on that screen sizes as 
                well. If not, I made a few changes according to that.
            </p>
            <p>
                It was a very challenging and time-consuming part of the development because there were a lot of 
                data that I have to keep in mind.
            </p>

            <h4 className="case-study__content--header">Creating a simple backend</h4>

            <p>
                First I wanted to play music using React. I checked for libraries that support playing audio, but 
                nothing worked when I wanted to add the music locally. That is why I had to create a backend 
                because we wanted to add music to the website. It is a basic backend, it has a public folder, 
                where I placed the music, added the logic to be able to launch a server, and hosted it on Render. 
                That way, I was finally able to play it. Since Chrome doesn’t support launching music immediately 
                after rendering the website, the users have to click on the music button to play it. The 
                disadvantage of this kind of approach is, that the server has to be started to play the music I 
                need. With servers hosted in the cloud, they have a “cold start”, when the server hasn’t been used 
                in a longer time. That means, it needs about ten to fifteen seconds before the website finally 
                starts playing the song. But it has a greater advantage, I don’t need to host the server on my 
                computer, so it will be available even when I turn off my PC.
            </p>

            <h4 className="case-study__content--header">Summary</h4>

            <p>
                I am very satisfied with the result. It was sometimes a huge difficulty to figure out how to make 
                the perfect-looking site. According to my experience, I think it is a great achievement in my 
                coding career. When I made the app, I had two months of experience with React, and this project 
                was my first independent project.
            </p>
            <p>
                The most challenging part was to achieve the responsiveness and styling of the website. I worked 
                about 120 to 140 hours on this project, and with the two weeks duration, it is a lot. 
            </p>
            <p>
                At a second iteration, I would use flex instead of block display, and create the responsiveness 
                for more screen ratios or sizes.
            </p>

            <p>
                <a 
                    href="https://kincso-zoltan.netlify.app/"
                    rel="Website's link"
                    target="_blank"
                >
                    Website
                </a>
            </p>

            <p>
                <a 
                    href="https://github.com/Darkpfeffer/marriage-invitation"
                    rel="Project's GitHub link"
                    target="_blank"
                >
                    Github
                </a>
            </p>

            <h4 className="case-study__content--header">Thank you for reading through!</h4>
        </div>
        </>
    )
}