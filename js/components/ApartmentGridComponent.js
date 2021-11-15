class ApartmentGridComponent {
  constructor() {
    this.state = {
      loading: false,
      toys: [],
    };
    this.init();
    }
    
    init = () => {
        this.htmlElement = document.createElement("div");
        this.htmlElement.className = "row g-3";
        this.htmlElement.innerHTML="nanan"
    }
}