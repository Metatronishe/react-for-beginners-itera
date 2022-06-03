import { Component, ReactNode } from "react";

class Contacts extends Component<{data: string[]}> {
    render(): ReactNode {
        return (
            <div className="data-contacts">
                {this.props.data.map((item) => {
                    return <span key={item}>{item}</span>
                })}
            </div>
        )
    }
}

export default Contacts;