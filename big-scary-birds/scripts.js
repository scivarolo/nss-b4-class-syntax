class Bird {

  constructor(props) {
    this.name = props.name
    this.height = props.height
    this.weight = props.weight
    this.speed = props.speed
    this.speedType = props.speedType
    this.isExtinct = props.isExtinct
    this.flightless = true
  }

  toString() {
    let p = document.createElement("p")
    p.textContent = `The ${this.name} is a big, scary bird that stands up to ${this.height} feet tall and can ${this.speedType} over ${this.speed} mph!`
    document.querySelector('body').appendChild(p);
  }

}

let ostrichProps = {
  name: "Ostrich",
  height: 6.9,
  weight: 346,
  speed: 43,
  speedType: "run",
  isExtinct: false
}

const ostrich = new Bird(ostrichProps)

let southernCassowaryProps = {
  name: "Southern Cassowary",
  height: 5.1,
  weight: 190,
  speed: 500,
  speedType: "run",
  isExtinct: false
}

const southernCassowary = new Bird(southernCassowaryProps)

let kingPenguinProps = {
  name: "King Penguin",
  height: 3,
  weight: 44,
  speed: 4,
  speedType: "swim",
  isExtinct: false
}

const kingPenguin = new Bird(kingPenguinProps)

ostrich.toString()
southernCassowary.toString()
kingPenguin.toString()


