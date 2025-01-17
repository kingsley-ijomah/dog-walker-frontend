### Bottom Tabs
Create a footer tabs navigation system in an Ionic Angular project. The footer tabs should only appear for routes within the specified [root name] (e.g., /tabs) and disappear for any routes outside this structure. The system should allow customization of the root name and tab names. Each tab corresponds to a page generated under [root name]/pages/{tab-name}. Each page should include a simple layout with a title reflecting the tab name. Implement nested routing under [root name] for better organization. Ensure the footer tabs are dynamically visible only for routes under [root name] and remain hidden for unrelated routes. Based on this I want Root Name: tabs. Tab Pages: Home, Groups, Walks, Chat.

### Top Bar
Create a top navigation system in an Ionic Angular project. The navigation bar should include the [company name] displayed on the left side and a profile icon positioned on the right side. 

Clicking on the profile icon should display a popover or dropdown menu with the following options: Edit Profile, Logout, settings, for now don't create those pages. 

Ensure the navigation bar is visible on all pages unless explicitly hidden on specific routes, such as login or splash screens. Use a responsive design that adapts to different screen sizes, including mobile, tablet, and desktop. 

The navigation bar should be implemented using Ionic components, and the profile menu functionality should utilize Ionic Popover or a similar dynamic component.

company name is: Dog Walkers

