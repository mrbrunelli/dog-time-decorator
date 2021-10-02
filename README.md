# Dog Timer Decorator
> A example of Time Decorator with Node.js + Typescript + [Dog Ceo API](https://dog.ceo/dog-api/)

## Reusable decorator
```ts
@Timer()
  async fetch() {
    const { data } = await axios.get(this.url);
    return data;
  }
```

## Response
```js
{
  message: 'https://images.dog.ceo/breeds/terrier-border/n02093754_6257.jpg',
  status: 'success',
  duration: '532.32ms'
}

```

![](https://images.dog.ceo/breeds/terrier-border/n02093754_6257.jpg)