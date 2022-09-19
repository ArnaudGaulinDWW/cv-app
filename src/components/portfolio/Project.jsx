import React, { Component } from 'react'

export default class Project extends Component {
    state ={
        showInfo: false
    }
    handleInfo = () => {
      this.setState({
        showInfo:!this.state.showInfo
      })
    }

  render() {
    let {name, languagesIcons, source, info, picture, status} =this.props.item;



    return (
      <div className="project">
        <div className="icons">
            {languagesIcons.map(icon => 
                <i className={icon} key={icon}></i> 
            )}
            <h4 className='status'>{status}</h4>
        </div>
        <h3>{name}</h3>
        <img src={picture} alt="presentation du projet" onClick={this.handleInfo}/>
        <span className='infos'>
            <i className='fas fa-plus-circle' onClick={this.handleInfo}></i>
        </span>
        
        {
            this.state.showInfo && (
                <div className="showInfos">
                    <div className="infosContent">
                        <div className="head">
                        <h2>{name}</h2>
                        <div className="sourceCode">
                            <a href={source} rel="noopener noreferrer" className="button" target="blank">Source</a>
                        </div>
                        </div>

                        <p className="text">{info}</p>
                        <div className="button return" onClick={this.handleInfo}>Retourner sur la page</div>
                    </div>
                </div>
            )
        }
      </div>
    );
  }
}
