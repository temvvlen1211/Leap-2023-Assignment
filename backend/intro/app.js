const { request, response } = require("express");
const express = require("express");

const cors = require("cors");

const app = express();
app.use(cors());
const port = 8000;

const categories = [
  { id: 1, name: "Мэдээ" },
  { id: 2, name: "Боловсрол" },
  { id: 3, name: "Спорт" },
  { id: 4, name: "Онцлох мэдээ" },
  { id: 5, name: "Технологи" },
];

const article = [
  {
    id: "1",
    imageUrl:
      "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2023/01/302077-12012023-1673483129-1474355102-323161594_1276555419871077_2978167784463516154_n.jpg",

    name: "“Apple” компани 2024 оноос өөрсдийн үйлдвэрлэсэн дэлгэцээ ашиглаж эхэлнэ",
    description:
      "Eu nisi officia nisi magna pariatur nulla nisi ipsum id nostrud. Proident incididunt deserunt deserunt consectetur magna irure ad enim occaecat.",
    text: "“Google” компаниас монополын хэргээр БНЭУ-ын Дээд шүүхэд гаргасан давж заалдах хүсэлт амжилтгүй болж, тус компанид ногдуулсан 13 тэрбум рупи буюу 160 сая ам.долларын торгуулийг хэвээр үлдээсэн байна. Шүүхээс тус компанийг “Android” гар утасны үйлдлийн системдээ зах зээлд давамгай байр сууриа хэтрүүлэн ашигласан гэж дүгнээд байв.",
  },
  {
    id: "2",
    imageUrl:
      "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2023/01/-20012023-1674213462-502137103-f517600c-9bea-43d7-a5bd-1caf5b8a2c14.jpg",

    name: "“Apple” компани 2024 оноос өөрсдийн үйлдвэрлэсэн дэлгэцээ ашиглаж эхэлнэ",
    description:
      "Eu nisi officia nisi magna pariatur nulla nisi ipsum id nostrud. Proident incididunt deserunt deserunt consectetur magna irure ad enim occaecat.",
    text: "“Google” компаниас монополын хэргээр БНЭУ-ын Дээд шүүхэд гаргасан давж заалдах хүсэлт амжилтгүй болж, тус компанид ногдуулсан 13 тэрбум рупи буюу 160 сая ам.долларын торгуулийг хэвээр үлдээсэн байна. Шүүхээс тус компанийг “Android” гар утасны үйлдлийн системдээ зах зээлд давамгай байр сууриа хэтрүүлэн ашигласан гэж дүгнээд байв.",
  },
  {
    id: "3",
    imageUrl:
      "https://mgl.gogo.mn/newsn/thumbnail/420/images/c/2023/01/301981-09012023-1673256198-404237211-64dd56c5-2fde-4205-82f6-ff729b9c5b8b.jpg",

    name: "“Apple” компани 2024 оноос өөрсдийн үйлдвэрлэсэн дэлгэцээ ашиглаж эхэлнэ",
    description:
      "Eu nisi officia nisi magna pariatur nulla nisi ipsum id nostrud. Proident incididunt deserunt deserunt consectetur magna irure ad enim occaecat.",
    text: "“Google” компаниас монополын хэргээр БНЭУ-ын Дээд шүүхэд гаргасан давж заалдах хүсэлт амжилтгүй болж, тус компанид ногдуулсан 13 тэрбум рупи буюу 160 сая ам.долларын торгуулийг хэвээр үлдээсэн байна. Шүүхээс тус компанийг “Android” гар утасны үйлдлийн системдээ зах зээлд давамгай байр сууриа хэтрүүлэн ашигласан гэж дүгнээд байв.",
  },
  {
    id: "4",
    imageUrl:
      "https://mgl.gogo.mn/newsn/thumbnail/1000/images/c/2023/01/302296-24012023-1674551245-316999456-IMG_60831.jpg",

    name: "“Apple” компани 2024 оноос өөрсдийн үйлдвэрлэсэн дэлгэцээ ашиглаж эхэлнэ",
    description:
      "Eu nisi officia nisi magna pariatur nulla nisi ipsum id nostrud. Proident incididunt deserunt deserunt consectetur magna irure ad enim occaecat.",
    text: "“Google” компаниас монополын хэргээр БНЭУ-ын Дээд шүүхэд гаргасан давж заалдах хүсэлт амжилтгүй болж, тус компанид ногдуулсан 13 тэрбум рупи буюу 160 сая ам.долларын торгуулийг хэвээр үлдээсэн байна. Шүүхээс тус компанийг “Android” гар утасны үйлдлийн системдээ зах зээлд давамгай байр сууриа хэтрүүлэн ашигласан гэж дүгнээд байв.",
  },
];

app.get("/", (request, response) => {
  response.status(200);
  response.json("dadasda");
});

app.get("/categories", (request, response) => {
  response.status(200);
  response.json(categories);
});
app.get("/article", (request, response) => {
  response.status(200);
  response.json(article);
});
app.get("/article/:id", (req, res) => {
  const { id } = req.params;
  res.json(article[Number(id) - 1]);
});
app.listen(port, () => {
  console.log("http://localhost:" + port);
});
