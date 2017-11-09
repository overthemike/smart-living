import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu fixed="top" pointing secondary>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} />
        <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}

export default Header
