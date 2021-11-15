class ApartmentCardComponent{
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
        this.htmlElement = document.createElement("article");
        this.htmlElement.className = "card shadow";
        this.htmlElement.innerHTML = `
    <img src="${imgSrc}" class="card-img-top"/ height="200px" style="object-fit: cover">
    <div class="card-body">
      <h2 class="h5">${type}</h2>
      <ul>
        <li>
          <span>year</span>:
          <strong></strong>
        </li>
        <li>
          <span>fuel type</span>:
          <strong></strong>
        </li>
        <li>
          <span>price</span>:
          <strong></strong>
        </li>
      </ul>
      <div class="text-center">
        <button class="btn btn-danger">Ištrinti</button>
      </div>
    </div>`;
        const btn = this.htmlElement.querySelector(".btn");
        btn.addEventListener("click", onDelete);
    }

}