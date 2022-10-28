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

**5.** Done! Now create a pull request.
