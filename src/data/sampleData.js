
const sampleData = [...Array(120).keys()].map((i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
}));

export default sampleData;

const dummyData = sampleData.map((item) => ({
  ...item,
  image: `https://dummyimage.com/600x400/000/fff&text=Item+${item.id}`,
  price: (Math.random() * 100).toFixed(2),
}));

export { dummyData };