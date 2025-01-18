### Bottom Tabs

#### Step 1
using ionic, generate a standalone component in path: tab

#### Step 2
manual create tab.routes.ts
here lets create an empty angular routes and let the default root path redirect to home for now

#### Step 3
(home, groups, walks, chat)
generate standalone page called home within tabs/pages

#### Step 4
update app.routes
Add a new path called tabs that loads both component and children from ./tabs/tabs.component and ./tabs/tabs.routes

#### Step 5
update @tabs.component.html Update this so it becomes a footer tab containing the following links. Home, groups, walks, chats. dont use routerLink we will rely on just the tab naming

#### Step 6
update @tabs.component.ts to import all required components and icons used in @tabs.component.html



### Top Bar
Create a top navigation system in an Ionic Angular project. The navigation bar should include the [company name] displayed on the left side and a profile icon positioned on the right side. 

Clicking on the profile icon should display a popover or dropdown menu with the following options: Edit Profile, Logout, settings, for now don't create those pages. 

Ensure the navigation bar is visible on all pages unless explicitly hidden on specific routes, such as login or splash screens. Use a responsive design that adapts to different screen sizes, including mobile, tablet, and desktop. 

The navigation bar should be implemented using Ionic components, and the profile menu functionality should utilize Ionic Popover or a similar dynamic component.

company name is: Dog Walkers

