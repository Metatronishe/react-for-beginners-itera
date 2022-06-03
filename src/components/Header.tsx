import { Component, ReactNode } from "react";

class Header extends Component<{headerTitle: string}> {
    render(): ReactNode {
        return (
            <header className="App-header">{this.props.headerTitle}</header>
        )
    }
}

export default Header;