export const Btn1Code = `export const Btn1 = styled.button\`
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  transition: 0.2s;
  cursor: pointer;
  &:hover{
      background: #fff;
      color: #000;
  }
\``

export const Btn2Code = `
export const Btn2 = styled.button\`
    width: 200px;
    height: 55px;
    font-size: 16px;
    transition: all 200ms;
    cursor: pointer;
    display: block;
    margin: 25px;
    border: 2px solid orange;
    color: orange;
    background-color: rgb(0,0,0,0);
    &:hover{
        color: white;
        border-color: yellow;
        transform: translateY(-3px);
        box-shadow: 0px 5px 8px -4px yellow;
    }
\`
`

export const Btn3Code = `
export const Btn3 = styled.button\`
width: 200px;
  height: 55px;
  font-size: 16px;
  transition: all 200ms;
  cursor: pointer;
  display: block;
  margin: 25px;
  font-weight: 600;
  border: 5px solid green;
  border-radius: 10px;
  color: white;
  background-color: rgb(0,0,0,0);
  &:hover{
    color: greenyellow;
    border-color: greenyellow;
    transform: translateY(-3px);
    box-shadow: 0px 5px 8px -4px yellow;
  }
\``

export const Btn4Code = `
export const Btn4 = styled.button\`
    width: 200px;
    height: 55px;
    font-size: 16px;
    transition: all 200ms;
    cursor: pointer;
    display: block;
    margin: 25px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin: 20px;
    text-align:center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;
    transition: all .4s ease-in-out;
    background-image: linear-gradient(to 
      right, #f5ce62, #e43603, #fa7199,
       #e85a19);
    box-shadow: 0 4px 15px 0 rgba(229,
       66, 10, 0.75);
    &:hover{
        background-position: 100% 0;
        transition: all .4s ease-in-out;
    }
\``