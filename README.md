# Mighty Hive Demo for Yooshin

## Running app
```
yarn start
```

## Features
- By clicking Reset Ball Color Button, it will clear up `ballColor` cookie and its react state. Hence, it will try to load the new color or the same color by `useEffect` function. (50% chance)

- Whenever you refreshed page, clicking button or visiting page in newtab, it will increase the color counter for the ball you see. 


## Approaches

### Cookie Structures

```javascript
{
  ballColor, // previous ball color you saw
  
  // counting how many balloon you have seen
  // for each colors.
  red, 
  blue
}
```

### Logics
If you see `ballColor` is `null`, it will create new cookie and update ball count.
Otherwise, it will read from cookie. 


## Demo
http://yooshin-mightyhive-demo.s3-website-ap-southeast-2.amazonaws.com/


