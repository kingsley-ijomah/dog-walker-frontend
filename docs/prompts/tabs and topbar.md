### Bottom Tabs

using ionic generate a standalone component in path tab2
generate standalone pages: home, groups, walks, chat within tab2/pages

update @tab2.component.html Update this so it becomes a footer tab containing the following links. Home, groups, walks, chats. use routerLink

here lets create a nested routing pointing to pages within ./pages directory

add a tab2 path that will load both component and route from ./tab2

{
  path: 'tabs',
  loadComponent: () => import('./tabs/tabs.component').then(m => m.TabsComponent),
  loadChildren: () => import('./tabs/tabs.routes').then(m => m.routes)
},


### Top Bar
Create a top navigation system in an Ionic Angular project. The navigation bar should include the [company name] displayed on the left side and a profile icon positioned on the right side. 

Clicking on the profile icon should display a popover or dropdown menu with the following options: Edit Profile, Logout, settings, for now don't create those pages. 

Ensure the navigation bar is visible on all pages unless explicitly hidden on specific routes, such as login or splash screens. Use a responsive design that adapts to different screen sizes, including mobile, tablet, and desktop. 

The navigation bar should be implemented using Ionic components, and the profile menu functionality should utilize Ionic Popover or a similar dynamic component.

company name is: Dog Walkers

