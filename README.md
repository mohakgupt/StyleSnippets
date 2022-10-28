
<p align="center">
   <img src="https://tipseason.com/assets/images/hacktoberfest-banner.jpg" alt="hacktoberfest-banner" width="640" height="320" />
</p>
<h1 align="center"> React-Snippets-Hacktoberfest</h1>
<h3 align="center">Find the book you want to read next!</h3>
<div align="center">
    <img src="https://forthebadge.com/images/badges/built-with-love.svg" />
    <img src="https://forthebadge.com/images/badges/powered-by-coffee.svg" />
    <img src="https://forthebadge.com/images/badges/open-source.svg" />
</div>

## What to contribute

The website displays React Styled Snippets alongwith their codes for a developer's reference. You can add your own React Styled Components in this repository.

### Steps to add a component

**1.** Navigate to `react-snippets-hacktoberfest\src\components`.

**2.** Here you will find categories of components. You have to add your component in the respective file and its code in the respective file ending with "-codes". For example, a new styled button will be added in `buttons.js` and its code will be declared as a template literal in `buttons-codes.js`.
Want to add a new kind of component? Feel free to create a new file.

**3.** In `react-snippets-hacktoberfest\src\App.js`, import your component and its code.

**4.** In the `div` with the `className="App-body"` add your component in the following format:
```
<Popup trigger={<your-component-name>Text-inside-your-component</your-component-name>} 
position="right center">
  <pre>
    {your-component-code-name}
  </pre>
</Popup>
```

**5.** Done! Now create a pull request using below steps.

## Getting Started

Below are the steps to follow to contribute to this project:

**1.** Fork [this](https://github.com/GDSC-NITH/React-Snippets-Hacktoberfest) repository.

**2.** Clone your forked copy of the project.

```
git clone https://github.com/<your_user_name>/React-Snippets-Hacktoberfest.git
```

where `your_user_name` is your GitHub username.

**3.** Navigate to the project directory.

```
cd CookBook-Hacktoberfest
```

**4.** Add a reference(remote) to the original repository.

```
git remote add upstream https://github.com/GDSC-NITH/React-Snippets-Hacktoberfest.git
```

**5.** Check the remotes for this repository.

```
git remote -v
```

**6.** Always take a pull from the upstream repository to your main branch to keep it at par with the main project(updated repository). Feel free to raise new issues.

```
git pull upstream main
```

**7.** Create a new branch.

```
git checkout -b <your_branch_name>
```

**8.** Make necessary changes and commit those changes

**9.** Track your changes.

```
git add .
```

**10.** Commit your changes .

```
git commit -m "new changes"
```

**11.** Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```

**12.** To create a pull request, click on `Compare & pull request`. Please ensure you compare your feature branch to the desired branch of the repo you are suppose to make a PR to.

**13.** Add appropriate title and description to your pull request explaining your changes and efforts done.

**14.** Click on `Create pull request`.

**15.** And you are done creating a pull request to this project. Be patient while your PR is reviewed.

## Contributors

<a href="https://github.com/GDSC-NITH/React-Snippets-Hacktoberfest/contributors">
  <img src="https://contrib.rocks/image?repo=GDSC-NITH/React-Snippets-Hacktoberfest" />
</a>
