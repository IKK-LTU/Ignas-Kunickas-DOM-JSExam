class ApartmentCardComponent {
  static USD_EUR = 0.87;
  constructor(props) {
    this.props = props;
    this.init();
  }

  init = () => {
    const {
      id,
      type,
      owner,
      roomCount,
      squares,
      adress,
      price,
      imgSrc,
      onDelete,
    } = this.props;
    const { city, country, street, number } = adress;
    const { amount, currency } = price;
    const { fullname, mobile, email } = owner;

    const finalPrice =
      currency === "$" ? amount * ApartmentCardComponent.USD_EUR : amount;
    const formatedPrice = Math.round(100 * finalPrice) / 100 + " €";

    this.htmlElement = document.createElement("article");
    this.htmlElement.className = "card shadow";
    this.htmlElement.innerHTML = `
    <img src="${imgSrc}" class="card-img-top"/ height="200px" style="object-fit: cover">
    <div class="card-body">
      <h2 class="h6" style="text-transform:uppercase;">${type}</h2>
      <h6 class="h6 text-muted">${street}.g ${number}, ${city}, ${country}.</h6>
        <p class="h4 my-3 text-end">${formatedPrice}</p>
        <ul class="d-flex flex-row justify-content-between list-unstyled">
        <li>Squares: <strong>${squares}</strong></li>
        <li>Rooms: <strong>${roomCount}</strong></li>
        </ul>
        <p class="text-center mt-4 mb-4 h6">Owner Contacts</p>
        <p class="fw-normal h6">Name: <strong>${fullname}</strong></p>
        <p class="fw-normal h6">Phone: <strong>${mobile}</strong></p>
        <p class="fw-normal h6 mb-4">Email: <strong>${email}</strong></p>
      <div class="text-center">
        <button class="btn btn-danger">Ištrinti</button>
      </div>
    </div>`;
    const btn = this.htmlElement.querySelector(".btn");
    btn.addEventListener("click", onDelete);
  };
}
