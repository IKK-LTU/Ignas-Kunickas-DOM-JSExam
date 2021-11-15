class ApartmentGridComponent {
  constructor() {
    this.state = {
      loading: false,
      apartments: [],
    };
    this.init();
  }

  initFetch = () =>
    setTimeout(() => {
      API.fetchApartments(
        (apartments) => {
          this.state.loading = false;
          this.saveApartments(apartments);
        },
        (err) => {
          alert(err);
          this.state.loading = false;
          this.render();
        }
      );
    }, 1000);

  saveApartments = (apartments) => {
    this.state.apartments = apartments;
    this.render();
  };
  deleteApartment = (id) => {
    API.deleteApartment(id, () => API.fetchApartments(this.saveApartments, alert), alert);
  };

  init = () => {
    this.state.loading = true;
    this.initFetch();
    this.htmlElement = document.createElement("div");
    this.htmlElement.className = "row g-3";
    this.htmlElement.innerHTML = "Siunčiama...";
    this.render();
  };

  render = () => {
    const { loading, apartments } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = `<div class="text-center"><img src="assets/loading.gif"/></br><span>Siunciama</span></div>`;
    } else if (apartments.length > 0) {
      this.htmlElement.innerHTML = `<div class="text-center"></br><span>Atsiusta</span></div>`;
    } else {
      this.htmlElement.innerHTML = `<h2>Šiuo metu mašinų nėra</h2>`;
    }
    console.log(apartments);
    };
}
