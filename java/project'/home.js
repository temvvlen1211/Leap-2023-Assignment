const getCars = async () => {
  const res = await fetch("http://localhost:3333/api/cars");
  const data = await res.json();
  console.log(data);
  return data;
};

const currencyFormat = (value) => {
  return new Intl.NumberFormat("mn-MN", { maximumSignificantDigits: 3 }).format(
    value
  );
};

const getCarCard = (car) => {
  return ` <div class="col-3">
                <div class="card" data-bs-toggle="modal" data-bs-target="#modal">
                <div class="ratio ratio-4x3">
                    <img
                    src='${car.imageUrl}'
                    alt="prius 20"
                    class="card-img-top"
                    />
                </div>
                <div class="card-body">
                    <p class="card-name">${car.model}</p>
                    <p class="card-category">${car.brand}</p>
                    <p class="card-name card-price">${currencyFormat(
                      car.price
                    )}₮</p>
                    <div class="d-flex justify-content-end gap-3">
                    <button type="button" class="btn btn-success">ZASAH</button>
                    <button type="button" class="btn btn-danger oneclick="deleteCar(${
                      car.id
                    })">USTGAH</button>
                    </div>
                </div>
                </div>
            </div>`;
};
const carsTarget = document.querySelector("#cars");

const getCarsHtml = async () => {
  carsTarget.innerHTML = "";
  const cars = await getCars();
  for (const car of cars) {
    carsTarget.innerHTML += getCarCard(car);
  }
};

getCarsHtml();

const submitBtn = document.querySelector("#formsubmit");

const imageUrlTarget = document.querySelector("#imageUrl");
const modelTarget = document.querySelector("#model");
const brandTarget = document.querySelector("#brand");
const priceTarget = document.querySelector("#price");

submitBtn.addEventListener("click", async () => {
  const newCar = {
    imageUrl: imageUrlTarget.value,
    model: modelTarget.value,
    brand: brandTarget.value,
    price: priceTarget.value,
  };
  const req = await fetch("http://localhost:3333/api/cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json ",
    },
    body: JSON.stringify(newCar),
  });
  const res = await req.json();
  console.log(res);
  getCarsHtml();
});

const deleteCar = async (id) => {
  if (confirm("ustgah u"))
    fetch("http://localhost:3333/api/cars", {
      method: "DELETE",
      headers: {
        "Content-Type": " application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .catch((res) => {
        console.warn(err);
      });
  () => {
    alert("amjilttai ustagalaa");
    getCarsHtml();
  };
};
const modal = new bootstrap.Modal(document.getElementById("modal"));
modal.show();
modal.hide();

const getCar = async (id) => {
  const res = await fetch("http://localhost:3333/api/cars/" + id);
  const data = await res.json();
  return data;
};

const update = () => {
  const updatedCar = {};

  fetch("http://localhost:3333/api/cars", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedCar),
  });
};
