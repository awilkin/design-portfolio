# Homeline

Build your home, line by line

## The Problem

### The Need for Homeline
Anyone who has undertaken a remodeling project knows that communicating with contractors and tracking the progress of a project is a headache. Miscommunications, phone tag with your contractor, and vague and frustrating bills from your contractor are all pieces of the unpleasant experience.

### About the Project
Homeline allows contractors and customers alike to track the progress, budget, and details of a remodeling venture. With this simple web app designed and built within a day, homes can be rebuilt, line by line.

> insert lead.png

### My Role
I was the product designer over a team of ten during the day-long design and development sprint in March 2017. From 7 a.m. until 6 p.m., I was responsible for defining the client's ideas as I rapidly prototyped the screens in Sketch. The screens I built in Sketch were developed by other members of my team as I designed them. The setup was highly efficient and inflexible to extreme change, so it was important to design well the first time.

> happy-dan.png

## The Process

### Initial Research
I worked side-by-side with the client to understand her vision. She'd recently been through a remodeling fiasco, so in this case, she was also a user. I could conduct user interviews and usability testing throughout the day as I was building screens. Not ideal, but better than a client that's never been through the experience.

After speaking with the client, it became clear that in order to solve communication problems between the contractor and the remodeling client, both parties needed to see the budget, the schedule, and the tasks of the remodeling project. These three pieces of information are vital to both parties and cause the most contention. By making this information transparent, both parties could foresee problems and solve them early on.

### Wireframes
The entire team met and used a whiteboard to define the fundamental functions necessary to solve the user's problem. Keeping in mind that we only had 9 hours to build and deploy our app, we kept things as simple as possible.

> Insert jong.png

### Features

#### Newsfeed
Keeping in mind the 'Why' of the application, I had two goals with the newsfeed.
- Details like the time, location, and description of an event are readily available
- Sharing events with friends is easy
Both of these elements were necessary to helping the user cure their loneliness and boredom. The user needed to be able to peruse events quickly and invite other friends. This is why from the newsfeed you can see the event title, the description, the time, the location, and the number of people going to each event (and a red notification is a Facebook friend is going). The Share icon is also available for every event.
> old-newsfeed and newsfeed side by side

#### Event Details
Originally, I had event details on a separate page. A user would click on an event from the newsfeed to view further details. Upon further consideration, I decided to make that information available from an expanded version of the newsfeed itself. Again, the purpose of the app was to make it as easy as possible for the user to cure his loneliness and find something to do with friends, so I should make the user flow towards that goal as quick and easy as possible.
> Separate page for old-detail

Now, a user simply taps the event for the event details to expand within the newsfeed. The user can then see who's going, join the event, or go to the chat to check it out more.
> newsfeed-expand side by side

#### Create Event
A natural extension of joining events quickly is creating events quickly. The '+' button on the bottom right is easy accessible from the newsfeed, so it's a simple 3-step process to create a new event. Tap the '+' button, enter the details of the event and invite friends, and submit.

> old-create

#### Chat
Communication is fundamental to creating and following through with plans. Naturally, this meant a chat feature should be included within Who's Down to facilitate each user's plans. For each event created, we would include a chat function so that all involved, whether they were Facebook friends or not, could communicate and coordinate with each other.

## The Solution
> insert wd-blue

Users sign in to Who's Down using Facebook and immediately see the newsfeed. They can search for events or simply browse for something that looks interesting. The most important details of each event can be seen from the newsfeed, so users can determine if they could or want to go to the event. They can also see whether any of their friends are already going. If they want to see which friends, they simply tap to see the names of those going. Once a user picks an event, they can use the chat to talk to friends and strangers alike going to the event.

> insert wd-phone

If nothing strikes their fancy, it's easy to create a new invite and see who's down.

Who's Down is still currently in development, and is expected to be deployed within the next month.

I've learned a lot since I created these designs, and I would do things very differently now. In fact, I [wrote a Medium story about it](https://medium.com/@aliciadwilkin/rapid-prototyping-for-a-spontaneous-product-5318be822aac) - check it out to learn how I'd apply design iterations and user feedback to validate my designs.
