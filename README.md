# SavvySquirrel
Savvy Squirrel React App


## Contribution Guidelines
Follow rules 1 & 2.
1. **Never ever ever** commit directly to develop.
2. **Never ever ever** commit directly to develop.

#### Initialization:
Create a new branch with the following schema:
```
Initials__FeatureComponent
```
If I were making the navbar, I'd create my branch like so:
```
git checkout -b DE__Navbar
```
#### CSS:
To avoid conflicts, always use the component name as a class/id prefix. Going back to our navbar example:
```CSS
.Navbar__Container {
  display: flex;
  flex-flow: row no-wrap;
 }
```
etc. Also please don't forget/ignore your media queries, do it responsive and do it right the first time!

#### Pushing changes:
Now that we've created our component, make sure you push your changes to the correct branch.
```
git add .
git commit -m "Created responsive navbar"
git push origin DE_Navbar
```
In your PR, please link to the issue being addressed (In our case, it's #1)
```
#1 Created Responsive Navbar Component
```
