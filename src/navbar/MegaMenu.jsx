import React, {Component} from 'react';


export class MegaMenu extends Component {
    render() {
        let k = 0; //key value, please make it random and unique
        const {title, data} = this.props;
        return (
            <div className="menu-item border-left-0 text-left">
                <h5>{title}</h5>
                <ul>
                    {Object
                        .keys(data)
                        .map(l => <li key={k++/*key value, please make it random and unique*/}>
                            <a href={data[l].url} className="menu-list-item d-flex align-items-center">
                                <div className="menu-icon">
                                    <img src={data[l].img} className="img-fluid" alt=""/>
                                </div>
                                <div className="menu-desc">
                                    <h4>{data[l].title}</h4>
                                    <p>{data[l].details}</p>
                                </div>
                            </a>
                        </li>)}
                </ul>
            </div>

        )
    }
}

export default MegaMenu
