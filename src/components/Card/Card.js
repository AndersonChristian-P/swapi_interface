import React, { Component } from "react"

class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: this.props.data
    }
  }

  render() {

    const card = this.state.items.map((item, i) => {
      return <div>

      </div>
    }

    )

    return (
      <div>
        {card}
      </div>
    )
  }
}

export default Card