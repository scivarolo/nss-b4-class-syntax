class Restaurant {

  constructor(props) {
    this.name = props.name
    this.menu = props.menu
    this.comboDiscount = props.comboDiscount
  }

  set combo(items) {
    if(Array.isArray(items)) {
      this.comboItems = items
    }
  }

  get comboPrice() {
    if(this.comboItems) {
      return this.comboItems.reduce((total, i) => total + i).toFixed(2);
    } else {
      return `There is no combo today.`
    }
  }

}

bobsProps = {
  name: "Bob's Burgers",
  menu: {
    burger: 5.99,
    fries: 2.99,
    soda: 1.99
  },
  comboDiscount: 0.85
}

const bobsBurgers = new Restaurant(bobsProps);

console.log("Before setting combo:", bobsBurgers.comboPrice)

bobsBurgers.combo = [bobsBurgers.menu.burger, bobsBurgers.menu.fries]

console.log("After setting combo:", bobsBurgers.comboPrice)